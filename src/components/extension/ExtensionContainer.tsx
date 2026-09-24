'use client';

import React from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { PopupMockup } from './PopupMockup';
import { SidepanelMockup } from './SidepanelMockup';
import { PageSummarizerOverlay } from './PageSummarizerOverlay';
import { Puzzle, Globe, ArrowLeft, ArrowRight, RotateCw, Sparkles, Layers, ShieldCheck } from 'lucide-react';

export const ExtensionContainer: React.FC = () => {
  const { extensionViewMode, setExtensionViewMode, setActiveTab } = useEcosystem();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col min-h-[calc(100vh-64px)]">
      
      {/* Top Simulator Mode Selector Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 glass-panel p-4 rounded-2xl border border-slate-800 bg-slate-950">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Puzzle className="w-5 h-5 text-cyan-400" />
            EchoGPT Chrome Extension Interactive Simulator
          </h2>
          <p className="text-xs text-slate-400">
            Test the redesigned extension UI modes inside a simulated Chrome browser environment
          </p>
        </div>

        {/* View mode switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
          <button
            onClick={() => setExtensionViewMode('popup')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              extensionViewMode === 'popup'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Popup UI (380px)
          </button>

          <button
            onClick={() => setExtensionViewMode('sidepanel')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              extensionViewMode === 'sidepanel'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Chrome Sidepanel
          </button>

          <button
            onClick={() => setExtensionViewMode('overlay')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              extensionViewMode === 'overlay'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Floating Text Overlay
          </button>
        </div>
      </div>

      {/* Simulated Chrome Browser Window Frame */}
      <div className="flex-1 glass-panel rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden flex flex-col shadow-2xl relative">
        
        {/* Browser Top Window Bar */}
        <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>

          {/* Address Bar */}
          <div className="flex-1 max-w-2xl bg-slate-950 border border-slate-800 rounded-xl px-4 py-1.5 flex items-center justify-between text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2 truncate">
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-slate-200 truncate">https://developer.mozilla.org/en-US/docs/Web/API/Web_Components</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-sans">🔒 Secure</span>
          </div>

          {/* Toolbar Extensions Icon */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setExtensionViewMode(extensionViewMode === 'popup' ? 'sidepanel' : 'popup')}
              className="p-2 bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white rounded-lg hover:scale-105 transition shadow"
              title="Click EchoGPT Extension Toolbar Icon"
            >
              <Sparkles className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Browser Body Area */}
        <div className="flex-1 flex overflow-hidden relative bg-slate-900/30">
          
          {/* Simulated Third-Party Webpage Content */}
          <div className="flex-1 p-8 overflow-y-auto max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-cyan-400 text-xs font-mono">
              <span>Documentation • Web APIs</span>
            </div>
            
            <h1 className="text-3xl font-extrabold text-white">
              Web Components & Shadow DOM Architecture
            </h1>

            <p className="text-sm text-slate-300 leading-relaxed">
              Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.
            </p>

            {/* If Overlay Mode, render PageSummarizerOverlay inside webpage body */}
            {extensionViewMode === 'overlay' && (
              <div className="my-8 animate-fadeIn">
                <PageSummarizerOverlay />
              </div>
            )}

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs font-mono text-slate-300">
              <span className="text-cyan-400 font-bold">// Example Custom Element Registration</span>
              <pre className="text-slate-400">
{`class EchoGPTBubble extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
}
customElements.define('echogpt-bubble', EchoGPTBubble);`}
              </pre>
            </div>
          </div>

          {/* Popup UI Overlay if Mode === popup */}
          {extensionViewMode === 'popup' && (
            <div className="absolute top-4 right-6 z-30 animate-fadeIn">
              <PopupMockup />
            </div>
          )}

          {/* Sidepanel UI attached right if Mode === sidepanel */}
          {extensionViewMode === 'sidepanel' && (
            <div className="h-full z-30 animate-fadeIn">
              <SidepanelMockup />
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
