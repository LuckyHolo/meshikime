"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./register.module.css";
import Header from "@/components/Header";

const AUTH_STORAGE_KEY = "meshitaku-authenticated";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") || "").trim();
    const password = String(formData.get("password") || "");

    // バリデーションチェック
    if (!email || !password) {
      setError("メールアドレスとパスワードを入力してください。");
      return;
    }

    if (password.length < 6) {
      setError("パスワードは6文字以上で入力してください。");
      return;
    }

    // 新規登録の成功処理（ローカルストレージへ保存して認証状態にするダミー処理）
    localStorage.setItem(AUTH_STORAGE_KEY, "true");
    window.dispatchEvent(new Event("meshitaku-auth-change"));
    router.push("/");
  };

  return (
    <div>
      <Header />
      <main className={styles.page}>
        {/* ロゴ部分（ホームへのリンク） */}
        <Link href="/" className={styles.logo}>
          meshitaku<span>.</span>
        </Link>

        <section className={styles.panel} aria-labelledby="register-title">
          <p className={styles.eyebrow}>Get started</p>

          <h1 id="register-title">アカウントを作成</h1>
          <p className={styles.lead}>メールアドレスで簡単に始められます。</p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="email">メールアドレス</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
            />

            <label htmlFor="password">パスワード（6文字以上）</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder="••••••••"
            />

            {error && <p className={styles.error} role="alert">{error}</p>}

            <button type="submit" className={styles.submit}>
              メールで登録する <span aria-hidden="true">→</span>
            </button>
          </form>

          {/* 💡 フォームの真下にログイン画面への案内リンクを配置 */}
          <p className={styles.switchLink}>
            すでにアカウントをお持ちの方：<Link href="/login">ログインはこちら</Link>
          </p>

          <p className={styles.back}>
            <Link href="/">ホームへ戻る</Link>
          </p>
        </section>
      </main>
    </div>
  );
}
