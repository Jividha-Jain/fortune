"use client";

import React from "react";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Utensils,
  ChevronRight,
  CheckCircle2,
  Award,
  BarChart3,
  Package,
  Calendar,
} from "lucide-react";

import { RECOMMENDED_HOME_PRODUCTS } from "@/data/productsData";
import AIPairingSuggestionsSection from "./AIPairingSuggestionsSection";

interface ScreenDashboardProps {
  onNavigateTab: (tab: "products" | "product-detail" | "recommendations" | "mymenu") => void;
}

export default function ScreenDashboard({ onNavigateTab }: ScreenDashboardProps) {
  const recommendedSKUs = RECOMMENDED_HOME_PRODUCTS;

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] pb-24 font-sans relative overflow-hidden antialiased">
      
      {/* Subtle Background Pattern & Ambient Luxury Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#241347_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.025] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-gradient-to-bl from-[#D7A742]/12 via-[#241347]/5 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-[450px] left-[-150px] w-[600px] h-[600px] bg-gradient-to-tr from-[#241347]/8 via-[#D7A742]/3 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 lg:pt-14 space-y-12 relative z-10">

        {/* TOP HERO SECTION */}
        <div className="space-y-8">
          
          {/* Left Hero Title & Outlets Status Header */}
          <div className="max-w-xl space-y-4">
            <div className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#241347] flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D7A742] animate-pulse" />
              <Sparkles className="w-3.5 h-3.5 text-[#241347]" />
              <span>Executive Kitchen Intelligence</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#111111] font-normal tracking-[-0.02em] leading-[1.08]">
              Good morning,<br />
              <span className="font-bold text-[#241347] font-serif bg-gradient-to-r from-[#241347] via-[#3B1F70] to-[#241347] bg-clip-text text-transparent">Taj Hotel Mumbai</span>
            </h1>

            <div className="w-16 h-[3px] bg-gradient-to-r from-[#D7A742] to-[#E5BC5E] rounded-full my-3.5 shadow-xs" />

            <p className="text-[#555555] text-sm sm:text-base font-medium leading-relaxed">
              Here&apos;s what Fortune found for your menu.
            </p>
          </div>

          {/* HERO RECOMMENDATION CARD - SEAMLESS RADIAL MASK BLEND */}
          <div className="w-full bg-gradient-to-r from-[#1F0E37] via-[#1A0A30] to-[#140626] rounded-[24px] lg:rounded-[28px] p-8 sm:p-10 lg:p-12 text-white shadow-2xl border border-[#D7A742]/30 relative z-10 overflow-hidden min-h-[380px] lg:min-h-[420px] flex items-center">
            
            {/* Right Side Dish Image with Elliptical Radial Fade Blend */}
            <div 
              className="absolute top-0 right-0 bottom-0 w-full lg:w-[62%] h-full pointer-events-none z-0"
              style={{
                WebkitMaskImage: "radial-gradient(ellipse 65% 75% at 65% 50%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.8) 55%, rgba(0,0,0,0) 80%)",
                maskImage: "radial-gradient(ellipse 65% 75% at 65% 50%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.8) 55%, rgba(0,0,0,0) 80%)",
              }}
            >
              <Image
                src="/image/Dashboard.png"
                alt="Executive Gourmet Dish Presentation"
                fill
                unoptimized
                className="object-cover object-[65%_center] lg:object-right"
                priority
              />
            </div>

            {/* Concentric Golden Ring Arcs Centered Over the Dish */}
            <div className="absolute -top-36 -right-36 w-[620px] sm:w-[720px] lg:w-[820px] h-[620px] sm:h-[720px] lg:h-[820px] pointer-events-none z-1 flex items-center justify-center">
              <div className="w-full h-full rounded-full border border-[#D7A742]/45 flex items-center justify-center p-14 lg:p-20">
                <div className="w-full h-full rounded-full border border-[#D7A742]/35 flex items-center justify-center p-14 lg:p-20">
                  <div className="w-full h-full rounded-full border border-[#D7A742]/20" />
                </div>
              </div>
            </div>

            {/* Left Side Content Overlay */}
            <div className="w-full lg:w-[50%] space-y-6 relative z-10">
              
              {/* Gold Outline Badge */}
              <div className="inline-flex items-center gap-2 bg-[#1C0B33]/80 backdrop-blur-md border border-[#D7A742]/60 px-3.5 py-1.5 rounded-lg text-[#EBB738] text-[11px] font-bold tracking-widest uppercase shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#EBB738]" />
                <span>FORTUNE CULINARY PAIRING ENGINE</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif leading-[1.12] tracking-tight">
                <span className="text-[#F5C453] font-normal block font-serif">12 Fortune products</span>
                <span className="text-white font-normal block font-serif mt-1">match your menu</span>
              </h2>

              {/* Description */}
              <p className="text-slate-300/90 text-sm leading-relaxed max-w-md font-normal">
                Based on 42 dishes we&apos;ve analyzed from your current Wasabi &amp; Shamiana autumn dining menus. Discover direct cold-chain replacements, artisanal certifications, and higher kitchen yield.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  onClick={() => onNavigateTab("products")}
                  className="px-7 py-3.5 rounded-xl bg-[#E5B83B] hover:bg-[#F3C74C] text-[#1C0B33] font-bold text-xs uppercase tracking-wider flex items-center gap-2.5 shadow-lg transition-all duration-300 active:scale-[0.98]"
                >
                  <span>View Matches</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigateTab("recommendations")}
                  className="px-7 py-3.5 rounded-xl bg-transparent hover:bg-white/10 border border-[#D7A742]/60 hover:border-[#D7A742] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2.5 backdrop-blur-md active:scale-[0.98]"
                >
                  <span>Explore Recommendations</span>
                  <Package className="w-4 h-4 text-white" />
                </button>
              </div>

            </div>

          </div>

        </div>



        {/* SECTION 1: MATCHED SKUS READY FOR ORDER - EXACT MATCH TO REFERENCE SCREENSHOT */}
        <div className="space-y-6 pt-4 relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
            <div>
              <div className="text-[10px] uppercase font-bold tracking-[0.22em] text-[#5E3B8C] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#5E3B8C]" />
                <span>MATCHED PRODUCTS READY FOR ORDER</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif text-[#111111] font-normal mt-0.5 tracking-tight">
                Recommended for Your Kitchen
              </h3>
              <p className="text-xs text-slate-400 font-medium mt-1">
                Calibrated with your exact signature recipes for seamless kitchen switchovers.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs text-slate-500 font-medium">Sort by:</span>
              <select className="bg-white border border-slate-200/90 rounded-full text-xs font-semibold px-4 py-1.5 text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#5E3B8C]/20 shadow-2xs cursor-pointer">
                <option>Highest Match %</option>
                <option>Category</option>
                <option>Delivery Time</option>
              </select>
            </div>
          </div>

          {/* 4 Product Cards Grid with Floating Next Control */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedSKUs.map((sku) => (
                <div
                  key={sku.id}
                  className="bg-white rounded-[20px] lg:rounded-[24px] border border-slate-200/80 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Product Image */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                      <Image
                        src={sku.image}
                        alt={sku.title}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Top Left Match Badge */}
                      <div className="absolute top-3 left-3 bg-[#5E3B8C] text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                        {sku.matchPercent} MATCH
                      </div>
                      {/* Bottom Right Origin Tag */}
                      <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-sm text-white text-[10px] font-medium px-2.5 py-0.5 rounded-full border border-white/10">
                        {sku.originTag}
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-5 space-y-2.5">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-[#5E3B8C]">
                        {sku.category}
                      </div>
                      <h4 className="text-base font-serif font-bold text-[#111111] leading-snug min-h-[44px]">
                        {sku.title}
                      </h4>

                      <div className="flex items-start gap-2 pt-1 text-xs text-slate-600 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#5E3B8C] shrink-0 mt-0.5" />
                        <span className="leading-snug">{sku.matchDesc}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer (Without SKU) */}
                  <div className="p-5 pt-3 flex items-center justify-end border-t border-slate-100/80 mt-1">
                    <button
                      onClick={() => onNavigateTab("product-detail")}
                      className="text-[#5E3B8C] hover:text-[#2E1658] text-xs font-bold flex items-center gap-1 transition-colors group/btn cursor-pointer"
                    >
                      <span>View Product</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Floating Control */}
            <button
              onClick={() => onNavigateTab("products")}
              className="hidden lg:flex w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md items-center justify-center text-slate-700 hover:bg-slate-50 absolute -right-5 top-1/2 -translate-y-1/2 z-10 transition-all hover:scale-105"
              title="Next Products"
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>

        {/* SECTION 2: AI PAIRING SUGGESTIONS - MATCHING LATEST REFERENCE SCREENSHOT */}
        <AIPairingSuggestionsSection onNavigateTab={onNavigateTab} />

        {/* SECTION 3: EXECUTIVE TELEMETRY & COMPLIANCE BANNER */}
        <div className="bg-white/90 backdrop-blur-md border border-[#241347]/8 rounded-[28px] p-6 lg:p-7 flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] hover:shadow-md transition-all">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D7A742]/20 to-[#D7A742]/5 text-[#B88726] border border-[#D7A742]/20 flex items-center justify-center font-bold shrink-0 shadow-2xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111] font-serif">
                Taj Mumbai Dedicated Temperature Compliance
              </h4>
              <p className="text-xs text-[#666666] mt-0.5 font-medium">
                Direct daily rectors to Colaba with -18°C Frozen &amp; 0-4°C Chilled verified sensor telemetry.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-semibold text-emerald-800 bg-emerald-50/90 border border-emerald-200/90 px-4 py-2 rounded-full flex items-center gap-2 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Next Slot: Tomorrow 05:30 AM</span>
            </span>

            <button
              onClick={() => alert("Delivery Window & Temperature telemetry config opened.")}
              className="px-5 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-200/80 transition-all"
            >
              Manage Delivery Specs
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
