"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Building2, 
  MapPin, 
  Users, 
  ChefHat, 
  Utensils, 
  ArrowRight, 
  ShieldAlert,
  ShieldCheck,
  FileCheck,
  UploadCloud,
  CheckCircle2,
  Sparkles,
  Award,
  Layers
} from "lucide-react";

interface ScreenHotelDetailsProps {
  onComplete: () => void;
}

export default function ScreenHotelDetails({ onComplete }: ScreenHotelDetailsProps) {
  const [formData, setFormData] = useState({
    hotelName: "Taj Mahal Palace & Tower",
    location: "Apollo Bunder, Colaba, Mumbai 400001",
    city: "Mumbai, Maharashtra",
    pincode: "400001",
    staffCount: "35 Chefs & Culinary Staff",
    headChef: "Chef Vikram Singh",
    propertyType: "5-Star Luxury Hotel & Banquets",
    monthlyBudget: "₹15 Lakhs - ₹30 Lakhs / month",
    cuisineSpecialty: "European Fine Dining, Japanese & Confectionery",
    gstin: "27AAACI1681G1Z8",
    fssai: "10014022003189",
  });

  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([
    "Italian DOP & Truffles",
    "Japanese Raw Seafood",
    "French Bakery & Pastry"
  ]);

  const [isDocUploaded, setIsDocUploaded] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableCuisines = [
    "Italian DOP & Truffles",
    "Japanese Raw Seafood",
    "French Bakery & Pastry",
    "Prime Aged Meats",
    "Boutique Chocolates",
    "Artisanal Cheeses"
  ];

  const toggleCuisine = (item: string) => {
    if (selectedCuisines.includes(item)) {
      setSelectedCuisines(selectedCuisines.filter((c) => c !== item));
    } else {
      setSelectedCuisines([...selectedCuisines, item]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onComplete();
    }, 700);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#FAF8FD] selection:bg-purple-200 font-sans antialiased text-slate-900">
      
      {/* LEFT SIDE: LUXURY HIGH-RESOLUTION FINE DINING VISUAL */}
      <div className="relative lg:w-5/12 min-h-[400px] lg:min-h-screen bg-slate-950 flex flex-col justify-between p-8 sm:p-12 overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/gourmet_hero.jpg"
            alt="Hotel Kitchen Operations"
            fill
            className="object-cover object-center brightness-[0.7] contrast-[1.05]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120926]/95 via-black/30 to-black/40" />
        </div>

        {/* Brand Header */}
        <div className="relative z-10 flex items-center gap-3 text-left">
          <div className="w-11 h-11 rounded-2xl bg-[#1C0B33] flex items-center justify-center text-[#F5C453] shadow-md shrink-0 border border-[#D7A742]/40">
            <span className="font-serif font-bold text-2xl leading-none">F</span>
          </div>
          <div>
            <div className="font-serif font-bold text-xl tracking-tight text-white uppercase leading-tight">
              Fortune Gourmet
            </div>
            <div className="text-[10px] uppercase font-mono tracking-widest text-amber-200/80">
              Establishment &amp; KYC Setup
            </div>
          </div>
        </div>

        {/* Bottom Overlay Card */}
        <div className="relative z-10 bg-black/50 backdrop-blur-xl border border-white/20 p-6 rounded-2xl max-w-lg text-left text-white shadow-2xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5C453] bg-[#F5C453]/20 border border-[#F5C453]/40 px-2.5 py-0.5 rounded-full">
              STEP 2 OF 2 • PROPERTY &amp; KYC
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
            Tailoring cold-chain allocations &amp; enterprise credit lines for your kitchen.
          </h3>
          <p className="text-xs text-slate-200 font-medium leading-relaxed">
            Configure your property location, kitchen staff count, and statutory licenses to unlock priority dispatch.
          </p>

          <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[11px] text-amber-200">
            <span>✓ FSSAI &amp; GSTIN Verification</span>
            <span>✓ Dedicated Account Lead</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: ELEGANT CARDS-BASED FORM WITH EMBEDDED KYC VERIFICATION */}
      <div className="lg:w-7/12 flex flex-col justify-between p-6 sm:p-10 lg:p-12 bg-[#FAF8FD] min-h-screen lg:min-h-full">
        <div className="max-w-2xl w-full mx-auto space-y-6 text-left my-auto py-4">
          
          {/* PERSISTENT TOP KYC INCOMPLETE ALERT BANNER */}
          <div className="bg-amber-500/15 border border-amber-400/40 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-amber-950 shadow-2xs">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-500 text-[#1C0B33] flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                ⚠️
              </div>
              <div>
                <div className="text-xs font-bold text-[#1C0B33] uppercase tracking-wider flex items-center gap-2">
                  <span>KYC Status: Pending Verification</span>
                </div>
                <p className="text-xs text-slate-700 font-medium mt-0.5 leading-snug">
                  Fill in your GSTIN and FSSAI license numbers below to activate Net-30 credit limits &amp; express cold-chain dispatch.
                </p>
              </div>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#5E3B8C] bg-purple-100 px-3 py-1 rounded-full whitespace-nowrap shrink-0">
              In Progress
            </span>
          </div>

          {/* Title Header */}
          <div className="space-y-1">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Establishment &amp; KYC Specifications
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Set up your kitchen location, staff capacity, and statutory business credentials.
            </p>
          </div>

          {/* Form with 3 Rich Cards */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* CARD 1: PROPERTY & LOCATION IDENTITY */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <Building2 className="w-4 h-4 text-[#5E3B8C]" />
                <h3 className="font-serif font-bold text-base text-slate-900">
                  1. Property &amp; Location Details
                </h3>
              </div>

              <div className="space-y-3.5">
                {/* Hotel Name */}
                <div>
                  <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1">
                    Hotel / Establishment Name
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={formData.hotelName}
                      onChange={(e) => setFormData({ ...formData, hotelName: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-[#FAF8FD] border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#5E3B8C] focus:bg-white focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Address & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1">
                      Street Address &amp; Delivery Bay
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full pl-10 pr-3 py-3 bg-[#FAF8FD] border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#5E3B8C] focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1">
                      City &amp; Pincode
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full pl-10 pr-3 py-3 bg-[#FAF8FD] border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#5E3B8C] focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2: KITCHEN STAFF & OPERATIONAL CAPACITY */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <ChefHat className="w-4 h-4 text-[#5E3B8C]" />
                <h3 className="font-serif font-bold text-base text-slate-900">
                  2. Kitchen Staff &amp; Culinary Operations
                </h3>
              </div>

              <div className="space-y-3.5">
                {/* Staff count & Head Chef */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1">
                      Kitchen Staff &amp; Chefs Count
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={formData.staffCount}
                        onChange={(e) => setFormData({ ...formData, staffCount: e.target.value })}
                        className="w-full pl-10 pr-3 py-3 bg-[#FAF8FD] border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#5E3B8C] focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1">
                      Executive / Head Chef Name
                    </label>
                    <div className="relative">
                      <ChefHat className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={formData.headChef}
                        onChange={(e) => setFormData({ ...formData, headChef: e.target.value })}
                        className="w-full pl-10 pr-3 py-3 bg-[#FAF8FD] border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#5E3B8C] focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Establishment Type & Procurement Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1">
                      Establishment Type
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8FD] border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#5E3B8C] focus:bg-white focus:outline-none transition-all"
                    >
                      <option>5-Star Luxury Hotel &amp; Banquets</option>
                      <option>Standalone Fine Dining Restaurant</option>
                      <option>Executive Catering Enterprise</option>
                      <option>Boutique Patisserie &amp; Bakery</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1">
                      Monthly Procurement Volume
                    </label>
                    <select
                      value={formData.monthlyBudget}
                      onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8FD] border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#5E3B8C] focus:bg-white focus:outline-none transition-all"
                    >
                      <option>₹1 Lakh - ₹5 Lakhs / month</option>
                      <option>₹5 Lakhs - ₹15 Lakhs / month</option>
                      <option>₹15 Lakhs - ₹30 Lakhs / month</option>
                      <option>₹30 Lakhs+ Enterprise Account</option>
                    </select>
                  </div>
                </div>

                {/* Primary Cuisine Pills */}
                <div>
                  <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-2">
                    Primary Cuisine &amp; Menu Categories
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableCuisines.map((item) => {
                      const isSelected = selectedCuisines.includes(item);
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => toggleCuisine(item)}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                            isSelected
                              ? "bg-[#1C0B33] text-white border-[#1C0B33] shadow-2xs"
                              : "bg-[#FAF8FD] text-slate-600 border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          {isSelected ? `✓ ${item}` : `+ ${item}`}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3: STATUTORY KYC & LICENSES VERIFICATION (Satisfies "isme kyc wala a rha") */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#5E3B8C]" />
                  <h3 className="font-serif font-bold text-base text-slate-900">
                    3. Statutory KYC &amp; Verification Licenses
                  </h3>
                </div>
                <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-900 border border-amber-300 px-2.5 py-0.5 rounded-full">
                  Verification Required
                </span>
              </div>

              <div className="space-y-3.5">
                {/* GSTIN & FSSAI 2-col */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1">
                      GSTIN Registration Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={formData.gstin}
                        onChange={(e) => setFormData({ ...formData, gstin: e.target.value })}
                        placeholder="27AAACI1681G1Z8"
                        className="w-full px-3.5 py-3 bg-[#FAF8FD] border border-slate-200 rounded-xl text-xs font-mono uppercase font-bold text-slate-900 focus:ring-2 focus:ring-[#5E3B8C] focus:bg-white focus:outline-none transition-all"
                      />
                      <span className="absolute right-2.5 top-3 text-[9px] bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded">
                        ACTIVE
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1">
                      FSSAI License Number (14 Digits)
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fssai}
                      onChange={(e) => setFormData({ ...formData, fssai: e.target.value })}
                      placeholder="10014022003189"
                      className="w-full px-3.5 py-3 bg-[#FAF8FD] border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-900 focus:ring-2 focus:ring-[#5E3B8C] focus:bg-white focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* License Certificate Upload box */}
                <div className="bg-[#FAF8FD] border border-purple-100 rounded-xl p-3.5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#5E3B8C] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <FileCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 font-mono">
                        fssai_gst_license_taj.pdf
                      </div>
                      <div className="text-[11px] text-slate-500">
                        License auto-verified for Taj Mahal Palace Mumbai
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg shrink-0">
                    Uploaded ✓
                  </span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-xl bg-[#1C0B33] hover:bg-[#2B1B4E] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98] cursor-pointer mt-6"
            >
              {isSubmitting ? (
                <span className="inline-block font-medium">Submitting &amp; Verifying KYC...</span>
              ) : (
                <>
                  <span>Complete Setup &amp; Submit KYC →</span>
                  <ArrowRight className="w-4 h-4 text-[#F5C453]" />
                </>
              )}
            </button>

          </form>

        </div>

        {/* Bottom Footer */}
        <div className="max-w-2xl w-full mx-auto text-xs text-slate-400 flex items-center justify-between pt-4 mt-6 border-t border-slate-200/60">
          <div>Taj Mahal Palace • Setup &amp; KYC Verification</div>
          <div>© {new Date().getFullYear()} Fortune Gourmet</div>
        </div>
      </div>

    </div>
  );
}
