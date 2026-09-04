"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  UtensilsCrossed, 
  Layers, 
  Award, 
  AlertCircle, 
  Search, 
  ChevronDown, 
  Bookmark, 
  Eye, 
  Mail, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

interface ScreenAIRecommendationsProps {
  onSelectProduct: (productId: string) => void;
}

export default function ScreenAIRecommendations({ onSelectProduct }: ScreenAIRecommendationsProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterMatch, setFilterMatch] = useState<"ALL" | "EXCELLENT" | "STRONG" | "NEEDS_REVIEW">("ALL");
  const [sortBy, setSortBy] = useState("Best match");

  // Tracked Shortlist and Watchlist state
  const [shortlistedIds, setShortlistedIds] = useState<string[]>([]);
  const [watchlistIds, setWatchlistIds] = useState<string[]>([]);

  const toggleShortlist = (id: string) => {
    setShortlistedIds((prev) => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleWatchlist = (id: string) => {
    setWatchlistIds((prev) => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  // 8 Exact Menu Dishes & Pairing Recommendations
  const recommendationsData = [
    {
      id: "rec-1",
      dishTitle: "Alfredo Pasta",
      dishCuisine: "Italian",
      productCountText: "1 product match",
      dishImage: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=400&q=80",
      matchPercent: 95,
      matchType: "EXCELLENT",
      matchLabel: "Excellent Match",
      recommendedTitle: "Quatro Formaggi (Shredded 4 Cheese)",
      recommendedBrand: "Fiorella",
      productId: "zanetti-mozzarella-bufala",
      recommendedImage: "https://fortunegourmet.com/wp-content/uploads/2025/03/Gran-Spicco-200gr-500x500.jpg",
      categoryTag: "Cheese & Dairy",
      description: "Four-cheese blend delivers authentic Alfredo richness with perfect melt and balanced flavour — ideal for premium pasta service.",
      alternatives: "Mascarpone, Cheese Sauce",
    },
    {
      id: "rec-2",
      dishTitle: "Chocolate Mousse",
      dishCuisine: "Continental",
      productCountText: "2 product matches",
      dishImage: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=400&q=80",
      matchPercent: 94,
      matchType: "EXCELLENT",
      matchLabel: "Excellent Match",
      recommendedTitle: "Lurpak / Artisanal Unsalted Butter 200g",
      recommendedBrand: "Lurpak",
      productId: "butter-unsalted-200gm",
      recommendedImage: "https://fortunegourmet.com/wp-content/uploads/2025/03/lurpak-500x500.png",
      categoryTag: "Dairy & Bakery",
      description: "82% fat content ensures smooth cocoa emulsion and luxurious mouthfeel without graininess.",
      alternatives: "Heavy Cream 35%, Cocoa Powder",
    },
    {
      id: "rec-3",
      dishTitle: "Butter Chicken",
      dishCuisine: "North Indian",
      productCountText: "1 product match",
      dishImage: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=400&q=80",
      matchPercent: 92,
      matchType: "EXCELLENT",
      matchLabel: "Excellent Match",
      recommendedTitle: "Paysan Breton Lactic Butter 82%",
      recommendedBrand: "Paysan Breton",
      productId: "butter-unsalted-200gm",
      recommendedImage: "https://fortunegourmet.com/wp-content/uploads/2025/03/lurpak-500x500.png",
      categoryTag: "Dairy & Fats",
      description: "Slow-churned European butter creates silky gloss and rich aroma without splitting in heavy makhani gravies.",
      alternatives: "Cooking Cream 30%, Ghee",
    },
    {
      id: "rec-4",
      dishTitle: "Paneer Tikka",
      dishCuisine: "North Indian",
      productCountText: "1 product match",
      dishImage: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=400&q=80",
      matchPercent: 78,
      matchType: "STRONG",
      matchLabel: "Strong Match",
      recommendedTitle: "TartufLanghe Truffle & Smoke Seasoning",
      recommendedBrand: "TartufLanghe",
      productId: "gran-spicco-200gm",
      recommendedImage: "https://fortunegourmet.com/wp-content/uploads/2025/03/1bbm-500x500.png",
      categoryTag: "Seasonings & Dairy",
      description: "Enhance traditional tandoori marination with premium artisanal smoke oil for elevated executive banquet dining.",
      alternatives: "Greek Yogurt, Saffron Threads",
    },
    {
      id: "rec-5",
      dishTitle: "Grilled Chicken",
      dishCuisine: "Continental",
      productCountText: "1 product match",
      dishImage: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=400&q=80",
      matchPercent: 82,
      matchType: "STRONG",
      matchLabel: "Strong Match",
      recommendedTitle: "Fortune Atlantic Salmon & Poultry Marinade",
      recommendedBrand: "Fortune Select",
      productId: "fortune-atlantic-salmon-trim-d",
      recommendedImage: "https://fortunegourmet.com/wp-content/uploads/2025/03/Tomex-Salmon-fish-fillet-500x500.jpg",
      categoryTag: "Seafood & Cold Chain",
      description: "Direct cold-chain trim yields 100% portion control and moisture retention during high-heat grill service.",
      alternatives: "Rosemary Compound Butter, EVOO",
    },
    {
      id: "rec-6",
      dishTitle: "Veg Biryani",
      dishCuisine: "North Indian",
      productCountText: "2 product matches",
      dishImage: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80",
      matchPercent: 71,
      matchType: "NEEDS_REVIEW",
      matchLabel: "Needs Review",
      recommendedTitle: "Fortune Saffron Super Negin Grade",
      recommendedBrand: "Fortune Select",
      productId: "gran-spicco-200gm",
      recommendedImage: "https://fortunegourmet.com/wp-content/uploads/2025/03/Gran-Spicco-200gr-500x500.jpg",
      categoryTag: "Spices & Specialty",
      description: "Super Negin grade saffron yields vibrant natural golden hue and intense floral perfume across high-volume basmati dum pots.",
      alternatives: "Rose Water, Cardamom Oil",
    },
  ];

  // Filtering & Sorting logic
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
        
        {/* PAGE TITLE & BREADCRUMB */}
        <div className="text-left space-y-1">
          <div className="text-xs text-slate-400 font-medium">
            Hotel <span className="mx-1 text-slate-300">/</span> AI Recommendations
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#111111] tracking-tight">
            AI Recommendations
          </h1>
          <p className="text-xs text-slate-500 font-medium">
            Find Fortune Gourmet products that best match your menu.
          </p>
        </div>

        {/* 4 TOP SUMMARY STAT CARDS (EXACT MATCH TO REFERENCE SCREENSHOT) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center justify-between text-left">
            <div className="space-y-1">
              <div className="text-[11px] text-slate-400 font-medium">Total Dishes Analysed</div>
              <div className="text-3xl font-serif font-bold text-[#111111]">8</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-100/80 text-slate-600 flex items-center justify-center shrink-0">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center justify-between text-left">
            <div className="space-y-1">
              <div className="text-[11px] text-slate-400 font-medium">Total Product Matches</div>
              <div className="text-3xl font-serif font-bold text-[#111111]">12</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center justify-between text-left">
            <div className="space-y-1">
              <div className="text-[11px] text-slate-400 font-medium">Excellent Matches</div>
              <div className="text-3xl font-serif font-bold text-[#111111]">5</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-purple-50 text-[#5E3B8C] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center justify-between text-left">
            <div className="space-y-1">
              <div className="text-[11px] text-slate-400 font-medium">Dishes Needing Review</div>
              <div className="text-3xl font-serif font-bold text-[#111111]">3</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <AlertCircle className="w-5 h-5" />
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
              placeholder="Search dishes, products or cuisine..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200/90 rounded-xl text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5E3B8C]/30 transition-all"
            />
          </div>

          {/* Filter Pills & Sort Dropdown */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto shrink-0 justify-end">
            
            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar">
              <button
                onClick={() => setFilterMatch("ALL")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filterMatch === "ALL"
                    ? "bg-[#1C0B33] text-white shadow-2xs"
                    : "bg-white border border-slate-200/90 text-slate-600 hover:bg-slate-50"
                }`}
              >
                All matches
              </button>

              <button
                onClick={() => setFilterMatch("EXCELLENT")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filterMatch === "EXCELLENT"
                    ? "bg-emerald-700 text-white shadow-2xs"
                    : "bg-white border border-slate-200/90 text-slate-600 hover:bg-slate-50"
                }`}
              >
                Excellent
              </button>

              <button
                onClick={() => setFilterMatch("STRONG")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filterMatch === "STRONG"
                    ? "bg-purple-700 text-white shadow-2xs"
                    : "bg-white border border-slate-200/90 text-slate-600 hover:bg-slate-50"
                }`}
              >
                Strong
              </button>

              <button
                onClick={() => setFilterMatch("NEEDS_REVIEW")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filterMatch === "NEEDS_REVIEW"
                    ? "bg-amber-600 text-white shadow-2xs"
                    : "bg-white border border-slate-200/90 text-slate-600 hover:bg-slate-50"
                }`}
              >
                Needs review
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-slate-200/90 rounded-xl text-xs font-semibold pl-3.5 pr-8 py-1.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5E3B8C]/30 appearance-none cursor-pointer"
              >
                <option>Sort: Best match</option>
                <option>Sort: Highest %</option>
                <option>Sort: Name A-Z</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-2.5 pointer-events-none" />
            </div>

          </div>

        </div>

        {/* RESULTS COUNT INDICATOR */}
        <div className="text-left text-xs text-slate-500 font-semibold px-1">
          {filteredRecs.length} dishes • 12 product matches
        </div>

        {/* RECOMMENDATIONS CARDS LIST (EXACT LAYOUT MATCED TO REFERENCE SCREENSHOT) */}
        <div className="space-y-8">
          {filteredRecs.map((rec) => {
            const isShortlisted = shortlistedIds.includes(rec.id);
            const isWatchlisted = watchlistIds.includes(rec.id);

            return (
              <div key={rec.id} className="space-y-3 text-left">
                
                {/* DISH HEADER ROW (ABOVE CARD CONTAINER) */}
                <div className="flex items-center justify-between px-1">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-slate-200 shadow-2xs">
                      <Image
                        src={rec.dishImage}
                        alt={rec.dishTitle}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-serif font-bold text-[#111111] leading-tight">
                        {rec.dishTitle}
                      </h3>
                      <div className="text-[11px] text-slate-500 font-medium">
                        {rec.productCountText} • {rec.dishCuisine}
                      </div>
                    </div>
                  </div>

                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    {rec.matchPercent}% best match
                  </span>
                </div>

                {/* PAIRING CONTAINER CARD */}
                <div className="bg-[#FAF9FC] rounded-[24px] border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-2xs text-left">
                  
                  {/* VISUAL PAIRING MATCH DIAGRAM (LEFT DISH + CENTER RING + RIGHT PRODUCT) */}
                  <div className="flex flex-col md:flex-row items-center justify-around gap-6 relative">
                    
                    {/* LEFT SIDE: YOUR DISH */}
                    <div className="flex flex-col items-center text-center space-y-2 z-10 w-48">
                      <div className="relative w-36 h-36 rounded-2xl overflow-hidden shadow-xs border border-slate-200 bg-white">
                        <Image
                          src={rec.dishImage}
                          alt={rec.dishTitle}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                      <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                        YOUR DISH
                      </div>
                      <div className="font-serif font-bold text-sm text-[#111111]">
                        {rec.dishTitle}
                      </div>
                      <button 
                        onClick={() => alert(`Viewing ${rec.dishTitle} menu spec.`)}
                        className="text-xs text-[#5E3B8C] font-bold hover:underline cursor-pointer"
                      >
                        View dish
                      </button>
                    </div>

                    {/* CENTER: CONNECTING LINE & CIRCULAR MATCH NODE */}
                    <div className="flex flex-col items-center justify-center relative w-full md:w-auto my-4 md:my-0">
                      {/* Horizontal Connecting Line */}
                      <div className="hidden md:block absolute top-1/2 left-[-120px] right-[-120px] h-[2px] bg-slate-200 z-0" />

                      {/* Central Ring Score Node */}
                      <div className="relative z-10 w-24 h-24 rounded-full bg-white border-4 border-emerald-500 shadow-md flex flex-col items-center justify-center text-center">
                        <span className="text-base font-extrabold text-[#111111] leading-none">
                          {rec.matchPercent}%
                        </span>
                        <span className="text-[9px] font-bold text-slate-400 tracking-wider uppercase mt-0.5">
                          MATCH
                        </span>
                      </div>

                      {/* Badge Pill under Node */}
                      <span className={`mt-3 text-[10px] font-bold px-3 py-1 rounded-full border z-10 ${
                        rec.matchType === "NEEDS_REVIEW"
                          ? "bg-amber-50 text-amber-800 border-amber-200"
                          : "bg-emerald-50 text-emerald-800 border-emerald-200"
                      }`}>
                        {rec.matchLabel}
                      </span>
                    </div>

                    {/* RIGHT SIDE: RECOMMENDED PRODUCT */}
                    <div className="flex flex-col items-center text-center space-y-2 z-10 w-56">
                      <div className="relative w-36 h-36 rounded-2xl overflow-hidden shadow-xs border border-slate-200 bg-[#1C0B33] p-2 flex items-center justify-center">
                        <Image
                          src={rec.recommendedImage}
                          alt={rec.recommendedTitle}
                          fill
                          unoptimized
                          className="object-contain p-2"
                        />
                      </div>
                      <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                        RECOMMENDED
                      </div>
                      <div className="font-serif font-bold text-sm text-[#111111] leading-snug">
                        {rec.recommendedTitle}
                      </div>
                      <div className="text-xs text-slate-400 font-medium">
                        {rec.recommendedBrand}
                      </div>
                    </div>

                  </div>

                  {/* FOOTER RATIONALE & ACTIONS SECTION */}
                  <div className="pt-4 border-t border-slate-200/80 space-y-3">
                    
                    {/* Category Tag */}
                    <div>
                      <span className="bg-slate-200/70 text-slate-700 text-[11px] font-bold px-3 py-1 rounded-full inline-block">
                        {rec.categoryTag}
                      </span>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {rec.description}
                    </p>

                    {/* Alternatives Line */}
                    <div className="text-xs text-slate-500 font-medium">
                      <strong className="text-slate-800 font-semibold">Alternatives:</strong> {rec.alternatives}
                    </div>

                    {/* Action Buttons Row */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      
                      {/* View Product Primary Button */}
                      <button
                        onClick={() => onSelectProduct(rec.productId)}
                        className="px-5 py-2.5 rounded-xl bg-[#1C0B33] hover:bg-[#2B1B4E] text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer"
                      >
                        <span>View Product</span>
                      </button>

                      {/* Shortlist Button */}
                      <button
                        onClick={() => toggleShortlist(rec.id)}
                        className={`px-4 py-2.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                          isShortlisted 
                            ? "bg-purple-50 border-[#5E3B8C] text-[#5E3B8C]" 
                            : "bg-white border-slate-300 text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <Bookmark className="w-3.5 h-3.5" />
                        <span>{isShortlisted ? "Shortlisted ✓" : "Shortlist"}</span>
                      </button>

                      {/* Watchlist Button */}
                      <button
                        onClick={() => toggleWatchlist(rec.id)}
                        className={`px-4 py-2.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                          isWatchlisted 
                            ? "bg-purple-50 border-[#5E3B8C] text-[#5E3B8C]" 
                            : "bg-white border-slate-300 text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>{isWatchlisted ? "Watchlisted ✓" : "Watchlist"}</span>
                      </button>

                      {/* Enquire Button */}
                      <button
                        onClick={() => alert(`Enquiry request sent for ${rec.recommendedTitle}`)}
                        className="px-5 py-2.5 rounded-xl bg-[#D7A742] hover:bg-[#B88726] text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Enquire</span>
                      </button>

                    </div>

                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
