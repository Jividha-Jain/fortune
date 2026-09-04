"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ArrowDown, 
  ChefHat, 
  X
} from "lucide-react";

interface ScreenLiveAnalysisProps {
  onRestart?: () => void;
}

const menuMatches = [
  {
    id: "pizza-1",
    dishName: "Margherita Pizza",
    dishCategory: "A la Carte • Dinner",
    dishImage: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80",
    detectedIngredients: "Mozzarella, San Marzano Tomato, Fresh Basil, Extra Virgin Olive Oil",
    confidence: "98%",
    fortuneProduct: "Zanetti Mozzarella di Bufala Campana DOP",
    fortuneCategory: "Dairy & Italian Specialty",
    fortuneImage: "https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=600&q=80",
    origin: "Campania, Italy",
    packSize: "1 KG x 12",
    valueAdd: "Authentic DOP certification, 22% higher melt yield",
    costImpact: "-4.2% per serving",
    qualityIndex: "Tier 1 Artisanal",
  },
  {
    id: "pasta-2",
    dishName: "Tagliatelle al Tartufo",
    dishCategory: "Primi Piatti • Dinner",
    dishImage: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
    detectedIngredients: "Fresh Egg Pasta, Black Truffle, Parmigiano Reggiano, Cultured Butter",
    confidence: "96%",
    fortuneProduct: "Sabatino Tartufi Black Winter Truffle Oil & Cream",
    fortuneCategory: "Truffle & Specialty Oils",
    fortuneImage: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=600&q=80",
    origin: "Umbria, Italy",
    packSize: "500 ML x 6",
    valueAdd: "Direct Import Grade A Black Truffles, intense aroma retention",
    costImpact: "-6.8% per serving",
    qualityIndex: "Michelin Preferred",
  },
  {
    id: "steak-3",
    dishName: "Pan-Seared Wagyu Ribeye 10oz",
    dishCategory: "Grill & Mains • Executive Dinner",
    dishImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    detectedIngredients: "Australian Wagyu Beef, Sea Salt Flakes, Rosemary Butter, Roasted Garlic",
    confidence: "99%",
    fortuneProduct: "Stockyard Gold Australian Wagyu Beef Striploin BMS 7+",
    fortuneCategory: "Chilled & Frozen Meat Imports",
    fortuneImage: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=600&q=80",
    origin: "Queensland, Australia",
    packSize: "Whole Cut ~5 KG",
    valueAdd: "Grain-fed 400+ days, vacuum cold-chain -1.5°C precise aging",
    costImpact: "-5.1% per portion",
    qualityIndex: "Tier 1 Prime",
  },
];

