import styles from './Feature.module.css'

function Feature() {
    return (
        <div>
            <section className={styles.feature__section} id="recipes" aria-labelledby="recipe-detail-title">
                <div className={styles.feature__title}>
                    <h2>meshitakuでできること。</h2>
                </div>

                <div className={styles.feature__white_box}>
                    <div className={styles.feature__header}>
                        <h2 id="recipe-detail-title" className={styles.section__title}>
                            家にある食材だけで、<br />特別なレシピをAIが自動生成。
                        </h2>
                        <p className={styles.visual__text}>
                            「せっかくレシピを検索したのに、足りない食材があってまたスーパーに行く羽目になった」<br />という経験はありませんか？
                        </p>
                    </div>

                    <div className={styles.point__grid}>
                        <div className={styles.point__item}>
                            <h4>完全完結型レシピ</h4>
                            <p>AIは「指定された食材と、基本の調味料だけ」で完成するメニューしか提案しません。</p>
                        </div>
                        <div className={styles.point__item}>
                            <h4>15分以内の時短設計</h4>
                            <p>仕事終わりでもパパッと作れる、簡単な調理工程のメニューを中心に組み立てます。</p>
                        </div>
                        <div className={styles.point__item}>
                            <h4>栄養バランス自動調整</h4>
                            <p>「昨日が外食で脂っこかったから、今日は野菜メインの副菜に」など、AIがサポートします。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. 外食提案の特徴（スマホ枠なし・大きな白い枠） */}
            <section className={styles.feature__section} id="mood-title" aria-labelledby="visual-title-text">
                <div className={styles.feature__white_box}>
                    <div className={styles.feature__header}>
                        <h2 id="visual-title-text" className={styles.section__title}>
                            迷う余地のない、メモ機能
                        </h2>
                        <p className={styles.visual__text}>
                            食べたいもの、お店をメモに記録しておくことで<br />レシピや食事選びの時に参考にしてもらえます。<br />
                            最近食べたいものやお店をメモするだけの簡単操作です。
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.feature__section} id="mood-title" aria-labelledby="visual-title-text">
                <div className={styles.feature__white_box}>
                    <div className={styles.feature__header}>
                        <h2 id="visual-title-text" className={styles.section__title}>
                            気分以外でも悩まない
                        </h2>
                        <p className={styles.visual__text}>
                            面倒は食事は、たまには運で<br />
                            ルーレット機能を使うことでメモに書いてある食事から決めてくれます。<br />
                            何も考えたくないときにオススメです。
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Feature