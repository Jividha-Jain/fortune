"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  Download, 
  CheckCircle2, 
  Bookmark,
  MapPin,
  Layers,
  BarChart3,
  Lightbulb,
  Plus,
  Users,
  ChevronDown,
  ArrowRight,
  TrendingUp,
  Flame,
  Wine,
  DollarSign,
  FileText,
  Utensils
} from "lucide-react";

interface ScreenAIRecommendationsProps {
  onSelectProduct: (productId: string) => void;
}

export default function ScreenAIRecommendations({ onSelectProduct }: ScreenAIRecommendationsProps) {
  // Default to Stage 3 (NEW MENU IDEAS) as requested by user screenshot
  const [activeStage, setActiveStage] = useState(3);
  const [ideaFilter, setIdeaFilter] = useState("ALL");
  const [selectedHotelDish, setSelectedHotelDish] = useState("Margherita Pizza at Shamiana");
  const [selectedFortuneProduct, setSelectedFortuneProduct] = useState("Puglia Fresh Burrata 200g");

  const pairingOptions = [
    {
      hotelDish: "Margherita Pizza at Shamiana",
      fortuneProduct: "Puglia Fresh Burrata 200g",
      upgradedConcept: "Garden Vegetable & Burrata Pizza",
      marginLift: "+24% Margin",
      priceLift: "+₹450 / Cover",
      description: "Upgrade your standard Margherita Pizza base with imported Puglia Burrata for an opulent vegetarian signature dish.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80",
    },
    {
      hotelDish: "Wild Mushroom Risotto",
      fortuneProduct: "TartufLanghe White Truffle Butter",
      upgradedConcept: "Truffle & Forest Mushroom Risotto",
      marginLift: "+18% Check Lift",
      priceLift: "+₹620 / Cover",
      description: "Finish your existing Mushroom Risotto with authentic Alba Truffle Butter to create tableside aromatic dining theater.",
      image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=400&q=80",
    },
    {
      hotelDish: "Atlantic Salmon Fillet Starter",
      fortuneProduct: "Norwegian Salmon Fillet (Trim D)",
      upgradedConcept: "Cured Salmon Carpaccio",
      marginLift: "-31% Trim Waste",
      priceLift: "+₹580 / Cover",
      description: "Utilize whole Norwegian Salmon cuts across both Wasabi sushi counter and Shamiana dinner menu, drastically reducing trim waste.",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=400&q=80",
    },
    {
      hotelDish: "Standard Grilled Beef Striploin",
      fortuneProduct: "Fortune Australian Wagyu Striploin MB5+",
      upgradedConcept: "Signature Australian Wagyu Striploin MB5+",
      marginLift: "+22% Gross Profit",
      priceLift: "+₹1,400 / Cover",
      description: "Swap standard grain-fed beef with Australian Wagyu MB5+ to command premium steakhouse cover pricing.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const currentPairing = pairingOptions.find(p => p.hotelDish === selectedHotelDish) || pairingOptions[0];

  // STAGE 1: PRODUCT MATCHES (12 items)
  const productMatches = [
    {
      id: "zanetti-mozzarella",
      dishTitle: "Margherita Pizza",
      outlet: "Wasabi & Shamiana • All-Day Dining",
      dishDesc: "Classic Neapolitan thin base with San Marzano tomatoes, fresh basil, and dairy curd.",
      dishTags: ["Italian", "Vegetarian", "Signature Dish"],
      dishImage: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
      productSku: "SKU: FG-ITA-8822",
      productTitle: "Zanetti Mozzarella di Bufala Campana DOP",
      matchPercent: "98% Match",
      productDesc: "Authentic Campana water buffalo milk cheese, rich creaminess with subtle tang.",
      packFormat: "1KG x 6 cases",
      origin: "Campania, Italy (4°C)",
      keyBenefit: "Rich Texture & Authentic Taste",
    },
    {
      id: "fortune-salmon",
      dishTitle: "Pan-Seared Salmon Fillet",
      outlet: "Main Dining • Dinner Menu",
      dishDesc: "Charred asparagus, velouté emulsion, sea salt rub, daily fresh fish program.",
      dishTags: ["Seafood", "High Protein", "Signature Dish"],
      dishImage: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
      productSku: "SKU: FG-SEA-4103",
      productTitle: "Fortune Select Fresh Atlantic Salmon Fillet Trim D",
      matchPercent: "96% Match",
      productDesc: "Direct Norwegian fjord air-import provides zero freeze-thaw tissue damage, yielding firmer flake texture for your charcoal robata and pan-sear.",
      packFormat: "1.8 - 2.2 KG vacuum",
      origin: "Norway (Air Freight, Fresh)",
      keyBenefit: "0% Trim Loss (Trim D)",
    },
    {
      id: "paysan-croissant",
      dishTitle: "Artisanal Breakfast Croissant",
      outlet: "Breakfast & High Tea",
      dishDesc: "Hand-rolled viennoiserie, morning buffet & Sea Lounge high tea service.",
      dishTags: ["Bakery", "French", "Bestseller"],
      dishImage: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
      productSku: "SKU: FG-DAL-3344",
      productTitle: "Paysan Breton Pure Churned Butter 82% Fat",
      matchPercent: "94% Match",
      productDesc: "Replaces generic dairy fat with 82% Brittany unsalted butter, delivering superior lamination honeycombed crumb structure.",
      packFormat: "250G x 20 units",
      origin: "Brittany, France (AOP)",
      keyBenefit: "34°C (Optimal Sheetability)",
    },
    {
      id: "levoni-prosciutto",
      dishTitle: "Charcuterie & Cheese Board",
      outlet: "Bar & Lounge",
      dishDesc: "Cured selections with cornichons, fig jam, grissini, and paired cheeses for evening service.",
      dishTags: ["Gourmet", "European", "Premium"],
      dishImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      productSku: "SKU: FG-CUR-7821",
      productTitle: "Levoni Prosciutto di San Daniele 18-Month DOP",
      matchPercent: "92% Match",
      productDesc: "Provides genuine sweetness and authentic sea-salt dry cure, elevating per-cover cocktail pairing revenue.",
      packFormat: "6.5 KG Whole bone-out",
      origin: "Friuli, Italy (18Mo. Cured)",
      keyBenefit: "Approx. 210 Portions",
    },
  ];

  // STAGE 2: MENU UPGRADES (4 items)
  const menuUpgrades = [
    {
      id: "wagyu-strip-aus",
      dishTitle: "Signature Grilled Beef Striploin",
      outlet: "The Grill Room & Sea Lounge",
      dishDesc: "Currently using standard grain-fed beef. Upgrading to Australian Wagyu MB5+ increases menu cover price by ₹1,400.",
      dishTags: ["Margin Lift +22%", "Texture Upgrade"],
      dishImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      productSku: "SKU: FG-MEAT-9921",
      productTitle: "Fortune Australian Wagyu Striploin MB5+",
      matchPercent: "95% Upgrade",
      productDesc: "Higher intramuscular fat marbling yields superior tenderness and retains juicy texture under high-heat Josper grilling.",
      packFormat: "4.5 KG Whole sub-primal",
      origin: "Australia (Chilled 0-2°C)",
      keyBenefit: "Gross Margin: 68.4%",
    },
    {
      id: "truffle-oil",
      dishTitle: "Wild Mushroom & Truffle Risotto",
      outlet: "Shamiana • Italian Dining",
      dishDesc: "Replacing synthetic truffle aroma with authentic Alba White Truffle Oil for authentic aroma and guest satisfaction.",
      dishTags: ["Authenticity Boost", "High Rating"],
      dishImage: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=600&q=80",
      productSku: "SKU: FG-TRF-2210",
      productTitle: "TartufLanghe White Truffle Oil 250ml",
      matchPercent: "97% Upgrade",
      productDesc: "Infused with genuine Tuber magnatum pico extract, requiring 40% less oil per plate for stronger truffle perfume.",
      packFormat: "250ML Glass Bottle",
      origin: "Alba, Italy (Ambient)",
      keyBenefit: "Cost Savings per Plate: ₹45",
    },
    {
      id: "rougie-duck-fat",
      dishTitle: "Pommes Sarladaises & Crispy Confit",
      outlet: "Bistro & Banquet Dinners",
      dishDesc: "Swapping vegetable frying medium with pure French rendered duck fat for golden, crispy caramelized potato roast.",
      dishTags: ["Flavor Lift", "French Culinary"],
      dishImage: "https://images.unsplash.com/photo-1514944288352-fffac99f0bdf?auto=format&fit=crop&w=600&q=80",
      productSku: "SKU: FG-[#5E3B8C]-441",
      productTitle: "Rougié Rendered Duck Fat 1KG",
      matchPercent: "91% Upgrade",
      productDesc: "100% pure rendered Moulard duck fat provides ultra-high smoke point and rich savory umami finish.",
      packFormat: "1 KG Sealed Can",
      origin: "Perigord, France",
      keyBenefit: "Authentic French Technique",
    },
    {
      id: "levoni-mortadella",
      dishTitle: "Gourmet Panini & Charcuterie Platter",
      outlet: "Harbour Bar & Poolside",
      dishDesc: "Upgrade standard cold cuts to IGP Mortadella with whole Bronte pistachios to justify higher wine-pairing cover charge.",
      dishTags: ["Wine Pairing", "Margin +18%"],
      dishImage: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80",
      productSku: "SKU: FG-CUR-8822",
      productTitle: "Levoni Mortadella Bologna IGP Pistachio",
      matchPercent: "93% Upgrade",
      productDesc: "Slow oven roasted in traditional brick ovens with delicate spice blend and crunchy pistachios.",
      packFormat: "3.0 KG Whole Casing",
      origin: "Bologna, Italy",
      keyBenefit: "Yield: ~150 Portions",
    },
  ];

  // STAGE 3: NEW MENU IDEAS (7 items) - Highlighting Regional Trending Concepts
  const newMenuIdeas = [
    {
      id: "black-cod-japan",
      tagCategory: "Japanese & Asian",
      dishTitle: "Black Cod Miso Saikyo Yaki",
      outlet: "Wasabi by Morimoto • Pan-Asian Fine Dining",
      trendBadge: "🔥 TOP TRENDING IN SOUTH MUMBAI (+34% DEMAND)",
      dishDesc: "Sweet Saikyo white miso marinated Sablefish broiled over charcoal to caramel perfection, served with pickled hajikami ginger.",
      dishImage: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
      productSku: "SKU: FG-SEA-9901",
      productTitle: "Wild Alaskan / Japan Black Cod Gilled (Fortune Select)",
      prepCost: "₹980",
      menuPrice: "₹3,400",
      grossMargin: "71.2%",
      keyIngredients: ["Japan Black Cod Gilled 2.5KG", "Saikyo White Miso", "Mirin Glaze"],
      chefNote: "High oil content prevents flesh drying under salamander. Ideal signature item for Wasabi.",
    },
    {
      id: "truffle-dried",
      tagCategory: "Fine Dining",
      dishTitle: "Alba White Truffle & 24M Parmigiano Tajarin",
      outlet: "Shamiana & Executive Banquet Service",
      trendBadge: "⭐ HIGH PROFIT SPECIAL (+42% MARGIN LIFT)",
      dishDesc: "Fresh hand-cut Piedmontese 40-yolk egg pasta tossed in butter emulsion of 24M Parmigiano Reggiano and shaved Alba truffles.",
      dishImage: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=600&q=80",
      productSku: "SKU: FG-TRF-0012",
      productTitle: "TartufLanghe Freeze-Dried Truffles & Zanetti Parmigiano 24M",
      prepCost: "₹720",
      menuPrice: "₹2,600",
      grossMargin: "72.3%",
      keyIngredients: ["TartufLanghe Freeze Dried Truffles", "Zanetti Parmigiano 24M", "AOP Butter"],
      chefNote: "Freeze-dried truffle slices rehydrate instantly in warm butter, cutting waste to zero.",
    },
    {
      id: "spanish-octopus",
      tagCategory: "Seafood",
      dishTitle: "Galician Charcoal Grilled Octopus (Pulpo a la Gallega)",
      outlet: "Sea Lounge & Poolside Grill",
      trendBadge: "🔥 SUMMER LOUNGE TREND (+28% ORDER RATE)",
      dishDesc: "Smoked paprika-dusted pre-cooked octopus tentacles, charred over charcoal with crushed baby potatoes & extra virgin olive oil.",
      dishImage: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
      productSku: "SKU: FG-OCT-4412",
      productTitle: "Fortune Spanish Octopus Tentacles Cooked (Sous-Vide)",
      prepCost: "₹650",
      menuPrice: "₹2,100",
      grossMargin: "69.0%",
      keyIngredients: ["Fortune Spanish Octopus Tentacles", "Smoked La Vera Paprika", "EVOO"],
      chefNote: "Pre-cooked sous-vide format saves 45 minutes kitchen prep time per batch.",
    },
    {
      id: "wagyu-japan-a5",
      tagCategory: "Fine Dining",
      dishTitle: "Miyazaki A5 Wagyu Tataki with Citrus Ponzu Pearls",
      outlet: "Chef's Table & VIP Suite Dining",
      trendBadge: "👑 ULTRA-LUXURY COVER CHARGE (+₹5,800/COVER)",
      dishDesc: "Flash-seared Japanese A5 Miyazaki beef sliced wafer thin, served with citrus ponzu pearls, micro shiso, and crispy garlic chips.",
      dishImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      productSku: "SKU: FG-BEEF-5501",
      productTitle: "Miyazaki Japanese A5 Wagyu Ribeye (BMS 10-12)",
      prepCost: "₹1,850",
      menuPrice: "₹6,500",
      grossMargin: "71.5%",
      keyIngredients: ["Miyazaki A5 Wagyu Ribeye", "Ponzu Caviar Pearls", "Micro Shiso"],
      chefNote: "Melts at room temperature (25°C). Unmatched luxury presentation for high net worth guests.",
    },
    {
      id: "rougie-foie-gras",
      tagCategory: "High Margin",
      dishTitle: "Pan-Seared Foie Gras with Caramelized Fig Tart",
      outlet: "European Fine Dining Room",
      trendBadge: "🍷 WINE PAIRING BESTSELLER (+45% SOMMELIER ATTACH)",
      dishDesc: "Pan-seared duck foie gras served over puff pastry tart with port wine reduction glaze and fresh caramelized Mission figs.",
      dishImage: "https://images.unsplash.com/photo-1514944288352-fffac99f0bdf?auto=format&fit=crop&w=600&q=80",
      productSku: "SKU: FG-ROU-1120",
      productTitle: "Rougié Duck Foie Gras Bloc & Duck Fat",
      prepCost: "₹890",
      menuPrice: "₹2,950",
      grossMargin: "69.8%",
      keyIngredients: ["Rougié Duck Foie Gras Bloc", "Rougié Duck Fat", "Port Wine Glaze"],
      chefNote: "Direct import ensures consistent texture with minimal rendering loss during flash sear.",
    },
    {
      id: "smoked-salmon-aus",
      tagCategory: "Seafood",
      dishTitle: "Tasmanian Smoked Salmon & Mascarpone Mille-Feuille",
      outlet: "Sunday Champagne Brunch & High Tea",
      trendBadge: "🥂 HIGH TEA BESTSELLER (+38% VOLUME)",
      dishDesc: "Crispy savory puff pastry layered with dill-infused mascarpone cream, cold-smoked salmon ribbon, and caper berries.",
      dishImage: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
      productSku: "SKU: FG-SEA-3301",
      productTitle: "Fortune Tasmanian Smoked Salmon & Zanetti Mascarpone",
      prepCost: "₹450",
      menuPrice: "₹1,850",
      grossMargin: "75.7%",
      keyIngredients: ["Fortune Tasmanian Smoked Salmon", "Zanetti Mascarpone", "Caper Berries"],
      chefNote: "High margin item ideal for high-volume buffet displays and VIP high tea stands.",
    },
    {
      id: "spain-jamon",
      tagCategory: "Charcuterie & Wine Bar",
      dishTitle: "Artisanal Serrano Jamón & Burrata Crostini",
      outlet: "Harbour Bar & Cocktail Lounge",
      trendBadge: "🍷 COCKTAIL BAR APERITIVO FAVORITE",
      dishDesc: "Grilled sourdough crostini topped with fresh creamy burrata, wafer-thin cured ham, and 12-year aged balsamic drizzle.",
      dishImage: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80",
      productSku: "SKU: FG-CUR-9921",
      productTitle: "Consorcio Jamón Serrano Reserva & Zanetti Mozzarella",
      prepCost: "₹520",
      menuPrice: "₹1,950",
      grossMargin: "73.3%",
      keyIngredients: ["Consorcio Jamón Serrano Reserva", "Zanetti Mozzarella", "Aged Balsamic"],
      chefNote: "Fast 3-minute assembly time per order during peak evening bar rushes.",
    },
  ];

  // Filtered Ideas for Stage 3
  const filteredIdeas = newMenuIdeas.filter((idea) => {
    if (ideaFilter === "ALL") return true;
    return idea.tagCategory.toUpperCase() === ideaFilter.toUpperCase();
  });

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] pb-24 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {/* PAGE HERO SECTION */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-slate-200/60 pb-6 overflow-hidden">
          
          {/* Left Text Info */}
          <div className="space-y-2 max-w-2xl z-10 text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F4EFFB] border border-[#E2D4F7] text-[10px] font-bold tracking-wider text-[#5E3B8C] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#5E3B8C]" />
              <span>CULINARY INTELLIGENCE ENGINE</span>
              <span>•</span>
              <span>V2.4 ACTIVE</span>
              <span>•</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-serif text-[#111111] font-normal leading-tight tracking-tight">
              Executive Recommendations
            </h1>
            <p className="text-sm text-slate-500 font-medium">
              Fortune has analyzed your dining menu and identified tailored product matches &amp; culinary concepts.
            </p>
          </div>

          {/* Right Header Widget & Artwork */}
          <div className="flex items-center gap-4 z-10 self-end md:self-auto">
            {/* Location & Index Status Pill */}
            <div className="bg-white/90 backdrop-blur-md border border-slate-200/90 px-4 py-2.5 rounded-2xl shadow-2xs flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#5E3B8C] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-[#5E3B8C]" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-[#111111]">
                  Taj Mahal Palace Mumbai <span className="text-slate-400 font-normal">•</span> 142 Items Indexed
                </div>
                <div className="text-[10px] text-slate-400 font-medium">Last synced: Today 08:45 AM</div>
              </div>
            </div>

            {/* Smarter Menus Cursive Text & Top Corner Plate Image */}
            <div className="hidden lg:flex items-center gap-2">
              <div className="text-right">
                <span className="font-serif italic text-lg text-[#3B286D] leading-none block font-semibold drop-shadow-xs">
                  Smarter Menus
                </span>
                <span className="font-serif italic text-lg text-[#3B286D] leading-none block font-semibold drop-shadow-xs">
                  Stronger Kitchens
                </span>
              </div>
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md relative shrink-0 -mr-2">
                <Image
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80"
                  alt="Gourmet Dish"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE CHEF'S CULINARY UPGRADE ENGINE: DISH + PRODUCT ➔ UPGRADED GOURMET CONCEPT */}
        <div className="bg-[#1C0B33] text-white rounded-[24px] p-6 lg:p-7 shadow-xl border border-[#D7A742]/40 relative overflow-hidden text-left space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#D7A742]/20 border border-[#D7A742]/40 flex items-center justify-center text-[#EBB738]">
                <Sparkles className="w-5 h-5 text-[#EBB738]" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-[#F5C453]">
                  Chef&apos;s Culinary Upgrade Engine
                </h3>
                <p className="text-xs text-slate-300 font-medium">
                  Select your hotel&apos;s current menu item + Fortune Gourmet product to generate upgraded high-margin gourmet concepts.
                </p>
              </div>
            </div>
            
            <div className="bg-[#2D164F] px-3.5 py-1.5 rounded-full border border-[#D7A742]/30 text-[11px] font-bold text-[#EBB738] shrink-0">
              ⚡ Dish + Ingredient Matcher
            </div>
          </div>

          {/* Interactive Formula Selection Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            
            {/* Step 1: Hotel's Existing Dish */}
            <div className="md:col-span-5 bg-white/5 border border-white/10 rounded-xl p-3 space-y-1">
              <label className="text-[10px] uppercase font-bold text-[#EBB738] block tracking-wider">1. Your Current Hotel Dish</label>
              <select
                value={selectedHotelDish}
                onChange={(e) => {
                  setSelectedHotelDish(e.target.value);
                  const matched = pairingOptions.find(p => p.hotelDish === e.target.value);
                  if (matched) setSelectedFortuneProduct(matched.fortuneProduct);
                }}
                className="w-full bg-[#2A1548] text-white border border-[#D7A742]/40 rounded-lg p-2 text-xs font-semibold focus:outline-none cursor-pointer"
              >
                {pairingOptions.map(p => (
                  <option key={p.hotelDish} value={p.hotelDish}>{p.hotelDish}</option>
                ))}
              </select>
            </div>

            {/* Plus Indicator */}
            <div className="md:col-span-1 flex items-center justify-center font-bold text-xl text-[#EBB738]">
              +
            </div>

            {/* Step 2: Fortune Gourmet Ingredient */}
            <div className="md:col-span-6 bg-white/5 border border-white/10 rounded-xl p-3 space-y-1">
              <label className="text-[10px] uppercase font-bold text-[#EBB738] block tracking-wider">2. Fortune Gourmet Product</label>
              <select
                value={selectedFortuneProduct}
                onChange={(e) => {
                  setSelectedFortuneProduct(e.target.value);
                  const matched = pairingOptions.find(p => p.fortuneProduct === e.target.value);
                  if (matched) setSelectedHotelDish(matched.hotelDish);
                }}
                className="w-full bg-[#2A1548] text-white border border-[#D7A742]/40 rounded-lg p-2 text-xs font-semibold focus:outline-none cursor-pointer"
              >
                {pairingOptions.map(p => (
                  <option key={p.fortuneProduct} value={p.fortuneProduct}>{p.fortuneProduct}</option>
                ))}
              </select>
            </div>

          </div>

          {/* Active Combination Result Card */}
          {currentPairing && (
            <div className="bg-gradient-to-r from-[#2D164F] to-[#200B3B] border border-[#D7A742]/50 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden relative shrink-0 border border-[#D7A742]/40 shadow-sm">
                  <Image src={currentPairing.image} alt={currentPairing.upgradedConcept} fill unoptimized className="object-cover" />
                </div>
                <div>
                  <div className="text-[10px] text-[#EBB738] uppercase font-bold tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#EBB738]" />
                    <span>RECOMMENDED GOURMET SIGNATURE DISH</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-serif font-bold text-white mt-0.5">{currentPairing.upgradedConcept}</h4>
                  <p className="text-xs text-slate-300 font-normal leading-snug max-w-xl">{currentPairing.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <div className="bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 px-3.5 py-2 rounded-xl text-center">
                  <div className="text-[9px] uppercase font-bold tracking-wider">PROJECTED MARGIN</div>
                  <div className="text-xs font-bold font-serif">{currentPairing.marginLift}</div>
                </div>

                <button
                  onClick={() => alert("Added " + currentPairing.upgradedConcept + " recipe proposal to your executive shortlist!")}
                  className="px-4 py-2.5 rounded-xl bg-[#D7A742] hover:bg-[#E5BC5E] text-[#1C0B33] font-bold text-xs shadow-md transition-colors cursor-pointer active:scale-[0.98]"
                >
                  Add to Proposal
                </button>
              </div>
            </div>
          )}
        </div>

        {/* 3 RECOMMENDATION STAGE CARDS (Matching Reference Image Pixel-for-Pixel) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: PRODUCT MATCHES */}
          <button
            onClick={() => setActiveStage(1)}
            className={`p-6 rounded-[22px] text-left transition-all duration-300 relative cursor-pointer ${
              activeStage === 1
                ? "bg-[#F5EFFF] border-2 border-[#6B4699] shadow-md"
                : "bg-white border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:border-[#6B4699]/40"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#6B4699]/15 text-[#6B4699] flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <span className="bg-[#5E3B8C] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md">
                12 ITEMS
              </span>
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111] mt-4">
              1. PRODUCT MATCHES
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-1">
              Products that fit what you already serve.
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/80 border border-[#6B4699]/30 text-[11px] font-bold text-[#6B4699]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#6B4699]" />
              <span>High Affinity Score Selected</span>
              <ChevronDown className="w-3.5 h-3.5 -rotate-90 ml-0.5" />
            </div>
          </button>

          {/* Card 2: MENU UPGRADES */}
          <button
            onClick={() => setActiveStage(2)}
            className={`p-6 rounded-[22px] text-left transition-all duration-300 relative cursor-pointer ${
              activeStage === 2
                ? "bg-[#F5EFFF] border-2 border-[#6B4699] shadow-md"
                : "bg-white border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:border-[#6B4699]/40"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#6B4699]/15 text-[#6B4699] flex items-center justify-center">
                <BarChart3 className="w-5 h-5" />
              </div>
              <span className="bg-[#5E3B8C] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md">
                4 ITEMS
              </span>
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111] mt-4">
              2. MENU UPGRADES
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-1">
              Improve dishes already on your menu.
            </p>
            <div className="mt-4 text-[11px] font-bold text-[#6B4699] flex items-center gap-1 hover:underline">
              <span>Margin &amp; Texture Lift</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </button>

          {/* Card 3: NEW MENU IDEAS (Highlighted Amber Card from User Screenshot) */}
          <button
            onClick={() => setActiveStage(3)}
            className={`p-6 rounded-[22px] text-left transition-all duration-300 relative cursor-pointer ${
              activeStage === 3
                ? "bg-[#FFF9EE] border-2 border-[#D9822B] shadow-md ring-2 ring-[#D9822B]/20"
                : "bg-white border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:border-[#D9822B]/40"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#FFF3DF] text-[#D9822B] flex items-center justify-center">
                <Lightbulb className="w-5 h-5" />
              </div>
              <span className="bg-[#D9822B] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md">
                7 ITEMS
              </span>
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111] mt-4">
              3. NEW MENU IDEAS
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-1">
              Discover dishes you could introduce.
            </p>
            <div className="mt-4 text-[11px] font-bold text-[#D9822B] flex items-center gap-1 hover:underline">
              <span>Regional Trending Trends</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </button>

        </div>

        {/* STAGE 3 VIEW: NEW MENU IDEAS (OPENED UPON CLICKING CARD 3) */}
        {activeStage === 3 && (
          <div className="space-y-6 animate-fade-in text-left">
            
            {/* Stage 3 Header Bar */}
            <div className="bg-gradient-to-r from-[#FFF9EE] via-white to-purple-50/40 p-6 rounded-[24px] border border-[#F5E6BE] shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#D9822B] uppercase tracking-wider">
                  <Flame className="w-4 h-4 text-[#D9822B]" />
                  <span>STAGE 3: REGIONAL TRENDING CULINARY CONCEPTS (7 CONCEPTS)</span>
                </div>
                <h2 className="text-2xl font-serif font-bold text-[#111111]">
                  New Menu Ideas Curated for Taj Mumbai
                </h2>
                <p className="text-xs text-slate-500 font-medium max-w-xl">
                  High-margin dish concepts trending across premier luxury hotel outlets in South Mumbai, Dubai, and Singapore.
                </p>
              </div>

              {/* Category Filter Pills for New Menu Ideas */}
              <div className="flex flex-wrap items-center gap-2 shrink-0">
                {["ALL", "Fine Dining", "Seafood", "Japanese & Asian", "High Margin"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setIdeaFilter(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      ideaFilter === cat
                        ? "bg-[#D9822B] text-white shadow-xs"
                        : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* 7 NEW MENU IDEA CARDS GRID */}
            <div className="grid grid-cols-1 gap-6">
              {filteredIdeas.map((idea) => (
                <div
                  key={idea.id}
                  className="bg-white rounded-[24px] border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col lg:flex-row hover:shadow-md transition-all duration-300 group"
                >
                  {/* Left: Dish Concept Photo & Badges (40%) */}
                  <div className="w-full lg:w-[40%] relative min-h-[220px] lg:min-h-[260px] overflow-hidden">
                    <Image
                      src={idea.dishImage}
                      alt={idea.dishTitle}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    <div className="absolute top-3 left-3 bg-[#D9822B] text-white font-bold text-[9px] px-2.5 py-1 rounded-md uppercase tracking-wider shadow-xs">
                      NEW DISH CONCEPT
                    </div>

                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-amber-300 font-bold text-[10px] px-2.5 py-1 rounded-md border border-amber-400/30">
                      {idea.tagCategory}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                      <div className="text-[10px] text-amber-200 font-bold tracking-wider uppercase flex items-center gap-1">
                        <Utensils className="w-3 h-3 text-amber-300" />
                        <span>{idea.outlet}</span>
                      </div>
                      <h3 className="font-serif font-bold text-xl leading-tight">
                        {idea.dishTitle}
                      </h3>
                    </div>
                  </div>

                  {/* Right: Recipe Concept Breakdown & Financial Metrics (60%) */}
                  <div className="w-full lg:w-[60%] p-6 flex flex-col justify-between space-y-4 text-left">
                    <div className="space-y-3">
                      
                      {/* Top Trend Metric Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="bg-[#FFF3DF] text-[#D9822B] border border-[#F5E6BE] text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                          <span>{idea.trendBadge}</span>
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 font-semibold">{idea.productSku}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-600 font-normal leading-relaxed">
                        {idea.dishDesc}
                      </p>

                      {/* Key Product Match */}
                      <div className="p-3 bg-[#F8F5FD] border border-purple-100 rounded-xl flex items-center justify-between gap-3 text-xs">
                        <div>
                          <div className="text-[9px] font-bold uppercase tracking-wider text-[#5E3B8C]">RECOMMENDED INGREDIENT MATCH</div>
                          <div className="font-bold text-[#111111] mt-0.5">{idea.productTitle}</div>
                        </div>
                        <button
                          onClick={() => onSelectProduct(idea.id)}
                          className="text-[11px] font-bold text-[#5E3B8C] hover:underline flex items-center gap-1 shrink-0 cursor-pointer"
                        >
                          <span>View SKU</span>
                          <ArrowRight className="w-3 h-3 text-[#5E3B8C]" />
                        </button>
                      </div>

                      {/* 3 Financial Metrics (Prep Cost, Target Price, Gross Margin %) */}
                      <div className="grid grid-cols-3 gap-3 pt-1 text-xs">
                        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-left">
                          <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">EST. PREP COST</div>
                          <div className="font-serif font-bold text-sm text-[#111111] mt-0.5">{idea.prepCost}</div>
                        </div>
                        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-left">
                          <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">TARGET MENU PRICE</div>
                          <div className="font-serif font-bold text-sm text-[#111111] mt-0.5">{idea.menuPrice}</div>
                        </div>
                        <div className="bg-[#E6F9F0] border border-[#BBF7D0] rounded-xl p-3 text-left">
                          <div className="text-[9px] uppercase font-bold text-[#0D9488] tracking-wider">GROSS MARGIN</div>
                          <div className="font-serif font-bold text-sm text-[#0D9488] mt-0.5">{idea.grossMargin}</div>
                        </div>
                      </div>

                      {/* Chef's Note */}
                      <div className="text-[11px] text-slate-500 italic bg-slate-50 p-2.5 rounded-xl border border-slate-200/60">
                        <strong className="text-slate-700 not-italic font-bold">Executive Chef Note:</strong> {idea.chefNote}
                      </div>

                    </div>

                    {/* Footer Action Buttons */}
                    <div className="flex flex-wrap items-center justify-end gap-3 pt-2 border-t border-slate-100">
                      <button
                        onClick={() => alert(`Downloading Spec Sheet & Recipe Card for ${idea.dishTitle}...`)}
                        className="border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
                      >
                        <FileText className="w-3.5 h-3.5 text-slate-600" />
                        <span>Recipe &amp; Spec Sheet (PDF)</span>
                      </button>

                      <button
                        onClick={() => alert(`Requested tasting sample for ${idea.productTitle}.`)}
                        className="bg-[#D9822B] hover:bg-[#E58D35] text-white text-xs font-bold px-5 py-2 rounded-xl shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer active:scale-[0.98]"
                      >
                        <Plus className="w-3.5 h-3.5 text-white" />
                        <span>Request Tasting Sample</span>
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* STAGE 1 VIEW: PRODUCT MATCHES */}
        {activeStage === 1 && (
          <div className="space-y-6 animate-fade-in text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#111111] leading-tight">
                  Direct SKU Substitutions &amp; Direct Matches
                </h2>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Showing top high-affinity culinary alignments for Mumbai kitchen operations.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {productMatches.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-[24px] border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col lg:flex-row hover:shadow-md transition-all duration-300"
                >
                  <div className="w-full lg:w-[44%] p-6 bg-slate-50/30 border-b lg:border-b-0 lg:border-r border-slate-200/80 flex items-center gap-4 sm:gap-5">
                    <div className="w-36 sm:w-44 h-36 sm:h-44 rounded-2xl overflow-hidden relative shrink-0 shadow-xs border border-slate-200/60">
                      <Image src={item.dishImage} alt={item.dishTitle} fill className="object-cover" />
                      <div className="absolute top-2 left-2 z-10 bg-[#111111] text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow-xs">
                        YOUR DISH
                      </div>
                    </div>
                    <div className="space-y-2.5 text-left flex-1">
                      <div className="space-y-1">
                        <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">{item.outlet}</div>
                        <h4 className="font-serif font-bold text-lg sm:text-xl text-[#111111] leading-tight">{item.dishTitle}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed font-normal">{item.dishDesc}</p>
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                        {item.dishTags.map((tag) => (
                          <span key={tag} className="bg-[#F4EFFB] text-[#5E3B8C] text-[10px] font-semibold px-3 py-1 rounded-full border border-[#E2D4F7]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-[56%] p-6 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="bg-[#E6F9F0] text-[#0D9488] text-[10px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1 border border-[#BBF7D0]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488]" />
                            <span>{item.matchPercent}</span>
                          </span>
                          <span className="bg-[#E6F9F0] text-[#0D9488] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider border border-[#BBF7D0]">
                            FORTUNE SPECIALTY MATCH
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 font-semibold">{item.productSku}</span>
                      </div>

                      <div>
                        <h4 className="font-serif font-bold text-lg sm:text-xl text-[#111111] leading-tight">{item.productTitle}</h4>
                        <p className="text-xs text-slate-500 font-normal leading-relaxed mt-1">{item.productDesc}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
                        <div className="bg-[#F8F9FA] border border-slate-200/80 rounded-xl p-3 text-left">
                          <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">PACK FORMAT</div>
                          <div className="font-bold text-[#111111] mt-0.5 text-[11px] truncate">{item.packFormat}</div>
                        </div>
                        <div className="bg-[#F8F9FA] border border-slate-200/80 rounded-xl p-3 text-left">
                          <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">ORIGIN</div>
                          <div className="font-bold text-[#111111] mt-0.5 text-[11px] truncate">{item.origin}</div>
                        </div>
                        <div className="bg-[#F4EFFB]/80 border border-[#E2D4F7] rounded-xl p-3 text-left">
                          <div className="text-[9px] uppercase font-bold text-[#5E3B8C] tracking-wider">KEY BENEFIT</div>
                          <div className="font-bold text-[#5E3B8C] mt-0.5 text-[11px] truncate">{item.keyBenefit}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
                      <button onClick={() => onSelectProduct(item.id)} className="border border-slate-200/90 hover:bg-slate-50 text-[#111111] text-xs font-bold px-4 py-2 rounded-xl transition-colors shadow-2xs">
                        View Product
                      </button>
                      <button onClick={() => alert("Product added to Shortlist.")} className="bg-[#1B0B2E] hover:bg-[#2B1B4E] text-white text-xs font-bold px-5 py-2 rounded-xl shadow-xs transition-colors flex items-center gap-1.5 active:scale-[0.98]">
                        <Plus className="w-3.5 h-3.5 text-white" />
                        <span>Add to Shortlist</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STAGE 2 VIEW: MENU UPGRADES */}
        {activeStage === 2 && (
          <div className="space-y-6 animate-fade-in text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#111111] leading-tight">
                  Menu Upgrades — Margin &amp; Texture Lift
                </h2>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Premium ingredient swaps to boost dish margin by 14-22% and elevate guest ratings.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {menuUpgrades.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-[24px] border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col lg:flex-row hover:shadow-md transition-all duration-300"
                >
                  <div className="w-full lg:w-[44%] p-6 bg-slate-50/30 border-b lg:border-b-0 lg:border-r border-slate-200/80 flex items-center gap-4 sm:gap-5">
                    <div className="w-36 sm:w-44 h-36 sm:h-44 rounded-2xl overflow-hidden relative shrink-0 shadow-xs border border-slate-200/60">
                      <Image src={item.dishImage} alt={item.dishTitle} fill className="object-cover" />
                      <div className="absolute top-2 left-2 z-10 bg-[#5E3B8C] text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow-xs">
                        CURRENT MENU ITEM
                      </div>
                    </div>
                    <div className="space-y-2.5 text-left flex-1">
                      <div className="space-y-1">
                        <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">{item.outlet}</div>
                        <h4 className="font-serif font-bold text-lg sm:text-xl text-[#111111] leading-tight">{item.dishTitle}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed font-normal">{item.dishDesc}</p>
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                        {item.dishTags.map((tag) => (
                          <span key={tag} className="bg-[#FEF5E3] text-[#B88726] text-[10px] font-semibold px-3 py-1 rounded-full border border-[#F5E6BE]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-[56%] p-6 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="bg-[#E6F9F0] text-[#0D9488] text-[10px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1 border border-[#BBF7D0]">
                          <TrendingUp className="w-3.5 h-3.5 text-[#0D9488]" />
                          <span>{item.matchPercent}</span>
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 font-semibold">{item.productSku}</span>
                      </div>

                      <div>
                        <h4 className="font-serif font-bold text-lg sm:text-xl text-[#111111] leading-tight">{item.productTitle}</h4>
                        <p className="text-xs text-slate-500 font-normal leading-relaxed mt-1">{item.productDesc}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
                        <div className="bg-[#F8F9FA] border border-slate-200/80 rounded-xl p-3 text-left">
                          <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">PACK FORMAT</div>
                          <div className="font-bold text-[#111111] mt-0.5 text-[11px] truncate">{item.packFormat}</div>
                        </div>
                        <div className="bg-[#F8F9FA] border border-slate-200/80 rounded-xl p-3 text-left">
                          <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">ORIGIN</div>
                          <div className="font-bold text-[#111111] mt-0.5 text-[11px] truncate">{item.origin}</div>
                        </div>
                        <div className="bg-[#E6F9F0] border border-[#BBF7D0] rounded-xl p-3 text-left">
                          <div className="text-[9px] uppercase font-bold text-[#0D9488] tracking-wider">MARG LIFT</div>
                          <div className="font-bold text-[#0D9488] mt-0.5 text-[11px] truncate">{item.keyBenefit}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
                      <button onClick={() => onSelectProduct(item.id)} className="border border-slate-200/90 hover:bg-slate-50 text-[#111111] text-xs font-bold px-4 py-2 rounded-xl transition-colors shadow-2xs">
                        View SKU
                      </button>
                      <button onClick={() => alert("Added to menu upgrade shortlist.")} className="bg-[#1B0B2E] hover:bg-[#2B1B4E] text-white text-xs font-bold px-5 py-2 rounded-xl shadow-xs transition-colors flex items-center gap-1.5 active:scale-[0.98]">
                        <Plus className="w-3.5 h-3.5 text-white" />
                        <span>Apply Upgrade</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BOTTOM LOAD & EXPORT BAR */}
        <div className="bg-white border border-slate-200/80 rounded-[24px] p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#5E3B8C]/15 text-[#5E3B8C] flex items-center justify-center shrink-0">
              <Users className="w-4.5 h-4.5" />
            </div>
            <span className="text-xs text-slate-600 font-semibold">
              Showing recommendations tailored for Taj Mahal Palace Mumbai executive kitchens.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => alert("Exporting full AI Recommendation Report (PDF)...")}
              className="px-6 py-2.5 rounded-xl bg-[#1B0B2E] hover:bg-[#2B1B4E] text-white text-xs font-bold flex items-center gap-2 shadow-md transition-colors active:scale-[0.98] cursor-pointer"
            >
              <Download className="w-4 h-4 text-white" />
              <span>Export Full AI Report (PDF)</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

