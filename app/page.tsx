import Typewriter from "@/components/Typewriter";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { SiX, SiGithub, SiInstagram } from "react-icons/si";


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Welcome Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <Typewriter text="Welcome to my portfolio!" />
        </div>
      </section>

   {/* Profile Section */}
      <Section id="profile" title="Profile">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden neon-border border-4 flex items-center justify-center bg-gray-800">
            <Image
              src="/a_8bscNw.jpg"
              alt="プロフィール画像"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg text-gray-300">
             My name is Sakamto Haruki . I am a university student studying data science.I am studying statistics, AI, and information technology.I also like creative things—for example, making math problems, building websites, playing with LEGO, and so on.
            </p>
          </div>
        </div>
      </Section>

      {/* Career Section */}
      <Section id="career" title="Career">
        <div className="space-y-4">
          <p className="text-gray-300 text-center">
            経歴は随時追加予定です
          </p>
          {/* ここに経歴を追加 */}
        </div>
      </Section>
      <Section id="tech-stack" title="Skills">
        <div className="flex flex-col gap-10">

          {/* Tech Stack */}
          <div>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Next.js",
                "React",
                "Python",
                "Tailwind CSS",
                "HTML",
                "CSS",
                "Flask",
                "FastAPI",
                "Supabase",
                "Cursor",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 border border-cyan-400 rounded-full text-cyan-300 bg-black/60 backdrop-blur-sm hover:shadow-[0_0_12px_rgba(34,211,238,0.8)] transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
         {/* Certifications */}
          <div>
            <h3 className="text-2xl mt-10 font-semibold mb-4 neon-green text-center">
              
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "基本情報技術者",
                "統計検定2級",
              ].map((cert) => (
                <div
                  key={cert}
                  className="px-6 py-4 border border-purple-400 rounded-lg bg-black/60 text-purple-300 text-center hover:shadow-[0_0_14px_rgba(168,85,247,0.9)] transition"
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </Section>
  <Section id="sns" title="SNS">
        <div className="flex justify-center gap-8 flex-wrap">

          <a
            href="https://x.com/peFtOYXB5txqDEK"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border-2 border-green-400 rounded-full neon-border hover:bg-green-400/10 transition"
            aria-label="X"
          >
            <SiX size={32} />
          </a>

          <a
            href="https://github.com/Egaoichi-hrk"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border-2 border-green-400 rounded-full neon-border hover:bg-green-400/10 transition"
            aria-label="GitHub"
          >
            <SiGithub size={32} />
          </a>

          <a
            href="https://www.instagram.com/o0_route_0o/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border-2 border-green-400 rounded-full neon-border hover:bg-green-400/10 transition"
            aria-label="Instagram"
          >
            <SiInstagram size={32} />
          </a>

        </div>
      </Section>


      {/* Services Section */}
      <Section id="services" title="My Services">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border border-green-400 rounded neon-border bg-black/30">
            <h3 className="text-xl font-bold mb-4 neon-green">Service1</h3>
            <p className="text-gray-300">
              Coming Soon...
            </p>
          </div>
          <div className="p-6 border border-green-400 rounded neon-border bg-black/30">
            <h3 className="text-xl font-bold mb-4 neon-green">Service2</h3>
            <p className="text-gray-300">
              Coming Soon...
            </p>
          </div>
          <div className="p-6 border border-green-400 rounded neon-border bg-black/30">
            <h3 className="text-xl font-bold mb-4 neon-green">Service3</h3>
            <p className="text-gray-300">
             Coming Soon...
            </p>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact">
        <ContactForm />
      </Section>
    </main>
  );
}

