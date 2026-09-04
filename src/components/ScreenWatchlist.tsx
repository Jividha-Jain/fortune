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
  Sparkles,
  ChefHat,
  Lightbulb
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
      description: "Perfectly firm & flavorful. Ideal for grilling and high-heat cooking.",
      forDish: "For Paneer Tikka",
      forDishTheme: "purple",
      matchPercent: 78,
      matchType: "STRONG",
      matchLabel: "Strong Match",
      image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=800&q=80",
      productId: "gran-spicco-200gm"
    },
    {
      id: "queso-formage",
      category: "Cheese & Dairy",
      brand: "FIORELLA",
      title: "Queso Formage (Shredded & Cubes)",
      description: "Rich, creamy and melts beautifully. Perfect for pastas and baked dishes.",
      forDish: "For Alfredo Pasta",
      forDishTheme: "emerald",
      matchPercent: 95,
      matchType: "EXCELLENT",
      matchLabel: "Excellent Match",
      image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=800&q=80",
      productId: "zanetti-mozzarella-bufala"
    },
    {
      id: "lurpak-butter",
      category: "Butter & Cream",
      brand: "LURPAK",
      title: "Lurpak Unsalted Butter 200g",
      description: "Premium European butter with rich, natural taste. Elevates your desserts.",
      forDish: "For Chocolate Mousse",
      forDishTheme: "amber",
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
      description: "Lactic butter with 82% fat content. Creates velvety Indian gravies & sauces.",
      forDish: "For Butter Chicken",
      forDishTheme: "amber",
      matchPercent: 92,
      matchType: "EXCELLENT",
      matchLabel: "Excellent Match",
      image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=800&q=80",
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

        {/* WATCHLIST CARDS GRID (Exact Pixel-by-Pixel Match to User's Design Reference) */}
        {filteredWatchlist.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredWatchlist.map((item) => {
              const hasNote = Boolean(notesState[item.id]);

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-[28px] border border-slate-200/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group text-left relative"
                >
                  {/* Top Edge-to-Edge Image Banner with Overlaid Badges */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100 group/img">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      unoptimized
                      className="object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Top Left Brand Badge */}
                    <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10.5px] font-black text-slate-900 uppercase tracking-wider shadow-xs">
                      {item.brand}
                    </div>

                    {/* Top Right Intended Dish Pill with Chef Hat Icon */}
                    <div className={`absolute top-3.5 right-3.5 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-extrabold border flex items-center gap-1.5 shadow-xs ${
                      item.forDishTheme === "purple"
                        ? "bg-[#F4EFFB]/95 text-[#5E3B8C] border-[#E2D4F7]"
                        : item.forDishTheme === "emerald"
                        ? "bg-[#E6F9F0]/95 text-[#0D9488] border-[#BBF7D0]"
                        : "bg-[#FEF6E6]/95 text-[#B45309] border-[#FDE68A]"
                    }`}>
                      <ChefHat className={`w-3.5 h-3.5 ${
                        item.forDishTheme === "purple"
                          ? "text-[#5E3B8C]"
                          : item.forDishTheme === "emerald"
                          ? "text-[#0D9488]"
                          : "text-[#B45309]"
                      }`} />
                      <span>{item.forDish}</span>
                    </div>
                  </div>

                  {/* Card Content Section */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    
                    {/* Title & Description */}
                    <div className="space-y-1.5">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-snug group-hover:text-[#1C0B33] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-500 font-normal leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Light Amber / Yellow Note Box (Rendered when note exists or for demo item) */}
                    {hasNote && (
                      <div className="bg-[#FFFBEB] border border-[#FDE68A] p-3 rounded-2xl flex items-start gap-2.5 text-xs text-[#92400E] font-medium shadow-2xs">
                        <Lightbulb className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{notesState[item.id]}</span>
                      </div>
                    )}

                    {/* AI Pairing Score Section */}
                    <div className="space-y-2 pt-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          AI PAIRING SCORE
                        </span>

                        <div className="flex items-center gap-2">
                          <span className="font-black text-slate-900 text-sm sm:text-base">
                            {item.matchPercent}%
                          </span>
                          <span className={`text-[10.5px] font-extrabold px-3 py-0.5 rounded-full ${
                            item.matchType === "EXCELLENT"
                              ? "bg-[#E6F9F0] text-[#0D9488]"
                              : "bg-[#F4EFFB] text-[#5E3B8C]"
                          }`}>
                            {item.matchLabel}
                          </span>
                        </div>
                      </div>

                      {/* Full-width Progress Bar Track */}
                      <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          style={{ width: `${item.matchPercent}%` }}
                          className={`h-full rounded-full transition-all duration-1000 ease-out ${
                            item.matchType === "EXCELLENT" ? "bg-[#0D9488]" : "bg-[#5E3B8C]"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Bottom Action Row */}
                    <div className="flex items-center gap-2.5 pt-2">
                      
                      {/* Primary "View Product →" Button */}
                      <button
                        onClick={() => onNavigateTab("products")}
                        className="flex-1 py-3 px-5 rounded-2xl bg-[#1B0B2E] hover:bg-[#2B1B4E] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-[0.98]"
                      >
                        <span>View Product</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#F5C453]" />
                      </button>

                      {/* Comment / Chef Note Square Button */}
                      <button
                        onClick={() => openNoteModal(item.id)}
                        className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border transition-all cursor-pointer shadow-2xs active:scale-95 ${
                          item.forDishTheme === "purple"
                            ? "bg-[#F4EFFB] text-[#5E3B8C] border-[#E2D4F7] hover:bg-[#E9DDF8]"
                            : item.forDishTheme === "emerald"
                            ? "bg-[#E6F9F0] text-[#0D9488] border-[#BBF7D0] hover:bg-[#D1F4E4]"
                            : "bg-[#FEF6E6] text-[#B45309] border-[#FDE68A] hover:bg-[#FDE8C7]"
                        }`}
                        title="Chef's Note"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </button>

                      {/* Bookmark Icon Button */}
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="w-11 h-11 rounded-2xl bg-white border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50 flex items-center justify-center shrink-0 transition-all cursor-pointer shadow-2xs active:scale-95"
                        title="Bookmark item"
                      >
                        <Bookmark className="w-4 h-4" />
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

