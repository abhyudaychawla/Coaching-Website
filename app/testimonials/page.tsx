import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { CTASection } from "@/components/ui/CTASection";
import { testimonials } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Stories",
  description: "Read what clients say about working with Anjali Raj — real stories of clarity, change, and transformation.",
};

const categories = [
  { key: "all", label: "All Stories" },
  { key: "clarity", label: "Clarity" },
  { key: "relationships", label: "Relationships" },
  { key: "transition", label: "Transition" },
  { key: "confidence", label: "Confidence" },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 px-6 gradient-warm">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Client Stories</p>
            <h1 className="font-heading text-5xl md:text-6xl text-navy leading-tight mb-4">
              Words from people who{" "}
              <span className="italic">found their way</span>
            </h1>
            <div className="section-divider mb-6" />
            <p className="text-base text-navy/65 leading-relaxed max-w-2xl">
              Every story here is unique. Every client came with something different. What they share in common is the courage to begin, and the willingness to stay with the process.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORY TAGS (static display - filtering would require client component) */}
      <section className="py-8 px-6 border-b border-gold-light/40 bg-warm-white sticky top-18 z-30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <span
                key={cat.key}
                className={`px-5 py-2 rounded-full text-xs tracking-wide border transition-colors ${
                  cat.key === "all"
                    ? "bg-navy text-warm-white border-navy"
                    : "border-gold-light/60 text-navy/60 hover:border-gold hover:text-gold"
                }`}
              >
                {cat.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ALL TESTIMONIALS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard
                key={t.id}
                quote={t.quote}
                author={t.author}
                location={t.location}
                featured={i === 0 || i === 3}
              />
            ))}
          </div>
        </div>
      </section>

      {/* INVITATION TO SHARE */}
      <section className="py-16 px-6 bg-beige">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">Confidential by Default</p>
          <h2 className="font-heading text-3xl text-navy mb-4">All stories shared with permission</h2>
          <div className="section-divider-center mb-6" />
          <p className="text-sm text-navy/65 leading-relaxed mb-8 max-w-lg mx-auto">
            Client privacy is taken seriously. Names and identifying details are used only with explicit consent. Some are anonymised entirely.
          </p>
          <p className="text-sm text-navy/50 italic font-heading text-lg">
            "Coaching changed the way I see myself. That's not something I expected to say."
          </p>
          <p className="text-xs text-navy/35 mt-2">— A client in transition</p>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        eyebrow="Your Story Starts Here"
        title="Ready to write your own chapter?"
        subtitle="A free 15-minute conversation is all it takes to begin. No pressure — just possibility."
        primaryLabel="Book a Free Call"
        primaryHref="/contact"
        secondaryLabel="Learn About Coaching"
        secondaryHref="/coaching"
      />
    </>
  );
}
