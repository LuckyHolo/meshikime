import styles from './QuestionAnser.module.css'

function QuestionAnser() {
  return (
    <section className={styles.faq__section} aria-labelledby="faq-title-text">
            <div className={styles.section__back}>
            <h2 id="faq-title-text" className={styles.section__title}>よくあるご質問</h2>
          <div className={styles.faq__list}>
            <div className={styles.faq__item}>
              <h4>Q. 本当に無料で使えるの？</h4>
              <p>A. はい、すべての基本機能（AI提案、レシピ生成、ルーレット）は広告付きで完全に無料でご利用いただけます。有料プランへの自動移行なども一切ありません。</p>
            </div>
            <div className={styles.faq__item}>
              <h4>Q. アレルギーや苦手な食べ物は除外できる？</h4>
              <p>A. はい、アカウント設定から事前のアレルギー食材や、苦手なジャンルを登録できます。AIはそれらの食材を自動的に避けて安全なメニューのみを提案します。</p>
            </div>
            <div className={styles.faq__item}>
              <h4>Q. チェーン店ばかり提案されたりしない？</h4>
              <p>A. meshitakuのAIは個人経営の隠れた名店から定番のチェーン店まで幅広く網羅しています。「今日は個人店を開拓したい」「サクッとチェーン店で済ませたい」といった好みの絞り込みも可能です。</p>
            </div>
            </div>
          </div>
        </section>
  )
}

export default QuestionAnser