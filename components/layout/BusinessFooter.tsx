import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/content";

const quickLinks = [
  { href: "/business", label: "Home" },
  { href: "/business/about", label: "About Anjali" },
  { href: "/business/services", label: "Business Services" },
  { href: "/business/contact", label: "Book a Consultation" },
];

export function BusinessFooter() {
  return (
    <footer className="bg-moss border-t border-forest-light/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <span className="font-script text-4xl text-gold block mb-2">
              {siteConfig.coachName}
            </span>
            <p className="text-[10px] tracking-[0.2em] text-forest/50 uppercase mb-4">
              Business Clarity Coaching
            </p>
            <div className="w-12 h-px bg-gold mb-4" />
            <p className="text-sm text-forest/65 leading-relaxed max-w-xs">
              Helping founders build organisations that run with clarity and profitability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-forest/40 mb-6 font-sans">
              Navigate
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-forest/65 hover:text-sage transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-forest/40 mb-6 font-sans">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-gold mt-0.5 shrink-0" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-sm text-forest/65 hover:text-sage transition-colors"
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
                  className="text-sm text-forest/65 hover:text-sage transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-gold mt-0.5 shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-forest/65 hover:text-sage transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-forest/65">{siteConfig.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-forest-light/60 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-xs text-forest/40 leading-relaxed">
              {siteConfig.credentials.join(" · ")}
            </p>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-xs text-forest/35 hover:text-gold transition-colors">
                ← All Coaching
              </Link>
              <p className="text-xs text-forest/35 whitespace-nowrap">
                © {new Date().getFullYear()} {siteConfig.coachName}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
