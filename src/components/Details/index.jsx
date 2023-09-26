import Image from 'next/image'
import styles from './styles.module.scss'


const Details = () => {
  return (
    <section className={styles.details}>
      <div className={styles.roast}>
        <h2>Experimente os diferentes tipos de torra</h2>
        <div className={styles.types}>
          <span className={styles.light} />
          <span className={styles.medium} />
          <span className={styles.dark} />
        </div>
      </div>
      <Image src='/coffee2.png' alt='café' width={340} height={225} />
      <div className={styles['card-wrapper']}>
        <div className={styles.card}>
          <h2>Bubble Coffe</h2>
          <div className={styles.infos}>
            <h3>Endereço</h3>
            <h4>AV. Paulista, n°1001 / São Paulo</h4>
          </div>
          <div className={styles.infos}>
            <h3>Funcionamento</h3>
            <h4>
              <span>Segunda a Sexta: 09:00 às 18:00</span>
              <span>Sábado: 09:00 às 15:00</span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details