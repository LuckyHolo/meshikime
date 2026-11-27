import Link from "next/link";
import styles from "./AppHeader.module.css";

function AppHeader() {
  return (
    <header className={styles.header}>
      <Link href="/memo" className={styles.logo} aria-label="meshitaku メイン">
        <span className={styles.logo__name}>meshitaku</span>
      </Link>

      <nav className={styles.nav} aria-label="アプリ内ナビゲーション">
        <Link href="/memo" className={styles.nav__text}>
          食べたいものメモ
        </Link>
        <Link href="/roulette" className={styles.nav__text}>
          ルーレット
        </Link>
        <Link href="/mypage" className={styles.nav__text}>
          マイページ
        </Link>
      </nav>

      <div className={styles.actions}>
        <Link href="/" className={styles.logout__button}>
          ログアウト
        </Link>
      </div>
    </header>
  );
}

export default AppHeader;
