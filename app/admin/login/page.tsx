import type { Metadata } from "next";
import { AdminLoginForm } from "@/components/forms/AdminLoginForm";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen gradient-warm flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <span className="font-script text-4xl text-gold">Anjali Raj</span>
          <p className="text-xs tracking-[0.2em] text-navy/40 uppercase mt-1">Admin Access</p>
        </div>
        <div className="bg-warm-white rounded-3xl p-8 border border-gold-light/40 shadow-sm">
          <h1 className="font-heading text-2xl text-navy mb-6 text-center">Sign In</h1>
          <AdminLoginForm />
        </div>
      </div>
    </div>
  );
}
