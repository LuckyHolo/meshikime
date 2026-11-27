import React from 'react'
import styles from './memo.module.css'

function page() {
    return (
        <div className={styles.memo__wrapper}>
            <div className={styles.memo__title}>
                <h1>食べたいものメモ</h1>
                <p>食べたいもの、お店などをメモして一覧で確認することが出来ます。</p>
            </div>

            {/* 1. 入力フォームの骨組み */}
            <div className={styles.memo__main}>
                <section className={styles.memo__form}>
                    <input type="text" placeholder="食べたいもの・気になるお店" className={styles.form__text} />
                    <button type="button" className={styles.form__button}>追加</button>
                </section>

                {/* 2. 一覧表示の骨組み */}
                <section className={styles.list__section}>
                    <h2 className={styles.list__heading}>メモ一覧</h2>
                    <ul className={styles.memo__list}>

                        <li className={styles.list__item}>
                            <span className={styles.list__text}>濃厚味噌ラーメン</span>
                            <button type="button" className={styles.list__delete}>
                                削除
                            </button>
                        </li>
                        <li className={styles.list__item}>
                            <span className={styles.list__text}>駅前のここいち</span>
                            <button type="button" className={styles.list__delete}>
                                削除
                            </button>
                        </li>
                        <li className={styles.list__item}>
                            <span className={styles.list__text}>豚の生姜焼き</span>
                            <button type="button" className={styles.list__delete}>
                                削除
                            </button>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default page