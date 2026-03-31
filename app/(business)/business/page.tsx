import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { businessPillars, businessHowItWorks, businessStats, businessSituations, siteConfig } from "@/lib/content";
import { ArrowRight, MessageCircle, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Business Clarity & Performance Coaching | Anjali Raj",
  description: "Helping founders simplify their business, strengthen leadership, and build organisations that run with clarity and profitability.",
};

const pillarIcons: Record<string, string> = {
  Eye: "◎",
  LayoutGrid: "⊞",
  Target: "◎",
  TrendingUp: "↗",
};

export default function BusinessHomePage() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen pt-24 pb-16 px-6 gradient-forest flex items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-forest-light/40 -translate-y-1/4 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-sage/10 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6 font-sans">
                Business Clarity & Performance Coaching
              </p>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-forest leading-[1.05] mb-6">
                When your business is{" "}
                <span className="italic text-gold">growing</span>{" "}
                but everything feels more complicated
              </h1>
              <div className="w-16 h-px bg-gold mb-6" />
              <p className="text-base md:text-lg text-forest/65 leading-relaxed mb-10 max-w-lg">
                Helping founders simplify their business, strengthen leadership, and build organisations that run with clarity and profitability.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/business/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-forest text-warm-white rounded-full text-sm tracking-wide hover:bg-forest/85 transition-colors duration-200"
                >
                  Schedule a Consultation
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/business/services"
                  className="inline-flex items-center justify-center px-8 py-4 border border-forest/25 text-forest rounded-full text-sm tracking-wide hover:border-gold hover:text-gold transition-colors duration-200"
                >
                  How It Works
                </Link>
              </div>

              <div className="flex flex-wrap gap-6">
                {["ICF Accredited", "NeuroLeadership Institute", "Free 15-min Call"].map((label) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className="w-1 h-6 bg-gold rounded-full" />
                    <span className="text-xs text-forest/50 tracking-wide">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Portrait */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 rounded-[3rem] border border-gold/20 pointer-events-none" />
                <div className="w-72 h-96 md:w-80 md:h-[480px] rounded-[2.5rem] bg-moss overflow-hidden relative border border-forest-light/50 shadow-xl">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-forest-light/60 mb-4 flex items-center justify-center">
                      <span className="font-script text-3xl text-gold">AR</span>
                    </div>
                    <p className="text-xs text-forest/40 leading-relaxed">
                      Place portrait here<br />640×800px recommended
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                </div>
                <div className="absolute -bottom-4 -left-6 bg-warm-white rounded-2xl shadow-lg border border-forest-light/40 px-5 py-4">
                  <p className="font-script text-2xl text-gold leading-none">{siteConfig.coachName}</p>
                  <p className="text-[9px] tracking-[0.15em] text-forest/40 uppercase mt-1">Founder & Business Performance Coach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS CLARITY FRAMEWORK — 4 Pillars */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Business Clarity Framework"
            title="Bring clarity back to your business as it grows"
            subtitle="Four interconnected areas that drive business performance — when all four are working, the business moves forward with focus and momentum."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {businessPillars.map((pillar) => (
              <div key={pillar.id} className="bg-moss rounded-2xl p-7 border border-forest-light/50 hover:border-sage/50 hover:shadow-sm transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-forest-light flex items-center justify-center mb-4">
                  <span className="text-forest text-lg font-heading">{pillarIcons[pillar.icon] ?? "◆"}</span>
                </div>
                <h3 className="font-heading text-xl text-forest mb-3">{pillar.title}</h3>
                <div className="w-8 h-px bg-gold mb-4" />
                <p className="text-sm text-forest/65 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading
                eyebrow="How Business Coaching Works"
                title="What we work on together"
                subtitle="Business coaching is a structured thinking partnership — helping you see clearly, decide confidently, and lead effectively."
              />
              <Link
                href="/business/contact"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-forest text-warm-white rounded-full text-sm tracking-wide hover:bg-forest/85 transition-colors"
              >
                Book a Consultation
                <ArrowRight size={14} />
              </Link>
            </div>
            <ul className="space-y-5">
              {businessHowItWorks.map((item) => (
                <li key={item.title} className="flex items-start gap-4 p-5 bg-moss rounded-2xl border border-forest-light/40">
                  <CheckCircle size={18} className="text-sage mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-forest mb-1">{item.title}</p>
                    <p className="text-sm text-forest/60 leading-relaxed">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SITUATIONS */}
      <section className="py-20 px-6 bg-moss">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Situations Founders Bring to Coaching"
            title="You're not alone in this"
            subtitle="These are the situations founders most commonly bring. If any feel familiar, coaching can help."
            centered
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
            {businessSituations.map((situation) => (
              <div key={situation} className="bg-warm-white rounded-2xl p-5 border border-forest-light/40 text-center hover:border-sage/50 transition-colors">
                <p className="text-sm text-forest/70 leading-snug">{situation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6 bg-forest">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Why Business Clarity Matters"
            title="The case for clarity"
            lightMode
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {businessStats.map((stat) => (
              <div key={stat.number} className="text-center">
                <p className="font-heading text-5xl text-gold mb-3">{stat.number}</p>
                <p className="text-sm text-warm-white/70 leading-relaxed mb-2">{stat.label}</p>
                <p className="text-xs text-warm-white/40 tracking-wide">*{stat.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE CALL BANNER */}
      <section className="py-16 px-6 bg-moss border-y border-forest-light/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2">No Commitment</p>
              <h3 className="font-heading text-3xl md:text-4xl text-forest mb-2">
                15-minute exploratory conversation
              </h3>
              <p className="text-sm text-forest/60">
                A relaxed conversation to understand your business situation and explore whether coaching could help.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/business/contact"
                className="px-8 py-4 bg-forest text-warm-white rounded-full text-sm tracking-wide hover:bg-forest/85 transition-colors whitespace-nowrap"
              >
                Schedule a Call
              </Link>
              <a
                href={siteConfig.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-forest/25 text-forest rounded-full text-sm tracking-wide hover:border-gold hover:text-gold transition-colors whitespace-nowrap"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
