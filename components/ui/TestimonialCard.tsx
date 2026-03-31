interface TestimonialCardProps {
  quote: string;
  author: string;
  location?: string;
  featured?: boolean;
}

export function TestimonialCard({ quote, author, location, featured }: TestimonialCardProps) {
  return (
    <div
      className={`rounded-2xl p-8 transition-all duration-300 ${
        featured
          ? "bg-navy text-warm-white"
          : "bg-warm-white border border-gold-light/40 hover:border-gold/30 hover:shadow-sm"
      }`}
    >
      <p className="text-3xl text-gold mb-4 leading-none font-heading">"</p>
      <p
        className={`text-sm md:text-base leading-relaxed mb-6 italic font-heading ${
          featured ? "text-warm-white/90" : "text-navy/75"
        }`}
      >
        {quote}
      </p>
      <div className="flex items-center gap-3">
        <div
          className={`h-px flex-1 ${featured ? "bg-gold/30" : "bg-gold-light"}`}
        />
        <div className="text-right">
          <p className={`text-sm font-medium ${featured ? "text-gold" : "text-navy"}`}>
            {author}
          </p>
          {location && (
            <p className={`text-xs ${featured ? "text-warm-white/50" : "text-navy/40"}`}>
              {location}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
