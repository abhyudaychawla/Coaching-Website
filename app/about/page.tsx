import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { CredentialsStrip } from "@/components/ui/CredentialsStrip";
import { siteConfig } from "@/lib/content";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Anjali Raj — Change & Clarity Coach. Her philosophy, credentials, and approach to coaching.",
};

const values = [
  {
    title: "Emotional Honesty",
    description: "A commitment to naming what is actually present — without dramatising or dismissing it.",
  },
  {
    title: "Non-Directive Guidance",
    description: "You are the expert on your own life. Coaching helps you access that expertise, not override it.",
  },
  {
    title: "Whole-Person Thinking",
    description: "Your career, relationships, inner life, and values are not separate — they inform each other.",
  },
  {
    title: "Depth Over Speed",
    description: "Real clarity rarely comes from quick fixes. The work is gentle, patient, and sustainable.",
  },
];

const whyDifferent = [
  "Not advice-giving, but deep listening and precise questioning",
  "Rooted in neuroscience, NLP, and emotional intelligence — not generic frameworks",
  "Deeply personal, confidential, and adapted entirely to you",
  "No judgment, no rush, no agenda beyond your wellbeing",
  "Sessions feel like a conversation, not a consultation",
];

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="pt-32 pb-20 px-6 gradient-warm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">About Anjali</p>
              <h1 className="font-heading text-5xl md:text-6xl text-navy leading-tight mb-4">
                A coach who understands{" "}
                <span className="italic">complexity</span>
              </h1>
              <div className="section-divider mb-6" />
              <p className="text-base text-navy/65 leading-relaxed">
                Anjali Raj is a certified Change & Clarity Coach based in New Delhi, working with clients across India and internationally. Her work centres on helping people navigate life's most disorienting moments with greater clarity, steadiness, and self-trust.
              </p>
            </div>
            {/* Portrait area */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-72 h-96 rounded-[2.5rem] bg-beige border border-gold-light/50 shadow-lg overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-gold-light/60 mx-auto mb-4 flex items-center justify-center">
                      <span className="font-script text-3xl text-gold">AR</span>
                    </div>
                    <p className="text-xs text-navy/40">Anjali Raj portrait</p>
                    <p className="text-xs text-navy/30 mt-1">640×800px recommended</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 w-20 h-20 rounded-full border border-gold/20" />
                <div className="absolute -bottom-3 -left-3 w-12 h-12 rounded-full bg-champagne" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS STRIP */}
      <CredentialsStrip />

      {/* BIO SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="Her Story"
            title="The journey to this work"
          />
          <div className="mt-8 space-y-5 text-navy/70 text-base leading-relaxed">
            <p>
              Anjali's path to coaching was not a straight line — it was itself a season of change. After years in corporate environments and navigating her own complex personal transitions, she found that the most transformative moments in her life came not from external advice, but from conversations that helped her access her own clarity.
            </p>
            <p>
              That insight became the foundation of her coaching practice. She trained formally through the NeuroLeadership Institute — an ICF-accredited program grounded in neuroscience and applied psychology — and deepened her practice through NLP certification with Vikram Dhar and TalentPlus tools.
            </p>
            <p>
              Today, she works with individuals across India and internationally who are at pivotal moments: career crossroads, relationship decisions, personal reinvention, and the often-unnamed confusion of feeling stuck despite doing everything "right."
            </p>
            <p>
              What makes her coaching different is the quality of presence she brings. Clients often describe her style as calm, incisive, and deeply human — a space where they can think without pressure and feel without judgment.
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-20 px-6 bg-beige">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Philosophy"
            title="What she believes about change"
            subtitle="Coaching, at its best, is not about telling people what to do. It's about creating the conditions in which they can finally hear themselves."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            {values.map((v) => (
              <div key={v.title} className="bg-warm-white rounded-2xl p-7 border border-gold-light/40">
                <h3 className="font-heading text-xl text-navy mb-3">{v.title}</h3>
                <div className="section-divider mb-4" style={{ width: "2rem" }} />
                <p className="text-sm text-navy/65 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="The Difference"
            title="Why clients choose this approach"
            subtitle="Coaching is everywhere. But not all coaching feels the same."
          />
          <ul className="mt-10 space-y-5">
            {whyDifferent.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <CheckCircle size={18} className="text-gold mt-0.5 shrink-0" />
                <span className="text-navy/70 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CREDENTIALS DETAIL */}
      <section className="py-16 px-6 bg-navy">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Credentials</p>
          <h2 className="font-heading text-3xl text-warm-white mb-6">Formally trained, ethically grounded</h2>
          <div className="section-divider-center mb-8" />
          <div className="flex flex-wrap justify-center gap-4">
            {siteConfig.credentials.map((cred) => (
              <div
                key={cred}
                className="px-6 py-3 rounded-full border border-gold/30 text-warm-white/80 text-sm"
              >
                {cred}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        eyebrow="Begin the Conversation"
        title="A conversation costs nothing"
        subtitle="A free 15-minute call is the easiest way to see whether coaching might be the right fit for where you are right now."
        primaryLabel="Book a Free Call"
        primaryHref="/contact"
        secondaryLabel="Explore Services"
        secondaryHref="/coaching"
      />
    </>
  );
}
