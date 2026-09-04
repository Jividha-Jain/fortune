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
  ChefHat
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
    { name: "Margherita Pizza", icon: "🍕", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=120&q=80" },
    { name: "Wild Mushroom Pasta", icon: "🍝", image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=120&q=80" },
    { name: "Grilled Salmon Fillet", icon: "🐟", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=120&q=80" },
    { name: "Beef Striploin Steak", icon: "🥩", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=120&q=80" },
    { name: "Dark Chocolate Cake", icon: "🍰", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=120&q=80" },
  ];

  const productsList = [
    { name: "Black Truffle Oil", category: "Oils & Aromas", image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=120&q=80" },
    { name: "Puglia Fresh Burrata", category: "Fresh Cheese", image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=120&q=80" },
    { name: "Yuzu Citrus Dressing", category: "Japanese Condiments", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=120&q=80" },
    { name: "Herb & Garlic Butter", category: "Artisanal Dairy", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=120&q=80" },
    { name: "Flaky Sea Salt", category: "Specialty Salt", image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=120&q=80" },
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

  const handleSearchClick = (search: typeof popularSearches[0]) => {
    setActiveSearchTag(search.label);
    setSelectedDish(search.dish);
    setSelectedProduct(search.product);
  };

  const handleGetPairing = () => {
    onNavigateTab("recommendations");
  };

  return (
    <div className="w-full space-y-8 text-left font-sans">
      
      {/* TOP AI CULINARY PAIRING HERO BANNER */}
      <div className="bg-gradient-to-br from-[#FAF7FF] via-[#F6EEFF] to-[#FAF8FF] rounded-[32px] p-6 sm:p-8 lg:p-10 border border-purple-100/90 shadow-sm relative overflow-hidden">
        
        {/* Subtle Background Radial Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-purple-200/40 via-amber-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* LEFT SIDE CONTENT & SEARCH MATCHER */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top Left Sparkle Badge */}
            <div className="inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.22em] text-[#5E3B8C]">
              <Sparkles className="w-3.5 h-3.5 text-[#5E3B8C]" />
              <span>AI CULINARY PAIRING</span>
            </div>

            {/* Main Title & Subtitle */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif text-[#111111] font-normal leading-[1.12] tracking-tight">
                Better Ingredients<br />
                <span className="font-serif">Create Extraordinary Dishes</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl">
                Tell us what you have — a dish or a product — and we&apos;ll suggest perfect pairings to create something amazing.
              </p>
            </div>

            {/* INTERACTIVE SEARCH & MATCHER CONTAINER */}
            <div className="bg-white rounded-[24px] p-4 sm:p-5 border border-purple-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] space-y-4">
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                
                {/* INPUT 1: I have a dish */}
                <div className="md:col-span-5 bg-slate-50/80 border border-slate-200/80 rounded-2xl p-2.5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-100/80 text-[#5E3B8C] flex items-center justify-center shrink-0">
                    <Utensils className="w-4 h-4 text-[#5E3B8C]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] uppercase font-bold text-slate-400 block tracking-wider">I have a dish</span>
                    <select
                      value={selectedDish}
                      onChange={(e) => setSelectedDish(e.target.value)}
                      className="w-full bg-transparent text-xs font-serif font-bold text-[#111111] focus:outline-none cursor-pointer truncate"
                    >
                      {dishesList.map((d) => (
                        <option key={d.name} value={d.name}>{d.icon} {d.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Plus Indicator */}
                <div className="md:col-span-1 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-[#5E3B8C] font-bold text-sm flex items-center justify-center shadow-2xs">
                    +
                  </div>
                </div>

                {/* INPUT 2: I have a product */}
                <div className="md:col-span-4 bg-slate-50/80 border border-slate-200/80 rounded-2xl p-2.5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-100/80 text-[#5E3B8C] flex items-center justify-center shrink-0">
                    <Package className="w-4 h-4 text-[#5E3B8C]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] uppercase font-bold text-slate-400 block tracking-wider">I have a product</span>
                    <select
                      value={selectedProduct}
                      onChange={(e) => setSelectedProduct(e.target.value)}
                      className="w-full bg-transparent text-xs font-serif font-bold text-[#111111] focus:outline-none cursor-pointer truncate"
                    >
                      {productsList.map((p) => (
                        <option key={p.name} value={p.name}>{p.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* CTA BUTTON: Get Pairing Ideas */}
                <div className="md:col-span-2">
                  <button
                    onClick={handleGetPairing}
                    className="w-full py-3.5 px-4 rounded-2xl bg-[#1B0B2E] hover:bg-[#2B1B4E] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5 active:scale-[0.98] cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#EBB738]" />
                    <span className="truncate">Get Pairing Ideas</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>

              </div>

              {/* QUICK POPULAR SEARCH TAG PILLS */}
              <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-100 text-xs">
                <span className="text-[11px] text-slate-400 font-medium shrink-0">Try popular searches:</span>
                {popularSearches.map((s) => {
                  const isActive = activeSearchTag === s.label;
                  return (
                    <button
                      key={s.label}
                      onClick={() => handleSearchClick(s)}
                      className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#5E3B8C] text-white shadow-xs"
                          : "bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200/60"
                      }`}
                    >
                      {s.label}
                    </button>
                  );
                })}
              </div>

            </div>

          </div>

          {/* RIGHT SIDE HERO ARTWORK WITH FLOATING TAGS */}
          <div className="lg:col-span-4 relative flex items-center justify-center min-h-[260px] lg:min-h-[320px]">
            
            {/* Top Cursive Accent Text */}
            <div className="absolute -top-3 right-4 font-serif italic text-lg sm:text-xl text-[#6B4699] font-medium tracking-tight pointer-events-none drop-shadow-2xs">
              Same Ingredients.<br />New Possibilities.
            </div>

            {/* Circular Plate Food Visual */}
            <div className="relative w-60 h-60 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80"
                alt="Truffle Mushroom Risotto"
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            {/* Floating Tag 1: Truffle (Top Left) */}
            <div className="absolute top-8 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-purple-100 text-xs font-bold text-slate-800 flex items-center gap-1.5 animate-bounce-subtle">
              <span className="w-2 h-2 rounded-full bg-purple-600" />
              <span>Truffle</span>
            </div>

            {/* Floating Tag 2: Parmesan (Top Right) */}
            <div className="absolute top-6 right-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-purple-100 text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>Parmesan</span>
            </div>

            {/* Floating AI Suggested Badge (Bottom Right) */}
            <div className="absolute -bottom-2 right-0 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-purple-100 flex items-center gap-3 text-left max-w-[210px] group cursor-pointer" onClick={() => onNavigateTab("recommendations")}>
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-[#5E3B8C] flex items-center justify-center shrink-0">
                <ChefHat className="w-5 h-5 text-[#5E3B8C]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">AI Suggested</div>
                <div className="text-xs font-serif font-bold text-slate-900 truncate">Truffle Mushroom Risotto</div>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#1B0B2E] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* POPULAR PAIRINGS FOR YOU SECTION */}
      <div className="space-y-6 pt-2">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl lg:text-3xl font-serif text-[#111111] font-normal tracking-tight flex items-center gap-2">
              <Crown className="w-5 h-5 text-amber-500 fill-amber-400" />
              <span>Popular Pairings for You</span>
            </h3>
            <p className="text-xs text-slate-400 font-medium mt-1">
              Curated by our culinary AI based on global chef insights and ingredient compatibility.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigateTab("recommendations")}
              className="text-[#5E3B8C] hover:text-[#2E1658] text-xs font-bold flex items-center gap-1 transition-colors group/btn cursor-pointer mr-2"
            >
              <span>View All Pairings</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 transition-transform" />
            </button>

            {/* Carousel Nav Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCarouselIndex((prev) => Math.max(0, prev - 1))}
                disabled={carouselIndex === 0}
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors shadow-2xs"
              >
                <ChevronLeft className="w-4 h-4 text-slate-700" />
              </button>
              <button
                onClick={() => setCarouselIndex((prev) => Math.min(pairingsCards.length - 1, prev + 1))}
                disabled={carouselIndex >= pairingsCards.length - 1}
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors shadow-2xs"
              >
                <ChevronRight className="w-4 h-4 text-slate-700" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 PAIRING CONCEPT CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pairingsCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-[24px] border border-slate-200/80 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Banner with Match Badge */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Top Right Gold Match Badge */}
                  <div className="absolute top-3 right-3 bg-[#FDF6E3] border border-[#F5E6BE] text-[#9E6E17] font-bold text-[10px] px-2.5 py-1 rounded-md shadow-xs">
                    {card.matchPercent}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 space-y-2.5 text-left">
                  <h4 className="text-base font-serif font-bold text-[#111111] leading-snug min-h-[44px]">
                    {card.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-normal leading-relaxed min-h-[36px]">
                    {card.desc}
                  </p>

                  {/* Ingredient Pills */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-purple-50/70 text-[#5E3B8C] text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-purple-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="p-5 pt-0 flex items-center justify-start border-t border-slate-100/80 mt-2">
                <button
                  onClick={() => onNavigateTab("recommendations")}
                  className="text-[#5E3B8C] hover:text-[#2E1658] text-xs font-bold flex items-center gap-1 transition-colors group/btn cursor-pointer"
                >
                  <span>View Recipe</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 transition-transform text-[#5E3B8C]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM HELP / EXPLORE BANNER */}
        <div className="bg-[#F8F5FD] border border-purple-200/80 rounded-[24px] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs text-left">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-amber-100/90 text-amber-700 border border-amber-300 flex items-center justify-center shrink-0 shadow-2xs">
              <Lightbulb className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#111111] font-serif">
                Not sure what to pair?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5 font-medium">
                Explore AI-curated ingredient combinations, seasonal ideas and chef-recommended suggestions.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigateTab("recommendations")}
            className="px-6 py-3 rounded-full bg-[#F4EFFB] hover:bg-[#EAE0FA] text-[#5E3B8C] font-bold text-xs flex items-center gap-2 transition-colors shadow-2xs active:scale-[0.98] shrink-0 cursor-pointer"
          >
            <span>Explore All Combinations</span>
            <ArrowRight className="w-4 h-4 text-[#5E3B8C]" />
          </button>
        </div>

      </div>

    </div>
  );
}
