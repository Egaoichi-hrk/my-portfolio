import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import PageShell from "@/components/PageShell";

export const metadata = { title: "University life | My Portfolio" };

export default function UniversityLifePage() {
  return (
    <PageShell>
   <Section id="career" title="University life">
  <div className="space-y-10 text-gray-300">

    {/* 1年生 */}
    <FadeIn>
      <h3 className="text-2xl font-bold text-center tracking-widest">
         1年生
      </h3>
    </FadeIn>

    <FadeIn delay={100}>
      <ul className="space-y-2 text-sm md:text-base">
        <li>・サークルに5個入る</li>
        <li>・線形代数、微積分を学ぶ</li>
        <li>・基本情報技術者の勉強開始</li>
      </ul>
    </FadeIn>

    <hr className="border-white/20" />

    {/* 2年生 */}
    <FadeIn>
      <h3 className="text-2xl font-bold text-center tracking-widest">
         2年生
      </h3>
    </FadeIn>

    <FadeIn delay={100}>
      <ul className="space-y-2 text-sm md:text-base">
        <li>・5月 基本情報技術者試験 合格</li>
        <li>・7月 Python / Streamlit に触れる</li>
        <li>・8月 HTML・CSS で静的サイト制作</li>
        <li>・10月 統計検定2級 合格</li>
        <li>・11月 FlaskでAPI開発</li>
        <li>・1月 応用情報技術者試験の勉強開始</li>
        <li>・2〜6月 新歓委員会 会計担当</li>
        <li>・3月 サークルの追い出しコンパ用の動画制作を担当</li>
      </ul>
    </FadeIn>

    <hr className="border-white/20" />

    {/* 3年生 */}
    <FadeIn>
      <h3 className="text-2xl font-bold  text-center tracking-widest">
         3年生
      </h3>
    </FadeIn>

    <FadeIn delay={100}>
      <ul className="space-y-2 text-sm md:text-base">
        <li>・4月 応用情報技術者試験の受験・就活開始</li>
        <li>・5月 React / Next.js / Tailwind を触る</li>
        <li>・6月 Cursor + Supabase によるAI駆動開発</li>
        <li>・8月 2days インターンシップで2社参加 統計データ分析コンペティション（総務省）に参加</li>
        <li>・9月 5days インターンシップ（スクラム開発）</li>
        <li>・10月 応用情報技術者試験の再受験・Hackathonの参加・TOEIC/G検定学習開始</li>
        <li>・12月 TOEIC 受験・研究室配属・ベイズ統計を学習</li>
        <li>・2月 自作LLM・研究開始</li>
        <li>・3月 TOEIC2回目</li>
      </ul>
    </FadeIn>

    <hr className="border-white/20" />

    {/* 4年生 */}
    <FadeIn>
      <h3 className="text-2xl font-bold text-center tracking-widest">
         4年生 
      </h3>
    </FadeIn>

    <FadeIn delay={100}>
      <ul className="space-y-2 text-sm md:text-base">
        <li>・4月 TOEIC3回目 GCI講座&DL講座開始 ollamaやLangChainに触れる</li>
        <li>・5月 研究テーマプロポーザル Atcoder参加開始（Pythonで参加） djangoに触れる</li>
      </ul>
    </FadeIn>

  </div>
</Section>
    </PageShell>
  );
}
