import Link from "next/link";
import Header from "@/components/Header";
import styles from "@/app/page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main__wrapper}>
        
        {/* ==========================================
           🚀 1. HERO SECTION (位置情報・在庫連動を明記)
           ========================================== */}
        <section className={styles.hero__section} id="hero-title" aria-labelledby="hero-title-text">
          <div className={styles.hero__content}>
            <p className={styles.eyebrow}>AI×位置情報×冷蔵庫在庫で導く最適解</p>
            <h1 id="hero-title-text" className={styles.hero__title}>
              もう「何食べよう？」で<br />迷わない。
            </h1>
            <p className={styles.hero__lead}>
              毎日の献立選びや、お店探しのストレスをすべてゼロに。meshitakuは、あなたの今の気分や現在地、冷蔵庫の残り物に合わせて、AIが「今日食べるべき一食」をスパッと決めるサービスです。
            </p>
            <div className={styles.hero__actions}>
              <Link href="/login" className={styles.button__primary}>
                無料で今すぐ使ってみる <span aria-hidden="true">→</span>
              </Link>
            </div>
            <Link className={styles.hero__subtitle} href="/login">無料でアカウント登録する <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        {/* ==========================================
           🔄 2. BENEFIT SECTION (3大メリット)
           ========================================== */}
        <section className={styles.benefit__section} id="feature-title" aria-labelledby="benefit-title-text">
          <div className={styles.section__heading}>
            <div className={styles.text__center}>
              <p className={styles.eyebrow}>meshitakuができること</p>
              <h2 id="benefit-title-text" className={styles.section__title}>毎日の「食」がこんなにラクになる</h2>
            </div>
          </div>

          <div className={styles.benefit__grid}>
            <div className={styles.benefit__card}>
              <div className={styles.benefit__icon}>🏢</div>
              <h3>1秒で決まる外食提案</h3>
              <p>「ガッツリ」「あっさり」など、今の本能的な気分を1タップするだけ。営業中の近くの美味しいお店をAIが自動で絞り込んでルート案内します。</p>
            </div>
            
            <div className={styles.benefit__card}>
              <div className={styles.benefit__icon}>🍳</div>
              <h3>冷蔵庫が片付く自炊レシピ</h3>
              <p>家にある余り物食材をポチポチ選ぶだけで、今すぐ作れる時短レシピをAIが提案。無駄な買い出しを減らし、フードロスも防げます。</p>
            </div>

            <div className={styles.benefit__card}>
              <div className={styles.benefit__icon}>◌</div>
              <h3>最後の2択はルーレットで</h3>
              <p>「どっちも美味しそうで選べない！」そんな時はワンタップで運任せのルーレットを起動。ゲーム感覚で楽しく今日のメニューが決まります。</p>
            </div>
          </div>
        </section>

        {/* ==========================================
           🍳 3. RECIPE PROPOSAL SECTION (追加したレシピ提案の具体的説明)
           ========================================== */}
        <section className={styles.recipe__detail_section} id="recipes" aria-labelledby="recipe-detail-title">
          <div className={styles.recipe__container}>
            
            <div className={styles.recipe__mockup}>
              <div className={styles.phone__mockup_recipe}>
                <div className={styles.phone__screen}>
                  <div className={styles.phone__header}>冷蔵庫の残り物は？</div>
                  <div className={styles.recipe__inputs}>
                    <span className={styles.recipe__tag_active}>✓ 豚バラ肉</span>
                    <span className={styles.recipe__tag_active}>✓ キャベツ</span>
                    <span className={styles.recipe__tag}>＋ 玉ねぎ</span>
                  </div>
                  <div className={styles.phone__result_box}>
                    <p className={styles.result__loading}>✦ AIが買い足し不要のレシピを生成しました！</p>
                    <div className={styles.result__card}>
                      <span className={styles.result__badge_green}>⏰ 12分で完成</span>
                      <h5>豚肉とキャベツのコク旨味噌炒め</h5>
                      <p className={styles.recipe__preview_text}>【材料】豚バラ：150g、キャベツ：1/4玉<br />【調味料】味噌・醤油・みりん（家にある基本の調味料だけで作れます）</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.recipe__info}>
              <p className={styles.eyebrow}>買い足しゼロの自炊生活</p>
              <h2 id="recipe-detail-title" className={styles.section__title}>家にある食材だけで、<br />特別なレシピをAIが自動生成。</h2>
              <p className={styles.visual__text}>
                「せっかくレシピを検索したのに、足りない食材があってまたスーパーに行く羽目になった」という経験はありませんか？
              </p>
              <ul className={styles.recipe__features}>
                <li><strong>完全完結型レシピ：</strong>AIは「指定された食材と、基本の調味料だけ」で完成するメニューしか提案しません。無駄な買い足しは一切不要です。</li>
                <li><strong>15分以内の時短設計：</strong>仕事終わりでもパパッと作れる、簡単な調理工程のメニューを中心に組み立てます。</li>
                <li><strong>栄養バランス自動調整：</strong>「昨日が外食で脂っこかったから、今日はビタミンが摂れる野菜メインの副菜に」など、あなたの健康もAIが裏側でサポートします。</li>
              </ul>
            </div>

          </div>
        </section>

        {/* ==========================================
           📱 4. INTERACTIVE VISUAL (外食提案の操作イメージ)
           ========================================== */}
        <section className={styles.visual__section} id="mood-title" aria-labelledby="visual-title-text">
          <div className={styles.visual__container}>
            <div className={styles.visual__info}>
              <p className={styles.eyebrow}>直感的なデザイン</p>
              <h2 id="visual-title-text" className={styles.section__title}>迷う余地のない、<br />シンプルな使いやすさ。</h2>
              <p className={styles.visual__text}>
                難しいチャットや細かい条件設定は必要ありません。アプリを開いて、あなたの直感に従ってボタンを押していくだけで完結します。
              </p>
              <p className={styles.visual__subtext}>
                使えば使うほどAIがあなたの好みの味付けや、過去の食事バランス（「昨日お肉だったから、今日は魚にしませんか？」など）を自動で学習し、より最適な提案へと進化します。
              </p>
            </div>

            <div className={styles.phone__mockup}>
              <div className={styles.phone__screen}>
                <div className={styles.phone__header}>今の気分はどれ？</div>
                <div className={styles.phone__options}>
                  <button className={styles.phone__option_btn}>🍖 ガッツリお肉をチャージしたい</button>
                  <button className={styles.phone__option_btn}>🐟 さっぱりお魚・優しい和食の気分</button>
                  <button className={styles.phone__option_btn}>🥬 ヘルシーに野菜をたっぷり摂りたい</button>
                </div>
                <div className={styles.phone__result_box}>
                  <p className={styles.result__loading}>✦ AIがあなたにおすすめのメニューを決定！</p>
                  <div className={styles.result__card}>
                    <div className={styles.result__meta}>
                      <span className={styles.result__badge_green}>現在地から徒歩4分</span>
                    </div>
                    <h5>炭火焼肉 たけうち</h5>
                    <p>本日のおすすめ：ジューシーな「ハラミランチ定食」。しっかり食べて午後からのエネルギーを補給しましょう！</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.faq__section} aria-labelledby="faq-title-text">
          <div className={styles.section__heading}>
            <div className={styles.text__center}>
              <p className={styles.eyebrow}>よくある質問</p>
              <h2 id="faq-title-text" className={styles.section__title}>気になる疑問にお答えします</h2>
            </div>
          </div>
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
        </section>

        {/* ==========================================
           📢 7. CTA SECTION (最後のひと押し)
           ========================================== */}
        <section className={styles.cta__section} aria-label="アカウント作成">
          <div className={styles.cta__content}>
            <p className={styles.eyebrow}>今日のご飯から、もっと新しく</p>
            <h2 className={styles.cta__title}>さあ、無駄な迷い時間を<br />ワクワクする時間に変えましょう。</h2>
          </div>
          <Link className={styles.button__light} href="/login">無料でアカウント登録する <span aria-hidden="true">↗</span></Link>
        </section>
      </main>

      {/* ==========================================
         🎌 7. FOOTER
         ========================================== */}
      <footer className={styles.footer__wrapper}>
        <span className={styles.brand__mark}>meshitaku<span>.</span></span>
        <small className={styles.footer__text}>今日のごはんが、明日の楽しみになりますように。</small>
        <small className={styles.footer__copy}>© 2026 meshitaku</small>
      </footer>
    </>
  );
}
