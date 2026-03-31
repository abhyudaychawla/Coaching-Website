import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ventures | Anjali Raj",
  description: "A new space is taking shape. Coming soon.",
};

export default function VenturesPage() {
  return (
    <div className="min-h-screen gradient-indigo flex flex-col items-center justify-center px-6 text-center">
      {/* Back link */}
      <Link href="/" className="absolute top-8 left-8 text-xs tracking-[0.2em] uppercase text-silver/60 hover:text-silver transition-colors">
        ← All Coaching
      </Link>

      <div className="max-w-lg">
        <span className="font-script text-5xl text-gold block mb-4">{siteConfig.coachName}</span>
        <p className="text-[10px] tracking-[0.3em] uppercase text-silver/40 mb-12">Ventures</p>

        <div className="w-12 h-px bg-gold/40 mx-auto mb-10" />

        <h1 className="font-heading text-4xl md:text-5xl text-warm-white/90 leading-tight mb-6">
          Something new is <span className="italic text-silver/60">taking shape</span>
        </h1>

        <p className="text-sm text-silver/50 leading-relaxed mb-12">
          This space is under development. Check back soon.
        </p>

        <a
          href={siteConfig.socialLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 border border-silver/20 text-silver/60 rounded-full text-sm tracking-wide hover:border-gold/40 hover:text-gold transition-colors"
        >
          Stay in touch via WhatsApp
        </a>
      </div>

      <footer className="absolute bottom-8">
        <p className="text-xs text-silver/25">
          © {new Date().getFullYear()} {siteConfig.coachName}
        </p>
      </footer>
    </div>
  );
}
