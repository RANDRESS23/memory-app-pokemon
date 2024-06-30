import loveIcon from '../../assets/img/love-icon.webp'
import styles from './Footer.module.css'

export default function Footer () {
  return (
    <div className={styles.Container}>
      <footer className={styles.Footer}>
        <div className={styles.Text}>Made with the</div>
        <img src={loveIcon} alt='love-icon' className={styles.LoveIcon} />
        <div className={styles.Text}>by Raúl Quimbaya</div>
      </footer>
    </div>
  )
}
