"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

interface AIPairingSuggestionsSectionProps {
  onNavigateTab: (tab: "products" | "product-detail" | "recommendations" | "mymenu") => void;
}

export default function AIPairingSuggestionsSection({ onNavigateTab }: AIPairingSuggestionsSectionProps) {
  const cards = [
    {
      id: "card-1",
      bgColor: "bg-[#FAF5ED]", // Warm cream pastel
      dishTitle: "Margherita Pizza",
      productSubtitle: "with Black Truffle Oil",
      dishImage: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80",
      productImage: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "card-2",
      bgColor: "bg-[#F3EEFA]", // Soft purple/lavender pastel
      dishTitle: "Mushroom Pasta",
      productSubtitle: "with Fresh Truffle",
      dishImage: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=400&q=80",
      productImage: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "card-3",
      bgColor: "bg-[#FAF6EF]", // Light almond/cream pastel
      dishTitle: "Grilled Salmon",
      productSubtitle: "with Yuzu Dressing",
      dishImage: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=400&q=80",
      productImage: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "card-4",
      bgColor: "bg-[#FBF4FA]", // Soft pink/rose pastel
      dishTitle: "Chocolate Cake",
      productSubtitle: "with Sea Salt",
      dishImage: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80",
      productImage: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <div className="w-full bg-[#FAF9F5] rounded-[36px] p-6 sm:p-8 lg:p-10 border border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.02)] space-y-8 font-sans text-left relative overflow-hidden">
      
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-purple-200/30 via-amber-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* 1. TOP HERO SECTION */}
      <div className="relative flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 z-10 pt-2">
        
        {/* Left Side: Headline & Subtitle */}
        <div className="space-y-3 max-w-xl">
          
          {/* Sparkles Category Badge */}
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#4C3B6E]">
            <Sparkles className="w-3.5 h-3.5 text-[#5E3B8C]" />
            <span>PAIRING SUGGESTIONS</span>
          </div>

          {/* Main Title: Better Ingredients, Brighter Dishes. */}
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-[#1B192B] leading-[1.14] tracking-tight">
            Better Ingredients,<br />
            <span className="text-[#3B1E78]">Brighter Dishes.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-md">
            See how our ingredients can be paired with your dish to create something extraordinary.
          </p>
        </div>

        {/* Right Side: Cursive Handwriting Text + Top Right Burrata Plate */}
        <div className="hidden md:flex items-center gap-6 shrink-0 relative">
          
          {/* Cursive Handwriting Accent */}
          <div className="text-right font-serif italic text-lg sm:text-xl text-[#5E4C86] font-medium leading-tight relative pr-2">
            <span>Same<br />Ingredients<br />New Possibilities</span>
            <div className="w-10 h-0.5 bg-[#5E4C86]/40 rounded-full mt-1 ml-auto" />
          </div>

          {/* Top Right Plate Graphic */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-white shrink-0 bg-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=600&q=80"
              alt="Burrata Caprese Salad"
              fill
              unoptimized
              className="object-cover scale-110"
            />
          </div>

        </div>

      </div>

      {/* 2. 4 PASTEL CONCEPT CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`${card.bgColor} rounded-[28px] p-5 border border-slate-200/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group min-h-[300px] text-left`}
          >
            <div>
              {/* Card Top Graphic: Dish + Plus Badge + Product */}
              <div className="relative flex items-center justify-center gap-2 py-4 h-36">
                
                {/* Dish Plate Circle */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-md border-2 border-white shrink-0 group-hover:scale-105 transition-transform">
                  <Image
                    src={card.dishImage}
                    alt={card.dishTitle}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>

                {/* Plus Circle Badge */}
                <div className="w-6 h-6 rounded-full bg-white text-[#5E3B8C] font-bold text-xs flex items-center justify-center shrink-0 shadow-sm border border-purple-100 z-10 -mx-3">
                  +
                </div>

                {/* Product Bottle/Item Container */}
                <div className="relative w-16 h-20 sm:w-20 sm:h-24 rounded-2xl overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
                  <Image
                    src={card.productImage}
                    alt={card.productSubtitle}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>

              </div>

              {/* Title & Subtitle */}
              <div className="mt-4 space-y-0.5">
                <h3 className="text-lg font-serif font-bold text-[#1B192B] leading-snug">
                  {card.dishTitle}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {card.productSubtitle}
                </p>
              </div>
            </div>

            {/* View Recipe Link */}
            <div className="pt-4 border-t border-slate-900/5 mt-4">
              <button
                onClick={() => onNavigateTab("recommendations")}
                className="text-[#3B1E78] hover:text-[#251052] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer group/btn"
              >
                <span>View Recipe</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#3B1E78] group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* 3. CENTERED EXPLORE MORE PAIRINGS BUTTON */}
      <div className="flex items-center justify-center pt-2 relative z-10">
        <button
          onClick={() => onNavigateTab("recommendations")}
          className="px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#3B1E78] border border-purple-200/80 font-bold text-xs shadow-2xs hover:shadow-sm flex items-center gap-2 transition-all cursor-pointer active:scale-[0.98]"
        >
          <span>Explore More Pairings</span>
          <ArrowRight className="w-4 h-4 text-[#3B1E78]" />
        </button>
      </div>

    </div>
  );
}
