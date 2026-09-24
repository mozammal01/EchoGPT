'use client';

import React from 'react';
import { Columns, Puzzle, Sparkles, BookOpen, Sliders, ShieldCheck, Code2, Zap } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Columns className="w-6 h-6 text-cyan-400" />,
      title: 'Dual-AI Model Split View',
      description: 'Run 2 top models side-by-side on the exact same prompt. Compare token accuracy, latency, and reasoning structure in real time.',
      badge: 'Power-User Favorite',
    },
    {
      icon: <Puzzle className="w-6 h-6 text-indigo-400" />,
      title: 'Context-Aware Chrome Sidepanel',
      description: 'Summarize web pages, extract key data, translate articles, and generate code directly inside your browser without leaving the page.',
      badge: 'Chrome Extension',
    },
    {
      icon: <BookOpen className="w-6 h-6 text-amber-400" />,
      title: 'Pre-Engineered Prompt Library',
      description: 'Access curated expert system prompts for software refactoring, SEO copy, data science, and mathematical proof solving.',
      badge: 'Productivity Vault',
    },
    {
      icon: <Code2 className="w-6 h-6 text-emerald-400" />,
      title: 'Code Artifacts & Live Copy',
      description: 'Syntax-highlighted code blocks with built-in copy, language badges, and direct execution preview canvas support.',
      badge: 'Developer Choice',
    },
    {
      icon: <Sliders className="w-6 h-6 text-purple-400" />,
      title: 'Custom System Personas',
      description: 'Define custom behavioral rules, output formats, and system instructions for every conversation context.',
      badge: 'Customization',
    },
    {
      icon: <Zap className="w-6 h-6 text-rose-400" />,
      title: 'Zero Latency Model Switching',
      description: 'Seamlessly switch from GPT-4o to Claude 3.5 Sonnet mid-chat while retaining full conversation context memory.',
      badge: 'Fast API Stream',
    },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-slate-800/60 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">
            ENGINEERED FOR MULTI-AI PRODUCTIVITY
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Top Developers Choose <br className="hidden sm:inline" />
            <span className="gradient-text-cyan-purple">EchoGPT Over Single AI Apps</span>
          </h3>
          <p className="mt-4 text-sm text-slate-400">
            No single AI model excels at everything. EchoGPT gives you instant access to the ideal model for every specific coding, writing, or analysis task.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-6 rounded-2xl relative border border-slate-800/80 bg-slate-950/70"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
                  {item.icon}
                </div>
                <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-950/80 text-indigo-300 border border-indigo-800/40">
                  {item.badge}
                </span>
              </div>

              <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
