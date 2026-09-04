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
    <div className="w-full bg-[#FAF9F5] p-4 sm:p-6 lg:p-8 rounded-[32px] font-sans text-left space-y-8">
      
      {/* 1. TOP HERO SECTION WITH DISH PAIRING ENGINE */}
      <div className="relative overflow-hidden pt-2 pb-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT COLUMN: TITLE & CONTROL BOX */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Sparkle Category Tag */}
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4C3B6E]">
              <Sparkles className="w-4 h-4 text-[#D99B26]" />
              <span>AI CULINARY PAIRING</span>
            </div>

            {/* Main Editorial Serif Title & Subtitle */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-[#191528] leading-[1.14] tracking-tight">
                Better Ingredients<br />
                Create Extraordinary Dishes
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-md">
                Tell us what you have — a dish or a product — and we&apos;ll suggest perfect pairings to create something amazing.
              </p>
            </div>

            {/* MATCHER WHITE CONTAINER CARD */}
            <div className="bg-white rounded-[24px] p-5 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100/90 space-y-4">
              
              {/* Row 1: Dish Select + Plus + Product Select + CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                
                {/* Dish Input Box */}
                <div className="w-full sm:flex-1 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F0EBFA] text-[#5E3B8C] flex items-center justify-center shrink-0">
                    <Utensils className="w-4 h-4 text-[#5E3B8C]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-[#2D2342] block mb-1">I have a dish</span>
                    <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-xl px-3 py-1.5 flex items-center gap-2.5 relative cursor-pointer">
                      <div className="relative w-6 h-6 rounded-md overflow-hidden shrink-0 border border-slate-200">
                        <Image src={currentDishObj.image} alt={currentDishObj.name} fill unoptimized className="object-cover" />
                      </div>
                      <select
                        value={selectedDish}
                        onChange={(e) => setSelectedDish(e.target.value)}
                        className="w-full bg-transparent text-xs font-semibold text-[#191528] focus:outline-none cursor-pointer truncate appearance-none pr-5"
                      >
                        {dishesList.map((d) => (
                          <option key={d.name} value={d.name}>{d.name}</option>
                        ))}
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Plus Circle */}
                <div className="w-8 h-8 rounded-full bg-[#EAE2F8] text-[#5E3B8C] font-bold text-sm flex items-center justify-center shrink-0">
                  +
                </div>

                {/* Product Input Box */}
                <div className="w-full sm:flex-1 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F0EBFA] text-[#5E3B8C] flex items-center justify-center shrink-0">
                    <Package className="w-4 h-4 text-[#5E3B8C]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-[#2D2342] block mb-1">I have a product</span>
                    <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-xl px-3 py-1.5 flex items-center gap-2.5 relative cursor-pointer">
                      <div className="relative w-6 h-6 rounded-md overflow-hidden shrink-0 border border-slate-200">
                        <Image src={currentProductObj.image} alt={currentProductObj.name} fill unoptimized className="object-cover" />
                      </div>
                      <select
                        value={selectedProduct}
                        onChange={(e) => setSelectedProduct(e.target.value)}
                        className="w-full bg-transparent text-xs font-semibold text-[#191528] focus:outline-none cursor-pointer truncate appearance-none pr-5"
                      >
                        {productsList.map((p) => (
                          <option key={p.name} value={p.name}>{p.name}</option>
                        ))}
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Get Pairing Ideas CTA Button */}
                <button
                  onClick={handleGetPairing}
                  className="w-full sm:w-auto mt-2 sm:mt-5 py-3 px-5 rounded-2xl bg-[#201040] hover:bg-[#2D1854] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 shrink-0 cursor-pointer active:scale-[0.98]"
                >
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                  <span className="whitespace-nowrap">Get Pairing Ideas</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </button>

              </div>

              {/* Row 2: Popular Searches Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 text-xs">
                <span className="text-xs text-slate-400 font-normal shrink-0">Try popular searches:</span>
                {popularSearches.map((s) => {
                  const isActive = activeSearchTag === s.label;
                  return (
                    <button
                      key={s.label}
                      onClick={() => handleSearchClick(s)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#5E3B8C] text-white font-semibold shadow-xs"
                          : "bg-[#F1F4F9] hover:bg-slate-200/70 text-[#5A6376]"
                      }`}
                    >
                      {s.label}
                    </button>
                  );
                })}
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: RISOTTO PLATE ARTWORK WITH FLOATING BADGES */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center min-h-[300px] pt-4 lg:pt-0">
            
            {/* Top Cursive Text Annotation */}
            <div className="absolute top-0 right-8 text-right font-serif italic text-lg sm:text-xl text-[#4C3B6E] font-medium leading-tight pointer-events-none z-10">
              Same Ingredients.<br />
              New Possibilities.
            </div>

            {/* Main Visual Composition Container */}
            <div className="relative w-[300px] h-[260px] sm:w-[360px] sm:h-[280px] flex items-center justify-center">
              
              {/* Purple Backdrop Oval Cutout */}
              <div className="absolute top-2 right-0 w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] rounded-full bg-gradient-to-br from-[#6A4A9A] to-[#4A2D78] shadow-lg pointer-events-none" />

              {/* Truffles Floating Top-Left */}
              <div className="absolute top-2 left-6 z-20 flex flex-col items-center">
                <div className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-md border border-slate-100 text-xs font-semibold text-slate-800">
                  Truffle
                </div>
                {/* Curved Arrow Path */}
                <svg className="w-6 h-6 text-[#4C3B6E] -mt-0.5 ml-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 2C8 12 18 14 20 20" strokeLinecap="round" />
                </svg>
              </div>

              {/* Parmesan Floating Top-Right */}
              <div className="absolute top-0 right-2 z-20 flex flex-col items-end">
                <div className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-md border border-slate-100 text-xs font-semibold text-slate-800">
                  Parmesan
                </div>
                {/* Curved Arrow Path */}
                <svg className="w-6 h-6 text-[#4C3B6E] -mt-0.5 mr-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 2C16 12 6 14 4 20" strokeLinecap="round" />
                </svg>
              </div>

              {/* Risotto Dish Plate Image */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl z-10">
                <Image
                  src="https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=700&q=80"
                  alt="Truffle Mushroom Risotto"
                  fill
                  unoptimized
                  className="object-cover scale-110"
                />
              </div>

              {/* AI Suggested Floating Card (Bottom-Right) */}
              <div 
                onClick={() => onNavigateTab("recommendations")}
                className="absolute -bottom-2 right-0 bg-white/95 backdrop-blur-md p-3.5 rounded-[22px] shadow-xl border border-purple-100 flex items-center gap-3 text-left z-30 cursor-pointer hover:border-purple-300 transition-all max-w-[230px]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F0EBFA] text-[#5E3B8C] flex items-center justify-center shrink-0">
                  <ChefHat className="w-5 h-5 text-[#5E3B8C]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">AI Suggested</div>
                  <div className="text-xs font-serif font-bold text-[#191528] truncate">Truffle Mushroom Risotto</div>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#201040] text-white flex items-center justify-center shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* 2. POPULAR PAIRINGS FOR YOU CAROUSEL SECTION */}
      <div className="space-y-5 pt-2">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#191528] flex items-center gap-2">
              <Crown className="w-5 h-5 text-[#E5A93C] fill-[#E5A93C]" />
              <span>Popular Pairings for You</span>
            </h2>
            <p className="text-xs text-slate-400 font-normal mt-1">
              Curated by our culinary AI based on global chef insights and ingredient compatibility.
            </p>
          </div>

          <button
            onClick={() => onNavigateTab("recommendations")}
            className="text-[#5E3B8C] hover:text-[#3B1F60] text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer self-start sm:self-auto"
          >
            <span>View All Pairings</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#5E3B8C]" />
          </button>
        </div>

        {/* 4 Cards Grid with Carousel Side Buttons */}
        <div className="relative">
          
          {/* Carousel Left Navigation Button */}
          <button
            onClick={() => setCarouselIndex((prev) => Math.max(0, prev - 1))}
            disabled={carouselIndex === 0}
            className="absolute left-[-16px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-slate-700" />
          </button>

          {/* Carousel Right Navigation Button */}
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
                  {/* Card Top Image with Match Gold Pill */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-[#FEF6E4] border border-[#F5E6BE] text-[#A17417] font-bold text-[10px] px-2.5 py-1 rounded-md shadow-xs">
                      {card.matchPercent}
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 space-y-2 text-left">
                    <h3 className="text-base font-serif font-bold text-[#191528] leading-snug min-h-[44px]">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed min-h-[36px]">
                      {card.desc}
                    </p>

                    {/* Category Tag Pills */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-2">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#F3F0FA] text-[#5E3B8C] text-[11px] font-medium px-3 py-1 rounded-full"
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

      {/* 3. BOTTOM HELP BANNER ("Not sure what to pair?") */}
      <div className="bg-[#F8F5FD] border border-[#E9E0FA] rounded-[24px] p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs text-left">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-full bg-[#FFF8E6] text-[#D97706] border border-[#FDE68A] flex items-center justify-center shrink-0 shadow-2xs">
            <Lightbulb className="w-5 h-5 text-[#D97706]" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#191528] font-serif">
              Not sure what to pair?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5 font-normal">
              Explore AI-curated ingredient combinations, seasonal ideas and chef-recommended suggestions.
            </p>
          </div>
        </div>

        <button
          onClick={() => onNavigateTab("recommendations")}
          className="px-6 py-3 rounded-full bg-[#F0E6FC] hover:bg-[#E5D5FA] text-[#5E3B8C] font-bold text-xs flex items-center gap-2 transition-colors shadow-2xs active:scale-[0.98] shrink-0 cursor-pointer"
        >
          <span>Explore All Combinations</span>
          <ArrowRight className="w-4 h-4 text-[#5E3B8C]" />
        </button>
      </div>

    </div>
  );
}
