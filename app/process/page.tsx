import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { processSteps } from "@/lib/content";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Understand the coaching process — from the first call to ongoing sessions and real-world integration.",
};

const outcomes = [
  "A clearer sense of what you actually want",
  "Reduced overthinking and greater decisiveness",
  "More grounded emotional responses in difficult situations",
  "Better relationships — with yourself and others",
  "A stronger inner compass for navigating change",
  "Decisions made from clarity, not fear",
];

export default function ProcessPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 px-6 gradient-warm">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">The Process</p>
          <h1 className="font-heading text-5xl md:text-6xl text-navy leading-tight mb-4">
            How coaching{" "}
            <span className="italic">actually works</span>
          </h1>
          <div className="section-divider mb-6" />
          <p className="text-base text-navy/65 leading-relaxed max-w-2xl">
            Coaching is not a prescription or a performance. It's a structured yet deeply human process — one that meets you exactly where you are and helps you find your own way forward.
          </p>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Step by Step"
            title="The coaching journey"
            subtitle="Each stage is designed to build on the last — creating space for real insight, not just surface conversation."
          />
          <div className="mt-16 relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-12 top-8 bottom-8 w-px bg-gold-light" />

            <div className="space-y-12">
              {processSteps.map((step, i) => (
                <div key={step.step} className="flex gap-8 items-start">
                  {/* Step number */}
                  <div className="shrink-0 w-24 h-24 rounded-full bg-beige border border-gold-light flex items-center justify-center relative z-10">
                    <span className="font-heading text-2xl text-gold">{step.step}</span>
                  </div>
                  {/* Content */}
                  <div className={`flex-1 pb-4 ${i < processSteps.length - 1 ? "border-b border-gold-light/30" : ""}`}>
                    <h3 className="font-heading text-2xl md:text-3xl text-navy mb-3">{step.title}</h3>
                    <p className="text-sm text-navy/65 leading-relaxed max-w-2xl">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPECTED OUTCOMES */}
      <section className="py-20 px-6 bg-beige">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="What to Expect"
            title="Outcomes clients often experience"
            subtitle="Results vary by person and situation. These are patterns that tend to emerge with consistent, committed coaching work."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            {outcomes.map((outcome) => (
              <div key={outcome} className="flex items-start gap-3 p-4 bg-warm-white rounded-xl border border-gold-light/30">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                <span className="text-sm text-navy/70 leading-relaxed">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COACHING vs THERAPY disclaimer */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl bg-warm-white border border-gold-light/50 p-8 md:p-10">
            <div className="flex items-start gap-4">
              <Shield size={24} className="text-gold mt-1 shrink-0" />
              <div>
                <h3 className="font-heading text-xl text-navy mb-3">A note about coaching and therapy</h3>
                <p className="text-sm text-navy/65 leading-relaxed mb-3">
                  Coaching is a powerful tool for people who are fundamentally well but seeking greater clarity, direction, or support through change. It is <strong>not</strong> a substitute for therapy, counselling, or clinical mental health treatment.
                </p>
                <p className="text-sm text-navy/65 leading-relaxed">
                  If you are uncertain whether coaching or therapy is the right fit, Anjali is happy to discuss this openly in your first call. Referrals to appropriate professionals are always available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT A SESSION LOOKS LIKE */}
      <section className="py-16 px-6 bg-navy">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="A Typical Session"
            title="What happens in the room"
            subtitle="Sessions are 60 minutes via video call. There is no fixed agenda — just a structured space for you to think."
            lightMode
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              {
                time: "First 10 min",
                label: "Opening",
                description: "Where are you right now? What's present for you today? We begin with check-in.",
              },
              {
                time: "Next 40 min",
                label: "The Work",
                description: "Exploring the situation, the feelings, the blocks, the patterns. Going deeper.",
              },
              {
                time: "Final 10 min",
                label: "Integration",
                description: "What did you notice? What's shifted? What will you take into the week ahead?",
              },
            ].map((block) => (
              <div key={block.label} className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <p className="text-xs tracking-[0.2em] text-gold uppercase mb-2">{block.time}</p>
                <h4 className="font-heading text-lg text-warm-white mb-3">{block.label}</h4>
                <p className="text-sm text-warm-white/65 leading-relaxed">{block.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        eyebrow="Start Here"
        title="The first step is always a conversation"
        subtitle="Book a free 15-minute exploratory call to understand how the process might look for your specific situation."
        primaryLabel="Book a Free Call"
        primaryHref="/contact"
      />
    </>
  );
}
