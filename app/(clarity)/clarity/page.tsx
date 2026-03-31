import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PillarCard } from "@/components/ui/PillarCard";
import { SituationGrid } from "@/components/ui/SituationGrid";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { CTASection } from "@/components/ui/CTASection";
import { CredentialsStrip } from "@/components/ui/CredentialsStrip";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { pillars, situations, testimonials, siteConfig } from "@/lib/content";
import { ArrowRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Home | Change & Clarity Coaching",
  description: "Anjali Raj helps you navigate life, relationships, and decisions with greater clarity and emotional steadiness. Book a free 15-minute exploratory conversation.",
};

export default function ClarityHomePage() {
  const featuredTestimonials = testimonials.filter(t => t.id === "t1" || t.id === "t2" || t.id === "t3");

  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-screen pt-24 pb-16 px-6 gradient-warm flex items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-beige/60 -translate-y-1/4 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-champagne/40 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6 font-sans">
                Change & Clarity Coaching
              </p>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-navy leading-[1.05] mb-6">
                Reclaim your{" "}
                <span className="italic text-gold">center</span>{" "}
                in the season of change
              </h1>
              <div className="section-divider mb-6" />
              <p className="text-base md:text-lg text-navy/65 leading-relaxed mb-10 max-w-lg">
                {siteConfig.tagline}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/clarity/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-warm-white rounded-full text-sm tracking-wide hover:bg-navy/85 transition-colors duration-200"
                >
                  Schedule a Conversation
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/clarity/coaching"
                  className="inline-flex items-center justify-center px-8 py-4 border border-navy/25 text-navy rounded-full text-sm tracking-wide hover:border-gold hover:text-gold transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-gold rounded-full" />
                  <span className="text-xs text-navy/50 tracking-wide">ICF Accredited</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-gold rounded-full" />
                  <span className="text-xs text-navy/50 tracking-wide">NeuroLeadership Institute</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-gold rounded-full" />
                  <span className="text-xs text-navy/50 tracking-wide">Free 15-min Call</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 rounded-[3rem] border border-gold/20 pointer-events-none" />
                <div className="absolute -top-2 -right-2 w-24 h-24 rounded-full border border-gold/30 pointer-events-none" />
                <div className="w-72 h-96 md:w-80 md:h-[480px] rounded-[2.5rem] bg-beige overflow-hidden relative border border-gold-light/50 shadow-xl">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-gold-light/60 mb-4 flex items-center justify-center">
                      <span className="font-script text-3xl text-gold">AR</span>
                    </div>
                    <p className="text-xs text-navy/40 leading-relaxed">
                      Place coach portrait here
                      <br />
                      Recommended: 640×800px
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                </div>
                <div className="absolute -bottom-4 -left-6 bg-warm-white rounded-2xl shadow-lg border border-gold-light/40 px-5 py-4">
                  <p className="font-script text-2xl text-gold leading-none">{siteConfig.coachName}</p>
                  <p className="text-[9px] tracking-[0.15em] text-navy/40 uppercase mt-1">Change & Clarity Coach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CredentialsStrip />

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                eyebrow="About the Coach"
                title="A space to think clearly and feel steady"
                subtitle="Anjali Raj is a Certified Change & Clarity Coach working with individuals navigating life's most demanding moments — the ones that require both heart and clarity."
              />
              <p className="text-sm text-navy/60 leading-relaxed mt-6">
                Her work is rooted in the belief that most answers already live within us — we simply need the right conditions to access them. Through coaching, she helps clients untangle complexity, quiet the noise, and move forward with intention rather than impulse.
              </p>
              <Link
                href="/clarity/about"
                className="inline-flex items-center gap-2 mt-8 text-sm text-gold hover:text-navy transition-colors duration-200"
              >
                Read Anjali's story
                <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "10+", label: "Years of Experience" },
                { number: "200+", label: "Clients Supported" },
                { number: "ICF", label: "Accredited Coach" },
                { number: "100%", label: "Confidential" },
              ].map((stat) => (
                <div key={stat.label} className="bg-beige rounded-2xl p-6 text-center border border-gold-light/30">
                  <p className="font-heading text-4xl text-navy mb-1">{stat.number}</p>
                  <p className="text-xs text-navy/50 tracking-wide leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-beige">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="How Coaching Works"
            title="Four pillars of transformation"
            subtitle="Every coaching engagement is unique, but these four threads run through all the work — helping you move from where you are to where you want to be."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {pillars.map((pillar) => (
              <PillarCard key={pillar.id} title={pillar.title} description={pillar.description} icon={pillar.icon} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading
                eyebrow="You're Not Alone"
                title="Situations people often bring to coaching"
                subtitle="There is no situation too complex or too 'ordinary' for coaching. If it matters to you, it belongs here."
              />
              <Link
                href="/clarity/coaching"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-navy text-warm-white rounded-full text-sm tracking-wide hover:bg-navy/85 transition-colors"
              >
                Explore Coaching Services
                <ArrowRight size={14} />
              </Link>
            </div>
            <SituationGrid items={situations} />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-champagne/50 border-y border-gold-light/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2">No Commitment</p>
              <h3 className="font-heading text-3xl md:text-4xl text-navy mb-2">
                Free 15-minute exploratory conversation
              </h3>
              <p className="text-sm text-navy/60">
                A relaxed, confidential space to explore how coaching might support you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/clarity/contact"
                className="px-8 py-4 bg-navy text-warm-white rounded-full text-sm tracking-wide hover:bg-navy/85 transition-colors whitespace-nowrap"
              >
                Schedule a Call
              </Link>
              <a
                href={siteConfig.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-navy/25 text-navy rounded-full text-sm tracking-wide hover:border-gold hover:text-gold transition-colors whitespace-nowrap"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Client Stories" title="What clients say" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {featuredTestimonials.map((t) => (
              <TestimonialCard key={t.id} quote={t.quote} author={t.author} location={t.location} featured={t.id === "t1"} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/clarity/testimonials" className="inline-flex items-center gap-2 text-sm text-gold hover:text-navy transition-colors">
              Read more stories
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-beige" id="book">
        <div className="max-w-2xl mx-auto">
          <SectionHeading
            eyebrow="Get Started"
            title="Request your free conversation"
            subtitle="Fill in a few details below and I'll be in touch within 24 hours."
            centered
          />
          <div className="mt-10 bg-warm-white rounded-3xl p-8 md:p-10 border border-gold-light/40 shadow-sm">
            <ConsultationForm />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Ready When You Are"
        title="Your clarity is closer than you think"
        subtitle="It takes one conversation to begin. No pressure, no agenda — just a calm space to explore what's possible."
        primaryLabel="Book a Free Call"
        primaryHref="/clarity/contact"
        secondaryLabel="Learn About Coaching"
        secondaryHref="/clarity/coaching"
      />
    </>
  );
}
