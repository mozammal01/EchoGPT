'use client';

import React, { useState } from 'react';
import { ChatMessage as ChatMessageType } from '../../types';
import { getModelById } from '../../data/models';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { User, Sparkles, Copy, Check, Clock, Cpu, RefreshCw, Columns } from 'lucide-react';

interface ChatMessageProps {
  message: ChatMessageType;
  onRetry?: () => void;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, onRetry }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [copiedText, setCopiedText] = useState(false);

  const isUser = message.sender === 'user';
  const modelInfo = message.modelId ? getModelById(message.modelId) : null;

  const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const handleCopyCodeBlock = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className={`py-4 px-4 sm:px-6 rounded-2xl mb-4 transition ${
      isUser ? 'bg-slate-900/60 border border-slate-800/80' : 'bg-slate-950/80 border border-slate-800/90 shadow-sm'
    }`}>
      {/* Sender Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          {isUser ? (
            <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white flex items-center justify-center text-xs font-bold shadow-md">
              <User className="w-4 h-4" />
            </div>
          ) : (
            <div
              className="w-7 h-7 rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-md border border-white/10"
              style={{ backgroundColor: modelInfo?.color || '#6366f1' }}
            >
              <Sparkles className="w-4 h-4" />
            </div>
          )}

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-200">
              {isUser ? 'You' : message.modelName || modelInfo?.name || 'AI Assistant'}
            </span>
            {!isUser && modelInfo && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800">
                {modelInfo.provider}
              </span>
            )}
            <span className="text-[10px] text-slate-500">{message.timestamp}</span>
          </div>
        </div>

        {/* Copy text action */}
        <button
          onClick={() => handleCopyText(message.text)}
          className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          title="Copy message content"
        >
          {copiedText ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Primary Message Content */}
      <div className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans prose prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {message.text}
        </ReactMarkdown>
      </div>

      {/* Code Blocks Rendering if explicitly passed */}
      {message.codeBlocks && message.codeBlocks.length > 0 && (
        <div className="mt-4 space-y-3">
          {message.codeBlocks.map((block, idx) => (
            <div key={idx} className="rounded-xl border border-slate-800 bg-slate-950 overflow-hidden font-mono">
              <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="text-cyan-400 font-bold uppercase">{block.language}</span>
                <button
                  onClick={() => handleCopyCodeBlock(block.code)}
                  className="flex items-center gap-1 hover:text-white transition"
                >
                  {copiedCode === block.code ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 text-xs text-slate-200 overflow-x-auto">
                <code>{block.code}</code>
              </pre>
            </div>
          ))}
        </div>
      )}

      {/* Secondary Model Response Box if Split View is active */}
      {message.secondaryModelResponse && (
        <div className="mt-5 p-4 rounded-xl border border-cyan-500/30 bg-cyan-950/20 text-xs">
          <div className="flex items-center justify-between mb-2 pb-2 border-b border-cyan-500/20">
            <span className="font-bold text-cyan-300 flex items-center gap-1.5">
              <Columns className="w-3.5 h-3.5 text-cyan-400" />
              Side-by-Side Comparison: {message.secondaryModelResponse.modelName}
            </span>
            <span className="text-[10px] text-slate-400 font-mono">
              {message.secondaryModelResponse.responseTimeSec}s response time
            </span>
          </div>
          <div className="text-slate-300 leading-relaxed prose prose-invert max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {message.secondaryModelResponse.text}
            </ReactMarkdown>
          </div>
        </div>
      )}

      {/* Footer Stats for AI responses */}
      {!isUser && (
        <div className="mt-3 pt-2 border-t border-slate-800/40 flex items-center justify-between text-[10px] text-slate-500 font-mono">
          <div className="flex items-center gap-3">
            {message.responseTimeSec && (
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-slate-400" />
                {message.responseTimeSec}s latency
              </span>
            )}
            {message.tokensUsed && (
              <span className="flex items-center gap-1">
                <Cpu className="w-3 h-3 text-slate-400" />
                {message.tokensUsed} tokens
              </span>
            )}
          </div>

          {onRetry && (
            <button
              onClick={onRetry}
              className="flex items-center gap-1 hover:text-slate-300 transition"
              title="Regenerate response"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Retry</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};
