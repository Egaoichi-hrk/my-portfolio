import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import PageShell from "@/components/PageShell";

export const metadata = { title: "Skills | My Portfolio" };

// 技術スタック（カテゴリ別）
const skillGroups = [
  { category: "Languages", items: ["Python", "HTML", "CSS"] },
  { category: "Frontend", items: ["Next.js", "React", "Tailwind CSS"] },
  { category: "Backend", items: ["Flask", "FastAPI","Django"] },
  { category: "Database", items: ["PostgreSQL"] },
  { category: "Tools", items: ["Cursor","Supabase"] },
];

// 資格
const certifications = ["基本情報技術者", "統計検定2級", "TOEIC 635点"];

function Label({ children }: { children: string }) {
  return (
    <p className="mb-8 font-display text-sm tracking-[0.4em] text-white/60">{children}</p>
  );
}

export default function SkillsPage() {
  return (
    <PageShell>
      <Section id="tech-stack" title="Skills">
        {/* Tech Stack */}
        <FadeIn>
          <Label>TECH STACK</Label>
          <dl className="border-b border-white/15">
            {skillGroups.map((group, i) => (
              <div
                key={group.category}
                className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 py-6 border-t border-white/15"
              >
                <dt className="flex items-baseline gap-3">
                  <span className="font-display text-sm text-white/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-2xl tracking-[0.08em]">{group.category}</span>
                </dt>
                <dd className="flex flex-wrap gap-3 items-center">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-1.5 border border-white/30 text-sm tracking-wider text-white/90 hover:bg-white hover:text-black transition duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>

        {/* Certifications */}
        <FadeIn>
          <div className="mt-16">
            <Label>CERTIFICATIONS</Label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="group relative p-7 border border-white/40 text-center hover:bg-white transition duration-500"
                >
                  {/* 内側の細い額縁 */}
                  <span className="pointer-events-none absolute inset-1.5 border border-white/15 group-hover:border-black/20 transition duration-500" />
                  <span className="block mx-auto mb-4 w-1.5 h-1.5 rotate-45 bg-white group-hover:bg-black transition duration-500" />
                  <p className="font-display text-lg tracking-[0.1em] group-hover:text-black transition duration-500">
                    {cert}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageShell>
  );
}
