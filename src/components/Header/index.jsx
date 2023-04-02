import logoRandress from '../../assets/img/logo-randress.png'
import { FaGithub } from 'react-icons/fa'
import styles from './Header.module.css'

export default function Header () {
  return (
    <div className={styles.Header}>
      <img src={logoRandress} alt='logo-randress' />
      <a href='#'>
        <FaGithub className={styles.IconGitHub} />
      </a>
    </div>
  )
}
