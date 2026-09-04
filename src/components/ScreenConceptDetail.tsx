"use client";

import React from "react";
import Image from "next/image";
import { 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  Bookmark, 
  MessageSquare, 
  TrendingUp, 
  Copy,
  Plus,
  ShieldCheck
} from "lucide-react";

interface ScreenConceptDetailProps {
  onBack: () => void;
  onNavigateShortlist: () => void;
}

export default function ScreenConceptDetail({ onBack, onNavigateShortlist }: ScreenConceptDetailProps) {
  return (
    <div className="min-h-screen bg-[#FAF8FD] pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
        
        {/* BREADCRUMBS & TOP BAR */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-100/80 pb-4">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <button onClick={onBack} className="flex items-center gap-1 text-purple-700 hover:underline font-bold">
              <ArrowLeft className="w-3.5 h-3.5" /> AI Recommendations
            </button>
            <span>/</span>
            <span>New Menu Opportunities</span>
            <span>/</span>
            <span className="font-bold text-slate-900">Garden Vegetable &amp; Burrata Pizza</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 px-3.5 py-1 rounded-full text-amber-950 text-xs font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>AI RECOMMENDED • HIGH POTENTIAL MARGIN</span>
          </div>
        </div>

        {/* HERO CARD (2 COLS) */}
        <div className="bg-white rounded-3xl border border-purple-100/90 shadow-xs overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left Hero Details (7 cols) */}
          <div className="lg:col-span-7 p-6 lg:p-10 space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase font-bold tracking-wider text-purple-900 bg-purple-100 px-2.5 py-0.5 rounded">
                  New Menu Opportunity
                </span>
                <span className="text-xs font-mono text-slate-400">Ref ID: #OPP-2025-MUM-412</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
                Garden Vegetable &amp; Burrata Pizza
              </h1>

              <p className="text-xs text-purple-900 font-semibold uppercase tracking-wider">
                Specialty Neapolitan Pizza • Target: Shamiana Dinner &amp; Poolside Terrace
              </p>

              {/* 3 Metric Tiles */}
              <div className="grid grid-cols-3 gap-3 pt-3">
                <div className="bg-purple-50/50 p-4 rounded-2xl border border-purple-100">
                  <div className="text-[10px] text-slate-400 font-bold uppercase">EST. GROSS MARGIN</div>
                  <div className="text-2xl font-serif font-bold text-emerald-700 mt-1">74.2%</div>
                  <div className="text-[10px] text-emerald-800 font-medium">+14% vs avg pizza</div>
                </div>

                <div className="bg-purple-50/50 p-4 rounded-2xl border border-purple-100">
                  <div className="text-[10px] text-slate-400 font-bold uppercase">EST. MONTHLY REV</div>
                  <div className="text-2xl font-serif font-bold text-purple-950 mt-1">₹4.85L</div>
                  <div className="text-[10px] text-slate-500">Based on 65 plates/day</div>
                </div>

                <div className="bg-purple-50/50 p-4 rounded-2xl border border-purple-100">
                  <div className="text-[10px] text-slate-400 font-bold uppercase">KITCHEN PREP COMPLEXITY</div>
                  <div className="text-2xl font-serif font-bold text-slate-900 mt-1">0 Extra</div>
                  <div className="text-[10px] text-slate-500">Fits current line flow</div>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-950">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Fortune Mumbai Cold-Chain: In Stock (Next Morning 06:00 AM)</span>
            </div>
          </div>

          {/* Right Hero Image (5 cols) */}
          <div className="lg:col-span-5 relative min-h-[300px]">
            <Image
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80"
              alt="Garden Vegetable & Burrata Pizza"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* MAIN ANALYSIS & ARCHITECTURE SECTION (2 COLS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT COLUMN: WHY WE RECOMMEND & RATIONALE (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Why We Recommend This */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 border border-purple-100/90 shadow-xs space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <Sparkles className="w-5 h-5 text-purple-700" />
                <h3 className="text-lg font-bold text-slate-900 font-serif">
                  Why We Recommend This
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Your menu already performs strongly in the pizza category (<strong>leveraging 140 covers/day</strong>), but currently has limited premium vegetarian options. Market analysis indicates <strong>38% increase in demand</strong> for artisanal vegetarian comfort dining in luxury Mumbai hotels over the past two quarters.
              </p>

              {/* Penetration Bar */}
              <div className="bg-purple-50/50 p-4 rounded-2xl border border-purple-100 space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-600">Category Revenue Penetration</span>
                  <span className="text-purple-950">Non-Veg (68%) vs Premium Veg (32%)</span>
                </div>
                <div className="h-3 w-full bg-purple-200 rounded-full overflow-hidden flex">
                  <div className="h-full bg-purple-900 w-[68%]" />
                  <div className="h-full bg-amber-400 w-[32%]" />
                </div>
                <p className="text-[11px] text-slate-500 italic">
                  Opportunity to expand the gold bar (High Margin Veg) to 48% with zero cannibalization of top-tier covers.
                </p>
              </div>
            </div>

            {/* Culinary Intelligence Rationale */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 border border-purple-100/90 shadow-xs space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <ShieldCheck className="w-5 h-5 text-purple-700" />
                <h3 className="text-lg font-bold text-slate-900 font-serif">
                  Culinary Intelligence Rationale
                </h3>
              </div>

              <div className="space-y-3.5 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                  <div>
                    <strong>Builds on an existing wood-fired oven kitchen workflow:</strong> Uses identical dough hydration and hearth temperatures currently run by the pizza brigade at Shamiana.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Adds a signature high-margin vegetarian hero dish:</strong> 74% gross margin allows premium menu positioning at ₹1,450++ against a disciplined food cost under ₹375 per unit.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                  <div>
                    <strong>Uses Fortune cold-chain products already in stock in Mumbai Hub:</strong> Immediate availability with zero custom import lag; delivered in temperature-controlled -18°C / +4°C vans.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                  <div>
                    <strong>Creates cross-selling potential with organic Italian prosecco:</strong> Sommelier pairing recommendation provides instant beverage check lift for terrace dining.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                  <div>
                    <strong>Requires zero extra prep equipment or line cook retraining:</strong> Cold burrata topping is applied post-bake, keeping fire time identical to classic Margherita orders.
                  </div>
                </div>
              </div>
            </div>

            {/* SUGGESTED MENU DESCRIPTION */}
            <div className="bg-purple-900 text-white rounded-3xl p-6 lg:p-8 space-y-3 shadow-md relative overflow-hidden">
              <div className="flex items-center justify-between text-xs text-purple-200 font-bold uppercase tracking-wider">
                <span>Suggested Menu Description (Ready for Chef Copy)</span>
                <button onClick={() => alert("Menu description copied to clipboard!")} className="text-amber-300 hover:underline flex items-center gap-1">
                  <Copy className="w-3.5 h-3.5" /> Copy text
                </button>
              </div>

              <blockquote className="text-base sm:text-lg font-serif italic text-amber-100 leading-relaxed">
                &ldquo;Wood-fired blistered crust topped with crushed San Marzano tomatoes, fior di latte mozzarella, roasted fire-sweetened peppers, marinated artichoke hearts, crowned with fresh creamy Puglia burrata and ligurian basil.&rdquo;
              </blockquote>

              <div className="text-[11px] text-purple-300 pt-2 border-t border-purple-800">
                Allergens: Milk, Gluten • Dietary: Lacto-Vegetarian • Caloric Density: 680 kcal
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: OPPORTUNITY ARCHITECTURE & INGREDIENTS (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Opportunity Architecture */}
            <div className="bg-white rounded-3xl p-6 border border-purple-100/90 shadow-xs space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <div className="text-[10px] uppercase font-bold text-purple-700">Evolutionary Menu Pipeline</div>
                <h3 className="text-base font-bold text-slate-900 font-serif">Opportunity Architecture</h3>
              </div>

              <div className="space-y-3 text-xs">
                <div className="bg-purple-50/50 p-3 rounded-2xl border border-purple-100">
                  <div className="text-[10px] uppercase text-slate-400 font-bold">YOUR CURRENT MENU</div>
                  <div className="font-medium text-slate-800 mt-1">Margherita Pizza • Four Cheese Pizza • Pepperoni Pizza</div>
                </div>

                <div className="text-center text-purple-400">↓</div>

                <div className="bg-purple-900 text-white p-3 rounded-2xl space-y-1">
                  <div className="text-[10px] uppercase text-amber-300 font-bold">FORTUNE GOURMET INGREDIENTS</div>
                  <div className="text-[11px] space-y-0.5">
                    <div>• Zanetti Mozzarella di Bufala DOP</div>
                    <div>• Puglia Fresh Burrata 200g</div>
                    <div>• TartufLanghe White Truffle Oil</div>
                  </div>
                </div>

                <div className="text-center text-purple-400">↓</div>

                <div className="bg-amber-100 border border-amber-300 p-4 rounded-2xl text-amber-950">
                  <div className="text-[10px] uppercase font-bold text-amber-800">NEW MENU OPPORTUNITY</div>
                  <div className="font-serif font-bold text-base">Garden Vegetable &amp; Burrata Pizza</div>
                  <div className="text-[11px] mt-0.5">Calculated target price: ₹1,450 | Yield factor: 98.4%</div>
                </div>
              </div>
            </div>

            {/* Recommended Fortune Products */}
            <div className="bg-white rounded-3xl p-6 border border-purple-100/90 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-base font-bold text-slate-900 font-serif">
                  Recommended Fortune Products
                </h3>
                <button onClick={onNavigateShortlist} className="text-xs font-bold text-purple-700 hover:underline">
                  Batch Add (3)
                </button>
              </div>

              <div className="space-y-3 text-xs">
                {/* Product 1 */}
                <div className="p-3 bg-purple-50/50 rounded-2xl border border-purple-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0">
                      <Image src="https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=200&q=80" alt="Mozzarella" fill className="object-cover" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Zanetti Mozzarella di Bufala</div>
                      <div className="text-[10px] text-slate-500">Pack Size: 1 KG • DOP Certified</div>
                      <div className="text-[10px] text-emerald-700 font-semibold">24 Units in stock</div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-bold text-slate-900">₹1,820</div>
                    <button onClick={onNavigateShortlist} className="text-[11px] text-purple-700 font-bold hover:underline">Shortlist</button>
                  </div>
                </div>

                {/* Product 2 */}
                <div className="p-3 bg-purple-50/50 rounded-2xl border border-purple-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0">
                      <Image src="https://images.unsplash.com/photo-1592417817098-8f3d6eb1626d?auto=format&fit=crop&w=200&q=80" alt="Burrata" fill className="object-cover" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Caseificio Puglia Fresh Burrata</div>
                      <div className="text-[10px] text-slate-500">Pack: 200g x 10 • Daily Air Freight</div>
                      <div className="text-[10px] text-emerald-700 font-semibold">42 Cases in stock</div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-bold text-slate-900">₹3,450</div>
                    <button onClick={onNavigateShortlist} className="text-[11px] text-purple-700 font-bold hover:underline">Shortlist</button>
                  </div>
                </div>

                {/* Product 3 */}
                <div className="p-3 bg-purple-50/50 rounded-2xl border border-purple-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0">
                      <Image src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=200&q=80" alt="Artichoke" fill className="object-cover" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Iposea Roman Artichoke Quarters</div>
                      <div className="text-[10px] text-slate-500">Tin Size: 2.5 KG • Herb Infused</div>
                      <div className="text-[10px] text-emerald-700 font-semibold">18 Tins in stock</div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-bold text-slate-900">₹2,190</div>
                    <button onClick={onNavigateShortlist} className="text-[11px] text-purple-700 font-bold hover:underline">Shortlist</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FIXED BAR */}
        <div className="bg-white border border-purple-100 rounded-3xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Opportunity Status: <strong>Verified Viable • Ingredient Matrix Ready</strong></span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => alert("Opportunity saved to Taj Mumbai Kitchen Plan.")}
              className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-purple-100 text-purple-950 font-bold text-xs hover:bg-purple-200 border border-purple-200"
            >
              💾 Save Opportunity to Kitchen Plan
            </button>

            <button
              onClick={() => alert("Call scheduled with Fortune Executive Chef.")}
              className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-[#0F2E20] hover:bg-[#16422F] text-white font-bold text-xs shadow-md"
            >
              💬 Request a Culinary Discussion with Fortune Chef Desk
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
