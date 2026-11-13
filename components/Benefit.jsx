import styles from './Benefit.module.css'

function Benefit() {
    return (
        <section className={styles.benefit__section} id="feature-title" aria-labelledby="benefit-title-text">
            <div className={styles.section__heading}>
                <h2 id="benefit-title-text" className={styles.section__title}>
                    meshitakuを使うと<br />毎日の「食」がこんなにラクになる
                </h2>
            </div>

            <div className={styles.benefit__grid}>
                <div className={styles.benefit__card}>
                    <h3>1秒で決まる外食提案</h3>
                    <p>「ガッツリ」「あっさり」など、今の本能的な気分を1タップするだけ。営業中の近くの美味しいお店をAIが自動で絞り込んでルート案内します。</p>
                </div>

                <div className={styles.benefit__card}>
                    <h3>冷蔵庫が片付く自炊レシピ</h3>
                    <p>家にある余り物食材をポチポチ選ぶだけで、今すぐ作れる時短レシピをAIが提案。無駄な買い出しを減らし、フードロスも防げます。</p>
                </div>

                <div className={styles.benefit__card}>
                    <h3>最後の2択はルーレットで</h3>
                    <p>「どっちも美味しそうで選べない！」そんな時はワンタップで運任せのルーレットを起動。ゲーム感覚で楽しく今日のメニューが決まります。</p>
                </div>
            </div>
        </section>
    )
}

export default Benefit