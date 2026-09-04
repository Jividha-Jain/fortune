"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  UtensilsCrossed, 
  Layers, 
  Star, 
  Clock, 
  Search, 
  ChevronDown, 
  Bookmark, 
  Plus, 
  ArrowRight,
  Info,
  Check
} from "lucide-react";

interface ScreenAIRecommendationsProps {
  onSelectProduct: (productId: string) => void;
}

export default function ScreenAIRecommendations({ onSelectProduct }: ScreenAIRecommendationsProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterMatch, setFilterMatch] = useState<"ALL" | "EXCELLENT" | "STRONG" | "NEEDS_REVIEW">("ALL");
  const [sortBy, setSortBy] = useState("Best Match");

  // Tracked Shortlist and Bookmark state
  const [shortlistedIds, setShortlistedIds] = useState<string[]>([]);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);

  const toggleShortlist = (id: string) => {
    setShortlistedIds((prev) => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  // 6 Exact Menu Dishes & Pairing Recommendations with high quality food images
  const recommendationsData = [
    {
      id: "rec-1",
      dishTitle: "Alfredo Pasta",
      dishCuisine: "Italian",
      dishDesc: "Rich and creamy pasta with a velvety cheese sauce.",
      tags: ["Pasta", "Cheese", "Creamy"],
      dishImage: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=600&q=80",
      matchPercent: 95,
      matchType: "EXCELLENT",
      matchLabel: "Excellent Match",
      recommendedTitle: "Queso Formage (Shredded & Cubes)",
      recommendedBrand: "Fiorella",
      productId: "zanetti-mozzarella-bufala",
      recommendedImage: "https://fortunegourmet.com/wp-content/uploads/2025/03/Gran-Spicco-200gr-500x500.jpg",
    },
    {
      id: "rec-2",
      dishTitle: "Chocolate Mousse",
      dishCuisine: "Continental",
      dishDesc: "Smooth and rich chocolate dessert with a silky texture.",
      tags: ["Dessert", "Chocolate", "Creamy"],
      dishImage: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
      matchPercent: 94,
      matchType: "EXCELLENT",
      matchLabel: "Excellent Match",
      recommendedTitle: "Lurpak Unsalted Butter 200g",
      recommendedBrand: "Lurpak",
      productId: "butter-unsalted-200gm",
      recommendedImage: "https://fortunegourmet.com/wp-content/uploads/2025/03/lurpak-500x500.png",
    },
    {
      id: "rec-3",
      dishTitle: "Butter Chicken",
      dishCuisine: "North Indian",
      dishDesc: "Slow-cooked chicken in a rich, creamy tomato gravy.",
      tags: ["Chicken", "Gravy", "Spices"],
      dishImage: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80",
      matchPercent: 92,
      matchType: "EXCELLENT",
      matchLabel: "Excellent Match",
      recommendedTitle: "Paysan Breton Lactose Free Butter 82%",
      recommendedBrand: "Paysan Breton",
      productId: "butter-unsalted-200gm",
      recommendedImage: "https://fortunegourmet.com/wp-content/uploads/2025/03/lurpak-500x500.png",
    },
    {
      id: "rec-4",
      dishTitle: "Paneer Tikka",
      dishCuisine: "North Indian",
      dishDesc: "Grilled cottage cheese with aromatic spices.",
      tags: ["Paneer", "Tandoor", "Spices"],
      dishImage: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
      matchPercent: 78,
      matchType: "STRONG",
      matchLabel: "Strong Match",
      recommendedTitle: "TartufiLanghe Truffle & Samice Seasoning",
      recommendedBrand: "TartufiLanghe",
      productId: "gran-spicco-200gm",
      recommendedImage: "https://fortunegourmet.com/wp-content/uploads/2025/03/1bbm-500x500.png",
    },
    {
      id: "rec-5",
      dishTitle: "Grilled Chicken",
      dishCuisine: "Continental",
      dishDesc: "Juicy grilled chicken with herbs and light seasoning.",
      tags: ["Chicken", "Herbs", "Grill"],
      dishImage: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80",
      matchPercent: 82,
      matchType: "STRONG",
      matchLabel: "Strong Match",
      recommendedTitle: "Fortune Atlantic Salmon Marinade",
      recommendedBrand: "Fortune Select",
      productId: "fortune-atlantic-salmon-trim-d",
      recommendedImage: "https://fortunegourmet.com/wp-content/uploads/2025/03/Tomex-Salmon-fish-fillet-500x500.jpg",
    },
    {
      id: "rec-6",
      dishTitle: "Veg Biryani",
      dishCuisine: "North Indian",
      dishDesc: "Fragrant basmati rice with spices and vegetables.",
      tags: ["Rice", "Spices", "Vegetarian"],
      dishImage: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
      matchPercent: 71,
      matchType: "NEEDS_REVIEW",
      matchLabel: "Needs Review",
      recommendedTitle: "Fortune Saffron Super Negin",
      recommendedBrand: "Fortune Select",
      productId: "gran-spicco-200gm",
      recommendedImage: "https://fortunegourmet.com/wp-content/uploads/2025/03/Gran-Spicco-200gr-500x500.jpg",
    },
  ];

  // Filtering logic
  const filteredRecs = recommendationsData.filter((rec) => {
    const matchesSearch = rec.dishTitle.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          rec.recommendedTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          rec.dishCuisine.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (filterMatch === "EXCELLENT") return matchesSearch && rec.matchType === "EXCELLENT";
    if (filterMatch === "STRONG") return matchesSearch && rec.matchType === "STRONG";
    if (filterMatch === "NEEDS_REVIEW") return matchesSearch && rec.matchType === "NEEDS_REVIEW";
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAF8FD] text-[#111111] pb-20 font-sans antialiased">
      
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10 space-y-6 sm:space-y-8">
        
        {/* HERO BANNER - TURN INGREDIENTS INTO EXTRAORDINARY DISHES */}
        <div className="bg-gradient-to-r from-[#F4EFFB] via-[#FAF8FD] to-white rounded-[28px] p-8 sm:p-10 border border-[#E9DDF8] shadow-2xs relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 text-left">
          
          <div className="space-y-3 max-w-xl relative z-10">
            <div className="text-[10px] uppercase font-bold tracking-[0.22em] text-[#5E3B8C] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#5E3B8C]" />
              <span>AI RECOMMENDATIONS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#111111] leading-[1.1] tracking-tight">
              Turn Ingredients into <br />
              <span className="text-[#5E3B8C] font-serif font-bold">Extraordinary</span> Dishes
            </h1>

            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
              Get AI-powered pairing suggestions between your dishes and Fortune Gourmet products.
            </p>
          </div>

          {/* Right Hero Presentation Plate & Handwritten Annotation */}
          <div className="relative shrink-0 flex items-center justify-center z-10">
            {/* Script Annotation */}
            <div className="absolute -top-4 -left-12 z-20 hidden sm:flex flex-col items-center">
              <span className="font-serif italic text-sm text-[#5E3B8C] font-semibold tracking-wide transform -rotate-6">
                Better Ingredients.<br />Brighter Menus.
              </span>
              <span className="text-xs text-[#5E3B8C] transform rotate-45 mt-1">➔</span>
            </div>

            {/* Plated Dish Image */}
            <div className="relative w-64 h-44 sm:w-80 sm:h-52 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
                alt="Extraordinary Plated Gourmet Dish"
                fill
                unoptimized
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>

        {/* 4 TOP SUMMARY STAT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center justify-between text-left hover:shadow-md transition-shadow">
            <div className="space-y-0.5">
              <div className="text-[11px] text-slate-400 font-medium">Dishes Analysed</div>
              <div className="text-3xl font-serif font-bold text-[#111111]">8</div>
            </div>
            <div className="w-11 h-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center justify-between text-left hover:shadow-md transition-shadow">
            <div className="space-y-0.5">
              <div className="text-[11px] text-slate-400 font-medium">Products Matched</div>
              <div className="text-3xl font-serif font-bold text-[#111111]">12</div>
            </div>
            <div className="w-11 h-11 rounded-full bg-purple-50 text-[#5E3B8C] flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center justify-between text-left hover:shadow-md transition-shadow">
            <div className="space-y-0.5">
              <div className="text-[11px] text-slate-400 font-medium">Excellent Matches</div>
              <div className="text-3xl font-serif font-bold text-[#111111]">5</div>
            </div>
            <div className="w-11 h-11 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Star className="w-5 h-5" />
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center justify-between text-left hover:shadow-md transition-shadow">
            <div className="space-y-0.5">
              <div className="text-[11px] text-slate-400 font-medium">Needs Review</div>
              <div className="text-3xl font-serif font-bold text-[#111111]">3</div>
            </div>
            <div className="w-11 h-11 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
          </div>

        </div>

        {/* FILTER & SEARCH CONTROL ROW */}
        <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dish, product or cuisine..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200/90 rounded-xl text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5E3B8C]/30 transition-all"
            />
          </div>

          {/* Filter Pills & Sort Dropdown */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto shrink-0 justify-end">
            
            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar">
              <button
                onClick={() => setFilterMatch("ALL")}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filterMatch === "ALL"
                    ? "bg-[#1C0B33] text-white shadow-2xs"
                    : "bg-white border border-slate-200/90 text-slate-700 hover:bg-slate-50"
                }`}
              >
                All Matches
              </button>

              <button
                onClick={() => setFilterMatch("EXCELLENT")}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filterMatch === "EXCELLENT"
                    ? "bg-[#1C0B33] text-white shadow-2xs"
                    : "bg-white border border-slate-200/90 text-slate-700 hover:bg-slate-50"
                }`}
              >
                Excellent
              </button>

              <button
                onClick={() => setFilterMatch("STRONG")}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filterMatch === "STRONG"
                    ? "bg-[#1C0B33] text-white shadow-2xs"
                    : "bg-white border border-slate-200/90 text-slate-700 hover:bg-slate-50"
                }`}
              >
                Strong
              </button>

              <button
                onClick={() => setFilterMatch("NEEDS_REVIEW")}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filterMatch === "NEEDS_REVIEW"
                    ? "bg-[#1C0B33] text-white shadow-2xs"
                    : "bg-white border border-slate-200/90 text-slate-700 hover:bg-slate-50"
                }`}
              >
                Needs Review
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-slate-200/90 rounded-xl text-xs font-semibold pl-3.5 pr-8 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5E3B8C]/30 appearance-none cursor-pointer"
              >
                <option>Sort: Best Match</option>
                <option>Sort: Highest %</option>
                <option>Sort: Name A-Z</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-3 pointer-events-none" />
            </div>

          </div>

        </div>

        {/* SECTION HEADER: AI RECOMMENDED PAIRINGS */}
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-4 text-left">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#111111] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#5E3B8C]" />
              <span>AI Recommended Pairings</span>
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Curated suggestions to help you create better menu experiences.
            </p>
          </div>

          <button 
            onClick={() => alert("AI pairing algorithm factors dish cuisine, fat content, melting point, and flavor synergy.")}
            className="text-xs text-[#5E3B8C] font-bold flex items-center gap-1 hover:underline cursor-pointer shrink-0"
          >
            <span>Why these matches?</span>
            <Info className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 6 ELEGANT PAIRING CARDS GRID */}
        <div className="space-y-4">
          {filteredRecs.map((rec, idx) => {
            const isShortlisted = shortlistedIds.includes(rec.id);
            const isBookmarked = bookmarkedIds.includes(rec.id);
            const radius = 36;
            const strokeDasharray = 2 * Math.PI * radius;
            const strokeDashoffset = strokeDasharray * (1 - rec.matchPercent / 100);

            return (
              <div
                key={rec.id}
                style={{ animationDelay: `${idx * 80}ms` }}
                className="animate-card-fade bg-white rounded-[26px] border border-slate-200/90 hover:border-[#5E3B8C]/40 p-5 sm:p-6 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_-8px_rgba(28,11,51,0.14)] hover:-translate-y-1 transition-all duration-300 flex flex-col lg:flex-row items-center justify-between gap-6 text-left group relative"
              >
                
                {/* 1. LEFT DISH BLOCK */}
                <div className="flex items-start gap-4 flex-1 w-full lg:w-auto">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 bg-slate-100 border border-slate-200/80 shadow-2xs group/img">
                    <Image
                      src={rec.dishImage}
                      alt={rec.dishTitle}
                      fill
                      unoptimized
                      className="object-cover group-hover/img:scale-110 group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-[#5E3B8C] bg-[#F4EFFB] border border-[#E2D4F7] px-2.5 py-0.5 rounded-md inline-block shadow-2xs">
                      YOUR DISH
                    </span>

                    <h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-[#1C0B33] transition-colors leading-tight">
                      {rec.dishTitle}
                    </h3>

                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      {rec.dishCuisine}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal min-h-[36px]">
                      {rec.dishDesc}
                    </p>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      {rec.tags.map((tag) => (
                        <span key={tag} className="bg-slate-100/80 hover:bg-purple-50 text-slate-600 hover:text-[#5E3B8C] text-[10.5px] font-medium px-2.5 py-0.5 rounded-md border border-slate-200/60 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 2. CENTER MATCH SVG RING NODE */}
                <div className="flex flex-col items-center justify-center shrink-0 my-2 lg:my-0 px-2 group/ring">
                  <div className={`relative w-22 h-22 sm:w-24 sm:h-24 rounded-full bg-white flex flex-col items-center justify-center text-center shadow-md border border-slate-100 transition-all duration-300 group-hover/ring:scale-105 ${
                    rec.matchType === "NEEDS_REVIEW"
                      ? "animate-ring-pulse-amber"
                      : "animate-ring-pulse"
                  }`}>
                    
                    {/* Dynamic Animated Circular Progress SVG */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 88 88">
                      {/* Track Circle */}
                      <circle
                        cx="44"
                        cy="44"
                        r={radius}
                        stroke="#E2E8F0"
                        strokeWidth="5"
                        fill="transparent"
                      />
                      {/* Animated Active Progress Circle */}
                      <circle
                        cx="44"
                        cy="44"
                        r={radius}
                        stroke={rec.matchType === "NEEDS_REVIEW" ? "#F59E0B" : "#10B981"}
                        strokeWidth="5.5"
                        strokeLinecap="round"
                        fill="transparent"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>

                    {/* Ring Content Text */}
                    <div className="relative z-10 flex flex-col items-center justify-center">
                      <span className={`text-lg sm:text-xl font-black tracking-tight leading-none ${
                        rec.matchType === "NEEDS_REVIEW" ? "text-amber-600" : "text-emerald-600"
                      }`}>
                        {rec.matchPercent}%
                      </span>
                      <span className="text-[8px] font-extrabold text-slate-400 uppercase tracking-widest mt-0.5">
                        MATCH
                      </span>
                    </div>
                  </div>

                  {/* Match Badge */}
                  <span className={`mt-2.5 text-[10.5px] font-bold px-3.5 py-1 rounded-full border shadow-2xs transition-all duration-300 ${
                    rec.matchType === "NEEDS_REVIEW"
                      ? "bg-amber-50/90 text-amber-800 border-amber-200/90"
                      : "bg-emerald-50/90 text-emerald-800 border-emerald-200/90"
                  }`}>
                    {rec.matchLabel}
                  </span>
                </div>

                {/* 3. RECOMMENDED PRODUCT BLOCK */}
                <div className="bg-gradient-to-r from-[#F8F6FC] to-[#F4EFFB]/90 p-3.5 rounded-2xl border border-[#E2D4F7] flex items-center gap-3.5 w-full lg:w-72 shrink-0 shadow-2xs hover:border-[#5E3B8C]/40 transition-colors group/prod">
                  <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-xl bg-white overflow-hidden p-1.5 shrink-0 border border-slate-200/90 shadow-2xs flex items-center justify-center group-hover/prod:scale-105 transition-transform duration-300">
                    <Image
                      src={rec.recommendedImage}
                      alt={rec.recommendedTitle}
                      fill
                      unoptimized
                      className="object-contain p-1"
                    />
                  </div>

                  <div className="space-y-1 text-left flex-1 min-w-0">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400 block">
                      RECOMMENDED PRODUCT
                    </span>
                    <h4 className="text-xs font-serif font-bold text-[#111111] leading-snug line-clamp-2">
                      {rec.recommendedTitle}
                    </h4>
                    <div className="text-[11px] text-[#5E3B8C] font-semibold">
                      {rec.recommendedBrand}
                    </div>
                  </div>
                </div>

                {/* 4. RIGHT ACTION BUTTONS STACK */}
                <div className="flex flex-row lg:flex-col items-center gap-2 w-full lg:w-auto shrink-0 justify-end">
                  
                  {/* View Details Primary Button with Golden Shimmer */}
                  <button
                    onClick={() => onSelectProduct(rec.productId)}
                    className="btn-shimmer-effect flex-1 lg:flex-none w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#1C0B33] via-[#2D1252] to-[#1C0B33] hover:from-[#2B1B4E] hover:to-[#3C276B] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer border border-[#F5C453]/30 active:scale-[0.97] whitespace-nowrap group/btn"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F5C453] group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2 w-full lg:w-auto">
                    {/* Shortlist Button */}
                    <button
                      onClick={() => toggleShortlist(rec.id)}
                      className={`flex-1 py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1 transition-all cursor-pointer whitespace-nowrap shadow-2xs active:scale-95 ${
                        isShortlisted
                          ? "bg-purple-50 border-[#5E3B8C] text-[#5E3B8C]"
                          : "bg-white border-slate-200/90 hover:bg-purple-50 hover:border-purple-200 text-slate-700 hover:text-[#5E3B8C]"
                      }`}
                    >
                      {isShortlisted ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      <span>{isShortlisted ? "Shortlisted" : "Shortlist"}</span>
                    </button>

                    {/* Bookmark Icon Button */}
                    <button
                      onClick={() => toggleBookmark(rec.id)}
                      className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-2xs active:scale-95 ${
                        isBookmarked
                          ? "bg-[#1C0B33] border-[#1C0B33] text-[#F5C453]"
                          : "bg-white border-slate-200/90 text-slate-400 hover:bg-purple-50 hover:border-purple-200 hover:text-[#5E3B8C]"
                      }`}
                      title="Bookmark recommendation"
                    >
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* BOTTOM PROMOTIONAL BANNER */}
        <div className="bg-[#F7F3FC] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#E9DDF8] text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#5E3B8C] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Sparkles className="w-5 h-5 text-[#F5C453]" />
            </div>
            <div>
              <h4 className="text-sm font-serif font-bold text-[#111111]">
                Want more personalized recommendations?
              </h4>
              <p className="text-xs text-slate-500 font-medium">
                Add more dishes or explore our product catalog to unlock better pairings.
              </p>
            </div>
          </div>

          <button
            onClick={() => onSelectProduct("all")}
            className="px-5 py-2.5 rounded-xl bg-[#1C0B33] hover:bg-[#2B1B4E] text-white text-xs font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer shrink-0 border border-[#F5C453]/30"
          >
            <span>Explore Products</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F5C453]" />
          </button>
        </div>

      </div>
    </div>
  );
}
