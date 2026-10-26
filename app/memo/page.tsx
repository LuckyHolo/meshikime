"use client";

import { useState } from "react";
// 💡 LuckyHoloさんが作ってくれた本物のモックデータをそのままインポート！
import { mockWishlist, mockRecipes } from "@/src/data/mockdata";
import styles from "./memo.module.css";

type WishlistItem = {
  id: string;
  type: string;
  targetName: string;
  addedAt: string;
  memo: string;
};

export default function MemoPage() {
  // 💡 あなたのモックデータ（mockWishlist）をそのまま初期状態にセット！
  const [wishlist, setWishlist] = useState<WishlistItem[]>(mockWishlist);
  const [inputFood, setInputFood] = useState("");

  // メモ（Wishlist）に新しく料理名をストックする関数
  const addWishlist = (name: string, customMemo: string = "") => {
    if (!name.trim()) return;
    if (wishlist.some(item => item.targetName === name)) return; // 重複防止

    const newItem: WishlistItem = {
      id: `wish-${Date.now()}`,
      type: "recipe", // 料理名ストックなのでrecipe扱い
      targetName: name,
      addedAt: new Date().toISOString().split('T')[0], // 2026-09-24
      memo: customMemo || "食べたいものストックに追加しました。"
    };

    setWishlist([newItem, ...wishlist]);
    setInputFood("");
  };

  // メモを削除する関数
  const deleteWishlist = (id: string) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <main className={styles.main__wrapper}>
      {/* ヘッダーセクション */}
      <div className={styles["main__wrapper-header"]}>
        <h1 className={styles["main__wrapper-title"]}>📝 食べたいものメモ</h1>
        <p className={styles["main__wrapper-subtitle"]}>
          「今日何食べたい？」と思った時のために、自分の食べたい料理名だけをシンプルにストックしておく場所です。
        </p>
      </div>

      {/* コンテンツレイアウト */}
      <div className={styles["main__wrapper-content"]}>
        
        {/* 左側：定番料理1クリック登録 ＆ 自由入力 */}
        <div className={styles.sidebar__section}>
          <div className={styles["sidebar__section-quick"]}>
            <h2 className={styles["sidebar__section-title"]}>👇 タップで1秒ストック！</h2>
            <p className={styles["sidebar__section-desc"]}>レシピデータから人気のメニュー</p>
            
            <div className={styles["sidebar__section-list"]}>
              {/* 💡 あなたが用意してくれたレシピデータ（mockRecipes）のタイトルをボタンに活用！ */}
              {mockRecipes.map((recipe) => (
                <button
                  key={recipe.id}
                  onClick={() => addWishlist(recipe.title, `${recipe.category}・調理時間目安: ${recipe.cookingTime}`)}
                  className={styles["sidebar__section-btn"]}
                >
                  <div className={styles["sidebar__section-btn-info"]}>
                    <span className={styles["sidebar__section-btn-name"]}>{recipe.title}</span>
                  </div>
                  <span className={styles["sidebar__section-btn-icon"]}>➕</span>
                </button>
              ))}
            </div>
          </div>

          {/* 自由入力エリア */}
          <div className={styles["sidebar__section-input-block"]}>
            <h3 className={styles["sidebar__section-input-label"]}>ピンポイントで料理名をメモする</h3>
            <div className={styles["sidebar__section-form"]}>
              <input
                type="text"
                value={inputFood}
                onChange={(e) => setInputFood(e.target.value)}
                placeholder="例: パスタ、うどん、オムライスなど..."
                className={styles["sidebar__section-input"]}
              />
              <button
                onClick={() => addWishlist(inputFood)}
                className={styles["sidebar__section-submit"]}
              >
                追加
              </button>
            </div>
          </div>
        </div>

        {/* 右側：現在の食べたいものメモ一覧 */}
        <div className={styles.list__section}>
          <div className={styles["list__section-header"]}>
            <h2 className={styles["list__section-title"]}>
              🔥 今の食べたいものストック（{wishlist.length}件）
            </h2>
            {wishlist.length > 0 && (
              <span className={styles["list__section-badge"]}>
                🎰 ルーレットの弾 装填中
              </span>
            )}
          </div>

          {wishlist.length === 0 ? (
            <div className={styles["list__section-empty"]}>
              まだメモがありません。左のボタンをタップして「食べたい欲」を貯めよう！
            </div>
          ) : (
            <div className={styles["list__section-container"]}>
              {wishlist.map((item) => (
                <div key={item.id} className={styles.card__item}>
                  <div className={styles["card__item-body"]}>
                    <p className={styles["card__item-title"]}>{item.targetName}</p>
                    {item.memo && <p className={styles["card__item-comment"]}>{item.memo}</p>}
                    <span className={styles["card__item-date"]}>ストックした日: {item.addedAt}</span>
                  </div>
                  <button
                    onClick={() => deleteWishlist(item.id)}
                    className={styles["card__item-delete"]}
                    title="削除"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </main>
  );
}
