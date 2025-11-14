import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Poedagar Angola</h1>
        <p>Relógios originais Poedagar com envio para toda Angola</p>
      </header>

      <section className={styles.products}>
        <h2>Mais Vendidos</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <img src="/watch1.jpg" alt="Relógio Poedagar 1" />
            <h3>Poedagar Clássico</h3>
            <p>Preço: 19.500 Kz</p>
          </div>
          <div className={styles.card}>
            <img src="/watch2.jpg" alt="Relógio Poedagar 2" />
            <h3>Poedagar Luxo</h3>
            <p>Preço: 22.000 Kz</p>
          </div>
          <div className={styles.card}>
            <img src="/watch3.jpg" alt="Relógio Poedagar 3" />
            <h3>Poedagar Desportivo</h3>
            <p>Preço: 18.800 Kz</p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2025 Poedagar Angola – Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
