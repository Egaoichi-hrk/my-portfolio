import Link from "next/link";
import { ReactNode } from "react";

// 下層ページ共通の枠（Homeへ戻るリンク付き）
export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="px-4 md:px-8 py-6">
        <Link
          href="/"
          className="font-display text-xl tracking-[0.12em] text-white hover:opacity-70 transition"
        >
          ← Home
        </Link>
      </nav>
      {children}
    </main>
  );
}
