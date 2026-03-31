import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Anjali Raj | Coaching",
  description: "Anjali Raj — Change & Clarity Coach and Business Performance Coach. Choose your path.",
};

export default function HubPage() {
  return (
    <div className="min-h-screen bg-navy flex flex-col">
      {/* Subtle texture overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_#1e2f5a_0%,_#162040_60%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="px-8 pt-12 pb-0 flex flex-col items-center">
          <span className="font-script text-6xl text-gold tracking-wide">{siteConfig.coachName}</span>
          <div className="w-12 h-px bg-gold/30 mt-4 mb-3" />
          <p className="text-[9px] tracking-[0.4em] uppercase text-warm-white/30 font-sans">
            Coaching
          </p>
        </header>

        {/* Main */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 py-16">
          <div className="max-w-3xl w-full text-center mb-16">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold/60 mb-6">
              Where would you like to begin?
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-warm-white/90 leading-[1.1] mb-6">
              Two distinct spaces.<br />
              <span className="italic text-warm-white/50">One coach.</span>
            </h1>
            <p className="text-sm text-warm-white/35 leading-relaxed max-w-sm mx-auto">
              Choose the space that reflects where you are right now.
            </p>
          </div>

          {/* Path panels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl">

            {/* Clarity */}
            <Link
              href="/clarity"
              className="group relative flex flex-col justify-between p-10 bg-navy hover:bg-[#1a2850] transition-colors duration-500 min-h-[340px]"
            >
              <div>
                <p className="text-[9px] tracking-[0.35em] uppercase text-gold/60 mb-6">Personal</p>
                <h2 className="font-heading text-3xl md:text-4xl text-warm-white/90 leading-snug mb-4">
                  Change &<br />Clarity
                </h2>
                <div className="w-8 h-px bg-gold/40 mb-5" />
                <p className="text-sm text-warm-white/40 leading-relaxed">
                  Life, relationships, and decisions. Finding steadiness in seasons of change.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-gold/50 group-hover:text-gold transition-colors mt-8">
                Personal coaching
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
              {/* Hover accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
            </Link>

            {/* Business */}
            <Link
              href="/business"
              className="group relative flex flex-col justify-between p-10 bg-[#1a2848] hover:bg-[#1d2f52] transition-colors duration-500 min-h-[340px]"
            >
              <div>
                <p className="text-[9px] tracking-[0.35em] uppercase text-gold/60 mb-6">Business</p>
                <h2 className="font-heading text-3xl md:text-4xl text-warm-white/90 leading-snug mb-4">
                  Business<br />Clarity
                </h2>
                <div className="w-8 h-px bg-gold/40 mb-5" />
                <p className="text-sm text-warm-white/40 leading-relaxed">
                  Founders, leadership, and organisations. Building with clarity and profitability.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-gold/50 group-hover:text-gold transition-colors mt-8">
                Business coaching
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
            </Link>

            {/* Ventures */}
            <Link
              href="/ventures"
              className="group relative flex flex-col justify-between p-10 bg-[#181f3a] hover:bg-[#1c2445] transition-colors duration-500 min-h-[340px]"
            >
              <div>
                <p className="text-[9px] tracking-[0.35em] uppercase text-warm-white/20 mb-6">Coming Soon</p>
                <h2 className="font-heading text-3xl md:text-4xl text-warm-white/40 leading-snug mb-4">
                  Ventures
                </h2>
                <div className="w-8 h-px bg-warm-white/10 mb-5" />
                <p className="text-sm text-warm-white/20 leading-relaxed">
                  A new space is taking shape.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-warm-white/20 group-hover:text-warm-white/40 transition-colors mt-8">
                Learn more
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-warm-white/20 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
            </Link>
          </div>

          {/* Contact nudge */}
          <p className="mt-12 text-xs text-warm-white/20">
            Not sure where to start?{" "}
            <a
              href={siteConfig.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/50 hover:text-gold transition-colors underline underline-offset-4"
            >
              WhatsApp Anjali directly
            </a>
          </p>
        </main>

        {/* Footer */}
        <footer className="text-center px-6 pb-10">
          <p className="text-[10px] text-warm-white/15 tracking-wide">
            © {new Date().getFullYear()} {siteConfig.coachName}. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
