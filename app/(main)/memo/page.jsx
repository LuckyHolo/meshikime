"use client";

import React, { useState } from "react";
import { mockWishlist } from "@/src/data/mockdata";
import styles from "./memo.module.css";

const STORAGE_KEY = "meshitaku-wishlist";

function Page() {
  const [text, setText] = useState("");
  // useEffectを使わず、最初の1回だけ安全に読み込む
  const [memos, setMemos] = useState(() => {
    if (typeof window === "undefined") return mockWishlist;
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return mockWishlist;
      }
    }
    return mockWishlist;
  });

  // 追加処理（状態更新と同時に localStorage へ保存）
  const handleAdd = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;

    const newMemo = {
      id: `wish-${Date.now()}`,
      type: "restaurant",
      targetName: trimmed,
      addedAt: new Date().toISOString().split("T")[0],
      memo: "",
    };

    const updated = [newMemo, ...memos];
    setMemos(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setText("");
  };

  // 削除処理（状態更新と同時に localStorage へ保存）
  const handleDelete = (id) => {
    const updated = memos.filter((item) => item.id !== id);
    setMemos(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return (
    <div className={styles.memo__wrapper}>
      <div className={styles.memo__title}>
        <h1>食べたいものメモ</h1>
        <p>食べたいもの、お店などをメモして一覧で確認することが出来ます。</p>
      </div>

      <div className={styles.memo__main}>
        {/* 1. 入力フォーム */}
        <form onSubmit={handleAdd} className={styles.memo__form}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="食べたいもの・気になるお店"
            className={styles.form__text}
          />
          <button type="submit" className={styles.form__button}>
            追加
          </button>
        </form>

        {/* 2. 一覧表示 */}
        <section className={styles.list__section}>
          <h2 className={styles.list__heading}>メモ一覧（{memos.length}件）</h2>
          <ul className={styles.memo__list}>
            {memos.map((item) => (
              <li key={item.id} className={styles.list__item}>
                <span className={styles.list__text}>{item.targetName}</span>
                <button
                  type="button"
                  onClick={() => handleDelete(item.id)}
                  className={styles.list__delete}
                >
                  削除
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Page;
