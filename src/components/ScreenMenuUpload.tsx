"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  FileText, 
  Image as ImageIcon, 
  Table, 
  Plus, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  Wand2, 
  ArrowRight, 
  TrendingUp,
  Shield,
  Utensils
} from "lucide-react";

interface ScreenMenuUploadProps {
  onAnalyze: () => void;
}

export default function ScreenMenuUpload({ onAnalyze }: ScreenMenuUploadProps) {
  const [selectedFormat, setSelectedFormat] = useState<"pdf" | "image" | "excel">("pdf");
  const [uploadedFileName, setUploadedFileName] = useState("menu_autumn_winter_taj.pdf");
  const [isUploading, setIsUploading] = useState(false);

  const handleSimulatedUpload = (format: "pdf" | "image" | "excel") => {
    setSelectedFormat(format);
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      if (format === "pdf") setUploadedFileName("menu_autumn_winter_taj.pdf");
      else if (format === "image") setUploadedFileName("menu_photos_taj_bengaluru.jpg");
      else setUploadedFileName("banquet_menu_skus_2026.xlsx");
    }, 500);
  };

  return (
    <div className="min-h-[calc(100vh-61px)] flex flex-col bg-[#FAF8FD] pb-16">
      {/* TOP STEPPER HEADER */}
      <div className="bg-white border-b border-purple-100 py-4 px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-center gap-4 shadow-2xs">
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Step 1 */}
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-purple-700 text-white flex items-center justify-center text-xs font-bold">
              ✓
            </span>
            <span className="text-xs uppercase font-bold text-slate-500">01 Business</span>
          </div>

          <div className="w-8 h-0.5 bg-purple-600" />

          {/* Step 2 */}
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-purple-700 text-white flex items-center justify-center text-xs font-bold">
              ✓
            </span>
            <span className="text-xs uppercase font-bold text-slate-500">02 Verification</span>
          </div>

          <div className="w-8 h-0.5 bg-purple-600" />

          {/* Step 3 */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#160C2B] text-amber-300 text-xs font-bold shadow-md">
            <Utensils className="w-3.5 h-3.5" />
            <span>03 Your Menu</span>
          </div>

          <div className="w-8 h-0.5 bg-slate-200" />

          {/* Step 4 */}
          <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
            <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold">
              04
            </span>
            <span className="uppercase">Complete</span>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <div className="max-w-4xl mx-auto w-full px-4 pt-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          <span>AI Culinary Intelligence</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight font-serif">
          Let Fortune understand your menu
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mt-3 leading-relaxed">
          Upload your current menu and we&apos;ll identify products that fit your existing dishes and uncover new menu opportunities.
        </p>
      </div>

      {/* UPLOAD CARD CONTAINER */}
      <div className="max-w-3xl mx-auto w-full px-4 mt-8">
        <div className="bg-gradient-to-b from-purple-50/70 via-white to-purple-50/30 rounded-3xl p-8 border border-purple-100/90 shadow-xl text-center relative overflow-hidden">
          {/* Decorative Menu & Wand Icon */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-200 to-amber-100 border border-amber-300 mx-auto flex items-center justify-center text-amber-900 shadow-md mb-5 relative">
            <BookOpen className="w-8 h-8" />
            <Wand2 className="w-4.5 h-4.5 text-purple-700 absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm" />
          </div>

          <h3 className="text-xl font-bold text-slate-900 font-serif">
            Upload your Menu
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm mt-1.5 max-w-md mx-auto">
            Drag &amp; drop your files here or click any format below to browse from your device.
          </p>

          {/* 3 Upload Format Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6 max-w-xl mx-auto">
            <button
              onClick={() => handleSimulatedUpload("pdf")}
              className={`py-3.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs ${
                selectedFormat === "pdf"
                  ? "bg-[#5c35b1] text-white shadow-purple-900/30 ring-2 ring-purple-600"
                  : "bg-purple-50/60 border border-purple-200 text-purple-950 hover:bg-purple-100"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Upload PDF</span>
            </button>

            <button
              onClick={() => handleSimulatedUpload("image")}
              className={`py-3.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs ${
                selectedFormat === "image"
                  ? "bg-[#5c35b1] text-white shadow-purple-900/30 ring-2 ring-purple-600"
                  : "bg-purple-50/60 border border-purple-200 text-purple-950 hover:bg-purple-100"
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>Upload Images</span>
            </button>

            <button
              onClick={() => handleSimulatedUpload("excel")}
              className={`py-3.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs ${
                selectedFormat === "excel"
                  ? "bg-[#5c35b1] text-white shadow-purple-900/30 ring-2 ring-purple-600"
                  : "bg-purple-50/60 border border-purple-200 text-purple-950 hover:bg-purple-100"
              }`}
            >
              <Table className="w-4 h-4" />
              <span>Upload Excel / CSV</span>
            </button>
          </div>

          {/* Uploaded File Status Pill */}
          {uploadedFileName && (
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full text-xs font-semibold text-emerald-950 mb-4 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Selected File: {uploadedFileName}</span>
            </div>
          )}

          {/* Supported Format Text */}
          <div className="block">
            <span className="inline-flex items-center gap-1.5 text-[11px] text-slate-500 bg-slate-100/90 px-3.5 py-1 rounded-full border border-slate-200 font-medium">
              <Shield className="w-3 h-3 text-slate-400" />
              <span>Supported: PDF • JPG • PNG • Excel (up to 25MB)</span>
            </span>
          </div>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-purple-200/60" />
            </div>
            <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest text-slate-400">
              <span className="bg-white px-3">Or enter your menu manually</span>
            </div>
          </div>

          {/* Add Menu Items Manually Button */}
          <button
            onClick={() => alert("Manual menu editor opened. Add dishes item by item.")}
            className="py-2.5 px-5 rounded-xl bg-purple-100/70 border border-purple-200 text-purple-950 text-xs font-bold inline-flex items-center gap-2 hover:bg-purple-100 transition-colors shadow-2xs"
          >
            <Utensils className="w-3.5 h-3.5 text-purple-700" />
            <span>Add Menu Items Manually</span>
          </button>
        </div>
      </div>

      {/* LOWER SECTION - CATERING PRECISION */}
      <div className="max-w-4xl mx-auto w-full px-4 mt-12 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-100 pb-3">
          <div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-purple-700">
              Catering Precision
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-serif">
              Why do we need your menu?
            </h3>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-amber-900 bg-amber-50 border border-amber-300 px-3 py-1 rounded-full font-semibold">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>Automated SKU Mapping</span>
          </div>
        </div>

        {/* 3 VALUE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-3xl border border-purple-100/80 shadow-xs space-y-3">
            <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center font-bold text-sm">
              🔗
            </div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-purple-700">
              MATCH •
            </div>
            <h4 className="font-bold text-slate-900 text-base font-serif">
              Exact Grade Alignment
            </h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              Find Fortune products that fit your existing dishes with exact ingredient grade matching.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-3xl border border-purple-100/80 shadow-xs space-y-3">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-sm">
              ⭐
            </div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-amber-700">
              UPGRADE •
            </div>
            <h4 className="font-bold text-slate-900 text-base font-serif">
              Texture &amp; Yield Yields
            </h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              Discover ingredients that can elevate your menu texture, flavor profile, and margin.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-3xl border border-purple-100/80 shadow-xs space-y-3">
            <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center font-bold text-sm">
              💡
            </div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-purple-700">
              CREATE •
            </div>
            <h4 className="font-bold text-slate-900 text-base font-serif">
              Seasonal Innovations
            </h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              Find new dishes and seasonal specials you can introduce with zero kitchen friction.
            </p>
          </div>
        </div>

        {/* SAMPLE EXTRACTION BANNER CARD */}
        <div className="bg-purple-50/80 border border-purple-100 rounded-3xl p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=400&q=80"
                alt="Patagonian Seabass Dish"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold tracking-wider text-purple-700">
                Sample Extraction
              </div>
              <h4 className="text-sm font-bold font-serif text-slate-900">
                Fortune Wild Patagonian Seabass Portion 8oz • MSC Certified
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Automatically aligns with &ldquo;Pan-Seared White Fish&rdquo; on your signature entree board.
              </p>
            </div>
          </div>

          <div className="bg-white border border-emerald-300 text-emerald-950 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shrink-0 shadow-2xs">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span>Estimated margin uplift: +18.4%</span>
          </div>
        </div>

        {/* PRIMARY CTA BUTTON */}
        <div className="text-center pt-4">
          <button
            onClick={onAnalyze}
            className="w-full sm:w-auto px-10 py-4 rounded-xl luxury-button-green text-white font-bold text-base shadow-xl inline-flex items-center justify-center gap-3 transition-all group"
          >
            <span>Analyze My Menu</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-amber-300" />
          </button>
          <p className="text-xs text-slate-500 mt-2">
            Takes less than 45 seconds • Fully confidential &amp; encrypted
          </p>
        </div>
      </div>
    </div>
  );
}
