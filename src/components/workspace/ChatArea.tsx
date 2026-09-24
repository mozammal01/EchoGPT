'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { AI_MODELS } from '../../data/models';
import { ChatMessage } from './ChatMessage';
import {
  Send,
  Paperclip,
  Mic,
  Globe,
  Columns,
  Sparkles,
  BookOpen,
  Sliders,
  ChevronDown,
  X,
  Zap,
} from 'lucide-react';

export const ChatArea: React.FC = () => {
  const {
    activeConversation,
    primaryModel,
    secondaryModel,
    setPrimaryModelId,
    setSecondaryModelId,
    isSplitMode,
    setIsSplitMode,
    sendMessage,
    setPromptLibraryModalOpen,
    userSettings,
    updateSettings,
  } = useEcosystem();

  const [inputPrompt, setInputPrompt] = useState('');
  const [attachment, setAttachment] = useState<string | null>(null);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeConversation.messages]);

  const handleSend = () => {
    if (!inputPrompt.trim()) return;
    sendMessage(inputPrompt, attachment || undefined);
    setInputPrompt('');
    setAttachment(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSimulatedAttachment = () => {
    setAttachment('project_schema_refactoring.tsx');
  };

  const handleSimulatedVoice = () => {
    setIsListening(true);
    setTimeout(() => {
      setInputPrompt('Compare how DeepSeek R1 and Claude 3.5 Sonnet handle complex algorithm proofs.');
      setIsListening(false);
    }, 1500);
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-950 text-slate-100 overflow-hidden relative">
      
      {/* Workspace Header Toolbar */}
      <div className="p-3 sm:p-4 border-b border-slate-800/80 bg-slate-900/40 flex flex-wrap items-center justify-between gap-3 z-10">
        
        {/* Left: Model Selector(s) */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-1">
            <span className="text-[10px] text-slate-500 font-mono uppercase">Primary:</span>
            <select
              value={primaryModel.id}
              onChange={(e) => setPrimaryModelId(e.target.value)}
              className="bg-transparent text-xs font-bold text-slate-200 focus:outline-none cursor-pointer"
            >
              {AI_MODELS.map((m) => (
                <option key={m.id} value={m.id} className="bg-slate-900 text-slate-200">
                  {m.name} ({m.provider})
                </option>
              ))}
            </select>
          </div>

          {/* Secondary model selector if split view is active */}
          {isSplitMode && (
            <div className="flex items-center gap-1.5 bg-cyan-950/40 border border-cyan-500/30 rounded-xl px-2.5 py-1 animate-fadeIn">
              <span className="text-[10px] text-cyan-400 font-mono uppercase">Compare With:</span>
              <select
                value={secondaryModel.id}
                onChange={(e) => setSecondaryModelId(e.target.value)}
                className="bg-transparent text-xs font-bold text-cyan-300 focus:outline-none cursor-pointer"
              >
                {AI_MODELS.map((m) => (
                  <option key={m.id} value={m.id} className="bg-slate-900 text-slate-200">
                    {m.name} ({m.provider})
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Right: Split Mode Toggle & Search Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsSplitMode(!isSplitMode)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${
              isSplitMode
                ? 'bg-cyan-950 text-cyan-300 border-cyan-500/50 shadow-sm'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
            title="Toggle side-by-side model comparison view"
          >
            <Columns className="w-3.5 h-3.5 text-cyan-400" />
            <span>{isSplitMode ? 'Split Mode On' : 'Single Model'}</span>
          </button>

          <button
            onClick={() => updateSettings({ webSearchEnabled: !userSettings.webSearchEnabled })}
            className={`p-1.5 rounded-xl border transition ${
              userSettings.webSearchEnabled
                ? 'bg-emerald-950 text-emerald-300 border-emerald-500/40'
                : 'bg-slate-900 border-slate-800 text-slate-500'
            }`}
            title="Toggle Live Web Search integration"
          >
            <Globe className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 max-w-4xl mx-auto w-full">
        {activeConversation.messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Bar Area */}
      <div className="p-4 border-t border-slate-800/80 bg-slate-950 max-w-4xl mx-auto w-full">
        
        {/* Attachment Pill if present */}
        {attachment && (
          <div className="mb-2 inline-flex items-center gap-2 px-3 py-1 bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 rounded-lg text-xs">
            <Paperclip className="w-3.5 h-3.5" />
            <span>{attachment}</span>
            <button onClick={() => setAttachment(null)} className="hover:text-white">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Input Box */}
        <div className="glass-panel p-2.5 rounded-2xl border border-slate-800 focus-within:border-indigo-500/80 transition shadow-xl bg-slate-900/90">
          <textarea
            rows={2}
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Ask ${primaryModel.name} ${isSplitMode ? `and ${secondaryModel.name}` : ''}... (Shift+Enter for newline)`}
            className="w-full bg-transparent text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none resize-none px-2"
          />

          {/* Action Tools Toolbar inside input */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 mt-1">
            <div className="flex items-center gap-1">
              <button
                onClick={handleSimulatedAttachment}
                className="p-1.5 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition"
                title="Attach file"
              >
                <Paperclip className="w-4 h-4" />
              </button>

              <button
                onClick={handleSimulatedVoice}
                className={`p-1.5 rounded-lg transition ${
                  isListening ? 'text-rose-400 animate-bounce' : 'text-slate-400 hover:text-cyan-400 hover:bg-slate-800'
                }`}
                title="Voice Input simulation"
              >
                <Mic className="w-4 h-4" />
              </button>

              <button
                onClick={() => setPromptLibraryModalOpen(true)}
                className="p-1.5 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition"
                title="Open Prompt Vault"
              >
                <BookOpen className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

            <button
              onClick={handleSend}
              disabled={!inputPrompt.trim()}
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 disabled:opacity-40 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md transition"
            >
              <span>Send</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
