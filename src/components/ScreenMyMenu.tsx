"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Search, 
  Upload, 
  Plus, 
  Sparkles, 
  Trash2, 
  ChevronDown,
  UtensilsCrossed,
  Heart,
  Pencil,
  ArrowRight
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
      ingredientPills: ["Chicken", "Tomatoes", "Butter", "+ more"],
      matchPercent: 92,
      matchLabel: "Excellent Match",
      matchColor: "emerald",
      badge: "AI Analysed",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "dish-2",
      title: "Paneer Tikka",
      category: "Starters",
      cuisine: "North Indian",
      description: "Cottage cheese cubes marinated in spiced yogurt and grilled to perfection in a tandoor.",
      ingredientPills: ["Paneer", "Yogurt", "Red Chili", "+ more"],
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
      ingredientPills: ["Basmati Rice", "Mixed Vegetables", "Saffron", "+ more"],
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
      ingredientPills: ["Fettuccine Pasta", "Heavy Cream", "Parmesan", "+ more"],
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
      ingredientPills: ["Chicken Breast", "Olive Oil", "Rosemary", "+ more"],
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
      ingredientPills: ["Romaine Lettuce", "Parmesan", "Croutons", "+ more"],
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
      ingredientPills: ["Dark Chocolate", "Heavy Cream", "Sugar", "+ more"],
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
      ingredientPills: ["Rice Batter", "Potatoes", "Mustard Seeds", "+ more"],
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
                          dish.ingredientPills.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));
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

        {/* 8 DISH CARDS GRID - EXACT MATCH TO USER REFERENCE SCREENSHOT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDishes.map((dish) => {
            const isPotential = dish.matchLabel === "Potential Match";

            return (
              <div
                key={dish.id}
                className="bg-white rounded-[22px] border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between text-left"
              >
                <div>
                  {/* Top Image Container */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                    <Image
                      src={dish.image}
                      alt={dish.title}
                      fill
                      unoptimized
                      className="object-cover"
                    />

                    {/* Top Left Category Badge with Cloche Icon */}
                    <div className="absolute top-3 left-3 bg-black/45 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-medium flex items-center gap-1.5 border border-white/10 shadow-xs">
                      <UtensilsCrossed className="w-3 h-3 text-white/90" />
                      <span>{dish.category}</span>
                    </div>

                    {/* Top Right AI Badge */}
                    <div className="absolute top-3 right-3 bg-[#170C31]/90 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-medium flex items-center gap-1.5 border border-purple-400/20 shadow-xs">
                      <Sparkles className="w-3 h-3 text-[#F5C453]" />
                      <span>{dish.badge}</span>
                    </div>

                    {/* Bottom Right Circle Heart Bookmark Button */}
                    <button className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-black/60 transition-colors cursor-pointer">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Body Content below Image */}
                  <div className="p-5 space-y-3">
                    
                    {/* Dish Title & Subtitle */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 leading-tight">
                        {dish.title}
                      </h3>
                      <div className="text-xs text-slate-500 font-medium mt-0.5">
                        {dish.cuisine}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-500 leading-relaxed font-normal min-h-[36px]">
                      {dish.description}
                    </p>

                    {/* Ingredients Row with Rounded Pills */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <span className="text-xs font-bold text-slate-800 shrink-0 mr-0.5">Ingredients:</span>
                      {dish.ingredientPills.map((ing, i) => (
                        <span key={i} className="bg-slate-100/90 text-slate-600 text-[11px] font-medium px-2.5 py-0.5 rounded-md">
                          {ing}
                        </span>
                      ))}
                    </div>

                    {/* Match Score & Progress Bar */}
                    <div className="space-y-1.5 pt-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-extrabold text-slate-900 text-sm">{dish.matchPercent}%</span>
                        <span className={`text-[10px] px-3 py-0.5 rounded-full font-bold ${
                          isPotential
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-emerald-50 text-emerald-600 border border-emerald-100"
                        }`}>
                          {dish.matchLabel}
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-300 ${
                            isPotential ? "bg-amber-500" : "bg-emerald-500"
                          }`}
                          style={{ width: `${dish.matchPercent}%` }}
                        />
                      </div>
                    </div>

                  </div>
                </div>

                {/* Card Footer Action Controls */}
                <div className="p-4 pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2.5 bg-white">
                  <button
                    onClick={() => onNavigateTab("recommendations")}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#140A28] hover:bg-[#20113D] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-all cursor-pointer active:scale-[0.98]"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#F5C453]" />
                    <span>View Recommendations</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => alert(`Edit ${dish.title}`)}
                    className="w-9 h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors cursor-pointer shrink-0"
                    title="Edit dish"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => alert(`Delete ${dish.title}`)}
                    className="w-9 h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-500 transition-colors cursor-pointer shrink-0"
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
