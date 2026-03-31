"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/content";

const navLinks = [
  { href: "/business", label: "Home" },
  { href: "/business/about", label: "About" },
  { href: "/business/services", label: "Services" },
  { href: "/business/contact", label: "Contact" },
];

export function BusinessNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-warm-white/95 backdrop-blur-md shadow-sm border-b border-forest-light/40"
          : "bg-warm-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link href="/business" className="flex flex-col leading-none group">
            <span className="font-script text-3xl text-gold leading-none tracking-wide">
              {siteConfig.coachName}
            </span>
            <span className="text-[9px] tracking-[0.2em] text-forest/50 uppercase mt-0.5 font-sans">
              Business Clarity Coaching
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors duration-200 hover:text-sage ${
                  pathname === link.href
                    ? "text-forest font-medium"
                    : "text-forest/65"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/business/contact"
              className="ml-2 px-5 py-2.5 bg-forest text-warm-white text-sm rounded-full tracking-wide hover:bg-forest/85 transition-colors duration-200"
            >
              Book a Call
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-forest/70 hover:text-forest transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-warm-white border-t border-forest-light/40 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide py-1 transition-colors hover:text-sage ${
                pathname === link.href ? "text-forest font-medium" : "text-forest/65"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/business/contact"
            className="mt-2 px-5 py-3 bg-forest text-warm-white text-sm rounded-full tracking-wide text-center hover:bg-forest/85 transition-colors"
          >
            Book a Call
          </Link>
          <Link href="/" className="text-xs text-forest/40 hover:text-sage transition-colors text-center mt-1">
            ← All Coaching
          </Link>
        </div>
      </div>
    </header>
  );
}
