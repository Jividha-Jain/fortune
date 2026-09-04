"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  Package,
  X,
  Search,
  Hourglass,
  Users,
  CheckCircle2,
  Calendar,
  Phone,
  Mail,
  Utensils,
  Plus,
  SlidersHorizontal,
  BarChart3,
  User,
  Check,
  ChevronDown,
  MessageSquare,
  Bookmark,
  ChefHat
} from "lucide-react";

import AIPairingSuggestionsSection from "./AIPairingSuggestionsSection";

interface ScreenDashboardProps {
  onNavigateTab: (tab: "products" | "product-detail" | "recommendations" | "mymenu") => void;
}

export default function ScreenDashboard({ onNavigateTab }: ScreenDashboardProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"All" | "Excellent Match" | "Strong Match">("All");
  const [activeNoteModalId, setActiveNoteModalId] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const [notesState, setNotesState] = useState<Record<string, string>>({
    "halloumi-200gm": "Requested sample batch for Paneer Tikka replacement test.",
  });
  const [noteInput, setNoteInput] = useState("");

  const dashboardCards = [
    {
      id: "halloumi-200gm",
      brand: "FORTUNE SELECT",
      title: "Halloumi 200 GM",
      status: "Under Review",
      statusType: "under_review",
      relatedDish: "Paneer Tikka",
      description: "Perfectly firm & flavorful. Ideal for grilling and high-heat cooking. High melting point replacement.",
      date: "1 Mar 2026",
      channel: "Phone",
      channelType: "phone",
      contact: "Priya Mehta",
      contactRole: "Sales Manager",
      matchPercent: 78,
      matchType: "STRONG",
      matchLabel: "Strong Match",
      tags: ["Cheese", "Grilling", "Paneer Replacement"],
      image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=400&q=80",
      stepProgress: 2,
      submittedDate: "1 Mar 2026",
      underReviewNote: "Sample requested",
      productId: "gran-spicco-200gm"
    },
    {
      id: "queso-formage",
      brand: "FIORELLA",
      title: "Queso Formage (Shredded & Cubes)",
      status: "Sales Contacted",
      statusType: "sales_contacted",
      relatedDish: "Alfredo Pasta",
      description: "Rich, creamy and melts beautifully. Perfect for pastas, pizzas, and baked continental dishes.",
      date: "25 Feb 2026",
      channel: "Email",
      channelType: "email",
      contact: "Priya Mehta",
      contactRole: "Sales Manager",
      matchPercent: 95,
      matchType: "EXCELLENT",
      matchLabel: "Excellent Match",
      tags: ["Cheese", "Shredded", "Continental"],
      image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=400&q=80",
      stepProgress: 3,
      submittedDate: "25 Feb 2026",
      salesContactedNote: "In conversation",
      productId: "zanetti-mozzarella-bufala"
    },
    {
      id: "lurpak-butter",
      brand: "LURPAK",
      title: "Lurpak Unsalted Butter 200g",
      status: "Submitted",
      statusType: "submitted",
      relatedDish: "Chocolate Mousse",
      description: "Premium European butter with rich, natural taste. Elevates your desserts, bakery section, and sauces.",
      date: "20 Feb 2026",
      channel: "Phone",
      channelType: "phone",
      contact: "Priya Mehta",
      contactRole: "Sales Manager",
      matchPercent: 94,
      matchType: "EXCELLENT",
      matchLabel: "Excellent Match",
      tags: ["Butter", "Unsalted", "Bakery Use"],
      image: "https://fortunegourmet.com/wp-content/uploads/2025/03/lurpak-500x500.png",
      stepProgress: 1,
      submittedDate: "20 Feb 2026",
      productId: "butter-unsalted-200gm"
    },
  ];

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

  const filteredCards = dashboardCards.filter((item) => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.relatedDish.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeFilter === "All") return matchesSearch;
    return matchesSearch && item.matchLabel === activeFilter;
  });

  return (
    <div className="min-h-screen bg-[#FAF8FD] text-[#111111] pb-16 font-sans relative overflow-hidden antialiased">
      
      {/* Background Decorative Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#241347_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.025] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-gradient-to-bl from-[#D7A742]/12 via-[#241347]/5 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 space-y-8 relative z-10">

        {/* TOP HERO DASHBOARD GREETING & RECOMMENDATION BANNER */}
        <div className="space-y-6">
          <div className="max-w-xl space-y-3 text-left">
            <div className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#241347] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D7A742] animate-pulse" />
              <Sparkles className="w-3.5 h-3.5 text-[#241347]" />
              <span>Executive Kitchen Intelligence</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-serif text-[#111111] font-normal tracking-[-0.02em] leading-tight">
              Good morning,<br />
              <span className="font-bold text-[#241347] font-serif bg-gradient-to-r from-[#241347] via-[#3B1F70] to-[#241347] bg-clip-text text-transparent">Taj Hotel Mumbai</span>
            </h1>

            <div className="w-16 h-[3px] bg-gradient-to-r from-[#D7A742] to-[#E5BC5E] rounded-full my-2 shadow-xs" />

            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Here&apos;s what Fortune found for your signature autumn menu.
            </p>
          </div>

          {/* HERO BANNER CARD */}
          <div className="w-full bg-gradient-to-r from-[#1F0E37] via-[#1A0A30] to-[#140626] rounded-[28px] p-8 sm:p-10 text-white shadow-2xl border border-[#D7A742]/30 relative z-10 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 text-left">
            
            {/* Left Content */}
            <div className="w-full lg:w-[55%] space-y-5 relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#1C0B33]/80 backdrop-blur-md border border-[#D7A742]/60 px-3.5 py-1.5 rounded-lg text-[#EBB738] text-[11px] font-bold tracking-widest uppercase shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#EBB738]" />
                <span>FORTUNE CULINARY PAIRING ENGINE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif leading-[1.15] tracking-tight">
                <span className="text-[#F5C453] font-normal block font-serif">12 Fortune products</span>
                <span className="text-white font-normal block font-serif mt-1">match your menu</span>
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md font-normal">
                Based on 42 dishes analyzed from your current Wasabi &amp; Shamiana autumn dining menus. Discover direct cold-chain replacements, artisanal certifications, and higher kitchen yield.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  onClick={() => onNavigateTab("products")}
                  className="px-7 py-3.5 rounded-xl bg-[#E5B83B] hover:bg-[#F3C74C] text-[#1C0B33] font-bold text-xs uppercase tracking-wider flex items-center gap-2.5 shadow-lg transition-all active:scale-[0.98] cursor-pointer"
                >
                  <span>View Matches</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigateTab("recommendations")}
                  className="px-7 py-3.5 rounded-xl bg-transparent hover:bg-white/10 border border-[#D7A742]/60 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2.5 backdrop-blur-md active:scale-[0.98] cursor-pointer"
                >
                  <span>Explore Recommendations</span>
                  <Package className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Right Side Dish Image */}
            <div className="relative w-full lg:w-96 h-52 sm:h-64 rounded-2xl overflow-hidden border border-[#D7A742]/30 shadow-xl shrink-0">
              <Image
                src="/image/Dashboard.png"
                alt="Executive Gourmet Dish Presentation"
                fill
                unoptimized
                className="object-cover"
                priority
              />
            </div>

          </div>
        </div>

        {/* MATCHED PRODUCTS READY FOR ORDER - EXACT 1:1 CARD DESIGN MATCH */}
        <div className="space-y-6 pt-4 text-left">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
            <div>
              <div className="text-[10px] uppercase font-bold tracking-[0.22em] text-[#5E3B8C] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#5E3B8C]" />
                <span>MATCHED PRODUCTS READY FOR ORDER</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif text-[#111111] font-bold mt-0.5 tracking-tight">
                Recommended for Your Kitchen
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-1">
                Calibrated with your exact signature recipes for seamless kitchen switchovers.
              </p>
            </div>

            {/* Search and filter options */}
            <div className="flex items-center gap-2 overflow-x-auto shrink-0">
              {(["All", "Excellent Match", "Strong Match"] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    activeFilter === filter
                      ? "bg-[#1C0B33] text-white shadow-2xs"
                      : "bg-white border border-slate-200/90 text-slate-700 hover:bg-purple-50 hover:text-[#5E3B8C]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* 3 PRODUCT CARDS USING EXACT PIXEL-PERFECT HORIZONTAL LAYOUT */}
          <div className="space-y-4">
            {filteredCards.map((item) => {
              const hasNote = Boolean(notesState[item.id]);

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-2xs hover:shadow-md transition-all duration-300 text-left flex flex-col lg:flex-row gap-6 justify-between items-stretch group"
                >
                  {/* LEFT MAIN CONTENT */}
                  <div className="flex-1 space-y-4">
                    
                    {/* Top Row: Thumbnail + Brand Badge + Product Title + Meta Info */}
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      
                      {/* Image Container with Utensils Icon Badge */}
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                        <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs text-[#5E3B8C] flex items-center justify-center shadow-xs border border-purple-100">
                          <Utensils className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* Title & Metadata */}
                      <div className="space-y-1.5 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                              {item.brand}
                            </span>
                            <h3 className="text-xl font-serif font-bold text-[#111111] group-hover:text-[#1C0B33] transition-colors">
                              {item.title}
                            </h3>
                          </div>

                          {/* AI Match Score Badge */}
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-slate-400 font-medium">Match:</span>
                            <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${
                              item.matchType === "EXCELLENT"
                                ? "bg-emerald-100/70 text-emerald-900"
                                : "bg-purple-100/70 text-[#5E3B8C]"
                            }`}>
                              {item.matchPercent}% {item.matchLabel}
                            </span>
                          </div>
                        </div>

                        {/* Related Dish */}
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium pt-0.5">
                          <ChefHat className="w-3.5 h-3.5 text-purple-600" />
                          <span>Related dish: <strong className="text-slate-800 font-bold">{item.relatedDish}</strong></span>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-slate-600 leading-relaxed font-normal pt-1">
                          {item.description}
                        </p>

                        {/* Chef Note if present */}
                        {hasNote && (
                          <div className="bg-[#FFFBEB] border border-[#FDE68A] p-2.5 rounded-xl flex items-center gap-2 text-xs text-[#92400E] font-medium mt-1">
                            <MessageSquare className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                            <span>Note: {notesState[item.id]}</span>
                          </div>
                        )}

                        {/* Tags */}
                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                          {item.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-[11px] font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* TIMELINE STEPPER (4 STAGES) */}
                    <div className="pt-4 border-t border-slate-100">
                      <div className="relative flex items-center justify-between max-w-xl mx-auto px-4">
                        <div className="absolute left-6 right-6 top-3.5 h-[2px] bg-slate-200 -z-0" />
                        <div 
                          className="absolute left-6 top-3.5 h-[2px] bg-purple-700 transition-all duration-500 -z-0"
                          style={{
                            width: item.stepProgress === 1 ? "0%" : item.stepProgress === 2 ? "33%" : item.stepProgress === 3 ? "66%" : "100%"
                          }}
                        />

                        {/* Stage 1 */}
                        <div className="relative z-10 flex flex-col items-center text-center">
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                            item.stepProgress >= 1 
                              ? "bg-[#1C0B33] text-white shadow-xs" 
                              : "bg-white border-2 border-slate-300 text-slate-400"
                          }`}>
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <div className="mt-2 space-y-0.5">
                            <div className="text-[11px] font-bold text-slate-900">Recipe Matched</div>
                            <div className="text-[10px] text-slate-400 font-medium">{item.submittedDate}</div>
                          </div>
                        </div>

                        {/* Stage 2 */}
                        <div className="relative z-10 flex flex-col items-center text-center">
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                            item.stepProgress > 2
                              ? "bg-[#1C0B33] text-white"
                              : item.stepProgress === 2
                              ? "bg-amber-500 text-white ring-4 ring-amber-100"
                              : "bg-white border-2 border-slate-300 text-slate-400"
                          }`}>
                            {item.stepProgress > 2 ? <Check className="w-3.5 h-3.5" /> : <div className="w-2 h-2 rounded-full bg-white" />}
                          </div>
                          <div className="mt-2 space-y-0.5">
                            <div className="text-[11px] font-bold text-slate-900">Sample Testing</div>
                            {item.underReviewNote && (
                              <div className="text-[10px] text-slate-400 font-medium">{item.underReviewNote}</div>
                            )}
                          </div>
                        </div>

                        {/* Stage 3 */}
                        <div className="relative z-10 flex flex-col items-center text-center">
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                            item.stepProgress > 3
                              ? "bg-[#1C0B33] text-white"
                              : item.stepProgress === 3
                              ? "bg-[#5E3B8C] text-white ring-4 ring-purple-100"
                              : "bg-white border-2 border-slate-300 text-slate-400"
                          }`}>
                            {item.stepProgress > 3 ? <Check className="w-3.5 h-3.5" /> : <div className="w-2 h-2 rounded-full bg-white" />}
                          </div>
                          <div className="mt-2 space-y-0.5">
                            <div className="text-[11px] font-bold text-slate-900">Sales Contacted</div>
                            {item.salesContactedNote && (
                              <div className="text-[10px] text-slate-400 font-medium">{item.salesContactedNote}</div>
                            )}
                          </div>
                        </div>

                        {/* Stage 4 */}
                        <div className="relative z-10 flex flex-col items-center text-center">
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                            item.stepProgress >= 4
                              ? "bg-emerald-600 text-white"
                              : "bg-white border-2 border-slate-300 text-slate-400"
                          }`}>
                            {item.stepProgress >= 4 ? <Check className="w-3.5 h-3.5" /> : null}
                          </div>
                          <div className="mt-2 space-y-0.5">
                            <div className="text-[11px] font-bold text-slate-900">In Menu</div>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>

                  {/* RIGHT SIDE CONTACT PERSON PANEL */}
                  <div className="w-full lg:w-56 bg-slate-50/80 rounded-2xl p-4 border border-slate-100 flex flex-col justify-between shrink-0 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-purple-100 text-[#5E3B8C] flex items-center justify-center shrink-0">
                        <User className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Contact Person</div>
                        <div className="text-xs font-bold text-slate-900">{item.contact}</div>
                        <div className="text-[10px] text-slate-500 font-medium">{item.contactRole}</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <button
                        onClick={() => onNavigateTab("product-detail")}
                        className="w-full py-2.5 px-3 rounded-xl bg-[#1C0B33] hover:bg-[#2B1B4E] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => openNoteModal(item.id)}
                        className="w-full py-2.5 px-3 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-2xs"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-slate-600" />
                        <span>Chef Note</span>
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* AI PAIRING SUGGESTIONS SECTION */}
        <AIPairingSuggestionsSection onNavigateTab={onNavigateTab} />

      </div>

      {/* CHEF NOTE MODAL FOR DASHBOARD */}
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
