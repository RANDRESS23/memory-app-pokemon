import logoRandress from '../../assets/img/logo-randress.png'
import { FaGithub } from 'react-icons/fa'
import styles from './Header.module.css'

export default function Header () {
  return (
    <div className={styles.Header}>
      {/* <img src={logoRandress} alt='logo-randress' /> */}
      <div className={styles.TitleContainer}>
        <div className={styles.Title}>Memory App</div>
        <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif' alt='logo-randress' className={styles.Charizard} />
      </div>
      <a href='https://github.com/RANDRESS23/memory-app-pokemon' target='__blank'>
        <FaGithub className={styles.IconGitHub} />
      </a>
    </div>
  )
}
