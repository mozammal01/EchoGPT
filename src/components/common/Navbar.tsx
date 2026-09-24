'use client';

import React from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import {
  Sparkles,
  Layout,
  MessageSquare,
  Puzzle,
  Sun,
  Moon,
  Award,
  BookOpen,
  Settings,
  Zap,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    activeTab,
    setActiveTab,
    theme,
    toggleTheme,
    setEvaluationModalOpen,
    setPromptLibraryModalOpen,
    setSettingsModalOpen,
    primaryModel,
    isSplitMode,
  } = useEcosystem();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('landing')}>
          <div className="relative p-2 bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 rounded-xl text-white shadow-lg shadow-indigo-500/20 group">
            <Sparkles className="w-5 h-5 transition-transform group-hover:scale-110" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-slate-950 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg tracking-tight text-white">
                Echo<span className="gradient-text-cyan-purple">GPT</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-semibold">
                Multi-AI v2.4
              </span>
            </div>
            <span className="text-[10px] text-slate-400 hidden sm:block">
              Unified Ecosystem • GPT-4o, Claude, DeepSeek
            </span>
          </div>
        </div>

        {/* Center: Main App Tabs Navigation */}
        <nav className="flex items-center bg-slate-900/90 border border-slate-800/90 rounded-2xl p-1 shadow-inner">
          <button
            onClick={() => setActiveTab('landing')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'landing'
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Layout className="w-3.5 h-3.5" />
            <span>Landing</span>
          </button>

          <button
            onClick={() => setActiveTab('workspace')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'workspace'
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Web App</span>
            {isSplitMode && (
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" title="Split view active" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('extension')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'extension'
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Puzzle className="w-3.5 h-3.5" />
            <span>Extension Simulator</span>
          </button>
        </nav>

        {/* Right Action Tools */}
        <div className="flex items-center gap-2">
          
          {/* AppifyDevs Candidate Review Badge */}
          <button
            onClick={() => setEvaluationModalOpen(true)}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-indigo-950/60 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-900/60 hover:text-white transition shadow-sm"
            title="AppifyDevs Candidate Practical Evaluation Details"
          >
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>Candidate Review</span>
          </button>

          {/* Prompt Library Button */}
          <button
            onClick={() => setPromptLibraryModalOpen(true)}
            className="p-2 text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-xl transition"
            title="Prompt Library"
          >
            <BookOpen className="w-4 h-4 text-cyan-400" />
          </button>

          {/* Settings Modal Button */}
          <button
            onClick={() => setSettingsModalOpen(true)}
            className="p-2 text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-xl transition"
            title="Ecosystem Settings"
          >
            <Settings className="w-4 h-4" />
          </button>

          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-400 hover:text-amber-400 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-xl transition"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* CTA Launch Web App button if on landing */}
          {activeTab === 'landing' && (
            <button
              onClick={() => setActiveTab('workspace')}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-lg shadow-cyan-500/20 transition transform hover:-translate-y-0.5"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Launch App</span>
            </button>
          )}

        </div>

      </div>
    </header>
  );
};
