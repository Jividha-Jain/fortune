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
import ScreenHotelDetails from "@/components/ScreenHotelDetails";
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
    | "hotel-details"
  >("signin");

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
      {/* Top Portal Header (Shown when authenticated) */}
      {activeTab !== "signin" && activeTab !== "register" && activeTab !== "hotel-details" && activeTab !== "onboarding" && (
        <PortalHeader activeTab={activeTab as any} setActiveTab={(tab) => setActiveTab(tab as any)} />
      )}

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
            onSuccessRegister={() => setActiveTab("hotel-details")}
          />
        )}

        {activeTab === "hotel-details" && (
          <ScreenHotelDetails
            onComplete={() => setActiveTab("dashboard")}
          />
        )}

        {/* Onboarding Flow Views */}
        {activeTab === "onboarding" && (
          <div className="flex-1 flex flex-col relative">
            {onboardingStep === 1 && (
              <ScreenRegister
                onNavigateSignIn={() => setActiveTab("signin")}
                onSuccessRegister={() => setActiveTab("dashboard")}
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
                onNavigateRegister={() => setActiveTab("register")}
                onSuccessSignIn={() => setActiveTab("dashboard")}
              />
            )}
          </div>
        )}
      </main>
    </div>
  );
}
