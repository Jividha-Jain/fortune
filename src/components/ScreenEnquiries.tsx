"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  ArrowLeft, 
  Send, 
  CheckCircle2, 
  ChevronDown,
  Lock,
  Save,
  Headphones,
  FileText,
  User,
  HelpCircle,
  BarChart2,
  Building,
  Snowflake
} from "lucide-react";

interface ScreenEnquiriesProps {
  onBack: () => void;
  onSuccessSubmit: () => void;
}

export default function ScreenEnquiries({ onBack, onSuccessSubmit }: ScreenEnquiriesProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] pb-28 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
        
        {/* BREADCRUMB & TOP INSTITUTIONAL BADGE BAR */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/60 pb-4">
          <div className="flex items-center gap-2 text-xs font-semibold">
            <button 
              onClick={onBack} 
              className="flex items-center gap-1 text-[#5E3B8C] hover:underline font-bold cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Shortlist</span>
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-[#111111] font-bold">Request Contract Pricing &amp; Commercial Quotation</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4EFFB] border border-[#E2D4F7] text-[10px] font-bold tracking-wider text-[#5E3B8C] uppercase self-start sm:self-auto">
            <span>• INSTITUTIONAL HORECA CONTRACTING</span>
          </div>
        </div>

        {/* PAGE HERO HEADER & PRICING BRACKET WIDGET */}
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 overflow-hidden">
          
          {/* Left Title Info */}
          <div className="space-y-1.5 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-serif text-[#111111] font-normal leading-tight tracking-tight">
              Request Pricing
            </h1>
            <p className="text-sm text-slate-500 font-medium">
              Configure your kitchen volume expectations and delivery schedules to receive institutional HORECA contract terms.
            </p>
          </div>

          {/* Right Header Badges & Cursive Tagline */}
          <div className="flex items-center gap-4 shrink-0 self-end lg:self-auto">
            
            {/* Pricing Bracket Card */}
            <div className="bg-[#FFFDF6] border border-[#F5C453]/70 px-4 py-2.5 rounded-2xl shadow-2xs flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-xl bg-[#F5C453]/20 text-[#9E6700] flex items-center justify-center shrink-0">
                <Lock className="w-3.5 h-3.5 text-[#9E6700]" />
              </div>
              <div className="text-xs font-bold text-[#111111]">
                <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider block leading-none">PRICING BRACKET:</span>
                <span className="text-[#9E6700] font-bold">Taj Group Enterprise Master Agreement</span>
              </div>
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

        {submitted ? (
          /* SUBMITTED SUCCESS VIEW */
          <div className="bg-white rounded-[24px] p-12 border border-emerald-200/90 shadow-xl text-center space-y-6 max-w-2xl mx-auto my-12 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#E6F9F0] text-[#0D9488] border border-[#BBF7D0] flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111111]">
              Procurement Request Generated!
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Official RFQ has been forwarded to <strong className="text-[#111111]">Fortune Gourmet Key Account Director (Rajesh V.)</strong> and Regional Executive Culinary Advisor for Taj Mahal Palace Mumbai.
            </p>
            <div className="bg-[#F4EFFB] p-4 rounded-2xl border border-[#E2D4F7] text-xs text-[#5E3B8C] space-y-1">
              <div>Reference RFQ ID: <strong className="font-mono font-bold text-[#111111]">#RFQ-2025-TAJ-9920</strong></div>
              <div>Estimated Response SLA: <strong>Within 4 Operational Hours</strong></div>
            </div>
            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={onBack}
                className="px-6 py-3 rounded-xl bg-[#1B0B2E] text-white text-xs font-bold shadow-md hover:bg-[#2B1B4E] transition-colors cursor-pointer"
              >
                Return to Shortlist
              </button>
              <button
                onClick={onSuccessSubmit}
                className="px-6 py-3 rounded-xl bg-[#F5C453] text-[#111111] text-xs font-extrabold shadow-md hover:bg-[#E5B540] transition-colors cursor-pointer"
              >
                View Dashboard Summary
              </button>
            </div>
          </div>
        ) : (
          /* MAIN FORM GRID (12 COLS: 5 LEFT, 7 RIGHT) */
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* LEFT COLUMN: ENQUIRY MANIFEST (5 COLS) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-[24px] p-6 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] space-y-5">
                
                {/* Manifest Title Row */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#5E3B8C]/12 text-[#5E3B8C] flex items-center justify-center">
                      <FileText className="w-4 h-4 text-[#5E3B8C]" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-[#111111]">Enquiry Manifest</h3>
                  </div>
                  <span className="text-xs font-bold text-[#5E3B8C] bg-[#F4EFFB] border border-[#E2D4F7] px-3 py-1 rounded-full">
                    4 Products Selected
                  </span>
                </div>

                {/* 4 Selected Products Manifest List */}
                <div className="space-y-3">
                  
                  {/* Product 1 */}
                  <div className="p-3.5 bg-[#F8F9FA] rounded-2xl border border-slate-200/80 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-slate-200">
                        <Image 
                          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=200&q=80" 
                          alt="Mozzarella Pizza" 
                          fill 
                          className="object-cover" 
                        />
                      </div>
                      <div className="space-y-0.5 text-left">
                        <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">DAIRY &amp; CHEESE • 🇮🇹 ITALY</div>
                        <div className="font-serif font-bold text-xs text-[#111111] leading-tight">Zanetti Mozzarella di Bufala Campana DOP</div>
                        <div className="text-[10px] text-slate-500">Chilled (+2°C to +4°C) • Origin: Italy</div>
                        <div className="text-[10px] text-slate-400 font-mono">1 KG x 6</div>
                      </div>
                    </div>
                    <div className="bg-[#F4EFFB] text-[#5E3B8C] border border-[#E2D4F7] px-3 py-1.5 rounded-xl font-bold text-xs shrink-0">
                      12 Cases
                    </div>
                  </div>

                  {/* Product 2 */}
                  <div className="p-3.5 bg-[#F8F9FA] rounded-2xl border border-slate-200/80 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-slate-200">
                        <Image 
                          src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=200&q=80" 
                          alt="Butter" 
                          fill 
                          className="object-cover" 
                        />
                      </div>
                      <div className="space-y-0.5 text-left">
                        <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">BAKERY &amp; VIENNOISERIE • 🇫🇷 FRANCE</div>
                        <div className="font-serif font-bold text-xs text-[#111111] leading-tight">Paysan Breton Churned Butter 82%</div>
                        <div className="text-[10px] text-slate-500">Chilled Dairy • Brittany, France</div>
                        <div className="text-[10px] text-slate-400 font-mono">250g x 20</div>
                      </div>
                    </div>
                    <div className="bg-[#F4EFFB] text-[#5E3B8C] border border-[#E2D4F7] px-3 py-1.5 rounded-xl font-bold text-xs shrink-0">
                      15 Cases
                    </div>
                  </div>

                  {/* Product 3 */}
                  <div className="p-3.5 bg-[#F8F9FA] rounded-2xl border border-slate-200/80 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-slate-200">
                        <Image 
                          src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=200&q=80" 
                          alt="Salmon" 
                          fill 
                          className="object-cover" 
                        />
                      </div>
                      <div className="space-y-0.5 text-left">
                        <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">SEAFOOD • 🇳🇴 NORWAY</div>
                        <div className="font-serif font-bold text-xs text-[#111111] leading-tight">Fortune Select Norwegian Salmon Trim D</div>
                        <div className="text-[10px] text-slate-500">Fresh Direct Airfreight • Norway</div>
                        <div className="text-[10px] text-slate-400 font-mono">1.8 – 2.2 kg</div>
                      </div>
                    </div>
                    <div className="bg-[#F4EFFB] text-[#5E3B8C] border border-[#E2D4F7] px-3 py-1.5 rounded-xl font-bold text-xs shrink-0">
                      8 Cases
                    </div>
                  </div>

                  {/* Product 4 */}
                  <div className="p-3.5 bg-[#F8F9FA] rounded-2xl border border-slate-200/80 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-slate-200">
                        <Image 
                          src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=200&q=80" 
                          alt="Truffle" 
                          fill 
                          className="object-cover" 
                        />
                      </div>
                      <div className="space-y-0.5 text-left">
                        <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">SPECIALTY GOURMET • 🇮🇹 ITALY</div>
                        <div className="font-serif font-bold text-xs text-[#111111] leading-tight">TartufLanghe Black Truffle Paste 500g</div>
                        <div className="text-[10px] text-slate-500">Ambient Ambient Cellar • Alba, Italy</div>
                        <div className="text-[10px] text-slate-400 font-mono">500g</div>
                      </div>
                    </div>
                    <div className="bg-[#F4EFFB] text-[#5E3B8C] border border-[#E2D4F7] px-3 py-1.5 rounded-xl font-bold text-xs shrink-0">
                      4 Jars
                    </div>
                  </div>

                </div>

                {/* Procurement Value Tier Meter */}
                <div className="pt-3 border-t border-slate-100 space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-500 flex items-center gap-1">
                      <BarChart2 className="w-3.5 h-3.5 text-slate-400" />
                      <span>Est. Monthly Procurement Value:</span>
                    </span>
                    <span className="text-[#5E3B8C] font-extrabold uppercase">HIGH INSTITUTIONAL TIER</span>
                  </div>

                  {/* Gradient Progress Bar */}
                  <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden p-0.5">
                    <div className="h-full bg-gradient-to-r from-[#5E3B8C] to-[#8E54D7] rounded-full w-[85%]" />
                  </div>

                  {/* Tier Marks */}
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>Standard Tier</span>
                    <span>Regional Volume</span>
                    <span className="text-[#5E3B8C] font-bold">Enterprise Key Account (Top 5%)</span>
                  </div>

                  {/* Guarantee Tags */}
                  <div className="flex items-center justify-between text-[11px] text-[#0D9488] font-semibold pt-1">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488]" />
                      <span>DOP/HACCP Inspected</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488]" />
                      <span>100% Unbroken Cold Chain</span>
                    </span>
                  </div>
                </div>

              </div>

              {/* Repackaging Note Box */}
              <div className="bg-[#F4EFFB]/90 border border-[#E2D4F7] rounded-[24px] p-5 text-xs text-[#111111] space-y-1.5 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#5E3B8C] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <HelpCircle className="w-4 h-4 text-white" />
                </div>
                <div className="space-y-1 text-left">
                  <div className="font-serif font-bold text-[#5E3B8C] text-sm">
                    Need custom SKU repackaging?
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    For pre-portioned banqueting cuts or bonded warehouse stock reservations, contact Fortune Gourmet Institutional Desk directly at <strong className="text-[#111111]">corp@fortunegourmet.in</strong>
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: LOGISTICAL SPECIFICATIONS & SUBMIT (7 COLS) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Form Container */}
              <div className="bg-white rounded-[24px] p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] space-y-6">
                
                {/* Title & Property Tag */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="space-y-0.5 text-left">
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#111111]">
                      Procurement &amp; Logistical Specifications
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Ensure fulfillment docks and dispatch cycles match your property&apos;s operational shift times.
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#9E6700] bg-[#FFFDF6] border border-[#F5C453]/60 px-3.5 py-1.5 rounded-full shrink-0 self-start sm:self-auto">
                    Taj Hospitality Group
                  </span>
                </div>

                {/* Property & Bay Info Cards (2 Grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Receiving Property */}
                  <div className="bg-[#F4EFFB]/60 border border-[#E2D4F7] p-4 rounded-2xl flex items-start gap-3 text-left">
                    <div className="w-8 h-8 rounded-xl bg-[#5E3B8C]/15 text-[#5E3B8C] flex items-center justify-center shrink-0 mt-0.5">
                      <Building className="w-4 h-4 text-[#5E3B8C]" />
                    </div>
                    <div>
                      <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">RECEIVING PROPERTY</div>
                      <div className="font-serif font-bold text-sm text-[#111111] mt-0.5">Taj Mahal Palace &amp; Tower, Colaba, Mumbai</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">CLIENT ID: FGS-MUM-89240</div>
                    </div>
                  </div>

                  {/* Receiving Cold Bay */}
                  <div className="bg-[#E6F9F0]/60 border border-[#BBF7D0] p-4 rounded-2xl flex items-start gap-3 text-left">
                    <div className="w-8 h-8 rounded-xl bg-[#0D9488]/15 text-[#0D9488] flex items-center justify-center shrink-0 mt-0.5">
                      <Snowflake className="w-4 h-4 text-[#0D9488]" />
                    </div>
                    <div>
                      <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">RECEIVING COLD BAY</div>
                      <div className="font-serif font-bold text-sm text-[#111111] mt-0.5">Loading Bay 2</div>
                      <div className="text-[10px] text-[#0D9488] font-bold mt-0.5">Chilled 0°C to +4°C &amp; Frozen -18°C compliant</div>
                    </div>
                  </div>

                </div>

                {/* Form Controls */}
                <div className="space-y-4 text-xs">
                  
                  {/* Row 1: Frequency & Delivery Window */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Frequency */}
                    <div className="space-y-1.5 text-left">
                      <div className="flex items-center justify-between font-bold text-[#111111]">
                        <span>Procurement Frequency</span>
                        <span className="text-red-500 text-[9px] uppercase tracking-wider font-extrabold">REQUIRED</span>
                      </div>
                      <div className="relative">
                        <select className="w-full bg-[#F8F9FA] border border-slate-200/90 rounded-xl p-3 pr-8 text-xs font-bold text-[#111111] shadow-2xs focus:outline-none cursor-pointer appearance-none">
                          <option>Daily Morning Dispatch (365-day standing)</option>
                          <option>Bi-Weekly Bulk Batch Delivery</option>
                          <option>Weekly On-Demand Consignment</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* Delivery Window */}
                    <div className="space-y-1.5 text-left">
                      <div className="flex items-center justify-between font-bold text-[#111111]">
                        <span>Preferred Delivery Time Window</span>
                        <span className="text-red-500 text-[9px] uppercase tracking-wider font-extrabold">REQUIRED</span>
                      </div>
                      <div className="relative">
                        <select className="w-full bg-[#F8F9FA] border border-slate-200/90 rounded-xl p-3 pr-8 text-xs font-bold text-[#111111] shadow-2xs focus:outline-none cursor-pointer appearance-none">
                          <option>05:00 AM - 07:00 AM (Pre-service Early Arrival)</option>
                          <option>09:00 AM - 11:00 AM (Morning Receiving)</option>
                          <option>02:00 PM - 04:00 PM (Afternoon Refresh)</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                  </div>

                  {/* Row 2: Credit Terms */}
                  <div className="space-y-1.5 text-left">
                    <div className="flex items-center justify-between font-bold text-[#111111]">
                      <span>Credit Terms Requested</span>
                      <span className="text-slate-400 text-[10px] font-normal">Subject to Treasury clearance</span>
                    </div>
                    <div className="relative">
                      <select className="w-full bg-[#F8F9FA] border border-slate-200/90 rounded-xl p-3 pr-8 text-xs font-bold text-[#111111] shadow-2xs focus:outline-none cursor-pointer appearance-none">
                        <option>30-Day Institutional Account (Taj Enterprise Standard)</option>
                        <option>15-Day Direct Billing</option>
                        <option>Advance Contract Deposit</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Row 3: Special Protocols Textarea */}
                  <div className="space-y-1.5 text-left">
                    <div className="flex items-center justify-between font-bold text-[#111111]">
                      <span>Special Storage &amp; Handling Protocols</span>
                      <span className="text-slate-400 text-[10px] font-normal">Cold dock protocol guidelines apply</span>
                    </div>
                    <textarea
                      rows={3}
                      defaultValue="Require lot inspection temperature log stamp upon arrival at dock. Chef Vikram must sign off sample batch."
                      className="w-full bg-[#F8F9FA] border border-slate-200/90 rounded-xl p-3 text-xs text-[#111111] font-medium shadow-2xs focus:outline-none focus:border-[#5E3B8C]"
                    />
                  </div>

                </div>

                {/* Routing Notice Box */}
                <div className="bg-[#F4EFFB] border border-[#E2D4F7] p-4 rounded-2xl text-xs text-[#5E3B8C] flex items-center gap-3 text-left">
                  <div className="w-9 h-9 rounded-full bg-[#5E3B8C] text-white flex items-center justify-center shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="leading-relaxed font-medium">
                    Your enquiry will be routed directly to the <strong className="text-[#111111] font-bold">Fortune Gourmet Mumbai Key Account Director</strong> and <strong className="text-[#111111] font-bold">Regional Executive Culinary Advisor</strong>.
                  </div>
                </div>

                {/* Form Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => alert("Draft quote saved to account.")}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white border border-slate-200/90 hover:bg-slate-50 text-[#111111] text-xs font-bold flex items-center justify-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
                  >
                    <Save className="w-4 h-4 text-slate-500" />
                    <span>Save as Draft Quote</span>
                  </button>

                  <button
                    type="submit"
                    className="flex-1 w-full py-3.5 rounded-xl bg-[#1B0B2E] hover:bg-[#2B1B4E] text-white text-xs font-extrabold shadow-md flex items-center justify-center gap-2 transition-colors cursor-pointer active:scale-[0.98]"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>Submit Enquiry for Commercial Quotation</span>
                  </button>
                </div>

              </div>

              {/* BOTTOM 3 SLA CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center gap-3 text-left">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#5E3B8C] flex items-center justify-center shrink-0">
                    <Headphones className="w-4 h-4 text-[#5E3B8C]" />
                  </div>
                  <div>
                    <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">RESPONSE SLA</div>
                    <div className="font-bold text-[#111111] text-xs mt-0.5">&lt; 4 Operational Hours</div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center gap-3 text-left">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#5E3B8C] flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4 text-[#5E3B8C]" />
                  </div>
                  <div>
                    <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">CONTRACT VALIDITY</div>
                    <div className="font-bold text-[#5E3B8C] text-xs mt-0.5">30-Day Guaranteed Price Lock</div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center gap-3 text-left">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#5E3B8C] flex items-center justify-center shrink-0">
                    <User className="w-4 h-4 text-[#5E3B8C]" />
                  </div>
                  <div>
                    <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">DEDICATED LEAD</div>
                    <div className="font-bold text-[#111111] text-xs mt-0.5">Rajesh V. (VP HORECA)</div>
                  </div>
                </div>

              </div>

            </div>

          </form>
        )}

      </div>
    </div>
  );
}
