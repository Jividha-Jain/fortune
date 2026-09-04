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
  Crown,
  Bed,
  Download,
  Sparkles,
  X,
  CheckCircle2
} from "lucide-react";

interface ScreenProfileProps {
  onNavigateOnboarding?: () => void;
  onNavigateTab?: (tab: string) => void;
}

export default function ScreenProfile({ onNavigateOnboarding, onNavigateTab }: ScreenProfileProps) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editSection, setEditSection] = useState("Business Information");
  const [showToast, setShowToast] = useState(false);

  const [profileData, setProfileData] = useState({
    businessName: "Taj Hotel Mumbai",
    type: "Hotel & Restaurant",
    about: "An iconic luxury hotel blending timeless heritage with world-class hospitality, offering exceptional dining experiences in the heart of Mumbai.",
    address: "Apollo Bunder, Colaba, Mumbai, Maharashtra 400001",
    website: "www.tajhotels.com",
    phone: "+91 22 6665 3366",
    owner: "Tata Sons Private Limited",
    gm: "Rajiv Menon",
    gmPhone: "+91 98200 12345",
    salesManager: "Priya Mehta",
    salesPhone: "+91 98765 43210",
    businessEmail: "mumbai@tajhotels.com",
    altEmail: "sales.mumbai@tajhotels.com",
    fssai: "11517022000673",
    gst: "27AAACT2727Q1Z6",
    pan: "AAACT2727Q",
    chefName: "Chef Vikram Singh",
    chefPhone: "+91 90000 11122",
    chefEmail: "chef.mumbai@tajhotels.com",
    chefsCount: 18,
    staffCount: 120,
    seatingCount: 450,
  });

  const openEditSection = (sectionName: string) => {
    setEditSection(sectionName);
    setShowEditModal(true);
  };

  const handleSaveModal = (e: React.FormEvent) => {
    e.preventDefault();
    setShowEditModal(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] pb-24 font-sans antialiased text-[#111111] relative">
      
      {/* SUCCESS TOAST NOTIFICATION */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50 bg-[#1C0B33] text-white px-5 py-3 rounded-2xl shadow-2xl border border-[#F5C453]/40 flex items-center gap-2.5 animate-fade-in text-xs font-bold">
          <CheckCircle2 className="w-4 h-4 text-[#F5C453]" />
          <span>✓ Business Profile Updated Successfully!</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
        
        {/* PAGE TITLE BAR WITH TAJ MAHAL PALACE HERO GRAPHIC */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200/60 pb-6 text-left overflow-hidden rounded-3xl p-2">
          
          {/* Background Taj Mahal Palace Image Overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 pointer-events-none hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
              alt="Taj Mahal Palace Hotel Mumbai"
              fill
              unoptimized
              className="object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/80 to-transparent" />
          </div>

          <div className="space-y-1 relative z-10">
            <div className="text-[10.5px] font-extrabold uppercase tracking-widest text-[#B45309]">
              BUSINESS PROFILE
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#111111] tracking-tight">
              {profileData.businessName}
            </h1>
            <p className="text-sm font-serif italic text-slate-600 font-medium">
              Iconic hospitality. Timeless experiences.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-2 font-medium">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-700" />
                <span>Apollo Bunder, Mumbai, Maharashtra</span>
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-amber-700" />
                <span>{profileData.phone}</span>
              </span>
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-amber-700" />
                <a href={`https://${profileData.website}`} target="_blank" rel="noreferrer" className="underline font-semibold text-slate-800">
                  {profileData.website}
                </a>
              </span>
            </div>
          </div>

          {/* Right Cursive Calligraphy Graphic & Edit Button */}
          <div className="flex items-center gap-6 shrink-0 z-10 self-end md:self-auto pt-2 md:pt-0">
            <div className="hidden lg:block text-right">
              <span className="font-serif italic text-2xl text-[#92400E] font-semibold block leading-tight">
                A Legend
              </span>
              <span className="font-serif italic text-2xl text-[#92400E] font-semibold block leading-tight">
                Lives Here
              </span>
              <div className="w-20 h-0.5 bg-amber-400/60 ml-auto mt-1 rounded-full" />
            </div>

            <button
              onClick={() => openEditSection("Business Information")}
              className="px-6 py-3 rounded-full bg-[#3D2E1A] hover:bg-[#4E3B22] text-white text-xs font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <Pencil className="w-3.5 h-3.5" />
              <span>Edit Profile</span>
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
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80"
                  alt="Taj Hotel Mumbai"
                  fill
                  unoptimized
                  className="object-cover"
                />
                <button 
                  onClick={() => alert("Photo updated successfully!")}
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
                  {profileData.businessName}
                </h2>

                <div className="text-xs text-slate-500 font-medium">
                  {profileData.type}
                </div>

                <div className="font-serif italic text-xs text-slate-500 pt-0.5">
                  “A landmark of luxury, heritage and world-class dining since 1903.”
                </div>
              </div>
            </div>

            {/* Right Profile Completion & Callout */}
            <div className="w-full lg:w-72 space-y-3 shrink-0">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-xs font-medium text-slate-500">Profile Completion</span>
                  <span className="font-black text-slate-900 text-sm">90%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#B45309] rounded-full w-[90%]" />
                </div>
              </div>

              {/* Gold Crown Callout Card */}
              <div className="bg-[#FAF7F2] border border-[#EBE3D5] p-3.5 rounded-2xl flex items-start gap-3 text-left">
                <div className="w-8 h-8 rounded-full bg-[#FEF3C7] text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Crown className="w-4 h-4 text-amber-700" />
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
            <div className="w-12 h-12 rounded-full bg-[#FFFBEB] text-[#B45309] flex items-center justify-center shrink-0 border border-[#FDE68A]">
              <ChefHat className="w-6 h-6 text-[#B45309]" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#111111]">{profileData.chefsCount}</div>
              <div className="text-xs text-slate-400 font-medium">Chefs</div>
            </div>
          </div>

          {/* Widget 2 */}
          <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-2xs flex items-center gap-3.5 text-left">
            <div className="w-12 h-12 rounded-full bg-[#FFFBEB] text-[#B45309] flex items-center justify-center shrink-0 border border-[#FDE68A]">
              <Users className="w-6 h-6 text-[#B45309]" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#111111]">320</div>
              <div className="text-xs text-slate-400 font-medium">Hotel Staff</div>
            </div>
          </div>

          {/* Widget 3 */}
          <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-2xs flex items-center gap-3.5 text-left">
            <div className="w-12 h-12 rounded-full bg-[#FFFBEB] text-[#B45309] flex items-center justify-center shrink-0 border border-[#FDE68A]">
              <Utensils className="w-6 h-6 text-[#B45309]" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#111111]">11</div>
              <div className="text-xs text-slate-400 font-medium">Restaurants &amp; Bars</div>
            </div>
          </div>

          {/* Widget 4 */}
          <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-2xs flex items-center gap-3.5 text-left">
            <div className="w-12 h-12 rounded-full bg-[#FFFBEB] text-[#B45309] flex items-center justify-center shrink-0 border border-[#FDE68A]">
              <Bed className="w-6 h-6 text-[#B45309]" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#111111]">582</div>
              <div className="text-xs text-slate-400 font-medium">Rooms &amp; Suites</div>
            </div>
          </div>

        </div>

        {/* MAIN 2x2 SECTIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* BOX 1: Business Information */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs space-y-4 text-left">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-[#111111]">Business Information</h3>
                  <p className="text-xs text-slate-400 font-medium">Details visible to the Fortune Gourmet team.</p>
                </div>
              </div>

              <button 
                onClick={() => openEditSection("Business Information")}
                className="px-3.5 py-1.5 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold cursor-pointer"
              >
                Edit
              </button>
            </div>

            <div className="divide-y divide-slate-100 text-xs">
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium w-28 shrink-0">Business Name</span>
                <span className="font-bold text-slate-900 text-xs text-right flex-1">{profileData.businessName}</span>
              </div>

              <div className="py-2.5 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium w-28 shrink-0">Type</span>
                <span className="font-bold text-slate-900 text-xs text-right flex-1">{profileData.type}</span>
              </div>

              <div className="py-2.5 flex items-start justify-between gap-4">
                <span className="text-xs text-slate-400 font-medium w-28 shrink-0">About</span>
                <p className="text-slate-600 font-normal leading-relaxed text-xs text-left flex-1">
                  {profileData.about}
                </p>
              </div>

              <div className="py-2.5 flex items-start justify-between gap-4">
                <span className="text-xs text-slate-400 font-medium w-28 shrink-0">Address</span>
                <span className="font-semibold text-slate-800 text-xs text-left flex-1">{profileData.address}</span>
              </div>

              <div className="pt-2.5 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium w-28 shrink-0">Website</span>
                <a href={`https://${profileData.website}`} target="_blank" rel="noreferrer" className="font-semibold text-slate-800 underline text-xs flex items-center gap-1">
                  <span>{profileData.website}</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* BOX 2: Contacts */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs space-y-4 text-left">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-[#111111]">Contacts</h3>
                  <p className="text-xs text-slate-400 font-medium">Owner, manager, and business communication details.</p>
                </div>
              </div>

              <button 
                onClick={() => openEditSection("Contacts")}
                className="px-3.5 py-1.5 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold cursor-pointer"
              >
                Edit
              </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 items-stretch">
              
              <div className="divide-y divide-slate-100 text-xs flex-1">
                <div className="py-2.5">
                  <span className="text-xs text-slate-400 font-medium block mb-0.5">Owner</span>
                  <div className="font-bold text-slate-900 text-xs">{profileData.owner}</div>
                </div>

                <div className="py-2.5">
                  <span className="text-xs text-slate-400 font-medium block mb-0.5">General Manager</span>
                  <div className="font-bold text-slate-900 text-xs">{profileData.gm}</div>
                  <div className="text-slate-500 font-medium text-[11px]">{profileData.gmPhone}</div>
                </div>

                <div className="py-2.5">
                  <span className="text-xs text-slate-400 font-medium block mb-0.5">Sales Manager</span>
                  <div className="font-bold text-slate-900 text-xs">{profileData.salesManager}</div>
                  <div className="text-slate-500 font-medium text-[11px]">{profileData.salesPhone}</div>
                </div>

                <div className="py-2.5">
                  <span className="text-xs text-slate-400 font-medium block mb-0.5">Business Email</span>
                  <span className="font-semibold text-slate-800 text-xs">{profileData.businessEmail}</span>
                </div>

                <div className="pt-2.5">
                  <span className="text-xs text-slate-400 font-medium block mb-0.5">Alternate Email</span>
                  <span className="font-semibold text-slate-800 text-xs">{profileData.altEmail}</span>
                </div>
              </div>

              {/* Right Side Taj Heritage Golden Card */}
              <div className="w-full lg:w-44 bg-[#FAF7F2] border border-[#EBE3D5] rounded-2xl p-4 flex flex-col items-center justify-center text-center space-y-2 shrink-0">
                <div className="w-10 h-10 rounded-full bg-[#FEF3C7] text-amber-700 flex items-center justify-center shrink-0">
                  <Crown className="w-5 h-5 text-amber-700" />
                </div>
                <div className="font-serif font-bold text-base text-[#92400E] tracking-wider">
                  TAJ
                </div>
                <div className="text-[9.5px] font-extrabold text-amber-800 uppercase tracking-widest leading-tight">
                  LET'S CREATE EXTRAORDINARY TOGETHER
                </div>
              </div>

            </div>
          </div>

          {/* BOX 3: KYC */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs space-y-4 text-left">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-[#111111]">KYC</h3>
                  <p className="text-xs text-slate-400 font-medium">FSSAI, GST, and PAN records for verification.</p>
                </div>
              </div>

              <button 
                onClick={() => openEditSection("KYC")}
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
                <span className="font-mono font-bold text-slate-900 text-xs">{profileData.fssai}</span>
              </div>

              <div className="py-2.5 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium w-24 shrink-0">GST</span>
                <span className="font-mono font-bold text-slate-900 text-xs">{profileData.gst}</span>
              </div>

              <div className="py-2.5 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium w-24 shrink-0">PAN</span>
                <span className="font-mono font-bold text-slate-900 text-xs">{profileData.pan}</span>
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
                <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                  <ChefHat className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-[#111111]">Chef &amp; Kitchen</h3>
                  <p className="text-xs text-slate-400 font-medium">Kitchen team, capacity, and cuisine coverage.</p>
                </div>
              </div>

              <button 
                onClick={() => openEditSection("Chef & Kitchen")}
                className="px-3.5 py-1.5 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold cursor-pointer"
              >
                Edit
              </button>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium w-28 shrink-0">Executive Chef</span>
                <div className="text-right">
                  <div className="font-bold text-slate-900 text-xs">{profileData.chefName}</div>
                  <div className="text-slate-500 font-medium text-[11px]">{profileData.chefPhone}</div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                <span className="text-xs text-slate-400 font-medium w-28 shrink-0">Chef Email</span>
                <span className="font-semibold text-slate-800 text-xs underline">{profileData.chefEmail}</span>
              </div>

              {/* 3 Mini Stat Cards inside Chef & Kitchen */}
              <div className="grid grid-cols-3 gap-2.5 pt-2">
                <div className="bg-slate-50/80 p-2.5 rounded-xl border border-slate-200/70 flex items-center gap-2">
                  <ChefHat className="w-4 h-4 text-slate-700 shrink-0" />
                  <div>
                    <div className="font-extrabold text-slate-900 text-sm">{profileData.chefsCount}</div>
                    <div className="text-[10px] text-slate-400 font-medium">Chefs</div>
                  </div>
                </div>

                <div className="bg-slate-50/80 p-2.5 rounded-xl border border-slate-200/70 flex items-center gap-2">
                  <Users className="w-4 h-4 text-slate-700 shrink-0" />
                  <div>
                    <div className="font-extrabold text-slate-900 text-sm">{profileData.staffCount}</div>
                    <div className="text-[10px] text-slate-400 font-medium">Kitchen Staff</div>
                  </div>
                </div>

                <div className="bg-slate-50/80 p-2.5 rounded-xl border border-slate-200/70 flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-slate-700 shrink-0" />
                  <div>
                    <div className="font-extrabold text-slate-900 text-sm">{profileData.seatingCount}</div>
                    <div className="text-[10px] text-slate-400 font-medium">Seating (Main)</div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-xs text-slate-400 font-medium block mb-1.5">Cuisines</span>
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200/80">Indian</span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200/80">Continental</span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200/80">Chinese</span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200/80">Japanese</span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200/80">Mediterranean</span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200/80">Desserts</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* INTERACTIVE EDIT PROFILE MODAL */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-lg w-full border border-slate-200 shadow-2xl space-y-4 text-left animate-fade-in">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
                <Pencil className="w-4 h-4 text-amber-700" />
                <span>Edit {editSection}</span>
              </h3>
              <button 
                onClick={() => setShowEditModal(false)}
                className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveModal} className="space-y-4 text-xs">
              {editSection === "Business Information" && (
                <>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Business Name</label>
                    <input 
                      type="text" 
                      value={profileData.businessName}
                      onChange={(e) => setProfileData({...profileData, businessName: e.target.value})}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Establishment Type</label>
                    <input 
                      type="text" 
                      value={profileData.type}
                      onChange={(e) => setProfileData({...profileData, type: e.target.value})}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">About</label>
                    <textarea 
                      rows={3}
                      value={profileData.about}
                      onChange={(e) => setProfileData({...profileData, about: e.target.value})}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Address</label>
                    <input 
                      type="text" 
                      value={profileData.address}
                      onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                    />
                  </div>
                </>
              )}

              {editSection === "Contacts" && (
                <>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Owner Name</label>
                    <input 
                      type="text" 
                      value={profileData.owner}
                      onChange={(e) => setProfileData({...profileData, owner: e.target.value})}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">GM Name</label>
                      <input 
                        type="text" 
                        value={profileData.gm}
                        onChange={(e) => setProfileData({...profileData, gm: e.target.value})}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">GM Phone</label>
                      <input 
                        type="text" 
                        value={profileData.gmPhone}
                        onChange={(e) => setProfileData({...profileData, gmPhone: e.target.value})}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Business Email</label>
                    <input 
                      type="email" 
                      value={profileData.businessEmail}
                      onChange={(e) => setProfileData({...profileData, businessEmail: e.target.value})}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                    />
                  </div>
                </>
              )}

              {editSection === "KYC" && (
                <>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">FSSAI Registration Number</label>
                    <input 
                      type="text" 
                      value={profileData.fssai}
                      onChange={(e) => setProfileData({...profileData, fssai: e.target.value})}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">GSTIN Number</label>
                    <input 
                      type="text" 
                      value={profileData.gst}
                      onChange={(e) => setProfileData({...profileData, gst: e.target.value})}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                    />
                  </div>
                </>
              )}

              {editSection === "Chef & Kitchen" && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Executive Chef</label>
                      <input 
                        type="text" 
                        value={profileData.chefName}
                        onChange={(e) => setProfileData({...profileData, chefName: e.target.value})}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Chef Phone</label>
                      <input 
                        type="text" 
                        value={profileData.chefPhone}
                        onChange={(e) => setProfileData({...profileData, chefPhone: e.target.value})}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Chef Email</label>
                    <input 
                      type="email" 
                      value={profileData.chefEmail}
                      onChange={(e) => setProfileData({...profileData, chefEmail: e.target.value})}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                    />
                  </div>
                </>
              )}

              <div className="flex items-center justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#3D2E1A] hover:bg-[#4E3B22] text-white text-xs font-bold cursor-pointer shadow-md"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

