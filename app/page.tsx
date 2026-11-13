import Link from "next/link";
import Header from "@/components/Header";
import Benefit from "@/components/Benefit";
import Feature from "@/components/Feature"
import QuestionAnser from '@/components/QuestionAnser';
import Footer from "@/components/Footer";
import styles from "@/app/page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main__wrapper}>
        {/* 1. HERO SECTION */}
        <section className={styles.hero__section} id="hero-title" aria-labelledby="hero-title-text">
          <div className={styles.hero__content}>
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
          </div>
        </section>

        {/* 2. BENEFIT SECTION */}
        <Benefit />

        {/* 3,4. 特徴 */}
        <Feature />

        {/* 5. FAQ SECTION */}
        <QuestionAnser />

        <Footer />
      </main>
    </>
  );
}
