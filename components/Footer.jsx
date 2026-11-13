import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer__wrapper}>
        <p className={styles.brand__mark}>meshitaku</p>
        <small className={styles.footer__text}>今日のごはんが、明日の楽しみになりますように。</small>
        <small className={styles.footer__copy}>© 2026 meshitaku</small>
    </footer>
  )
}

export default Footer