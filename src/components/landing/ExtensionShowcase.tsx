'use client';

import React, { useState } from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { Puzzle, Layers, FileText, ArrowRight, Sparkles, CheckCircle2, MousePointerClick } from 'lucide-react';

export const ExtensionShowcase: React.FC = () => {
  const { setActiveTab, setExtensionViewMode } = useEcosystem();
  const [activePreview, setActivePreview] = useState<'popup' | 'sidepanel' | 'overlay'>('popup');

  const handleLaunchSimulator = (mode: 'popup' | 'sidepanel' | 'overlay') => {
    setExtensionViewMode(mode);
    setActiveTab('extension');
  };

  return (
    <section className="py-16 md:py-24 border-t border-slate-800/60 bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 text-xs font-semibold mb-4">
            <Puzzle className="w-3.5 h-3.5" />
            <span>EchoGPT Chrome Extension</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            AI Superpowers Built Directly Into <br className="hidden sm:inline" />
            <span className="gradient-text-cyan-purple">Your Chrome Browser</span>
          </h3>
          <p className="mt-4 text-sm text-slate-400">
            Never copy-paste between windows again. Trigger EchoGPT on any web page via keyboard shortcut, floating action bubble, or sidepanel.
          </p>
        </div>

        {/* Tab Selector for Preview Modes */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-2xl">
            <button
              onClick={() => setActivePreview('popup')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                activePreview === 'popup'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              1. Compact Popup Window
            </button>
            <button
              onClick={() => setActivePreview('sidepanel')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                activePreview === 'sidepanel'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              2. Persistent Chrome Sidepanel
            </button>
            <button
              onClick={() => setActivePreview('overlay')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                activePreview === 'overlay'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              3. Web Page Floating Summarizer
            </button>
          </div>
        </div>

        {/* Interactive Extension Frame Mockup */}
        <div className="max-w-4xl mx-auto glass-panel rounded-2xl border border-slate-800 p-6 md:p-8 bg-slate-950/90 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Description Column */}
            <div className="md:col-span-5 space-y-4">
              {activePreview === 'popup' && (
                <>
                  <span className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-widest">
                    POPUP MODE
                  </span>
                  <h4 className="text-xl font-bold text-white">Instant Model Selector & Quick Chat</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Click the EchoGPT icon in your browser toolbar to instantly prompt any model without losing your place.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      380px compact responsive popover
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Instant 1-click model switching
                    </li>
                  </ul>
                </>
              )}

              {activePreview === 'sidepanel' && (
                <>
                  <span className="text-xs font-bold font-mono text-indigo-400 uppercase tracking-widest">
                    SIDEPANEL MODE
                  </span>
                  <h4 className="text-xl font-bold text-white">Persistent Dual-AI Research Sidebar</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Stays open on the right edge of Chrome as you navigate documentation, articles, or code repositories.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Reads active tab content automatically
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Dual-model split answer benchmarks
                    </li>
                  </ul>
                </>
              )}

              {activePreview === 'overlay' && (
                <>
                  <span className="text-xs font-bold font-mono text-purple-400 uppercase tracking-widest">
                    FLOATING OVERLAY
                  </span>
                  <h4 className="text-xl font-bold text-white">Text Highlight & Context Actions</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Select any text on any website to pop up instant AI options: Explain, Translate, Refactor, or Summarize.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Isolated Shadow DOM style sandbox
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Zero page layout interference
                    </li>
                  </ul>
                </>
              )}

              <button
                onClick={() => handleLaunchSimulator(activePreview)}
                className="mt-4 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg transition"
              >
                <span>Launch Interactive Extension Simulator</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Visual Graphic */}
            <div className="md:col-span-7 bg-slate-900/90 rounded-xl border border-slate-800 p-4 shadow-inner">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[11px] text-slate-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-slate-300">Chrome Browser Mockup</span>
                </div>
                <span className="text-cyan-400">echogpt.live/extension-v2</span>
              </div>

              {/* Dynamic UI Preview Frame */}
              <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 text-left font-sans">
                <div className="flex items-center justify-between text-xs mb-3 pb-2 border-b border-slate-800">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    EchoGPT Extension
                  </span>
                  <span className="text-[10px] bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800">
                    Active Model: Claude 3.5 Sonnet
                  </span>
                </div>
                
                <p className="text-xs text-slate-300 mb-3 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                  <strong className="text-cyan-400 block text-[10px]">CURRENT WEB PAGE:</strong>
                  "Understanding Next.js 14 Server Component Architecture and Parallel Routes"
                </p>

                <div className="flex gap-2">
                  <button className="flex-1 py-1.5 bg-indigo-600/90 text-white rounded text-[11px] font-semibold text-center">
                    ⚡ Summarize Page
                  </button>
                  <button className="flex-1 py-1.5 bg-slate-800 text-slate-300 rounded text-[11px] font-semibold text-center">
                    🔍 Ask Question
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
