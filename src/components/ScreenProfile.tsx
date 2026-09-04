"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Building2, 
  MapPin, 
  Phone, 
  Globe, 
  Pencil, 
  User, 
  Users, 
  ChefHat, 
  Utensils, 
  FileText, 
  ShieldCheck, 
  Mail,
  Download,
  CheckCircle2,
  Hourglass,
  FileCheck
} from "lucide-react";

interface ScreenProfileProps {
  onNavigateOnboarding?: () => void;
  onNavigateTab?: (tab: string) => void;
}

export default function ScreenProfile({ onNavigateOnboarding, onNavigateTab }: ScreenProfileProps) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF8FD] pb-24 font-sans antialiased text-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
        
        {/* PAGE TITLE BAR */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/60 pb-6 text-left">
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#111111] tracking-tight">
              Business Profile
            </h1>
            <p className="text-xs text-slate-500 font-medium">
              Hotel details, KYC, chef, and contact information used across Fortune Gourmet.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-5 py-2.5 rounded-2xl bg-[#0D9488] hover:bg-[#0B7A70] text-white text-xs font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <Pencil className="w-3.5 h-3.5" />
              <span>{isEditing ? "Save Profile" : "Edit Profile"}</span>
            </button>
          </div>
        </div>

        {/* TOP PROFILE HERO BANNER CARD */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-2xs text-left space-y-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            <div className="flex items-start gap-4">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-slate-200/80 shadow-xs">
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80"
                  alt="The Royal Kitchen"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>

              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-2xl font-serif font-bold text-[#111111]">
                    The Royal Kitchen
                  </h2>
                  <span className="bg-amber-100/80 text-amber-900 border border-amber-200 text-[10.5px] font-bold px-3 py-0.5 rounded-full flex items-center gap-1">
                    <Hourglass className="w-3 h-3 text-amber-700" />
                    <span>KYC Under review</span>
                  </span>
                </div>

                <div className="text-xs text-slate-500 font-medium">
                  Hotel &amp; Restaurant
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>New Delhi, Delhi</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>+91 98765 43210</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5 text-slate-400" />
                    <span className="underline">www.theroyalkitchen.in</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Profile Completion Bar */}
            <div className="w-full md:w-64 space-y-1.5 shrink-0">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[11px] font-medium text-slate-500">Profile completion</span>
                <span className="font-bold text-slate-900">90%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-600 rounded-full w-[90%]" />
              </div>
            </div>

          </div>
        </div>

        {/* 4 SUMMARY STAT WIDGETS ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          {/* Widget 1 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#5E3B8C] flex items-center justify-center shrink-0">
              <ChefHat className="w-5 h-5 text-[#5E3B8C]" />
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-[#111111]">8</div>
              <div className="text-xs text-slate-400 font-medium">Chefs</div>
            </div>
          </div>

          {/* Widget 2 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-[#111111]">45</div>
              <div className="text-xs text-slate-400 font-medium">Kitchen staff</div>
            </div>
          </div>

          {/* Widget 3 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Utensils className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-[#111111]">120</div>
              <div className="text-xs text-slate-400 font-medium">Seating</div>
            </div>
          </div>

          {/* Widget 4 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-[#111111]">4</div>
              <div className="text-xs text-slate-400 font-medium">Cuisines</div>
            </div>
          </div>

        </div>

        {/* MAIN 2x2 SECTIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* BOX 1: Business Information */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs space-y-5 text-left">
            <div className="flex items-start gap-3 border-b border-slate-100 pb-3">
              <Building2 className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-serif font-bold text-[#111111]">Business Information</h3>
                <p className="text-xs text-slate-400 font-medium">Public details shown to the Fortune Gourmet sales team.</p>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">NAME</span>
                <span className="font-bold text-slate-900 text-sm">The Royal Kitchen</span>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">TYPE</span>
                <span className="font-bold text-slate-900 text-sm">Hotel &amp; Restaurant</span>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">ABOUT</span>
                <p className="text-slate-600 font-normal leading-relaxed">
                  A premium dining destination offering authentic Indian and continental cuisine, serving guests since 1998 with a commitment to culinary excellence.
                </p>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">ADDRESS</span>
                <span className="font-semibold text-slate-800">42, MG Road, Connaught Place, New Delhi, Delhi</span>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">WEBSITE</span>
                <span className="font-semibold text-slate-800 underline">www.theroyalkitchen.in</span>
              </div>
            </div>
          </div>

          {/* BOX 2: Contacts */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs space-y-5 text-left">
            <div className="flex items-start gap-3 border-b border-slate-100 pb-3">
              <User className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-serif font-bold text-[#111111]">Contacts</h3>
                <p className="text-xs text-slate-400 font-medium">Owner, manager, and business communication details.</p>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">OWNER</span>
                <div className="font-bold text-slate-900 text-sm">Rajesh Sharma</div>
                <div className="text-slate-500 font-medium text-[11px]">+91 98711 22334</div>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">MANAGER</span>
                <div className="font-bold text-slate-900 text-sm">Priya Mehta</div>
                <div className="text-slate-500 font-medium text-[11px]">+91 98765 43210</div>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">BUSINESS EMAIL</span>
                <span className="font-semibold text-slate-800">priya@theroyalkitchen.in</span>
              </div>
            </div>
          </div>

          {/* BOX 3: KYC */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs space-y-5 text-left">
            <div className="flex items-start gap-3 border-b border-slate-100 pb-3">
              <ShieldCheck className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-serif font-bold text-[#111111]">KYC</h3>
                <p className="text-xs text-slate-400 font-medium">FSSAI, GST, and PAN records for verification.</p>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">STATUS</span>
                <span className="font-bold text-amber-800">KYC Under review</span>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">FSSAI</span>
                <span className="font-mono font-bold text-slate-900">13321001000123</span>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">GST</span>
                <span className="font-mono font-bold text-slate-900">07AABCT1234H1ZS</span>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">PAN</span>
                <span className="font-mono font-bold text-slate-900">AABCT1234H</span>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <div className="bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200/80 text-[11px] font-medium text-slate-700 flex items-center gap-1.5 cursor-pointer hover:bg-slate-200 transition-colors">
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  <span>FSSAI-License.pdf</span>
                </div>

                <div className="bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200/80 text-[11px] font-medium text-slate-700 flex items-center gap-1.5 cursor-pointer hover:bg-slate-200 transition-colors">
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  <span>GST-Certificate.pdf</span>
                </div>
              </div>
            </div>
          </div>

          {/* BOX 4: Chef & kitchen */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs space-y-5 text-left">
            <div className="flex items-start gap-3 border-b border-slate-100 pb-3">
              <ChefHat className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-serif font-bold text-[#111111]">Chef &amp; kitchen</h3>
                <p className="text-xs text-slate-400 font-medium">Kitchen team, capacity, and cuisine coverage.</p>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">HEAD CHEF</span>
                <div className="font-bold text-slate-900 text-sm">Chef Arjun Kapoor</div>
                <div className="text-slate-500 font-medium text-[11px]">+91 98100 11223</div>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">CHEF EMAIL</span>
                <span className="font-semibold text-slate-800">chef@theroyalkitchen.in</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">CHEFS</span>
                  <span className="font-bold text-slate-900">8</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">KITCHEN STAFF</span>
                  <span className="font-bold text-slate-900">45</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">SEATING CAPACITY</span>
                  <span className="font-bold text-slate-900">120</span>
                </div>
              </div>

              <div className="pt-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">CUISINES</span>
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200/80">North Indian</span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200/80">Continental</span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200/80">Chinese</span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200/80">South Indian</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

