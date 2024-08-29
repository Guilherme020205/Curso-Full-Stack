
import Link from "next/link";
import styles from "../page.module.scss";
import logoImg from '/public/logo.svg';
import Image from 'next/image';
import {api} from "@/services/api";
import {redirect} from "next/navigation";



export default function Signup() {
    
    async function handleRegister(formData: FormData){
        "use server"
        const name = formData.get("name")
        const email = formData.get("email")
        const password = formData.get("password")

        if(name === "" || email === "" || password === ""){
            console.log("PREENCHA TODOS OS CAMPOS")
            return;
        }

        try{
            await api.post("/users", {
                name,
                email,
                password
            })
        }catch(err){
            console.log("erro")
            console.log(err)
        }
        redirect("/")
    }

    return (
        <>
            <div className={styles.containerCenter}>
                <Image
                    src={logoImg}
                    alt="Logo Pizzaria"
                />

                <section className={styles.login}>
                    <h1>Criando sua conta</h1>

                    <form action={handleRegister}>
                        <input
                            className={styles.input}
                            type="text"
                            name="name"
                            required
                            placeholder="Digite seu nome..." />

                        <input
                            className={styles.input}
                            type="email"
                            name="email"
                            required
                            placeholder="Digite seu email..." />

                        <input
                            className={styles.input}
                            type="password"
                            name="password"
                            required
                            placeholder="*************" />

                        <button className={styles.button} type="submit">
                            Cadastrar
                        </button>
                    </form>

                    <Link href="/" className={styles.text}>Já possui uma conta? Login</Link>

                </section>
            </div >
        </>
    )
}