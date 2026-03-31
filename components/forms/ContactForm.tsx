"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact } from "@/app/actions/contact";
import type { ContactState } from "@/app/actions/contact";
import { CheckCircle } from "lucide-react";

const initialState: ContactState = { success: false };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-4 bg-navy text-warm-white rounded-full text-sm tracking-wide hover:bg-navy/85 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);

  if (state.success) {
    return (
      <div className="text-center py-12 px-6">
        <CheckCircle size={40} className="text-gold mx-auto mb-4" />
        <h3 className="font-heading text-2xl text-navy mb-3">Message received</h3>
        <p className="text-sm text-navy/65 leading-relaxed max-w-md mx-auto">
          Thank you for reaching out. Your message has been received and I will respond shortly.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      {/* Honeypot */}
      <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs tracking-wide text-navy/60 mb-2 uppercase">
            Full Name *
          </label>
          <input
            name="fullName"
            type="text"
            required
            className="w-full px-4 py-3 rounded-xl border border-gold-light/60 bg-warm-white text-navy text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors"
            placeholder="Your name"
          />
          {state.fieldErrors?.fullName && (
            <p className="text-xs text-red-500 mt-1">{state.fieldErrors.fullName[0]}</p>
          )}
        </div>
        <div>
          <label className="block text-xs tracking-wide text-navy/60 mb-2 uppercase">
            Email Address *
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 rounded-xl border border-gold-light/60 bg-warm-white text-navy text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors"
            placeholder="your@email.com"
          />
          {state.fieldErrors?.email && (
            <p className="text-xs text-red-500 mt-1">{state.fieldErrors.email[0]}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-xs tracking-wide text-navy/60 mb-2 uppercase">
          Phone (optional)
        </label>
        <input
          name="phone"
          type="tel"
          className="w-full px-4 py-3 rounded-xl border border-gold-light/60 bg-warm-white text-navy text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors"
          placeholder="+91 00000 00000"
        />
      </div>

      <div>
        <label className="block text-xs tracking-wide text-navy/60 mb-2 uppercase">
          Subject *
        </label>
        <input
          name="subject"
          type="text"
          required
          className="w-full px-4 py-3 rounded-xl border border-gold-light/60 bg-warm-white text-navy text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors"
          placeholder="What is this regarding?"
        />
        {state.fieldErrors?.subject && (
          <p className="text-xs text-red-500 mt-1">{state.fieldErrors.subject[0]}</p>
        )}
      </div>

      <div>
        <label className="block text-xs tracking-wide text-navy/60 mb-2 uppercase">
          Message *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-gold-light/60 bg-warm-white text-navy text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors resize-none"
          placeholder="Share what's on your mind..."
        />
        {state.fieldErrors?.message && (
          <p className="text-xs text-red-500 mt-1">{state.fieldErrors.message[0]}</p>
        )}
      </div>

      {state.error && (
        <p className="text-sm text-red-500 bg-red-50 px-4 py-3 rounded-xl">{state.error}</p>
      )}

      <SubmitButton />
    </form>
  );
}
