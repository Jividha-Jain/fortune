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
  Sparkles,
  CheckCircle2,
  Zap
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
  const [showProcessModal, setShowProcessModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onSuccessSignIn();
    }, 700);
  };

  const handleQuickDemoSignIn = () => {
    setEmail("chef.vikram@tajhotels.com");
    setPassword("taj_executive_2025");
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onSuccessSignIn();
    }, 600);
  };

  return (
    <div className="min-h-[calc(100vh-61px)] flex flex-col lg:flex-row bg-[#FAF8FD] selection:bg-purple-200">
      {/* LEFT HERO SIDE */}
      <div className="relative lg:w-1/2 min-h-[500px] lg:min-h-full bg-slate-950 flex flex-col justify-between p-8 lg:p-14 overflow-hidden">
        {/* Background Image with Dark Vignette Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1600&q=80"
            alt="Chef plating gourmet dish"
            fill
            className="object-cover object-center brightness-[0.35] contrast-[1.15]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120926] via-purple-950/40 to-black/70" />
        </div>

        {/* Top Badges Header */}
        <div className="relative z-10 flex flex-wrap items-center gap-3">
          <div className="bg-white/10 backdrop-blur-xl border border-amber-400/25 px-3.5 py-1.5 rounded-full text-xs font-medium text-amber-100 flex items-center gap-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Direct Cold-Chain Traceability</span>
          </div>
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-medium text-white/90 flex items-center gap-2 shadow-sm">
            <span className="text-emerald-400">•</span>
            <span>HACCP &amp; ISO 22000 Compliant</span>
          </div>
        </div>

        {/* Middle Hero Content & Quote */}
        <div className="relative z-10 my-auto py-12 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Institutional HORECA Supplier</span>
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white leading-tight font-medium tracking-tight mb-8">
            &ldquo;The standard of gourmet dining across India&apos;s leading hotel chains, standalone fine dining restaurants, and boutique patisseries.&rdquo;
          </h1>

          {/* Bottom Statistics Card */}
          <div className="bg-black/50 backdrop-blur-2xl border border-amber-400/20 rounded-3xl p-6 grid grid-cols-3 gap-4 shadow-2xl">
            <div>
              <div className="text-xl lg:text-3xl font-bold font-serif gold-text-gradient">1,400+</div>
              <div className="text-[10px] lg:text-xs uppercase font-semibold tracking-wider text-slate-300 mt-1">
                Kitchens Served
              </div>
            </div>
            <div className="border-l border-white/15 pl-4">
              <div className="text-xl lg:text-3xl font-bold text-white font-serif">-18°C / +4°C</div>
              <div className="text-[10px] lg:text-xs uppercase font-semibold tracking-wider text-slate-300 mt-1">
                Dual Temp Vans
              </div>
            </div>
            <div className="border-l border-white/15 pl-4">
              <div className="text-xl lg:text-3xl font-bold font-serif gold-text-gradient">Pan-India</div>
              <div className="text-[10px] lg:text-xs uppercase font-semibold tracking-wider text-slate-300 mt-1">
                Metro Fulfillment
              </div>
            </div>
          </div>
        </div>

        {/* Left Bottom Footer */}
        <div className="relative z-10 text-xs text-white/50">
          © {new Date().getFullYear()} Fortune Gourmet Specialities Pvt. Ltd. All rights reserved.
        </div>
      </div>

      {/* RIGHT FORM SIDE */}
      <div className="lg:w-1/2 flex flex-col justify-between p-6 sm:p-10 lg:p-16 bg-[#FAF8FD]">
        <div className="max-w-md w-full mx-auto my-auto py-6">
          {/* Header Row */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#160C2B] flex items-center justify-center text-amber-300 shadow-md">
                <span className="font-serif font-bold text-xl">F</span>
              </div>
              <div>
                <div className="font-serif font-bold text-base tracking-tight text-slate-900 uppercase">
                  Fortune Gourmet
                </div>
                <div className="text-[10px] uppercase font-mono tracking-widest text-slate-500">
                  Specialities • Est. 1997
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full font-medium">
              <Lock className="w-3 h-3 text-slate-500" />
              <span>SSL Encrypted</span>
            </div>
          </div>

          {/* Title Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase font-bold tracking-wider text-purple-700 mb-1">
                Institutional Access
              </div>
              <button
                type="button"
                onClick={() => setShowProcessModal(!showProcessModal)}
                className="text-xs font-bold text-[#5E3B8C] hover:text-[#1C0B33] bg-[#F4EFFB] hover:bg-purple-100 px-3 py-1 rounded-full border border-purple-200 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Login Process Info</span>
              </button>
            </div>

            <h2 className="text-3xl font-serif font-bold text-slate-900 tracking-tight">
              Welcome back
            </h2>
            <p className="text-slate-600 text-sm mt-1.5 leading-relaxed">
              Sign in to access your customized menu recommendations and enterprise pricing.
            </p>

            {/* Quick One-Click Demo Login Banner */}
            <div className="mt-4 p-3 bg-gradient-to-r from-[#1C0B33] to-[#3B1B5E] text-white rounded-2xl border border-purple-900 shadow-md flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#F5C453] text-[#1C0B33] font-bold flex items-center justify-center text-xs shrink-0">
                  <Zap className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <div className="font-bold text-xs text-white">Quick Demo Login</div>
                  <div className="text-[10px] text-purple-200">Taj Hotel Mumbai (Chef Vikram)</div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleQuickDemoSignIn}
                className="px-3.5 py-1.5 bg-[#F5C453] hover:bg-amber-300 text-[#1C0B33] text-xs font-bold rounded-xl transition-all shadow-xs whitespace-nowrap cursor-pointer flex items-center gap-1"
              >
                <span>1-Click Login</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* EXPANDABLE LOGIN PROCESS GUIDE CARD */}
            {showProcessModal && (
              <div className="mt-4 p-4 bg-[#F4EFFB] border border-purple-200 rounded-2xl space-y-2.5 text-left text-xs animate-fade-in">
                <div className="font-bold text-[#1C0B33] flex items-center gap-1.5 border-b border-purple-200/80 pb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>3-Step Institutional Login Process</span>
                </div>
                <div className="grid grid-cols-1 gap-2 text-[11px] text-slate-700">
                  <div className="flex items-start gap-2 bg-white p-2 rounded-xl border border-purple-100">
                    <span className="w-5 h-5 rounded-full bg-[#1C0B33] text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-slate-900">Enter Business Email & Password:</strong> Use your registered executive credentials (or click 1-Click Login above).
                    </div>
                  </div>
                  <div className="flex items-start gap-2 bg-white p-2 rounded-xl border border-purple-100">
                    <span className="w-5 h-5 rounded-full bg-[#1C0B33] text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-slate-900">FSSAI & GSTIN License Check:</strong> Automated security validation verifies active enterprise standing.
                    </div>
                  </div>
                  <div className="flex items-start gap-2 bg-white p-2 rounded-xl border border-purple-100">
                    <span className="w-5 h-5 rounded-full bg-[#1C0B33] text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-slate-900">Access Portal & Cold-Chain Orders:</strong> Direct access to customized catalog pricing, RFQ terms & AI pairing engine.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-2">
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
                  className="w-full pl-10 pr-4 py-3 bg-white border border-purple-100 rounded-xl text-sm font-medium text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-purple-600 focus:outline-none transition-all shadow-xs"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-2">
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
                  placeholder="Enter your security credentials"
                  className="w-full pl-10 pr-11 py-3 bg-white border border-purple-100 rounded-xl text-sm font-medium text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-purple-600 focus:outline-none transition-all shadow-xs"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-purple-600 focus:ring-purple-500"
                />
                <span>Remember me on this workstation</span>
              </label>
              <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Password reset link sent to registered email!"); }} className="font-semibold text-amber-800 hover:text-amber-900">
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-6 rounded-xl luxury-button-green text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all group"
            >
              {isLoading ? (
                <span className="inline-block animate-spin font-bold">↻ Signing in...</span>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-300" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-purple-200/60" />
            </div>
            <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest text-slate-400">
              <span className="bg-[#FAF8FD] px-3">New to Fortune Gourmet?</span>
            </div>
          </div>

          {/* Create Partner Account Action */}
          <button
            type="button"
            onClick={onNavigateRegister}
            className="w-full py-3.5 px-6 rounded-xl bg-purple-100/70 hover:bg-purple-100 border border-purple-200 text-purple-950 font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-xs"
          >
            <span>Partner with us — Create your account</span>
            <Building2 className="w-4 h-4 text-purple-700" />
          </button>
          
          <p className="text-center text-[11px] text-slate-400 mt-2">
            Requires valid FSSAI license &amp; GSTIN registration
          </p>
        </div>

        {/* Footer info */}
        <div className="pt-6 border-t border-purple-200/50 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Enterprise food procurement portal for licensed HORECA businesses.</span>
          </div>
          <div className="flex items-center gap-3 font-medium text-slate-600">
            <a href="#terms" className="hover:text-purple-700">Terms</a>
            <span>•</span>
            <a href="#privacy" className="hover:text-purple-700">Privacy</a>
            <span>•</span>
            <a href="#concierge" className="hover:text-purple-700">Concierge</a>
          </div>
        </div>
      </div>
    </div>
  );
}
