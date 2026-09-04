"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Truck, 
  Clock, 
  Snowflake, 
  FileText, 
  ChevronRight, 
  Phone, 
  Download, 
  MoreVertical, 
  MapPin, 
  Thermometer, 
  Gauge, 
  CheckCircle2, 
  RefreshCw, 
  Box, 
  Layers, 
  Calendar, 
  History,
  Copy,
  ArrowRight,
  User,
  ShieldCheck,
  TrendingUp,
  X
} from "lucide-react";

interface ScreenOrdersProps {
  onNavigateTab: (tab: string) => void;
}

export default function ScreenOrders({ onNavigateTab }: ScreenOrdersProps) {
  const [activeTab, setActiveTab] = useState<"active" | "standing" | "history">("active");
  const [showAllItems, setShowAllItems] = useState(false);
  const [driverModal, setDriverModal] = useState(false);

  const manifestItems = [
    {
      id: "mozzarella",
      title: "🇮🇹 Zanetti Mozzarella di Bufala DOP",
      cases: "12 Cases (72 KG)",
      status: "Chilled 2.4°C",
      sku: "FG-ITA-8822",
      image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=200&q=80",
      lot: "LOT-2025-098-ITA",
      tempRange: "+2.0°C to +4.0°C"
    },
    {
      id: "butter",
      title: "🇫🇷 Paysan Breton Churned Butter 82%",
      cases: "15 Cases (75 KG)",
      status: "Chilled 2.4°C",
      sku: "FG-DAL-3344",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=200&q=80",
      lot: "LOT-2025-044-FRA",
      tempRange: "+2.0°C to +4.0°C"
    },
    {
      id: "salmon",
      title: "🇳🇴 Norwegian Salmon Trim D",
      cases: "8 Cases (32 KG)",
      status: "Chilled Airfreight",
      sku: "FG-SEA-4103",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=200&q=80",
      lot: "LOT-2025-881-NOR",
      tempRange: "+0.5°C to +2.5°C"
    },
    {
      id: "truffle",
      title: "🇮🇹 TartufLanghe Black Truffle Paste 500g",
      cases: "4 Jars (2.0 KG)",
      status: "Ambient Cellar",
      sku: "FG-CUR-7821",
      image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=200&q=80",
      lot: "LOT-2025-112-ITA",
      tempRange: "+14.0°C to +18.0°C"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] pb-28 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
        
        {/* HEADER HERO SECTION */}
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-slate-200/60 pb-6 overflow-hidden">
          
          {/* Left Title Info */}
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F4EFFB] border border-[#E2D4F7] text-[10px] font-bold tracking-wider text-[#5E3B8C] uppercase">
              <span>• LIVE COLD-CHAIN DISPATCH TELEMETRY</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-serif text-[#111111] font-normal leading-tight tracking-tight">
              Orders &amp; Deliveries
            </h1>
            <p className="text-sm text-slate-500 font-medium">
              Live cold-chain tracking, standing procurement schedules, and historical delivery manifests for Taj Mahal Palace Mumbai.
            </p>
          </div>

          {/* Right Header Badges & Cursive Banner */}
          <div className="flex items-center gap-4 shrink-0 self-end lg:self-auto">
            
            {/* Active Shipments Status Badge */}
            <div 
              onClick={() => setActiveTab("active")}
              className="bg-[#E6F9F0] border border-[#BBF7D0] px-4 py-2.5 rounded-2xl shadow-2xs flex items-center gap-2 text-xs font-bold text-[#0D9488] cursor-pointer hover:bg-[#DDF5EA] transition-colors"
            >
              <Truck className="w-4 h-4 text-[#0D9488]" />
              <span>2 ACTIVE SHIPMENTS IN TRANSIT</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#0D9488]" />
            </div>

            {/* Top Right Cursive Banner */}
            <div className="hidden xl:flex items-center gap-2 ml-1">
              <div className="text-right">
                <span className="font-serif italic text-base text-[#3B286D] leading-none block font-semibold drop-shadow-xs">
                  Better Ingredients,
                </span>
                <span className="font-serif italic text-base text-[#3B286D] leading-none block font-semibold drop-shadow-xs">
                  Stronger Partnerships
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

        {/* 4 TOP METRICS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Metric 1: Active Orders */}
          <div 
            onClick={() => setActiveTab("active")}
            className="bg-white rounded-[22px] border border-slate-200/80 p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] flex items-center justify-between hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#5E3B8C]/12 text-[#5E3B8C] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Box className="w-5 h-5 text-[#5E3B8C]" />
              </div>
              <div className="text-left">
                <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">ACTIVE ORDERS</div>
                <div className="font-serif font-bold text-xl text-[#111111] leading-tight mt-0.5">02 Dispatches</div>
                <div className="text-[10px] text-[#0D9488] font-bold mt-0.5">ETA Today 05:45 AM</div>
              </div>
            </div>
            <div className="w-7 h-7 rounded-xl bg-purple-50 text-[#5E3B8C] flex items-center justify-center shrink-0">
              <ChevronRight className="w-4 h-4 text-[#5E3B8C]" />
            </div>
          </div>

          {/* Metric 2: On-Time SLA */}
          <div 
            onClick={() => setActiveTab("standing")}
            className="bg-white rounded-[22px] border border-slate-200/80 p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] flex items-center justify-between hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#5E3B8C]/12 text-[#5E3B8C] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Clock className="w-5 h-5 text-[#5E3B8C]" />
              </div>
              <div className="text-left">
                <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">ON-TIME SLA</div>
                <div className="font-serif font-bold text-xl text-[#111111] leading-tight mt-0.5">99.8%</div>
                <div className="text-[10px] text-[#5E3B8C] font-semibold mt-0.5">365-Day Standing Agreement</div>
              </div>
            </div>
            <div className="w-7 h-7 rounded-xl bg-purple-50 text-[#5E3B8C] flex items-center justify-center shrink-0">
              <ChevronRight className="w-4 h-4 text-[#5E3B8C]" />
            </div>
          </div>

          {/* Metric 3: Cold Chain Compliance */}
          <div className="bg-white rounded-[22px] border border-slate-200/80 p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] flex items-center justify-between hover:shadow-md transition-all cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#5E3B8C]/12 text-[#5E3B8C] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Snowflake className="w-5 h-5 text-[#5E3B8C]" />
              </div>
              <div className="text-left">
                <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">COLD CHAIN COMPLIANCE</div>
                <div className="font-serif font-bold text-xl text-[#111111] leading-tight mt-0.5">-19.2°C</div>
                <div className="text-[10px] text-[#0D9488] font-bold mt-0.5">Verified Dock Telemetry</div>
              </div>
            </div>
            <div className="w-7 h-7 rounded-xl bg-purple-50 text-[#5E3B8C] flex items-center justify-center shrink-0">
              <ChevronRight className="w-4 h-4 text-[#5E3B8C]" />
            </div>
          </div>

          {/* Metric 4: October Fulfillment */}
          <div 
            onClick={() => setActiveTab("history")}
            className="bg-white rounded-[22px] border border-slate-200/80 p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] flex items-center justify-between hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#5E3B8C]/12 text-[#5E3B8C] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <FileText className="w-5 h-5 text-[#5E3B8C]" />
              </div>
              <div className="text-left">
                <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">OCTOBER FULFILLMENT</div>
                <div className="font-serif font-bold text-xl text-[#111111] leading-tight mt-0.5">28 Orders</div>
                <div className="text-[10px] text-slate-400 font-medium mt-0.5">Total 1,840 KG Delivered</div>
              </div>
            </div>
            <div className="w-7 h-7 rounded-xl bg-purple-50 text-[#5E3B8C] flex items-center justify-center shrink-0">
              <ChevronRight className="w-4 h-4 text-[#5E3B8C]" />
            </div>
          </div>

        </div>

        {/* TAB FILTERS ROW */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => setActiveTab("active")}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-2xs cursor-pointer ${
              activeTab === "active"
                ? "bg-[#1B0B2E] text-white"
                : "bg-white border border-slate-200/90 text-slate-700 hover:bg-slate-50"
            }`}
          >
            <Truck className="w-4 h-4" />
            <span>Active Shipments (2)</span>
          </button>

          <button
            onClick={() => setActiveTab("standing")}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-2xs cursor-pointer ${
              activeTab === "standing"
                ? "bg-[#1B0B2E] text-white"
                : "bg-white border border-slate-200/90 text-slate-700 hover:bg-slate-50"
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Standing Schedule (365-Day)</span>
          </button>

          <button
            onClick={() => setActiveTab("history")}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-2xs cursor-pointer ${
              activeTab === "history"
                ? "bg-[#1B0B2E] text-white"
                : "bg-white border border-slate-200/90 text-slate-700 hover:bg-slate-50"
            }`}
          >
            <History className="w-4 h-4" />
            <span>Order History (28 Orders)</span>
          </button>
        </div>

        {/* TAB CONTENT 1: ACTIVE SHIPMENTS */}
        {activeTab === "active" && (
          <div className="space-y-6 animate-fade-in">
            
            {/* SHIPMENT CARD 1: IN TRANSIT WITH GPS TELEMETRY */}
            <div className="bg-white rounded-[24px] border border-slate-200/80 p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] space-y-6">
              
              {/* Card Header Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                
                <div className="space-y-1 text-left">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-xs font-bold text-[#111111] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span>ORDER</span>
                      <span className="font-mono text-slate-600">#FG-ORD-2025-0891</span>
                      <Copy 
                        onClick={() => alert("Copied Order ID to clipboard.")}
                        className="w-3.5 h-3.5 text-slate-400 cursor-pointer hover:text-[#5E3B8C]" 
                      />
                    </span>

                    <span className="bg-[#E6F9F0] text-[#0D9488] border border-[#BBF7D0] px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488]" />
                      <span>IN TRANSIT • ETA Today 05:45 AM</span>
                    </span>
                  </div>

                  <div className="text-xs text-slate-500 font-medium">
                    Dispatched from <strong className="text-[#111111]">Bhiwandi Cold Hub</strong> &gt; Destination: <strong className="text-[#111111]">Taj Mahal Palace Loading Bay 2</strong>
                  </div>
                </div>

                {/* Right Action Buttons */}
                <div className="flex items-center gap-2 shrink-0 self-start md:self-auto">
                  <button
                    onClick={() => setDriverModal(true)}
                    className="bg-[#F4EFFB] hover:bg-[#E2D4F7] text-[#5E3B8C] border border-[#E2D4F7] text-xs font-bold px-4 py-2 rounded-xl transition-colors shadow-2xs flex items-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#5E3B8C]" />
                    <span>Call Driver (Ramesh)</span>
                  </button>

                  <button
                    onClick={() => alert("Downloading Official Manifest PDF for #FG-ORD-2025-0891...")}
                    className="border border-slate-200/90 hover:bg-slate-50 text-[#111111] text-xs font-bold px-4 py-2 rounded-xl transition-colors shadow-2xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-slate-600" />
                    <span>Manifest (PDF)</span>
                  </button>

                  <button
                    onClick={() => alert("Options: Track Vehicle Live | Download Temperature Logs | Contact Support")}
                    className="border border-slate-200/90 text-slate-400 hover:text-[#111111] hover:bg-slate-50 p-2 rounded-xl transition-colors shadow-2xs cursor-pointer"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>

              </div>

              {/* LIVE GPS TELEMETRY MAP GRID (12 COLS: 7 MAP, 5 TELEMETRY) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                
                {/* Visual Live Route Map Box (7 Cols) */}
                <div className="lg:col-span-7 bg-[#EBE9F5]/40 border border-slate-200/80 rounded-2xl p-5 relative overflow-hidden min-h-[220px] flex flex-col justify-between">
                  
                  {/* Map Weather Badge Top Right */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md border border-slate-200/80 px-3 py-1 rounded-xl shadow-2xs text-[10px] font-bold text-[#111111] flex items-center gap-1.5 z-10">
                    <span>🌙</span>
                    <span>24°C</span>
                    <span className="text-slate-400 font-normal">Clear</span>
                  </div>

                  {/* Graphic Route SVG Line connecting from Left to Right */}
                  <svg className="w-full h-full absolute inset-0 text-[#5E3B8C] pointer-events-none z-0" viewBox="0 0 1000 200" preserveAspectRatio="none">
                    <path 
                      d="M 120 140 C 250 20, 600 20, 750 120 C 800 150, 850 140, 880 140" 
                      fill="none" 
                      stroke="#5E3B8C" 
                      strokeWidth="3" 
                      strokeDasharray="6 6" 
                    />
                  </svg>

                  {/* Live Truck Marker on the Route Apex */}
                  <div className="absolute top-[32%] left-[42%] -translate-y-1/2 -translate-x-1/2 z-10">
                    <div className="bg-[#6B4699] text-white px-3 py-1.5 rounded-full shadow-md border-2 border-white flex items-center gap-1.5">
                      <Truck className="w-4 h-4 text-white" />
                      <span className="text-[10px] font-bold tracking-wider text-amber-300 font-mono">MH-04-FG-9021</span>
                    </div>
                  </div>

                  {/* Mumbai City Pin near Destination */}
                  <div className="absolute bottom-[28%] right-[22%] z-10 flex items-center gap-1 text-[11px] font-bold text-[#111111]">
                    <span>Mumbai</span>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#5E3B8C] border-2 border-white shadow-xs" />
                  </div>

                  {/* Map Waypoints Row */}
                  <div className="relative z-10 flex justify-between items-end w-full h-full pt-16">
                    {/* Point 1: Bhiwandi Cold Hub */}
                    <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 p-3 rounded-2xl shadow-xs text-left max-w-[140px]">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#111111]">
                        <div className="w-5 h-5 rounded-lg bg-[#5E3B8C]/15 text-[#5E3B8C] flex items-center justify-center shrink-0">
                          <Box className="w-3.5 h-3.5 text-[#5E3B8C]" />
                        </div>
                        <span>Bhiwandi Cold Hub</span>
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium pl-6">02:20 AM</div>
                    </div>

                    {/* Point 2: Destination Taj Mahal Palace */}
                    <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 p-3 rounded-2xl shadow-xs text-left max-w-[160px]">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#111111]">
                        <div className="w-5 h-5 rounded-lg bg-[#5E3B8C] text-white flex items-center justify-center shrink-0">
                          <MapPin className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span>Taj Mahal Palace Loading Bay 2</span>
                      </div>
                      <div className="text-[10px] text-[#0D9488] font-bold pl-6">ETA 05:45 AM</div>
                    </div>
                  </div>

                </div>

                {/* Live Sensor Telemetry Panel (5 Cols) */}
                <div className="lg:col-span-5 bg-[#F8F9FA] border border-slate-200/80 rounded-2xl p-5 flex flex-col justify-between space-y-3">
                  
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#5E3B8C]">
                      LIVE GPS TELEMETRY • VEHICLE MH-04-FG-9021
                    </span>
                    <span className="bg-[#E6F9F0] text-[#0D9488] text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] animate-pulse" />
                      <span>Live</span>
                    </span>
                  </div>

                  {/* 3 Telemetry Sensor Indicators Grid */}
                  <div className="grid grid-cols-3 gap-2 py-1">
                    
                    {/* Sensor 1: Chilled Bay */}
                    <div className="bg-white border border-slate-200/80 rounded-xl p-2.5 text-center">
                      <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider flex items-center justify-center gap-1">
                        <Thermometer className="w-3 h-3 text-[#0D9488]" />
                        <span>Chilled Bay</span>
                      </div>
                      <div className="font-bold text-[#0D9488] text-sm mt-1">+2.8°C</div>
                    </div>

                    {/* Sensor 2: Frozen Bay */}
                    <div className="bg-white border border-slate-200/80 rounded-xl p-2.5 text-center">
                      <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider flex items-center justify-center gap-1">
                        <Snowflake className="w-3 h-3 text-[#0D9488]" />
                        <span>Frozen Bay</span>
                      </div>
                      <div className="font-bold text-[#0D9488] text-sm mt-1">-19.2°C</div>
                    </div>

                    {/* Sensor 3: Speed */}
                    <div className="bg-white border border-slate-200/80 rounded-xl p-2.5 text-center">
                      <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider flex items-center justify-center gap-1">
                        <Gauge className="w-3 h-3 text-slate-600" />
                        <span>Speed</span>
                      </div>
                      <div className="font-bold text-[#111111] text-sm mt-1">42 km/h</div>
                    </div>

                  </div>

                  {/* Temperature Stability Sparkline */}
                  <div className="bg-white/80 border border-slate-200/60 p-2 rounded-xl flex items-center justify-between text-[10px]">
                    <div className="text-slate-500 font-medium">4-Hour Stability: <strong className="text-[#0D9488]">Zero Spikes (0.0°C Var)</strong></div>
                    <svg className="w-20 h-4 stroke-[#0D9488] fill-none stroke-[2]" viewBox="0 0 100 20">
                      <path d="M 0 10 L 20 9 L 40 10 L 60 8 L 80 10 L 100 9" />
                    </svg>
                  </div>

                  {/* Ping Sub-text */}
                  <div className="text-[10px] text-slate-400 font-medium text-left pt-1 border-t border-slate-200/60">
                    Last Ping: <strong className="text-slate-600">2 mins ago</strong> | Next Checkpoint: <strong className="text-slate-600">Eastern Expressway (12 km)</strong>
                  </div>

                </div>

              </div>

              {/* MANIFEST LINE ITEMS ROW */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#5E3B8C]">
                    MANIFEST LINE ITEMS ({manifestItems.length} SHOWN)
                  </span>
                  <button 
                    onClick={() => setShowAllItems(!showAllItems)}
                    className="text-xs font-bold text-[#5E3B8C] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>{showAllItems ? "Hide Manifest Details" : "View All Items (12)"}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#5E3B8C]" />
                  </button>
                </div>

                {/* 3 Main Item Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {manifestItems.slice(0, 3).map((item) => (
                    <div 
                      key={item.id}
                      className="bg-[#F8F9FA] border border-slate-200/80 rounded-2xl p-3 flex items-center justify-between hover:border-purple-200 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-slate-200">
                          <Image src={item.image} alt={item.title} fill className="object-cover" />
                        </div>
                        <div className="text-left space-y-0.5">
                          <div className="font-serif font-bold text-xs text-[#111111] leading-tight">{item.title}</div>
                          <div className="text-[10px] text-slate-500 font-medium">{item.cases}</div>
                          <div className="text-[10px] text-[#0D9488] font-bold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
                            <span>{item.status}</span>
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                    </div>
                  ))}
                </div>

                {/* Expanded Manifest Drawer */}
                {showAllItems && (
                  <div className="p-4 bg-[#F4EFFB]/50 rounded-2xl border border-[#E2D4F7] space-y-3 text-xs animate-fade-in text-left">
                    <div className="font-bold text-[#5E3B8C] flex items-center justify-between">
                      <span>Full Cargo Manifest Batch Breakdown (12 SKUs Total)</span>
                      <span className="font-mono text-[10px] text-slate-500">BATCH: #FGB-2025-MUM-092</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      {manifestItems.map((item) => (
                        <div key={item.id} className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-3">
                          <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0">
                            <Image src={item.image} alt={item.title} fill className="object-cover" />
                          </div>
                          <div className="text-left">
                            <div className="font-bold text-[#111111] text-xs">{item.title}</div>
                            <div className="text-[10px] text-slate-500 font-mono">{item.sku} • {item.lot}</div>
                            <div className="text-[10px] text-[#0D9488] font-semibold">{item.cases} • Temp Spec: {item.tempRange}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

            </div>

            {/* COMPLETED ORDER CARD 2: DELIVERED WITH REORDER ACTION */}
            <div className="bg-white rounded-[24px] border border-slate-200/80 p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] flex flex-col md:flex-row md:items-center justify-between gap-4">
              
              <div className="space-y-1 text-left">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-bold text-[#111111] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>ORDER</span>
                    <span className="font-mono text-slate-600">#FG-ORD-2025-0842</span>
                    <Copy 
                      onClick={() => alert("Copied Order ID #FG-ORD-2025-0842 to clipboard.")}
                      className="w-3.5 h-3.5 text-slate-400 cursor-pointer hover:text-[#5E3B8C]" 
                    />
                  </span>

                  <span className="bg-[#E6F9F0] text-[#0D9488] border border-[#BBF7D0] px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488]" />
                    <span>DELIVERED • Yesterday 05:30 AM</span>
                  </span>
                </div>

                <div className="text-xs text-slate-500 font-medium">
                  Signed off by: <strong className="text-[#111111]">Chef Vikram Singh (Executive Chef)</strong> • Dock Temperature: <strong className="text-[#0D9488]">Verified Compliant</strong>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 self-start md:self-auto">
                <button
                  onClick={() => alert("Reordering exact batch for Taj Mahal Palace...")}
                  className="bg-[#1B0B2E] hover:bg-[#2B1B4E] text-white text-xs font-extrabold px-6 py-2.5 rounded-xl shadow-md transition-colors flex items-center gap-2 cursor-pointer active:scale-[0.98]"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-white" />
                  <span>Reorder Exact Batch</span>
                </button>

                <button
                  onClick={() => alert("Options: Download Sign-off Slip | Issue Invoice PDF | Report Variance")}
                  className="border border-slate-200/90 text-slate-400 hover:text-[#111111] hover:bg-slate-50 p-2 rounded-xl transition-colors shadow-2xs cursor-pointer"
                >
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        )}

        {/* TAB CONTENT 2: STANDING SCHEDULE */}
        {activeTab === "standing" && (
          <div className="bg-white rounded-[24px] border border-slate-200/80 p-6 sm:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] space-y-6 animate-fade-in text-left">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#111111]">365-Day Standing Procurement Schedule</h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Automated recurring cold-chain dispatch contract for Taj Mahal Palace Mumbai.
                </p>
              </div>
              <span className="bg-[#F4EFFB] text-[#5E3B8C] border border-[#E2D4F7] px-3.5 py-1.5 rounded-full text-xs font-bold">
                Daily Morning Dispatch (05:00 AM)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-[#F8F9FA] rounded-2xl border border-slate-200/80 space-y-1">
                <div className="text-[10px] font-bold text-slate-400 uppercase">NEXT AUTOMATED DISPATCH</div>
                <div className="font-serif font-bold text-lg text-[#111111]">Tomorrow 05:00 AM</div>
                <div className="text-xs text-[#0D9488] font-bold">Confirmed Stock Reserved</div>
              </div>
              <div className="p-4 bg-[#F8F9FA] rounded-2xl border border-slate-200/80 space-y-1">
                <div className="text-[10px] font-bold text-slate-400 uppercase">STAND-BY LOGISTICS VEHICLE</div>
                <div className="font-serif font-bold text-lg text-[#111111]">Vehicle MH-04-FG-9021</div>
                <div className="text-xs text-slate-500 font-medium">Refrigerated Bay #2</div>
              </div>
              <div className="p-4 bg-[#F4EFFB]/80 rounded-2xl border border-[#E2D4F7] space-y-1">
                <div className="text-[10px] font-bold text-[#5E3B8C] uppercase">ACCOUNT MASTER AGREEMENT</div>
                <div className="font-serif font-bold text-lg text-[#5E3B8C]">Taj Group Enterprise RFQ</div>
                <div className="text-xs text-[#5E3B8C] font-semibold">Locked Price Tier (FY25-Q2)</div>
              </div>
            </div>
          </div>
        )}

        {/* TAB CONTENT 3: ORDER HISTORY */}
        {activeTab === "history" && (
          <div className="bg-white rounded-[24px] border border-slate-200/80 p-6 sm:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] space-y-6 animate-fade-in text-left">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#111111]">Historical Delivery Manifests (28 Total)</h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Complete archive of signed cold-chain delivery logs and tax invoices.
                </p>
              </div>
              <button 
                onClick={() => alert("Exporting all 28 historical invoices as ZIP...")}
                className="bg-[#1B0B2E] text-white text-xs font-bold px-4 py-2 rounded-xl shadow-2xs flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-white" />
                <span>Export All Invoices (PDF)</span>
              </button>
            </div>

            <div className="space-y-3">
              {[
                { id: "#FG-ORD-2025-0842", date: "Yesterday 05:30 AM", weight: "720 KG", status: "Delivered & Inspected", total: "₹4,12,000" },
                { id: "#FG-ORD-2025-0810", date: "02 Oct 2025 05:15 AM", weight: "540 KG", status: "Delivered & Inspected", total: "₹3,85,500" },
                { id: "#FG-ORD-2025-0789", date: "28 Sep 2025 05:45 AM", weight: "580 KG", status: "Delivered & Inspected", total: "₹4,05,000" }
              ].map((row) => (
                <div key={row.id} className="p-4 bg-[#F8F9FA] rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="space-y-0.5">
                    <div className="font-bold text-[#111111] font-mono">{row.id} • {row.date}</div>
                    <div className="text-slate-500 font-medium">{row.weight} Delivered • <span className="text-[#0D9488] font-bold">{row.status}</span></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-serif font-bold text-sm text-[#111111]">{row.total}</span>
                    <button 
                      onClick={() => alert(`Downloading Invoice for ${row.id}...`)}
                      className="px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold"
                    >
                      Invoice PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DRIVER CONTACT MODAL */}
        {driverModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-[24px] max-w-md w-full p-6 shadow-2xl space-y-5 text-left border border-purple-100 relative">
              <button 
                onClick={() => setDriverModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-[#111111] p-1 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden relative shrink-0 border-2 border-[#5E3B8C]">
                  <Image src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=200&q=80" alt="Driver Ramesh" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#111111]">Ramesh Kumar</h3>
                  <div className="text-xs text-[#5E3B8C] font-bold">Senior Dispatch Officer • 5★ Rated</div>
                  <div className="text-[10px] text-slate-400 font-medium">Certified Cold-Chain Transport Master</div>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 bg-[#F8F9FA] rounded-xl flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Vehicle Registration:</span>
                  <span className="font-mono font-bold text-[#111111]">MH-04-FG-9021</span>
                </div>
                <div className="p-3 bg-[#F8F9FA] rounded-xl flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Mobile Contact:</span>
                  <span className="font-bold text-[#5E3B8C]">+91 98200 11223</span>
                </div>
                <div className="p-3 bg-[#E6F9F0] rounded-xl flex items-center justify-between text-[#0D9488]">
                  <span className="font-medium">Current ETA Dock:</span>
                  <span className="font-bold">05:45 AM (On-Time)</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => alert("Initiating phone call to Ramesh Kumar...")}
                  className="flex-1 py-3 rounded-xl bg-[#1B0B2E] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md hover:bg-[#2B1B4E] cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>Call Driver Now</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
