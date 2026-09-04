"use client";

import React, { useState } from "react";
import Image from "next/image";
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
      alert("Please agree to the Terms of Service.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccessRegister();
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#FAF8FD] selection:bg-purple-200">
      
      {/* LEFT SIDE: LUXURY GOURMET CULINARY IMAGE */}
      <div className="relative lg:w-1/2 min-h-[380px] lg:min-h-screen bg-slate-950 flex flex-col justify-end p-8 sm:p-12 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/gourmet_hero.jpg"
            alt="Gourmet Fine Dining Ingredients"
            fill
            className="object-cover object-center brightness-[0.8] contrast-[1.05]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120926]/90 via-black/20 to-black/30" />
        </div>

        {/* Minimal High-End Overlay Card */}
        <div className="relative z-10 bg-black/40 backdrop-blur-xl border border-white/20 p-6 rounded-2xl max-w-lg text-left text-white shadow-2xl space-y-2">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5C453]">
            PARTNER NETWORK
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
            &ldquo;Access India&apos;s most exclusive catalog of imported culinary ingredients.&rdquo;
          </h3>
          <p className="text-xs text-slate-200 font-medium leading-relaxed">
            Joining over 1,400 premier hotels, fine dining restaurants, and patisseries.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: CLEAN REGISTRATION FORM */}
      <div className="lg:w-1/2 flex flex-col justify-between p-6 sm:p-10 lg:p-12 bg-[#FAF8FD] min-h-screen lg:min-h-full">
        <div className="max-w-md w-full mx-auto my-auto space-y-5">
          
          {/* Brand Header */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#1C0B33] flex items-center justify-center text-[#F5C453] shadow-md shrink-0 border border-[#D7A742]/30">
              <span className="font-serif font-bold text-2xl leading-none">F</span>
            </div>
            <div>
              <div className="font-serif font-bold text-xl tracking-tight text-slate-900 uppercase leading-tight">
                Fortune Gourmet
              </div>
              <div className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
                Specialities • Est. 1997
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-1 text-left pt-1">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Create Account
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Register your establishment to view executive menus &amp; pricing.
            </p>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5 text-left pt-1">
            
            {/* Full Name */}
            <div>
              <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Chef Vikram Singh"
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#5E3B8C] focus:outline-none transition-all shadow-2xs"
                />
              </div>
            </div>

            {/* Work Email */}
            <div>
              <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1">
                Work Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type="email"
                  required
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  placeholder="chef.vikram@tajhotels.com"
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#5E3B8C] focus:outline-none transition-all shadow-2xs"
                />
              </div>
            </div>

            {/* Phone & City 2-col */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1">
                  Phone
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-3 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#5E3B8C] focus:outline-none transition-all shadow-2xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1">
                  City
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full pl-10 pr-3 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#5E3B8C] focus:outline-none transition-all shadow-2xs"
                  />
                </div>
              </div>
            </div>

            {/* Business / Establishment Name */}
            <div>
              <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1">
                Establishment Name
              </label>
              <div className="relative">
                <Building className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="The Leela Palace / Taj Hotels"
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#5E3B8C] focus:outline-none transition-all shadow-2xs"
                />
              </div>
            </div>

            {/* Checkbox */}
            <div className="pt-1">
              <label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-[#5E3B8C] focus:ring-[#5E3B8C]"
                />
                <span>I agree to the Terms of Service &amp; Privacy Policy</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-xl bg-[#1C0B33] hover:bg-[#2B1B4E] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98] cursor-pointer mt-4"
            >
              {isSubmitting ? (
                <span className="inline-block font-medium">Creating Account...</span>
              ) : (
                <>
                  <span>Create Account</span>
                  <ArrowRight className="w-4 h-4 text-[#F5C453]" />
                </>
              )}
            </button>
          </form>

          {/* Footer sign in link */}
          <div className="text-center text-xs text-slate-500 pt-2">
            Already registered?{" "}
            <button
              onClick={onNavigateSignIn}
              className="font-bold text-[#5E3B8C] hover:underline cursor-pointer"
            >
              Sign In
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="max-w-md w-full mx-auto text-xs text-slate-400 flex items-center justify-between pt-4 mt-4 border-t border-slate-200/60">
          <div>Institutional Culinary Procurement</div>
          <div>© {new Date().getFullYear()} Fortune Gourmet</div>
        </div>
      </div>

    </div>
  );
}
