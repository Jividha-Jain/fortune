"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Download, 
  TrendingDown, 
  ChevronDown, 
  PieChart, 
  BarChart3, 
  Lightbulb, 
  ArrowRight,
  Utensils,
  Box,
  Snowflake,
  Coins,
  Calendar,
  Sparkles
} from "lucide-react";

interface ScreenInsightsProps {
  onNavigateTab: (tab: string) => void;
}

export default function ScreenInsights({ onNavigateTab }: ScreenInsightsProps) {
  const [procurementFilter, setProcurementFilter] = useState("This Month");
  const [matrixFilter, setMatrixFilter] = useState("Last 3 Months");
  const [activeCategory, setActiveCategory] = useState<"dairy" | "seafood" | "salumi" | "bakery" | null>(null);

  const procurementDataMap = {
    "This Month": {
      total: "₹14.28L",
      dairy: { label: "Dairy & Cheese", percent: 38, amount: "₹5.42L", dash: 90.73 },
      seafood: { label: "Seafood", percent: 28, amount: "₹4.00L", dash: 66.85 },
      salumi: { label: "Salumi & Cured Meats", percent: 18, amount: "₹2.57L", dash: 42.97 },
      bakery: { label: "Bakery & Viennoiserie", percent: 16, amount: "₹2.29L", dash: 38.20 },
    },
    "Q3 2025": {
      total: "₹42.80L",
      dairy: { label: "Dairy & Cheese", percent: 36, amount: "₹15.40L", dash: 85.95 },
      seafood: { label: "Seafood", percent: 30, amount: "₹12.84L", dash: 71.62 },
      salumi: { label: "Salumi & Cured Meats", percent: 19, amount: "₹8.13L", dash: 45.36 },
      bakery: { label: "Bakery & Viennoiserie", percent: 15, amount: "₹6.43L", dash: 35.81 },
    },
    "YTD 2025": {
      total: "₹1.48Cr",
      dairy: { label: "Dairy & Cheese", percent: 37, amount: "₹54.76L", dash: 88.34 },
      seafood: { label: "Seafood", percent: 29, amount: "₹42.92L", dash: 69.24 },
      salumi: { label: "Salumi & Cured Meats", percent: 18, amount: "₹26.64L", dash: 42.97 },
      bakery: { label: "Bakery & Viennoiserie", percent: 16, amount: "₹23.68L", dash: 38.20 },
    },
  };

  const currentSpendData = procurementDataMap[procurementFilter as keyof typeof procurementDataMap] || procurementDataMap["This Month"];
  const activeData = activeCategory ? currentSpendData[activeCategory] : null;



  return (
    <div className="min-h-screen bg-[#FAF9FC] text-[#111111] pb-28 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
        
        {/* HEADER HERO SECTION */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-2">
          
          {/* Left Title Info */}
          <div className="space-y-1.5 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4EFFB] border border-[#E2D4F7] text-[10px] font-extrabold tracking-wider text-[#5E3B8C] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5E3B8C]"></span>
              <span>EXECUTIVE CULINARY &amp; COMMERCIAL ANALYTICS</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-serif text-[#111111] font-normal leading-tight tracking-tight">
              Intelligence Insights
            </h1>
            <p className="text-sm text-slate-500 font-medium">
              Smarter data. Better menus. Higher margins for Taj Mahal Palace Mumbai.
            </p>
          </div>

          {/* Right Header Controls */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-center">
            {/* Date Selector Dropdown */}
            <div className="relative">
              <div className="bg-white border border-slate-200/80 px-4 py-2 rounded-xl flex items-center gap-2 text-xs font-bold text-[#111111] cursor-pointer hover:bg-slate-50 transition-colors">
                <Calendar className="w-4 h-4 text-slate-500" />
                <span>Nov 2025</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-1" />
              </div>
            </div>

            {/* Export Insights PDF Button */}
            <button
              onClick={() => alert("Exporting Executive Insights Report PDF...")}
              className="px-5 py-2 rounded-xl bg-[#1B0B2E] hover:bg-[#2B1B4E] text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-all cursor-pointer active:scale-[0.98]"
            >
              <Download className="w-4 h-4 text-white" />
              <span>Export Insights (PDF)</span>
            </button>
          </div>

        </div>

        {/* 4 TOP KPI METRICS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Monthly Spend */}
          <div className="bg-[#F7F4FB] rounded-[22px] border border-[#EBE4F7] p-5 space-y-3 text-left">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#5E3B8C]/15 text-[#5E3B8C] flex items-center justify-center">
                <Coins className="w-5 h-5 text-[#5E3B8C]" />
              </div>
              <span className="text-[10px] uppercase font-bold text-[#5E3B8C]/80 tracking-wider">MONTHLY SPEND</span>
            </div>
            <div className="space-y-1">
              <div className="font-serif font-normal text-3xl text-[#111111] leading-none">₹14.28L</div>
              <div className="text-[11px] text-[#0D9488] font-bold flex items-center gap-1">
                <TrendingDown className="w-3.5 h-3.5 text-[#0D9488]" />
                <span>-6.4% vs last month</span>
              </div>
              <div className="text-[10px] text-slate-400 font-medium">(Bulk DOP Contract)</div>
            </div>
          </div>

          {/* Card 2: Avg Food Cost Realization */}
          <div className="bg-[#FFFDF4] rounded-[22px] border border-[#FDEBBA]/80 p-5 space-y-3 text-left">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#FFF9E6] text-[#9E6700] flex items-center justify-center border border-[#FDEBBA]">
                <Utensils className="w-5 h-5 text-[#9E6700]" />
              </div>
              <span className="text-[10px] uppercase font-bold text-[#9E6700] tracking-wider">AVG FOOD COST REALIZATION</span>
            </div>
            <div className="space-y-1">
              <div className="font-serif font-normal text-3xl text-[#111111] leading-none">26.4%</div>
              <div className="flex items-center gap-2 pt-1">
                <span className="text-[11px] text-slate-600 font-medium">Target: &lt; 28%</span>
                <span className="bg-[#E6F9F0] text-[#0D9488] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-[#BBF7D0]">
                  On Track
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: SKU Alignment Score */}
          <div className="bg-[#F0FAF5] rounded-[22px] border border-[#C6F1DA] p-5 space-y-3 text-left">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#E1F7EC] text-[#0D9488] flex items-center justify-center border border-[#C6F1DA]">
                <Box className="w-5 h-5 text-[#0D9488]" />
              </div>
              <span className="text-[10px] uppercase font-bold text-[#0D9488] tracking-wider">SKU ALIGNMENT SCORE</span>
            </div>
            <div className="space-y-1">
              <div className="font-serif font-normal text-3xl text-[#111111] leading-none">88.4%</div>
              <div className="text-[11px] text-[#0D9488] font-extrabold pt-1">
                42 Active Dishes Indexed
              </div>
            </div>
          </div>

          {/* Card 4: Cold-Chain SLA */}
          <div className="bg-[#F7F4FB] rounded-[22px] border border-[#EBE4F7] p-5 space-y-3 text-left">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#5E3B8C]/15 text-[#5E3B8C] flex items-center justify-center">
                <Snowflake className="w-5 h-5 text-[#5E3B8C]" />
              </div>
              <span className="text-[10px] uppercase font-bold text-[#5E3B8C] tracking-wider">COLD-CHAIN SLA</span>
            </div>
            <div className="space-y-1">
              <div className="font-serif font-normal text-3xl text-[#111111] leading-none">100%</div>
              <div className="text-[11px] text-[#5E3B8C] font-extrabold pt-1">
                Zero Temperature Breakages
              </div>
            </div>
          </div>

        </div>

        {/* 2 MAIN ANALYTICS WIDGETS GRID (2 COLS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
            {/* LEFT WIDGET: PROCUREMENT MIX (6 COLS) - PIXEL PERFECT DESIGN */}
            <div className="lg:col-span-6 bg-white rounded-[32px] border border-slate-100 p-6 sm:p-8 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] flex flex-col justify-between space-y-6 text-left">
              
              {/* Widget Header */}
              <div className="flex items-center justify-between pb-1">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5EFFC] text-[#5D388E] flex items-center justify-center shrink-0">
                    <PieChart className="w-6 h-6 text-[#5D388E]" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-2xl text-[#111111] leading-tight">Procurement Mix</h3>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">Spend breakdown by category</p>
                  </div>
                </div>

                {/* Date Filter Dropdown */}
                <div className="relative shrink-0">
                  <div className="bg-white border border-slate-200/80 rounded-2xl px-4 py-2 flex items-center gap-2 text-xs font-bold text-[#111111] shadow-2xs cursor-pointer hover:bg-slate-50 transition-colors">
                    <Calendar className="w-4 h-4 text-[#5D388E]" />
                    <select
                      value={procurementFilter}
                      onChange={(e) => setProcurementFilter(e.target.value)}
                      className="bg-transparent text-xs font-bold text-[#111111] cursor-pointer focus:outline-none appearance-none pr-4"
                    >
                      <option value="This Month">This Month</option>
                      <option value="Q3 2025">Q3 2025</option>
                      <option value="YTD 2025">YTD 2025</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 -ml-3 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Donut Chart & Legend Section */}
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 py-2">
                
                {/* Graphic SVG Donut Chart with Hover Slice Animation */}
                <div className="relative w-48 h-48 sm:w-52 sm:h-52 shrink-0 flex items-center justify-center filter drop-shadow-sm">
                  <svg className="w-full h-full transform -rotate-90 transition-all duration-500" viewBox="0 0 100 100">
                    {/* Segment 1: Red Slice (Dairy 38%) */}
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="38" 
                      fill="none" 
                      stroke="#E32448" 
                      strokeWidth={activeCategory === "dairy" ? "20" : "18"}
                      strokeDasharray={`${currentSpendData.dairy.dash} 238.76`}
                      strokeDashoffset="0"
                      className="transition-all duration-300 cursor-pointer"
                      style={{ opacity: activeCategory && activeCategory !== "dairy" ? 0.6 : 1 }}
                      onMouseEnter={() => setActiveCategory("dairy")}
                      onMouseLeave={() => setActiveCategory(null)}
                    />
                    
                    {/* Segment 2: Dark Purple Slice (Seafood 28%) */}
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="38" 
                      fill="none" 
                      stroke="#18092A" 
                      strokeWidth={activeCategory === "seafood" ? "20" : "18"}
                      strokeDasharray={`${currentSpendData.seafood.dash} 238.76`}
                      strokeDashoffset={`-${currentSpendData.dairy.dash}`}
                      className="transition-all duration-300 cursor-pointer"
                      style={{ opacity: activeCategory && activeCategory !== "seafood" ? 0.6 : 1 }}
                      onMouseEnter={() => setActiveCategory("seafood")}
                      onMouseLeave={() => setActiveCategory(null)}
                    />
                    
                    {/* Segment 3: Purple Slice (Salumi 18%) */}
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="38" 
                      fill="none" 
                      stroke="#5D388E" 
                      strokeWidth={activeCategory === "salumi" ? "20" : "18"}
                      strokeDasharray={`${currentSpendData.salumi.dash} 238.76`}
                      strokeDashoffset={`-${currentSpendData.dairy.dash + currentSpendData.seafood.dash}`}
                      className="transition-all duration-300 cursor-pointer"
                      style={{ opacity: activeCategory && activeCategory !== "salumi" ? 0.6 : 1 }}
                      onMouseEnter={() => setActiveCategory("salumi")}
                      onMouseLeave={() => setActiveCategory(null)}
                    />
                    
                    {/* Segment 4: Gold Slice (Bakery 16%) */}
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="38" 
                      fill="none" 
                      stroke="#F2B742" 
                      strokeWidth={activeCategory === "bakery" ? "20" : "18"}
                      strokeDasharray={`${currentSpendData.bakery.dash} 238.76`}
                      strokeDashoffset={`-${currentSpendData.dairy.dash + currentSpendData.seafood.dash + currentSpendData.salumi.dash}`}
                      className="transition-all duration-300 cursor-pointer"
                      style={{ opacity: activeCategory && activeCategory !== "bakery" ? 0.6 : 1 }}
                      onMouseEnter={() => setActiveCategory("bakery")}
                      onMouseLeave={() => setActiveCategory(null)}
                    />

                    {/* Percentage Labels Inside Slices */}
                    <text x="64.0" y="85.3" fill="#FFFFFF" fontSize="4.2" fontWeight="bold" textAnchor="middle" transform="rotate(90 64.0 85.3)">
                      {currentSpendData.dairy.percent}%
                    </text>
                    <text x="12.3" y="45.2" fill="#FFFFFF" fontSize="4.2" fontWeight="bold" textAnchor="middle" transform="rotate(90 12.3 45.2)">
                      {currentSpendData.seafood.percent}%
                    </text>
                    <text x="50.0" y="12.0" fill="#FFFFFF" fontSize="4.2" fontWeight="bold" textAnchor="middle" transform="rotate(90 50.0 12.0)">
                      {currentSpendData.salumi.percent}%
                    </text>
                    <text x="83.3" y="31.7" fill="#FFFFFF" fontSize="4.2" fontWeight="bold" textAnchor="middle" transform="rotate(90 83.3 31.7)">
                      {currentSpendData.bakery.percent}%
                    </text>
                  </svg>

                  {/* Donut Hole Center Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                    {activeData ? (
                      <div className="animate-fade-in space-y-0.5">
                        <span className="font-serif font-bold text-2xl text-[#111111] leading-none block">
                          {activeData.amount}
                        </span>
                        <span className="text-[10px] text-[#5D388E] font-bold uppercase tracking-wider block">
                          {activeData.label}
                        </span>
                      </div>
                    ) : (
                      <div className="space-y-0.5">
                        <span className="font-serif font-bold text-2xl sm:text-3xl text-[#111111] leading-none block">
                          {currentSpendData.total}
                        </span>
                        <span className="text-xs text-slate-400 font-medium block">Total Spend</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Legend List Rows (Clean Layout matching Reference Image) */}
                <div className="flex-1 w-full space-y-4 min-w-0">
                  
                  {/* Item 1: Dairy & Cheese */}
                  <div 
                    onMouseEnter={() => setActiveCategory("dairy")}
                    onMouseLeave={() => setActiveCategory(null)}
                    className="flex items-center justify-between pb-3 border-b border-slate-100 cursor-pointer group/row"
                  >
                    <div className="flex items-center gap-3 min-w-0 pr-2">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#18092A] shrink-0 group-hover/row:scale-125 transition-transform" />
                      <span className={`font-semibold text-xs sm:text-sm transition-colors ${activeCategory === "dairy" ? "text-[#E32448] font-bold" : "text-[#111111]"}`}>
                        Dairy &amp; Cheese (Zanetti DOP)
                      </span>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-bold text-sm text-[#111111] leading-tight">{currentSpendData.dairy.percent}%</div>
                      <div className="text-[11px] text-slate-400 font-normal">{currentSpendData.dairy.amount}</div>
                    </div>
                  </div>

                  {/* Item 2: Seafood */}
                  <div 
                    onMouseEnter={() => setActiveCategory("seafood")}
                    onMouseLeave={() => setActiveCategory(null)}
                    className="flex items-center justify-between pb-3 border-b border-slate-100 cursor-pointer group/row"
                  >
                    <div className="flex items-center gap-3 min-w-0 pr-2">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#5D388E] shrink-0 group-hover/row:scale-125 transition-transform" />
                      <span className={`font-semibold text-xs sm:text-sm transition-colors ${activeCategory === "seafood" ? "text-[#5D388E] font-bold" : "text-[#111111]"}`}>
                        Seafood (Norwegian Salmon)
                      </span>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-bold text-sm text-[#111111] leading-tight">{currentSpendData.seafood.percent}%</div>
                      <div className="text-[11px] text-slate-400 font-normal">{currentSpendData.seafood.amount}</div>
                    </div>
                  </div>

                  {/* Item 3: Salumi & Cured Meats */}
                  <div 
                    onMouseEnter={() => setActiveCategory("salumi")}
                    onMouseLeave={() => setActiveCategory(null)}
                    className="flex items-center justify-between pb-3 border-b border-slate-100 cursor-pointer group/row"
                  >
                    <div className="flex items-center gap-3 min-w-0 pr-2">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#F2B742] shrink-0 group-hover/row:scale-125 transition-transform" />
                      <span className={`font-semibold text-xs sm:text-sm transition-colors ${activeCategory === "salumi" ? "text-[#F2B742] font-bold" : "text-[#111111]"}`}>
                        Salumi &amp; Cured Meats (Levoni)
                      </span>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-bold text-sm text-[#111111] leading-tight">{currentSpendData.salumi.percent}%</div>
                      <div className="text-[11px] text-slate-400 font-normal">{currentSpendData.salumi.amount}</div>
                    </div>
                  </div>

                  {/* Item 4: Bakery & Viennoiserie */}
                  <div 
                    onMouseEnter={() => setActiveCategory("bakery")}
                    onMouseLeave={() => setActiveCategory(null)}
                    className="flex items-center justify-between cursor-pointer group/row"
                  >
                    <div className="flex items-center gap-3 min-w-0 pr-2">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#E32448] shrink-0 group-hover/row:scale-125 transition-transform" />
                      <span className={`font-semibold text-xs sm:text-sm transition-colors ${activeCategory === "bakery" ? "text-[#E32448] font-bold" : "text-[#111111]"}`}>
                        Bakery &amp; Viennoiserie (Paysan)
                      </span>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-bold text-sm text-[#111111] leading-tight">{currentSpendData.bakery.percent}%</div>
                      <div className="text-[11px] text-slate-400 font-normal">{currentSpendData.bakery.amount}</div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Bottom AI Insight Callout */}
              <div className="bg-[#F5EFFC] border border-[#E9DCFA] rounded-[24px] p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#EADCFB] text-[#5D388E] flex items-center justify-center shrink-0 mt-0.5">
                    <Lightbulb className="w-6 h-6 text-[#5D388E]" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-bold text-sm text-[#5D388E] block">AI Insight</span>
                    <p className="text-slate-600 font-normal text-xs leading-relaxed max-w-sm">
                      Consolidating Dairy &amp; Seafood orders unlocks an additional 3.5% tier rebate on master contract billing.
                    </p>
                  </div>
                </div>

                <button 
                  onClick={() => onNavigateTab("recommendations")}
                  className="px-6 py-3 rounded-full bg-[#250F3F] hover:bg-[#351956] text-white text-xs font-bold flex items-center gap-2.5 shadow-md shrink-0 cursor-pointer transition-transform active:scale-95 whitespace-nowrap"
                >
                  <span>View Opportunity</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </button>
              </div>

            </div>


          {/* RIGHT WIDGET: MARGIN & YIELD REALIZATION MATRIX (6 COLS) */}
          <div className="lg:col-span-6 bg-white rounded-[28px] border border-slate-100 p-6 sm:p-7 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.04)] flex flex-col justify-between space-y-6 text-left">
            
            {/* Widget Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#F4EFFB] text-[#5E3B8C] flex items-center justify-center shrink-0">
                  <BarChart3 className="w-5 h-5 text-[#5E3B8C]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-2xl text-[#111111] leading-tight">Margin &amp; Yield Realization Matrix</h3>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">Top insights from your current menu and usage.</p>
                </div>
              </div>

              {/* Date Filter Dropdown */}
              <div className="relative self-start sm:self-auto">
                <div className="bg-white border border-slate-200/80 rounded-2xl px-4 py-2 flex items-center gap-2 text-xs font-bold text-[#111111] shadow-2xs cursor-pointer hover:bg-slate-50 transition-colors">
                  <span>Last 3 Months</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-1" />
                </div>
              </div>
            </div>

            {/* Matrix Insights Table */}
            <div className="space-y-4">
              
              {/* Table Header Row */}
              <div className="grid grid-cols-12 gap-3 text-[10px] uppercase font-extrabold text-slate-400 tracking-wider text-left border-b border-slate-100 pb-2.5">
                <div className="col-span-7 sm:col-span-6">+ ITEM / INSIGHT</div>
                <div className="col-span-2 sm:col-span-3 text-center">IMPACT</div>
                <div className="col-span-3 text-right">SAVINGS / OPPORTUNITY</div>
              </div>

              {/* Row 1: Zanetti Mozzarella */}
              <div className="grid grid-cols-12 gap-3 items-center p-4 bg-[#F9FAFC] rounded-[22px] border border-slate-100/90 text-left hover:border-[#5E3B8C]/30 transition-all shadow-2xs">
                <div className="col-span-7 sm:col-span-6 flex items-center gap-3.5">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-slate-200/60 shadow-xs">
                    <Image 
                      src="https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=200&q=80" 
                      alt="Mozzarella" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-sm sm:text-base text-[#111111] leading-tight">Zanetti Mozzarella DOP Substitution</h4>
                    <p className="text-xs text-slate-500 font-normal leading-snug">
                      Replaced local curd in Shamiana pizza station. Improved crust blister score +22%.
                    </p>
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-3 text-center">
                  <span className="bg-[#E6F9F0] text-[#0D9488] border border-[#BBF7D0] px-3.5 py-1.5 rounded-2xl text-xs font-extrabold shadow-2xs inline-block">
                    +22% Quality Score
                  </span>
                </div>

                <div className="col-span-3 text-right">
                  <div className="font-bold text-[#0D9488] text-sm sm:text-base leading-tight">₹42,000 / mo</div>
                  <div className="text-[11px] text-slate-400 font-medium mt-0.5">Food Cost: 24.2%</div>
                </div>
              </div>

              {/* Row 2: Salmon Trim D */}
              <div className="grid grid-cols-12 gap-3 items-center p-4 bg-[#F9FAFC] rounded-[22px] border border-slate-100/90 text-left hover:border-[#5E3B8C]/30 transition-all shadow-2xs">
                <div className="col-span-7 sm:col-span-6 flex items-center gap-3.5">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-slate-200/60 shadow-xs">
                    <Image 
                      src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=200&q=80" 
                      alt="Salmon" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-sm sm:text-base text-[#111111] leading-tight">Norwegian Salmon Trim D Yield Optimization</h4>
                    <p className="text-xs text-slate-500 font-normal leading-snug">
                      Zero water-glaze airfreight eliminated 14% trim waste across Wasabi robata &amp; sushi.
                    </p>
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-3 text-center">
                  <span className="bg-rose-50 text-[#E11D48] border border-rose-200 px-3.5 py-1.5 rounded-2xl text-xs font-extrabold shadow-2xs inline-block">
                    -14% Waste
                  </span>
                </div>

                <div className="col-span-3 text-right">
                  <div className="font-bold text-[#0D9488] text-sm sm:text-base leading-tight">₹58,500 / mo</div>
                  <div className="text-[11px] text-slate-400 font-medium mt-0.5">Food Cost: 28.1%</div>
                </div>
              </div>

              {/* Row 3: Paysan Breton Butter */}
              <div className="grid grid-cols-12 gap-3 items-center p-4 bg-[#F9FAFC] rounded-[22px] border border-slate-100/90 text-left hover:border-[#5E3B8C]/30 transition-all shadow-2xs">
                <div className="col-span-7 sm:col-span-6 flex items-center gap-3.5">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-slate-200/60 shadow-xs">
                    <Image 
                      src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=200&q=80" 
                      alt="Croissant" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-sm sm:text-base text-[#111111] leading-tight">Paysan Breton 82% Tourage Efficiency</h4>
                    <p className="text-xs text-slate-500 font-normal leading-snug">
                      Consistent 34°C melting point increased croissant yield by 28 crisp layers/batch.
                    </p>
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-3 text-center">
                  <span className="bg-[#E6F9F0] text-[#0D9488] border border-[#BBF7D0] px-3.5 py-1.5 rounded-2xl text-xs font-extrabold shadow-2xs inline-block">
                    +28% Yield
                  </span>
                </div>

                <div className="col-span-3 text-right">
                  <div className="font-bold text-[#0D9488] text-sm sm:text-base leading-tight">₹23,500 / mo</div>
                  <div className="text-[11px] text-slate-400 font-medium mt-0.5">Food Cost: 21.8%</div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM HERO BANNER: ALBA WHITE TRUFFLE & WINTER CHEESE ALLOCATION */}
        <div className="relative w-full rounded-[24px] overflow-hidden bg-[#1B0B2E] border border-purple-900/60 p-6 sm:p-8 md:p-10 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          {/* Right Background Image with Seamless Dark Purple Fade Overlay */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-3/5 pointer-events-none overflow-hidden">
            <Image
              src="/images/alba_white_truffle_banner.jpg"
              alt="Alba White Truffle"
              fill
              className="object-cover object-right opacity-85"
            />
            {/* Linear Gradient Masks to Blend Seamlessly into Dark Purple */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B0B2E] via-[#1B0B2E]/80 to-transparent lg:via-[#1B0B2E]/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B0B2E]/90 via-transparent to-[#1B0B2E]/60" />
          </div>

          {/* Left Text & Call to Action */}
          <div className="space-y-4 max-w-2xl text-left z-10">
            
            {/* Top Capsule Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#382315]/80 border border-[#F5C453]/40 text-[#F5C453] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#F5C453]" />
              <span>UPCOMING SEASONAL IMPORT HORIZON • NOVEMBER 2025</span>
            </div>

            {/* Headline Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-white leading-tight tracking-tight">
              Alba White Truffle &amp; Winter Cheese Allocation <span className="text-[#F5C453] font-semibold">Locked</span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-xl">
              Fortune Gourmet key account team has reserved <strong className="text-white font-bold">4.5 KG fresh Alba White Truffle</strong> (Tartufo Bianco d&apos;Alba) directly from Piedmont for Taj Mahal Palace Mumbai&apos;s winter fine dining festival.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => onNavigateTab("recommendations")}
                className="px-6 py-3 rounded-full bg-[#F5C453] hover:bg-[#E5B540] text-[#1B0B2E] text-xs sm:text-sm font-extrabold flex items-center gap-2.5 shadow-xl transition-all cursor-pointer active:scale-[0.98]"
              >
                <span>View Seasonal Menu Recommendations</span>
                <ArrowRight className="w-4 h-4 text-[#1B0B2E]" />
              </button>
            </div>

          </div>

          {/* Right Cursive Script Artwork */}
          <div className="relative z-10 shrink-0 self-end lg:self-center text-right pr-2 sm:pr-4">
            <div className="space-y-0.5">
              <span className="font-serif italic text-2xl sm:text-3xl text-white/95 leading-none block font-normal drop-shadow-lg">
                Exceptional
              </span>
              <span className="font-serif italic text-2xl sm:text-3xl text-white/90 leading-none block font-normal drop-shadow-lg">
                Ingredients
              </span>
              <span className="font-serif italic text-2xl sm:text-3xl text-white/95 leading-none block font-normal drop-shadow-lg">
                Greater Menus
              </span>
              {/* Gold Underline Stroke */}
              <div className="w-20 h-0.5 bg-[#F5C453] mt-2.5 ml-auto rounded-full shadow-sm" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
