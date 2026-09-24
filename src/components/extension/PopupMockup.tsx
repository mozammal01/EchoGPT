'use client';

import React, { useState } from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { AI_MODELS } from '../../data/models';
import { Sparkles, Search, Zap, Puzzle, FileText, ArrowRight, Settings, Send } from 'lucide-react';

export const PopupMockup: React.FC = () => {
  const { primaryModel, setPrimaryModelId, sendMessage, setActiveTab } = useEcosystem();
  const [popupInput, setPopupInput] = useState('');

  const handleQuickSend = () => {
    if (!popupInput.trim()) return;
    sendMessage(popupInput);
    setActiveTab('workspace');
  };

  return (
    <div className="w-[360px] glass-panel rounded-2xl border border-slate-800 bg-slate-950 text-slate-100 p-4 shadow-2xl overflow-hidden font-sans">
      
      {/* Extension Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-gradient-to-tr from-cyan-500 to-indigo-600 rounded-lg text-white">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-white leading-none">EchoGPT Companion</h3>
            <span className="text-[10px] text-slate-400 font-mono">Chrome Extension v2.4</span>
          </div>
        </div>

        <select
          value={primaryModel.id}
          onChange={(e) => setPrimaryModelId(e.target.value)}
          className="bg-slate-900 border border-slate-800 text-[11px] font-bold text-cyan-300 rounded-lg px-2 py-1 focus:outline-none"
        >
          {AI_MODELS.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name}
            </option>
          ))}
        </select>
      </div>

      {/* Page Context Summary Quick Action */}
      <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/30 mb-3">
        <div className="flex items-center justify-between text-[11px] mb-1">
          <span className="font-semibold text-indigo-300">Active Web Tab:</span>
          <span className="text-[10px] text-slate-400 font-mono">github.com</span>
        </div>
        <p className="text-[11px] text-slate-300 font-medium truncate mb-2">
          "React 19 Server Components Optimization Guide"
        </p>

        <button
          onClick={() => {
            sendMessage('Summarize the active webpage content: React 19 Server Components Guide.');
            setActiveTab('workspace');
          }}
          className="w-full py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 shadow transition"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Summarize Page with {primaryModel.name}</span>
        </button>
      </div>

      {/* Quick Prompt Input */}
      <div className="space-y-2 mb-3">
        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Quick Prompt</label>
        <div className="relative">
          <input
            type="text"
            value={popupInput}
            onChange={(e) => setPopupInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleQuickSend()}
            placeholder="Ask AI without leaving page..."
            className="w-full pl-3 pr-8 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
          <button
            onClick={handleQuickSend}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-cyan-400 hover:text-white"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Quick Links */}
      <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
        <span>Shortcut: <strong className="text-slate-200 font-mono">Alt + E</strong></span>
        <button onClick={() => setActiveTab('workspace')} className="text-cyan-400 hover:underline">
          Open Full Web Workspace →
        </button>
      </div>

    </div>
  );
};
