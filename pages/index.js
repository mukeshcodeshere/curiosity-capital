import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Curiosity Capital Management</title>
        <meta name="description" content="Global macro and options trading hedge fund founded by Mukesh." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className={styles.header}>
        <h1>Curiosity Capital Management</h1>
        <p>Global Macro Hedge Fund</p>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>About</h2>
          <p>
            Curiosity Capital Management is a research-driven hedge fund specializing in global macro strategies and options trading.
            The firm was founded by Mukesh, a former quant at GIC and currenntly working at a a proprietary commodities trading firm.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Strategy</h2>
          <p>
            We integrate macroeconomic research, systematic modeling, and options strategies across global markets, including equities, rates, commodities, and currencies.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Founder</h2>
          <p>
          Mukesh has a deep interest in the game theory of trading and the mathematics behind markets, shaped by his experience in quantitative finance.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Contact</h2>
          <p>Email: mukesh96official@gmail.com</p>
          <p>LinkedIn: <a href="https://linkedin.com/in/mukesh1996" target="_blank">Mukesh's Profile</a></p>
        </section>
      </main>

      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Curiosity Capital Management. All rights reserved.
      </footer>
    </div>
  )
}
