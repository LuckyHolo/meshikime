"use client"; // 状態（useState）を扱うため記述

import { useSyncExternalStore } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const AUTH_STORAGE_KEY = "meshitaku-authenticated";
const AUTH_CHANGE_EVENT = "meshitaku-auth-change";

const subscribeToAuth = (callback) => {
  window.addEventListener(AUTH_CHANGE_EVENT, callback);
  return () => window.removeEventListener(AUTH_CHANGE_EVENT, callback);
};

const getAuthSnapshot = () => localStorage.getItem(AUTH_STORAGE_KEY) === "true";
const getServerAuthSnapshot = () => false;

function Header() {
  const isLoggedIn = useSyncExternalStore(
    subscribeToAuth,
    getAuthSnapshot,
    getServerAuthSnapshot,
  );

  const handleAuthClick = () => {
    if (isLoggedIn) {
      const confirmLogout = window.confirm("ログアウト");
      if (confirmLogout) {
        localStorage.removeItem(AUTH_STORAGE_KEY);
        window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
      }
    }
  };

  return (
    <header className={styles.header}>
      <Link href="#hero-title" className={styles.logo} aria-label="meshitaku ホーム">
        <span className={styles.logo__mark}>m</span>
        <span className={styles.logo__name}>meshitaku<span>.</span></span>
      </Link>

      <nav className={styles.nav} aria-label="メインナビゲーション">
        <Link href="#hero-title" className={styles.nav__link_active}>ホーム</Link>
        <Link href="#feature-title">できること</Link>
        <Link href="#mood-title">気分から探す</Link>
        <Link href="#recipes">レシピ</Link>
      </nav>

      <div className={styles.actions}>
        {isLoggedIn ? (
          <>
            <Link href="/mypage" className={styles.auth__button}>マイページ</Link>
            <button onClick={handleAuthClick} className={`${styles.auth__button} ${styles.auth__button_logout}`}>
              ログアウト <span aria-hidden="true">←</span>
            </button>
          </>
        ) : (
          <Link href="/login" className={`${styles.auth__button} ${styles.auth__button_login}`}>
            ログイン <span aria-hidden="true">↗</span>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
