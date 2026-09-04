"use client";

import React, { useState } from "react";
import { 
  Check, 
  ShieldCheck, 
  ArrowLeft, 
  ArrowRight, 
  Truck, 
  UploadCloud, 
  FileCheck, 
  Sparkles,
  Building2,
  CheckCircle2
} from "lucide-react";

interface ScreenBusinessDetailsProps {
  onBack: () => void;
  onNext: () => void;
}

export default function ScreenBusinessDetails({ onBack, onNext }: ScreenBusinessDetailsProps) {
  const [gstin, setGstin] = useState("07AAACB1234F1Z5");
  const [fssai, setFssai] = useState("10019011006543");
  const [category, setCategory] = useState("5-Star Luxury Hotel & Banquets");
  const [procurementVolume, setProcurementVolume] = useState("₹5L - ₹15L / month");
  const [isDocumentUploaded, setIsDocumentUploaded] = useState(true);

  const hubs = [
    "Mumbai Hub",
    "Delhi NCR",
    "Bengaluru",
    "Goa Express",
    "Hyderabad",
    "Kolkata",
    "Chennai",
  ];

  return (
    <div className="min-h-[calc(100vh-61px)] flex flex-col bg-[#FAF8FD]">
      {/* TOP STEPPER HEADER */}
      <div className="bg-white border-b border-purple-100 py-4 px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#160C2B] text-amber-300 font-serif font-bold flex items-center justify-center text-xs shadow-md">
            H
          </div>
          <span className="text-xs uppercase font-bold tracking-wider text-slate-700">
            Enterprise Onboarding Portal
          </span>
        </div>

        {/* Stepper Steps */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto max-w-full custom-scrollbar py-1">
          {/* Step 1 */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-xs font-semibold">
            <span className="w-4 h-4 rounded-full bg-purple-700 text-white flex items-center justify-center text-[10px]">
              ✓
            </span>
            <span>01 Business Details</span>
          </div>

          <span className="text-slate-300">-</span>

          {/* Step 2 */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold shadow-xs">
            <span className="w-4 h-4 rounded-full bg-amber-600 text-white flex items-center justify-center text-[10px] font-bold">
              02
            </span>
            <span>Verification</span>
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          </div>

          <span className="text-slate-300">-</span>

          {/* Step 3 */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-400 text-xs font-medium">
            <span>03 Your Menu</span>
          </div>

          <span className="text-slate-300">-</span>

          {/* Step 4 */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-400 text-xs font-medium">
            <span>04 Complete</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-6xl mx-auto w-full p-4 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        {/* COMPLIANCE BANNER */}
        <div className="bg-gradient-to-r from-purple-50/90 via-white to-amber-50/60 border border-purple-100/80 rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-[11px] font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
            <span>Tier-1 Hospitality Partner Compliance</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Tell us about your business
          </h1>
          <p className="text-slate-600 text-sm mt-2 max-w-2xl leading-relaxed">
            We need a few details to verify your business and tailor Fortune Gourmet recommendations, allocations, and direct cold-chain access to your kitchen.
          </p>
        </div>

        {/* TWO COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT FORM PANEL (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-purple-100/80 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="font-serif font-bold text-lg text-slate-900">
                Business &amp; License Credentials
              </h3>
              <span className="text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Instant Verification Eligible
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1.5">
                  GSTIN Registration Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={gstin}
                    onChange={(e) => setGstin(e.target.value)}
                    className="w-full px-4 py-3 bg-purple-50/20 border border-purple-200/80 rounded-xl text-sm font-mono uppercase text-slate-900 font-semibold focus:ring-2 focus:ring-purple-600 focus:outline-none"
                  />
                  <span className="absolute right-3 top-3 text-[10px] bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded uppercase">
                    VERIFIED
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1.5">
                  FSSAI License Number (14 Digits)
                </label>
                <input
                  type="text"
                  value={fssai}
                  onChange={(e) => setFssai(e.target.value)}
                  className="w-full px-4 py-3 bg-purple-50/20 border border-purple-200/80 rounded-xl text-sm font-mono text-slate-900 font-semibold focus:ring-2 focus:ring-purple-600 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1.5">
                    Establishment Type
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-purple-200/80 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-purple-600 focus:outline-none"
                  >
                    <option>5-Star Luxury Hotel &amp; Banquets</option>
                    <option>Standalone Fine Dining Restaurant</option>
                    <option>Executive Catering Enterprise</option>
                    <option>Boutique Patisserie &amp; Bakery</option>
                    <option>Multi-Location Cloud Kitchen</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1.5">
                    Monthly Procurement Volume
                  </label>
                  <select
                    value={procurementVolume}
                    onChange={(e) => setProcurementVolume(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-purple-200/80 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-purple-600 focus:outline-none"
                  >
                    <option>₹1L - ₹5L / month</option>
                    <option>₹5L - ₹15L / month</option>
                    <option>₹15L - ₹50L / month</option>
                    <option>₹50L+ Enterprise / Institutional</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANELS (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Top Card - Document Upload AI Parsing */}
            <div className="bg-white rounded-3xl p-6 border border-purple-100/80 shadow-xs flex flex-col justify-between h-48">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-purple-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" /> Express AI Extraction Ready
                </span>
                <button
                  type="button"
                  onClick={() => setIsDocumentUploaded(!isDocumentUploaded)}
                  className="text-[11px] font-bold text-amber-700 hover:underline"
                >
                  Optional: Skip &amp; complete later
                </button>
              </div>

              {isDocumentUploaded ? (
                <div className="my-auto bg-emerald-50/90 border border-emerald-200 rounded-2xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-emerald-950 font-mono">
                      fssai_gstin_verified_taj.pdf
                    </div>
                    <div className="text-[11px] text-emerald-800">
                      Auto-extracted 14 license parameters successfully
                    </div>
                  </div>
                </div>
              ) : (
                <div className="my-auto border-2 border-dashed border-purple-200 rounded-2xl p-4 text-center cursor-pointer hover:bg-purple-50/50 transition-colors">
                  <UploadCloud className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                  <p className="text-xs font-semibold text-purple-900">
                    Upload FSSAI / GST Certificate
                  </p>
                  <p className="text-[10px] text-slate-500">Auto-fill details in seconds</p>
                </div>
              )}
            </div>

            {/* Bottom Card - Cold Chain Fleet Info */}
            <div className="bg-gradient-to-br from-purple-50 via-white to-purple-50/70 rounded-3xl p-6 border border-purple-100/90 shadow-xs space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#160C2B] text-amber-300 flex items-center justify-center shrink-0 shadow-md">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-serif text-purple-950">
                    Certified Cold-Chain Express Fleet
                  </h4>
                  <p className="text-xs text-purple-900/80 mt-1 leading-relaxed">
                    Fortune Gourmet operates certified cold-chain logistics across Mumbai, Delhi NCR, Bengaluru, Goa, Hyderabad, Kolkata, and Chennai. Verification typically completes within <strong>2 business hours</strong>.
                  </p>
                </div>
              </div>

              {/* Hub Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {hubs.map((hub, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-semibold bg-white border border-purple-200 text-purple-900 px-3 py-1 rounded-full shadow-2xs"
                  >
                    {hub}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FIXED BAR */}
        <div className="bg-white border border-purple-100/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <div className="text-xs text-slate-500 font-medium text-center">
            Auto-saved draft • Ready for chef consultation
          </div>

          <button
            onClick={onNext}
            className="flex items-center gap-2 px-7 py-3 rounded-xl luxury-button-purple text-white text-sm font-bold shadow-lg shadow-purple-900/20 transition-all group"
          >
            <span>Continue to Menu Setup</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
