import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Great_Vibes } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Anjali Raj | Change & Clarity Coach",
    template: "%s | Anjali Raj Coaching",
  },
  description:
    "Creating space to navigate life, relationships, and decisions with greater clarity and emotional steadiness. Book a free 15-minute exploratory conversation.",
  keywords: [
    "life coach",
    "clarity coach",
    "change coach",
    "emotional steadiness",
    "decision making",
    "relationship clarity",
    "inner stillness",
    "executive coaching",
    "personal coaching",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anjalirajcoaching.com",
    siteName: "Change & Clarity Coaching",
    title: "Anjali Raj | Change & Clarity Coach",
    description:
      "Navigate life, relationships, and decisions with greater clarity and emotional steadiness.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${cormorant.variable} ${greatVibes.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