export default function ScreenLiveAnalysis({ onRestart }: ScreenLiveAnalysisProps) {
  const [activeMatchIndex, setActiveMatchIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const activeMatch = menuMatches[activeMatchIndex];

  return (
    <div className="min-h-[calc(100vh-61px)] flex flex-col bg-[#FAF8FD] pb-16">
      {/* HEADER SECTION */}
      <div className="max-w-6xl mx-auto w-full px-4 pt-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-amber-600 animate-ping" />
          <span>Culinary Cognition Engine</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight font-serif">
          Fortune is learning your menu
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mt-2 leading-relaxed">
          We&apos;re analyzing your dishes and matching them with our gourmet portfolio.
        </p>
      </div>

      {/* MAIN TWO COLUMN GRID */}
      <div className="max-w-6xl mx-auto w-full px-4 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT COLUMN: INGESTION PIPELINE (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Pipeline Card */}
          <div className="bg-white rounded-3xl p-6 border border-purple-100/90 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-xs uppercase font-bold tracking-wider text-slate-700">
                Ingestion Pipeline
              </h3>
              <span className="text-[11px] font-bold text-purple-900 bg-purple-100 px-3 py-0.5 rounded-full">
                Phase 4 of 6
              </span>
            </div>

            {/* Pipeline Step List */}
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Reading your menu</div>
                  <div className="text-[11px] font-mono text-slate-500">menu_autumn_winter_taj.pdf</div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Identifying dishes &amp; culinary categories</div>
                  <div className="text-[11px] text-slate-500">6 menu sections parsed</div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Understanding core ingredients &amp; origins</div>
                  <div className="text-[11px] text-slate-500">Flora, proteins &amp; seasonings extracted</div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Matching Fortune imported products</div>
                  <div className="text-[11px] text-slate-500">Global pantry database synchronized</div>
                </div>
              </div>

              {/* Step 5 - Active */}
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 animate-pulse">
                  5
                </span>
                <div>
                  <div className="text-xs font-bold text-amber-900">Finding menu opportunities</div>
                  <div className="text-[11px] text-amber-700">Cross-referencing seasonal margins</div>
                </div>
              </div>

              {/* Step 6 - Pending */}
              <div className="flex items-start gap-3 opacity-50">
                <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  6
                </span>
                <div>
                  <div className="text-xs font-semibold text-slate-700">Preparing recommendations</div>
                  <div className="text-[11px] text-slate-400">Executive culinary summary</div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Synthesizer Feed Card */}
          <div className="bg-[#160C2B] text-white rounded-3xl p-6 shadow-xl border border-purple-800/40 space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-purple-800/80 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider text-purple-200">
                  Live Synthesizer Feed
                </span>
              </div>
              <div className="font-mono text-xs text-amber-300 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>09:17.07</span>
              </div>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs bg-purple-950/70 p-2.5 rounded-xl border border-purple-800/40">
                <span className="text-purple-200">Menu items detected</span>
                <span className="font-bold text-white">42 items / 6 categories</span>
              </div>

              <div className="flex items-center justify-between text-xs bg-purple-950/70 p-2.5 rounded-xl border border-purple-600/50">
                <span className="text-purple-200">Direct product matches</span>
                <span className="font-bold text-amber-300">12 matches found</span>
              </div>

              <div className="flex items-center justify-between text-xs bg-purple-950/70 p-2.5 rounded-xl border border-amber-500/40">
                <span className="text-purple-200">High-margin opportunities</span>
                <span className="font-bold text-amber-300">7 unlocks identified</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: LIVE MATCH VISUALIZER (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-purple-100/90 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-700" />
                <h3 className="text-xs uppercase font-bold tracking-wider text-slate-900">
                  Live Match Visualizer
                </h3>
              </div>
              <span className="text-[11px] font-mono text-slate-400">ID: MAP-88219-IT</span>
            </div>

            {/* Dish Switcher Tabs */}
            <div className="flex gap-2 overflow-x-auto custom-scrollbar pb-1">
              {menuMatches.map((match, idx) => (
                <button
                  key={match.id}
                  onClick={() => setActiveMatchIndex(idx)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    activeMatchIndex === idx
                      ? "bg-[#5c35b1] text-white shadow-md font-bold"
                      : "bg-purple-50 text-purple-900 hover:bg-purple-100"
                  }`}
                >
                  {match.dishName}
                </button>
              ))}
            </div>

            {/* YOUR MENU CARD */}
            <div className="bg-purple-50/50 rounded-2xl p-4 border border-purple-100 flex items-start gap-4">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 shadow-md">
                <Image
                  src={activeMatch.dishImage}
                  alt={activeMatch.dishName}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-purple-900 bg-purple-200/70 px-2 py-0.5 rounded">
                    Your Menu
                  </span>
                  <span className="text-[11px] text-slate-500">{activeMatch.dishCategory}</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 font-serif">
                  {activeMatch.dishName}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Detected Ingredients:</strong> {activeMatch.detectedIngredients}
                </p>
              </div>
            </div>

            {/* AI CONNECTOR PILL */}
            <div className="flex justify-center my-2">
              <div className="inline-flex items-center gap-2 bg-purple-100 border border-purple-300 text-purple-950 px-4 py-1.5 rounded-full text-xs font-bold shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-purple-700" />
                <span>AI INGREDIENT MATCH • {activeMatch.confidence} Confidence</span>
                <ArrowDown className="w-3.5 h-3.5 text-purple-700" />
              </div>
            </div>

            {/* FORTUNE GOURMET MATCH CARD */}
            <div className="bg-purple-50/70 rounded-2xl p-4 border border-purple-200 space-y-3">
              <div className="flex items-start gap-4">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 shadow-md">
                  <Image
                    src={activeMatch.fortuneImage}
                    alt={activeMatch.fortuneProduct}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-white bg-purple-800 px-2 py-0.5 rounded">
                      Fortune Gourmet Match
                    </span>
                    <span className="text-[11px] font-medium text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                      {activeMatch.fortuneCategory}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 font-serif">
                    {activeMatch.fortuneProduct}
                  </h4>
                  <p className="text-xs text-slate-600">
                    Origin: <strong>{activeMatch.origin}</strong> • Pack: <strong>{activeMatch.packSize}</strong>
                  </p>
                </div>
              </div>

              {/* Value Add Pill */}
              <div className="bg-white border border-purple-200 px-3.5 py-2 rounded-xl text-xs text-purple-950 font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Value Add: {activeMatch.valueAdd}</span>
              </div>
            </div>

            {/* METRICS ROW */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-50/40 border border-purple-100 rounded-2xl p-4">
                <div className="text-[10px] uppercase font-bold text-slate-500">
                  Estimated Food Cost Impact
                </div>
                <div className="text-xl font-bold text-emerald-700 font-serif mt-1">
                  {activeMatch.costImpact}
                </div>
              </div>

              <div className="bg-purple-50/40 border border-purple-100 rounded-2xl p-4">
                <div className="text-[10px] uppercase font-bold text-slate-500">
                  Quality Index Rating
                </div>
                <div className="text-xl font-bold text-purple-950 font-serif mt-1">
                  {activeMatch.qualityIndex}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM ANALYSIS COMPLETE BANNER */}
      <div className="max-w-6xl mx-auto w-full px-4 mt-8">
        <div className="bg-white border border-purple-100 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-900 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6 text-purple-700" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 font-serif">Analysis Complete!</h3>
              <p className="text-xs text-slate-600">
                42 items analyzed, 12 product matches, 7 menu expansion ideas.
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl luxury-button-purple text-white font-bold text-sm shadow-lg inline-flex items-center justify-center gap-2 transition-all"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>View My Recommendations</span>
          </button>
        </div>
      </div>

      {/* RECOMMENDATIONS MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar p-6 sm:p-8 shadow-2xl relative space-y-6">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 p-1"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-2">
              <div className="text-xs uppercase font-bold text-purple-700">Executive Summary</div>
              <h2 className="text-2xl font-bold font-serif text-slate-900">
                Fortune Gourmet Executive Recommendations
              </h2>
              <p className="text-xs text-slate-600">
                Tailored for <strong>The Leela Palace Banquets &amp; Fine Dining</strong>
              </p>
            </div>

            <div className="space-y-3 border-t border-slate-100 pt-4">
              <h3 className="text-sm font-bold text-slate-900 font-serif">
                Direct Ingredient Match Overview
              </h3>

              {menuMatches.map((m) => (
                <div key={m.id} className="p-3 bg-purple-50/60 rounded-xl border border-purple-100 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-900">{m.dishName}</div>
                    <div className="text-[11px] text-purple-900">➜ {m.fortuneProduct}</div>
                  </div>
                  <div className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                    {m.costImpact}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-950 font-medium space-y-1">
              <div className="font-bold flex items-center gap-1 font-serif">
                <ChefHat className="w-4 h-4 text-amber-700" /> Dedicated Culinary Executive Assigned
              </div>
              <p>
                Your dedicated Fortune Culinary Specialist (Executive Chef Rahul Sharma) will review this portfolio setup with your kitchen team within 24 hours.
              </p>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                Close Summary
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                  if (onRestart) onRestart();
                }}
                className="px-6 py-2.5 rounded-xl luxury-button-green text-white text-xs font-bold"
              >
                Go to B2B Ordering Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
