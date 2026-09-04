"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Search, 
  MessageSquare, 
  Hourglass, 
  Users, 
  CheckCircle2,
  Calendar,
  Phone,
  Mail,
  Utensils,
  Plus,
  X,
  SlidersHorizontal,
  ArrowRight,
  BarChart3,
  Sparkles,
  Send,
  User,
  Check,
  ChevronDown
} from "lucide-react";

interface ScreenEnquiriesProps {
  onBack?: () => void;
  onSuccessSubmit?: () => void;
}

export default function ScreenEnquiries({ onBack, onSuccessSubmit }: ScreenEnquiriesProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"All" | "Submitted" | "Under Review" | "Sales Contacted" | "Closed">("All");
  const [sortBy, setSortBy] = useState("Latest");
  const [showNewEnquiryModal, setShowNewEnquiryModal] = useState(false);
  const [selectedEnquiry, setSelectedEnquiry] = useState<any>(null);

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
      channelType: "phone",
      contact: "Priya Mehta",
      contactRole: "Sales Manager",
      tags: ["Sauces", "Cheese", "HORECA Pack"],
      image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=400&q=80",
      stepProgress: 2,
      submittedDate: "1 Mar 2026",
      underReviewNote: "Awaiting response",
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
      channelType: "email",
      contact: "Priya Mehta",
      contactRole: "Sales Manager",
      tags: ["Cheese", "Shredded", "Continental"],
      image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=400&q=80",
      stepProgress: 3,
      submittedDate: "25 Feb 2026",
      salesContactedNote: "In conversation",
    },
    {
      id: "enq-3",
      title: "Cheddar White 1Kg",
      status: "Submitted",
      statusType: "submitted",
      relatedDish: "Veg Biryani",
      message: "Would like to schedule a product demo for our kitchen team.",
      date: "20 Feb 2026",
      channel: "Phone",
      channelType: "phone",
      contact: "Priya Mehta",
      contactRole: "Sales Manager",
      tags: ["Cheese", "Block", "Kitchen Use"],
      image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=400&q=80",
      stepProgress: 1,
      submittedDate: "20 Feb 2026",
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
      date: "4 Mar 2026",
      channel: "Phone",
      channelType: "phone",
      contact: "Priya Mehta",
      contactRole: "Sales Manager",
      tags: ["New", "Custom"],
      image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=400&q=80",
      stepProgress: 1,
      submittedDate: "4 Mar 2026",
    };

    setEnquiriesData([newEnq, ...enquiriesData]);
    setNewProductName("");
    setNewDishName("");
    setNewMessage("");
    setShowNewEnquiryModal(false);
    if (onSuccessSubmit) onSuccessSubmit();
  };

  const filteredEnquiries = enquiriesData.filter((item) => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.relatedDish.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.message.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeFilter === "All") return matchesSearch;
    return matchesSearch && item.status.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <div className="min-h-screen bg-[#FAF8FD] text-[#111111] pb-28 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 space-y-6">
        
        {/* HERO BANNER SECTION */}
        <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 relative z-10 max-w-xl text-left">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#111111] tracking-tight">
              Enquiries
            </h1>
            <p className="text-sm text-slate-500 font-medium">
              Track and manage product enquiries from your customers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-10 w-full md:w-auto justify-between md:justify-end">
            <div className="hidden lg:flex items-center gap-2 text-purple-700 italic font-serif text-base sm:text-lg pr-4">
              <span>Good Food Starts with Great Conversations</span>
              <svg className="w-10 h-5 text-amber-500 stroke-current fill-none" viewBox="0 0 50 20">
                <path d="M 2 10 Q 25 18 45 6" strokeWidth="2" strokeLinecap="round" />
                <path d="M 40 2 L 47 6 L 43 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <button
              onClick={() => setShowNewEnquiryModal(true)}
              className="px-5 py-3 rounded-2xl bg-[#1C0B33] hover:bg-[#2B1B4E] text-white text-xs font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer border border-[#F5C453]/40 shrink-0"
            >
              <Plus className="w-4 h-4 text-[#F5C453]" />
              <span>New RFQ Enquiry</span>
            </button>
          </div>
        </div>

        {/* 4 SUMMARY METRIC CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Metric 1 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center gap-4 text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-[#111111]">3</div>
              <div className="text-xs font-bold text-[#111111]">All Enquiries</div>
              <div className="text-[11px] text-slate-400 font-medium">Open enquiries</div>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center gap-4 text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Hourglass className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-[#111111]">1</div>
              <div className="text-xs font-bold text-[#111111]">Under Review</div>
              <div className="text-[11px] text-slate-400 font-medium">Awaiting sales response</div>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center gap-4 text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-[#111111]">1</div>
              <div className="text-xs font-bold text-[#111111]">Sales Contacted</div>
              <div className="text-[11px] text-slate-400 font-medium">In conversation</div>
            </div>
          </div>

          {/* Metric 4 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center gap-4 text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-[#111111]">0</div>
              <div className="text-xs font-bold text-[#111111]">Closed</div>
              <div className="text-[11px] text-slate-400 font-medium">Completed enquiries</div>
            </div>
          </div>

        </div>

        {/* SEARCH & FILTER CONTROLS BAR */}
        <div className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-4">
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

          <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar w-full md:w-auto shrink-0 justify-end">
            {(["All", "Submitted", "Under Review", "Sales Contacted", "Closed"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === filter
                    ? "bg-[#1C0B33] text-white shadow-2xs"
                    : "bg-white border border-slate-200/90 text-slate-700 hover:bg-purple-50 hover:text-[#5E3B8C]"
                }`}
              >
                {filter}
              </button>
            ))}

            <button className="p-2 rounded-xl border border-slate-200/90 text-slate-600 hover:bg-slate-50 cursor-pointer ml-1">
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ITEM COUNT & SORT BY ROW */}
        <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-1">
          <span>{filteredEnquiries.length} enquiries</span>
          
          <div className="flex items-center gap-1.5 cursor-pointer hover:text-slate-800">
            <span>Sort by: <strong className="text-slate-900 font-bold">{sortBy}</strong></span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </div>
        </div>

        {/* ENQUIRY CARDS LIST */}
        {filteredEnquiries.length > 0 ? (
          <div className="space-y-4">
            {filteredEnquiries.map((enq) => (
              <div
                key={enq.id}
                className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-2xs hover:shadow-md transition-all duration-300 text-left flex flex-col lg:flex-row gap-6 justify-between items-stretch"
              >
                {/* LEFT MAIN CONTENT */}
                <div className="flex-1 space-y-4">
                  
                  {/* Top Row: Thumbnail + Product Title + Meta Info + Status Pill */}
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    
                    {/* Image Container with Badge */}
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                      <Image
                        src={enq.image}
                        alt={enq.title}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs text-[#5E3B8C] flex items-center justify-center shadow-xs border border-purple-100">
                        <Utensils className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Title & Metadata */}
                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-xl font-serif font-bold text-[#111111]">
                          {enq.title}
                        </h3>

                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-slate-400" />
                              <span>{enq.date}</span>
                            </span>
                            <span className="flex items-center gap-1">
                              {enq.channelType === "phone" ? (
                                <Phone className="w-3.5 h-3.5 text-slate-400" />
                              ) : (
                                <Mail className="w-3.5 h-3.5 text-slate-400" />
                              )}
                              <span>{enq.channel}</span>
                            </span>
                          </div>

                          <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                            enq.statusType === "under_review"
                              ? "bg-amber-100/70 text-amber-900"
                              : enq.statusType === "sales_contacted"
                              ? "bg-purple-100/70 text-[#5E3B8C]"
                              : "bg-emerald-100/70 text-emerald-900"
                          }`}>
                            {enq.status}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                        <Utensils className="w-3.5 h-3.5 text-purple-600" />
                        <span>Related dish: <strong className="text-slate-800 font-bold">{enq.relatedDish}</strong></span>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed font-normal pt-1">
                        {enq.message}
                      </p>

                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {enq.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-[11px] font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* TIMELINE STEPPER (4 STAGES) */}
                  <div className="pt-4 border-t border-slate-100">
                    <div className="relative flex items-center justify-between max-w-xl mx-auto px-4">
                      <div className="absolute left-6 right-6 top-3.5 h-[2px] bg-slate-200 -z-0" />
                      <div 
                        className="absolute left-6 top-3.5 h-[2px] bg-purple-700 transition-all duration-500 -z-0"
                        style={{
                          width: enq.stepProgress === 1 ? "0%" : enq.stepProgress === 2 ? "33%" : enq.stepProgress === 3 ? "66%" : "100%"
                        }}
                      />

                      <div className="relative z-10 flex flex-col items-center text-center">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                          enq.stepProgress >= 1 
                            ? "bg-[#1C0B33] text-white shadow-xs" 
                            : "bg-white border-2 border-slate-300 text-slate-400"
                        }`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <div className="mt-2 space-y-0.5">
                          <div className="text-[11px] font-bold text-slate-900">Submitted</div>
                          <div className="text-[10px] text-slate-400 font-medium">{enq.submittedDate}</div>
                        </div>
                      </div>

                      <div className="relative z-10 flex flex-col items-center text-center">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                          enq.stepProgress > 2
                            ? "bg-[#1C0B33] text-white"
                            : enq.stepProgress === 2
                            ? "bg-amber-500 text-white ring-4 ring-amber-100"
                            : "bg-white border-2 border-slate-300 text-slate-400"
                        }`}>
                          {enq.stepProgress > 2 ? <Check className="w-3.5 h-3.5" /> : <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                        <div className="mt-2 space-y-0.5">
                          <div className="text-[11px] font-bold text-slate-900">Under Review</div>
                          {enq.underReviewNote && (
                            <div className="text-[10px] text-slate-400 font-medium">{enq.underReviewNote}</div>
                          )}
                        </div>
                      </div>

                      <div className="relative z-10 flex flex-col items-center text-center">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                          enq.stepProgress > 3
                            ? "bg-[#1C0B33] text-white"
                            : enq.stepProgress === 3
                            ? "bg-[#5E3B8C] text-white ring-4 ring-purple-100"
                            : "bg-white border-2 border-slate-300 text-slate-400"
                        }`}>
                          {enq.stepProgress > 3 ? <Check className="w-3.5 h-3.5" /> : <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                        <div className="mt-2 space-y-0.5">
                          <div className="text-[11px] font-bold text-slate-900">Sales Contacted</div>
                          {enq.salesContactedNote && (
                            <div className="text-[10px] text-slate-400 font-medium">{enq.salesContactedNote}</div>
                          )}
                        </div>
                      </div>

                      <div className="relative z-10 flex flex-col items-center text-center">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                          enq.stepProgress >= 4
                            ? "bg-emerald-600 text-white"
                            : "bg-white border-2 border-slate-300 text-slate-400"
                        }`}>
                          {enq.stepProgress >= 4 ? <Check className="w-3.5 h-3.5" /> : null}
                        </div>
                        <div className="mt-2 space-y-0.5">
                          <div className="text-[11px] font-bold text-slate-900">Closed</div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

                {/* RIGHT SIDE CONTACT PERSON PANEL */}
                <div className="w-full lg:w-56 bg-slate-50/80 rounded-2xl p-4 border border-slate-100 flex flex-col justify-between shrink-0 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-purple-100 text-[#5E3B8C] flex items-center justify-center shrink-0">
                      <User className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Contact Person</div>
                      <div className="text-xs font-bold text-slate-900">{enq.contact}</div>
                      <div className="text-[10px] text-slate-500 font-medium">{enq.contactRole}</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedEnquiry(enq)}
                      className="w-full py-2.5 px-3 rounded-xl bg-[#1C0B33] hover:bg-[#2B1B4E] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => setSelectedEnquiry(enq)}
                      className="w-full py-2.5 px-3 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-2xs"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-slate-600" />
                      <span>Message</span>
                    </button>
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

        {/* BOTTOM AI BANNER */}
        <div className="bg-gradient-to-r from-purple-50/80 via-white to-purple-50/50 rounded-3xl p-6 border border-purple-100/80 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-[#5E3B8C] flex items-center justify-center shrink-0">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-serif font-bold text-slate-900">
                Turn Enquiries into Opportunities
              </h4>
              <p className="text-xs text-slate-500 font-medium">
                Respond faster and smarter with AI-powered insights.
              </p>
            </div>
          </div>

          <button className="px-5 py-2.5 rounded-xl bg-purple-100/70 hover:bg-purple-200/80 text-[#5E3B8C] text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shrink-0">
            <span>View Analytics</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* VIEW DETAILS MODAL */}
      {selectedEnquiry && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-lg w-full border border-slate-200 shadow-2xl space-y-4 text-left animate-card-fade">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-purple-100 text-[#5E3B8C] text-xs font-bold">
                  {selectedEnquiry.status}
                </span>
                <h3 className="text-lg font-serif font-bold text-slate-900">
                  {selectedEnquiry.title}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedEnquiry(null)}
                className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="bg-slate-50 p-3 rounded-xl space-y-1">
                <span className="text-slate-400 font-bold uppercase text-[10px] tracking-wider">Related Dish</span>
                <p className="text-slate-900 font-bold text-sm">{selectedEnquiry.relatedDish}</p>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl space-y-1">
                <span className="text-slate-400 font-bold uppercase text-[10px] tracking-wider">Message Content</span>
                <p className="text-slate-700 leading-relaxed font-medium">{selectedEnquiry.message}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 p-3 rounded-xl">
                  <span className="text-slate-400 font-bold uppercase text-[10px] tracking-wider block mb-1">Contact Manager</span>
                  <span className="font-bold text-slate-900 block">{selectedEnquiry.contact}</span>
                  <span className="text-slate-500 text-[11px]">{selectedEnquiry.contactRole}</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl">
                  <span className="text-slate-400 font-bold uppercase text-[10px] tracking-wider block mb-1">Channel & Date</span>
                  <span className="font-bold text-slate-900 block">{selectedEnquiry.channel}</span>
                  <span className="text-slate-500 text-[11px]">{selectedEnquiry.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
