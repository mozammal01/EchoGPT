'use client';

import React, { useState } from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { AI_MODELS } from '../../data/models';
import { Sparkles, Send, Globe, Columns, BookOpen, Layers, ShieldCheck, X } from 'lucide-react';

export const SidepanelMockup: React.FC = () => {
  const { primaryModel, secondaryModel, setPrimaryModelId, isSplitMode, setIsSplitMode, sendMessage, setActiveTab } = useEcosystem();
  const [sideInput, setSideInput] = useState('');

  const handleSend = () => {
    if (!sideInput.trim()) return;
    sendMessage(sideInput);
    setSideInput('');
  };

  return (
    <div className="w-full md:w-80 h-full glass-panel border-l border-slate-800 bg-slate-950 text-slate-100 flex flex-col shadow-2xl">
      
      {/* Sidepanel Header */}
      <div className="p-3 border-b border-slate-800 bg-slate-900/60 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="p-1 bg-gradient-to-tr from-cyan-500 to-indigo-600 rounded-md text-white">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-white">Chrome Sidepanel</span>
        </div>

        <button
          onClick={() => setIsSplitMode(!isSplitMode)}
          className={`p-1 rounded text-[10px] font-mono border ${
            isSplitMode ? 'bg-indigo-950 border-indigo-500 text-indigo-300' : 'bg-slate-900 border-slate-800 text-slate-400'
          }`}
          title="Toggle dual model view"
        >
          {isSplitMode ? 'Dual Model' : 'Single'}
        </button>
      </div>

      {/* Model Selector Pill */}
      <div className="p-2.5 bg-slate-900/40 border-b border-slate-800 flex items-center justify-between text-[11px]">
        <span className="text-slate-400">Model:</span>
        <select
          value={primaryModel.id}
          onChange={(e) => setPrimaryModelId(e.target.value)}
          className="bg-slate-900 border border-slate-800 text-cyan-300 text-xs font-bold rounded px-2 py-0.5"
        >
          {AI_MODELS.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name}
            </option>
          ))}
        </select>
      </div>

      {/* Web Context Bar */}
      <div className="p-3 bg-indigo-950/20 border-b border-slate-800/80 text-[11px] space-y-2">
        <div className="flex items-center justify-between text-slate-400">
          <span className="flex items-center gap-1 font-semibold text-indigo-300">
            <Globe className="w-3 h-3 text-cyan-400" />
            Active Tab Reading
          </span>
          <span className="text-[9px] text-emerald-400 font-mono">Connected</span>
        </div>

        <div className="grid grid-cols-2 gap-1.5 text-[10px]">
          <button
            onClick={() => sendMessage('Summarize main thesis of current webpage.')}
            className="p-1.5 bg-slate-900 hover:bg-indigo-600 border border-slate-800 text-slate-300 hover:text-white rounded text-center font-medium transition"
          >
            ⚡ Summarize
          </button>

          <button
            onClick={() => sendMessage('Extract key technical code snippets from this webpage.')}
            className="p-1.5 bg-slate-900 hover:bg-indigo-600 border border-slate-800 text-slate-300 hover:text-white rounded text-center font-medium transition"
          >
            💻 Extract Code
          </button>
        </div>
      </div>

      {/* Mini Messages Feed */}
      <div className="flex-1 p-3 overflow-y-auto space-y-3 text-xs">
        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-[10px] font-bold text-cyan-400 block mb-1">EchoGPT Assistant</span>
          <p className="text-slate-300 leading-relaxed">
            Sidepanel is active. Ask questions about the current page or switch models anytime!
          </p>
        </div>
      </div>

      {/* Input */}
      <div className="p-3 border-t border-slate-800 bg-slate-950">
        <div className="relative">
          <input
            type="text"
            value={sideInput}
            onChange={(e) => setSideInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask AI in sidepanel..."
            className="w-full pl-3 pr-8 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
          <button
            onClick={handleSend}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-cyan-400 hover:text-white"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
};
