"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Building2, 
  MapPin, 
  Users, 
  ChefHat, 
  Utensils, 
  DollarSign, 
  ArrowRight, 
  ShieldAlert,
  Sparkles
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
    staffCount: "35 Culinary Staff & Chefs",
    headChef: "Chef Vikram Singh",
    propertyType: "5-Star Luxury Hotel & Banquets",
    outletsCount: "4 Fine Dining Outlets & Banquets",
    monthlyBudget: "₹15 Lakhs - ₹30 Lakhs / month",
    cuisineSpecialty: "European Fine Dining, Japanese & Confectionery"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onComplete();
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#FAF8FD] selection:bg-purple-200">
      
      {/* LEFT SIDE: LUXURY FINE DINING IMAGE */}
      <div className="relative lg:w-5/12 min-h-[350px] lg:min-h-screen bg-slate-950 flex flex-col justify-end p-8 sm:p-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/gourmet_hero.jpg"
            alt="Hotel Kitchen Operations"
            fill
            className="object-cover object-center brightness-[0.75] contrast-[1.05]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120926]/95 via-black/30 to-black/40" />
        </div>

        {/* Brand Header */}
        <div className="absolute top-8 left-8 z-10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#1C0B33] flex items-center justify-center text-[#F5C453] shadow-md shrink-0 border border-[#D7A742]/40">
            <span className="font-serif font-bold text-xl leading-none">F</span>
          </div>
          <div>
            <div className="font-serif font-bold text-lg tracking-tight text-white uppercase leading-tight">
              Fortune Gourmet
            </div>
            <div className="text-[9px] uppercase font-mono tracking-widest text-amber-200/80">
              Establishment Setup
            </div>
          </div>
        </div>

        {/* Bottom Overlay Card */}
        <div className="relative z-10 bg-black/50 backdrop-blur-xl border border-white/20 p-6 rounded-2xl max-w-lg text-left text-white shadow-2xl space-y-2">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5C453]">
            STEP 2 OF 2 • PROPERTY DETAILS
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
            Tailoring cold-chain allocations &amp; customized pricing for your kitchen.
          </h3>
          <p className="text-xs text-slate-200 font-medium leading-relaxed">
            Provide your hotel location and kitchen capacity so our culinary team can prepare your executive catalog.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: HOTEL & KITCHEN DETAILS FORM */}
      <div className="lg:w-7/12 flex flex-col justify-between p-6 sm:p-10 lg:p-12 bg-[#FAF8FD] min-h-screen lg:min-h-full">
        <div className="max-w-xl w-full mx-auto my-auto space-y-6">
          
          {/* Header Title */}
          <div className="space-y-1 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-[#5E3B8C] text-xs font-bold uppercase tracking-wider mb-1">
              <Building2 className="w-3.5 h-3.5" />
              <span>Hotel &amp; Kitchen Specifications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Tell us about your establishment
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Enter your property location, kitchen staff capacity, and procurement requirements.
            </p>
          </div>

          {/* Hotel Details Form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            
            {/* Hotel / Establishment Name */}
            <div>
              <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1">
                Hotel / Property Name
              </label>
              <div className="relative">
                <Building2 className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type="text"
                  required
                  value={formData.hotelName}
                  onChange={(e) => setFormData({ ...formData, hotelName: e.target.value })}
                  placeholder="e.g. Taj Mahal Palace / The Leela"
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#5E3B8C] focus:outline-none transition-all shadow-2xs"
                />
              </div>
            </div>

            {/* Location & Address 2-col */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1">
                  Full Property Address &amp; Bay
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Apollo Bunder, Colaba"
                    className="w-full pl-10 pr-3 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#5E3B8C] focus:outline-none transition-all shadow-2xs"
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
                    placeholder="Mumbai, Maharashtra 400001"
                    className="w-full pl-10 pr-3 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#5E3B8C] focus:outline-none transition-all shadow-2xs"
                  />
                </div>
              </div>
            </div>

            {/* Kitchen Staff & Head Chef 2-col */}
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
                    placeholder="e.g. 25 Kitchen Staff"
                    className="w-full pl-10 pr-3 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#5E3B8C] focus:outline-none transition-all shadow-2xs"
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
                    placeholder="Chef Vikram Singh"
                    className="w-full pl-10 pr-3 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#5E3B8C] focus:outline-none transition-all shadow-2xs"
                  />
                </div>
              </div>
            </div>

            {/* Property Type & Outlets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1">
                  Establishment Type
                </label>
                <select
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#5E3B8C] focus:outline-none transition-all shadow-2xs"
                >
                  <option>5-Star Luxury Hotel &amp; Banquets</option>
                  <option>Standalone Fine Dining Restaurant</option>
                  <option>Executive Catering Enterprise</option>
                  <option>Boutique Patisserie &amp; Bakery</option>
                  <option>Multi-Outlet Cloud Kitchen</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1">
                  Monthly Procurement Budget
                </label>
                <select
                  value={formData.monthlyBudget}
                  onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#5E3B8C] focus:outline-none transition-all shadow-2xs"
                >
                  <option>₹1 Lakh - ₹5 Lakhs / month</option>
                  <option>₹5 Lakhs - ₹15 Lakhs / month</option>
                  <option>₹15 Lakhs - ₹30 Lakhs / month</option>
                  <option>₹30 Lakhs+ Enterprise Account</option>
                </select>
              </div>
            </div>

            {/* Primary Cuisine Specialty */}
            <div>
              <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1">
                Primary Cuisine &amp; Menu Specialty
              </label>
              <div className="relative">
                <Utensils className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type="text"
                  required
                  value={formData.cuisineSpecialty}
                  onChange={(e) => setFormData({ ...formData, cuisineSpecialty: e.target.value })}
                  placeholder="Contemporary Italian, Japanese Sushi, French Patisserie"
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#5E3B8C] focus:outline-none transition-all shadow-2xs"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-xl bg-[#1C0B33] hover:bg-[#2B1B4E] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98] cursor-pointer mt-6"
            >
              {isSubmitting ? (
                <span className="inline-block font-medium">Saving Details...</span>
              ) : (
                <>
                  <span>Complete Setup &amp; Enter Portal</span>
                  <ArrowRight className="w-4 h-4 text-[#F5C453]" />
                </>
              )}
            </button>
          </form>

        </div>

        {/* Bottom Footer */}
        <div className="max-w-xl w-full mx-auto text-xs text-slate-400 flex items-center justify-between pt-4 mt-6 border-t border-slate-200/60">
          <div>Taj Mahal Palace • Kitchen Profile</div>
          <div>© {new Date().getFullYear()} Fortune Gourmet</div>
        </div>
      </div>

    </div>
  );
}
