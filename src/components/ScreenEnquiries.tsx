"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Search, 
  Clock, 
  Phone, 
  Mail, 
  MessageSquare, 
  User, 
  Utensils, 
  Plus, 
  X, 
  Sparkles,
  CheckCircle2,
  Send
} from "lucide-react";

interface ScreenEnquiriesProps {
  onBack: () => void;
  onSuccessSubmit: () => void;
}

export default function ScreenEnquiries({ onBack, onSuccessSubmit }: ScreenEnquiriesProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"ALL" | "Submitted" | "Under Review" | "Sales Contacted" | "Closed">("ALL");
  const [showNewEnquiryModal, setShowNewEnquiryModal] = useState(false);

  // New enquiry form state
  const [newProductName, setNewProductName] = useState("");
  const [newDishName, setNewDishName] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const [enquiriesData, setEnquiriesData] = useState([
    {
      id: "enq-1",
      title: "Cheese Sauce",
      status: "Under Review",
      statusType: "under_review",
      relatedDish: "Butter Chicken",
      message: "We would like to know more about bulk supply options and sample availability for our Butter Chicken preparation.",
      date: "1 Mar 2026",
      channel: "Phone",
      contact: "Priya Mehta",
      image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=400&q=80",
      stepProgress: 2, // 2 out of 4 steps active
    },
    {
      id: "enq-2",
      title: "Quatro Formaggi (Shredded 4 Cheese)",
      status: "Sales Contacted",
      statusType: "sales_contacted",
      relatedDish: "Alfredo Pasta",
      message: "Interested in understanding product specifications and shelf life for our continental menu section.",
      date: "25 Feb 2026",
      channel: "Email",
      contact: "Priya Mehta",
      image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=400&q=80",
      stepProgress: 3, // 3 out of 4 steps active
    },
    {
      id: "enq-3",
      title: "Cheddar White 1Kg",
      status: "Submitted",
      statusType: "submitted",
      relatedDish: "Veg Biryani",
      message: "Would like to schedule a product demo for our kitchen team.",
      date: "3 Mar 2026",
      channel: "WhatsApp",
      contact: "Priya Mehta",
      image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=400&q=80",
      stepProgress: 1, // 1 out of 4 steps active
    },
  ]);

  const handleCreateEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProductName) return;

    const newEnq = {
      id: `enq-${Date.now()}`,
      title: newProductName,
      status: "Submitted",
      statusType: "submitted",
      relatedDish: newDishName || "General Kitchen",
      message: newMessage || "Requested pricing and sample availability.",
      date: "Today",
      channel: "Portal Direct",
      contact: "Priya Mehta",
      image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=400&q=80",
      stepProgress: 1,
    };

    setEnquiriesData([newEnq, ...enquiriesData]);
    setNewProductName("");
    setNewDishName("");
    setNewMessage("");
    setShowNewEnquiryModal(false);
  };

  const filteredEnquiries = enquiriesData.filter((item) => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.relatedDish.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.message.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeFilter === "ALL") return matchesSearch;
    return matchesSearch && item.status.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <div className="min-h-screen bg-[#FAF8FD] text-[#111111] pb-28 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 space-y-6 sm:space-y-8">
        
        {/* PAGE HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-5 text-left">
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#111111] tracking-tight">
              Enquiries
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Track product conversations with the Fortune Gourmet sales team.
            </p>
          </div>

          <button
            onClick={() => setShowNewEnquiryModal(true)}
            className="px-5 py-2.5 rounded-xl bg-[#1C0B33] hover:bg-[#2B1B4E] text-white text-xs font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer border border-[#F5C453]/30 shrink-0"
          >
            <Plus className="w-4 h-4 text-[#F5C453]" />
            <span>New RFQ Enquiry</span>
          </button>
        </div>

        {/* 4 SUMMARY METRIC CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Metric 1 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs text-left hover:shadow-md transition-shadow">
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              ALL ENQUIRIES
            </div>
            <div className="text-3xl font-serif font-bold text-[#111111] mt-1">
              3
            </div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">
              3 open
            </div>
          </div>

          {/* Metric 2 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs text-left hover:shadow-md transition-shadow">
            <div className="text-[10px] font-bold uppercase tracking-widest text-amber-700">
              UNDER REVIEW
            </div>
            <div className="text-3xl font-serif font-bold text-[#111111] mt-1">
              1
            </div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">
              Awaiting sales
            </div>
          </div>

          {/* Metric 3 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs text-left hover:shadow-md transition-shadow">
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#5E3B8C]">
              SALES CONTACTED
            </div>
            <div className="text-3xl font-serif font-bold text-[#111111] mt-1">
              1
            </div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">
              In conversation
            </div>
          </div>

          {/* Metric 4 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs text-left hover:shadow-md transition-shadow">
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              CLOSED
            </div>
            <div className="text-3xl font-serif font-bold text-[#111111] mt-1">
              0
            </div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">
              Completed
            </div>
          </div>

        </div>

        {/* SEARCH & FILTER CONTROLS BAR */}
        <div className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, dishes, or messages..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200/90 rounded-xl text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5E3B8C]/30"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar w-full md:w-auto shrink-0 justify-end">
            {(["ALL", "Submitted", "Under Review", "Sales Contacted", "Closed"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === filter
                    ? "bg-[#1C0B33] text-white shadow-2xs"
                    : "bg-white border border-slate-200/90 text-slate-700 hover:bg-purple-50 hover:text-[#5E3B8C]"
                }`}
              >
                {filter === "ALL" ? "All" : filter}
              </button>
            ))}
          </div>

        </div>

        {/* ITEM COUNT LABEL */}
        <div className="text-xs text-slate-500 font-medium text-left">
          <span>{filteredEnquiries.length} enquiries</span>
        </div>

        {/* ENQUIRY CARDS LIST */}
        {filteredEnquiries.length > 0 ? (
          <div className="space-y-4">
            {filteredEnquiries.map((enq) => (
              <div
                key={enq.id}
                className="bg-white rounded-[24px] border border-slate-200/90 p-5 sm:p-6 shadow-2xs hover:shadow-lg hover:border-[#5E3B8C]/30 transition-all duration-300 space-y-4 text-left group"
              >
                {/* Top Row: Thumbnail + Product Title + Status Pill */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  
                  {/* Left Thumbnail & Info */}
                  <div className="flex items-start gap-4 flex-1">
                    {/* Image Container */}
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shrink-0 p-1">
                      <Image
                        src={enq.image}
                        alt={enq.title}
                        fill
                        unoptimized
                        className="object-contain p-1"
                      />
                      <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#0D9488] text-white flex items-center justify-center text-[10px] shadow-xs">
                        ✓
                      </div>
                    </div>

                    {/* Title, Related Dish & Message */}
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 group-hover:text-[#1C0B33] transition-colors">
                          {enq.title}
                        </h3>

                        {/* Status Badge Pill */}
                        <span className={`text-[10.5px] font-extrabold px-3 py-1 rounded-full border shadow-2xs ${
                          enq.statusType === "submitted"
                            ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                            : enq.statusType === "under_review"
                            ? "bg-amber-50 text-amber-900 border-amber-200"
                            : "bg-purple-50 text-[#5E3B8C] border-purple-200"
                        }`}>
                          {enq.status}
                        </span>
                      </div>

                      {/* Related Dish Pill */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium pt-0.5">
                        <Utensils className="w-3.5 h-3.5 text-[#5E3B8C]" />
                        <span>Related dish: <strong className="text-slate-800 font-bold">{enq.relatedDish}</strong></span>
                      </div>

                      {/* Message Body */}
                      <p className="text-xs text-slate-600 leading-relaxed font-normal pt-1">
                        {enq.message}
                      </p>
                    </div>
                  </div>

                </div>

                {/* STEPPER PROGRESS TRACK (4 STAGES) */}
                <div className="pt-2">
                  <div className="grid grid-cols-4 gap-2">
                    {/* Stage 1 */}
                    <div className="space-y-1">
                      <div className={`h-1.5 rounded-full transition-all ${
                        enq.stepProgress >= 1 ? "bg-[#0D9488]" : "bg-slate-100"
                      }`} />
                      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Submitted</div>
                    </div>

                    {/* Stage 2 */}
                    <div className="space-y-1">
                      <div className={`h-1.5 rounded-full transition-all ${
                        enq.stepProgress >= 2 ? "bg-amber-500" : "bg-slate-100"
                      }`} />
                      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Under Review</div>
                    </div>

                    {/* Stage 3 */}
                    <div className="space-y-1">
                      <div className={`h-1.5 rounded-full transition-all ${
                        enq.stepProgress >= 3 ? "bg-[#5E3B8C]" : "bg-slate-100"
                      }`} />
                      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Sales Contacted</div>
                    </div>

                    {/* Stage 4 */}
                    <div className="space-y-1">
                      <div className={`h-1.5 rounded-full transition-all ${
                        enq.stepProgress >= 4 ? "bg-slate-900" : "bg-slate-100"
                      }`} />
                      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Closed</div>
                    </div>
                  </div>
                </div>

                {/* FOOTER METADATA ROW */}
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 font-medium gap-3">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{enq.date}</span>
                    </span>

                    <span className="flex items-center gap-1.5">
                      {enq.channel === "Phone" && <Phone className="w-3.5 h-3.5 text-slate-400" />}
                      {enq.channel === "Email" && <Mail className="w-3.5 h-3.5 text-slate-400" />}
                      {enq.channel === "WhatsApp" && <MessageSquare className="w-3.5 h-3.5 text-slate-400" />}
                      {enq.channel === "Portal Direct" && <Sparkles className="w-3.5 h-3.5 text-slate-400" />}
                      <span>{enq.channel}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                    <User className="w-3.5 h-3.5 text-[#5E3B8C]" />
                    <span>Contact: <strong className="text-slate-900 font-bold">{enq.contact}</strong></span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 border border-slate-200/80 text-center space-y-4 max-w-md mx-auto my-8 shadow-2xs">
            <div className="w-14 h-14 rounded-2xl bg-purple-50 text-[#5E3B8C] flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">
              No enquiries found
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              Try adjusting your search query or filter settings.
            </p>
          </div>
        )}

      </div>

      {/* NEW ENQUIRY MODAL */}
      {showNewEnquiryModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full border border-slate-200 shadow-2xl space-y-4 text-left animate-card-fade">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-serif font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#5E3B8C]" />
                <span>Submit New RFQ Enquiry</span>
              </h3>
              <button 
                onClick={() => setShowNewEnquiryModal(false)}
                className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateEnquiry} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-700 font-bold mb-1">Product Title</label>
                <input
                  type="text"
                  required
                  value={newProductName}
                  onChange={(e) => setNewProductName(e.target.value)}
                  placeholder="e.g. Zanetti Mozzarella di Bufala DOP"
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-[#5E3B8C]/30"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Related Dish / Menu Section</label>
                <input
                  type="text"
                  value={newDishName}
                  onChange={(e) => setNewDishName(e.target.value)}
                  placeholder="e.g. Margherita Pizza"
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-[#5E3B8C]/30"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Inquiry Details &amp; Sample Requirements</label>
                <textarea
                  rows={3}
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="e.g. Request sample batch and bulk tier pricing for Taj Mumbai..."
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-[#5E3B8C]/30"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowNewEnquiryModal(false)}
                  className="px-4 py-2.5 rounded-xl text-slate-600 font-bold hover:bg-slate-100 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#1C0B33] hover:bg-[#2B1B4E] text-white font-bold flex items-center gap-1.5 shadow-md cursor-pointer border border-[#F5C453]/30"
                >
                  <Send className="w-3.5 h-3.5 text-[#F5C453]" />
                  <span>Send Enquiry</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
