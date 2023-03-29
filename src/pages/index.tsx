import Head from "next/head";

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Ig.News</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span> 👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get acess to all the publications <span>for $ 9.90 month</span>
          </p>
        </section>
        <img src="./images/Mulher.svg" alt="Girl Coding" />
      </main>
    </>
  );
}
