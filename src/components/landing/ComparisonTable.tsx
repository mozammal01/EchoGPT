'use client';

import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  const matrix = [
    { feature: 'GPT-4o Access', echogpt: true, chatgpt: true, claude: false, perplexity: false },
    { feature: 'Claude 3.5 Sonnet Access', echogpt: true, chatgpt: false, claude: true, perplexity: false },
    { feature: 'DeepSeek R1 Reasoning', echogpt: true, chatgpt: false, claude: false, perplexity: false },
    { feature: 'Dual-AI Model Split View', echogpt: true, chatgpt: false, claude: false, perplexity: false },
    { feature: 'Chrome Extension Sidepanel', echogpt: true, chatgpt: false, claude: false, perplexity: true },
    { feature: 'Prompt Vault & Custom Personas', echogpt: true, chatgpt: true, claude: false, perplexity: false },
    { feature: 'Monthly Subscription Cost', echogpt: '$12/mo', chatgpt: '$20/mo', claude: '$20/mo', perplexity: '$20/mo' },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-slate-800/60 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">
            UNBEATABLE VALUE PROPOSITION
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            EchoGPT vs. Single AI Subscriptions
          </h3>
          <p className="mt-4 text-sm text-slate-400">
            Why pay $60/month across separate ChatGPT, Claude, and Perplexity accounts when you can get all of them in EchoGPT for a fraction of the cost?
          </p>
        </div>

        {/* Matrix Table */}
        <div className="max-w-5xl mx-auto overflow-x-auto glass-panel rounded-2xl border border-slate-800 bg-slate-950 p-2 shadow-2xl">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400">
                <th className="p-4 font-bold text-slate-200">Feature Comparison</th>
                <th className="p-4 font-bold text-cyan-400 bg-indigo-950/40 border-x border-indigo-500/20 text-center rounded-t-xl">
                  <div className="flex items-center justify-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    EchoGPT Multi-AI
                  </div>
                </th>
                <th className="p-4 font-semibold text-center">ChatGPT Plus</th>
                <th className="p-4 font-semibold text-center">Claude Pro</th>
                <th className="p-4 font-semibold text-center">Perplexity Pro</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {matrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-900/40 transition">
                  <td className="p-4 font-medium text-slate-200">{row.feature}</td>
                  
                  {/* EchoGPT Column */}
                  <td className="p-4 text-center bg-indigo-950/20 border-x border-indigo-500/20 font-bold text-white">
                    {typeof row.echogpt === 'boolean' ? (
                      row.echogpt ? (
                        <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-rose-500 mx-auto" />
                      )
                    ) : (
                      <span className="text-cyan-300 font-extrabold text-sm">{row.echogpt}</span>
                    )}
                  </td>

                  {/* ChatGPT */}
                  <td className="p-4 text-center text-slate-400">
                    {typeof row.chatgpt === 'boolean' ? (
                      row.chatgpt ? (
                        <Check className="w-4 h-4 text-slate-400 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-slate-600 mx-auto" />
                      )
                    ) : (
                      row.chatgpt
                    )}
                  </td>

                  {/* Claude */}
                  <td className="p-4 text-center text-slate-400">
                    {typeof row.claude === 'boolean' ? (
                      row.claude ? (
                        <Check className="w-4 h-4 text-slate-400 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-slate-600 mx-auto" />
                      )
                    ) : (
                      row.claude
                    )}
                  </td>

                  {/* Perplexity */}
                  <td className="p-4 text-center text-slate-400">
                    {typeof row.perplexity === 'boolean' ? (
                      row.perplexity ? (
                        <Check className="w-4 h-4 text-slate-400 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-slate-600 mx-auto" />
                      )
                    ) : (
                      row.perplexity
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
