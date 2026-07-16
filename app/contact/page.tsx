import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#030014] text-white p-8">
      <div className="max-w-2xl w-full rounded-2xl border border-[#7042f88b] bg-[rgba(3,0,20,0.6)] p-10 text-center shadow-lg">
        <h1 className="text-4xl font-semibold mb-4">Contact Me</h1>
        <p className="text-gray-300 mb-6">
          I&apos;m open to opportunities and collaborations. Send me a message
          and I&apos;ll get back to you as soon as I can.
        </p>

        <a
          href="mailto:afnanazfar15@gmail.com?subject=Website%20Contact"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:opacity-90"
        >
          Email Me
        </a>

        <div className="mt-6 text-sm text-gray-400">
          Or go back to the <Link href="/">homepage</Link>.
        </div>
      </div>
    </main>
  );
}
