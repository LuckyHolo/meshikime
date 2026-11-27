import Link from "next/link";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo} aria-label="meshitaku ホーム">
        <span className={styles.logo__name}>meshitaku</span>
      </Link>

      <nav className={styles.nav} aria-label="メインナビゲーション">
        <a href="#home" className={styles.nav__text}>ホーム</a>
        <a href="#feature" className={styles.nav__text}>できること</a>
        <a href="#question" className={styles.nav__text}>よくある質問</a>
      </nav>

      <div className={styles.actions}>
        <Link href="/login" className={styles.auth__button}>
          使ってみる <span aria-hidden="true">→</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
