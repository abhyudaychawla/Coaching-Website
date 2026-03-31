import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { businessHowItWorks, businessPillars, businessStats, siteConfig } from "@/lib/content";
import { ArrowRight, Clock, Video, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Business Services | Anjali Raj",
  description: "Business clarity, founder decision support, leadership alignment, and intergenerational business coaching.",
};

const services = [
  {
    id: "founder-clarity",
    title: "Founder Clarity Coaching",
    subtitle: "For founders who need to see clearly",
    description:
      "A dedicated thinking partnership for founders navigating complexity — strategic decisions, leadership challenges, or simply the weight of running a growing business. A confidential space to slow down, think clearly, and move forward with intention.",
    duration: "60 minutes per session",
    format: "Video call (Zoom / Google Meet)",
    featured: true,
  },
  {
    id: "leadership-alignment",
    title: "Leadership & Team Alignment",
    subtitle: "When the team isn't moving together",
    description:
      "For founders whose leadership teams have grown but not aligned. We work through role clarity, decision flow, communication patterns, and the structural issues that create friction and slow the business down.",
    duration: "60–90 minutes per session",
    format: "Video call or in-person (Delhi)",
    featured: false,
  },
  {
    id: "family-business",
    title: "Intergenerational Business Coaching",
    subtitle: "For family businesses navigating transition",
    description:
      "Family businesses carry a unique complexity — relationships, legacy, and business interests are inseparable. This coaching creates a structured, neutral space to work through generational transitions, succession questions, and the conversations that are hardest to have internally.",
    duration: "60–90 minutes per session",
    format: "Video call or in-person (Delhi)",
    featured: false,
  },
  {
    id: "decision-support",
    title: "Founder Decision Support",
    subtitle: "For high-stakes decisions that feel stuck",
    description:
      "A focused engagement around a specific strategic decision — a pivot, an acquisition, a leadership change, a restructure. We work through the decision systematically: what you know, what you don't, what you fear, and what clarity would actually allow you to do.",
    duration: "Single session or short engagement",
    format: "Video call",
    featured: false,
  },
];

const forYouIf = [
  "Your business is growing but feels harder to run, not easier",
  "You're making decisions under pressure without enough clarity",
  "Your leadership team is misaligned or not performing to potential",
  "You're navigating a family business transition",
  "You want a confidential thinking partner outside your organisation",
  "You know something needs to change but can't see what",
];

const notForYouIf = [
  "You want someone to run your business strategy for you",
  "You're looking for a management consultant with a pre-built framework",
  "You want quick fixes without honest examination",
  "You're not willing to look at your own role in the situation",
];

export default function BusinessServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 px-6 gradient-forest">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Business Coaching Services</p>
            <h1 className="font-heading text-5xl md:text-6xl text-forest leading-tight mb-4">
              Clarity isn't a luxury. <span className="italic">It's what allows growth.</span>
            </h1>
            <div className="w-16 h-px bg-gold mb-6" />
            <p className="text-base text-forest/65 leading-relaxed max-w-2xl">
              Each engagement is shaped entirely around your business and your situation. Below is an overview of the primary areas Anjali works in with founders and leadership teams.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="What We Offer" title="Coaching for founders and leadership teams" />
          <div className="mt-12 space-y-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`rounded-3xl p-8 md:p-10 border transition-all duration-300 ${
                  service.featured
                    ? "bg-forest text-warm-white border-forest"
                    : "bg-warm-white border-forest-light/40 hover:border-sage/40 hover:shadow-sm"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-2">
                    <p className="text-xs tracking-[0.2em] uppercase mb-3 text-gold">{service.subtitle}</p>
                    <h3 className={`font-heading text-2xl md:text-3xl mb-4 ${service.featured ? "text-warm-white" : "text-forest"}`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-6 ${service.featured ? "text-warm-white/75" : "text-forest/65"}`}>
                      {service.description}
                    </p>
                    <Link
                      href="/business/contact"
                      className={`inline-flex items-center gap-2 text-sm transition-colors duration-200 ${
                        service.featured ? "text-gold hover:text-gold-light" : "text-sage hover:text-forest"
                      }`}
                    >
                      Enquire about this service <ArrowRight size={14} />
                    </Link>
                  </div>
                  <div className={`rounded-2xl p-6 ${service.featured ? "bg-white/5 border border-white/10" : "bg-moss border border-forest-light/30"}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <Clock size={14} className="text-gold" />
                      <span className={`text-xs tracking-wide ${service.featured ? "text-warm-white/60" : "text-forest/50"}`}>
                        {service.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Video size={14} className="text-gold" />
                      <span className={`text-xs tracking-wide ${service.featured ? "text-warm-white/60" : "text-forest/50"}`}>
                        {service.format}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS CLARITY FRAMEWORK */}
      <section className="py-20 px-6 bg-moss">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="The Framework"
            title="How we bring clarity to your business"
            subtitle="All coaching work is structured around four areas that drive business performance."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {businessPillars.map((pillar) => (
              <div key={pillar.id} className="bg-warm-white rounded-2xl p-7 border border-forest-light/40 text-center">
                <h3 className="font-heading text-xl text-forest mb-3">{pillar.title}</h3>
                <div className="w-8 h-px bg-gold mx-auto mb-4" />
                <p className="text-sm text-forest/60 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Is This Right For You?" title="Who this coaching is for" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            <div>
              <h3 className="font-heading text-xl text-forest mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sage/15 flex items-center justify-center">
                  <CheckCircle size={16} className="text-sage" />
                </span>
                This is for you if...
              </h3>
              <ul className="space-y-4">
                {forYouIf.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    <span className="text-sm text-forest/70 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-xl text-forest mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                  <span className="text-red-400 text-sm font-medium">✕</span>
                </span>
                This is not for you if...
              </h3>
              <ul className="space-y-4">
                {notForYouIf.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-forest/25 mt-2 shrink-0" />
                    <span className="text-sm text-forest/70 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-5 rounded-2xl bg-moss border border-forest-light/40">
                <p className="text-xs text-forest/60 leading-relaxed">
                  <strong className="text-forest">Note:</strong> Business coaching is not strategy consulting. It's a thinking partnership that helps you lead your business with greater clarity — the decisions remain yours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6 bg-forest">
        <div className="max-w-4xl mx-auto">
          <SectionHeading eyebrow="Why It Matters" title="The case for business clarity" lightMode />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {businessStats.map((stat) => (
              <div key={stat.number} className="text-center">
                <p className="font-heading text-5xl text-gold mb-3">{stat.number}</p>
                <p className="text-sm text-warm-white/70 leading-relaxed mb-2">{stat.label}</p>
                <p className="text-xs text-warm-white/35 tracking-wide">*{stat.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 gradient-forest">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Start Here</p>
          <h2 className="font-heading text-4xl text-forest mb-4">
            Begin with a 15-minute conversation
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-6" />
          <p className="text-sm text-forest/60 leading-relaxed mb-8">
            A relaxed call to understand your business situation and explore whether coaching could help.
          </p>
          <Link
            href="/business/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-forest text-warm-white rounded-full text-sm tracking-wide hover:bg-forest/85 transition-colors"
          >
            Schedule a Consultation <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
