"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Search,
  Utensils, 
  Trash2, 
  MessageSquare, 
  ChevronDown,
  Sparkles,
  ArrowRight,
  Download,
  CheckCircle2,
  X
} from "lucide-react";

interface ScreenShortlistProps {
  onNavigateEnquiries: () => void;
  onNavigateProducts: () => void;
}

export default function ScreenShortlist({ onNavigateEnquiries, onNavigateProducts }: ScreenShortlistProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [activeNoteModalId, setActiveNoteModalId] = useState<string | null>(null);

  const [notesState, setNotesState] = useState<Record<string, string>>({
    "cheese-sauce": "Sample requested for Butter Chicken recipe optimization.",
  });
  const [noteInput, setNoteInput] = useState("");

  const [shortlistItems, setShortlistItems] = useState([
    {
      id: "cheese-sauce",
      category: "Cheese & Dairy",
      title: "Cheese Sauce",
      forDish: "Butter Chicken",
      matchPercent: 92,
      matchType: "EXCELLENT",
      matchLabel: "Excellent Match",
      image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "quatro-formaggi",
      category: "Cheese & Dairy",
      title: "Quatro Formaggi (Shredded 4 Cheese)",
      forDish: "Alfredo Pasta",
      matchPercent: 95,
      matchType: "EXCELLENT",
      matchLabel: "Excellent Match",
      image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "cheddar-white",
      category: "Cheese & Dairy",
      title: "Cheddar White 1Kg",
      forDish: "Veg Biryani",
      matchPercent: 88,
      matchType: "STRONG",
      matchLabel: "Strong Match",
      image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80",
    },
  ]);

  const handleDeleteItem = (id: string) => {
    setShortlistItems(shortlistItems.filter(item => item.id !== id));
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

  const filteredItems = shortlistItems.filter((item) => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.forDish.toLowerCase().includes(searchQuery.toLowerCase());

    if (categoryFilter === "All") return matchesSearch;
    return matchesSearch && item.category.toLowerCase() === categoryFilter.toLowerCase();
  });

  return (
    <div className="min-h-screen bg-[#FAF8FD] text-[#111111] pb-32 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
        
        {/* HEADER HERO SECTION */}
        <div className="text-left space-y-1">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#111111] tracking-tight">
            Shortlist
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            Products you are actively considering for your menu.
          </p>
        </div>

        {/* SEARCH & FILTER CONTROLS BAR */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Search Bar Input */}
          <div className="relative w-full sm:w-full max-w-2xl">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search shortlisted products..."
              className="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200/90 rounded-2xl text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5E3B8C]/30 shadow-2xs"
            />
          </div>

          {/* Category Filter Dropdown */}
          <div className="relative w-full sm:w-auto shrink-0">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full sm:w-44 bg-white border border-slate-200/90 rounded-2xl px-4 py-2.5 pr-8 text-xs font-bold text-[#111111] shadow-2xs focus:outline-none cursor-pointer appearance-none"
            >
              <option value="All">All</option>
              <option value="Cheese & Dairy">Cheese &amp; Dairy</option>
              <option value="Bakery">Bakery</option>
              <option value="Seafood">Seafood</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

        </div>

        {/* SHORTLISTED CARDS GRID */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-2xs hover:shadow-lg hover:border-[#5E3B8C]/30 transition-all duration-300 overflow-hidden flex flex-col justify-between group text-left"
              >
                {/* Top Edge-to-Edge Image Banner with Utensil & Category Badges */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900 group/img">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Utensils Icon Badge Overlay (Top Right) */}
                  <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-[#0D9488]/90 backdrop-blur-xs text-white flex items-center justify-center shadow-md border border-white/30">
                    <Utensils className="w-4 h-4" />
                  </div>

                  {/* Category Pill Badge (Bottom Right on Image) */}
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-[10px] font-bold text-slate-800 uppercase tracking-wider shadow-2xs">
                    {item.category}
                  </div>
                </div>

                {/* Card Content Section */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  
                  {/* Title & Intended Dish */}
                  <div className="space-y-1">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-snug group-hover:text-[#1C0B33] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-400 font-medium pt-0.5">
                      For: <span className="text-slate-800 font-bold">{item.forDish}</span>
                    </p>
                  </div>

                  {/* Note Box if exists */}
                  {notesState[item.id] && (
                    <div className="bg-amber-50 border border-amber-200/80 p-2.5 rounded-xl text-xs text-amber-900 font-medium">
                      💡 {notesState[item.id]}
                    </div>
                  )}

                  {/* Match Score & Emerald Progress Bar */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-black text-slate-900 text-sm sm:text-base">
                        {item.matchPercent}%
                      </span>

                      <span className={`text-[10.5px] font-extrabold px-3 py-0.5 rounded-full ${
                        item.matchType === "EXCELLENT"
                          ? "bg-emerald-100/80 text-emerald-900 border border-emerald-200"
                          : "bg-purple-100/80 text-[#5E3B8C] border border-purple-200"
                      }`}>
                        {item.matchLabel}
                      </span>
                    </div>

                    {/* Emerald Progress Bar Track */}
                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${item.matchPercent}%` }}
                        className="h-full rounded-full bg-[#0D9488] transition-all duration-1000 ease-out"
                      />
                    </div>
                  </div>

                  {/* Bottom Action Row Matching Reference Screenshot */}
                  <div className="flex items-center gap-2.5 pt-2">
                    <button
                      onClick={onNavigateProducts}
                      className="flex-1 py-3 px-5 rounded-full bg-[#1C0B33] hover:bg-[#2B1B4E] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer active:scale-[0.98]"
                    >
                      <span>View Product</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#F5C453]" />
                    </button>

                    <button
                      onClick={() => openNoteModal(item.id)}
                      className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 flex items-center justify-center shrink-0 transition-all cursor-pointer shadow-2xs active:scale-95"
                      title="Chef's Note"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => handleDeleteItem(item.id)}
                      className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 flex items-center justify-center shrink-0 transition-all cursor-pointer shadow-2xs active:scale-95"
                      title="Bookmark"
                    >
                      <Trash2 className="w-4 h-4 text-rose-500" />
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 border border-slate-200/80 text-center space-y-4 max-w-md mx-auto my-8 shadow-2xs">
            <div className="w-14 h-14 rounded-2xl bg-purple-50 text-[#5E3B8C] flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">
              No shortlisted products found
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              Try adjusting your search query or filter settings.
            </p>
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
                <span>Shortlist Note</span>
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
              placeholder="e.g. Request sample batch for recipe testing..."
              className="w-full p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5E3B8C]/30"
            />

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setActiveNoteModalId(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                Cancel
              </button>

              <button
                onClick={saveNote}
                className="px-5 py-2 rounded-xl bg-[#1C0B33] hover:bg-[#2B1B4E] text-white text-xs font-bold cursor-pointer border border-[#F5C453]/30"
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
