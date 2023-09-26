import Logo from '@/UI/Logo'
import styles from './styles.module.scss'
import SocialLinks from '@/UI/SocialLinks/SocialLinks'

const year = new Date().getFullYear()
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.column1}>
          <h2><Logo /></h2>
          <h3 className='p'>Desfrute de um café de qualidade enquanto se conecta com o que é essencial
          </h3>
          <SocialLinks />
        </div>
        <div className={styles.column2}>
          <h2>Faça-nos uma Visita</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.084817389849!2d-46.65484648700592!3d-23.56539706165605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7940306f1%3A0x1befb07f56f03c6d!2sAv.%20Paulista%2C%201001%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001311-100!5e0!3m2!1spt-BR!2sbr!4v1695688090896!5m2!1spt-BR!2sbr" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
        <div className={styles.column3}>
          <h2 className='p'>Funcionamento</h2>
          <ul>
            <li>Segunda a Sexta: 09:00 às 18:00</li>
            <li>Sábado: 09:00 às 15:00</li>
            <li>(99)9999-9999</li>
            <li>cafebubble@gmail.com</li>
          </ul>
        </div>
      </div>
      <span>Bubble Coffee - Todos os direitos reservados {year}</span>
    </footer>
  )
}

export default Footer