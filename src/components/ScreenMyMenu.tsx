"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Search, 
  Upload, 
  Plus, 
  Sparkles, 
  Edit3, 
  Trash2, 
  Maximize2,
  ChevronDown,
  UtensilsCrossed,
  Filter
} from "lucide-react";

interface ScreenMyMenuProps {
  onNavigateTab: (tab: "products" | "product-detail" | "recommendations" | "mymenu") => void;
}

export default function ScreenMyMenu({ onNavigateTab }: ScreenMyMenuProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedCuisine, setSelectedCuisine] = useState("All Cuisines");

  const menuDishes = [
    {
      id: "dish-1",
      title: "Butter Chicken",
      category: "Indian Main Course",
      cuisine: "North Indian",
      description: "Tender chicken pieces cooked in a rich, creamy tomato-based gravy with aromatic spices and butter.",
      ingredients: "Chicken, Tomatoes, Butter, Cream +more",
      matchPercent: 92,
      matchLabel: "Excellent Match",
      matchColor: "emerald", // emerald match bar
      badge: "AI Analysed",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "dish-2",
      title: "Paneer Tikka",
      category: "Starters",
      cuisine: "North Indian",
      description: "Cottage cheese cubes marinated in spiced yogurt and grilled to perfection in a tandoor.",
      ingredients: "Paneer, Yogurt, Red Chili, Turmeric +more",
      matchPercent: 78,
      matchLabel: "Strong Match",
      matchColor: "emerald",
      badge: "AI Analysed",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "dish-3",
      title: "Veg Biryani",
      category: "Indian Main Course",
      cuisine: "North Indian",
      description: "Fragrant basmati rice layered with spiced vegetables, saffron, and fresh herbs.",
      ingredients: "Basmati Rice, Mixed Vegetables, Saffron, Yogurt +more",
      matchPercent: 71,
      matchLabel: "Potential Match",
      matchColor: "amber",
      badge: "AI Analysed",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "dish-4",
      title: "Alfredo Pasta",
      category: "Continental",
      cuisine: "Italian",
      description: "Creamy fettuccine pasta tossed in a rich parmesan and butter sauce with garlic.",
      ingredients: "Fettuccine Pasta, Heavy Cream, Parmesan, Butter +more",
      matchPercent: 95,
      matchLabel: "Excellent Match",
      matchColor: "emerald",
      badge: "AI Analysed",
      image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "dish-5",
      title: "Grilled Chicken",
      category: "Continental",
      cuisine: "Continental",
      description: "Herb-marinated chicken breast grilled to perfection, served with seasonal vegetables.",
      ingredients: "Chicken Breast, Olive Oil, Rosemary, Thyme +more",
      matchPercent: 82,
      matchLabel: "Strong Match",
      matchColor: "emerald",
      badge: "AI Analysed",
      image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "dish-6",
      title: "Caesar Salad",
      category: "Starters",
      cuisine: "Continental",
      description: "Crisp romaine lettuce with parmesan shavings, croutons, and classic Caesar dressing.",
      ingredients: "Romaine Lettuce, Parmesan, Croutons, Anchovy +more",
      matchPercent: 65,
      matchLabel: "Potential Match",
      matchColor: "amber",
      badge: "AI Analysed",
      image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "dish-7",
      title: "Chocolate Mousse",
      category: "Desserts",
      cuisine: "Continental",
      description: "Rich dark chocolate mousse topped with whipped cream and berry compote.",
      ingredients: "Dark Chocolate, Heavy Cream, Sugar, Eggs +more",
      matchPercent: 88,
      matchLabel: "Excellent Match",
      matchColor: "emerald",
      badge: "AI Analysed",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "dish-8",
      title: "Masala Dosa",
      category: "Breakfast",
      cuisine: "South Indian",
      description: "Crispy fermented crepe filled with spiced potato masala served with coconut chutney and sambar.",
      ingredients: "Rice Batter, Potatoes, Mustard Seeds, Curry Leaves +more",
      matchPercent: 80,
      matchLabel: "Strong Match",
      matchColor: "emerald",
      badge: "AI Analysed",
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const categories = ["All Categories", "Indian Main Course", "Starters", "Continental", "Desserts", "Breakfast"];
  const cuisines = ["All Cuisines", "North Indian", "Italian", "Continental", "South Indian"];

  const filteredDishes = menuDishes.filter((dish) => {
    const matchesSearch = dish.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          dish.ingredients.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === "All Categories" || dish.category === selectedCategory;
    const matchesCuisine = selectedCuisine === "All Cuisines" || dish.cuisine === selectedCuisine;
    return matchesSearch && matchesCat && matchesCuisine;
  });

  return (
    <div className="min-h-screen bg-[#FAF8FD] text-[#111111] pb-16 font-sans antialiased">
      
      {/* Container with theme spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10 space-y-6 sm:space-y-8">
        
        {/* HEADER ROW */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-5">
          <div className="space-y-1 text-left">
            <h1 className="text-3xl sm:text-4xl font-serif text-[#111111] font-bold tracking-tight">
              My Menu
            </h1>
            <p className="text-xs text-slate-500 font-medium">
              Manage your menu items for AI-powered product recommendations.
            </p>
          </div>

          {/* Action Buttons Top Right */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => alert("Bulk Upload modal opened.")}
              className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-2 shadow-2xs transition-all cursor-pointer active:scale-95"
            >
              <Upload className="w-4 h-4 text-slate-600" />
              <span>Bulk Upload</span>
            </button>

            <button
              onClick={() => alert("Add Menu Item form opened.")}
              className="px-5 py-2.5 rounded-xl bg-[#1C0B33] hover:bg-[#2B1B4E] text-[#F5C453] hover:text-white text-xs font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer active:scale-95 border border-[#F5C453]/30"
            >
              <Plus className="w-4 h-4" />
              <span>+ Add Menu Item</span>
            </button>
          </div>
        </div>

        {/* FILTER & SEARCH BAR CONTAINER */}
        <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search menu items..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200/90 rounded-xl text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5E3B8C]/30 transition-all"
            />
          </div>

          {/* Dropdown Filters */}
          <div className="flex items-center gap-3 w-full md:w-auto shrink-0 justify-end">
            
            {/* Category Filter */}
            <div className="relative w-1/2 md:w-44">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200/90 rounded-xl text-xs font-semibold px-3.5 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5E3B8C]/30 appearance-none cursor-pointer pr-8"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-2.5 pointer-events-none" />
            </div>

            {/* Cuisine Filter */}
            <div className="relative w-1/2 md:w-44">
              <select
                value={selectedCuisine}
                onChange={(e) => setSelectedCuisine(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200/90 rounded-xl text-xs font-semibold px-3.5 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5E3B8C]/30 appearance-none cursor-pointer pr-8"
              >
                {cuisines.map((cui) => (
                  <option key={cui} value={cui}>{cui}</option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-2.5 pointer-events-none" />
            </div>

          </div>

        </div>

        {/* 8 DISH CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDishes.map((dish) => {
            const isExcellent = dish.matchColor === "emerald";

            return (
              <div
                key={dish.id}
                className="bg-white rounded-[26px] border border-slate-200/90 hover:border-[#5E3B8C]/40 overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_-8px_rgba(28,11,51,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group text-left relative"
              >
                <div>
                  {/* Top Image Container */}
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={dish.image}
                      alt={dish.title}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C0B33]/90 via-[#1C0B33]/25 to-transparent" />

                    {/* Top Row Badges: Category Left, AI Analysed Right */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                      <span className="bg-[#1C0B33]/90 backdrop-blur-md text-[#F5C453] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-[#F5C453]/40 shadow-xs flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F5C453] animate-pulse" />
                        {dish.category}
                      </span>
                    </div>

                    <div className="absolute top-3.5 right-3.5">
                      <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1 shadow-xs">
                        <Sparkles className="w-3 h-3 text-[#F5C453]" />
                        <span>{dish.badge}</span>
                      </span>
                    </div>

                    {/* Bottom Title & Cuisine Over Image */}
                    <div className="absolute bottom-3.5 left-4 right-4 text-white">
                      <div className="text-[10px] text-[#F5C453] font-extrabold uppercase tracking-[0.18em] mb-0.5">
                        {dish.cuisine}
                      </div>
                      <h3 className="text-2xl font-serif font-bold leading-tight text-white drop-shadow-sm">
                        {dish.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-4">
                    
                    {/* Description */}
                    <p className="text-xs text-slate-600 font-normal leading-relaxed min-h-[38px]">
                      {dish.description}
                    </p>

                    {/* Ingredients Box */}
                    <div className="p-3 rounded-2xl bg-[#F7F4FA] border border-[#E9E1F2] text-xs space-y-1">
                      <div className="text-[9.5px] uppercase font-bold tracking-wider text-[#5E3B8C] flex items-center gap-1">
                        <UtensilsCrossed className="w-3 h-3 text-[#5E3B8C]" />
                        <span>Key Ingredients</span>
                      </div>
                      <div className="text-xs text-slate-800 font-medium">
                        {dish.ingredients}
                      </div>
                    </div>

                    {/* Match Score & Progress Bar */}
                    <div className="space-y-2 pt-1">
                      <div className="flex items-center justify-between text-xs font-bold">
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold">AI Compatibility:</span>
                          <span className="text-[#1C0B33] text-sm font-extrabold">{dish.matchPercent}%</span>
                        </div>

                        <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider shadow-2xs ${
                          isExcellent
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-amber-50 text-amber-800 border border-amber-200"
                        }`}>
                          {dish.matchLabel}
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/60">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            isExcellent
                              ? "bg-gradient-to-r from-[#D7A742] via-emerald-500 to-teal-600"
                              : "bg-gradient-to-r from-amber-400 to-amber-600"
                          }`}
                          style={{ width: `${dish.matchPercent}%` }}
                        />
                      </div>
                    </div>

                  </div>
                </div>

                {/* Card Footer Action Controls */}
                <div className="p-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2.5 bg-slate-50/70">
                  <button
                    onClick={() => onNavigateTab("recommendations")}
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#1C0B33] via-[#2B1B4E] to-[#1C0B33] hover:from-[#2B1B4E] hover:to-[#3C276B] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md active:scale-[0.98] border border-[#F5C453]/20"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#F5C453]" />
                    <span>View Recommendations</span>
                  </button>

                  <button
                    onClick={() => alert(`Edit ${dish.title}`)}
                    className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-purple-50 hover:border-purple-200 text-slate-600 hover:text-[#5E3B8C] transition-colors cursor-pointer shadow-2xs"
                    title="Edit dish"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => alert(`Delete ${dish.title}`)}
                    className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-red-50 hover:border-red-200 text-slate-400 hover:text-red-600 transition-colors cursor-pointer shadow-2xs"
                    title="Delete dish"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
