"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Building2, 
  ShieldCheck,
  Zap,
  Loader2
} from "lucide-react";

interface ScreenSignInProps {
  onNavigateRegister: () => void;
  onSuccessSignIn: () => void;
}

export default function ScreenSignIn({ onNavigateRegister, onSuccessSignIn }: ScreenSignInProps) {
  const [email, setEmail] = useState("chef.vikram@tajhotels.com");
  const [password, setPassword] = useState("password123");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onSuccessSignIn();
    }, 600);
  };

  const handleQuickDemoSignIn = () => {
    setEmail("chef.vikram@tajhotels.com");
    setPassword("taj_executive_2025");
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onSuccessSignIn();
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#FAF8FD] selection:bg-purple-200">
      
      {/* LEFT SIDE: BREATHTAKING HIGH-RESOLUTION GOURMET FOOD IMAGE */}
      <div className="relative lg:w-1/2 min-h-[400px] lg:min-h-screen bg-slate-950 flex flex-col justify-end p-8 sm:p-12 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/gourmet_hero.jpg"
            alt="Gourmet Wagyu & Black Truffle Culinary Presentation"
            fill
            className="object-cover object-center brightness-[0.8] contrast-[1.05]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120926]/90 via-black/20 to-black/30" />
        </div>

        {/* Minimal High-End Quote Overlay */}
        <div className="relative z-10 bg-black/40 backdrop-blur-xl border border-white/20 p-6 rounded-2xl max-w-lg text-left text-white shadow-2xl space-y-2">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5C453]">
            FINE DINING PROCUREMENT
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
            &ldquo;The standard of gourmet dining across India&apos;s leading hotel chains and fine dining establishments.&rdquo;
          </h3>
          <p className="text-xs text-slate-200 font-medium leading-relaxed">
            Delivering imported DOP cheeses, black truffles, air-freighted Atlantic seafood, and artisanal meats.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: CLEAN & SIMPLE LOGIN FORM */}
      <div className="lg:w-1/2 flex flex-col justify-between p-6 sm:p-10 lg:p-12 bg-[#FAF8FD] min-h-screen lg:min-h-full">
        <div className="max-w-md w-full mx-auto my-auto space-y-5">
          
          {/* Brand Logo Header */}
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
              Welcome back
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Sign in to your account.
            </p>
          </div>

          {/* QUICK 1-CLICK DEMO LOGIN CARD */}
          <div className="p-4 bg-gradient-to-r from-[#1C0B33] via-[#2B124C] to-[#3B1B5E] text-white rounded-2xl border border-[#F5C453]/30 shadow-md flex items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F5C453] text-[#1C0B33] font-bold flex items-center justify-center shrink-0 shadow-xs">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <div>
                <div className="font-bold text-xs text-white">Quick Demo Login</div>
                <div className="text-[11px] text-purple-200">Taj Hotel Mumbai (Chef Vikram)</div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleQuickDemoSignIn}
              className="px-4 py-2.5 bg-[#F5C453] hover:bg-amber-300 text-[#1C0B33] text-xs font-bold rounded-xl transition-all shadow-md whitespace-nowrap cursor-pointer flex items-center gap-1.5 active:scale-95"
            >
              <span>1-Click Login</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* SIMPLE LOGIN FORM */}
          <form onSubmit={handleSubmit} className="space-y-4 text-left pt-1">
            {/* Email Field */}
            <div>
              <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1.5">
                Business Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="chef.vikram@tajhotels.com"
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#5E3B8C] focus:border-transparent focus:outline-none transition-all shadow-2xs"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-11 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#5E3B8C] focus:border-transparent focus:outline-none transition-all shadow-2xs"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-xs pt-0.5">
              <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-[#5E3B8C] focus:ring-[#5E3B8C]"
                />
                <span>Remember workstation</span>
              </label>
              <a 
                href="#forgot" 
                onClick={(e) => { e.preventDefault(); alert("Password reset instructions sent to email."); }} 
                className="font-semibold text-[#5E3B8C] hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-6 rounded-xl bg-[#1C0B33] hover:bg-[#2B1B4E] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98] cursor-pointer"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2 font-medium">
                  <Loader2 className="w-4 h-4 animate-spin text-[#F5C453]" />
                  <span>Signing in...</span>
                </div>
              ) : (
                <>
                  <span>Sign In to Portal</span>
                  <ArrowRight className="w-4 h-4 text-[#F5C453]" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest text-slate-400">
              <span className="bg-[#FAF8FD] px-3">Don&apos;t have an account?</span>
            </div>
          </div>

          {/* Create Account Action */}
          <button
            type="button"
            onClick={onNavigateRegister}
            className="w-full py-3.5 px-6 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-[#1C0B33] font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-2xs cursor-pointer"
          >
            <span>Create Account</span>
            <ArrowRight className="w-4 h-4 text-[#5E3B8C]" />
          </button>
        </div>

        {/* Right Bottom Footer */}
        <div className="max-w-md w-full mx-auto text-xs text-slate-400 flex items-center justify-between pt-4 mt-4 border-t border-slate-200/60">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>FSSAI &amp; GSTIN Verified Supplier</span>
          </div>
          <div>© {new Date().getFullYear()} Fortune Gourmet</div>
        </div>
      </div>

    </div>
  );
}

