"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function AdminLoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        setError("Incorrect password. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-xs tracking-wide text-navy/60 mb-2 uppercase">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl border border-gold-light/60 bg-warm-white text-navy text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors"
          placeholder="Enter admin password"
        />
      </div>
      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-navy text-warm-white rounded-full text-sm tracking-wide hover:bg-navy/85 disabled:opacity-60 transition-all"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
}
