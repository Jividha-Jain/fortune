"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Search, 
  Trash2, 
  MessageSquare, 
  X,
  ArrowRight,
  Bookmark,
  Sparkles
} from "lucide-react";

interface ScreenWatchlistProps {
  onNavigateTab: (tab: "products" | "product-detail" | "recommendations" | "enquiries" | "shortlist") => void;
}

export default function ScreenWatchlist({ onNavigateTab }: ScreenWatchlistProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeNoteModalId, setActiveNoteModalId] = useState<string | null>(null);
  const [notesState, setNotesState] = useState<Record<string, string>>({
    "halloumi-200gm": "Requested sample batch for Paneer Tikka replacement test.",
  });
  const [noteInput, setNoteInput] = useState("");

  const [watchlistItems, setWatchlistItems] = useState([
    {
      id: "halloumi-200gm",
      category: "Cheese & Dairy",
      brand: "FORTUNE SELECT",
      title: "Halloumi 200 GM",
      forDish: "For: Paneer Tikka",
      matchPercent: 78,
      matchType: "STRONG",
      matchLabel: "Strong Match",
      image: "https://fortunegourmet.com/wp-content/uploads/2025/03/1bbm-500x500.png",
      productId: "gran-spicco-200gm"
    },
    {
      id: "queso-formage",
      category: "Cheese & Dairy",
      brand: "FIORELLA",
      title: "Queso Formage (Shredded & Cubes)",
      forDish: "For: Alfredo Pasta",
      matchPercent: 95,
      matchType: "EXCELLENT",
      matchLabel: "Excellent Match",
      image: "https://fortunegourmet.com/wp-content/uploads/2025/03/Gran-Spicco-200gr-500x500.jpg",
      productId: "zanetti-mozzarella-bufala"
    },
    {
      id: "lurpak-butter",
      category: "Butter & Cream",
      brand: "LURPAK",
      title: "Lurpak Unsalted Butter 200g",
      forDish: "For: Chocolate Mousse",
      matchPercent: 94,
      matchType: "EXCELLENT",
      matchLabel: "Excellent Match",
      image: "https://fortunegourmet.com/wp-content/uploads/2025/03/lurpak-500x500.png",
      productId: "butter-unsalted-200gm"
    },
    {
      id: "paysan-butter",
      category: "Butter & Cream",
      brand: "PAYSAN BRETON",
      title: "Paysan Breton Lactose Free Butter 82%",
      forDish: "For: Butter Chicken",
      matchPercent: 92,
      matchType: "EXCELLENT",
      matchLabel: "Excellent Match",
      image: "https://fortunegourmet.com/wp-content/uploads/2025/03/lurpak-500x500.png",
      productId: "butter-unsalted-200gm"
    },
  ]);

  const handleRemoveItem = (id: string) => {
    setWatchlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  const openNoteModal = (id: string) => {
    setActiveNoteModalId(id);
    setNoteInput(notesState[id] || "");
  };

  const saveNote = () => {
    if (activeNoteModalId) {
      setNotesState((prev) => ({
        ...prev,
        [activeNoteModalId]: noteInput,
      }));
      setActiveNoteModalId(null);
    }
  };

  const filteredWatchlist = watchlistItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.forDish.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FAF8FD] text-[#111111] pb-24 font-sans antialiased">
      
      {/* Top Header Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200/70 px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-xs text-slate-400 font-medium flex items-center gap-1.5 text-left">
            <span>Executive Portal</span>
            <span>/</span>
            <span className="text-[#5E3B8C] font-semibold">Watchlist</span>
          </div>

          <div className="relative w-72 sm:w-96">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search products, dishes, enquiries..."
              className="w-full pl-9 pr-4 py-1.5 bg-[#F4EFFB]/60 rounded-full text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5E3B8C]/20 border border-[#E2D4F7]/50"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 space-y-6 sm:space-y-8">
        
        {/* PAGE TITLE & HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left border-b border-slate-200/70 pb-5">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F4EFFB] border border-[#E2D4F7] text-[10px] font-bold tracking-wider text-[#5E3B8C] uppercase">
              <Bookmark className="w-3 h-3 text-[#5E3B8C]" />
              <span>SAVED FOR EXECUTIVE REVIEW</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#111111] tracking-tight">
              Executive Watchlist
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Curated items saved from AI Recommendations for sampling and recipe development.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigateTab("recommendations")}
              className="px-4 py-2.5 rounded-xl bg-[#F4EFFB] hover:bg-[#E9DDF8] text-[#5E3B8C] text-xs font-bold border border-[#E2D4F7] flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Recommendations</span>
            </button>
          </div>
        </div>

        {/* SEARCH WATCHLIST INPUT BAR */}
        <div className="bg-white p-3.5 rounded-2xl border border-slate-200/90 flex items-center gap-3 shadow-2xs">
          <Search className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search watchlist by product, category, or intended dish..."
            className="w-full bg-transparent text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="text-xs text-slate-400 hover:text-slate-600 font-bold px-3 py-0.5 rounded-full hover:bg-slate-100 cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* WATCHLIST CARDS GRID (Fortune Executive Design System) */}
        {filteredWatchlist.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWatchlist.map((item) => {
              const hasNote = Boolean(notesState[item.id]);

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-[24px] border border-slate-200/90 p-5 shadow-2xs hover:shadow-xl hover:border-[#5E3B8C]/40 transition-all duration-300 flex flex-col justify-between space-y-4 group text-left relative"
                >
                  {/* Top Product Light Styled Container */}
                  <div className="relative h-52 w-full rounded-[18px] overflow-hidden bg-gradient-to-b from-[#FAF8FD] to-[#F4EFFB]/80 p-4 flex items-center justify-center border border-[#E9DDF8] shadow-inner group/img">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      unoptimized
                      className="object-contain p-3 group-hover/img:scale-105 transition-transform duration-500"
                    />

                    {/* Category Pill Tag */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md border border-[#E2D4F7] text-[#5E3B8C] text-[10px] font-extrabold shadow-2xs tracking-wider uppercase">
                      {item.category}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                        {item.brand}
                      </span>
                      <span className="text-xs font-semibold text-[#5E3B8C] bg-[#F4EFFB] px-2.5 py-0.5 rounded-md border border-[#E2D4F7]">
                        {item.forDish}
                      </span>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-[#1C0B33] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {hasNote && (
                      <div className="mt-2.5 p-2.5 rounded-xl bg-amber-50/90 border border-amber-200/80 text-[11px] text-amber-900 font-medium flex items-start gap-2">
                        <MessageSquare className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{notesState[item.id]}</span>
                      </div>
                    )}
                  </div>

                  {/* AI Match Bar & Action Buttons */}
                  <div className="space-y-3 pt-3 border-t border-slate-100">
                    
                    {/* Match Score & Progress Bar */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">AI Pairing Score</span>
                        <div className="flex items-center gap-1.5">
                          <span className="font-black text-slate-900 text-sm">{item.matchPercent}%</span>
                          <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${
                            item.matchType === "EXCELLENT" 
                              ? "bg-emerald-50 text-emerald-800 border-emerald-200" 
                              : "bg-purple-50 text-[#5E3B8C] border-purple-200"
                          }`}>
                            {item.matchLabel}
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar Track */}
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          style={{ width: `${item.matchPercent}%` }}
                          className={`h-full rounded-full transition-all duration-1000 ease-out ${
                            item.matchType === "EXCELLENT" ? "bg-emerald-500" : "bg-[#5E3B8C]"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Action Buttons Row */}
                    <div className="flex items-center gap-2 pt-1">
                      
                      {/* Primary View Product Button */}
                      <button
                        onClick={() => onNavigateTab("products")}
                        className="flex-1 py-2.5 px-4 rounded-xl bg-[#1C0B33] hover:bg-[#2D1252] text-white text-xs font-bold text-center shadow-2xs hover:shadow transition-all cursor-pointer border border-[#F5C453]/20 flex items-center justify-center gap-1.5"
                      >
                        <span>View Product</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#F5C453]" />
                      </button>

                      {/* Comment / Note Button */}
                      <button
                        onClick={() => openNoteModal(item.id)}
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-2xs border ${
                          hasNote
                            ? "bg-amber-100 text-amber-800 border-amber-300"
                            : "bg-[#F4EFFB] hover:bg-[#E9DDF8] text-[#5E3B8C] border-[#E2D4F7]"
                        }`}
                        title="Add note"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </button>

                      {/* Delete Button */}
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="w-9 h-9 rounded-xl bg-white border border-slate-200/90 text-slate-400 hover:text-red-500 hover:bg-red-50 hover:border-red-200 flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-2xs"
                        title="Remove from watchlist"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 border border-slate-200/80 text-center space-y-4 max-w-md mx-auto my-8 shadow-2xs">
            <div className="w-14 h-14 rounded-2xl bg-purple-50 text-[#5E3B8C] flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">
              No watchlist items found
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              Try adjusting your search criteria or explore our AI Recommendations to add products to your watchlist.
            </p>
            <button
              onClick={() => onNavigateTab("products")}
              className="px-6 py-2.5 rounded-full bg-[#1C0B33] text-white text-xs font-bold hover:bg-[#2D1252] transition-colors cursor-pointer border border-[#F5C453]/30"
            >
              Browse Catalog
            </button>
          </div>
        )}

      </div>

      {/* CHEF NOTE MODAL */}
      {activeNoteModalId && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full border border-slate-200 shadow-2xl space-y-4 text-left animate-card-fade">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-serif font-bold text-slate-900 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#5E3B8C]" />
                <span>Executive Kitchen Note</span>
              </h3>
              <button 
                onClick={() => setActiveNoteModalId(null)}
                className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <textarea
              rows={4}
              value={noteInput}
              onChange={(e) => setNoteInput(e.target.value)}
              placeholder="e.g. Test melting tolerance for Paneer Tikka replacement, request 200g sample pack..."
              className="w-full p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5E3B8C]/30"
            />

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setActiveNoteModalId(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Cancel
              </button>

              <button
                onClick={saveNote}
                className="px-5 py-2 rounded-xl bg-[#1C0B33] hover:bg-[#2D1252] text-white text-xs font-bold transition-colors cursor-pointer border border-[#F5C453]/30"
              >
                Save Note
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

