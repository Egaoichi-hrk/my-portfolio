import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import PageShell from "@/components/PageShell";

export const metadata = { title: "Services | My Portfolio" };

// サービス一覧（image は public フォルダからのパス）
const services = [
  {
    title: "Know Me !",
    description: "オンライン上で自己紹介カードの共有",
    href: "https://knowmehomepage.vercel.app/",
    image: "/services/knowme.png",
  },
];

// 画像ファイルが public に置かれているか
const hasImage = (src: string) => fs.existsSync(path.join(process.cwd(), "public", src));

export default function ServicesPage() {
  return (
    <PageShell>
      <Section id="services" title="My Services">
        <FadeIn>
        <div className="flex flex-col gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group block border border-white/40 hover:border-white transition duration-300"
            >
              {/* イメージ画像 */}
              <div className="relative aspect-video overflow-hidden bg-white">
                {hasImage(service.image) ? (
                  <Image
                    src={service.image}
                    alt={`${service.title} のイメージ`}
                    fill
                    sizes="(min-width: 768px) 576px, 100vw"
                    className="object-contain p-4 group-hover:scale-105 transition duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-black/30 text-sm tracking-widest">
                    NO IMAGE
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold tracking-[0.08em] mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
        </FadeIn>
      </Section>
    </PageShell>
  );
}
