"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  FileText, 
  Download, 
  Eye, 
  Edit3, 
  Upload, 
  Plus, 
  ExternalLink, 
  MapPin, 
  Phone, 
  Mail,
  Sparkles,
  ChevronRight,
  Lock,
  RefreshCw
} from "lucide-react";

interface ScreenProfileProps {
  onNavigateOnboarding: () => void;
  onNavigateTab?: (tab: string) => void;
}

export default function ScreenProfile({ onNavigateOnboarding, onNavigateTab }: ScreenProfileProps) {
  const [activeSubTab, setActiveSubTab] = useState<"info" | "vault" | "docks" | "contacts" | "menus">("info");

  return (
    <div className="min-h-screen bg-[#FAF8FD] pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
        
        {/* BREADCRUMBS & TOP HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-wider text-purple-700 font-mono">
              ENTERPRISE MANAGEMENT / INSTITUTIONAL PROFILE
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Business Profile
            </h1>
            <p className="text-xs text-slate-500 max-w-2xl">
              Manage corporate HORECA entity details, verified FSSAI licenses, delivery dock locations, and active culinary menus.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => alert("Downloading Compliance Dossier PDF...")}
              className="px-4 py-2 rounded-xl bg-white border border-purple-200 text-slate-800 text-xs font-bold hover:bg-purple-50 flex items-center gap-1.5 shadow-2xs"
            >
              <FileText className="w-3.5 h-3.5 text-purple-700" /> Compliance Dossier
            </button>
            <button
              onClick={() => alert("Re-verifying Tier-1 Institutional Status...")}
              className="px-4 py-2 rounded-xl bg-[#4D2694] hover:bg-[#381973] text-white text-xs font-bold flex items-center gap-1.5 shadow-xs"
            >
              <Lock className="w-3.5 h-3.5 text-amber-300" /> Re-verify Tier Status
            </button>
          </div>
        </div>

        {/* TOP EXECUTIVE BANNER CARD */}
        <div className="bg-white rounded-3xl border border-purple-100/90 shadow-xs p-6 lg:p-7 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Property Identity (4 cols) */}
            <div className="lg:col-span-4 flex items-start gap-4 border-b lg:border-b-0 lg:border-r border-slate-100 pb-4 lg:pb-0 lg:pr-4">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-slate-200 shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=300&q=80"
                  alt="Taj Mahal Palace Mumbai"
                  fill
                  className="object-cover"
                />
                <span className="absolute top-1 left-1 bg-amber-400 text-purple-950 text-[9px] font-bold px-1.5 py-0.2 rounded font-serif">
                  B
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] uppercase font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                    🇮🇳 INSTITUTIONAL KEY
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">GS1 ID: FG-MUM-2792</span>
                </div>
                <h2 className="text-xl font-serif font-bold text-slate-900 leading-tight">
                  Taj Mahal Palace &amp; Tower
                </h2>
                <div className="text-[11px] text-slate-500">Indian Hotels Company Limited</div>
                <div className="text-[10px] text-purple-900 font-semibold bg-purple-50 px-2 py-0.5 rounded inline-block">
                  Luxury Heritage 5-Star Hotel &amp; Fine Dining Outlets
                </div>
              </div>
            </div>

            {/* Middle Tier Allocation (4 cols) */}
            <div className="lg:col-span-4 space-y-2 border-b lg:border-b-0 lg:border-r border-slate-100 pb-4 lg:pb-0 lg:px-4">
              <div className="text-[10px] uppercase font-bold text-slate-400">TIER ALLOCATION</div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-serif font-bold text-slate-900">Tier-1 Institutional</span>
                <span className="text-[9px] font-bold text-purple-900 bg-purple-100 px-2 py-0.5 rounded">
                  Priority SLA
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                Dedicated refrigerated cold-dock tracking • Sub-zero dual compliant
              </p>
              <div className="flex items-center gap-4 text-[10px] text-slate-600 pt-1 font-mono">
                <span>SLA Compliance: <strong className="text-emerald-700">99.4%</strong></span>
                <span>Monthly Vol: <strong className="text-purple-950">4.8MT</strong></span>
              </div>
            </div>

            {/* Right Trust Badges (4 cols) */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-2 text-xs">
              <div className="bg-purple-50/60 p-2.5 rounded-2xl border border-purple-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                <div>
                  <div className="font-bold text-slate-900 text-[11px]">Business Verified</div>
                  <div className="text-[9px] text-slate-400">ROC &amp; Corporate Affairs</div>
                </div>
              </div>

              <div className="bg-purple-50/60 p-2.5 rounded-2xl border border-purple-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <div className="font-bold text-slate-900 text-[11px]">FSSAI Validated</div>
                  <div className="text-[9px] text-slate-400">Central 5-Star Grade</div>
                </div>
              </div>

              <div className="bg-purple-50/60 p-2.5 rounded-2xl border border-purple-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                <div>
                  <div className="font-bold text-slate-900 text-[11px]">Cold Chain Approved</div>
                  <div className="text-[9px] text-slate-400">HACCP Dock Compliant</div>
                </div>
              </div>

              <div className="bg-purple-50/60 p-2.5 rounded-2xl border border-purple-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <div className="font-bold text-slate-900 text-[11px]">Menu AI Synced</div>
                  <div className="text-[9px] text-slate-400">42 Dishes Mapped</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* SECONDARY NAVIGATION SUB-TABS */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar">
          <button
            onClick={() => setActiveSubTab("info")}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeSubTab === "info"
                ? "bg-[#4D2694] text-white shadow-xs"
                : "bg-white border border-purple-100 text-slate-700 hover:bg-purple-50"
            }`}
          >
            🏢 Business Information
          </button>

          <button
            onClick={() => setActiveSubTab("vault")}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeSubTab === "vault"
                ? "bg-[#4D2694] text-white shadow-xs"
                : "bg-white border border-purple-100 text-slate-700 hover:bg-purple-50"
            }`}
          >
            🛡 GST &amp; FSSAI Vault (3)
          </button>

          <button
            onClick={() => setActiveSubTab("docks")}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeSubTab === "docks"
                ? "bg-[#4D2694] text-white shadow-xs"
                : "bg-white border border-purple-100 text-slate-700 hover:bg-purple-50"
            }`}
          >
            🚚 Receiving Locations &amp; Docks
          </button>

          <button
            onClick={() => setActiveSubTab("contacts")}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeSubTab === "contacts"
                ? "bg-[#4D2694] text-white shadow-xs"
                : "bg-white border border-purple-100 text-slate-700 hover:bg-purple-50"
            }`}
          >
            👨‍🍳 Key Culinary Contacts
          </button>

          <button
            onClick={() => setActiveSubTab("menus")}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeSubTab === "menus"
                ? "bg-[#4D2694] text-white shadow-xs"
                : "bg-white border border-purple-100 text-slate-700 hover:bg-purple-50"
            }`}
          >
            🍽 Menu Submissions (2)
          </button>
        </div>

        {/* SECTION 1: CORPORATE IDENTITY & HOSPITALITY PROFILE (2 COLS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Corporate Identity & Fiscal Entity (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 lg:p-8 border border-purple-100/90 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  Corporate Identity &amp; Fiscal Entity
                </h3>
                <p className="text-xs text-slate-500">Primary legal parameters registered with Fortune Gourmet B2B network</p>
              </div>
              <button
                onClick={() => alert("Edit Business Details modal opened.")}
                className="px-3 py-1.5 rounded-xl bg-purple-50 text-purple-900 border border-purple-200 text-xs font-bold hover:bg-purple-100 flex items-center gap-1"
              >
                <Edit3 className="w-3.5 h-3.5" /> Edit Business Details
              </button>
            </div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-purple-50/40 p-4 rounded-2xl border border-purple-100 space-y-1">
                <div className="text-[10px] font-bold text-slate-400 uppercase">LEGAL REGISTERED NAME</div>
                <div className="font-bold text-slate-900 text-sm font-serif">Indian Hotels Company Limited</div>
                <div className="text-[10px] text-slate-400 font-mono">CIN: L74999MH1902PLC000183</div>
              </div>

              <div className="bg-purple-50/40 p-4 rounded-2xl border border-purple-100 space-y-1">
                <div className="text-[10px] font-bold text-slate-400 uppercase">OPERATING BRAND &amp; UNIT</div>
                <div className="font-bold text-slate-900 text-sm font-serif">The Taj Mahal Palace, Mumbai</div>
                <div className="text-[10px] text-slate-400">Heritage Flagship Complex</div>
              </div>

              <div className="bg-purple-50/40 p-4 rounded-2xl border border-purple-100 space-y-1">
                <div className="text-[10px] font-bold text-slate-400 uppercase">CORPORATE PAN</div>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-slate-900 text-sm">AAACT1984F</span>
                  <span className="text-[9px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">✓ Verified</span>
                </div>
                <div className="text-[10px] text-slate-400">Linked with Central NSDL Ledger</div>
              </div>

              <div className="bg-purple-50/40 p-4 rounded-2xl border border-purple-100 space-y-1">
                <div className="text-[10px] font-bold text-slate-400 uppercase">INSTITUTIONAL PAYMENT TERMS</div>
                <div className="font-bold text-purple-950 text-sm font-serif">Net 30 Days Standard EOM</div>
                <div className="text-[10px] text-slate-500">Credit Limit: ₹45,00,000 Approved</div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
              <div className="text-[10px] font-bold text-slate-400 uppercase">REGISTERED CORPORATE OFFICE</div>
              <div className="text-xs font-semibold text-slate-800 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                <span>Mandlik House, Mandlik Road, Colaba, Mumbai 400001, Maharashtra, India. Jurisdiction: Ward &apos;A&apos; South Mumbai Municipal Corporation</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-100 font-mono gap-2">
              <span>🛡 Last verified by Fortune Key Account Lead on 14 Jan 2025</span>
              <span className="truncate">AUTH_DID_0x45B...B9240...0015</span>
            </div>
          </div>

          {/* Hospitality Profile & Key Account Lead (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Image Card */}
            <div className="bg-white rounded-3xl border border-purple-100/90 shadow-xs overflow-hidden">
              <div className="relative h-44 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80"
                  alt="Taj Gateway"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md text-white text-[10px] font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-400" /> Apollo Bunder, Gateway of India
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="text-base font-bold text-slate-900 font-serif mb-1">HOSPITALITY PROFILE</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Home to 11 world-class restaurants, legendary banqueting suites, and Michelin-caliber guest culinary services requiring guaranteed cold-chain delivery windows.
                  </p>
                </div>

                <div className="flex justify-between items-center bg-purple-50 p-3 rounded-2xl text-xs font-semibold text-purple-950">
                  <span>Active Outlets Connected</span>
                  <span className="font-serif font-bold text-sm text-purple-900">6 Locations</span>
                </div>
              </div>
            </div>

            {/* Key Account Director Card */}
            <div className="bg-white rounded-3xl p-6 border border-purple-100/90 shadow-xs flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-purple-300">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                    alt="Siddharth Nambiar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-xs font-serif">Siddharth Nambiar</h5>
                  <div className="text-[10px] text-purple-900 font-semibold">Enterprise Relationship Director</div>
                  <div className="text-[10px] text-slate-400">Fortune Gourmet Mumbai HQ</div>
                </div>
              </div>

              <div className="text-right shrink-0 space-y-1">
                <div className="text-[10px] font-mono text-slate-500">+91 22 6185 3200</div>
                <button onClick={() => alert("Direct messaging opened.")} className="text-[11px] font-bold text-purple-700 hover:underline">
                  Direct Message
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* SECTION 2: REGULATORY & TAX COMPLIANCE VAULT */}
        <div className="bg-white rounded-3xl p-6 lg:p-8 border border-purple-100/90 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  Regulatory &amp; Tax Compliance Vault
                </h3>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded">
                  100% Verified
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Statutory documentation guaranteeing cold-chain transit legality and fiscal invoice validity
              </p>
            </div>

            <button
              onClick={() => alert("Upload document modal opened.")}
              className="px-4 py-2 rounded-xl bg-[#4D2694] hover:bg-[#381973] text-white text-xs font-bold flex items-center gap-1.5 shadow-xs shrink-0"
            >
              <Upload className="w-3.5 h-3.5" /> Upload New Document
            </button>
          </div>

          {/* Top 2 Licenses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* GST Card */}
            <div className="p-5 bg-purple-50/40 rounded-2xl border border-purple-100 space-y-3">
              <div className="flex justify-between items-start">
                <div className="text-[10px] uppercase font-bold text-slate-400">GOODS &amp; SERVICES TAX IDENTIFICATION</div>
                <span className="text-[9px] font-bold text-purple-900 bg-purple-100 px-2.5 py-0.5 rounded">
                  Active - OneTax API Verified
                </span>
              </div>

              <div className="text-2xl font-mono font-bold text-slate-900">
                27AAACI1681G1Z8
              </div>

              <div className="text-xs text-slate-600">
                State: Maharashtra (27) • Turnover Type: Regular Corporate Entity
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-purple-200/60 text-xs">
                <span className="text-slate-500">E-invoicing Standard: Enabled</span>
                <button onClick={() => alert("GSTN logs opened.")} className="font-bold text-purple-700 hover:underline flex items-center gap-1">
                  View GSTN Logs <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* FSSAI Card */}
            <div className="p-5 bg-purple-50/40 rounded-2xl border border-purple-100 space-y-3">
              <div className="flex justify-between items-start">
                <div className="text-[10px] uppercase font-bold text-slate-400">FSSAI CENTRAL REGULATORY LICENSE</div>
                <span className="text-[9px] font-bold text-amber-950 bg-amber-100 px-2.5 py-0.5 rounded">
                  Central Authority Passed
                </span>
              </div>

              <div className="text-2xl font-mono font-bold text-slate-900">
                10014022003189
              </div>

              <div className="text-xs text-slate-600">
                Category: Central License - 5 Star Hotel Food Service &amp; Import Handling
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-purple-200/60 text-xs">
                <span className="text-slate-500">Validity: Till 31 Dec 2026</span>
                <span className="font-bold text-amber-800">Renewal in 680 days</span>
              </div>
            </div>

          </div>

          {/* OFFICIAL STORED DOCUMENTATION FILES LIST */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase text-slate-400 flex justify-between">
              <span>OFFICIAL STORED DOCUMENTATION</span>
              <span>3 Encrypted Files</span>
            </div>

            {/* Doc 1 */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 font-bold flex items-center justify-center text-xs shrink-0">
                  PDF
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-xs flex items-center gap-2">
                    FSSAI_Certificate_taj_2025.pdf
                    <span className="text-[9px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.2 rounded">Verified</span>
                  </div>
                  <div className="text-[10px] text-slate-500">Central Food Safety License • Valid till Dec 2026 • 2.4 MB</div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button onClick={() => alert("Previewing document...")} className="p-2 text-slate-500 hover:text-slate-900"><Eye className="w-4 h-4" /></button>
                <button onClick={() => alert("Downloading document...")} className="p-2 text-slate-500 hover:text-slate-900"><Download className="w-4 h-4" /></button>
              </div>
            </div>

            {/* Doc 2 */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 font-bold flex items-center justify-center text-xs shrink-0">
                  PDF
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-xs flex items-center gap-2">
                    GST_Registration_Certificate.pdf
                    <span className="text-[9px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.2 rounded">Verified</span>
                  </div>
                  <div className="text-[10px] text-slate-500">Form GST REG-06 Principal Place Certificate • 1.1 MB</div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button onClick={() => alert("Previewing document...")} className="p-2 text-slate-500 hover:text-slate-900"><Eye className="w-4 h-4" /></button>
                <button onClick={() => alert("Downloading document...")} className="p-2 text-slate-500 hover:text-slate-900"><Download className="w-4 h-4" /></button>
              </div>
            </div>

            {/* Doc 3 */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 font-bold flex items-center justify-center text-xs shrink-0">
                  PDF
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-xs flex items-center gap-2">
                    Business_PAN_IHCL.pdf
                    <span className="text-[9px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.2 rounded">Verified</span>
                  </div>
                  <div className="text-[10px] text-slate-500">Income Tax Department Corporate Certificate • 890 KB</div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button onClick={() => alert("Previewing document...")} className="p-2 text-slate-500 hover:text-slate-900"><Eye className="w-4 h-4" /></button>
                <button onClick={() => alert("Downloading document...")} className="p-2 text-slate-500 hover:text-slate-900"><Download className="w-4 h-4" /></button>
              </div>
            </div>
          </div>

        </div>

        {/* SECTION 3: KITCHEN OUTLETS & AI-SYNCED MENUS */}
        <div className="bg-white rounded-3xl p-6 lg:p-8 border border-purple-100/90 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  Kitchen Outlets &amp; AI-Synced Menus
                </h3>
                <span className="text-xs font-bold text-amber-950 bg-amber-100 px-2.5 py-0.5 rounded">
                  Auto-Sync Active
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Menu ingredients continuously cross-referenced with Fortune Gourmet premium import stock
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button onClick={() => alert("Update Menu File modal opened.")} className="px-3 py-2 rounded-xl bg-purple-50 border border-purple-200 text-purple-900 text-xs font-bold hover:bg-purple-100 flex items-center gap-1">
                <FileText className="w-3.5 h-3.5" /> Update Menu File
              </button>
              <button onClick={() => alert("Add Kitchen Outlet modal opened.")} className="px-4 py-2 rounded-xl bg-[#4D2694] text-white text-xs font-bold hover:bg-[#381973] flex items-center gap-1">
                <Plus className="w-3.5 h-3.5" /> Add New Kitchen / Outlet
              </button>
            </div>
          </div>

          {/* 2 Outlet Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Wasabi Card */}
            <div className="bg-purple-50/30 rounded-3xl border border-purple-100 overflow-hidden space-y-4 p-6">
              <div className="flex items-start justify-between border-b border-purple-100 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-purple-900 text-white font-serif font-bold flex items-center justify-center text-sm shadow-sm">
                    WM
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-slate-900 font-serif text-base">Wasabi by Morimoto</h4>
                      <span className="text-[9px] uppercase font-bold text-purple-900 bg-purple-100 px-2 py-0.2 rounded">Fine Dining</span>
                    </div>
                    <div className="text-[11px] text-slate-500">Japanese Contemporary Specialty</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-800">Autumn/Winter Omakase &amp; A La Carte</span>
                <span className="font-mono text-slate-400 text-[10px]">DEV 2025.1</span>
              </div>

              <div className="flex gap-2">
                <span className="text-[10px] font-bold text-purple-900 bg-purple-100/80 px-2.5 py-1 rounded-full">
                  • 42 Analyzed Dishes
                </span>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full">
                  • 18 Ingredients Matched
                </span>
              </div>

              <div className="space-y-1 pt-1">
                <div className="text-[9px] uppercase font-bold text-slate-400">AUTOMATED SUPPLY STREAMS</div>
                <div className="flex flex-wrap gap-1">
                  <span className="text-[10px] bg-white border border-purple-100 px-2 py-0.5 rounded text-slate-800">Fresh Bluefin Tuna Honmaguro</span>
                  <span className="text-[10px] bg-white border border-purple-100 px-2 py-0.5 rounded text-slate-800">Hokkaido Sea Urchin Uni</span>
                  <span className="text-[10px] bg-white border border-purple-100 px-2 py-0.5 rounded text-slate-800">Kurobuta Pork Belly</span>
                  <span className="text-[10px] bg-white border border-purple-100 px-2 py-0.5 rounded text-slate-800">Tosa Shoyu Soy</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-purple-100 text-xs">
                <span className="text-slate-500">Head Chef: <strong>Shimomura San</strong></span>
                <button
                  onClick={() => onNavigateTab ? onNavigateTab("mymenu") : null}
                  className="font-bold text-purple-700 hover:underline flex items-center gap-1"
                >
                  View Dish Inclusions <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Shamiana Card */}
            <div className="bg-purple-50/30 rounded-3xl border border-purple-100 overflow-hidden space-y-4 p-6">
              <div className="flex items-start justify-between border-b border-purple-100 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-purple-900 text-white font-serif font-bold flex items-center justify-center text-sm shadow-sm">
                    SH
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-slate-900 font-serif text-base">Shamiana</h4>
                      <span className="text-[9px] uppercase font-bold text-slate-800 bg-slate-200 px-2 py-0.2 rounded">All-Day</span>
                    </div>
                    <div className="text-[11px] text-slate-500">All-Day International Dining &amp; Bistro</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-800">All-Day International Dining</span>
                <span className="font-mono text-slate-400 text-[10px]">DEV 2025.1</span>
              </div>

              <div className="flex gap-2">
                <span className="text-[10px] font-bold text-purple-900 bg-purple-100/80 px-2.5 py-1 rounded-full">
                  • 42 Analyzed Dishes
                </span>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full">
                  • 14 Ingredients Matched
                </span>
              </div>

              <div className="space-y-1 pt-1">
                <div className="text-[9px] uppercase font-bold text-slate-400">AUTOMATED SUPPLY STREAMS</div>
                <div className="flex flex-wrap gap-1">
                  <span className="text-[10px] bg-white border border-purple-100 px-2 py-0.5 rounded text-slate-800">Fresh Burrata Cheeses</span>
                  <span className="text-[10px] bg-white border border-purple-100 px-2 py-0.5 rounded text-slate-800">Zanetti Mozzarella DOP</span>
                  <span className="text-[10px] bg-white border border-purple-100 px-2 py-0.5 rounded text-slate-800">Norwegian Salmon Fillet</span>
                  <span className="text-[10px] bg-white border border-purple-100 px-2 py-0.5 rounded text-slate-800">Acquerello Carnaroli Rice</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-purple-100 text-xs">
                <span className="text-slate-500">Chef de Cuisine: <strong>Amit Roy</strong></span>
                <button
                  onClick={() => onNavigateTab ? onNavigateTab("mymenu") : null}
                  className="font-bold text-purple-700 hover:underline flex items-center gap-1"
                >
                  View Dish Inclusions <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* AI Gap Discovery Callout Bar */}
          <div className="bg-amber-50/80 border border-amber-300 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-900 text-amber-300 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-amber-950">Smart Ingredient Gap Discovery</span> — <span className="text-slate-700">Fortune AI detected 7 specialty cheese and truffle pairings missing from current seasonal menu costing.</span>
              </div>
            </div>

            <button
              onClick={() => onNavigateTab ? onNavigateTab("recommendations") : null}
              className="px-4 py-2 rounded-xl bg-white border border-amber-300 text-purple-950 font-bold text-xs hover:bg-amber-100 shrink-0 shadow-2xs"
            >
              Review AI Recommendations
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
