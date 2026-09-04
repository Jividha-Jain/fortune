"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { 
  Search, 
  Filter, 
  Bookmark, 
  ShieldCheck, 
  Sparkles, 
  Download, 
  Calendar,
  ChevronRight,
  CheckCircle2,
  Truck,
  Utensils,
  ArrowRight,
  RotateCcw,
  X,
  SlidersHorizontal
} from "lucide-react";
import { ALL_PRODUCTS } from "@/data/productsData";

interface ScreenProductsCatalogProps {
  onSelectProduct: (productId: string) => void;
}

export default function ScreenProductsCatalog({ onSelectProduct }: ScreenProductsCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Recommended for Taj Hotel Mumbai");

  // Menu Alignment Filters State
  const [matchesMyMenu, setMatchesMyMenu] = useState(true);
  const [highGrossMargin, setHighGrossMargin] = useState(false);
  const [newArrivals, setNewArrivals] = useState(false);

  // Selected Brand Checkboxes State
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  // Selected Origin State
  const [selectedOrigin, setSelectedOrigin] = useState<string>("");

  // Bookmark state
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const brandOptions = [
    { name: "Zanetti" },
    { name: "Levoni" },
    { name: "Paysan Breton" },
    { name: "Rougié" },
    { name: "TartufLanghe" },
    { name: "Fortune Select" },
  ];

  const originOptions = [
    { name: "Italy", flag: "🇮🇹" },
    { name: "France", flag: "🇫🇷" },
    { name: "Spain", flag: "🇪🇸" },
    { name: "Norway", flag: "🇳🇴" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "Japan", flag: "🇯🇵" },
  ];

  const productsData = ALL_PRODUCTS;

  // Dynamically compute category counts from productsData
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      ALL: productsData.length,
      BAKERY: 0,
      DAIRY: 0,
      MEATS: 0,
      POULTRY: 0,
      "SEA FOOD": 0,
      "SPECIAL OFFERS": 0,
    };

    productsData.forEach((p) => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      }
    });

    return [
      { key: "ALL", label: `ALL (${counts.ALL})`, count: counts.ALL },
      { key: "BAKERY", label: `BAKERY (${counts.BAKERY})`, count: counts.BAKERY },
      { key: "DAIRY", label: `DAIRY (${counts.DAIRY})`, count: counts.DAIRY },
      { key: "MEATS", label: `MEATS (${counts.MEATS})`, count: counts.MEATS },
      { key: "POULTRY", label: `POULTRY (${counts.POULTRY})`, count: counts.POULTRY },
      { key: "SEA FOOD", label: `SEA FOOD (${counts["SEA FOOD"]})`, count: counts["SEA FOOD"] },
      { key: "SPECIAL OFFERS", label: `SPECIAL OFFERS (${counts["SPECIAL OFFERS"]})`, count: counts["SPECIAL OFFERS"] },
    ];
  }, [productsData]);

  // Dynamically compute brand counts
  const brandCountsMap = useMemo(() => {
    const map: Record<string, number> = {};
    brandOptions.forEach((b) => (map[b.name] = 0));
    productsData.forEach((p) => {
      const bName = p.brand || "Fortune Select";
      if (map[bName] !== undefined) {
        map[bName]++;
      }
    });
    return map;
  }, [productsData]);

  // Dynamically compute origin counts
  const originCountsMap = useMemo(() => {
    const map: Record<string, number> = {};
    originOptions.forEach((o) => (map[o.name] = 0));
    productsData.forEach((p) => {
      if (map[p.origin] !== undefined) {
        map[p.origin]++;
      }
    });
    return map;
  }, [productsData]);

  // Helper toggle brand
  const toggleBrand = (brandName: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brandName) ? prev.filter((b) => b !== brandName) : [...prev, brandName]
    );
  };

  // Helper reset all filters
  const resetAllFilters = () => {
    setSelectedCategory("ALL");
    setSearchQuery("");
    setMatchesMyMenu(false);
    setHighGrossMargin(false);
    setNewArrivals(false);
    setSelectedBrands([]);
    setSelectedOrigin("");
  };

  // Filtered and Sorted Products List
  const filteredProducts = useMemo(() => {
    let list = productsData.filter((product) => {
      // 1. Category Pill Filter
      if (selectedCategory !== "ALL") {
        const catKey = selectedCategory.trim().toUpperCase();
        const prodCat = product.category.trim().toUpperCase();
        if (catKey !== prodCat) {
          return false;
        }
      }

      // 2. Search Query Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const match =
          product.title.toLowerCase().includes(q) ||
          (product.brand && product.brand.toLowerCase().includes(q)) ||
          product.category.toLowerCase().includes(q) ||
          product.desc.toLowerCase().includes(q) ||
          product.origin.toLowerCase().includes(q) ||
          product.pack.toLowerCase().includes(q);
        if (!match) return false;
      }

      // 3. Menu Alignment Checkboxes
      if (matchesMyMenu && !product.matchesMyMenu) return false;
      if (highGrossMargin && !product.highMargin) return false;
      if (newArrivals && !product.isNewArrival) return false;

      // 4. Brand Checkboxes Filter
      if (selectedBrands.length > 0 && product.brand && !selectedBrands.includes(product.brand)) {
        return false;
      }

      // 5. Origin Filter Pill
      if (selectedOrigin && selectedOrigin !== "All") {
        if (product.origin.toLowerCase() !== selectedOrigin.toLowerCase()) {
          return false;
        }
      }

      return true;
    });

    // Apply Sorting
    if (sortBy === "Match % (High to Low)" || sortBy === "Recommended for Taj Hotel Mumbai") {
      list = list.sort((a, b) => b.matchPercentNum - a.matchPercentNum);
    } else if (sortBy === "Price (Low to High)") {
      list = list.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sortBy === "Price (High to Low)") {
      list = list.sort((a, b) => (b.price || 0) - (a.price || 0));
    } else if (sortBy === "Name (A-Z)") {
      list = list.sort((a, b) => a.title.localeCompare(b.title));
    }

    return list;
  }, [
    selectedCategory,
    searchQuery,
    matchesMyMenu,
    highGrossMargin,
    newArrivals,
    selectedBrands,
    selectedOrigin,
    sortBy,
  ]);

  // Check how many filters are active
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (selectedCategory !== "ALL") count++;
    if (searchQuery.trim()) count++;
    if (matchesMyMenu) count++;
    if (highGrossMargin) count++;
    if (newArrivals) count++;
    if (selectedBrands.length > 0) count += selectedBrands.length;
    if (selectedOrigin) count++;
    return count;
  }, [selectedCategory, searchQuery, matchesMyMenu, highGrossMargin, newArrivals, selectedBrands, selectedOrigin]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] pb-24 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {/* HEADER HERO BANNER */}
        <div className="bg-gradient-to-r from-purple-50/70 via-white to-amber-50/40 border border-purple-100/90 rounded-[28px] p-8 sm:p-10 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 relative z-10 text-left">
            <div className="text-[10px] uppercase font-bold tracking-[0.22em] text-[#5E3B8C] flex items-center gap-1.5">
              <span>HORECA CATALOG 2025</span>
              <span>•</span>
              <span>OVER {productsData.length} CERTIFIED IMPORTS READY FOR DISPATCH</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif text-[#111111] font-normal leading-tight tracking-tight">
              Explore <span className="text-[#5E3B8C] font-normal font-serif">Fortune Products</span>
            </h1>
            <p className="text-xs text-slate-500 font-medium max-w-xl">
              Discover premium ingredients curated for professional kitchens, tailored to match Taj Hotel Mumbai&apos;s executive menu specs.
            </p>
          </div>

          {/* Right Floating Badges */}
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 relative z-10">
            <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 px-4 py-2.5 rounded-2xl shadow-2xs flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#5E3B8C]" />
              <div className="text-left">
                <div className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">Cold-Chain Verified</div>
                <div className="text-xs font-bold text-[#111111]">100% Guaranteed</div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 px-4 py-2.5 rounded-2xl shadow-2xs flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#5E3B8C]" />
              <div className="text-left">
                <div className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">Menu Compatibility</div>
                <div className="text-xs font-bold text-[#111111]">Up to 99% Match</div>
              </div>
            </div>
          </div>
        </div>

        {/* SEARCH & CATEGORY PILLS */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, ingredients or brands (e.g. Mozzarella, Truffle, Wagyu, Salmon, Zanetti, Levoni)..."
              className="w-full pl-11 pr-10 py-3 bg-white border border-slate-200/90 rounded-2xl text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5E3B8C]/20 shadow-2xs"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-3 text-slate-400 hover:text-slate-600 font-bold text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-1">
            {categoryCounts.map((cat) => {
              const isSelected = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#1B0B2E] text-white font-bold shadow-xs"
                      : "bg-white border border-slate-200/90 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* ACTIVE FILTER BADGES ROW */}
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="text-slate-400 font-bold text-[10px] uppercase tracking-wider flex items-center gap-1">
                <SlidersHorizontal className="w-3 h-3 text-[#5E3B8C]" />
                <span>Active Filters ({activeFiltersCount}):</span>
              </span>

              {selectedCategory !== "ALL" && (
                <span className="bg-[#F4EFFB] border border-[#E2D4F7] text-[#5E3B8C] px-3 py-1 rounded-full font-bold text-[11px] flex items-center gap-1.5">
                  Category: {selectedCategory}
                  <button onClick={() => setSelectedCategory("ALL")} className="hover:text-purple-900">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {searchQuery && (
                <span className="bg-[#F4EFFB] border border-[#E2D4F7] text-[#5E3B8C] px-3 py-1 rounded-full font-bold text-[11px] flex items-center gap-1.5">
                  Search: &quot;{searchQuery}&quot;
                  <button onClick={() => setSearchQuery("")} className="hover:text-purple-900">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {matchesMyMenu && (
                <span className="bg-[#FEF5E3] border border-[#F5E6BE] text-[#B88726] px-3 py-1 rounded-full font-bold text-[11px] flex items-center gap-1.5">
                  Matches My Menu
                  <button onClick={() => setMatchesMyMenu(false)} className="hover:text-amber-900">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {highGrossMargin && (
                <span className="bg-[#F4EFFB] border border-[#E2D4F7] text-[#5E3B8C] px-3 py-1 rounded-full font-bold text-[11px] flex items-center gap-1.5">
                  High Gross Margin
                  <button onClick={() => setHighGrossMargin(false)} className="hover:text-purple-900">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {newArrivals && (
                <span className="bg-[#F4EFFB] border border-[#E2D4F7] text-[#5E3B8C] px-3 py-1 rounded-full font-bold text-[11px] flex items-center gap-1.5">
                  New Arrivals
                  <button onClick={() => setNewArrivals(false)} className="hover:text-purple-900">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {selectedBrands.map((b) => (
                <span key={b} className="bg-purple-100 border border-purple-200 text-[#5E3B8C] px-3 py-1 rounded-full font-bold text-[11px] flex items-center gap-1.5">
                  Brand: {b}
                  <button onClick={() => toggleBrand(b)} className="hover:text-purple-900">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}

              {selectedOrigin && (
                <span className="bg-[#F4EFFB] border border-[#E2D4F7] text-[#5E3B8C] px-3 py-1 rounded-full font-bold text-[11px] flex items-center gap-1.5">
                  Origin: {selectedOrigin}
                  <button onClick={() => setSelectedOrigin("")} className="hover:text-purple-900">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              <button
                onClick={resetAllFilters}
                className="text-xs font-bold text-[#5E3B8C] hover:underline underline-offset-2 ml-1 cursor-pointer"
              >
                Clear All
              </button>
            </div>
          )}
        </div>

        {/* MAIN LAYOUT GRID (Sidebar Filters + Products Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
          
          {/* LEFT SIDEBAR FILTERS (3 cols) */}
          <div className="lg:col-span-3 space-y-6 text-left">
            <div className="bg-white rounded-[24px] p-6 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] space-y-6">
              
              {/* Filter Header & Reset Button */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-xs uppercase font-bold tracking-wider text-[#111111] flex items-center gap-1.5">
                  <Filter className="w-3.5 h-3.5 text-[#5E3B8C]" />
                  <span>FILTERS</span>
                </h3>
                <button 
                  onClick={resetAllFilters} 
                  className="text-xs font-bold text-[#5E3B8C] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3 text-[#5E3B8C]" />
                  <span>Reset All</span>
                </button>
              </div>

              {/* Menu Alignment Checkboxes */}
              <div className="space-y-2.5">
                <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                  MENU ALIGNMENT
                </div>

                <label className="flex items-center justify-between text-xs text-slate-800 cursor-pointer font-bold select-none">
                  <span className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      checked={matchesMyMenu} 
                      onChange={(e) => setMatchesMyMenu(e.target.checked)}
                      className="rounded border-slate-300 text-[#5E3B8C] focus:ring-[#5E3B8C] w-4 h-4 cursor-pointer" 
                    />
                    <span>Matches My Menu</span>
                  </span>
                  <span className="text-[10px] bg-[#FEF5E3] text-[#B88726] font-bold px-1.5 py-0.5 rounded border border-[#F5E6BE]">High fit</span>
                </label>

                <label className="flex items-center text-xs text-slate-600 hover:text-slate-900 cursor-pointer font-medium gap-2 select-none">
                  <input 
                    type="checkbox" 
                    checked={highGrossMargin} 
                    onChange={(e) => setHighGrossMargin(e.target.checked)}
                    className="rounded border-slate-300 text-[#5E3B8C] focus:ring-[#5E3B8C] w-4 h-4 cursor-pointer" 
                  />
                  <span>High Gross Margin</span>
                </label>

                <label className="flex items-center text-xs text-slate-600 hover:text-slate-900 cursor-pointer font-medium gap-2 select-none">
                  <input 
                    type="checkbox" 
                    checked={newArrivals} 
                    onChange={(e) => setNewArrivals(e.target.checked)}
                    className="rounded border-slate-300 text-[#5E3B8C] focus:ring-[#5E3B8C] w-4 h-4 cursor-pointer" 
                  />
                  <span>New Arrivals</span>
                </label>
              </div>

              {/* Brand Filter Checkboxes */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100">
                <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                  BRAND ({brandOptions.length} BRANDS)
                </div>
                {brandOptions.map((b) => {
                  const isChecked = selectedBrands.includes(b.name);
                  const count = brandCountsMap[b.name] || 0;
                  return (
                    <label key={b.name} className="flex items-center justify-between text-xs text-slate-600 hover:text-slate-900 cursor-pointer font-medium select-none">
                      <span className="flex items-center gap-2">
                        <input 
                          type="checkbox" 
                          checked={isChecked}
                          onChange={() => toggleBrand(b.name)}
                          className="rounded border-slate-300 text-[#5E3B8C] focus:ring-[#5E3B8C] w-4 h-4 cursor-pointer" 
                        />
                        <span className={isChecked ? "font-bold text-[#5E3B8C]" : ""}>{b.name}</span>
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">{count}</span>
                    </label>
                  );
                })}
              </div>

              {/* Origin / Terroir Interactive Pills */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    ORIGIN / TERROIR
                  </div>
                  {selectedOrigin && (
                    <button 
                      onClick={() => setSelectedOrigin("")} 
                      className="text-[10px] font-bold text-[#5E3B8C] hover:underline cursor-pointer"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  {originOptions.map((o) => {
                    const isSelected = selectedOrigin.toLowerCase() === o.name.toLowerCase();
                    const count = originCountsMap[o.name] || 0;
                    return (
                      <button
                        key={o.name}
                        onClick={() => setSelectedOrigin(isSelected ? "" : o.name)}
                        className={`p-2 rounded-xl font-medium flex items-center justify-between transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#5E3B8C] text-white font-bold shadow-xs border border-[#5E3B8C]"
                            : "bg-slate-50 hover:bg-slate-100 border border-slate-100 text-slate-800"
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          <span>{o.flag}</span> 
                          <span>{o.name}</span>
                        </span>
                        <span className={`text-[10px] ${isSelected ? "text-purple-200" : "text-slate-400"}`}>
                          ({count})
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Bottom Sommelier Support Box */}
            <div className="bg-[#1B0B2E] text-white rounded-[24px] p-6 shadow-md space-y-3.5 text-left">
              <div className="flex items-center gap-2 text-[#D7A742]">
                <Utensils className="w-4 h-4 text-[#D7A742]" />
                <span className="text-[9px] uppercase font-bold tracking-widest text-[#D7A742]">DEDICATED SOMMELIER &amp; CHEF SUPPORT</span>
              </div>
              <h4 className="font-serif font-normal text-sm text-slate-100 leading-snug">
                Need spec sheets, batch lot numbers, or samples for menu tasting?
              </h4>
              <button
                onClick={() => alert("Custom portfolio requested for Taj Hotel Executive Desk.")}
                className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-[#1B0B2E] font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-xs active:scale-[0.98] cursor-pointer"
              >
                <span>Request Custom Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#1B0B2E]" />
              </button>
            </div>

          </div>

          {/* RIGHT PRODUCTS GRID (9 cols) */}
          <div className="lg:col-span-9 space-y-6 text-left">
            
            {/* Top Summary & Sort Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-600 font-semibold bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
              <span>
                Showing <strong className="text-[#111111]">{filteredProducts.length}</strong> of {productsData.length} curated products • Auto-matched with Taj Mumbai Kitchen Profiles
              </span>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-slate-500 font-medium">Sort by:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-slate-200/90 rounded-xl px-4 py-1.5 text-xs font-bold text-[#5E3B8C] shadow-2xs cursor-pointer focus:outline-none"
                >
                  <option>Recommended for Taj Hotel Mumbai</option>
                  <option>Match % (High to Low)</option>
                  <option>Price (Low to High)</option>
                  <option>Price (High to Low)</option>
                  <option>Name (A-Z)</option>
                </select>
              </div>
            </div>

            {/* Product Cards Grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-[24px] border border-slate-200 p-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#5E3B8C] flex items-center justify-center mx-auto">
                  <Filter className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#111111]">No matching products found</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Try adjusting your filter selection, clearing brand/origin filters, or resetting search keywords.
                </p>
                <button
                  onClick={resetAllFilters}
                  className="px-5 py-2.5 rounded-full bg-[#1B0B2E] text-white font-bold text-xs hover:bg-purple-900 transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-white" />
                  <span>Reset All Filters</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((p) => {
                  const isBookmarked = bookmarkedIds.includes(p.id);
                  return (
                    <div
                      key={p.id}
                      className="bg-white rounded-[24px] border border-slate-200/80 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        {/* Image Banner */}
                        <div className="relative h-44 sm:h-48 w-full overflow-hidden">
                          <Image
                            src={p.image}
                            alt={p.title}
                            fill
                            unoptimized
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          
                          {/* Top Left Badge */}
                          <div className="absolute top-3 left-3 bg-[#1B0B2E] text-white font-bold text-[9px] px-2.5 py-1 rounded-md uppercase tracking-wider shadow-xs">
                            {p.badge || "MATCHES YOUR MENU"}
                          </div>

                          {/* Top Right Match % Badge */}
                          <div className="absolute top-3 right-3 bg-[#5E3B8C] text-white font-bold text-[10px] px-2.5 py-1 rounded-md shadow-xs">
                            {p.matchPercent}
                          </div>

                          {/* Bottom Left Origin Badge */}
                          <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-sm text-white text-[10px] font-mono px-2.5 py-0.5 rounded-md border border-white/10">
                            {p.originDetails || p.originTag}
                          </div>
                        </div>

                        {/* Card Content Body */}
                        <div className="p-5 space-y-2">
                          <div className="flex items-center justify-between text-[10px] uppercase font-bold text-[#5E3B8C] tracking-wider">
                            <span>{p.category}</span>
                            <span className="text-slate-400 font-mono font-medium">{p.pack}</span>
                          </div>
                          <h4 className="text-base font-serif font-bold text-[#111111] leading-tight min-h-[44px]">
                            {p.title}
                          </h4>
                          {p.matchDesc && (
                            <div className="flex items-center gap-1.5 text-xs text-[#5E3B8C] font-medium pt-0.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#5E3B8C] shrink-0" />
                              <span className="truncate">{p.matchDesc}</span>
                            </div>
                          )}
                          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed font-normal mt-1">
                            {p.desc}
                          </p>
                          <div className="pt-2 flex items-center justify-between text-xs border-t border-slate-100">
                            <span className="text-slate-400 font-medium">Origin:</span>
                            <span className="font-serif font-bold text-xs text-[#111111]">{p.originTag}</span>
                          </div>
                        </div>
                      </div>

                      {/* Card Footer Buttons */}
                      <div className="p-5 pt-0 flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onSelectProduct(p.id)}
                          className="flex-1 py-2.5 rounded-xl border border-slate-200/90 hover:bg-slate-50 text-[#111111] text-xs font-bold transition-colors flex items-center justify-center gap-1 shadow-2xs cursor-pointer"
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#111111]" />
                        </button>

                        <button
                          onClick={() => toggleBookmark(p.id)}
                          className={`p-2.5 rounded-xl border transition-colors shadow-2xs cursor-pointer ${
                            isBookmarked 
                              ? "bg-purple-100 border-[#5E3B8C] text-[#5E3B8C]" 
                              : "border-slate-200/90 text-slate-500 hover:text-[#5E3B8C] hover:bg-slate-50"
                          }`}
                          title={isBookmarked ? "Remove from Shortlist" : "Add to Shortlist"}
                        >
                          <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-[#5E3B8C]" : ""}`} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* PREDICTIVE DELIVERY BAR */}
            <div className="bg-[#F8F5FD] border border-purple-200/80 rounded-[24px] p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xs">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#1B0B2E] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold text-[#111111] font-serif">
                    Predictive Delivery for Taj Mumbai
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">
                    Cold truck departures scheduled twice daily for Colaba &amp; South Mumbai kitchens. Next order cutoff: <strong className="text-[#111111] font-semibold">18:30 hrs</strong>.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={() => alert("Downloading full price sheet PDF...")}
                  className="px-5 py-2.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold text-xs shadow-2xs flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-slate-600" />
                  <span>Download Full Price Sheet (PDF)</span>
                </button>

                <button
                  onClick={() => alert("Tasting session scheduled with Fortune Executive Chef.")}
                  className="px-5 py-2.5 rounded-xl bg-[#D7A742] hover:bg-[#E5BC5E] text-[#1B0B2E] font-bold text-xs shadow-md flex items-center gap-2 transition-colors active:scale-[0.98] cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#1B0B2E]" />
                  <span>Schedule Tasting Session</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

