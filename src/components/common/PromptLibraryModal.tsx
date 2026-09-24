'use client';

import React, { useState } from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { PROMPT_TEMPLATES } from '../../data/promptTemplates';
import { X, Search, Sparkles, Code2, Brain, PenTool, Layers, FileText, ArrowRight } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  Coding: <Code2 className="w-4 h-4 text-cyan-400" />,
  Writing: <PenTool className="w-4 h-4 text-rose-400" />,
  Productivity: <FileText className="w-4 h-4 text-amber-400" />,
  Research: <Brain className="w-4 h-4 text-purple-400" />,
  Design: <Layers className="w-4 h-4 text-indigo-400" />,
};

export const PromptLibraryModal: React.FC = () => {
  const { promptLibraryModalOpen, setPromptLibraryModalOpen, sendMessage, setActiveTab, setPrimaryModelId } = useEcosystem();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  if (!promptLibraryModalOpen) return null;

  const categories = ['All', 'Coding', 'Writing', 'Productivity', 'Research'];

  const filteredPrompts = PROMPT_TEMPLATES.filter((template) => {
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    const matchesSearch =
      template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleUsePrompt = (promptText: string, modelId: string) => {
    setPrimaryModelId(modelId);
    sendMessage(promptText);
    setPromptLibraryModalOpen(false);
    setActiveTab('workspace');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden glass-panel rounded-2xl border border-slate-800 bg-slate-950 text-slate-100 flex flex-col shadow-2xl">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-tr from-cyan-500 to-indigo-600 rounded-xl text-white">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">EchoGPT Prompt Library</h2>
              <p className="text-xs text-slate-400">
                Curated power prompts optimized for specific AI model architectures
              </p>
            </div>
          </div>
          <button
            onClick={() => setPromptLibraryModalOpen(false)}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Toolbar */}
        <div className="p-4 bg-slate-900/40 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search prompts by keyword or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-700/70 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Prompts Grid */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {filteredPrompts.map((template) => (
            <div
              key={template.id}
              className="p-4 rounded-xl glass-panel glass-panel-hover flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/60 text-slate-300">
                    {categoryIcons[template.category] || <Sparkles className="w-3.5 h-3.5 text-cyan-400" />}
                    {template.category}
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/50 border border-cyan-800/50 px-2 py-0.5 rounded">
                    Best with {template.suggestedModelId}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-100 mb-1 group-hover:text-cyan-300 transition">
                  {template.title}
                </h3>
                <p className="text-xs text-slate-400 mb-3 line-clamp-2">
                  {template.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {template.tags.map((tag) => (
                    <span key={tag} className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleUsePrompt(template.promptText, template.suggestedModelId)}
                className="w-full py-2 px-3 bg-indigo-600/90 hover:bg-indigo-600 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md transition group-hover:shadow-indigo-500/20"
              >
                Use Prompt in Workspace
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
