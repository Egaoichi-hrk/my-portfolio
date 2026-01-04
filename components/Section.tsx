import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
   <section
      id={id}
      className=" min-h-[50vh] py-5 md:py-5 px-4 md:px-8 flex flex-col items-center justify-center relative"
    >

      <div className="max-w-6xl mx-auto">
        {title && (
          <h2 className="text-4xl md:text-5xl font-bold mb-12 neon-green text-center">
            {title}
          </h2>
        )}
        <div className="rounded-lg p-8 bg-black/50 backdrop-blur-sm max-w-2xl mx-auto">

          {children}
        </div>
      </div>
    </section>
  );
}

