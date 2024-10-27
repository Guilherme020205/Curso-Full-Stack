import styles from "./styles.module.scss"
import { X } from "lucide-react"

export function Modalorder(){
    return(
        <dialog className={styles.dialogContainer}>
            <section className={styles.dialogContent}>
                <button className={styles.dialogBack}>
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