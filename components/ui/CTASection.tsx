import Link from "next/link";

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  dark?: boolean;
}

export function CTASection({
  eyebrow = "Take the First Step",
  title,
  subtitle,
  primaryLabel = "Schedule a Conversation",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
  dark = true,
}: CTASectionProps) {
  return (
    <section className={`py-20 px-6 ${dark ? "gradient-navy" : "bg-beige"}`}>
      <div className="max-w-3xl mx-auto text-center">
        {eyebrow && (
          <p className={`text-xs tracking-[0.25em] uppercase mb-4 ${dark ? "text-gold" : "text-gold"}`}>
            {eyebrow}
          </p>
        )}
        <h2 className={`font-heading text-4xl md:text-5xl leading-tight mb-4 ${dark ? "text-warm-white" : "text-navy"}`}>
          {title}
        </h2>
        <div className="section-divider-center" />
        {subtitle && (
          <p className={`text-base md:text-lg leading-relaxed mb-10 ${dark ? "text-warm-white/70" : "text-navy/65"}`}>
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className={`px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-200 ${
              dark
                ? "bg-gold text-navy hover:bg-gold-light"
                : "bg-navy text-warm-white hover:bg-navy/85"
            }`}
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className={`px-8 py-4 rounded-full text-sm tracking-wide border transition-all duration-200 ${
                dark
                  ? "border-gold/50 text-warm-white hover:border-gold hover:text-gold"
                  : "border-navy/30 text-navy hover:border-navy"
              }`}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
