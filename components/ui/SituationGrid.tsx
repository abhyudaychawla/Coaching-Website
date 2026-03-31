interface SituationGridProps {
  items: string[];
}

export function SituationGrid({ items }: SituationGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-center gap-3 p-4 bg-warm-white rounded-xl border border-gold-light/30 hover:border-gold/40 transition-colors duration-200"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
          <span className="text-sm text-navy/75 leading-snug">{item}</span>
        </div>
      ))}
    </div>
  );
}
