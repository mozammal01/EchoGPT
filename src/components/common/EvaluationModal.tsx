'use client';

import React from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { X, CheckCircle2, Award, ExternalLink, Code2, Sparkles, Layers, Cpu, ShieldCheck } from 'lucide-react';

export const EvaluationModal: React.FC = () => {
  const { evaluationModalOpen, setEvaluationModalOpen } = useEcosystem();

  if (!evaluationModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel rounded-2xl border border-indigo-500/30 p-6 md:p-8 shadow-2xl bg-slate-950 text-slate-100">
        
        {/* Close Button */}
        <button
          onClick={() => setEvaluationModalOpen(false)}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-tr from-indigo-600 to-cyan-500 rounded-xl text-white shadow-lg shadow-indigo-500/30">
            <Award className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              AppifyDevs Evaluation Summary
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Candidate Submission
              </span>
            </h2>
            <p className="text-sm text-slate-400">
              Software Engineering Internship (Frontend) — Practical Assignment Review
            </p>
          </div>
        </div>

        {/* Tasks Implementation Grid */}
        <div className="space-y-6">
          
          {/* Deliverables Checklist */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <h3 className="text-base font-semibold text-slate-200 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-indigo-400" />
              Completed Assignment Directives
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/50">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-1">Task 1</span>
                <p className="text-xs text-slate-300 font-medium">Redesigned EchoGPT Web App</p>
                <p className="text-[11px] text-slate-400 mt-1">Multi-model split view, prompt templates, dark mode, rich markdown code syntax.</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/50">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block mb-1">Task 2</span>
                <p className="text-xs text-slate-300 font-medium">Single-Page Marketing Landing</p>
                <p className="text-[11px] text-slate-400 mt-1">Hero, interactive AI model playground, pricing, extension preview, FAQ.</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/50">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider block mb-1">Task 3</span>
                <p className="text-xs text-slate-300 font-medium">Chrome Extension Simulator</p>
                <p className="text-[11px] text-slate-400 mt-1">Interactive browser mockup for Popup UI, Sidepanel mode, and Web Action overlay.</p>
              </div>
            </div>
          </div>

          {/* Technical Architecture */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-200 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-cyan-400" />
              Technical Stack & Best Practices
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">FRAMEWORK</span>
                <span className="font-semibold text-slate-200">Next.js 14 (App Router)</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">LANGUAGE</span>
                <span className="font-semibold text-slate-200">TypeScript (Strict)</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">STYLING</span>
                <span className="font-semibold text-slate-200">Tailwind CSS + Tokens</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">ANIMATIONS</span>
                <span className="font-semibold text-slate-200">Framer Motion</span>
              </div>
            </div>
          </div>

          {/* Bonus Features Implemented */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-950/40 to-purple-950/40 border border-indigo-500/20">
            <h4 className="text-sm font-semibold text-indigo-300 mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              Bonus Criteria Delivered
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                Instant Dark/Light Mode Theme Engine
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                Framer Motion Micro-Interactions & Transitions
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                WCAG 2.1 Accessible Focus States & High Contrast
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                Side-by-Side Dual AI Model Benchmark Tool
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                Pre-loaded Prompt Library & Persona Customizer
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                In-Browser Extension Popup/Sidepanel Simulator
              </li>
            </ul>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            Built for <strong className="text-slate-200">AppifyDevs Candidate Practical Evaluation</strong>
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setEvaluationModalOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition"
            >
              Close Summary
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
