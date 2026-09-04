"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  ArrowRight, 
  ChevronDown,
  ArrowLeftRight
} from "lucide-react";

interface AIPairingSuggestionsSectionProps {
  onNavigateTab: (tab: "products" | "product-detail" | "recommendations" | "mymenu") => void;
}

export default function AIPairingSuggestionsSection({ onNavigateTab }: AIPairingSuggestionsSectionProps) {
  const [selectedDish, setSelectedDish] = useState("Margherita Pizza");
  const [selectedProduct, setSelectedProduct] = useState("Black Truffle Oil");

  const dishesList = [
    { name: "Margherita Pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=120&q=80" },
    { name: "Wild Mushroom Pasta", image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=120&q=80" },
    { name: "Roasted Vegetables", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=120&q=80" },
    { name: "Grilled Salmon Fillet", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=120&q=80" },
  ];

  const productsList = [
    { name: "Black Truffle Oil", image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=120&q=80" },
    { name: "Puglia Fresh Burrata", image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=120&q=80" },
    { name: "Yuzu Citrus Dressing", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=120&q=80" },
  ];

  const pairingCards = [
    {
      id: "card-1",
      title: "Truffle Burrata Pizza",
      desc: "Classic margherita with a luxurious twist.",
      tags: ["Pizza", "Burrata", "Truffle Oil"],
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: "card-2",
      title: "Mushroom Truffle Pasta",
      desc: "Earthy mushrooms elevated with truffle oil.",
      tags: ["Pasta", "Mushroom", "Truffle Oil"],
      image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: "card-3",
      title: "Roasted Carrot with Truffle Burrata",
      desc: "A simple side, made extra special.",
      tags: ["Carrot", "Burrata", "Truffle Oil"],
      image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=500&q=80",
    },
  ];

  const currentDishObj = dishesList.find((d) => d.name === selectedDish) || dishesList[0];
  const currentProductObj = productsList.find((p) => p.name === selectedProduct) || productsList[0];

  const handleSwap = () => {
    // Swap animation or trigger
  };

  return (
    <div className="w-full bg-[#FAF9F6] rounded-[32px] p-6 sm:p-8 lg:p-10 border border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.02)] space-y-8 font-sans text-left relative">
      
      {/* 1. HERO SECTION WITH BURRATA SALAD ARTWORK */}
      <div className="relative flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pt-2 pr-0 lg:pr-12">
        
        {/* Left Side Content */}
        <div className="space-y-4 max-w-xl z-10">
          
          {/* Sparkles Category Tag */}
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#5E3B8C]">
            <Sparkles className="w-3.5 h-3.5 text-[#5E3B8C]" />
            <span>AI PAIRING SUGGESTIONS</span>
          </div>

          {/* Main Title: Better Ingredients, Brighter Dishes */}
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-[#111111] leading-[1.15] tracking-tight">
            Better Ingredients,<br />
            <span className="text-[#3B1E78]">Brighter Dishes</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-md">
            Tell us what you have — a dish or a product — and we&apos;ll suggest delicious combinations.
          </p>
        </div>

        {/* Right Side: Cursive Handwriting Annotation + Top Right Burrata Plate */}
        <div className="hidden md:flex items-center gap-6 relative z-10 shrink-0">
          
          {/* Cursive Handwriting Text */}
          <div className="text-right font-serif italic text-lg sm:text-xl text-[#4A5568] font-medium leading-tight relative">
            <span>Good<br />Ingredients<br />Create<br />Great Stories</span>
            {/* Small yellow underline stroke */}
            <div className="w-12 h-1 bg-[#F5C242] rounded-full mt-1 ml-auto" />
          </div>

          {/* Top Right Plate Image (Caprese Burrata Salad with Basil & Tomatoes) */}
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-2xl border-4 border-white shrink-0 bg-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=600&q=80"
              alt="Fresh Puglia Burrata Dish"
              fill
              unoptimized
              className="object-cover scale-105"
            />
          </div>

        </div>

      </div>

      {/* 2. MATCHER INPUT CONTROL CARD */}
      <div className="bg-white rounded-[24px] p-4 sm:p-5 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100/90 relative z-20">
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          
          {/* Input 1: I HAVE A DISH */}
          <div className="w-full sm:flex-1 space-y-1.5 text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block px-1">
              I HAVE A DISH
            </span>
            <div className="bg-[#FAFBFD] border border-slate-200/80 rounded-2xl p-2.5 px-3 flex items-center gap-3 relative cursor-pointer hover:border-slate-300 transition-colors">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-slate-200 bg-slate-100">
                <Image src={currentDishObj.image} alt={currentDishObj.name} fill unoptimized className="object-cover" />
              </div>
              <select
                value={selectedDish}
                onChange={(e) => setSelectedDish(e.target.value)}
                className="w-full bg-transparent text-xs font-serif font-bold text-[#111111] focus:outline-none cursor-pointer truncate appearance-none pr-6"
              >
                {dishesList.map((d) => (
                  <option key={d.name} value={d.name}>{d.name}</option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 pointer-events-none" />
            </div>
          </div>

          {/* Center Swap Icon */}
          <button 
            onClick={handleSwap}
            className="w-10 h-10 rounded-full bg-[#F0EBFA] text-[#5E3B8C] hover:bg-[#E4DAF5] transition-colors flex items-center justify-center shrink-0 shadow-2xs mt-4 sm:mt-5 cursor-pointer"
          >
            <ArrowLeftRight className="w-4 h-4 text-[#5E3B8C]" />
          </button>

          {/* Input 2: I HAVE A PRODUCT */}
          <div className="w-full sm:flex-1 space-y-1.5 text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block px-1">
              I HAVE A PRODUCT
            </span>
            <div className="bg-[#FAFBFD] border border-slate-200/80 rounded-2xl p-2.5 px-3 flex items-center gap-3 relative cursor-pointer hover:border-slate-300 transition-colors">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-slate-200 bg-slate-100">
                <Image src={currentProductObj.image} alt={currentProductObj.name} fill unoptimized className="object-cover" />
              </div>
              <select
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="w-full bg-transparent text-xs font-serif font-bold text-[#111111] focus:outline-none cursor-pointer truncate appearance-none pr-6"
              >
                {productsList.map((p) => (
                  <option key={p.name} value={p.name}>{p.name}</option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 pointer-events-none" />
            </div>
          </div>

          {/* Action Button: Show Pairings */}
          <button
            onClick={() => onNavigateTab("recommendations")}
            className="w-full sm:w-auto mt-4 sm:mt-5 py-3.5 px-7 rounded-full bg-[#1D1042] hover:bg-[#2B195D] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 shrink-0 cursor-pointer active:scale-[0.98]"
          >
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span className="whitespace-nowrap">Show Pairings</span>
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </button>

        </div>

      </div>

      {/* 3. SUGGESTED PAIRINGS SECTION */}
      <div className="space-y-4 pt-2">
        
        {/* Header Row */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#111111]">
              Suggested Pairings
            </h2>
            <p className="text-xs text-slate-400 font-normal mt-0.5">
              Simple ideas. Big possibilities.
            </p>
          </div>

          <button
            onClick={() => onNavigateTab("recommendations")}
            className="text-[#5E3B8C] hover:text-[#2E1658] text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#5E3B8C]" />
          </button>
        </div>

        {/* 3 Horizontal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pairingCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-[24px] p-4 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300 flex items-stretch gap-4 group"
            >
              {/* Left Image Column */}
              <div className="relative w-32 sm:w-36 h-36 sm:h-40 rounded-2xl overflow-hidden shrink-0 bg-slate-100">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right Content Column */}
              <div className="flex-1 min-w-0 flex flex-col justify-between py-1 text-left">
                <div className="space-y-1.5">
                  <h3 className="text-sm sm:text-base font-serif font-bold text-[#111111] leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-normal leading-relaxed">
                    {card.desc}
                  </p>

                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#F3F0FA] text-[#5E3B8C] text-[10px] font-semibold px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Recipe Link */}
                <button
                  onClick={() => onNavigateTab("recommendations")}
                  className="text-[#5E3B8C] hover:text-[#2E1658] text-[11px] font-bold flex items-center gap-1 transition-colors cursor-pointer mt-2 group/btn"
                >
                  <span>View Recipe</span>
                  <ArrowRight className="w-3 h-3 text-[#5E3B8C] group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
