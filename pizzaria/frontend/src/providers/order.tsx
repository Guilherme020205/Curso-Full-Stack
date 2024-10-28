"use client"

import { createContext, ReactNode, use, useState } from "react"

type OrderContextData = {
    isOpen: boolean;
    onrequestOpen: () => void;
    onrequestClose: () => void;
}

type OrderProviderProps = {
    children: ReactNode;
}

export const OrderContext = createContext({} as OrderContextData)

export function OrderProvider({ children } : OrderProviderProps){
    
    const [ isOpen, setIsOpen] = useState(false);
    
    function onrequestOpen(){
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