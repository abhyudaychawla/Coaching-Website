import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/content";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Anjali" },
  { href: "/coaching", label: "Coaching Services" },
  { href: "/process", label: "How It Works" },
  { href: "/testimonials", label: "Client Stories" },
  { href: "/contact", label: "Book a Conversation" },
];

export function Footer() {
  return (
    <footer className="bg-beige border-t border-gold-light/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <span className="font-script text-4xl text-gold block mb-2">
              {siteConfig.coachName}
            </span>
            <p className="text-[10px] tracking-[0.2em] text-navy/50 uppercase mb-4">
              Change & Clarity Coaching
            </p>
            <div className="section-divider mb-4" />
            <p className="text-sm text-navy/65 leading-relaxed max-w-xs">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-navy/40 mb-6 font-sans">
              Navigate
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy/65 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-navy/40 mb-6 font-sans">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-gold mt-0.5 shrink-0" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-sm text-navy/65 hover:text-gold transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={15} className="text-gold mt-0.5 shrink-0" />
                <a
                  href={siteConfig.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-navy/65 hover:text-gold transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-gold mt-0.5 shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-navy/65 hover:text-gold transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-navy/65">{siteConfig.location}</span>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href={siteConfig.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-gold/50 text-navy/70 text-sm rounded-full hover:bg-gold hover:text-warm-white hover:border-gold transition-all duration-200"
              >
                <MessageCircle size={15} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Credentials strip */}
        <div className="border-t border-gold-light/60 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-xs text-navy/40 leading-relaxed">
              {siteConfig.credentials.join(" · ")}
            </p>
            <p className="text-xs text-navy/35 whitespace-nowrap">
              © {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
