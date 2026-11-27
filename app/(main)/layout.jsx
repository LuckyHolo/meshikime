import AppHeader from "@/components/AppHeader";

export default function MainLayout({ children }) {
  return (
    <div>
      <AppHeader />
      <main>{children}</main>
    </div>
  );
}
