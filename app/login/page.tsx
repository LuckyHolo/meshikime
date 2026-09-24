"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { mockUsers } from "@/src/data/mockdata";
import styles from "./login.module.css";

const AUTH_STORAGE_KEY = "meshitaku-authenticated";

export default function LoginPage() {
  const router = useRouter();
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") || "").trim();
    const password = String(formData.get("password") || "");

    if (!email || !password) {
      setError("メールアドレスとパスワードを入力してください。");
      return;
    }

    if (!isRegistering) {
      const user = mockUsers.find((mockUser) => mockUser.email === email && mockUser.password === password);
      if (!user) {
        setError("メールアドレスまたはパスワードが正しくありません。");
        return;
      }
    }

    localStorage.setItem(AUTH_STORAGE_KEY, "true");
    window.dispatchEvent(new Event("meshitaku-auth-change"));
    router.push("/");
  };

  const switchMode = (registering: boolean) => {
    setIsRegistering(registering);
    setError("");
  };

  return (
    <main className={styles.page}>
      <Link href="/" className={styles.logo}>meshitaku<span>.</span></Link>
      <section className={styles.panel} aria-labelledby="login-title">
        <p className={styles.eyebrow}>{isRegistering ? "Get started" : "Welcome back"}</p>
        <div className={styles.modeSwitch} role="tablist" aria-label="認証方法">
          <button type="button" role="tab" aria-selected={!isRegistering} className={!isRegistering ? styles.modeActive : ""} onClick={() => switchMode(false)}>ログイン</button>
          <button type="button" role="tab" aria-selected={isRegistering} className={isRegistering ? styles.modeActive : ""} onClick={() => switchMode(true)}>新規登録</button>
        </div>
        <h1 id="login-title">{isRegistering ? "アカウントを作成" : "ログイン"}</h1>
        <p className={styles.lead}>{isRegistering ? "メールアドレスで簡単に始められます。" : "あなたの食事選びを、今日もサポートします。"}</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="email">メールアドレス</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
          <label htmlFor="password">パスワード</label>
          <input id="password" name="password" type="password" autoComplete="current-password" placeholder="••••••••" />
          {error && <p className={styles.error} role="alert">{error}</p>}
          <button type="submit" className={styles.submit}>{isRegistering ? "メールで登録する" : "ログイン"} <span aria-hidden="true">→</span></button>
        </form>
        <p className={styles.back}><Link href="/">ホームへ戻る</Link></p>
      </section>
    </main>
  );
}