"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { mockRestaurants, mockWishlist } from "@/src/data/mockdata";
import styles from "./roulette.module.css";

export default function RoulettePage() {
    // モード管理 ('wishlist': メモから選ぶ, 'condition': 条件から選ぶ)
    const [mode, setMode] = useState<"wishlist" | "condition">("wishlist");

    // 条件選択の状態（メモを使わない場合）
    const [selectedMood, setSelectedMood] = useState<string>("all");
    const [selectedBudget, setSelectedBudget] = useState<string>("all");

    // ルーレットの状態管理
    const [displayText, setDisplayText] = useState("???");
    const [isRolling, setIsRolling] = useState(false);
    const [resultItem, setResultItem] = useState<any>(null);

    // 1. ルーレットの弾（選択肢）を決定するロジック
    const getCandidates = () => {
        if (mode === "wishlist") {
            // メモモード：mockWishlistの「 targetName（料理名・店名）」をそのまま弾にする
            return mockWishlist.map((item) => ({
                name: item.targetName,
                detail: item.memo,
                raw: item,
            }));
        } else {
            // 条件設定モード：mockRestaurantsから条件に合うお店をフィルタリング
            let filtered = mockRestaurants;

            if (selectedMood !== "all") {
                filtered = filtered.filter((rest) => rest.moodTags.includes(selectedMood));
            }
            if (selectedBudget !== "all") {
                filtered = filtered.filter((rest) => rest.budget.includes(selectedBudget));
            }

            return filtered.map((rest) => ({
                name: `${rest.name} (${rest.branch})`,
                detail: `${rest.category} 🌟 おすすめ: ${rest.recommendedMenu}`,
                raw: rest,
            }));
        }
    };

    const candidates = getCandidates();

    // 2. ルーレット起動（スロット演出）
    const startRoulette = () => {
        if (candidates.length === 0) return;
        if (isRolling) return;

        setIsRolling(true);
        setResultItem(null);
        let counter = 0;

        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * candidates.length);
            setDisplayText(candidates[randomIndex].name);
            counter++;

            // 15回シャッフルしたらストップ（約1.5秒）
            if (counter > 15) {
                clearInterval(interval);

                const finalIndex = Math.floor(Math.random() * candidates.length);
                const selected = candidates[finalIndex];

                setDisplayText(selected.name);
                setResultItem(selected);
                setIsRolling(false);
            }
        }, 100);
    };

    // モードや条件が変わったら表示をリセット
    useEffect(() => {
        setDisplayText("???");
        setResultItem(null);
    }, [mode, selectedMood, selectedBudget]);

    return (
        <div>
            <Header />
            <main className={styles.roulette__wrapper}>
                {/* ヘッダーセクション */}
                <div className={styles["roulette__wrapper-header"]}>
                    <h1 className={styles["roulette__wrapper-title"]}>🎰 メモルーレット</h1>
                    <p className={styles["roulette__wrapper-subtitle"]}>
                        今日のメシをガツンと決定！お好みの抽選モードを選んでレバーを叩こう。
                    </p>
                </div>

                {/* モード切り替えタブ */}
                <div className={styles.tab__container}>
                    <button
                        onClick={() => setMode("wishlist")}
                        className={`${styles.tab__btn} ${mode === "wishlist" ? styles["tab__btn--active"] : ""}`}
                    >
                        📝 メモから決める
                    </button>
                    <button
                        onClick={() => setMode("condition")}
                        className={`${styles.tab__btn} ${mode === "condition" ? styles["tab__btn--active"] : ""}`}
                    >
                        🔍 条件から決める
                    </button>
                </div>

                {/* メインコンテンツ */}
                <div className={styles["roulette__wrapper-content"]}>

                    {/* 左側：サイドバー設定エリア */}
                    <div className={styles.sidebar__section}>
                        <h2 className={styles["sidebar__section-title"]}>現在のスロット設定</h2>

                        {mode === "wishlist" ? (
                            <div className={styles["sidebar__section-wishlist"]}>
                                <p className={styles["sidebar__section-desc"]}>
                                    あなたの「食べたいものメモ」から抽選します。
                                </p>
                                <div className={styles["sidebar__section-pool"]}>
                                    {mockWishlist.map((w) => (
                                        <div key={w.id} className={styles["sidebar__section-pool-item"]}>
                                            🎯 {w.targetName}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            // 条件設定モードのポチポチ選択ボタン
                            <div className={styles["sidebar__section-filters"]}>
                                <div className={styles["filter__block"]}>
                                    <label className={styles["filter__block-label"]}>今の気分は？</label>
                                    <div className={styles["filter__block-grid"]}>
                                        {[
                                            { label: "すべて", value: "all" },
                                            { label: "🔥 ガッツリ", value: "ガッツリ" },
                                            { label: "🐟 さっぱり", value: "さっぱり" },
                                            { label: "🥬 ヘルシー", value: "ヘルシー" },
                                        ].map((mood) => (
                                            <button
                                                key={mood.value}
                                                onClick={() => setSelectedMood(mood.value)}
                                                className={`${styles["filter__block-btn"]} ${selectedMood === mood.value ? styles["filter__block-btn--active"] : ""}`}
                                            >
                                                {mood.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles["filter__block"]}>
                                    <label className={styles["filter__block-label"]}>予算目安</label>
                                    <div className={styles["filter__block-grid"]}>
                                        {[
                                            { label: "すべて", value: "all" },
                                            { label: "¥1,000〜", value: "¥1,000" },
                                            { label: "¥900〜", value: "¥900" },
                                        ].map((budget) => (
                                            <button
                                                key={budget.value}
                                                onClick={() => setSelectedBudget(budget.value)}
                                                className={`${styles["filter__block-btn"]} ${selectedBudget === budget.value ? styles["filter__block-btn--active"] : ""}`}
                                            >
                                                {budget.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className={styles["sidebar__section-footer"]}>
                            現在の対象数: <span className={styles["sidebar__section-count"]}>{candidates.length}</span> 件
                        </div>
                    </div>

                    {/* 右側：メインスロットマシーン */}
                    <div className={styles.machine__section}>
                        {/* スロットのディスプレイ液晶 */}
                        <div className={styles["machine__section-display"]}>
                            <span className={`${styles["machine__section-text"]} ${isRolling ? styles["machine__section-text--rolling"] : ""}`}>
                                {displayText}
                            </span>
                        </div>

                        {/* レバー・ボタン */}
                        <button
                            onClick={startRoulette}
                            disabled={isRolling || candidates.length === 0}
                            className={`${styles["machine__section-trigger"]} ${candidates.length === 0 ? styles["machine__section-trigger--disabled"] : ""}`}
                        >
                            {isRolling ? "CHANCE..." : "PUSH (レバーを叩け)"}
                        </button>

                        {/* 結果詳細カード */}
                        {resultItem && (
                            <div className={styles.result__card}>
                                <span className={styles["result__card-badge"]}>本日の決定</span>
                                <h3 className={styles["result__card-title"]}>{resultItem.name}</h3>
                                <p className={styles["result__card-detail"]}>{resultItem.detail}</p>

                                {resultItem.raw?.mapUrl && (
                                    <a
                                        href={resultItem.raw.mapUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles["result__card-link"]}
                                    >
                                        🗺️ Googleマップで場所を確認する ➔
                                    </a>
                                )}
                            </div>
                        )}
                    </div>

                </div>
            </main>
        </div>
    );
}
