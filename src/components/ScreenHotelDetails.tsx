"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Building2, 
  MapPin, 
  Users, 
  ChefHat, 
  FileText, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

interface ScreenHotelDetailsProps {
  onComplete: () => void;
}

export default function ScreenHotelDetails({ onComplete }: ScreenHotelDetailsProps) {
  const [formData, setFormData] = useState({
    hotelName: "Taj Mahal Palace & Tower",
    address: "Apollo Bunder, Colaba",
    city: "Mumbai, Maharashtra",
    headChef: "Chef Vikram Singh",
    staffCount: "35 Culinary Staff",
    gstin: "27AAACI1681G1Z8",
    fssai: "10014022003189",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onComplete();
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#FAF8FD] selection:bg-purple-200">
      
      {/* LEFT SIDE: LUXURY GOURMET IMAGE */}
      <div className="relative lg:w-1/2 min-h-[350px] lg:min-h-screen bg-slate-950 flex flex-col justify-between p-8 sm:p-12 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/gourmet_hero.jpg"
            alt="Fine Dining Presentation"
            fill
            className="object-cover object-center brightness-[0.75] contrast-[1.05]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120926]/90 via-black/20 to-black/30" />
        </div>

        {/* Brand Header */}
        <div className="relative z-10 flex items-center gap-3 text-left">
          <div className="w-11 h-11 rounded-2xl bg-[#1C0B33] flex items-center justify-center text-[#F5C453] shadow-md shrink-0 border border-[#D7A742]/30">
            <span className="font-serif font-bold text-2xl leading-none">F</span>
          </div>
          <div>
            <div className="font-serif font-bold text-xl tracking-tight text-white uppercase leading-tight">
              Fortune Gourmet
            </div>
            <div className="text-[10px] uppercase font-mono tracking-widest text-slate-300">
              Specialities • Est. 1997
            </div>
          </div>
        </div>

        {/* Minimal Quote Overlay at Bottom */}
        <div className="relative z-10 bg-black/40 backdrop-blur-xl border border-white/20 p-6 rounded-2xl max-w-lg text-left text-white shadow-2xl space-y-2">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5C453]">
            FINE DINING PROCUREMENT
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
            &ldquo;Serving India&apos;s premier hotel kitchens and specialty dining establishments.&rdquo;
          </h3>
          <p className="text-xs text-slate-200 font-medium leading-relaxed">
            Direct cold-chain supply for DOP cheeses, black truffles, and artisanal meats.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: CLEAN, ELEGANT HUMAN-DESIGNED FORM */}
      <div className="lg:w-1/2 flex flex-col justify-between p-6 sm:p-10 lg:p-14 bg-[#FAF8FD] min-h-screen lg:min-h-full">
        <div className="max-w-md w-full mx-auto my-auto space-y-6">
          
          {/* Header */}
          <div className="space-y-1 text-left">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Establishment Details
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Enter your property location and business registration info.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            
            {/* Property Name */}
            <div>
              <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1.5">
                Property / Hotel Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Building2 className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={formData.hotelName}
                  onChange={(e) => setFormData({ ...formData, hotelName: e.target.value })}
                  placeholder="e.g. Taj Mahal Palace"
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#5E3B8C] focus:border-transparent focus:outline-none transition-all shadow-2xs"
                />
              </div>
            </div>

            {/* Address & City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1.5">
                  Address / Bay
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Apollo Bunder, Colaba"
                    className="w-full pl-10 pr-3 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#5E3B8C] focus:border-transparent focus:outline-none transition-all shadow-2xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1.5">
                  City
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Mumbai"
                    className="w-full pl-10 pr-3 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#5E3B8C] focus:border-transparent focus:outline-none transition-all shadow-2xs"
                  />
                </div>
              </div>
            </div>

            {/* Executive Chef & Staff */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1.5">
                  Executive Chef
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <ChefHat className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={formData.headChef}
                    onChange={(e) => setFormData({ ...formData, headChef: e.target.value })}
                    placeholder="Chef Vikram Singh"
                    className="w-full pl-10 pr-3 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#5E3B8C] focus:border-transparent focus:outline-none transition-all shadow-2xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1.5">
                  Staff Count
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Users className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={formData.staffCount}
                    onChange={(e) => setFormData({ ...formData, staffCount: e.target.value })}
                    placeholder="35 Chefs"
                    className="w-full pl-10 pr-3 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#5E3B8C] focus:border-transparent focus:outline-none transition-all shadow-2xs"
                  />
                </div>
              </div>
            </div>

            {/* KYC VERIFICATION DETAILS SECTION */}
            <div className="pt-3 border-t border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <label className="block text-[11px] uppercase font-bold tracking-wider text-[#5E3B8C]">
                  KYC &amp; License Verification Details
                </label>
                <span className="text-[10px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                  Verification Pending
                </span>
              </div>

              {/* GSTIN & FSSAI 2-col */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-600 mb-1">
                    GSTIN Registration Number
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.gstin}
                    onChange={(e) => setFormData({ ...formData, gstin: e.target.value })}
                    placeholder="27AAACI1681G1Z8"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-mono uppercase font-bold text-slate-900 focus:ring-2 focus:ring-[#5E3B8C] focus:outline-none transition-all shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-600 mb-1">
                    FSSAI Food License Number (14 Digits)
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fssai}
                    onChange={(e) => setFormData({ ...formData, fssai: e.target.value })}
                    placeholder="10014022003189"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-900 focus:ring-2 focus:ring-[#5E3B8C] focus:outline-none transition-all shadow-2xs"
                  />
                </div>
              </div>

              {/* KYC Document Upload File Box */}
              <div>
                <label className="block text-[10px] uppercase font-bold text-slate-600 mb-1">
                  KYC Document Upload (FSSAI / GST Certificate)
                </label>
                <div className="p-3 bg-white border border-dashed border-purple-200/90 rounded-xl flex items-center justify-between text-xs shadow-2xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-purple-100 text-[#5E3B8C] flex items-center justify-center font-bold shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-mono text-xs font-bold text-slate-900">fssai_gstin_certificate.pdf</div>
                      <div className="text-[10px] text-slate-400">PDF Document • 2.4 MB</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                    Uploaded ✓
                  </span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-6 rounded-xl bg-[#1C0B33] hover:bg-[#2B1B4E] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98] cursor-pointer mt-5"
            >
              {isLoading ? (
                <span className="inline-block font-medium">Saving...</span>
              ) : (
                <>
                  <span>Save &amp; Complete Setup</span>
                  <ArrowRight className="w-4 h-4 text-[#F5C453]" />
                </>
              )}
            </button>

          </form>

        </div>

        {/* Footer */}
        <div className="max-w-md w-full mx-auto text-xs text-slate-400 flex items-center justify-between pt-4 mt-4 border-t border-slate-200/60">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>FSSAI &amp; GSTIN Registered</span>
          </div>
          <div>© {new Date().getFullYear()} Fortune Gourmet</div>
        </div>
      </div>

    </div>
  );
}
