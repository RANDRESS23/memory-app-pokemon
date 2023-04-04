import logoRandress from '../../assets/img/logo-randress.png'
import loveIcon from '../../assets/img/love-icon.png'
import styles from './Footer.module.css'

export default function Footer () {
  return (
    <div className={styles.Footer}>
      <div className={styles.Text}>Made with the</div>
      <img src={loveIcon} alt='love-icon' className={styles.LoveIcon} />
      <div className={styles.Text}>by</div>
      <img src={logoRandress} alt='logo-randress' className={styles.Logo} />
    </div>
  )
}
