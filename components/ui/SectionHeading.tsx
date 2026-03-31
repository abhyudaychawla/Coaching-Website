interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  lightMode?: boolean; // for dark navy backgrounds
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  lightMode = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow && (
        <p
          className={`text-xs tracking-[0.25em] uppercase mb-4 font-sans ${
            lightMode ? "text-gold" : "text-gold"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-heading text-4xl md:text-5xl leading-tight mb-4 ${
          lightMode ? "text-warm-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      <div className={centered ? "section-divider-center" : "section-divider"} />
      {subtitle && (
        <p
          className={`text-base md:text-lg leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${lightMode ? "text-warm-white/75" : "text-navy/65"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
