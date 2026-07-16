import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <section className="mx-auto max-w-4xl rounded-3xl border border-[#7042f88b] bg-[#030014]/70 px-6 py-12 text-center shadow-[0_0_30px_rgba(112,66,248,0.2)]">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Want to work together?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Click below to go to the contact page and send me a message.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Contact Me
          </Link>
        </section>
      </div>
    </main>
  );
}
