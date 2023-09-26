import Image from 'next/image'
import styles from './styles.module.scss'



const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>Bubble Coffe</h1>
        <div className={styles.line}></div>
        <p className='dark-bg'>Se você busca um momento de tranquilidade em meio à agitalção do dia a dia, venha conhecer a Bubble Coffe. Nosso espaço foi cuidadosamente projetado para proporcionar uma experiência única, em sintonia com a natureza.
        </p>
        <button className='btn btn-primary'><a href="#products">Conheça</a></button>
      </div>
      <Image src='/leaf1.png' alt='galho de folhas' width={320} height={460} className={styles.leaf1} />

      <Image src='/flower.png' alt='Rosa branca' width={260} height={260} className={styles.flower} />

      <Image src='/coffee.png' alt='sementes de café' width={260} height={260} className={styles.coffee} />

      <Image src='/leaf2.png' alt='ramo de matos' width={400} height={520} className={styles.leaf2} />
    </header>
  )
}

export default Header