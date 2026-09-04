"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Search, 
  Trash2, 
  MessageSquare, 
  ArrowRight, 
  Check, 
  Sparkles,
  Plus,
  X,
  Info
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 space-y-6 sm:space-y-8">
        
        {/* BREADCRUMB HEADER & PAGE TITLE */}
        <div className="space-y-2 text-left">
          <div className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
            <span>Hotel</span>
            <span>/</span>
            <span className="text-[#5E3B8C] font-semibold">Watchlist</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#111111] tracking-tight">
                Watchlist
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                Products saved for future reference.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 bg-[#F4EFFB] border border-[#E2D4F7] px-4 py-2 rounded-2xl text-[#5E3B8C] text-xs font-bold shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#5E3B8C]" />
              <span>{watchlistItems.length} Products Saved</span>
            </div>
          </div>
        </div>

        {/* SEARCH WATCHLIST BAR */}
        <div className="bg-white p-3 sm:p-4 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center gap-3">
          <Search className="w-4 h-4 text-slate-400 shrink-0 ml-1" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search watchlist..."
            className="w-full bg-transparent text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="text-xs text-slate-400 hover:text-slate-600 font-bold px-2 py-0.5 rounded-md hover:bg-slate-100 cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* WATCHLIST CARDS GRID */}
        {filteredWatchlist.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWatchlist.map((item) => {
              const hasNote = Boolean(notesState[item.id]);

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-[26px] border border-slate-200/90 hover:border-[#5E3B8C]/40 p-5 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_-8px_rgba(28,11,51,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4 group text-left relative"
                >
                  {/* Top Product Dark Frame */}
                  <div className="relative h-56 w-full rounded-[20px] overflow-hidden bg-gradient-to-b from-[#1C0B33] via-[#120724] to-[#1C0B33] p-4 flex items-center justify-center border border-purple-950/60 shadow-inner group/img">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      unoptimized
                      className="object-contain p-4 group-hover/img:scale-105 transition-transform duration-500"
                    />

                    {/* Top Right Brand Watermark/Icon */}
                    <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-teal-500/20 backdrop-blur-md border border-teal-400/40 flex items-center justify-center text-teal-300 text-xs">
                      ✨
                    </div>
                  </div>

                  {/* Product Metadata & Info */}
                  <div className="space-y-1.5 flex-1">
                    <div className="text-[11px] font-medium text-slate-400">
                      {item.category}
                    </div>

                    <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-[#1C0B33] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <div className="text-xs font-semibold text-[#5E3B8C] bg-purple-50/80 border border-purple-100 px-2.5 py-0.5 rounded-md inline-block">
                      {item.forDish}
                    </div>

                    {/* Note indicator if exists */}
                    {hasNote && (
                      <div className="mt-2 p-2.5 rounded-xl bg-amber-50/90 border border-amber-200/80 text-[11px] text-amber-900 font-medium flex items-start gap-2">
                        <MessageSquare className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{notesState[item.id]}</span>
                      </div>
                    )}
                  </div>

                  {/* Match Bar & Action Buttons */}
                  <div className="space-y-3 pt-2 border-t border-slate-100">
                    
                    {/* Match Score & Progress Bar */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-extrabold text-slate-900">{item.matchPercent}%</span>
                        <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                          item.matchType === "EXCELLENT" 
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200" 
                            : "bg-teal-50 text-teal-700 border-teal-200"
                        }`}>
                          {item.matchLabel}
                        </span>
                      </div>

                      {/* Progress Bar Track */}
                      <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5">
                        <div
                          style={{ width: `${item.matchPercent}%` }}
                          className="h-full rounded-full bg-gradient-to-r from-[#0F2E20] via-emerald-600 to-teal-500 transition-all duration-1000 ease-out"
                        />
                      </div>
                    </div>

                    {/* Action Buttons Row */}
                    <div className="flex items-center gap-2 pt-1">
                      
                      {/* Primary View Product Button */}
                      <button
                        onClick={() => onNavigateTab("products")}
                        className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#0F2E20] to-[#1A4B35] hover:from-[#143D2B] hover:to-[#225E43] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer border border-[#F5C453]/30 active:scale-[0.98]"
                      >
                        <span>View Product</span>
                      </button>

                      {/* Comment / Note Button */}
                      <button
                        onClick={() => openNoteModal(item.id)}
                        className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-2xs active:scale-95 ${
                          hasNote
                            ? "bg-amber-100 border-amber-300 text-amber-800"
                            : "bg-[#D9A036] border-[#C28B2B] text-white hover:bg-[#C28B2B]"
                        }`}
                        title="Add chef note"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </button>

                      {/* Remove Button */}
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="w-10 h-10 rounded-xl bg-red-50 hover:bg-red-100 border border-red-200/80 text-red-500 hover:text-red-700 flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-2xs active:scale-95"
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
              className="px-6 py-2.5 rounded-xl bg-[#1C0B33] text-white text-xs font-bold hover:bg-[#2B1B4E] transition-colors cursor-pointer"
            >
              Browse Catalog
            </button>
          </div>
        )}

      </div>

      {/* CHEF NOTE MODAL */}
      {activeNoteModalId && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full border border-slate-200 shadow-2xl space-y-4 text-left animate-card-fade">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-serif font-bold text-slate-900 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#5E3B8C]" />
                <span>Add Note for Kitchen Team</span>
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
              placeholder="e.g. Test melting tolerance for pizza, request 200g sample pack..."
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
                className="px-5 py-2 rounded-xl bg-[#1C0B33] hover:bg-[#2B1B4E] text-white text-xs font-bold transition-colors cursor-pointer"
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
