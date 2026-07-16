import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { CONTACT_LINK } from "@/constants";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <section
          id="contact"
          className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center rounded-3xl border border-[#7042f88b] bg-[#030014]/70 px-6 py-12 text-center shadow-[0_0_30px_rgba(112,66,248,0.2)]"
        >
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Let&apos;s build something amazing
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-400">
            If you want to collaborate, discuss an opportunity, or just say hello,
            I&apos;d love to hear from you.
          </p>
          {/* Bottom contact button removed per request; navigation now uses the top navbar contact button */}
        </section>
      </div>
    </main>
  );
}
