'use client';

import React, { useState } from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { AI_MODELS } from '../../data/models';
import { Sparkles, ArrowRight, Zap, Puzzle, ShieldCheck, CheckCircle2, Play, Code2, Brain } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { setActiveTab, setPrimaryModelId, setIsSplitMode } = useEcosystem();
  const [testPrompt, setTestPrompt] = useState('Compare GPT-4o and Claude 3.5 Sonnet on React component optimization');
  const [selectedModel, setSelectedModel] = useState('gpt-4o');

  const handleQuickTest = () => {
    setPrimaryModelId(selectedModel);
    setIsSplitMode(true);
    setActiveTab('workspace');
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-grid-pattern">
      
      {/* Background Radial Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Announcement Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-8 shadow-inner animate-pulse">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>EchoGPT 2.4 Released</span>
          <span className="w-1 h-1 rounded-full bg-indigo-400" />
          <span className="text-slate-400 font-normal">DeepSeek R1 + Claude 3.5 Sonnet Dual Benchmarking</span>
          <ArrowRight className="w-3 h-3 text-cyan-400" />
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]">
          One Unified Workspace for <br className="hidden sm:inline" />
          <span className="gradient-text-cyan-purple">Every Top AI Model</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal">
          Stop switching tabs. Access <strong className="text-slate-200">GPT-4o, Claude 3.5 Sonnet, DeepSeek R1, and Gemini 1.5 Pro</strong> in a single high-performance chat workspace & browser sidepanel.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => setActiveTab('workspace')}
            className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 transition transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Zap className="w-4 h-4 fill-white" />
            <span>Launch Web App Free</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setActiveTab('extension')}
            className="px-7 py-3.5 rounded-2xl glass-panel hover:bg-slate-900 border border-slate-800 text-slate-200 hover:text-white font-bold text-sm transition flex items-center gap-2"
          >
            <Puzzle className="w-4 h-4 text-cyan-400" />
            <span>Test Chrome Extension</span>
          </button>
        </div>

        {/* Live Interactive Playground Input */}
        <div className="mt-12 max-w-2xl mx-auto glass-panel p-2 rounded-2xl border border-slate-800 shadow-2xl bg-slate-950/90 text-left">
          <div className="p-3 border-b border-slate-800/80 flex items-center justify-between gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 font-semibold text-slate-300">
              <Brain className="w-4 h-4 text-cyan-400" />
              Try Dual-Model Prompt Benchmark
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-500">Model:</span>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="bg-slate-900 border border-slate-700/80 text-slate-200 text-xs rounded-lg px-2 py-1 focus:outline-none"
              >
                {AI_MODELS.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name} ({m.provider})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="p-3 flex items-center gap-3">
            <input
              type="text"
              value={testPrompt}
              onChange={(e) => setTestPrompt(e.target.value)}
              className="flex-1 bg-transparent text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none"
              placeholder="Ask anything..."
            />
            <button
              onClick={handleQuickTest}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-md transition"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              Compare Models
            </button>
          </div>
        </div>

        {/* Feature Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>No Credit Card Required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>Real-time Dual AI Benchmarks</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-indigo-400" />
            <span>Chrome Sidepanel Integration</span>
          </div>
        </div>

      </div>
    </section>
  );
};
