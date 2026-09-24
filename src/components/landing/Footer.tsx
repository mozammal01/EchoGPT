'use client';

import React from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { Sparkles, Globe, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActiveTab, setEvaluationModalOpen } = useEcosystem();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-gradient-to-tr from-cyan-500 to-indigo-600 rounded-lg text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-bold text-white text-base">EchoGPT Ecosystem</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Redesigned multi-AI experience combining Web App, Landing Page, and Chrome Extension simulator into one seamless client architecture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-200 mb-3 uppercase tracking-wider text-[11px]">Ecosystem Apps</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveTab('landing')} className="hover:text-cyan-400 transition">
                  Marketing Landing Page
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('workspace')} className="hover:text-cyan-400 transition">
                  Redesigned Web Workspace
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('extension')} className="hover:text-cyan-400 transition">
                  Chrome Extension Simulator
                </button>
              </li>
            </ul>
          </div>

          {/* Candidate Review */}
          <div>
            <h4 className="font-bold text-slate-200 mb-3 uppercase tracking-wider text-[11px]">Assessment Deliverables</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setEvaluationModalOpen(true)} className="hover:text-indigo-400 transition flex items-center gap-1">
                  <span>AppifyDevs Assessment Details</span>
                </button>
              </li>
              <li>
                <span className="text-slate-500">Built with Next.js 14 & TypeScript</span>
              </li>
              <li>
                <span className="text-slate-500">WCAG 2.1 Accessible Theme System</span>
              </li>
            </ul>
          </div>

          {/* Security & Status */}
          <div>
            <h4 className="font-bold text-slate-200 mb-3 uppercase tracking-wider text-[11px]">System Status</h4>
            <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-[11px] text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                All 7 AI Models Online (100%)
              </div>
              <p className="text-[10px] text-slate-500">
                Average Latency: 380ms across OpenAI, Anthropic, DeepSeek.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} EchoGPT Ecosystem. Candidate submission for AppifyDevs Frontend Software Engineering Internship.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> for AppifyDevs
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
