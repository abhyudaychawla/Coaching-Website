import { siteConfig } from "@/lib/content";
import { CheckCircle } from "lucide-react";

export function CredentialsStrip() {
  return (
    <div className="bg-beige border-y border-gold-light/50 py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 md:gap-10">
        {siteConfig.credentials.map((cred) => (
          <div key={cred} className="flex items-center gap-2">
            <CheckCircle size={14} className="text-gold shrink-0" />
            <span className="text-xs text-navy/60 tracking-wide">{cred}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
