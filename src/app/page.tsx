"use client";

import React, { useState } from "react";
import PortalHeader from "@/components/PortalHeader";
import ScreenDashboard from "@/components/ScreenDashboard";
import ScreenProductsCatalog from "@/components/ScreenProductsCatalog";
import ScreenProductDetail from "@/components/ScreenProductDetail";
import ScreenAIRecommendations from "@/components/ScreenAIRecommendations";
import ScreenMyMenu from "@/components/ScreenMyMenu";
import ScreenConceptDetail from "@/components/ScreenConceptDetail";
import ScreenShortlist from "@/components/ScreenShortlist";
import ScreenEnquiries from "@/components/ScreenEnquiries";
import ScreenOrders from "@/components/ScreenOrders";
import ScreenInsights from "@/components/ScreenInsights";
import ScreenProfile from "@/components/ScreenProfile";
import ScreenRegister from "@/components/ScreenRegister";
import ScreenBusinessDetails from "@/components/ScreenBusinessDetails";
import ScreenMenuUpload from "@/components/ScreenMenuUpload";
import ScreenLiveAnalysis from "@/components/ScreenLiveAnalysis";
import ScreenSignIn from "@/components/ScreenSignIn";
import { ChevronLeft, ChevronRight, Layers } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<
    | "dashboard"
    | "mymenu"
    | "products"
    | "product-detail"
    | "recommendations"
    | "concept-detail"
    | "shortlist"
    | "enquiries"
    | "orders"
    | "insights"
    | "profile"
    | "onboarding"
    | "signin"
    | "register"
  >("insights");

  // Onboarding sub-step state (1 to 5) when activeTab === "onboarding"
  const [onboardingStep, setOnboardingStep] = useState<number>(1);
  const [showStepJump, setShowStepJump] = useState<boolean>(false);

  const onboardingTitles = [
    "01. Partner Registration",
    "02. Business & Verification",
    "03. Menu Setup",
    "04. AI Cognition Engine",
    "05. Institutional Sign In",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8FD] relative">
      {/* Top Portal Header */}
      <PortalHeader activeTab={activeTab as any} setActiveTab={(tab) => setActiveTab(tab as any)} />

      {/* Main Active View */}
      <main className="flex-1 flex flex-col">
        {activeTab === "dashboard" && (
          <ScreenDashboard
            onNavigateTab={(tab) => setActiveTab(tab as any)}
          />
        )}

        {activeTab === "products" && (
          <ScreenProductsCatalog
            onSelectProduct={(productId) => setActiveTab("product-detail")}
          />
        )}

        {activeTab === "product-detail" && (
          <ScreenProductDetail
            onBack={() => setActiveTab("products")}
          />
        )}

        {activeTab === "recommendations" && (
          <ScreenAIRecommendations
            onSelectProduct={(productId) => setActiveTab("product-detail")}
          />
        )}

        {activeTab === "mymenu" && (
          <ScreenMyMenu
            onNavigateTab={(tab) => setActiveTab(tab as any)}
          />
        )}

        {activeTab === "concept-detail" && (
          <ScreenConceptDetail
            onBack={() => setActiveTab("recommendations")}
            onNavigateShortlist={() => setActiveTab("shortlist")}
          />
        )}

        {activeTab === "shortlist" && (
          <ScreenShortlist
            onNavigateEnquiries={() => setActiveTab("enquiries")}
            onNavigateProducts={() => setActiveTab("products")}
          />
        )}

        {activeTab === "enquiries" && (
          <ScreenEnquiries
            onBack={() => setActiveTab("shortlist")}
            onSuccessSubmit={() => setActiveTab("dashboard")}
          />
        )}

        {activeTab === "orders" && (
          <ScreenOrders
            onNavigateTab={(tab) => setActiveTab(tab as any)}
          />
        )}

        {activeTab === "insights" && (
          <ScreenInsights
            onNavigateTab={(tab) => setActiveTab(tab as any)}
          />
        )}

        {activeTab === "profile" && (
          <ScreenProfile
            onNavigateOnboarding={() => setActiveTab("onboarding")}
          />
        )}

        {activeTab === "signin" && (
          <ScreenSignIn
            onNavigateRegister={() => setActiveTab("register")}
            onSuccessSignIn={() => setActiveTab("dashboard")}
          />
        )}

        {activeTab === "register" && (
          <ScreenRegister
            onNavigateSignIn={() => setActiveTab("signin")}
            onSuccessRegister={() => setActiveTab("onboarding")}
          />
        )}

        {/* Onboarding Flow Views */}
        {activeTab === "onboarding" && (
          <div className="flex-1 flex flex-col relative">
            {onboardingStep === 1 && (
              <ScreenRegister
                onNavigateSignIn={() => setOnboardingStep(5)}
                onSuccessRegister={() => setOnboardingStep(2)}
              />
            )}

            {onboardingStep === 2 && (
              <ScreenBusinessDetails
                onBack={() => setOnboardingStep(1)}
                onNext={() => setOnboardingStep(3)}
              />
            )}

            {onboardingStep === 3 && (
              <ScreenMenuUpload
                onAnalyze={() => setOnboardingStep(4)}
              />
            )}

            {onboardingStep === 4 && (
              <ScreenLiveAnalysis
                onRestart={() => setActiveTab("dashboard")}
              />
            )}

            {onboardingStep === 5 && (
              <ScreenSignIn
                onNavigateRegister={() => setOnboardingStep(1)}
                onSuccessSignIn={() => setActiveTab("dashboard")}
              />
            )}

            {/* FLOATING ONBOARDING STEP CONTROLLER */}
            <div className="fixed bottom-4 right-4 z-40">
              {showStepJump ? (
                <div className="bg-[#1A1035] text-white border border-purple-800/80 rounded-2xl p-3 shadow-2xl space-y-2 text-xs w-64 backdrop-blur-xl animate-fade-in">
                  <div className="flex items-center justify-between text-purple-300 border-b border-purple-900 pb-2">
                    <span className="font-bold font-serif flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-amber-400" /> Onboarding Steps (5 Total)
                    </span>
                    <button
                      onClick={() => setShowStepJump(false)}
                      className="text-purple-400 hover:text-white font-bold"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="space-y-1">
                    {onboardingTitles.map((title, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setOnboardingStep(idx + 1);
                          setShowStepJump(false);
                        }}
                        className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          onboardingStep === idx + 1
                            ? "bg-purple-600 text-white font-bold"
                            : "text-purple-200/80 hover:bg-purple-900/50 hover:text-white"
                        }`}
                      >
                        {title}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveTab("dashboard")}
                    className="w-full py-1.5 bg-amber-400 text-purple-950 font-bold rounded-lg text-center mt-1"
                  >
                    Go to Portal Dashboard ➔
                  </button>
                </div>
              ) : (
                <div className="bg-[#1A1035]/90 hover:bg-[#1A1035] text-white border border-purple-700/60 rounded-full px-3.5 py-1.5 shadow-xl flex items-center gap-2 text-xs backdrop-blur-md transition-all">
                  <button
                    onClick={() => setOnboardingStep((prev) => Math.max(1, prev - 1))}
                    disabled={onboardingStep === 1}
                    className="disabled:opacity-30 hover:text-amber-300 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setShowStepJump(true)}
                    className="flex items-center gap-1.5 font-medium hover:text-amber-300 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Onboarding Step {onboardingStep} of 5</span>
                    <span className="text-[10px] opacity-60">▾</span>
                  </button>

                  <button
                    onClick={() => setOnboardingStep((prev) => Math.min(5, prev + 1))}
                    disabled={onboardingStep === 5}
                    className="disabled:opacity-30 hover:text-amber-300 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
