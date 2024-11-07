"use client"

import { getCookieClient } from "@/lib/cookieClient";
import { api } from "@/services/api";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, use, useState } from "react"
import { toast } from "sonner";


export interface OrderItemProps{
    id: string;
    amount: number;
    creted_at: string;
    order_id: string;
    product_id: string;
    product: {
        id: string;
        name: string;
        price: string;
        description: string;
        banner: string;
        category_id: string;
    };
    order:{
        id: string;
        table: string;
        name: null | string;
        draf: string;
        status: string;
    }

}

type OrderContextData = {
    isOpen: boolean;
    onrequestOpen: (order_ide: string) => Promise<void>;
    onrequestClose: () => void;
    order: OrderItemProps[];
    finishOrder: (order_id: string) => Promise<void>;
}

type OrderProviderProps = {
    children: ReactNode;
}

export const OrderContext = createContext({} as OrderContextData)

export function OrderProvider({ children } : OrderProviderProps){
    
    const [ isOpen, setIsOpen] = useState(false);
    const [order, setOrdr] = useState<OrderItemProps[]>([])
    const router = useRouter()

    async function onrequestOpen(order_id: string){
        console.log(order_id)
        
        const token = getCookieClient() 
        
        const response = await api.get("/order/detail", {
            headers: {
                Authorization: `Bearer ${token}`
            },

            params: {
                order_id: order_id
            }
        })
        
        setOrdr(response.data);
        setIsOpen(true);

    }
    function onrequestClose(){
        setIsOpen(false);
    }

    async function finishOrder(order_id: string) {

        const token = getCookieClient();
        
        const data = {
            order_id: order_id,
        }

        try{

            await api.put("/order/finish", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

        }catch(err){
            console.log(err)
            toast.error("Pedido com erro!")
            return;
        }

        toast.success("Pedido finalizado com sucesso!")
        router.refresh()
        setIsOpen(false)
        
    }

    return(
        <OrderContext.Provider
            value={{
                isOpen,
                onrequestOpen,
                onrequestClose,
                finishOrder,
                order
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}