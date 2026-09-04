"use client";

import React, { useState } from "react";
import { X, ShieldCheck, HelpCircle, FileText, Info } from "lucide-react";

interface PortalFooterProps {
  onNavigateTab?: (tab: string) => void;
}

export default function PortalFooter({ onNavigateTab }: PortalFooterProps) {
  const [activeModal, setActiveModal] = useState<"about" | "support" | "terms" | "privacy" | null>(null);

  return (
    <>
      <footer className="w-full border-t border-slate-200/80 bg-white/95 backdrop-blur-md py-4 sm:py-5 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          
          {/* Left Brand Section */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-7 h-7 rounded-full bg-[#1C0B33] flex items-center justify-center font-serif text-[11px] font-bold text-[#F5C453] tracking-tight shrink-0 shadow-xs border border-[#F5C453]/20">
              FG
            </div>
            <div className="text-xs text-slate-600 font-medium">
              <span className="font-bold text-slate-800">Fortune Gourmet</span>
              <span className="text-slate-400 font-normal ml-1">· Hotel &amp; Restaurant Portal</span>
            </div>
          </div>

          {/* Middle Nav Links */}
          <div className="flex items-center gap-6 text-slate-500 font-medium">
            <button
              onClick={() => setActiveModal("about")}
              className="hover:text-[#5E3B8C] transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => setActiveModal("support")}
              className="hover:text-[#5E3B8C] transition-colors cursor-pointer"
            >
              Support
            </button>
            <button
              onClick={() => setActiveModal("terms")}
              className="hover:text-[#5E3B8C] transition-colors cursor-pointer"
            >
              Terms
            </button>
            <button
              onClick={() => setActiveModal("privacy")}
              className="hover:text-[#5E3B8C] transition-colors cursor-pointer"
            >
              Privacy
            </button>
          </div>

          {/* Right Copyright */}
          <div className="text-slate-400 font-normal shrink-0">
            © 2026 Fortune Gourmet
          </div>

        </div>
      </footer>

      {/* FOOTER MODALS FOR INTERACTIVE LINKS */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in text-left">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-4 relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 font-bold p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {activeModal === "about" && (
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-[#F4EFFB] text-[#5E3B8C] flex items-center justify-center">
                  <Info className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900">About Fortune Gourmet</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fortune Gourmet Specialities is India&apos;s premier importer &amp; distributor of premium gourmet food products, servicing 5-star hotels, fine dining establishments, luxury caterers, and institutional HoReCa partners nationwide.
                </p>
                <div className="p-3 bg-purple-50/50 rounded-xl border border-purple-100 text-[11px] text-[#5E3B8C] font-semibold">
                  Serving over 2,500+ luxury hospitality locations across Mumbai, Delhi NCR, Bengaluru, Goa, and pan-India.
                </div>
              </div>
            )}

            {activeModal === "support" && (
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900">Executive Support &amp; Concierge</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Need assistance with bulk procurement terms, temperature-controlled logistics telemetry, or custom RFQ pricing?
                </p>
                <div className="space-y-2 text-xs font-medium text-slate-700">
                  <div className="p-2.5 bg-slate-50 rounded-xl flex items-center justify-between border border-slate-200">
                    <span>Key Account Support Line</span>
                    <span className="font-bold text-[#1C0B33]">+91 (022) 6890-4400</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-xl flex items-center justify-between border border-slate-200">
                    <span>Email Concierge</span>
                    <span className="font-bold text-[#5E3B8C]">support@fortunegourmet.in</span>
                  </div>
                </div>
              </div>
            )}

            {activeModal === "terms" && (
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900">Institutional Terms of Trade</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  All credit terms (Net-30 / Net-60) are subject to active KYC validation and institutional credit line approval. Cold-chain delivery SLAs guaranteed within 4 hours in metropolitan centers.
                </p>
              </div>
            )}

            {activeModal === "privacy" && (
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900">Data Protection &amp; Privacy</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fortune Gourmet adheres to enterprise-grade data protection standards. Institutional purchasing data, custom recipe pairings, and RFQ commercial terms are strictly confidential and encrypted end-to-end.
                </p>
              </div>
            )}

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-xl bg-[#1C0B33] text-white text-xs font-bold hover:bg-[#2B1B4E] cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
