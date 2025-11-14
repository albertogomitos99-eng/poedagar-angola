import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Poedagar Angola — Relógios Originais</title>
        <meta name="description" content="Poedagar Angola — Relógios originais com envio nacional. Confira os mais vendidos e promoções." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.container}>
        <header className={styles.header}>
          <div className={styles.brand}>
            <h1>Poedagar Angola</h1>
            <p className={styles.tagline}>Relógios originais — Envio para toda Angola</p>
          </div>
          <nav className={styles.nav}>
            <a href="#mais-vendidos">Mais vendidos</a>
            <a href="#sobre">Sobre</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </header>

        <section id="hero" className={styles.hero}>
          <div className={styles.heroText}>
            <h2>Estilo. Qualidade. Confiança.</h2>
            <p>Descubra coleções selecionadas de relógios Poedagar — desde modelos clássicos até desportivos.</p>
            <a className={styles.cta} href="#mais-vendidos">Ver produtos</a>
          </div>
          <div className={styles.heroImages}>
            <img src="/watch1.jpg" alt="Relógio Poedagar 1" />
          </div>
        </section>

        <section id="mais-vendidos" className={styles.products}>
          <h2>Mais Vendidos</h2>
          <div className={styles.grid}>
            <article className={styles.card}>
              <img src="/watch1.jpg" alt="Poedagar Clássico" />
              <h3>Poedagar Clássico</h3>
              <p>Elegância minimalista — ideal para uso diário.</p>
              <p className={styles.price}>Preço: 15.000 Kz</p>
            </article>

            <article className={styles.card}>
              <img src="/watch2.jpg" alt="Poedagar Moderno" />
              <h3>Poedagar Moderno</h3>
              <p>Design contemporâneo com resistência à água.</p>
              <p className={styles.price}>Preço: 16.500 Kz</p>
            </article>

            <article className={styles.card}>
              <img src="/watch3.jpg" alt="Poedagar Desportivo" />
              <h3>Poedagar Desportivo</h3>
              <p>Robusto, leve e perfeito para atividade física.</p>
              <p className={styles.price}>Preço: 18.800 Kz</p>
            </article>
          </div>
        </section>

        <section id="sobre" className={styles.about}>
          <h2>Sobre Poedagar Angola</h2>
          <p>Somos revendedores autorizados de relógios Poedagar, oferecendo garantia e envio seguro para todo o país.</p>
        </section>

        <footer id="contacto" className={styles.footer}>
          <div>
            <h4>Contacto</h4>
            <p>Telefone: +244 9XX XXX XXX</p>
            <p>Email: vendas@poedagar.ao</p>
          </div>
          <p className={styles.copyright}>© 2025 Poedagar Angola — Todos os direitos reservados</p>
        </footer>
      </main>
    </>
  )
}
