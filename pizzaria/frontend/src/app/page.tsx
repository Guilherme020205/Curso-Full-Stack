import Link from "next/link";
import styles from "./page.module.scss";
import logoImg from '/public/logo.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className={styles.containerCenter}>
        <Image
          src={logoImg}
          alt="Logo Pizzaria"
        />

        <section className={styles.login}>
          <form>
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
              Acessar
            </button>
          </form>

          <Link href="/signup" className={styles.text}>Não possui uma conta? Cadastre-se</Link>

        </section>
      </div >
    </>
  );
}
