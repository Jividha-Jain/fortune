"use client";

import React, { useState } from "react";
import { 
  UtensilsCrossed, 
  Star, 
  ArrowRight, 
  ShieldCheck, 
  Building,
  User,
  Mail,
  Phone,
  MapPin,
  Award,
  Sparkles
} from "lucide-react";

interface ScreenRegisterProps {
  onNavigateSignIn: () => void;
  onSuccessRegister: () => void;
}

export default function ScreenRegister({ onNavigateSignIn, onSuccessRegister }: ScreenRegisterProps) {
  const [formData, setFormData] = useState({
    fullName: "Chef Vikram Singh",
    workEmail: "chef.vikram@tajhotels.com",
    phone: "+91 98765 43210",
    businessName: "The Leela Palace Banquets & Fine Dining",
    city: "New Delhi (Delhi NCR)",
  });
  const [agreed, setAgreed] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to the Terms of Service & Cold-Chain Protocols.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccessRegister();
    }, 700);
  };

  return (
    <div className="min-h-[calc(100vh-61px)] flex flex-col lg:flex-row bg-[#FAF8FD]">
      {/* LEFT HERO SIDE - MICHELIN LUXURY DEEP PURPLE */}
      <div className="relative lg:w-5/12 bg-gradient-to-br from-[#0B0418] via-[#1C0B3D] to-[#120529] text-white p-8 lg:p-14 flex flex-col justify-between overflow-hidden">
        {/* Ambient Gold & Violet Lighting Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-500/15 rounded-full blur-[140px] pointer-events-none animate-orb" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[140px] pointer-events-none animate-orb" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Vertical Watermark Typography */}
        <div className="hidden xl:block absolute right-4 top-1/2 -translate-y-1/2 rotate-90 origin-right text-[9px] font-mono tracking-[0.4em] text-amber-200/20 uppercase select-none pointer-events-none">
          LOGISTICS // PAN-INDIA COLD-CHAIN EXCELLENCE
        </div>

        {/* Top Branding Header */}
        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 p-[1px] shadow-xl shadow-amber-900/30">
              <div className="w-full h-full bg-[#14082B] rounded-[15px] flex items-center justify-center text-amber-300">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
            </div>
            <div>
              <div className="font-serif text-2xl font-semibold tracking-tight uppercase text-white font-serif">
                Fortune Gourmet
              </div>
              <div className="text-[10px] uppercase font-mono tracking-[0.25em] text-amber-200/80">
                Specialities Est. 1997
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-2xl border border-amber-400/30 px-4 py-2 rounded-full text-xs font-medium text-amber-100 shadow-md">
            <Award className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Preferred by India&apos;s Premier Hotels &amp; Michelin Kitchens</span>
          </div>
        </div>

        {/* Middle Stats Grid */}
        <div className="relative z-10 my-10 bg-white/5 backdrop-blur-2xl border border-amber-400/20 rounded-3xl p-6 lg:p-8 grid grid-cols-2 gap-6 shadow-2xl">
          <div>
            <div className="text-3xl lg:text-4xl font-serif font-bold gold-gradient-text">3,500+</div>
            <div className="text-[11px] uppercase tracking-[0.15em] font-semibold text-purple-200/90 mt-1">
              HORECA Partners
            </div>
          </div>
          <div className="border-l border-white/10 pl-6">
            <div className="text-3xl lg:text-4xl font-serif font-bold text-white">100%</div>
            <div className="text-[11px] uppercase tracking-[0.15em] font-semibold text-purple-200/90 mt-1">
              Temperature Traceability
            </div>
          </div>
        </div>

        {/* Bottom Testimonial Card */}
        <div className="relative z-10 bg-white/5 backdrop-blur-2xl border border-amber-400/25 rounded-3xl p-6 lg:p-7 shadow-2xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex text-amber-400 gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-amber-300 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full">
              Flagship Partner
            </span>
          </div>

          <p className="text-base lg:text-lg font-serif italic text-white/95 leading-relaxed mb-4">
            &ldquo;Fortune&apos;s ingredient fidelity and prompt cold-chain supply redefined our banquet and specialty restaurant operations.&rdquo;
          </p>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-400 to-amber-200 text-purple-950 font-bold flex items-center justify-center font-serif text-sm shadow-md ring-2 ring-amber-400/40">
              VS
            </div>
            <div>
              <div className="text-sm font-bold text-white font-serif">Chef Vikram Singh</div>
              <div className="text-xs text-amber-200/80">The Leela Palace</div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT FORM SIDE */}
      <div className="lg:w-7/12 p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-between bg-[#FAF8FD]">
        <div className="max-w-xl w-full mx-auto my-auto py-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#0B0418] flex items-center justify-center text-amber-300 font-serif font-bold text-sm shadow-md">
                FG
              </div>
              <span className="font-serif font-bold text-sm tracking-widest uppercase text-purple-950">
                Fortune Gourmet
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-purple-950 bg-purple-100/80 border border-purple-200 px-3.5 py-1 rounded-full font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-700" />
              <span>B2B Portal</span>
            </div>
          </div>

          {/* Title */}
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 font-normal leading-[1.15] tracking-tight">
              Partner with <span className="font-semibold purple-gradient-text font-serif italic">Fortune Gourmet</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed max-w-lg">
              Start ordering artisanal ingredients in under 60 seconds. Fast-track approval for verified hospitality &amp; culinary enterprises.
            </p>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] uppercase font-bold tracking-[0.15em] text-slate-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-4 top-3.5 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-white border border-purple-200/80 rounded-2xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-amber-500/40 focus:border-amber-400 focus:outline-none shadow-xs transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase font-bold tracking-[0.15em] text-slate-700 mb-2">
                  Work Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-4 top-3.5 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-white border border-purple-200/80 rounded-2xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-amber-500/40 focus:border-amber-400 focus:outline-none shadow-xs transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] uppercase font-bold tracking-[0.15em] text-slate-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-4 top-3.5 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-white border border-purple-200/80 rounded-2xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-amber-500/40 focus:border-amber-400 focus:outline-none shadow-xs transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase font-bold tracking-[0.15em] text-slate-700 mb-2">
                  City / Metro Region
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 absolute left-4 top-3.5 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-white border border-purple-200/80 rounded-2xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-amber-500/40 focus:border-amber-400 focus:outline-none shadow-xs transition-all"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase font-bold tracking-[0.15em] text-slate-700 mb-2">
                Business / Establishment Name
              </label>
              <div className="relative">
                <Building className="w-4 h-4 absolute left-4 top-3.5 text-slate-400" />
                <input
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="e.g. Taj Palace / Olive Bar & Kitchen"
                  className="w-full pl-11 pr-4 py-3 bg-white border border-purple-200/80 rounded-2xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-amber-500/40 focus:border-amber-400 focus:outline-none shadow-xs transition-all"
                />
              </div>
            </div>

            {/* Checkbox */}
            <div className="pt-2">
              <label className="flex items-center gap-3 text-xs text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-purple-700 focus:ring-purple-600"
                />
                <span>
                  I agree to the{" "}
                  <a href="#terms" className="font-medium text-purple-900 underline">Terms of Service</a> &amp;{" "}
                  <a href="#protocols" className="font-medium text-purple-900 underline">Cold-Chain Protocols</a>.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-2xl luxury-button-green text-white font-semibold text-sm flex items-center justify-center gap-2.5 transition-all mt-6 group"
            >
              {isSubmitting ? (
                <span className="inline-block animate-spin font-bold">↻ Creating Account...</span>
              ) : (
                <>
                  <span>Create Partner Account</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-amber-300" />
                </>
              )}
            </button>
          </form>

          {/* Footer sign in link */}
          <div className="text-center text-xs text-slate-600 mt-6">
            Already registered?{" "}
            <button
              onClick={onNavigateSignIn}
              className="font-bold text-purple-900 hover:text-purple-700 underline"
            >
              Sign In to B2B Portal
            </button>
          </div>

          {/* Bottom callout box */}
          <div className="mt-10 bg-gradient-to-r from-purple-50 via-white to-amber-50/60 border border-purple-200/70 rounded-2xl p-4 flex items-center gap-3.5 shadow-xs">
            <div className="w-9 h-9 rounded-xl bg-amber-200/80 text-amber-900 flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
              ☕
            </div>
            <p className="text-xs text-purple-950 font-medium leading-relaxed">
              Built for hospitality professionals across India • Serving over <strong>3,500+ HORECA partners</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
