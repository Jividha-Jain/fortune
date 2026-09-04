"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Search, 
  Upload, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  ArrowUpRight,
  TrendingUp,
  ShieldCheck,
  Star,
  Layers,
  Recycle,
  Award,
  Zap
} from "lucide-react";

interface ScreenMyMenuProps {
  onNavigateTab: (tab: "products" | "product-detail" | "recommendations") => void;
}

export default function ScreenMyMenu({ onNavigateTab }: ScreenMyMenuProps) {
  const [selectedOutlet, setSelectedOutlet] = useState("All Outlets");
  const [selectedCategory, setSelectedCategory] = useState("All Dishes (42)");

  const outlets = ["All Outlets", "Wasabi", "Shamiana", "Sea Lounge"];
  const categories = [
    { label: "All Dishes (42)", count: "42", isGold: true },
    { label: "Pizza & Wood-Fired (8)", count: "8" },
    { label: "Pasta & Primi (10)", count: "10" },
    { label: "Starters & Small Plates (12)", count: "12" },
    { label: "Main Courses (8)", count: "8" },
    { label: "Desserts & Bakery (4)", count: "4" },
  ];

  const menuDishes = [
    {
      id: "dish-1",
      outlet: "SHAMIANA",
      matchBadge: "2 Matches",
      category: "PIZZA & WOOD-FIRED",
      title: "Truffle Mushroom Pizza",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
      stockStatus: "100% IN STOCK",
      stockColor: "text-emerald-700",
      ingredients: [
        "TartufLanghe Truffle Butter (250g)",
        "Zanetti Mozzarella Block (1kg)",
      ],
      calloutBg: "bg-[#FDF9F0] border-[#F5E6BE]",
      calloutTitleColor: "text-[#B88726]",
      calloutIcon: Sparkles,
      calloutTitle: "AI MARGIN OPPORTUNITY",
      calloutDesc: "Consider adding fresh Burrata for a premium variant (+18% price realization).",
    },
    {
      id: "dish-2",
      outlet: "SHAMIANA",
      matchBadge: "3 Matches",
      category: "PIZZA & WOOD-FIRED",
      title: "Margherita Pizza D.O.C.",
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80",
      stockStatus: "VERIFIED DOP",
      stockColor: "text-[#5E3B8C]",
      ingredients: [
        "San Marzano DOP Peeled Tomatoes",
        "Bufala Mozzarella Campana DOP",
        "De Cecco Extra Virgin Olive Oil",
      ],
      calloutBg: "bg-[#F7F3FC] border-[#E9DDF8]",
      calloutTitleColor: "text-[#5E3B8C]",
      calloutIcon: ShieldCheck,
      calloutTitle: "AUTHENTICITY BADGE",
      calloutDesc: "DOP certification sticker available for digital guest tablet & physical menu.",
    },
    {
      id: "dish-3",
      outlet: "SHAMIANA",
      matchBadge: "2 Matches",
      category: "MAIN COURSES",
      title: "Pan-Seared Norwegian Salmon",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
      stockStatus: "COLD-CHAIN MONITORED",
      stockColor: "text-emerald-700",
      ingredients: [
        "Fortune Select Salmon Fillet Trim D",
        "Isigny Ste Mère Unsalted AOP Butter",
      ],
      calloutBg: "bg-[#F2FBF7] border-[#D1F3E5]",
      calloutTitleColor: "text-emerald-700",
      calloutIcon: TrendingUp,
      calloutTitle: "YIELD OPTIMIZATION",
      calloutDesc: "Direct cold air-freight reduces trim loss by 14% vs sea freight frozen.",
    },
    {
      id: "dish-4",
      outlet: "WASABI BY MORIMOTO",
      matchBadge: "2 Matches",
      category: "STARTERS & SMALL PLATES",
      title: "Hamachi & Yellowtail Carpaccio",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
      stockStatus: "AIR FREIGHT SPEC",
      stockColor: "text-emerald-700",
      ingredients: [
        "TartufLanghe Truffle Pearls (50g)",
        "Shoyu Select Premium Barrel Aged",
      ],
      calloutBg: "bg-[#F7F3FC] border-[#E9DDF8]",
      calloutTitleColor: "text-[#5E3B8C]",
      calloutIcon: Zap,
      calloutTitle: "FLAVOR SYNERGY",
      calloutDesc: "High synergy with Fortune artisanal yuzu dressing — tested 4.9/5 sensory score.",
    },
    {
      id: "dish-5",
      outlet: "SHAMIANA",
      matchBadge: "3 Matches",
      category: "PASTA & PRIMI",
      title: "Four Cheese Ravioli",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
      stockStatus: "3 FORMAGGI DIRECT",
      stockColor: "text-emerald-700",
      ingredients: [
        "Zanetti Parmigiano Reggiano 24M",
        "Gorgonzola DOP Dolce Cremoso",
        "Fresh Italian Buffalo Ricotta",
      ],
      calloutBg: "bg-[#F7F3FC] border-[#E9DDF8]",
      calloutTitleColor: "text-[#5E3B8C]",
      calloutIcon: Layers,
      calloutTitle: "SUPPLY CONTINUITY",
      calloutDesc: "Parmigiano 24M wheel allocation locked for 180 days at contracted T3 rates.",
    },
    {
      id: "dish-6",
      outlet: "SHAMIANA BREAKFAST",
      matchBadge: "1 Match",
      category: "DESSERTS & BAKERY",
      title: "Artisanal Butter Croissant",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
      stockStatus: "DRY TOURAGE GRADE",
      stockColor: "text-emerald-700",
      ingredients: [
        "Paysan Breton 82% Sheet Butter (2kg)",
      ],
      calloutBg: "bg-[#F7F3FC] border-[#E9DDF8]",
      calloutTitleColor: "text-[#5E3B8C]",
      calloutIcon: Award,
      calloutTitle: "LAMINATION EFFICIENCY",
      calloutDesc: "82% fat tourage sheets yield 28 distinct crispy layers without dough tearing.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] pb-24 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200/60 pb-6">
          <div className="space-y-1.5">
            <div className="text-[10px] uppercase font-bold tracking-[0.22em] text-[#5E3B8C] flex items-center gap-1.5">
              <span>FORTUNE INTELLIGENCE CORE</span>
              <span>•</span>
              <span>SYNCED: TODAY 08:45 AM</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif text-[#111111] font-normal leading-none tracking-tight">
              My Menu
            </h1>
            <p className="text-xs text-slate-500 font-medium">
              Your menu, analyzed by Fortune AI. Active menu: <strong className="text-[#111111] font-semibold">Autumn/Winter 2025</strong> — Wasabi by Morimoto &amp; Shamiana.
            </p>
          </div>

          {/* Right Header Stats & Upload Button */}
          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
            {/* Stat Card 1 */}
            <div className="bg-white border border-slate-200/80 px-5 py-2.5 rounded-2xl shadow-2xs text-left">
              <div className="text-[9px] uppercase font-bold tracking-wider text-slate-400">SKU MATCH RATE</div>
              <div className="text-xl font-serif font-bold text-[#111111] leading-tight flex items-center gap-2 mt-0.5">
                <span>88.4%</span>
                <span className="text-[10px] font-sans font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md flex items-center gap-0.5">
                  ▲ 4.2%
                </span>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white border border-slate-200/80 px-5 py-2.5 rounded-2xl shadow-2xs text-left">
              <div className="text-[9px] uppercase font-bold tracking-wider text-slate-400">ACTIVE DISHES</div>
              <div className="text-xl font-serif font-bold text-[#111111] leading-tight mt-0.5">
                42 <span className="text-xs font-sans font-normal text-slate-400">in 3 venues</span>
              </div>
            </div>

            {/* Upload Button */}
            <button
              onClick={() => alert("Re-upload menu dialog opened.")}
              className="px-5 py-3 rounded-xl bg-[#1B0B2E] hover:bg-[#2B1B4E] text-white text-xs font-bold flex items-center gap-2 shadow-md transition-all active:scale-[0.98]"
            >
              <Upload className="w-4 h-4 text-white" />
              <span>Upload Updated Menu (PDF)</span>
            </button>
          </div>
        </div>

        {/* SEARCH & OUTLET FILTERS ROW */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          {/* Left Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search dishes, ingredients, DOP codes..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200/90 rounded-xl text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5E3B8C]/20 shadow-2xs"
            />
          </div>

          {/* Right Outlet Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar">
            {outlets.map((outlet) => (
              <button
                key={outlet}
                onClick={() => setSelectedOutlet(outlet)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedOutlet === outlet
                    ? "bg-[#1B0B2E] text-white font-bold shadow-xs"
                    : "bg-white border border-slate-200/90 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {outlet}
              </button>
            ))}
          </div>
        </div>

        {/* CATEGORY TABS & SORT DROPDOWN ROW */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Left Category Tabs Container */}
          <div className="bg-slate-100/70 p-1 rounded-2xl flex items-center gap-1 overflow-x-auto custom-scrollbar">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.label;
              return (
                <button
                  key={cat.label}
                  onClick={() => setSelectedCategory(cat.label)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    isSelected
                      ? "bg-white text-[#9E6E17] font-bold shadow-2xs"
                      : "text-slate-600 hover:text-slate-900 font-medium"
                  }`}
                >
                  {isSelected && <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#9E6E17] mr-1.5" />}
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Right Sort Dropdown */}
          <div className="flex items-center gap-2 shrink-0 self-end lg:self-auto">
            <span className="text-xs text-slate-500 font-medium">Sort by:</span>
            <select className="bg-white border border-slate-200/90 rounded-xl text-xs font-semibold px-4 py-2 text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#5E3B8C]/20 shadow-2xs cursor-pointer">
              <option>Most Relevant</option>
              <option>Alphabetical</option>
              <option>Match Percentage</option>
            </select>
          </div>

        </div>

        {/* 6 DISH CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {menuDishes.map((dish) => {
            const CalloutIcon = dish.calloutIcon;
            return (
              <div
                key={dish.id}
                className="bg-white rounded-[24px] border border-slate-200/80 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Image Banner */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden">
                    <Image
                      src={dish.image}
                      alt={dish.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    
                    {/* Top Row Badges over Image */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="bg-black/60 backdrop-blur-md text-white font-mono text-[9px] px-2.5 py-1 rounded-md uppercase font-bold border border-white/20">
                        {dish.outlet}
                      </span>
                      <span className="bg-[#5E3B8C] text-white text-[9px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                        {dish.matchBadge}
                      </span>
                    </div>

                    {/* Bookmark Star Icon Top Right */}
                    <button className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors">
                      <Star className="w-4 h-4" />
                    </button>

                    {/* Bottom Details over Image */}
                    <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                      <div className="text-[9px] uppercase font-bold tracking-wider text-[#F5C453]">
                        {dish.category}
                      </div>
                      <h4 className="text-lg sm:text-xl font-serif font-bold text-white leading-tight mt-0.5">
                        {dish.title}
                      </h4>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 space-y-4">
                    
                    {/* Ingredients Section */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        <span>DIRECT SUPPLY INGREDIENTS</span>
                        <span className={`font-bold ${dish.stockColor}`}>{dish.stockStatus}</span>
                      </div>

                      <div className="space-y-2 pt-1">
                        {dish.ingredients.map((ing, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#5E3B8C] shrink-0" />
                            <span>{ing}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* AI Callout Insight Box */}
                    <div className={`p-3.5 rounded-2xl text-xs space-y-1 border ${dish.calloutBg}`}>
                      <div className={`font-bold flex items-center gap-1.5 text-[10px] tracking-wider uppercase ${dish.calloutTitleColor}`}>
                        <CalloutIcon className="w-3.5 h-3.5" />
                        <span>{dish.calloutTitle}</span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                        {dish.calloutDesc}
                      </p>
                    </div>

                  </div>
                </div>

                {/* Card Footer Link */}
                <button
                  onClick={() => onNavigateTab("recommendations")}
                  className="p-4 pt-3 flex items-center justify-between border-t border-slate-100/80 text-xs font-bold text-[#5E3B8C] hover:text-[#2E1658] transition-colors"
                >
                  <span>View AI Insights</span>
                  <ChevronRight className="w-4 h-4 text-[#5E3B8C]" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

