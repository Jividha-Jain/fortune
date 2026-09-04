"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Utensils, 
  Package, 
  Lightbulb, 
  Crown,
  ChefHat,
  ChevronDown
} from "lucide-react";

interface AICulinaryPairingSectionProps {
  onNavigateTab: (tab: "products" | "product-detail" | "recommendations" | "mymenu") => void;
}

export default function AICulinaryPairingSection({ onNavigateTab }: AICulinaryPairingSectionProps) {
  const [selectedDish, setSelectedDish] = useState("Margherita Pizza");
  const [selectedProduct, setSelectedProduct] = useState("Black Truffle Oil");
  const [activeSearchTag, setActiveSearchTag] = useState<string | null>("Pizza + Truffle");
  const [carouselIndex, setCarouselIndex] = useState(0);

  const dishesList = [
    { name: "Margherita Pizza", icon: "🍕", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=80&q=80" },
    { name: "Wild Mushroom Pasta", icon: "🍝", image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=80&q=80" },
    { name: "Grilled Salmon Fillet", icon: "🐟", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=80&q=80" },
    { name: "Beef Striploin Steak", icon: "🥩", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=80&q=80" },
    { name: "Dark Chocolate Cake", icon: "🍰", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=80&q=80" },
  ];

  const productsList = [
    { name: "Black Truffle Oil", category: "Oils & Aromas", image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=80&q=80" },
    { name: "Puglia Fresh Burrata", category: "Fresh Cheese", image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=80&q=80" },
    { name: "Yuzu Citrus Dressing", category: "Japanese Condiments", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=80&q=80" },
    { name: "Herb & Garlic Butter", category: "Artisanal Dairy", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=80&q=80" },
    { name: "Flaky Sea Salt", category: "Specialty Salt", image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=80&q=80" },
  ];

  const popularSearches = [
    { label: "Pizza + Truffle", dish: "Margherita Pizza", product: "Black Truffle Oil" },
    { label: "Pasta + Burrata", dish: "Wild Mushroom Pasta", product: "Puglia Fresh Burrata" },
    { label: "Salmon + Yuzu", dish: "Grilled Salmon Fillet", product: "Yuzu Citrus Dressing" },
    { label: "Steak + Herb Butter", dish: "Beef Striploin Steak", product: "Herb & Garlic Butter" },
    { label: "Chocolate + Sea Salt", dish: "Dark Chocolate Cake", product: "Flaky Sea Salt" },
  ];

  const pairingsCards = [
    {
      id: "pair-1",
      matchPercent: "92% Match",
      title: "Margherita Pizza with Truffle Oil",
      desc: "Classic meets luxury with an earthy twist.",
      tags: ["Pizza", "Burrata", "Truffle Oil"],
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "pair-2",
      matchPercent: "89% Match",
      title: "Pasta with Mushrooms & Parmesan",
      desc: "Rich, earthy and comforting.",
      tags: ["Pasta", "Mushroom", "Parmesan"],
      image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "pair-3",
      matchPercent: "87% Match",
      title: "Grilled Salmon with Yuzu Dressing",
      desc: "A bright, balanced pairing with umami depth.",
      tags: ["Salmon", "Yuzu", "Citrus"],
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "pair-4",
      matchPercent: "85% Match",
      title: "Chocolate Cake with Sea Salt",
      desc: "Sweet, rich and perfectly balanced.",
      tags: ["Chocolate", "Sea Salt", "Dark Cocoa"],
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const currentDishObj = dishesList.find((d) => d.name === selectedDish) || dishesList[0];
  const currentProductObj = productsList.find((p) => p.name === selectedProduct) || productsList[0];

  const handleSearchClick = (search: typeof popularSearches[0]) => {
    setActiveSearchTag(search.label);
    setSelectedDish(search.dish);
    setSelectedProduct(search.product);
  };

  const handleGetPairing = () => {
    onNavigateTab("recommendations");
  };

  return (
    <div className="w-full space-y-10 text-left font-sans">
      
      {/* MAIN BANNER CONTAINER MATCHING REFERENCE SCREENSHOT */}
      <div className="bg-[#FAF9F5] rounded-[36px] p-6 sm:p-8 lg:p-10 border border-slate-200/60 shadow-[0_4px_30px_rgba(0,0,0,0.03)] relative overflow-hidden">
        
        {/* Subtle Background Warm Glow */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-purple-200/30 via-amber-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* LEFT SIDE: HEADING & INTERACTIVE MATCHER */}
          <div className="lg:col-span-8 space-y-7">
            
            {/* AI Culinary Pairing Tag */}
            <div className="inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.25em] text-[#5E3B8C]">
              <Sparkles className="w-3.5 h-3.5 text-[#5E3B8C]" />
              <span>AI CULINARY PAIRING</span>
            </div>

            {/* Main Title & Subtitle */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif text-[#1C162E] font-normal leading-[1.12] tracking-tight">
                Better Ingredients<br />
                Create Extraordinary Dishes
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl">
                Tell us what you have — a dish or a product — and we&apos;ll suggest perfect pairings to create something amazing.
              </p>
            </div>

            {/* WHITE MATCHER CARD */}
            <div className="bg-white rounded-[28px] p-5 sm:p-6 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] space-y-4">
              
              <div className="flex flex-col md:flex-row items-center gap-3">
                
                {/* DISH SELECTOR */}
                <div className="w-full md:flex-1 bg-[#F9FAFC] border border-slate-200/70 rounded-2xl p-2.5 px-3 flex items-center gap-3 relative">
                  <div className="w-9 h-9 rounded-xl bg-[#F0EBFA] text-[#5E3B8C] flex items-center justify-center shrink-0">
                    <Utensils className="w-4 h-4 text-[#5E3B8C]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] uppercase font-bold text-slate-400 block tracking-wider">I have a dish</span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <div className="relative w-6 h-6 rounded-md overflow-hidden shrink-0 border border-slate-200">
                        <Image src={currentDishObj.image} alt={currentDishObj.name} fill unoptimized className="object-cover" />
                      </div>
                      <select
                        value={selectedDish}
                        onChange={(e) => setSelectedDish(e.target.value)}
                        className="w-full bg-transparent text-xs font-serif font-bold text-[#111111] focus:outline-none cursor-pointer truncate appearance-none pr-4"
                      >
                        {dishesList.map((d) => (
                          <option key={d.name} value={d.name}>{d.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 pointer-events-none" />
                </div>

                {/* PLUS CIRCLE */}
                <div className="w-8 h-8 rounded-full bg-[#EDE6F8] text-[#5E3B8C] font-bold text-base flex items-center justify-center shrink-0 shadow-2xs">
                  +
                </div>

                {/* PRODUCT SELECTOR */}
                <div className="w-full md:flex-1 bg-[#F9FAFC] border border-slate-200/70 rounded-2xl p-2.5 px-3 flex items-center gap-3 relative">
                  <div className="w-9 h-9 rounded-xl bg-[#F0EBFA] text-[#5E3B8C] flex items-center justify-center shrink-0">
                    <Package className="w-4 h-4 text-[#5E3B8C]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] uppercase font-bold text-slate-400 block tracking-wider">I have a product</span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <div className="relative w-6 h-6 rounded-md overflow-hidden shrink-0 border border-slate-200">
                        <Image src={currentProductObj.image} alt={currentProductObj.name} fill unoptimized className="object-cover" />
                      </div>
                      <select
                        value={selectedProduct}
                        onChange={(e) => setSelectedProduct(e.target.value)}
                        className="w-full bg-transparent text-xs font-serif font-bold text-[#111111] focus:outline-none cursor-pointer truncate appearance-none pr-4"
                      >
                        {productsList.map((p) => (
                          <option key={p.name} value={p.name}>{p.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 pointer-events-none" />
                </div>

                {/* GET PAIRING CTA BUTTON */}
                <button
                  onClick={handleGetPairing}
                  className="w-full md:w-auto py-3.5 px-6 rounded-2xl bg-[#1C0D37] hover:bg-[#2B1B4E] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer shrink-0"
                >
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                  <span className="whitespace-nowrap">Get Pairing Ideas</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </button>

              </div>

              {/* POPULAR SEARCH PILLS */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 text-xs">
                <span className="text-[11px] text-slate-400 font-medium shrink-0">Try popular searches:</span>
                {popularSearches.map((s) => {
                  const isActive = activeSearchTag === s.label;
                  return (
                    <button
                      key={s.label}
                      onClick={() => handleSearchClick(s)}
                      className={`px-3.5 py-1.5 rounded-full text-[11px] font-medium transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#5E3B8C] text-white font-semibold shadow-xs"
                          : "bg-[#F1F3F9] hover:bg-slate-200/70 text-[#5B6275]"
                      }`}
                    >
                      {s.label}
                    </button>
                  );
                })}
              </div>

            </div>

          </div>

          {/* RIGHT SIDE: RISOTTO PLATE ARTWORK WITH FLOATING BADGES */}
          <div className="lg:col-span-4 relative flex items-center justify-center min-h-[300px] lg:min-h-[340px]">
            
            {/* Top Cursive Text Annotation */}
            <div className="absolute -top-4 right-6 font-serif italic text-xl text-[#5E3B8C] font-semibold tracking-tight pointer-events-none leading-tight rotate-[-4deg]">
              Same Ingredients.<br />
              <span className="ml-4">New Possibilities.</span>
            </div>

            {/* Circular Plate Food Visual */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=700&q=80"
                alt="Truffle Mushroom Risotto"
                fill
                unoptimized
                className="object-cover scale-110"
              />
            </div>

            {/* Floating Tag 1: Truffle (Top Left) */}
            <div className="absolute top-10 left-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-slate-200/60 text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <span>Truffle</span>
            </div>

            {/* Floating Tag 2: Parmesan (Top Right) */}
            <div className="absolute top-8 right-0 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-slate-200/60 text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <span>Parmesan</span>
            </div>

            {/* Floating AI Suggested Badge (Bottom Right) */}
            <div 
              onClick={() => onNavigateTab("recommendations")}
              className="absolute -bottom-2 right-[-10px] bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-purple-100 flex items-center gap-3 text-left max-w-[220px] group cursor-pointer hover:border-purple-300 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F4EFFB] text-[#5E3B8C] flex items-center justify-center shrink-0">
                <ChefHat className="w-5 h-5 text-[#5E3B8C]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">AI Suggested</div>
                <div className="text-xs font-serif font-bold text-slate-900 truncate">Truffle Mushroom Risotto</div>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#1C0D37] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* POPULAR PAIRINGS FOR YOU CAROUSEL SECTION */}
      <div className="space-y-6 pt-2 relative">
        
        {/* Section Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl lg:text-3xl font-serif text-[#1C162E] font-normal tracking-tight flex items-center gap-2">
              <Crown className="w-5 h-5 text-[#D99B26] fill-[#D99B26]" />
              <span>Popular Pairings for You</span>
            </h3>
            <p className="text-xs text-slate-400 font-medium mt-1">
              Curated by our culinary AI based on global chef insights and ingredient compatibility.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onNavigateTab("recommendations")}
              className="text-[#5E3B8C] hover:text-[#3B1F60] text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer mr-2"
            >
              <span>View All Pairings</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#5E3B8C]" />
            </button>
          </div>
        </div>

        {/* 4 CARDS WITH SIDE NAVIGATION ARROWS */}
        <div className="relative px-2 sm:px-4">
          
          {/* Left Arrow Button */}
          <button
            onClick={() => setCarouselIndex((prev) => Math.max(0, prev - 1))}
            disabled={carouselIndex === 0}
            className="absolute left-[-16px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-slate-700" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => setCarouselIndex((prev) => Math.min(pairingsCards.length - 1, prev + 1))}
            disabled={carouselIndex >= pairingsCards.length - 1}
            className="absolute right-[-16px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-slate-700" />
          </button>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pairingsCards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-[24px] border border-slate-200/80 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Image with Gold Match Badge */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-[#FEF9E7] border border-[#F5E6BE] text-[#9E6E17] font-bold text-[10px] px-2.5 py-1 rounded-md shadow-xs">
                      {card.matchPercent}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-2.5 text-left">
                    <h4 className="text-base font-serif font-bold text-[#1C162E] leading-snug min-h-[44px]">
                      {card.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed min-h-[36px]">
                      {card.desc}
                    </p>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-2">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#F3F0FA] text-[#5E3B8C] text-[10px] font-semibold px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="p-5 pt-0 flex items-center justify-start border-t border-slate-100/80 mt-2">
                  <button
                    onClick={() => onNavigateTab("recommendations")}
                    className="text-[#5E3B8C] hover:text-[#3B1F60] text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer group/btn"
                  >
                    <span>View Recipe</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 transition-transform text-[#5E3B8C]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* BOTTOM HELP BANNER MATCHING REFERENCE SCREENSHOT */}
      <div className="bg-[#F8F5FD] border border-purple-100 rounded-[28px] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs text-left">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0 shadow-2xs">
            <Lightbulb className="w-5 h-5 text-[#D97706]" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#1C162E] font-serif">
              Not sure what to pair?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">
              Explore AI-curated ingredient combinations, seasonal ideas and chef-recommended suggestions.
            </p>
          </div>
        </div>

        <button
          onClick={() => onNavigateTab("recommendations")}
          className="px-6 py-3 rounded-full bg-[#F1E9FC] hover:bg-[#E7DBFA] text-[#5E3B8C] font-bold text-xs flex items-center gap-2 transition-colors shadow-2xs active:scale-[0.98] shrink-0 cursor-pointer"
        >
          <span>Explore All Combinations</span>
          <ArrowRight className="w-4 h-4 text-[#5E3B8C]" />
        </button>
      </div>

    </div>
  );
}
