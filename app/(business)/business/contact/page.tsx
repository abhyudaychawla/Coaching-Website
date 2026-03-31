import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { siteConfig } from "@/lib/content";
import { Phone, Mail, MapPin, MessageCircle, Shield, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Business Clarity Coaching",
  description: "Schedule a free 15-minute business coaching consultation with Anjali Raj.",
};

export default function BusinessContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6 gradient-forest">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Get in Touch</p>
            <h1 className="font-heading text-5xl md:text-6xl text-forest leading-tight mb-4">
              Let's start with <span className="italic">a conversation</span>
            </h1>
            <div className="w-16 h-px bg-gold mb-6" />
            <p className="text-base text-forest/65 leading-relaxed">
              A relaxed, confidential conversation to understand your business situation and explore whether coaching could help. No obligation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 px-6 bg-moss border-y border-forest-light/40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center md:justify-between gap-6">
            {[
              { icon: Shield, label: "100% Confidential" },
              { icon: Clock, label: "Response within 24 hours" },
              { icon: MessageCircle, label: "No pressure, no obligation" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={16} className="text-gold" />
                <span className="text-sm text-forest/65">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <SectionHeading eyebrow="Direct Contact" title="Reach Anjali directly" />
                <p className="text-sm text-forest/65 leading-relaxed mt-4">
                  Prefer to reach out directly? All channels lead to the same warm, prompt response.
                </p>
              </div>
              <div className="space-y-5">
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-4 p-5 bg-moss rounded-2xl border border-forest-light/40 hover:border-sage/50 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-warm-white border border-forest-light flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs tracking-wide text-forest/40 uppercase mb-0.5">Phone / WhatsApp</p>
                    <p className="text-sm text-forest font-medium group-hover:text-sage transition-colors">{siteConfig.phone}</p>
                  </div>
                </a>
                <a href={siteConfig.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 bg-moss rounded-2xl border border-forest-light/40 hover:border-sage/50 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-warm-white border border-forest-light flex items-center justify-center shrink-0">
                    <MessageCircle size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs tracking-wide text-forest/40 uppercase mb-0.5">WhatsApp</p>
                    <p className="text-sm text-forest font-medium group-hover:text-sage transition-colors">Message on WhatsApp</p>
                  </div>
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 p-5 bg-moss rounded-2xl border border-forest-light/40 hover:border-sage/50 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-warm-white border border-forest-light flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs tracking-wide text-forest/40 uppercase mb-0.5">Email</p>
                    <p className="text-sm text-forest font-medium group-hover:text-sage transition-colors">{siteConfig.email}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-5 bg-moss rounded-2xl border border-forest-light/40">
                  <div className="w-10 h-10 rounded-full bg-warm-white border border-forest-light flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs tracking-wide text-forest/40 uppercase mb-0.5">Location</p>
                    <p className="text-sm text-forest/70">{siteConfig.location}</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-forest">
                <p className="text-xs tracking-[0.15em] uppercase text-gold mb-3">Confidentiality Promise</p>
                <p className="text-sm text-warm-white/75 leading-relaxed">
                  Everything discussed remains completely private. A safe, professional space for honest conversations about your business.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <SectionHeading
                eyebrow="Free 15-Minute Call"
                title="Request a consultation"
                subtitle="Tell me a little about your business. I'll be in touch within 24 hours."
              />
              <div className="mt-8 bg-warm-white rounded-3xl p-8 border border-forest-light/40 shadow-sm">
                <ConsultationForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
