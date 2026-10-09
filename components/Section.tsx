import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  light?: boolean; // 白背景・黒文字にする
  children: ReactNode;
}

export default function Section({ id, title, light = false, children }: SectionProps) {
  return (
   <section
      id={id}
      className={` min-h-[50vh] py-5 md:py-5 px-4 md:px-8 flex flex-col items-center justify-center relative ${light ? "bg-white text-black" : ""}`}
    >

      <div className="max-w-6xl mx-auto">
        {title && (
          <h2 className={`font-display text-5xl md:text-6xl font-semibold tracking-[0.12em] mb-12 ${light ? "text-black" : "text-white"} text-center`}>
            {title}
          </h2>
        )}
        <div className={`rounded-lg p-8 backdrop-blur-sm max-w-2xl mx-auto ${light ? "bg-white" : "bg-black/50"}`}>

          {children}
        </div>
      </div>
    </section>
  );
}

