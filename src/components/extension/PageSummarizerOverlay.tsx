'use client';

import React, { useState } from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { Sparkles, Brain, Code2, Globe, FileText, Check, ArrowRight } from 'lucide-react';

export const PageSummarizerOverlay: React.FC = () => {
  const { sendMessage, setActiveTab, primaryModel } = useEcosystem();
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  const handleAction = (actionName: string, promptText: string) => {
    setSelectedAction(actionName);
    setTimeout(() => {
      sendMessage(promptText);
      setActiveTab('workspace');
    }, 600);
  };

  return (
    <div className="relative p-6 rounded-2xl glass-panel border border-indigo-500/40 bg-slate-950/95 text-slate-100 shadow-2xl">
      
      {/* Simulated Selected Text Banner */}
      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 mb-4 text-xs font-mono">
        <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">
          Highlighted Web Page Text (Selected by User):
        </span>
        <p className="text-cyan-300 italic">
          "React Server Components allow developers to build applications that span the server and client, combining the rich interactivity of client-side apps with the performance of traditional server rendering."
        </p>
      </div>

      {/* Floating Action Trigger Bubble */}
      <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-900 border border-indigo-500/30 flex flex-wrap items-center justify-between gap-3 shadow-xl">
        <div className="flex items-center gap-2 text-xs font-bold text-white">
          <div className="p-1.5 bg-cyan-500 rounded-lg text-slate-950">
            <Sparkles className="w-4 h-4 fill-slate-950" />
          </div>
          <span>EchoGPT Quick Actions</span>
          <span className="text-[10px] font-mono text-cyan-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
            Model: {primaryModel.name}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <button
            onClick={() => handleAction('explain', 'Explain highlighted text: React Server Components benefits.')}
            className="px-3 py-1.5 bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white rounded-lg font-semibold flex items-center gap-1 transition"
          >
            <Brain className="w-3.5 h-3.5 text-cyan-400" />
            <span>Explain</span>
          </button>

          <button
            onClick={() => handleAction('summarize', 'Summarize highlighted text into 2 bullet points.')}
            className="px-3 py-1.5 bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white rounded-lg font-semibold flex items-center gap-1 transition"
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>Summarize</span>
          </button>

          <button
            onClick={() => handleAction('code', 'Generate TypeScript code example for highlighted text.')}
            className="px-3 py-1.5 bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white rounded-lg font-semibold flex items-center gap-1 transition"
          >
            <Code2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Write Code</span>
          </button>
        </div>
      </div>

      {selectedAction && (
        <div className="mt-3 text-center text-xs text-emerald-400 font-medium animate-pulse">
          ✓ Processing query with {primaryModel.name}... Opening Workspace.
        </div>
      )}

    </div>
  );
};
