import { ChevronDown } from "lucide-react";

// ファーストビュー下部の「スクロールしてください」表示
export default function ScrollIndicator({ href }: { href: string }) {
  return (
    <a
      href={href}
      aria-label="下にスクロール"
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80 hover:text-white transition"
    >
      <span className="font-display text-sm tracking-[0.4em] pl-[0.4em]">SCROLL</span>
      <ChevronDown className="w-6 h-6 animate-bounce" strokeWidth={1.5} />
    </a>
  );
}
