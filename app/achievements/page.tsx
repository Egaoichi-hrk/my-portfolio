import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import PageShell from "@/components/PageShell";

export const metadata = { title: "Achievements | My Portfolio" };

export default function AchievementsPage() {
  return (
    <PageShell>
      <Section id="achievements" title="Achievements">
        <FadeIn>
          {/* 実績はここに追加 */}
          <p className="text-gray-300 text-center">Coming Soon...</p>
        </FadeIn>
      </Section>
    </PageShell>
  );
}
