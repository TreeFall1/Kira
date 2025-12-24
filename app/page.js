import styles from "./page.module.scss";
import Image from "next/image";
import Snow from "@/app/components/snow";

export default function Home() {
  return (
      <main className={styles.wrapper}>
        <Snow />
        <div className={styles.card}>
          <h1 className={styles.title}>Приглашение</h1>
          <p className={styles.text}>
            В этот зимний вечер
            <br />
            я хочу пригласить тебя
            <br />
            на особенное свидание ✨
          </p>
          <div className={styles.gifContainer}>
            <img
                src="/girl-skate.gif"
                alt="Ты"
                className={styles.gif}

            />
            <Image src={'/serdce.png'} alt={'Мыы'} width={64} height={64} unoptimized={true} />
            <img
                src="/skating-ice-skate.gif"
                alt="Я"
                className={styles.gif}
                style={{paddingBottom: "16px"}}
            />
          </div>

          {/*<div className={styles.details}>*/}
          {/*  <p>📍 Тёплое место</p>*/}
          {/*  <p>🕯 Уютная атмосфера</p>*/}
          {/*  <p>☕ Горячий чай и разговоры</p>*/}
          {/*</div>*/}

          <button className={styles.button}>
            Скажи «да» 💙
          </button>
        </div>
      </main>
  );
}
