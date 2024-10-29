"use client"
import { use } from "react"
import styles from "./styles.module.scss"
import { X } from "lucide-react"
import { OrderContext } from "@/providers/order"

export function Modalorder(){

    const { onrequestClose } = use(OrderContext); 

    return(
        <dialog className={styles.dialogContainer}>
            <section className={styles.dialogContent}>
                <button 
                    className={styles.dialogBack}
                    onClick={onrequestClose}
                >
                    <X size={80} color="#FF4F4b"/>
                </button>
                <article className={styles.container}>
                    <h2>Detalhes do pedido</h2>
                    <span className={styles.table} >
                        Mesa: <b>36</b>
                    </span>
                    
                    <section className={styles.item}>
                        <span>1 - <b>Coca-Cola lata</b></span>
                        <span className={styles.description}>Coca cola com gelo e limao </span>
                    </section>

                    <button className={styles.butonOrder}>Concluir Pedido</button>

                </article>
             </section>
        </dialog>
    )
}