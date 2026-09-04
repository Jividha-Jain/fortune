"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Download, 
  PhoneCall, 
  Bookmark, 
  ShoppingCart,
  Truck,
  Award
} from "lucide-react";

interface ScreenProductDetailProps {
  onBack: () => void;
}

export default function ScreenProductDetail({ onBack }: ScreenProductDetailProps) {
  const [moqCount, setMoqCount] = useState(5);
  const [activeThumb, setActiveThumb] = useState(0);

  const galleryImages = [
    "https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1592417817098-8f3d6eb1626d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <div className="min-h-screen bg-[#FAF8FD] pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
        
        {/* BREADCRUMBS & TOP BAR */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-100/80 pb-4">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <button onClick={onBack} className="flex items-center gap-1 text-purple-700 hover:underline font-bold">
              <ArrowLeft className="w-3.5 h-3.5" /> Catalog
            </button>
            <span>/</span>
            <span>Dairy &amp; Cheese</span>
            <span>/</span>
            <span className="font-bold text-slate-900">Zanetti Mozzarella di Bufala Campana DOP</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-amber-900 bg-amber-100 border border-amber-300 px-2.5 py-1 rounded-full flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-amber-700" /> Authenticity Guaranteed
            </span>
          </div>
        </div>

        {/* TWO COLUMN PRODUCT DETAILS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: PHOTOS & SPECS (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Image View */}
            <div className="bg-white rounded-3xl p-4 border border-purple-100/90 shadow-xs space-y-4">
              <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={galleryImages[activeThumb]}
                  alt="Zanetti Mozzarella di Bufala"
                  fill
                  className="object-cover"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 bg-amber-500 text-purple-950 font-bold text-xs px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" /> DOP CERTIFIED
                </div>

                <div className="absolute top-3 right-3 bg-purple-900/90 backdrop-blur-md text-white font-semibold text-xs px-3 py-1 rounded-full shadow-md">
                  Fresh Chilled 2-4°C
                </div>

                <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-mono p-2 rounded-xl text-center">
                  📍 Direct Import Campania • Chilled Air Freight Weekly
                </div>
              </div>

              {/* Gallery Thumbnails */}
              <div className="grid grid-cols-3 gap-3">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveThumb(idx)}
                    className={`relative h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      activeThumb === idx ? "border-purple-600 scale-105" : "border-slate-200 opacity-70"
                    }`}
                  >
                    <Image src={img} alt="Thumb" fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* CULINARY SUPPLY & STORAGE SPECS */}
            <div className="bg-white rounded-3xl p-6 border border-purple-100/90 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-xs uppercase font-bold tracking-wider text-slate-900">
                  Culinary Supply &amp; Storage Specs
                </h3>
                <span className="text-[10px] uppercase font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded">
                  HORECA Grade A
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-purple-50/40 p-3 rounded-2xl border border-purple-100">
                  <div className="text-[10px] text-slate-400 font-bold uppercase">PRIMARY UNIT</div>
                  <div className="text-sm font-bold text-slate-900 font-serif mt-0.5">1.0 KG Pack</div>
                  <div className="text-[10px] text-slate-500">8 x 125g balls in brine</div>
                </div>

                <div className="bg-purple-50/40 p-3 rounded-2xl border border-purple-100">
                  <div className="text-[10px] text-slate-400 font-bold uppercase">MASTER CARTON</div>
                  <div className="text-sm font-bold text-slate-900 font-serif mt-0.5">6 x 1 KG Cases</div>
                  <div className="text-[10px] text-slate-500">Gross Wt: 7.2kg EPS</div>
                </div>

                <div className="bg-purple-50/40 p-3 rounded-2xl border border-purple-100">
                  <div className="text-[10px] text-slate-400 font-bold uppercase">SHELF LIFE</div>
                  <div className="text-sm font-bold text-slate-900 font-serif mt-0.5">28 Days</div>
                  <div className="text-[10px] text-slate-500">From Caserta departure</div>
                </div>

                <div className="bg-purple-50/40 p-3 rounded-2xl border border-purple-100">
                  <div className="text-[10px] text-slate-400 font-bold uppercase">COLD REGIMEN</div>
                  <div className="text-sm font-bold text-slate-900 font-serif mt-0.5">+2°C to +4°C</div>
                  <div className="text-[10px] text-slate-500">Active IoT datalogger</div>
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-2xl flex items-center justify-between text-xs border border-slate-200">
                <span className="text-slate-600 font-medium">Moisture: 58-62% • Milk Fat: ≥52% FDM</span>
                <button onClick={() => alert("Lab Spec Sheet PDF downloaded.")} className="text-purple-700 font-bold hover:underline flex items-center gap-1 text-[11px]">
                  <Download className="w-3.5 h-3.5" /> Download Lab Spec PDF
                </button>
              </div>
            </div>

            {/* DIRECT KITCHEN CONSULTATION */}
            <div className="bg-purple-50/80 rounded-3xl p-5 border border-purple-200/80 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-purple-900 text-amber-300 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-purple-950">
                    Direct Kitchen Consultation
                  </h4>
                  <p className="text-[11px] text-purple-900/80 mt-0.5">
                    Need complimentary sample testing for your culinary team? Reach our Mumbai Chef Desk.
                  </p>
                </div>
              </div>
              <button
                onClick={() => alert("Call routed to Mumbai Executive Chef Desk.")}
                className="px-3.5 py-2 bg-white text-purple-950 text-xs font-bold rounded-xl border border-purple-200 shrink-0 hover:bg-purple-100"
              >
                Chef Desk
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: DETAILS & MATCH ENGINE (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Title & Description */}
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-widest text-purple-700">
                DAIRY &amp; ITALIAN ARTISANAL CHEESE • Campania, Italy • Zanetti 1900
              </div>

              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
                Zanetti Mozzarella di Bufala Campana DOP
              </h1>

              <p className="text-slate-600 text-sm leading-relaxed">
                Crafted exclusively from 100% fresh water buffalo milk in the certified DOP region of Campania. Known for its porcelain white sheen, delicate crust, elastic texture, and distinctive rich lactic tang with sweet butter aroma. Delivers optimum elasticity and zero blistering bitterness under high-temperature stone deck ovens.
              </p>
            </div>

            {/* FORTUNE CULINARY AI - TAJ MUMBAI ENGINE CARD */}
            <div className="bg-white rounded-3xl p-6 border border-purple-100/90 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4.5 h-4.5 text-purple-700" />
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-purple-900">
                      FORTUNE CULINARY AI • TAJ MUMBAI ENGINE
                    </div>
                    <h3 className="text-base font-bold text-slate-900 font-serif">
                      Why Fortune Recommends This for Taj Hotel
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-bold text-amber-900 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full">
                  4 Matches
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Your menu currently contains <strong>4 signature dishes</strong> where Zanetti Mozzarella provides superior melt viscosity, authentic DOP provenance, and up to 14% higher water yield preservation during flash baking.
              </p>

              {/* 4 Dish Match Rows */}
              <div className="space-y-3">
                {/* Match 1 */}
                <div className="p-4 bg-purple-50/60 rounded-2xl border border-purple-100 flex items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-purple-200 text-purple-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <h5 className="text-xs font-bold text-slate-900">
                        Margherita Pizza D.O.C. <span className="text-[10px] text-purple-700 font-normal">(Shamiana &amp; Room Svc)</span>
                      </h5>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        Replaces generic cow mozzarella; increases crust blistering and moisture retention.
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-sm font-bold text-emerald-700 font-serif">98% Match</div>
                    <div className="text-[10px] text-slate-400">High Impact</div>
                  </div>
                </div>

                {/* Match 2 */}
                <div className="p-4 bg-purple-50/60 rounded-2xl border border-purple-100 flex items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-purple-200 text-purple-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <h5 className="text-xs font-bold text-slate-900">Four Cheese White Pizza (Quattro Formaggi)</h5>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        Pairs harmoniously with Gorgonzola Piccante without separating grease pockets.
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-sm font-bold text-emerald-700 font-serif">94% Match</div>
                    <div className="text-[10px] text-slate-400">Formula Match</div>
                  </div>
                </div>

                {/* Match 3 */}
                <div className="p-4 bg-purple-50/60 rounded-2xl border border-purple-100 flex items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-purple-200 text-purple-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <h5 className="text-xs font-bold text-slate-900">
                        Insalata Caprese Tradizionale <span className="text-[10px] text-purple-700 font-normal">(Fine Dining)</span>
                      </h5>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        Crucial signature antipaste uplift; visual water tear delivers authentic Italian presentation.
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-sm font-bold text-emerald-700 font-serif">99% Match</div>
                    <div className="text-[10px] text-slate-400">Signature Dish</div>
                  </div>
                </div>

                {/* Match 4 */}
                <div className="p-4 bg-purple-50/60 rounded-2xl border border-purple-100 flex items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-purple-200 text-purple-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <h5 className="text-xs font-bold text-slate-900">Baked Pasta Sorrentina</h5>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        Substitutes cow fior di latte for deeper umami gratin crust in banqueting batches.
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-sm font-bold text-purple-900 font-serif">82% Match</div>
                    <div className="text-[10px] text-slate-400">Banquet Yield</div>
                  </div>
                </div>
              </div>
            </div>

            {/* SUGGESTED CULINARY APPLICATIONS */}
            <div className="space-y-2">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                SUGGESTED CULINARY APPLICATIONS
              </div>
              <div className="flex flex-wrap gap-2">
                {["Neapolitan Wood-Fired Pizza", "Artisanal Caprese Salad", "Robata Melt Gratin", "Luxury Breakfast Buffet Platter"].map((app, i) => (
                  <span key={i} className="text-xs bg-white border border-purple-200/80 px-3.5 py-1.5 rounded-full text-slate-800 font-medium">
                    • {app}
                  </span>
                ))}
              </div>
            </div>

            {/* ORDER MOQ & CONTRACT PRICING BOX */}
            <div className="bg-purple-50/90 rounded-3xl p-6 border border-purple-200/90 space-y-4 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-purple-950">
                    MINIMUM ORDER QUANTITY (MOQ)
                  </div>
                  <div className="text-xs text-slate-600">Case of 6 x 1KG • Air Shipments Weekly</div>
                </div>

                {/* Counter */}
                <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-xl border border-purple-200">
                  <button
                    onClick={() => setMoqCount(Math.max(1, moqCount - 1))}
                    className="text-slate-500 font-bold hover:text-slate-900 text-base"
                  >
                    -
                  </button>
                  <span className="font-bold text-sm font-serif text-slate-900">{moqCount} Cases</span>
                  <button
                    onClick={() => setMoqCount(moqCount + 1)}
                    className="text-slate-500 font-bold hover:text-slate-900 text-base"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-purple-900 font-semibold pt-1 border-t border-purple-200/60">
                <Truck className="w-4 h-4 text-purple-700" />
                <span>Est. Delivery Mumbai Cold Hub: <strong>Within 24-36 Hours</strong></span>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => alert("Product added to Taj Mumbai Shortlist.")}
                  className="py-3.5 px-4 rounded-xl bg-white border border-purple-300 text-purple-950 font-bold text-xs hover:bg-purple-100 flex items-center justify-center gap-2 shadow-2xs"
                >
                  <Bookmark className="w-4 h-4" />
                  <span>★ Add to Shortlist</span>
                </button>

                <button
                  onClick={() => alert("Contract Pricing Quote Request submitted for Taj Hotel Mumbai procurement team.")}
                  className="py-3.5 px-4 rounded-xl bg-[#4D2694] hover:bg-[#391a73] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md"
                >
                  <ShoppingCart className="w-4 h-4 text-amber-300" />
                  <span>Request Contract Pricing</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
