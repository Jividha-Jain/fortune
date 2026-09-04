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
      bgColor: "bg-[#FAF5EE]", // Warm cream/peach pastel
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
      bgColor: "bg-[#FAF6EF]", // Light warm almond pastel
      dishTitle: "Grilled Salmon",
      productSubtitle: "with Yuzu Dressing",
      dishImage: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=400&q=80",
      productImage: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "card-4",
      bgColor: "bg-[#FCF4FA]", // Soft pink/rose pastel
      dishTitle: "Chocolate Cake",
      productSubtitle: "with Sea Salt",
      dishImage: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80",
      productImage: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <div className="w-full bg-[#FAF9FC] rounded-[36px] p-6 sm:p-8 lg:p-10 border border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.02)] space-y-8 font-sans text-left relative overflow-hidden">
      
      {/* Soft Lavender Background Disc at Top Right */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-bl from-[#ECE5F8]/70 via-[#F3EDFB]/40 to-transparent rounded-full blur-2xl pointer-events-none z-0" />

      {/* 1. TOP HERO SECTION */}
      <div className="relative flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 z-10 pt-2 min-h-[140px]">
        
        {/* Left Side: Headline & Subtitle */}
        <div className="space-y-3 max-w-xl">
          
          {/* Sparkles Category Badge */}
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#524375]">
            <Sparkles className="w-3.5 h-3.5 text-[#2B145E]" />
            <span>PAIRING SUGGESTIONS</span>
          </div>

          {/* Main Title: Better Ingredients, Brighter Dishes. */}
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-[#151221] leading-[1.12] tracking-tight">
            Better Ingredients,<br />
            <span className="text-[#2B145E]">Brighter Dishes.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-md">
            See how our ingredients can be paired with your dish to create something extraordinary.
          </p>
        </div>

        {/* Right Side: Cursive Handwriting Accent + Top Right Plate Image */}
        <div className="hidden md:flex items-center gap-6 shrink-0 relative pr-0 lg:pr-36">
          
          {/* Cursive Handwriting Accent */}
          <div className="text-right font-serif italic text-lg sm:text-xl text-[#6B5A94] font-medium leading-[1.15] relative pr-2 rotate-[-2deg]">
            <span>Same<br />Ingredients<br />New Possibilities</span>
            <div className="w-12 h-[1.5px] bg-[#6B5A94]/40 rounded-full mt-1.5 ml-auto" />
          </div>

          {/* Top-Right Circular Plate Graphic (Positioned safely without overlapping cards) */}
          <div className="absolute top-[-30px] right-[-20px] w-44 h-44 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-xl border-4 border-white shrink-0 bg-white z-0 pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
              alt="Fresh Gourmet Dish"
              fill
              unoptimized
              className="object-cover scale-105"
            />
          </div>

        </div>

      </div>

      {/* 2. 4 PASTEL CONCEPT CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`${card.bgColor} rounded-[28px] p-5 sm:p-6 border border-slate-200/40 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group min-h-[300px] text-left`}
          >
            <div>
              {/* Card Top Composition: Dish Circle + Plus Badge + Product Item */}
              <div className="relative flex items-center justify-between gap-1 py-3 px-1 h-36">
                
                {/* Dish Plate Circle */}
                <div className="relative w-26 h-26 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-sm border-2 border-white shrink-0 group-hover:scale-105 transition-transform duration-300 bg-white">
                  <Image
                    src={card.dishImage}
                    alt={card.dishTitle}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>

                {/* Plus Circle Badge */}
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-[#2B145E] font-bold text-xs flex items-center justify-center shrink-0 shadow-sm border border-purple-100/80 z-10 -mx-3">
                  +
                </div>

                {/* Product Item Container */}
                <div className="relative w-20 h-24 sm:w-22 sm:h-26 rounded-2xl overflow-hidden shadow-sm border border-white shrink-0 group-hover:scale-105 transition-transform duration-300 bg-white">
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
                <h3 className="text-lg font-serif font-bold text-[#151221] leading-snug">
                  {card.dishTitle}
                </h3>
                <p className="text-xs text-slate-500 font-normal">
                  {card.productSubtitle}
                </p>
              </div>
            </div>

            {/* View Recipe Link */}
            <div className="pt-4 border-t border-slate-900/5 mt-4">
              <button
                onClick={() => onNavigateTab("recommendations")}
                className="text-[#2B145E] hover:text-[#18093D] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer group/btn"
              >
                <span>View Recipe</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#2B145E] group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
