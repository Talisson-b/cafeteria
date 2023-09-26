import SocialLinks from '@/UI/SocialLinks/SocialLinks'
import styles from './styles.module.scss'
import Image from 'next/image'

const Social = () => {

  return (
    <section className={styles.social} id='social'>
      <div className={styles.content}>
        <h2 className='title dark-bg'>Descubra seu café favorito</h2>
        <p className='dark-bg'>
          Cada xicará é preparada com ingredientes selecionados e muito carinho, para que você possa saborear cada momento. Venha nos visitar e desfrute de um café de qualidade enquanto se reconecta com o que é essencial.
        </p>
        <SocialLinks />
      </div>
      <Image className={styles.image} src='/social.png' height={540} width={380} alt='Cafe e plantas' />
    </section>
  )
}

export default Social