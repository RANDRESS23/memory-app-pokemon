import logoRandress from '../../assets/img/logo-randress.png'
import styles from './Header.module.css'

export default function Header () {
  return (
    <div className={styles.Header}>
      <img src={logoRandress} alt='logo-randress' />
      <button>a</button>
    </div>
  )
}
