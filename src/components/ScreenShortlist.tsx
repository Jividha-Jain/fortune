"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Bookmark, 
  Trash2, 
  Download, 
  ArrowRight, 
  Check,
  CheckCircle2, 
  ChevronDown,
  MoreVertical,
  Box,
  BarChart3,
  Link as LinkIcon,
  Snowflake,
  Truck,
  Plane
} from "lucide-react";

interface ScreenShortlistProps {
  onNavigateEnquiries: () => void;
  onNavigateProducts: () => void;
}

export default function ScreenShortlist({ onNavigateEnquiries, onNavigateProducts }: ScreenShortlistProps) {
  const [selectedTab, setSelectedTab] = useState<"products" | "opportunities">("products");
  const [selectedItems, setSelectedItems] = useState<string[]>([
    "zanetti-mozzarella",
    "paysan-butter",
    "fortune-salmon",
    "truffle-paste"
  ]);

  const shortlistData = [
    {
      id: "zanetti-mozzarella",
      category: "DAIRY & CHEESE",
      originFlag: "🇮🇹",
      origin: "ITALY",
      packFormat: "1KG X 6",
      title: "Zanetti Mozzarella di Bufala Campana DOP",
      executiveFit: "Matches 4 active menu items (Margherita, Four Cheese, Caprese). Replaces current local supplier with certified DOP heritage supply chain.",
      relatedDishes: ["Margherita Pizza", "Insalata Caprese", "Wasabi Robata Cheese Gratin"],
      extraDishesCount: 1,
      badgeText: "Mumbai Cold Store Direct",
      badgeType: "green",
      badgeIcon: "snowflake",
      monthlyTarget: "10 Cases / mo",
      image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=400&q=80",
      overlayBadge: "DOP"
    },
    {
      id: "paysan-butter",
      category: "BAKERY & VIENNOISERIE",
      originFlag: "🇫🇷",
      origin: "FRANCE",
      packFormat: "250G X 20",
      title: "Paysan Breton Unsalted Lactic Butter 82%",
      executiveFit: "Essential for Shamiana breakfast pastry lamination and French brioche recipe. Guarantees uniform flakiness and high-melting point tolerance.",
      relatedDishes: ["Breakfast Croissant", "Brioche French Toast"],
      badgeText: "Chilled Airfreight",
      badgeType: "purple",
      badgeIcon: "truck",
      monthlyTarget: "15 Cases / mo",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80",
      overlayBadge: ""
    },
    {
      id: "fortune-salmon",
      category: "SEAFOOD",
      originFlag: "🇳🇴",
      origin: "NORWAY",
      packFormat: "1.8 – 2.2 KG VACUUM",
      title: "Fortune Select Norwegian Salmon Fillet Trim D",
      executiveFit: "Zero water-glaze chilled air-freight guarantees firm sashimi-grade structure for Wasabi sushi counter and Shamiana robata grill.",
      relatedDishes: [],
      badgeText: "Zero Water-Glaze Chilled Air",
      badgeType: "green",
      badgeIcon: "plane",
      monthlyTarget: "8 Cases / mo",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=400&q=80",
      overlayBadge: ""
    },
    {
      id: "truffle-paste",
      category: "SPECIALTY GOURMET",
      originFlag: "🇮🇹",
      origin: "ITALY",
      packFormat: "500G GLASS JAR",
      title: "Tartuflanghe Black Truffle Paste 500g",
      executiveFit: "High concentration mushroom–truffle paste for pasta and signature pizzas. Delivers distinct earthy aroma at stable food-cost margins.",
      relatedDishes: [],
      badgeText: "Alba Truffle Guild Certified",
      badgeType: "purple",
      badgeIcon: "truck",
      monthlyTarget: "4 Jars / mo",
      image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=400&q=80",
      overlayBadge: ""
    }
  ];

  const toggleSelectAll = () => {
    if (selectedItems.length === shortlistData.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(shortlistData.map(item => item.id));
    }
  };

  const toggleItem = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(i => i !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] pb-36 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {/* HEADER HERO SECTION */}
        <div className="relative flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 border-b border-slate-200/60 pb-6 overflow-hidden">
          
          {/* Left Title Info */}
          <div className="space-y-2 max-w-xl z-10 shrink-0">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F4EFFB] border border-[#E2D4F7] text-[10px] font-bold tracking-wider text-[#5E3B8C] uppercase">
              <span>• TAJ EXECUTIVE SELECTION</span>
              <span>•</span>
              <span>RFQ – FY25 – Q2</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-serif text-[#111111] font-normal leading-tight tracking-tight">
              My Shortlist
            </h1>
            <p className="text-sm text-slate-500 font-medium">
              Curated products and menu concepts saved for executive review and contract pricing.
            </p>
          </div>

          {/* Right Header Stats Widgets & Graphic */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 z-10 shrink-0 self-start xl:self-auto">
            {/* Stat 1: Est. Weekly Volume */}
            <div className="bg-white border border-slate-200/80 px-4 py-2.5 rounded-2xl shadow-2xs flex items-center gap-3 shrink-0">
              <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#5E3B8C] flex items-center justify-center shrink-0">
                <Box className="w-4 h-4 text-[#5E3B8C]" />
              </div>
              <div className="text-left whitespace-nowrap">
                <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider whitespace-nowrap">EST. WEEKLY VOLUME</div>
                <div className="text-sm font-bold text-[#111111] whitespace-nowrap">45.0 KG</div>
              </div>
            </div>

            {/* Stat 2: Active Lines */}
            <div className="bg-white border border-slate-200/80 px-4 py-2.5 rounded-2xl shadow-2xs flex items-center gap-3 shrink-0">
              <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#5E3B8C] flex items-center justify-center shrink-0">
                <BarChart3 className="w-4 h-4 text-[#5E3B8C]" />
              </div>
              <div className="text-left whitespace-nowrap">
                <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider whitespace-nowrap">ACTIVE LINES</div>
                <div className="text-sm font-bold text-[#111111] whitespace-nowrap">04 SKUs</div>
              </div>
            </div>

            {/* Stat 3: Direct Cold Chain */}
            <div className="bg-[#F4EFFB]/80 border border-[#E2D4F7] px-4 py-2.5 rounded-2xl shadow-2xs flex items-center gap-3 shrink-0">
              <div className="w-8 h-8 rounded-xl bg-[#5E3B8C]/15 text-[#5E3B8C] flex items-center justify-center shrink-0">
                <LinkIcon className="w-4 h-4 text-[#5E3B8C]" />
              </div>
              <div className="text-left whitespace-nowrap">
                <div className="text-[9px] uppercase font-bold text-[#5E3B8C] tracking-wider whitespace-nowrap">DIRECT COLD CHAIN</div>
                <div className="text-sm font-bold text-[#0D9488] whitespace-nowrap">100% DOP/Air</div>
              </div>
            </div>

            {/* Top Right Cursive Banner */}
            <div className="hidden 2xl:flex items-center gap-2 ml-1 shrink-0">
              <div className="text-right whitespace-nowrap">
                <span className="font-serif italic text-base text-[#3B286D] leading-none block font-semibold drop-shadow-xs">
                  Curated Today
                </span>
                <span className="font-serif italic text-base text-[#3B286D] leading-none block font-semibold drop-shadow-xs">
                  for Greater Menus
                </span>
              </div>
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md relative shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=300&q=80"
                  alt="Gourmet Platter"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>

        </div>

        {/* TABS & FILTER BAR */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          {/* Left Category Tabs */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedTab("products")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer ${
                selectedTab === "products"
                  ? "bg-[#1B0B2E] text-white"
                  : "bg-white border border-slate-200/90 text-slate-700 hover:bg-slate-50"
              }`}
            >
              <span>📦</span>
              <span>Products (4)</span>
            </button>

            <button
              onClick={() => setSelectedTab("opportunities")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer ${
                selectedTab === "opportunities"
                  ? "bg-[#1B0B2E] text-white"
                  : "bg-white border border-slate-200/90 text-slate-700 hover:bg-slate-50"
              }`}
            >
              <span>💡</span>
              <span>Menu Opportunities (2)</span>
            </button>
          </div>

          {/* Right Controls */}
          <div className="flex flex-wrap items-center gap-4 text-xs">
            {/* Select All Checkbox */}
            <label 
              onClick={toggleSelectAll}
              className="flex items-center gap-2 cursor-pointer font-bold text-[#111111] select-none"
            >
              <div className={`w-4 h-4 rounded flex items-center justify-center transition-colors ${
                selectedItems.length === shortlistData.length
                  ? "bg-[#5E3B8C] text-white"
                  : "border border-slate-300 bg-white"
              }`}>
                {selectedItems.length === shortlistData.length && <Check className="w-3 h-3 text-white stroke-[3]" />}
              </div>
              <span>Select All (4 items)</span>
            </label>

            {/* Category Filter Dropdown */}
            <div className="relative">
              <select className="bg-white border border-slate-200/90 rounded-xl px-4 py-2 pr-8 text-xs font-bold text-[#111111] shadow-2xs focus:outline-none cursor-pointer appearance-none">
                <option>All Categories (4)</option>
                <option>Dairy &amp; Cheese</option>
                <option>Bakery &amp; Viennoiserie</option>
                <option>Seafood</option>
                <option>Specialty Gourmet</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Weekly Demand Label */}
            <span className="text-slate-500 font-medium">
              Total Weekly Demand: <strong className="text-[#111111] font-bold">45 KG</strong>
            </span>

            {/* Remove Button */}
            <button
              onClick={() => setSelectedItems([])}
              className="text-red-500 hover:text-red-700 font-bold flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5 text-red-500" />
              <span>Remove Selected</span>
            </button>
          </div>

        </div>

        {/* SHORTLIST CARDS LIST */}
        <div className="space-y-5">
          {shortlistData.map((item) => {
            const isChecked = selectedItems.includes(item.id);

            return (
              <div
                key={item.id}
                className="bg-white rounded-[22px] border border-slate-200/80 p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 hover:shadow-md transition-all duration-300"
              >
                {/* Left Side: Checkbox + Image + Product Details */}
                <div className="flex items-start sm:items-center gap-4 flex-1 w-full lg:w-auto">
                  
                  {/* Purple Square Checkbox */}
                  <div
                    onClick={() => toggleItem(item.id)}
                    className={`w-5 h-5 rounded-md shrink-0 cursor-pointer flex items-center justify-center transition-colors shadow-2xs ${
                      isChecked
                        ? "bg-[#5E3B8C] text-white"
                        : "border border-slate-300 bg-white"
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                  </div>

                  {/* Product Image Container */}
                  <div className="w-28 sm:w-32 h-28 sm:h-32 rounded-2xl overflow-hidden relative shrink-0 shadow-xs border border-slate-200/60">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    {item.overlayBadge && (
                      <div className="absolute bottom-2 right-2 bg-[#111111]/90 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded shadow-xs">
                        {item.overlayBadge}
                      </div>
                    )}
                  </div>

                  {/* Text Details Column */}
                  <div className="space-y-1.5 text-left flex-1 min-w-0">
                    {/* Category & Origin Header Line */}
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex flex-wrap items-center gap-1.5">
                      <span>{item.category}</span>
                      <span className="text-slate-300">|</span>
                      <span>{item.originFlag} {item.origin}</span>
                      <span className="text-slate-300">|</span>
                      <span>PACK: {item.packFormat}</span>
                    </div>

                    {/* Title */}
                    <h4 className="font-serif font-bold text-lg sm:text-xl text-[#111111] leading-tight">
                      {item.title}
                    </h4>

                    {/* Executive Fit Description */}
                    <p className="text-xs text-slate-500 font-normal leading-relaxed pt-0.5">
                      <strong className="font-bold text-[#111111]">Executive Fit:</strong> {item.executiveFit}
                    </p>

                    {/* Related Menu Items Pills */}
                    {item.relatedDishes && item.relatedDishes.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5 pt-1.5 text-xs">
                        <span className="text-[11px] text-slate-400 font-medium">Related Menu Items:</span>
                        {item.relatedDishes.map((dish) => (
                          <span
                            key={dish}
                            className="bg-[#F4EFFB] text-[#5E3B8C] text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-[#E2D4F7]"
                          >
                            {dish}
                          </span>
                        ))}
                        {item.extraDishesCount && (
                          <span className="bg-[#F4EFFB] text-[#5E3B8C] text-[10px] font-semibold px-2 py-0.5 rounded-full border border-[#E2D4F7]">
                            +{item.extraDishesCount} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Side Column: Cold Chain Badge + Target + Action Buttons */}
                <div className="flex flex-col items-stretch lg:items-end justify-between shrink-0 w-full lg:w-64 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100 gap-3">
                  
                  {/* Top Badge Banner & Target */}
                  <div className="text-left lg:text-right space-y-2 w-full">
                    {/* Badge Banner */}
                    <div className="w-full">
                      {item.badgeType === "green" ? (
                        <div className="bg-[#E6F9F0] text-[#0D9488] border border-[#BBF7D0] flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold w-full">
                          {item.badgeIcon === "snowflake" && <Snowflake className="w-4 h-4 text-[#0D9488]" />}
                          {item.badgeIcon === "plane" && <Plane className="w-4 h-4 text-[#0D9488]" />}
                          <span>{item.badgeText}</span>
                        </div>
                      ) : (
                        <div className="bg-[#F4EFFB] text-[#5E3B8C] border border-[#E2D4F7] flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold w-full">
                          <Truck className="w-4 h-4 text-[#5E3B8C]" />
                          <span>{item.badgeText}</span>
                        </div>
                      )}
                    </div>

                    {/* Monthly Target Text */}
                    <div className="text-xs text-slate-500 font-medium text-center lg:text-right">
                      Monthly Target: <strong className="text-[#111111] font-bold">{item.monthlyTarget}</strong>
                    </div>
                  </div>

                  {/* Action Buttons Row */}
                  <div className="flex items-center justify-end gap-2 w-full pt-1">
                    <button
                      onClick={onNavigateProducts}
                      className="border border-slate-200/90 hover:bg-slate-50 text-[#111111] text-xs font-bold px-4 py-2 rounded-xl transition-colors shadow-2xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => alert("Bookmarked product.")}
                      className="border border-slate-200/90 text-slate-400 hover:text-[#5E3B8C] hover:bg-slate-50 p-2 rounded-xl transition-colors shadow-2xs cursor-pointer"
                      title="Bookmark"
                    >
                      <Bookmark className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => alert("More options")}
                      className="border border-slate-200/90 text-slate-400 hover:text-[#111111] hover:bg-slate-50 p-2 rounded-xl transition-colors shadow-2xs cursor-pointer"
                      title="Options"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* BOTTOM FIXED RFQ PROCUREMENT BAR */}
        <div className="fixed bottom-4 left-4 right-4 max-w-7xl mx-auto z-40">
          <div className="bg-[#1B0B2E] text-white rounded-[24px] p-4 sm:p-5 shadow-2xl border border-purple-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-xl">
            
            {/* Left Info */}
            <div className="flex items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-full bg-[#F5C453]/20 border border-[#F5C453]/40 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#F5C453]" />
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>{selectedItems.length} Products Selected for Enquiry</span>
                  <span>•</span>
                  <span className="text-[#F5C453] font-extrabold uppercase">CONTRACT RFQ</span>
                </div>
                <div className="text-[11px] text-slate-300 font-normal mt-0.5">
                  📍 Delivery Destination: <strong className="text-white font-semibold">Taj Mahal Palace, Apollo Bunder, Mumbai</strong>
                </div>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
              <button
                onClick={() => alert("Downloading Spec Sheet (PDF)...")}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-1.5 border border-white/20 transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4 text-white" />
                <span>Export Spec Sheet (PDF)</span>
              </button>

              <button
                onClick={onNavigateEnquiries}
                className="px-5 py-2.5 rounded-xl bg-[#F5C453] hover:bg-[#E5B540] text-[#111111] text-xs font-extrabold flex items-center gap-2 shadow-lg transition-colors cursor-pointer active:scale-[0.98]"
              >
                <span>Request Pricing for Selected ({selectedItems.length} Products)</span>
                <ArrowRight className="w-4 h-4 text-[#111111]" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
