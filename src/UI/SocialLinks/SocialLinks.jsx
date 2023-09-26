import { RiFacebookFill, RiTwitterFill, RiInstagramLine } from 'react-icons/ri'
import styles from './SocialLinks.module.scss'
const socialLinks = [
  { url: '#', component: <RiFacebookFill /> },
  { url: '#', component: <RiTwitterFill /> },
  { url: '#', component: <RiInstagramLine /> },

]

const SocialLinks = () => {

  const renderLinks = socialLinks.map((link, index) => (
    <li key={index}><a href={link.url}>{link.component}</a></li>
  ))

  return (
    <ul className={styles.media}>
      {renderLinks}
    </ul>
  )
}

export default SocialLinks