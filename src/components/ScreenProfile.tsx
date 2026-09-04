"use client";

import React from "react";
import Image from "next/image";
import { 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Download, 
  Eye, 
  MapPin, 
  Phone, 
  Mail,
  ChevronRight,
  User
} from "lucide-react";

interface ScreenProfileProps {
  onNavigateOnboarding: () => void;
  onNavigateTab?: (tab: string) => void;
}

export default function ScreenProfile({ onNavigateOnboarding, onNavigateTab }: ScreenProfileProps) {
  return (
    <div className="min-h-screen bg-[#FAF8FD] pb-24 font-sans antialiased text-[#111111]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
        
        {/* PAGE HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/60 pb-6 text-left">
          <div className="space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#5E3B8C]">
              INSTITUTIONAL ACCOUNT
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#111111] tracking-tight">
              Business &amp; Property Profile
            </h1>
            <p className="text-xs text-slate-500 font-medium max-w-xl">
              Corporate identity, validated FSSAI &amp; GST licenses, and connected kitchen outlets for Taj Mahal Palace Mumbai.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => alert("Downloading Corporate Account Summary PDF...")}
              className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-[#111111] text-xs font-bold hover:bg-slate-50 flex items-center gap-2 shadow-2xs cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#5E3B8C]" />
              <span>Account Summary</span>
            </button>
          </div>
        </div>

        {/* PROPERTY HERO CARD */}
        <div className="bg-white rounded-[26px] border border-slate-200/80 p-6 sm:p-8 shadow-[0_10px_35px_-10px_rgba(28,11,51,0.03)] space-y-6 text-left">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            {/* Left Property Identity */}
            <div className="flex items-start gap-4">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-slate-200 shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80"
                  alt="Taj Mahal Palace Mumbai"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] uppercase font-bold text-[#0D9488] bg-[#E6F9F0] border border-[#BBF7D0] px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#0D9488]" />
                    <span>VERIFIED ENTERPRISE ACCOUNT</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">ID: FG-MUM-2792</span>
                </div>

                <h2 className="text-2xl font-serif font-bold text-[#111111] leading-tight">
                  Taj Mahal Palace &amp; Tower
                </h2>
                <div className="text-xs text-slate-500 font-medium">
                  Indian Hotels Company Limited (IHCL)
                </div>
                <div className="text-[11px] text-slate-500 flex items-center gap-1 pt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#5E3B8C]" />
                  <span>Apollo Bunder, Colaba, Mumbai 400001, Maharashtra</span>
                </div>
              </div>
            </div>

            {/* Right Tier Info */}
            <div className="bg-[#FAF8FD] border border-purple-100 p-4 rounded-2xl space-y-1.5 shrink-0 min-w-[240px]">
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">CONTRACT TIER</div>
              <div className="font-serif font-bold text-lg text-[#1C0B33]">Tier-1 Institutional</div>
              <div className="text-[11px] text-[#0D9488] font-bold">Priority SLA • Net 30 Terms</div>
              <div className="text-[10px] text-slate-400 font-mono pt-1 border-t border-purple-100">
                Credit Limit: ₹45,00,000 Approved
              </div>
            </div>

          </div>
        </div>

        {/* TWO COLUMN GRID: REGULATORY LICENSES & KEY CONTACTS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Regulatory Licenses Vault (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-[26px] p-6 sm:p-7 border border-slate-200/80 shadow-[0_10px_35px_-10px_rgba(28,11,51,0.03)] space-y-5 text-left">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-lg font-serif font-bold text-[#111111]">Compliance &amp; Licenses</h3>
                <p className="text-xs text-slate-500">Verified statutory documents for cold-chain ordering</p>
              </div>
              <span className="text-[10px] font-bold bg-[#E6F9F0] text-[#0D9488] border border-[#BBF7D0] px-2.5 py-1 rounded-full">
                100% Compliant
              </span>
            </div>

            <div className="space-y-3">
              {/* GST Document */}
              <div className="p-4 bg-[#FAF8FD] rounded-2xl border border-purple-100/80 flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="text-[10px] uppercase font-bold text-slate-400">GSTIN REGISTRATION</div>
                  <div className="font-mono font-bold text-sm text-[#111111]">27AAACI1681G1Z8</div>
                  <div className="text-[11px] text-slate-500">Maharashtra • Verified Active</div>
                </div>
                <button
                  onClick={() => alert("Downloading GST Certificate PDF...")}
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-1 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#5E3B8C]" />
                  <span>PDF</span>
                </button>
              </div>

              {/* FSSAI Document */}
              <div className="p-4 bg-[#FAF8FD] rounded-2xl border border-purple-100/80 flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="text-[10px] uppercase font-bold text-slate-400">FSSAI CENTRAL LICENSE</div>
                  <div className="font-mono font-bold text-sm text-[#111111]">10014022003189</div>
                  <div className="text-[11px] text-slate-500">Category: 5-Star Hotel &amp; Food Import • Exp: Dec 2026</div>
                </div>
                <button
                  onClick={() => alert("Downloading FSSAI License PDF...")}
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-1 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#5E3B8C]" />
                  <span>PDF</span>
                </button>
              </div>
            </div>
          </div>

          {/* Key Culinary Contacts (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-[26px] p-6 sm:p-7 border border-slate-200/80 shadow-[0_10px_35px_-10px_rgba(28,11,51,0.03)] space-y-5 text-left">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-lg font-serif font-bold text-[#111111]">Executive Key Contacts</h3>
              <p className="text-xs text-slate-500">Assigned chefs &amp; account managers</p>
            </div>

            <div className="space-y-3">
              {/* Executive Chef */}
              <div className="p-3.5 bg-[#FAF8FD] rounded-2xl border border-purple-100/80 flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=200&q=80"
                    alt="Chef Vikram Singh"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-0.5">
                  <div className="font-serif font-bold text-sm text-[#111111]">Chef Vikram Singh</div>
                  <div className="text-xs text-[#5E3B8C] font-bold">Executive Chef • Taj Mahal Palace</div>
                  <div className="text-[11px] text-slate-500">chef.vikram@tajhotels.com</div>
                </div>
              </div>

              {/* Account Lead */}
              <div className="p-3.5 bg-[#FAF8FD] rounded-2xl border border-purple-100/80 flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                    alt="Siddharth Nambiar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-0.5">
                  <div className="font-serif font-bold text-sm text-[#111111]">Siddharth Nambiar</div>
                  <div className="text-xs text-[#5E3B8C] font-bold">Account Director • Fortune Gourmet</div>
                  <div className="text-[11px] text-slate-500">+91 22 6185 3200</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* CONNECTED KITCHEN OUTLETS */}
        <div className="bg-white rounded-[26px] p-6 sm:p-8 border border-slate-200/80 shadow-[0_10px_35px_-10px_rgba(28,11,51,0.03)] space-y-5 text-left">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-lg font-serif font-bold text-[#111111]">Connected Outlets</h3>
              <p className="text-xs text-slate-500">Active kitchens receiving cold-chain supplies</p>
            </div>
            <span className="text-xs font-bold text-[#5E3B8C]">2 Outlets Active</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Wasabi Outlet */}
            <div className="p-5 bg-[#FAF8FD] rounded-2xl border border-purple-100/80 flex items-center justify-between">
              <div className="space-y-1">
                <div className="font-serif font-bold text-base text-[#111111]">Wasabi by Morimoto</div>
                <div className="text-xs text-slate-500">Contemporary Japanese • 42 Mapped Dishes</div>
                <div className="text-[11px] text-[#0D9488] font-bold">Head Chef: Shimomura San</div>
              </div>
              <ChevronRight 
                onClick={() => onNavigateTab ? onNavigateTab("mymenu") : null}
                className="w-5 h-5 text-slate-400 hover:text-[#5E3B8C] cursor-pointer shrink-0" 
              />
            </div>

            {/* Shamiana Outlet */}
            <div className="p-5 bg-[#FAF8FD] rounded-2xl border border-purple-100/80 flex items-center justify-between">
              <div className="space-y-1">
                <div className="font-serif font-bold text-base text-[#111111]">Shamiana</div>
                <div className="text-xs text-slate-500">All-Day Dining &amp; Bistro • 42 Mapped Dishes</div>
                <div className="text-[11px] text-[#0D9488] font-bold">Chef de Cuisine: Amit Roy</div>
              </div>
              <ChevronRight 
                onClick={() => onNavigateTab ? onNavigateTab("mymenu") : null}
                className="w-5 h-5 text-slate-400 hover:text-[#5E3B8C] cursor-pointer shrink-0" 
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

