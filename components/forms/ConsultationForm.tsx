"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitConsultation } from "@/app/actions/consultation";
import type { ConsultationState } from "@/app/actions/consultation";
import { CheckCircle } from "lucide-react";

const initialState: ConsultationState = { success: false };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-4 bg-navy text-warm-white rounded-full text-sm tracking-wide hover:bg-navy/85 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
    >
      {pending ? "Sending..." : "Request a Conversation"}
    </button>
  );
}

export function ConsultationForm() {
  const [state, formAction] = useActionState(submitConsultation, initialState);

  if (state.success) {
    return (
      <div className="text-center py-12 px-6">
        <CheckCircle size={40} className="text-gold mx-auto mb-4" />
        <h3 className="font-heading text-2xl text-navy mb-3">Your request has been received</h3>
        <p className="text-sm text-navy/65 leading-relaxed max-w-md mx-auto">
          Thank you for taking this step. I'll reach out within 24–48 hours to arrange your complimentary exploratory conversation.
        </p>
        <p className="text-xs text-navy/40 mt-4">
          In the meantime, you're welcome to WhatsApp: +91 98181 24212
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      {/* Honeypot - hidden from humans */}
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
          Phone / WhatsApp
        </label>
        <input
          name="phone"
          type="tel"
          className="w-full px-4 py-3 rounded-xl border border-gold-light/60 bg-warm-white text-navy text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors"
          placeholder="+91 00000 00000"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs tracking-wide text-navy/60 mb-2 uppercase">
            Preferred Contact
          </label>
          <select
            name="preferredContactMethod"
            className="w-full px-4 py-3 rounded-xl border border-gold-light/60 bg-warm-white text-navy text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors"
          >
            <option value="email">Email</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="phone">Phone Call</option>
          </select>
        </div>
        <div>
          <label className="block text-xs tracking-wide text-navy/60 mb-2 uppercase">
            Area of Interest
          </label>
          <select
            name="serviceInterest"
            className="w-full px-4 py-3 rounded-xl border border-gold-light/60 bg-warm-white text-navy text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors"
          >
            <option value="general">Not sure yet</option>
            <option value="relationship_clarity">Relationship Clarity</option>
            <option value="life_transitions">Life Transitions</option>
            <option value="decision_making">Decision Making</option>
            <option value="emotional_wellbeing">Emotional Wellbeing</option>
            <option value="inner_stillness">Inner Stillness</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs tracking-wide text-navy/60 mb-2 uppercase">
          Anything you'd like to share (optional)
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-gold-light/60 bg-warm-white text-navy text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors resize-none"
          placeholder="A brief note about where you are and what you're hoping for..."
        />
      </div>

      {state.error && (
        <p className="text-sm text-red-500 bg-red-50 px-4 py-3 rounded-xl">{state.error}</p>
      )}

      <SubmitButton />

      <p className="text-center text-xs text-navy/35 leading-relaxed">
        Completely confidential. No obligations. Just a conversation.
      </p>
    </form>
  );
}
