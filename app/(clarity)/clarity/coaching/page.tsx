import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { services, faqs } from "@/lib/content";
import { Clock, Video, CheckCircle, XCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Coaching Services",
  description: "Explore 1:1 coaching, relationship clarity, life transitions, and decision clarity coaching with Anjali Raj.",
};

const forYouIf = [
  "You feel stuck in a loop of overthinking and can't find your way out",
  "You're at a crossroads — in your career, a relationship, or your sense of self",
  "You make decisions, then immediately second-guess them",
  "You're going through a transition that feels disorienting or isolating",
  "You know something needs to change, but you don't know what or how",
  "You want a confidential space to think out loud without judgment",
];

const notForYouIf = [
  "You're looking for counselling or clinical mental health treatment",
  "You want someone to make decisions for you",
  "You're in acute crisis and need immediate professional support",
  "You're unwilling to reflect or engage with honest self-examination",
];

export default function CoachingPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-6 gradient-warm">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Coaching Services</p>
            <h1 className="font-heading text-5xl md:text-6xl text-navy leading-tight mb-4">
              Clarity isn't a luxury. <span className="italic">It's a practice.</span>
            </h1>
            <div className="section-divider mb-6" />
            <p className="text-base text-navy/65 leading-relaxed max-w-2xl">
              Every coaching engagement is tailored entirely to you — your situation, your pace, your goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="What We Offer" title="Coaching for life's most demanding moments" />
          <div className="mt-12 space-y-8">
            {services.map((service, i) => (
              <div key={service.id} className={`rounded-3xl p-8 md:p-10 border ${i === 0 ? "bg-navy text-warm-white border-navy" : "bg-warm-white border-gold-light/40 hover:border-gold/30 hover:shadow-sm"} transition-all duration-300`}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-2">
                    <p className="text-xs tracking-[0.2em] uppercase mb-3 text-gold">{service.subtitle}</p>
                    <h3 className={`font-heading text-2xl md:text-3xl mb-4 ${i === 0 ? "text-warm-white" : "text-navy"}`}>{service.title}</h3>
                    <p className={`text-sm leading-relaxed mb-6 ${i === 0 ? "text-warm-white/75" : "text-navy/65"}`}>{service.description}</p>
                    <Link href="/clarity/contact" className={`inline-flex items-center gap-2 text-sm transition-colors duration-200 ${i === 0 ? "text-gold hover:text-gold-light" : "text-gold hover:text-navy"}`}>
                      Enquire about this service <ArrowRight size={14} />
                    </Link>
                  </div>
                  <div className={`rounded-2xl p-6 ${i === 0 ? "bg-white/5 border border-white/10" : "bg-beige border border-gold-light/30"}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <Clock size={14} className="text-gold" />
                      <span className={`text-xs tracking-wide ${i === 0 ? "text-warm-white/60" : "text-navy/50"}`}>{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Video size={14} className="text-gold" />
                      <span className={`text-xs tracking-wide ${i === 0 ? "text-warm-white/60" : "text-navy/50"}`}>{service.format}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-beige">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Is This Right For You?" title="Who this coaching is for — and who it is not" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            <div>
              <h3 className="font-heading text-xl text-navy mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center"><CheckCircle size={16} className="text-gold" /></span>
                This is for you if...
              </h3>
              <ul className="space-y-4">
                {forYouIf.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    <span className="text-sm text-navy/70 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-xl text-navy mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center"><XCircle size={16} className="text-red-400" /></span>
                This is not for you if...
              </h3>
              <ul className="space-y-4">
                {notForYouIf.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-navy/30 mt-2 shrink-0" />
                    <span className="text-sm text-navy/70 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-5 rounded-2xl bg-warm-white border border-gold-light/40">
                <p className="text-xs text-navy/60 leading-relaxed">
                  <strong className="text-navy">Note:</strong> Coaching is not counselling. If you're dealing with clinical mental health conditions, please seek support from a licensed professional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading eyebrow="Common Questions" title="Frequently asked questions" />
          <div className="mt-10"><FAQAccordion items={faqs} /></div>
        </div>
      </section>

      <CTASection
        eyebrow="The First Step Is Simple"
        title="Start with a conversation"
        subtitle="Book a complimentary 15-minute call to explore how coaching might support where you are right now."
        primaryLabel="Schedule a Free Call"
        primaryHref="/clarity/contact"
        secondaryLabel="Learn How It Works"
        secondaryHref="/clarity/process"
      />
    </>
  );
}
