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
  Hourglass,
  Camera,
  ExternalLink,
  MessageSquare,
  Leaf,
  Bell,
  Download
} from "lucide-react";

interface ScreenProfileProps {
  onNavigateOnboarding?: () => void;
  onNavigateTab?: (tab: string) => void;
}

export default function ScreenProfile({ onNavigateOnboarding, onNavigateTab }: ScreenProfileProps) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF9F5] pb-24 font-sans antialiased text-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
        
        {/* PAGE TITLE BAR WITH CURSIVE BANNER */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200/60 pb-6 text-left">
          <div className="space-y-1">
            <div className="text-[10.5px] font-extrabold uppercase tracking-widest text-slate-400">
              BUSINESS PROFILE
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#111111] tracking-tight">
              The Royal Kitchen
            </h1>
            <p className="text-xs text-slate-500 font-medium">
              Hotel details, KYC, chef, and contact information used across Fortune Gourmet.
            </p>
          </div>

          {/* Right Cursive Banner Graphic & Edit Profile Button */}
          <div className="flex items-center gap-6 shrink-0 self-end md:self-auto">
            <div className="hidden lg:block text-right">
              <span className="font-serif italic text-lg text-[#1B362A] font-semibold block leading-tight">
                Great Food
              </span>
              <span className="font-serif italic text-lg text-[#1B362A] font-semibold block leading-tight">
                Builds Great Connections
              </span>
            </div>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-6 py-3 rounded-full bg-[#1B362A] hover:bg-[#2A4C3C] text-white text-xs font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <Pencil className="w-3.5 h-3.5" />
              <span>{isEditing ? "Save Profile" : "Edit Profile"}</span>
            </button>
          </div>
        </div>

        {/* TOP PROFILE HERO BANNER CARD */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-2xs text-left space-y-5">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            
            {/* Left Photo & Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              {/* Photo with Change Photo overlay */}
              <div className="relative w-36 h-36 rounded-2xl overflow-hidden shrink-0 border border-slate-200/80 shadow-xs group">
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80"
                  alt="The Royal Kitchen"
                  fill
                  unoptimized
                  className="object-cover"
                />
                <button 
                  onClick={() => alert("Upload photo modal")}
                  className="absolute bottom-2 left-2 right-2 bg-black/60 hover:bg-black/80 text-white font-semibold text-[10px] py-1.5 rounded-xl text-center backdrop-blur-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <Camera className="w-3 h-3" />
                  <span>Change Photo</span>
                </button>
              </div>

              <div className="space-y-2">
                {/* KYC Badge */}
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FFFBEB] text-[#B45309] border border-[#FDE68A] text-xs font-bold">
                  <Hourglass className="w-3.5 h-3.5 text-[#B45309]" />
                  <span>KYC Under Review</span>
                </div>

                <h2 className="text-3xl font-serif font-bold text-[#111111]">
                  The Royal Kitchen
                </h2>

                <div className="text-xs text-slate-500 font-medium">
                  Hotel &amp; Restaurant
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-1">
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
                    <a href="https://www.theroyalkitchen.in" target="_blank" rel="noreferrer" className="underline font-medium text-slate-800">
                      www.theroyalkitchen.in
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Profile Completion & Callout */}
            <div className="w-full lg:w-72 space-y-3 shrink-0">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-xs font-medium text-slate-500">Profile completion</span>
                  <span className="font-black text-slate-900 text-sm">90%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-600 rounded-full w-[90%]" />
                </div>
              </div>

              {/* Callout Card */}
              <div className="bg-[#ECFDF5] border border-[#A7F3D0] p-3.5 rounded-2xl flex items-start gap-3 text-left">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Leaf className="w-4 h-4 text-emerald-700" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Almost there!</div>
                  <div className="text-[11px] text-slate-600 font-medium leading-tight">Complete your KYC to unlock all features.</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 SUMMARY STAT WIDGETS ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          {/* Widget 1 */}
          <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-2xs flex items-center gap-3.5 text-left">
            <div className="w-12 h-12 rounded-full bg-[#ECFDF5] text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
              <ChefHat className="w-6 h-6 text-emerald-700" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#111111]">8</div>
              <div className="text-xs text-slate-400 font-medium">Chefs</div>
            </div>
          </div>

          {/* Widget 2 */}
          <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-2xs flex items-center gap-3.5 text-left">
            <div className="w-12 h-12 rounded-full bg-[#ECFDF5] text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
              <Users className="w-6 h-6 text-emerald-700" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#111111]">45</div>
              <div className="text-xs text-slate-400 font-medium">Kitchen staff</div>
            </div>
          </div>

          {/* Widget 3 */}
          <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-2xs flex items-center gap-3.5 text-left">
            <div className="w-12 h-12 rounded-full bg-[#ECFDF5] text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
              <Utensils className="w-6 h-6 text-emerald-700" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#111111]">120</div>
              <div className="text-xs text-slate-400 font-medium">Seating</div>
            </div>
          </div>

          {/* Widget 4 */}
          <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-2xs flex items-center gap-3.5 text-left">
            <div className="w-12 h-12 rounded-full bg-[#ECFDF5] text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
              <Bell className="w-6 h-6 text-emerald-700" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#111111]">4</div>
              <div className="text-xs text-slate-400 font-medium">Cuisines</div>
            </div>
          </div>

        </div>

        {/* MAIN 2x2 SECTIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* BOX 1: Business Information */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs space-y-4 text-left">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-50 text-[#5E3B8C] flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-[#5E3B8C]" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-[#111111]">Business Information</h3>
                  <p className="text-xs text-slate-400 font-medium">Public details shown to the Fortune Gourmet sales team.</p>
                </div>
              </div>

              <button 
                onClick={() => setIsEditing(true)}
                className="px-3.5 py-1.5 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold cursor-pointer"
              >
                Edit
              </button>
            </div>

            <div className="divide-y divide-slate-100 text-xs">
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium w-24 shrink-0">Name</span>
                <span className="font-bold text-slate-900 text-xs text-right flex-1">The Royal Kitchen</span>
              </div>

              <div className="py-2.5 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium w-24 shrink-0">Type</span>
                <span className="font-bold text-slate-900 text-xs text-right flex-1">Hotel &amp; Restaurant</span>
              </div>

              <div className="py-2.5 flex items-start justify-between gap-4">
                <span className="text-xs text-slate-400 font-medium w-24 shrink-0">About</span>
                <p className="text-slate-600 font-normal leading-relaxed text-xs text-left flex-1">
                  A premium dining destination offering authentic Indian and continental cuisine, serving guests since 1998 with a commitment to culinary excellence.
                </p>
              </div>

              <div className="py-2.5 flex items-start justify-between gap-4">
                <span className="text-xs text-slate-400 font-medium w-24 shrink-0">Address</span>
                <span className="font-semibold text-slate-800 text-xs text-left flex-1">42, MG Road, Connaught Place, New Delhi, Delhi</span>
              </div>

              <div className="pt-2.5 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium w-24 shrink-0">Website</span>
                <a href="https://www.theroyalkitchen.in" target="_blank" rel="noreferrer" className="font-semibold text-slate-800 underline text-xs flex items-center gap-1">
                  <span>www.theroyalkitchen.in</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* BOX 2: Contacts */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs space-y-4 text-left">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-50 text-[#5E3B8C] flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 text-[#5E3B8C]" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-[#111111]">Contacts</h3>
                  <p className="text-xs text-slate-400 font-medium">Owner, manager, and business communication details.</p>
                </div>
              </div>

              <button 
                onClick={() => setIsEditing(true)}
                className="px-3.5 py-1.5 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold cursor-pointer"
              >
                Edit
              </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 items-stretch">
              
              <div className="divide-y divide-slate-100 text-xs flex-1">
                <div className="py-2.5">
                  <span className="text-xs text-slate-400 font-medium block mb-0.5">Owner</span>
                  <div className="font-bold text-slate-900 text-xs">Rajesh Sharma</div>
                  <div className="text-slate-500 font-medium text-[11px]">+91 98711 22334</div>
                </div>

                <div className="py-2.5">
                  <span className="text-xs text-slate-400 font-medium block mb-0.5">Manager</span>
                  <div className="font-bold text-slate-900 text-xs">Priya Mehta</div>
                  <div className="text-slate-500 font-medium text-[11px]">+91 98765 43210</div>
                </div>

                <div className="pt-2.5">
                  <span className="text-xs text-slate-400 font-medium block mb-0.5">Business Email</span>
                  <span className="font-semibold text-slate-800 text-xs">priya@theroyalkitchen.in</span>
                </div>
              </div>

              {/* Right Side Callout Container */}
              <div className="w-full lg:w-44 bg-[#ECFDF5] border border-[#A7F3D0] rounded-2xl p-4 flex flex-col items-center justify-center text-center space-y-2 shrink-0">
                <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4 text-emerald-700" />
                </div>
                <div className="text-xs font-bold text-slate-900 leading-snug">
                  Keep your contact details updated
                </div>
                <div className="text-[10.5px] text-slate-600 font-medium leading-tight">
                  So our team can reach you easily.
                </div>
              </div>

            </div>
          </div>

          {/* BOX 3: KYC */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs space-y-4 text-left">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-50 text-[#5E3B8C] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#5E3B8C]" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-[#111111]">KYC</h3>
                  <p className="text-xs text-slate-400 font-medium">FSSAI, GST, and PAN records for verification.</p>
                </div>
              </div>

              <button 
                onClick={() => setIsEditing(true)}
                className="px-3.5 py-1.5 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold cursor-pointer"
              >
                Edit
              </button>
            </div>

            <div className="divide-y divide-slate-100 text-xs">
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium w-24 shrink-0">Status</span>
                <span className="bg-[#FFFBEB] text-[#B45309] border border-[#FDE68A] px-2.5 py-0.5 rounded-full text-[10.5px] font-bold inline-flex items-center gap-1">
                  <Hourglass className="w-3 h-3 text-[#B45309]" />
                  <span>KYC Under review</span>
                </span>
              </div>

              <div className="py-2.5 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium w-24 shrink-0">FSSAI</span>
                <span className="font-mono font-bold text-slate-900 text-xs">13321001000123</span>
              </div>

              <div className="py-2.5 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium w-24 shrink-0">GST</span>
                <span className="font-mono font-bold text-slate-900 text-xs">07AABCT1234H1ZS</span>
              </div>

              <div className="py-2.5 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium w-24 shrink-0">PAN</span>
                <span className="font-mono font-bold text-slate-900 text-xs">AABCT1234H</span>
              </div>

              {/* PDF Attachments Download Row */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <div className="flex-1 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 flex items-center justify-between cursor-pointer hover:bg-slate-100 transition-colors">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-slate-500" />
                    <span>FSSAI-License.pdf</span>
                  </div>
                  <Download className="w-3.5 h-3.5 text-slate-400" />
                </div>

                <div className="flex-1 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 flex items-center justify-between cursor-pointer hover:bg-slate-100 transition-colors">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-slate-500" />
                    <span>GST-Certificate.pdf</span>
                  </div>
                  <Download className="w-3.5 h-3.5 text-slate-400" />
                </div>
              </div>
            </div>
          </div>

          {/* BOX 4: Chef & Kitchen */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs space-y-4 text-left">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-50 text-[#5E3B8C] flex items-center justify-center shrink-0">
                  <ChefHat className="w-5 h-5 text-[#5E3B8C]" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-[#111111]">Chef &amp; Kitchen</h3>
                  <p className="text-xs text-slate-400 font-medium">Kitchen team, capacity, and cuisine coverage.</p>
                </div>
              </div>

              <button 
                onClick={() => setIsEditing(true)}
                className="px-3.5 py-1.5 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold cursor-pointer"
              >
                Edit
              </button>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium w-24 shrink-0">Head Chef</span>
                <div className="text-right">
                  <div className="font-bold text-slate-900 text-xs">Chef Arjun Kapoor</div>
                  <div className="text-slate-500 font-medium text-[11px]">+91 98100 11223</div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                <span className="text-xs text-slate-400 font-medium w-24 shrink-0">Chef Email</span>
                <span className="font-semibold text-slate-800 text-xs underline">chef@theroyalkitchen.in</span>
              </div>

              {/* 3 Mini Stat Cards inside Chef & Kitchen */}
              <div className="grid grid-cols-3 gap-2.5 pt-2">
                <div className="bg-slate-50/80 p-2.5 rounded-xl border border-slate-200/70 flex items-center gap-2">
                  <ChefHat className="w-4 h-4 text-slate-700 shrink-0" />
                  <div>
                    <div className="font-extrabold text-slate-900 text-sm">8</div>
                    <div className="text-[10px] text-slate-400 font-medium">Chefs</div>
                  </div>
                </div>

                <div className="bg-slate-50/80 p-2.5 rounded-xl border border-slate-200/70 flex items-center gap-2">
                  <Users className="w-4 h-4 text-slate-700 shrink-0" />
                  <div>
                    <div className="font-extrabold text-slate-900 text-sm">45</div>
                    <div className="text-[10px] text-slate-400 font-medium">Kitchen Staff</div>
                  </div>
                </div>

                <div className="bg-slate-50/80 p-2.5 rounded-xl border border-slate-200/70 flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-slate-700 shrink-0" />
                  <div>
                    <div className="font-extrabold text-slate-900 text-sm">120</div>
                    <div className="text-[10px] text-slate-400 font-medium">Seating Capacity</div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-xs text-slate-400 font-medium block mb-1.5">Cuisines</span>
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

