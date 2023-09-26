import Link from 'next/link'
import styles from './styles.module.scss'
import Logo from '@/UI/Logo'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

const links = [
  { url: '#products', text: 'Produtos' },
  { url: '#about', text: 'Sobre' },
  { url: '#social', text: 'Social' },
  { url: '#depoimentos', text: 'Depoimentos' },

]

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false)

  function toggleMobile() {
    setIsMobile((state) => !state)
  }

  const renderLinks = links.map((link, index) => (
    <li key={index}>
      <Link href={link.url}>
        {link.text}
      </Link>
    </li>
  ))

  return (
    <section className={styles.navbar}>
      <div className={styles.desktop}>
        <nav className={styles.navigation}>
          <ul>
            {renderLinks.slice(0, 2)}
          </ul>
        </nav>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav className={styles.navigation}>
          <ul>
            {renderLinks.slice(2, 4)}
          </ul>
        </nav>
      </div>
      {/* Menu mobile */}
      <div className={`${styles.mobile} ${isMobile ? styles.active : ''}`}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <GiHamburgerMenu onClick={toggleMobile} className={styles.burguer} />
        <nav className={styles['mobile-navigation']}>
          <AiOutlineClose onClick={toggleMobile} className={styles.close} />
          <ul>{renderLinks}</ul>
        </nav>
      </div>
    </section>
  )
}

export default NavBar