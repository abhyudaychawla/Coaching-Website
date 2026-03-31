"use client";

import { useEffect } from "react";
import { siteConfig } from "@/lib/content";

interface CalendlyEmbedProps {
  url?: string;
}

export function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  const calendlyUrl = url || siteConfig.calendlyUrl;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="rounded-2xl overflow-hidden border border-gold-light/40 shadow-sm">
      <div
        className="calendly-inline-widget"
        data-url={`${calendlyUrl}?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=162040`}
        style={{ minWidth: "320px", height: "700px" }}
      />
    </div>
  );
}
