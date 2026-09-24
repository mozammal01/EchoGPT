'use client';

import React, { useState } from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { Check, Sparkles, Zap, Shield, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PricingSection: React.FC = () => {
  const { setActiveTab } = useEcosystem();
  const [isYearly, setIsYearly] = useState<boolean>(true);

  const handleSelectPlan = (planName: string) => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
    setActiveTab('workspace');
  };

  return (
    <section className="py-16 md:py-24 border-t border-slate-800/60 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">
            FLEXIBLE & TRANSPARENT PRICING
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Choose Your Multi-AI Plan
          </h3>
          <p className="mt-4 text-sm text-slate-400">
            Start completely free. Upgrade anytime to unlock unlimited split-model benchmarks and Chrome sidepanel power.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={`text-xs font-medium ${!isYearly ? 'text-white' : 'text-slate-400'}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                isYearly ? 'bg-indigo-600' : 'bg-slate-800'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs font-medium flex items-center gap-1.5 ${isYearly ? 'text-white' : 'text-slate-400'}`}>
              Annual Billing
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                Save 40%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Free Tier */}
          <div className="glass-panel p-8 rounded-2xl border border-slate-800 flex flex-col justify-between bg-slate-950/80">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-white">Starter Free</h4>
                <span className="text-[10px] bg-slate-900 text-slate-400 px-2.5 py-1 rounded-full border border-slate-800">
                  Always Free
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-6">Perfect for light testing across standard models.</p>
              
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">$0</span>
                <span className="text-xs text-slate-400"> / forever</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-300 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Standard GPT-3.5 & Llama 3.3 Access
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  30 Queries per day
                </li>
                <li className="flex items-center gap-2 text-slate-500">
                  <Check className="w-4 h-4 text-slate-700" />
                  Single-Model View Only
                </li>
                <li className="flex items-center gap-2 text-slate-500">
                  <Check className="w-4 h-4 text-slate-700" />
                  Basic Web Search
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleSelectPlan('Free')}
              className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold rounded-xl text-xs transition border border-slate-800"
            >
              Get Started Free
            </button>
          </div>

          {/* Pro Tier (Featured) */}
          <div className="glass-panel p-8 rounded-2xl border-2 border-indigo-500/80 relative flex flex-col justify-between bg-gradient-to-b from-indigo-950/40 via-slate-950 to-slate-950 shadow-2xl shadow-indigo-500/20 scale-105">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full text-white text-[10px] font-extrabold tracking-wider uppercase shadow-lg">
              MOST POPULAR FOR DEVELOPERS
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  Multi-AI Pro
                </h4>
              </div>
              <p className="text-xs text-slate-400 mb-6">Unlimited access to GPT-4o, Claude 3.5 & DeepSeek R1.</p>
              
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">
                  ${isYearly ? '12' : '19'}
                </span>
                <span className="text-xs text-slate-400"> / month</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-200 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  All 7+ Frontier AI Models Included
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Dual-AI Side-by-Side Split View
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Full Chrome Extension Sidepanel & Popup
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Prompt Library & Persona Editor
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Unlimited Queries & High Speed Stream
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleSelectPlan('Pro')}
              className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold rounded-xl text-xs transition shadow-lg flex items-center justify-center gap-2"
            >
              <span>Start Pro Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Team Tier */}
          <div className="glass-panel p-8 rounded-2xl border border-slate-800 flex flex-col justify-between bg-slate-950/80">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-white">Team Workspaces</h4>
                <span className="text-[10px] bg-purple-950 text-purple-300 px-2.5 py-1 rounded-full border border-purple-800">
                  Enterprise
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-6">Centralized seats, shared prompts, and compliance security.</p>
              
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">
                  ${isYearly ? '29' : '39'}
                </span>
                <span className="text-xs text-slate-400"> / seat / mo</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-300 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Everything in Pro Plan
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Shared Team Prompt Libraries
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  SOC2 & Zero Data Retention Guarantee
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Dedicated API Throughput & Priority Support
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleSelectPlan('Team')}
              className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold rounded-xl text-xs transition border border-slate-800"
            >
              Contact Team Sales
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
