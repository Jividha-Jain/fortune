"use client";

import React from "react";
import { 
  LogIn, 
  UserPlus, 
  Building2, 
  FileText, 
  Sparkles, 
  ChevronRight,
  ShieldCheck
} from "lucide-react";

interface NavigationHeaderProps {
  currentScreen: number;
  setScreen: (screen: number) => void;
}

export const screens = [
  { id: 1, name: "Institutional Sign In", icon: LogIn, badge: "Welcome Back" },
  { id: 2, name: "Partner Registration", icon: UserPlus, badge: "Create Account" },
  { id: 3, name: "Business & Verification", icon: Building2, badge: "Step 01 & 02" },
  { id: 4, name: "Menu Intelligence Upload", icon: FileText, badge: "Step 03" },
  { id: 5, name: "AI Cognition & Matcher", icon: Sparkles, badge: "Step 04 Live" },
];

export default function NavigationHeader({ currentScreen, setScreen }: NavigationHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#1A1035]/95 backdrop-blur-md border-b border-purple-900/40 text-white px-4 py-3 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setScreen(1)}>
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-purple-700 to-amber-500 flex items-center justify-center font-bold text-white shadow-inner">
            FG
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold tracking-tight text-white text-base font-serif">
                FORTUNE GOURMET
              </span>
              <span className="text-[10px] uppercase font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800/60 px-2 py-0.5 rounded-full flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> B2B Portal
              </span>
            </div>
            <p className="text-xs text-purple-200/70 font-mono">
              Pan-India Cold-Chain & AI Culinary Intelligence
            </p>
          </div>
        </div>

        {/* Screen Switcher Tabs */}
        <nav className="flex items-center gap-1 overflow-x-auto max-w-full custom-scrollbar py-1">
          {screens.map((screen) => {
            const Icon = screen.icon;
            const isActive = currentScreen === screen.id;
            return (
              <button
                key={screen.id}
                onClick={() => setScreen(screen.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-900/50 ring-1 ring-purple-400"
                    : "bg-purple-950/40 text-purple-200/80 hover:bg-purple-900/40 hover:text-white"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-amber-300" : "text-purple-400"}`} />
                <span>Screen {screen.id}</span>
                <span className="hidden lg:inline text-[11px] opacity-90">({screen.name})</span>
              </button>
            );
          })}
        </nav>

        {/* Next Step / Quick Nav Action */}
        <div className="hidden sm:flex items-center gap-2">
          {currentScreen < 5 ? (
            <button
              onClick={() => setScreen(currentScreen + 1)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold shadow-md transition-all"
            >
              <span>Next Screen</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={() => setScreen(1)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-800 hover:bg-purple-700 text-white text-xs font-semibold shadow-md transition-all"
            >
              <span>Restart Flow</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
