'use client';

import React, { useState } from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { AI_MODELS } from '../../data/models';
import { Sparkles, Code2, Brain, Zap, Globe, Search, Cpu, ArrowUpRight, Check, Sliders } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-5 h-5 text-emerald-400" />,
  Code2: <Code2 className="w-5 h-5 text-amber-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-indigo-400" />,
  Brain: <Brain className="w-5 h-5 text-cyan-400" />,
  Cpu: <Cpu className="w-5 h-5 text-purple-400" />,
  Globe: <Globe className="w-5 h-5 text-rose-400" />,
  Search: <Search className="w-5 h-5 text-teal-400" />,
};

export const AiModelsGrid: React.FC = () => {
  const { setActiveTab, setPrimaryModelId } = useEcosystem();
  const [filterProvider, setFilterProvider] = useState<string>('All');

  const providers = ['All', 'OpenAI', 'Anthropic', 'Google', 'DeepSeek', 'Meta'];

  const filteredModels = AI_MODELS.filter(
    (m) => filterProvider === 'All' || m.provider === filterProvider
  );

  const handleSelectModel = (modelId: string) => {
    setPrimaryModelId(modelId);
    setActiveTab('workspace');
  };

  return (
    <section className="py-16 md:py-24 border-t border-slate-800/60 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">
            INTEGRATED AI POWERHOUSE
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Every World-Class Model, <br className="hidden sm:inline" />
            <span className="gradient-text-cyan-purple">Unified Under One Subscription</span>
          </h3>
          <p className="mt-4 text-sm text-slate-400">
            Switch between frontier reasoning models, high-speed coders, and live web search engines with zero latency penalty.
          </p>

          {/* Provider Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {providers.map((p) => (
              <button
                key={p}
                onClick={() => setFilterProvider(p)}
                className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition ${
                  filterProvider === p
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModels.map((model) => (
            <div
              key={model.id}
              className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="p-2.5 rounded-xl border border-white/10"
                      style={{ backgroundColor: model.accentBg }}
                    >
                      {iconMap[model.iconName] || <Sparkles className="w-5 h-5 text-indigo-400" />}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition">
                        {model.name}
                      </h4>
                      <span className="text-xs text-slate-400 font-mono">
                        {model.provider} • {model.version}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400">
                    {model.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {model.description}
                </p>

                {/* Capabilities Meters */}
                <div className="space-y-3 pt-4 border-t border-slate-800/80 mb-6">
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                      <span>Coding Score</span>
                      <span className="font-semibold text-slate-200">{model.capabilities.coding}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"
                        style={{ width: `${model.capabilities.coding}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                      <span>Reasoning Score</span>
                      <span className="font-semibold text-slate-200">{model.capabilities.reasoning}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                        style={{ width: `${model.capabilities.reasoning}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Specs Pill */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 mb-6">
                  <span>Context: <strong className="text-slate-200">{model.capabilities.contextWindow}</strong></span>
                  <span>Latency: <strong className="text-emerald-400">{model.latencyMs}ms</strong></span>
                </div>
              </div>

              <button
                onClick={() => handleSelectModel(model.id)}
                className="w-full py-2.5 bg-slate-900 hover:bg-indigo-600 border border-slate-800 hover:border-indigo-500 text-slate-300 hover:text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition"
              >
                <span>Chat with {model.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
