import Typewriter from "@/components/Typewriter";
import Section from "@/components/Section";
import Image from "next/image";
import { SiX, SiGithub, SiInstagram } from "react-icons/si";
import FadeIn from "@/components/FadeIn";
import ScrollIndicator from "@/components/ScrollIndicator";
import Link from "next/link";

// コンテンツ一覧（各ページへのリンク）
const contents = [
  { href: "/university-life", title: "University life", description: "大学生活の歩み" },
  { href: "/skills", title: "Skills", description: "技術スタック・資格" },
  { href: "/services", title: "Services", description: "制作したサービス" },
  { href: "/achievements", title: "Achievements", description: "実績" },
  { href: "/contact", title: "Contact", description: "お問い合わせ" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Welcome Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <Typewriter text="Welcome to my portfolio!" />
        </div>
        <ScrollIndicator href="#profile" />
      </section>

   {/* Profile Section */}
      <div className="bg-white py-16 md:py-24">
      <Section id="profile" title="Profile" light>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
          <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden flex items-center justify-center bg-gray-800">
            <Image
              src="/a_8bscNw.jpg"
              alt="プロフィール画像"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg text-black">
             My name is Sakamto Haruki . I am a university student studying data science.I am studying statistics, AI, and information technology.I also like creative things—for example, making math problems, building websites, playing with LEGO, and so on.
             <br />
             I am currently conducting research in the field of Human-Computer Interaction (HCI). I am developing a system that enables humans and AI to divide roles at the level of cognitive activities.
            </p>
          </div>
        </div>
      </Section>
      </div>

      {/* Contents Section */}
      <div className="bg-white py-16 md:py-24">
      <Section id="contents" title="Contents" light>
        <FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contents.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block p-6 border border-black rounded bg-white hover:bg-black hover:text-white transition group"
            >
              <h3 className="font-display text-2xl font-semibold tracking-[0.08em] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300 transition">{item.description}</p>
            </Link>
          ))}
        </div>
        </FadeIn>
      </Section>
      </div>

  <Section id="sns" title="SNS">
     <FadeIn>
        <div className="flex justify-center gap-8 flex-wrap">

          <a
            href="https://x.com/peFtOYXB5txqDEK"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border-2 border-white rounded-full neon-border hover:bg-white/10 transition"
            aria-label="X"
          >
            <SiX size={32} />
          </a>

          <a
            href="https://github.com/Egaoichi-hrk"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border-2 border-white rounded-full neon-border hover:bg-white/10 transition"
            aria-label="GitHub"
          >
            <SiGithub size={32} />
          </a>

          <a
            href="https://www.instagram.com/o0_route_0o/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border-2 border-white rounded-full neon-border hover:bg-white/10 transition"
            aria-label="Instagram"
          >
            <SiInstagram size={32} />
          </a>

        </div>
      </FadeIn>
      </Section>
    </main>
  );
}
