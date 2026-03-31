import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/content";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Business Clarity Coaching",
  description: "Meet Anjali Raj — Founder & Business Performance Coach. Her approach, credentials, and philosophy.",
};

const approach = [
  {
    title: "Structured Thinking Partnership",
    description: "A confidential space to think through complex business decisions with someone who asks the right questions — not someone who tells you what to do.",
  },
  {
    title: "Clarity Before Action",
    description: "Most business problems stem from unclear thinking, not lack of effort. We work to see the situation clearly before deciding what to do about it.",
  },
  {
    title: "Whole-Business Perspective",
    description: "Strategy, people, leadership, and operations are not separate — they influence each other. Coaching addresses the full picture.",
  },
  {
    title: "Founder-Centred",
    description: "The founder's clarity is the business's clarity. When you are clear, the organisation moves. Coaching starts with you.",
  },
];

const credentials = [
  "Certified Coach | NeuroLeadership Institute (ICF Accredited)",
  "NLP Practitioner (Vikram Dhar)",
  "TalentPlus Certified",
  "10+ years working with founders and leadership teams",
];

const whyDifferent = [
  "Deep experience working with family businesses and intergenerational transitions",
  "Grounded in neuroscience — how leaders actually think and decide under pressure",
  "Not a consultant: no prescriptions, no frameworks forced on your business",
  "Completely confidential — a rare space for founders to think honestly",
  "Practical and human — rigorous thinking without losing sight of the people involved",
];

export default function BusinessAboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 px-6 gradient-forest">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">About Anjali</p>
              <h1 className="font-heading text-5xl md:text-6xl text-forest leading-tight mb-4">
                A thinking partner for <span className="italic">founders who are building</span>
              </h1>
              <div className="w-16 h-px bg-gold mb-6" />
              <p className="text-base text-forest/65 leading-relaxed">
                Anjali Raj is a certified Business Clarity & Performance Coach working with founders, family businesses, and leadership teams across India. Her coaching creates the space for clear thinking that complex organisations rarely allow.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 rounded-[3rem] border border-gold/20 pointer-events-none" />
                <div className="w-72 h-96 rounded-[2.5rem] bg-moss border border-forest-light/50 shadow-lg overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-forest-light/60 mx-auto mb-4 flex items-center justify-center">
                      <span className="font-script text-3xl text-gold">AR</span>
                    </div>
                    <p className="text-xs text-forest/40">Portrait — 640×800px</p>
                  </div>
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

      {/* CREDENTIALS STRIP */}
      <section className="py-5 px-6 bg-forest">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {credentials.map((cred) => (
              <span key={cred} className="text-xs text-warm-white/50 tracking-wide">{cred}</span>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading eyebrow="Her Story" title="The journey to business coaching" />
          <div className="mt-8 space-y-5 text-forest/70 text-base leading-relaxed">
            <p>
              Anjali's path into business coaching was shaped by years of close observation — watching founders and leadership teams struggle not from lack of intelligence or ambition, but from the fog that growth creates. More complexity. More people. More decisions. Less clarity.
            </p>
            <p>
              She trained through the NeuroLeadership Institute — an ICF-accredited program grounded in how the brain actually works under pressure — and has since worked with founders running businesses ranging from early-stage to established family enterprises navigating generational transitions.
            </p>
            <p>
              What she brings is not a consulting toolkit or a standard framework. It's the ability to slow things down enough to see what's actually happening — and then help the founder move forward with genuine clarity rather than reactive decision-making.
            </p>
            <p>
              Her particular strength is with family businesses, where the complexity of relationships, roles, and legacy adds a layer of difficulty that most advisors are not equipped to hold. Anjali holds that space well.
            </p>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="py-20 px-6 bg-moss">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="The Approach"
            title="How she works with founders"
            subtitle="Business coaching with Anjali is not advice. It is a rigorous, structured thinking process — one that helps you access the clarity you already have."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            {approach.map((item) => (
              <div key={item.title} className="bg-warm-white rounded-2xl p-7 border border-forest-light/40">
                <h3 className="font-heading text-xl text-forest mb-3">{item.title}</h3>
                <div className="w-8 h-px bg-gold mb-4" />
                <p className="text-sm text-forest/65 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="What Makes This Different"
            title="Why founders choose to work with Anjali"
          />
          <ul className="mt-10 space-y-5">
            {whyDifferent.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <CheckCircle size={18} className="text-sage mt-0.5 shrink-0" />
                <span className="text-forest/70 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CREDENTIALS DARK */}
      <section className="py-16 px-6 bg-forest">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Credentials</p>
          <h2 className="font-heading text-3xl text-warm-white mb-6">Formally trained, practically grounded</h2>
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <div className="flex flex-wrap justify-center gap-4">
            {siteConfig.credentials.map((cred) => (
              <div key={cred} className="px-6 py-3 rounded-full border border-gold/30 text-warm-white/80 text-sm">
                {cred}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 gradient-forest">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Begin Here</p>
          <h2 className="font-heading text-4xl text-forest mb-4">
            A 15-minute conversation costs nothing
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-6" />
          <p className="text-sm text-forest/60 leading-relaxed mb-8">
            A relaxed call to understand your situation and explore whether coaching could help. No obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/business/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-forest text-warm-white rounded-full text-sm tracking-wide hover:bg-forest/85 transition-colors"
            >
              Book a Free Call <ArrowRight size={14} />
            </Link>
            <Link
              href="/business/services"
              className="inline-flex items-center justify-center px-8 py-4 border border-forest/25 text-forest rounded-full text-sm tracking-wide hover:border-gold hover:text-gold transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
