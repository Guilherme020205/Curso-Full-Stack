"use client"
import { use } from "react"
import styles from "./styles.module.scss"
import { X } from "lucide-react"
import { OrderContext } from "@/providers/order"
import { calculateTotalOrder } from "@/lib/helper"
import Image from "next/image"

export function Modalorder() {

    const { onrequestClose, order, finishOrder } = use(OrderContext);

    async function handleFinishOrder() {
        finishOrder(order[0].order.id)
    }

    return (
        <dialog className={styles.dialogContainer}>
            <section className={styles.dialogContent}>

                <button
                    className={styles.dialogBack}
                    onClick={onrequestClose}
                >
                    <X size={80} color="#FF4F4b" />
                </button>

                <article className={styles.container}>

                    <h2>Detalhes do pedido</h2>

                    <span className={styles.table} >

                        Mesa: <b>{order[0].order.table}</b>

                    </span>

                    {order[0].order.name && (

                        <span className={styles.table} >

                            Nome na mesa: <b>{order[0].order.name}</b>

                        </span>
                    )}

                    {order.map(item => (
                        <section className={styles.item} key={item.id}>
                            <Image
                                src={item.product.banner}
                                alt="Foto Produto"
                                width={60} 
                                height={60} />
                            <span>
                                Qtd: {item.amount} - <b>{item.product.name}</b> - R$ {parseFloat(item.product.price) * item.amount}
                            </span>
                            <span className={styles.description}>{item.product.description}</span>
                        </section>

                    ))}

                    <h3 className={styles.total}>Valor total do pedido: R$ {calculateTotalOrder(order)}</h3>

                    <button className={styles.butonOrder} onClick={handleFinishOrder}>

                        Concluir Pedido

                    </button>

                </article>
            </section>
        </dialog>
    )
}