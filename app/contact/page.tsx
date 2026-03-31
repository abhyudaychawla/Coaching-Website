import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/content";
import { Phone, Mail, MapPin, MessageCircle, Shield, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Book",
  description: "Schedule a free 15-minute exploratory conversation with Anjali Raj. Also available via WhatsApp at +91 98181 24212.",
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-16 px-6 gradient-warm">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Get in Touch</p>
            <h1 className="font-heading text-5xl md:text-6xl text-navy leading-tight mb-4">
              The door is{" "}
              <span className="italic">always open</span>
            </h1>
            <div className="section-divider mb-6" />
            <p className="text-base text-navy/65 leading-relaxed">
              Whether you're ready to begin or simply curious about what coaching might offer — a conversation is the right first step. All enquiries are treated with complete confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="py-8 px-6 bg-beige border-y border-gold-light/40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center md:justify-between gap-6">
            {[
              { icon: Shield, label: "100% Confidential" },
              { icon: Clock, label: "Response within 24 hours" },
              { icon: MessageCircle, label: "No pressure, no obligation" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={16} className="text-gold" />
                <span className="text-sm text-navy/65">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left: Contact info + direct contact */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <SectionHeading
                  eyebrow="Direct Contact"
                  title="Reach out directly"
                />
                <p className="text-sm text-navy/65 leading-relaxed mt-4">
                  Prefer to reach out directly? You're welcome to call, WhatsApp, or email. All channels lead to the same warm response.
                </p>
              </div>

              <div className="space-y-5">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-4 p-5 bg-beige rounded-2xl border border-gold-light/40 hover:border-gold/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-warm-white border border-gold-light flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs tracking-wide text-navy/40 uppercase mb-0.5">Phone / WhatsApp</p>
                    <p className="text-sm text-navy font-medium group-hover:text-gold transition-colors">{siteConfig.phone}</p>
                  </div>
                </a>

                <a
                  href={siteConfig.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-beige rounded-2xl border border-gold-light/40 hover:border-gold/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-warm-white border border-gold-light flex items-center justify-center shrink-0">
                    <MessageCircle size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs tracking-wide text-navy/40 uppercase mb-0.5">WhatsApp</p>
                    <p className="text-sm text-navy font-medium group-hover:text-gold transition-colors">Message on WhatsApp</p>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-5 bg-beige rounded-2xl border border-gold-light/40 hover:border-gold/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-warm-white border border-gold-light flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs tracking-wide text-navy/40 uppercase mb-0.5">Email</p>
                    <p className="text-sm text-navy font-medium group-hover:text-gold transition-colors">{siteConfig.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-5 bg-beige rounded-2xl border border-gold-light/40">
                  <div className="w-10 h-10 rounded-full bg-warm-white border border-gold-light flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs tracking-wide text-navy/40 uppercase mb-0.5">Location</p>
                    <p className="text-sm text-navy/70">{siteConfig.location}</p>
                  </div>
                </div>
              </div>

              {/* Reassurance text */}
              <div className="p-6 rounded-2xl bg-navy">
                <p className="text-xs tracking-[0.15em] uppercase text-gold mb-3">Confidentiality Promise</p>
                <p className="text-sm text-warm-white/75 leading-relaxed">
                  Everything you share — in this form or in any conversation — remains completely private. This is a safe, judgment-free space.
                </p>
              </div>
            </div>

            {/* Right: Consultation request form */}
            <div className="lg:col-span-3">
              <SectionHeading
                eyebrow="Free 15-Minute Call"
                title="Request a conversation"
                subtitle="Fill in a few details below. There's no commitment — just a chance to connect."
              />
              <div className="mt-8 bg-warm-white rounded-3xl p-8 border border-gold-light/40 shadow-sm">
                <ConsultationForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GENERAL CONTACT FORM */}
      <section className="py-20 px-6 bg-beige">
        <div className="max-w-2xl mx-auto">
          <SectionHeading
            eyebrow="General Enquiries"
            title="Send a message"
            subtitle="Not ready for a consultation yet? Send a message and I'll respond within 24 hours."
            centered
          />
          <div className="mt-10 bg-warm-white rounded-3xl p-8 border border-gold-light/40 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
