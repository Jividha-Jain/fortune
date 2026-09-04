"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { 
  Search, 
  Bookmark, 
  ChevronDown,
  LayoutGrid,
  List,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { ALL_PRODUCTS } from "@/data/productsData";

interface ScreenProductsCatalogProps {
  onSelectProduct: (productId: string) => void;
}

export default function ScreenProductsCatalog({ onSelectProduct }: ScreenProductsCatalogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [selectedBrand, setSelectedBrand] = useState("All brands");
  const [sortBy, setSortBy] = useState("Name A-Z");
  const [onlyRecommended, setOnlyRecommended] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Bookmark state
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const categoryOptions = [
    "All categories",
    "Bakery",
    "Dairy",
    "Meats",
    "Poultry",
    "Sea Food",
    "Special Offers",
  ];

  const brandOptions = [
    "All brands",
    "Zanetti",
    "Levoni",
    "Paysan Breton",
    "Rougié",
    "TartufLanghe",
    "Fortune Select",
  ];

  const sortOptions = [
    "Name A-Z",
    "Name Z-A",
    "Match % (High to Low)",
    "Price (Low to High)",
    "Price (High to Low)",
  ];

  const productsData = ALL_PRODUCTS;

  // Filtered and Sorted Products List
  const filteredProducts = useMemo(() => {
    let list = productsData.filter((product) => {
      // 1. Search Query Filter
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

      // 2. Category Dropdown Filter
      if (selectedCategory !== "All categories") {
        if (product.category.toLowerCase() !== selectedCategory.toLowerCase()) {
          return false;
        }
      }

      // 3. Brand Dropdown Filter
      if (selectedBrand !== "All brands") {
        const pBrand = product.brand || "Fortune Select";
        if (pBrand.toLowerCase() !== selectedBrand.toLowerCase()) {
          return false;
        }
      }

      // 4. Recommended for My Menu Toggle
      if (onlyRecommended && !product.matchesMyMenu) {
        return false;
      }

      return true;
    });

    // Apply Sorting
    if (sortBy === "Name A-Z") {
      list = list.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "Name Z-A") {
      list = list.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortBy === "Match % (High to Low)") {
      list = list.sort((a, b) => b.matchPercentNum - a.matchPercentNum);
    } else if (sortBy === "Price (Low to High)") {
      list = list.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sortBy === "Price (High to Low)") {
      list = list.sort((a, b) => (b.price || 0) - (a.price || 0));
    }

    return list;
  }, [searchQuery, selectedCategory, selectedBrand, onlyRecommended, sortBy, productsData]);

  return (
    <div className="min-h-screen bg-[#FAF8FD] text-[#111111] pb-20 font-sans antialiased">
      
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10 space-y-6">
        
        {/* PAGE HEADER TITLE & BREADCRUMB */}
        <div className="text-left space-y-0.5">
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#111111] tracking-tight">
            Product Catalogue
          </h1>
          <div className="text-xs text-slate-400 font-medium">
            Hotel <span className="mx-1 text-slate-300">/</span> Product Catalogue
          </div>
        </div>

        {/* TOP SINGLE FILTER & CONTROL ROW (EXACT MATCH TO REFERENCE SCREENSHOT) */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 shadow-2xs">
          
          {/* Left Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200/90 rounded-xl text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5E3B8C]/30 transition-all"
            />
          </div>

          {/* Center & Right Filter Dropdowns & Controls */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto shrink-0 justify-end">
            
            {/* Category Dropdown */}
            <div className="relative w-full sm:w-auto">
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full sm:w-48 bg-white border border-slate-200/90 rounded-xl text-xs font-medium pl-3.5 pr-8 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5E3B8C]/30 appearance-none cursor-pointer"
                >
                  {categoryOptions.map((cat) => (
                    <option key={cat} value={cat}>Category: {cat}</option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-2.5 pointer-events-none" />
              </div>
            </div>

            {/* Brand Dropdown */}
            <div className="relative w-full sm:w-auto">
              <div className="relative">
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full sm:w-44 bg-white border border-slate-200/90 rounded-xl text-xs font-medium pl-3.5 pr-8 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5E3B8C]/30 appearance-none cursor-pointer"
                >
                  {brandOptions.map((b) => (
                    <option key={b} value={b}>Brand: {b}</option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-2.5 pointer-events-none" />
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="relative w-full sm:w-auto">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full sm:w-44 bg-white border border-slate-200/90 rounded-xl text-xs font-medium pl-3.5 pr-8 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5E3B8C]/30 appearance-none cursor-pointer"
                >
                  {sortOptions.map((s) => (
                    <option key={s} value={s}>Sort: {s}</option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-2.5 pointer-events-none" />
              </div>
            </div>

            {/* Recommended for My Menu Toggle Pill */}
            <button
              onClick={() => setOnlyRecommended(!onlyRecommended)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer whitespace-nowrap border ${
                onlyRecommended
                  ? "bg-[#1C0B33] text-white border-[#1C0B33] font-semibold"
                  : "bg-white border-slate-200/90 text-slate-700 hover:bg-slate-50"
              }`}
            >
              Recommended for My Menu
            </button>

            {/* View Mode Grid / List Switcher */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/80 shrink-0">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-[#1C0B33] text-white shadow-2xs"
                    : "text-slate-500 hover:text-slate-900"
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === "list"
                    ? "bg-[#1C0B33] text-white shadow-2xs"
                    : "text-slate-500 hover:text-slate-900"
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* PRODUCT COUNT LINE */}
        <div className="text-left text-xs text-slate-500 font-semibold px-1">
          {filteredProducts.length} products
        </div>

        {/* FULL WIDTH PRODUCTS CATALOG (GRID OR LIST) */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-3">
            <h4 className="font-serif font-bold text-lg text-slate-800">No products match your criteria</h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try changing your search terms or clearing selected category and brand filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All categories");
                setSelectedBrand("All brands");
                setOnlyRecommended(false);
              }}
              className="px-5 py-2.5 rounded-xl bg-[#1C0B33] text-white text-xs font-bold hover:bg-[#2B1B4E]"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((p) => {
              const isBookmarked = bookmarkedIds.includes(p.id);
              return (
                <div
                  key={p.id}
                  onClick={() => onSelectProduct(p.id)}
                  className="bg-white rounded-[24px] border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer text-left"
                >
                  <div>
                    {/* Product Image */}
                    <div className="relative h-44 w-full overflow-hidden bg-slate-50">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Top-Left Category Badge */}
                      <div className="absolute top-3 left-3 bg-[#1C0B33]/90 text-[#F5C453] font-bold text-[9px] px-2.5 py-1 rounded-md uppercase tracking-wider shadow-xs">
                        {p.category}
                      </div>

                      {/* Top-Right Bookmark Button */}
                      <button
                        onClick={(e) => toggleBookmark(p.id, e)}
                        className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all ${
                          isBookmarked 
                            ? "bg-[#1C0B33] text-[#F5C453]" 
                            : "bg-black/30 text-white hover:bg-black/50"
                        }`}
                      >
                        <Bookmark className="w-3.5 h-3.5" />
                      </button>

                      {/* Bottom Origin Details */}
                      <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded-md">
                        {p.originTag}
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-4 space-y-2">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#5E3B8C] flex items-center justify-between">
                        <span>{p.brand || "Fortune Select"}</span>
                        <span className="text-slate-400 font-normal">{p.pack}</span>
                      </div>

                      <h4 className="text-base font-serif font-bold text-slate-900 leading-snug line-clamp-2 min-h-[44px]">
                        {p.title}
                      </h4>

                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed font-normal">
                        {p.desc}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-4 pt-0 flex items-center justify-between gap-2 border-t border-slate-100 mt-2">
                    <div className="text-xs font-bold text-[#1C0B33]">
                      {p.price ? `₹${p.price.toLocaleString("en-IN")}` : "Contact for RFQ"}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(p.id);
                      }}
                      className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-[#1C0B33] text-slate-800 hover:text-white text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          /* LIST VIEW */
          <div className="space-y-4">
            {filteredProducts.map((p) => {
              const isBookmarked = bookmarkedIds.includes(p.id);
              return (
                <div
                  key={p.id}
                  onClick={() => onSelectProduct(p.id)}
                  className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs hover:shadow-md transition-all flex flex-col sm:flex-row items-center justify-between gap-4 cursor-pointer text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-slate-50 shrink-0">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>

                    <div className="space-y-1">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#5E3B8C]">
                        {p.category} • {p.brand || "Fortune Select"} • {p.originTag}
                      </div>
                      <h4 className="text-lg font-serif font-bold text-slate-900">
                        {p.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1 max-w-xl">
                        {p.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0 self-end sm:self-center">
                    <div className="text-right">
                      <div className="text-xs text-slate-400 font-medium">{p.pack}</div>
                      <div className="text-base font-bold text-[#1C0B33]">
                        {p.price ? `₹${p.price.toLocaleString("en-IN")}` : "Contact for RFQ"}
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(p.id);
                      }}
                      className="px-4 py-2.5 rounded-xl bg-[#1C0B33] hover:bg-[#2B1B4E] text-white text-xs font-bold flex items-center gap-1.5"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#F5C453]" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
