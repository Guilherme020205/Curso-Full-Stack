"use client"

import { getCookieClient } from "@/lib/cookieClient";
import { api } from "@/services/api";
import { createContext, ReactNode, use, useState } from "react"


interface OrderItemProps{
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
        name: string;
        draf: string;
        status: string;
    }

}

type OrderContextData = {
    isOpen: boolean;
    onrequestOpen: (order_ide: string) => void;
    onrequestClose: () => void;
}

type OrderProviderProps = {
    children: ReactNode;
}

export const OrderContext = createContext({} as OrderContextData)

export function OrderProvider({ children } : OrderProviderProps){
    
    const [ isOpen, setIsOpen] = useState(false);
    const [order, setOrdr] = useState<OrderItemProps[]>([])

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
        
        console.log(response.data)

        setIsOpen(true);
    }
    function onrequestClose(){
        setIsOpen(false);
    }

    return(
        <OrderContext.Provider
            value={{
                isOpen,
                onrequestOpen,
                onrequestClose
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}