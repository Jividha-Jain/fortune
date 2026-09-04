"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { 
  Bell, 
  ChevronDown,
  UtensilsCrossed,
  Package,
  Mail,
  User,
  Star,
  Bookmark,
  Heart,
  LogOut,
  Settings,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  X,
  LogIn
} from "lucide-react";

interface PortalHeaderProps {
  activeTab: "dashboard" | "mymenu" | "products" | "product-detail" | "recommendations" | "concept-detail" | "shortlist" | "watchlist" | "enquiries" | "insights" | "profile" | "onboarding" | "signin" | "register";
  setActiveTab: (tab: "dashboard" | "mymenu" | "products" | "product-detail" | "recommendations" | "concept-detail" | "shortlist" | "watchlist" | "enquiries" | "insights" | "profile" | "onboarding" | "signin" | "register") => void;
}

export default function PortalHeader({ activeTab, setActiveTab }: PortalHeaderProps) {
  const [showNotification, setShowNotification] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isKycBannerVisible, setIsKycBannerVisible] = useState(true);
  const [showKycModal, setShowKycModal] = useState(false);
  const [isKycCompleted, setIsKycCompleted] = useState(false);
  const [gstin, setGstin] = useState("27AAACI1681G1Z8");
  const [fssai, setFssai] = useState("10014022003189");
  const [isSubmittingKyc, setIsSubmittingKyc] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
        setShowNotification(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKycSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingKyc(true);
    setTimeout(() => {
      setIsSubmittingKyc(false);
      setIsKycCompleted(true);
      setShowKycModal(false);
      setIsKycBannerVisible(false);
      alert("✓ KYC Verification Submitted Successfully! Your account is now fully verified.");
    }, 700);
  };

  const navItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "products", label: "Products" },
    { id: "recommendations", label: "AI Recommendations" },
    { id: "profile", label: "Business Profile" },
  ];

  const profileMenuItems = [
    { id: "mymenu", label: "My Menu", icon: UtensilsCrossed, badge: "6 Dishes", desc: "View active paired dishes" },
    { id: "watchlist", label: "Watchlist", icon: Bookmark, badge: "4 Tracked", desc: "Price locks & stock alerts" },
    { id: "enquiries", label: "Enquiries", icon: Mail, badge: "RFQ", desc: "Commercial quotation terms" },
    { id: "shortlist", label: "Shortlist", icon: Star, badge: "4 Saved", desc: "Curated executive selection" },
    { id: "profile", label: "Profile & Account", icon: User, badge: "Settings", desc: "Taj Executive preferences" },
  ];

  return (
    <>
      {/* PERSISTENT TOP KYC INCOMPLETE ALERT BANNER */}
      {isKycBannerVisible && !isKycCompleted && (
        <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-[#1C0B33] px-4 py-2.5 text-xs font-bold flex items-center justify-between shadow-md border-b border-amber-600/30 sticky top-0 z-50 animate-fade-in">
          <div className="flex items-center gap-2.5 max-w-5xl mx-auto text-left">
            <span className="w-5 h-5 rounded-full bg-[#1C0B33] text-[#F5C453] flex items-center justify-center text-[10px] shrink-0 font-bold">
              ⚠️
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="font-extrabold uppercase tracking-wider text-[10px] bg-[#1C0B33] text-[#F5C453] px-2 py-0.5 rounded">
                KYC Incomplete
              </span>
              <span className="font-semibold text-[#1C0B33]">
                Your establishment verification is pending. Upload your FSSAI / GST license to activate Net-30 credit limits &amp; express dispatch.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setShowKycModal(true)}
              className="px-3 py-1.5 bg-[#1C0B33] hover:bg-black text-amber-300 rounded-lg text-[11px] font-bold transition-all cursor-pointer shadow-xs whitespace-nowrap active:scale-95"
            >
              Complete KYC Now →
            </button>
            <button
              onClick={() => setIsKycBannerVisible(false)}
              className="text-[#1C0B33] hover:text-black font-bold p-1 text-xs cursor-pointer ml-1"
              title="Dismiss banner"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* KYC VERIFICATION POPUP MODAL */}
      {showKycModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-left space-y-5 relative">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setShowKycModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 font-bold p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title */}
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                <span>Express Hotel Verification</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                Complete Account KYC
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Provide your GSTIN and FSSAI license numbers to verify your establishment.
              </p>
            </div>

            {/* KYC Form */}
            <form onSubmit={handleKycSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1">
                  GSTIN Registration Number
                </label>
                <input
                  type="text"
                  required
                  value={gstin}
                  onChange={(e) => setGstin(e.target.value)}
                  placeholder="27AAACI1681G1Z8"
                  className="w-full px-4 py-3 bg-purple-50/20 border border-purple-200 rounded-xl text-xs font-mono uppercase font-bold text-slate-900 focus:ring-2 focus:ring-[#5E3B8C] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-1">
                  FSSAI License Number (14 Digits)
                </label>
                <input
                  type="text"
                  required
                  value={fssai}
                  onChange={(e) => setFssai(e.target.value)}
                  placeholder="10014022003189"
                  className="w-full px-4 py-3 bg-purple-50/20 border border-purple-200 rounded-xl text-xs font-mono font-bold text-slate-900 focus:ring-2 focus:ring-[#5E3B8C] focus:outline-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setShowKycModal(false)}
                  className="px-4 py-3 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 cursor-pointer"
                >
                  Skip for Now
                </button>
                <button
                  type="submit"
                  disabled={isSubmittingKyc}
                  className="flex-1 py-3 px-6 rounded-xl bg-[#1C0B33] hover:bg-[#2B1B4E] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all active:scale-95"
                >
                  {isSubmittingKyc ? "Verifying..." : "Verify & Complete KYC →"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <header className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-50 w-full shadow-2xs">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4 relative">
        
        {/* Left Brand Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer shrink-0 group" 
          onClick={() => setActiveTab("dashboard")}
        >
          <div className="w-10 h-10 rounded-xl bg-[#1C0B33] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-300">
            <span className="font-serif font-bold text-xl leading-none text-[#F5C453]">F</span>
          </div>
          <div className="hidden sm:block text-left">
            <div className="font-serif font-bold text-xs sm:text-sm tracking-[0.14em] text-[#1C0B33] uppercase leading-tight">
              FORTUNE GOURMET
            </div>
            <div className="text-[9px] uppercase font-bold tracking-[0.2em] text-slate-400 mt-0.5">
              SPECIALITIES <span className="text-[#F5C453]">•</span> HORECA
            </div>
          </div>
        </div>

        {/* Center Main Nav Capsule Pill Track (Matching Reference Screenshot Pixel-for-Pixel) */}
        <nav className="hidden md:flex items-center bg-[#F4EFFB]/60 p-1.5 rounded-full border border-slate-200/60 shadow-2xs gap-1">
          {navItems.map((item) => {
            const isActive = 
              (item.id === "dashboard" && activeTab === "dashboard") || 
              (item.id === "products" && (activeTab === "products" || activeTab === "product-detail" || activeTab === "shortlist")) || 
              (item.id === "recommendations" && (activeTab === "recommendations" || activeTab === "concept-detail" || activeTab === "mymenu")) ||
              (item.id === "insights" && (activeTab === "insights" || activeTab === "enquiries"));

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`text-xs font-bold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#1C0B33] text-white px-5 py-2 rounded-full shadow-xs"
                    : "text-slate-600 hover:text-[#1C0B33] px-4 py-2 rounded-full font-semibold hover:bg-white/80"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Tools: Notification Bell & Taj Hotel User Profile */}
        <div className="flex items-center gap-3 shrink-0 relative" ref={dropdownRef}>
          
          {/* Bell Icon */}
          <button
            onClick={() => {
              setShowNotification(!showNotification);
              setShowProfileMenu(false);
            }}
            className="relative p-2.5 rounded-full hover:bg-slate-100 text-[#1C0B33] transition-colors shrink-0 cursor-pointer"
            title="Notifications"
          >
            <Bell className="w-4.5 h-4.5 text-[#1C0B33]" />
            <span className="w-2 h-2 rounded-full bg-[#F5C453] ring-2 ring-white absolute top-2 right-2 animate-pulse" />
          </button>

          {/* User Profile Badge (Click to open dropdown) */}
          <div
            onClick={() => {
              setShowProfileMenu(!showProfileMenu);
              setShowNotification(false);
            }}
            className={`flex items-center gap-2.5 p-1 pr-3 rounded-full cursor-pointer transition-all shrink-0 border bg-white ${
              showProfileMenu 
                ? "border-[#5E3B8C] ring-2 ring-purple-100 shadow-xs" 
                : "border-slate-200/90 hover:border-slate-300 hover:bg-slate-50 shadow-2xs"
            }`}
          >
            <div className="relative w-8.5 h-8.5 rounded-full overflow-hidden shrink-0 border-2 border-[#F5C453] shadow-xs">
              <Image
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=400&q=80"
                alt="Chef Vikram Singh"
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden sm:flex flex-col justify-center text-left whitespace-nowrap py-0.5">
              <span className="text-xs font-bold text-[#111111] leading-tight block">Taj Hotel Mumbai</span>
              <span className="text-[10px] font-semibold text-[#5E3B8C] leading-tight block mt-0.5">Chef Vikram Singh</span>
            </div>
            <ChevronDown className={`w-3.5 h-3.5 text-slate-500 shrink-0 ml-0.5 transition-transform duration-300 ${
              showProfileMenu ? "rotate-180 text-[#5E3B8C]" : ""
            }`} />
          </div>

          {/* USER PROFILE DROPDOWN MENU - REDESIGNED LUXURY CARD */}
          {showProfileMenu && (
            <div className="absolute top-14 right-0 w-84 bg-white rounded-[26px] border border-slate-200/90 shadow-2xl z-50 overflow-hidden animate-fade-in text-left">
              
              {/* Header Profile Info Box */}
              <div className="p-4 bg-gradient-to-r from-[#1C0B33] via-[#2D1252] to-[#1C0B33] text-white border-b border-[#F5C453]/20 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-[#F5C453] shadow-md">
                    <Image
                      src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=400&q=80"
                      alt="Chef Vikram Singh"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-serif font-bold text-base leading-tight text-white">Taj Hotel Mumbai</h4>
                    <p className="text-xs text-purple-200 font-medium">Chef Vikram Singh (Executive Chef)</p>
                    <div className="inline-flex items-center gap-1.5 mt-1 text-[9px] font-bold text-[#F5C453] bg-[#F5C453]/15 px-2.5 py-0.5 rounded-full border border-[#F5C453]/30 uppercase tracking-wider">
                      <ShieldCheck className="w-3 h-3 text-[#F5C453]" />
                      <span>ENTERPRISE KEY ACCOUNT</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu Nav Links List */}
              <div className="p-2 space-y-1">
                <div className="px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                  EXECUTIVE PORTAL NAVIGATION
                </div>

                {profileMenuItems.map((menu) => {
                  const Icon = menu.icon;
                  const isActive = activeTab === menu.id || (menu.id === "products" && activeTab === "product-detail");

                  return (
                    <button
                      key={menu.id}
                      onClick={() => {
                        setActiveTab(menu.id as any);
                        setShowProfileMenu(false);
                      }}
                      className={`w-full p-2.5 rounded-xl flex items-center justify-between transition-all duration-200 text-xs cursor-pointer ${
                        isActive
                          ? "bg-[#F4EFFB] text-[#5E3B8C] font-bold border border-[#E2D4F7]"
                          : "text-[#111111] hover:bg-slate-50 font-semibold"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8.5 h-8.5 rounded-xl flex items-center justify-center shrink-0 ${
                          isActive ? "bg-[#5E3B8C] text-white" : "bg-slate-100 text-slate-600"
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-[#111111] text-xs">{menu.label}</div>
                          <div className="text-[10px] text-slate-400 font-normal">{menu.desc}</div>
                        </div>
                      </div>

                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                        {menu.badge}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Quick Actions */}
              <div className="p-2.5 border-t border-slate-100 bg-slate-50/80 flex items-center justify-between text-xs">
                <button
                  onClick={() => {
                    setActiveTab("profile");
                    setShowProfileMenu(false);
                  }}
                  className="px-3 py-1.5 rounded-xl text-slate-700 hover:text-[#111111] hover:bg-white font-bold flex items-center gap-1.5 text-xs cursor-pointer border border-transparent hover:border-slate-200"
                >
                  <Settings className="w-3.5 h-3.5 text-slate-500" />
                  <span>Account Settings</span>
                </button>

                <button
                  onClick={() => {
                    setActiveTab("signin");
                    setShowProfileMenu(false);
                  }}
                  className="px-3 py-1.5 rounded-xl text-red-600 hover:text-red-700 hover:bg-red-50 font-bold flex items-center gap-1.5 text-xs cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5 text-red-500" />
                  <span>Sign Out / Switch</span>
                </button>
              </div>

            </div>
          )}

          {/* NOTIFICATION DROPDOWN */}
          {showNotification && (
            <div className="absolute top-14 right-0 w-80 bg-white rounded-[24px] border border-slate-200/90 shadow-2xl z-50 p-4 space-y-3 text-left animate-fade-in">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="font-serif font-bold text-sm text-[#111111]">Notifications</span>
                <span className="text-[10px] bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded-full">1 New</span>
              </div>

              <div className="space-y-2 text-xs">
                <div 
                  onClick={() => {
                    setActiveTab("enquiries");
                    setShowNotification(false);
                  }}
                  className="p-2.5 bg-[#F4EFFB] border border-[#E2D4F7] rounded-xl cursor-pointer space-y-0.5"
                >
                  <div className="font-bold text-[#5E3B8C] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>RFQ Commercial Quote Approved</span>
                  </div>
                  <div className="text-[10px] text-slate-600">Taj Master Agreement Tier Q2 pricing ready</div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

      {/* MOBILE & TABLET TABS SCROLLER */}
      <div className="md:hidden flex items-center gap-1.5 overflow-x-auto px-4 py-2 border-t border-slate-100 custom-scrollbar bg-slate-50/80">
        {navItems.map((item) => {
          const isActive = 
            (item.id === "dashboard" && activeTab === "dashboard") || 
            (item.id === "products" && (activeTab === "products" || activeTab === "product-detail" || activeTab === "shortlist")) || 
            (item.id === "recommendations" && (activeTab === "recommendations" || activeTab === "concept-detail" || activeTab === "mymenu")) ||
            (item.id === "insights" && (activeTab === "insights" || activeTab === "enquiries"));

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-[#1C0B33] text-white font-bold shadow-xs"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </header>
  </>
);
}
