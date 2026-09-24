import Link from "next/link";

export default function MyPage() {
  return (
    <main style={{ margin: "0 auto", maxWidth: 760, padding: "80px 24px" }}>
      <p style={{ color: "#e4553f", fontSize: 12, fontWeight: 700, letterSpacing: ".12em" }}>MY PAGE</p>
      <h1 style={{ color: "#1d2922", fontFamily: "Georgia, serif" }}>マイページ</h1>
      <p style={{ color: "#68716a", lineHeight: 1.8 }}>お気に入りの料理や、あなたの食事 preferences をここで管理できます。</p>
      <Link href="/" style={{ color: "#1d2922" }}>ホームへ戻る</Link>
    </main>
  );
}