"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Bookmark, 
  Trash2, 
  Download, 
  ArrowRight, 
  CheckCircle2, 
  Search,
  Plus,
  ShieldCheck,
  TrendingDown,
  Sparkles,
  Package,
  Layers,
  Zap,
  Snowflake,
  SlidersHorizontal,
  ExternalLink
} from "lucide-react";
import { ALL_PRODUCTS } from "@/data/productsData";

interface ScreenWatchlistProps {
  onNavigateTab: (tab: "products" | "product-detail" | "recommendations" | "enquiries" | "shortlist") => void;
}

export default function ScreenWatchlist({ onNavigateTab }: ScreenWatchlistProps) {
  const [selectedCategory, setSelectedCategory] = useState("All Tracked SKUs");
  const [searchQuery, setSearchQuery] = useState("");

  // Default watchlist SKUs mapped from catalog
  const [watchlistItems, setWatchlistItems] = useState([
    {
      id: "zanetti-mozzarella-bufala",
      title: "Zanetti Mozzarella di Bufala DOP",
      brand: "Zanetti",
      origin: "Italy 🇮🇹",
      category: "Dairy & Cheese",
      packSize: "1kg x 6 / Case",
      price: "₹1,850 / kg",
      priceTrend: "-4.2% Contract Rate",
      priceTrendType: "down",
      stockStatus: "In Stock - Express 4H Delivery",
      stockStatusColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
      image: "https://fortunegourmet.com/wp-content/uploads/2025/03/1bbm-500x500.png",
      note: "Allocated for Taj Shamiana Margherita D.O.C. menu.",
      priceLockTill: "31 Dec 2026",
    },
    {
      id: "fortune-atlantic-salmon-trim-d",
      title: "Fortune Atlantic Salmon Fillet Trim D",
      brand: "Fortune Select",
      origin: "Norway 🇳🇴",
      category: "Seafood & Cold Chain",
      packSize: "5kg - 7kg Whole Fillet",
      price: "₹2,450 / kg",
      priceTrend: "Air-Freight Direct Locked",
      priceTrendType: "locked",
      stockStatus: "Fresh Batch Dispatched Daily",
      stockStatusColor: "text-purple-700 bg-purple-50 border-purple-200",
      image: "https://fortunegourmet.com/wp-content/uploads/2025/03/Tomex-Salmon-fish-fillet-500x500.jpg",
      note: "Monitored sensor telemetry (-18°C frozen).",
      priceLockTill: "15 Nov 2026",
    },
    {
      id: "gran-spicco-200gm",
      title: "Gran Spicco 200gm (Vegetarian Parmesan)",
      brand: "Gran Spicco",
      origin: "Italy 🇮🇹",
      category: "Dairy & Cheese",
      packSize: "200g x 24 Block",
      price: "₹420 / block",
      priceTrend: "-6.0% Volume Savings",
      priceTrendType: "down",
      stockStatus: "High Stock Availability",
      stockStatusColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
      image: "https://fortunegourmet.com/wp-content/uploads/2025/03/Gran-Spicco-200gr-500x500.jpg",
      note: "Paired with Alfredo & Mushroom Pasta dishes.",
      priceLockTill: "31 Dec 2026",
    },
    {
      id: "butter-unsalted-200gm",
      title: "Lurpak / Artisanal Unsalted Butter 200g",
      brand: "Lurpak",
      origin: "Denmark 🇩🇰",
      category: "Dairy & Bakery",
      packSize: "200g x 40 Packs",
      price: "₹310 / pack",
      priceTrend: "Net-30 Contract Rate",
      priceTrendType: "locked",
      stockStatus: "Cold Store Inventory Verified",
      stockStatusColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
      image: "https://fortunegourmet.com/wp-content/uploads/2025/03/lurpak-500x500.png",
      note: "Primary lamination butter for Wasabi pastry kitchen.",
      priceLockTill: "30 Sep 2026",
    },
  ]);

  const handleRemove = (id: string) => {
    setWatchlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  const categories = ["All Tracked SKUs", "Dairy & Cheese", "Seafood & Cold Chain", "Dairy & Bakery"];

  const filteredItems = watchlistItems.filter((item) => {
    const matchesCategory = selectedCategory === "All Tracked SKUs" || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAF8FD] text-[#111111] pb-20 font-sans antialiased">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10 space-y-8">
        
        {/* TOP HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200/80 pb-6">
          <div className="space-y-1.5 text-left">
            <div className="text-[10px] uppercase font-bold tracking-[0.22em] text-[#5E3B8C] flex items-center gap-2">
              <Bookmark className="w-3.5 h-3.5 text-[#F5C453]" />
              <span>INSTITUTIONAL PRICE &amp; ALLOCATION MONITOR</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#111111] font-bold tracking-tight">
              Executive Watchlist
            </h1>
            <p className="text-xs text-slate-500 font-medium">
              Tracked SKUs, commercial contract price locks, and stock availability for <strong className="text-[#111111]">Taj Hotel Mumbai</strong>.
            </p>
          </div>

          {/* Action Buttons Top Right */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => alert("Export Watchlist PDF generated successfully!")}
              className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-2 shadow-2xs transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-slate-600" />
              <span>Export Watchlist (PDF)</span>
            </button>

            <button
              onClick={() => onNavigateTab("products")}
              className="px-5 py-2.5 rounded-xl bg-[#1C0B33] hover:bg-[#2B1B4E] text-[#F5C453] hover:text-white text-xs font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer border border-[#F5C453]/30"
            >
              <Plus className="w-4 h-4" />
              <span>+ Add SKU to Watchlist</span>
            </button>
          </div>
        </div>

        {/* TOP SUMMARY STAT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs text-left space-y-1">
            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">TRACKED SKUs</div>
            <div className="text-2xl font-serif font-bold text-[#1C0B33]">{watchlistItems.length} Products</div>
            <div className="text-[11px] text-emerald-600 font-medium flex items-center gap-1 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>100% Contract Compliant</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs text-left space-y-1">
            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">PRICE LOCK SLA</div>
            <div className="text-2xl font-serif font-bold text-[#1C0B33]">Net-30 Locked</div>
            <div className="text-[11px] text-purple-700 font-medium flex items-center gap-1 pt-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Guaranteed till Q4 2026</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs text-left space-y-1">
            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">COLD-CHAIN DISPATCH</div>
            <div className="text-2xl font-serif font-bold text-[#1C0B33]">4-Hour SLA</div>
            <div className="text-[11px] text-emerald-600 font-medium flex items-center gap-1 pt-1">
              <Snowflake className="w-3.5 h-3.5" />
              <span>Direct Colaba Hub Express</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs text-left space-y-1">
            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">VOLUME REBATE ELIGIBLE</div>
            <div className="text-2xl font-serif font-bold text-[#1C0B33]">Tier 1 Preferred</div>
            <div className="text-[11px] text-amber-700 font-medium flex items-center gap-1 pt-1">
              <Sparkles className="w-3.5 h-3.5 text-[#F5C453]" />
              <span>+14.2% Margin Protection</span>
            </div>
          </div>
        </div>

        {/* SEARCH & CATEGORY FILTER TABS */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#1C0B33] text-white shadow-xs"
                    : "bg-white border border-slate-200/90 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-80 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search saved SKUs or brands..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200/90 rounded-xl text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5E3B8C]/30 shadow-2xs"
            />
          </div>

        </div>

        {/* WATCHLIST ITEMS GRID / LIST */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[24px] border border-slate-200/90 p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all flex flex-col sm:flex-row gap-5 text-left relative group"
              >
                {/* Product Thumbnail */}
                <div className="relative w-full sm:w-36 h-36 rounded-2xl overflow-hidden bg-slate-50 shrink-0 border border-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-[#1C0B33]/90 text-[#F5C453] text-[9px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                    {item.origin}
                  </div>
                </div>

                {/* Details Column */}
                <div className="flex-1 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#5E3B8C]">
                        {item.category} • {item.brand}
                      </span>

                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-slate-400 hover:text-red-600 transition-colors p-1"
                        title="Remove from Watchlist"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-slate-900 leading-snug mt-0.5">
                      {item.title}
                    </h3>

                    <div className="text-xs text-slate-500 font-medium mt-1">
                      Pack Format: <span className="text-slate-800 font-semibold">{item.packSize}</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-purple-50/50 border border-purple-100 text-[11px] text-slate-600 font-normal mt-2">
                      💡 <strong>Internal Note:</strong> {item.note}
                    </div>
                  </div>

                  {/* Pricing & Stock Status Row */}
                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">INSTITUTIONAL PRICE</div>
                        <div className="text-base font-extrabold text-[#1C0B33]">{item.price}</div>
                      </div>

                      <div className="text-right">
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">PRICE LOCK UNTIL</div>
                        <div className="text-xs font-bold text-emerald-700">{item.priceLockTill}</div>
                      </div>
                    </div>

                    {/* Stock SLA Pill & Action Button */}
                    <div className="flex items-center justify-between gap-2 pt-1">
                      <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${item.stockStatusColor}`}>
                        {item.stockStatus}
                      </span>

                      <button
                        onClick={() => onNavigateTab("enquiries")}
                        className="px-4 py-2 rounded-xl bg-[#1C0B33] hover:bg-[#2B1B4E] text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
                      >
                        <span>RFQ Quote</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#F5C453]" />
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 border border-slate-200 text-center space-y-4 max-w-md mx-auto">
            <Bookmark className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-xl font-serif font-bold text-slate-800">No SKUs in Watchlist</h3>
            <p className="text-xs text-slate-500">
              Browse the Fortune Gourmet catalog and save items to monitor price locks and cold-chain stock allocation.
            </p>
            <button
              onClick={() => onNavigateTab("products")}
              className="px-5 py-2.5 rounded-xl bg-[#1C0B33] text-white text-xs font-bold hover:bg-[#2B1B4E]"
            >
              Explore Products Catalog →
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
