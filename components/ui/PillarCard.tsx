import { Heart, Shield, Wind, Compass } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart size={22} className="text-gold" />,
  Shield: <Shield size={22} className="text-gold" />,
  Wind: <Wind size={22} className="text-gold" />,
  Compass: <Compass size={22} className="text-gold" />,
};

interface PillarCardProps {
  title: string;
  description: string;
  icon: string;
}

export function PillarCard({ title, description, icon }: PillarCardProps) {
  return (
    <div className="bg-warm-white border border-gold-light/40 rounded-2xl p-8 hover:shadow-md hover:border-gold/30 transition-all duration-300 group">
      <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center mb-5 group-hover:bg-champagne transition-colors duration-300">
        {iconMap[icon] || <Heart size={22} className="text-gold" />}
      </div>
      <h3 className="font-heading text-xl text-navy mb-3">{title}</h3>
      <div className="section-divider mb-4" style={{ width: "2rem" }} />
      <p className="text-sm text-navy/65 leading-relaxed">{description}</p>
    </div>
  );
}
