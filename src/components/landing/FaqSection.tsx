'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What models are included in EchoGPT?',
      answer: 'EchoGPT provides access to all top proprietary and open-weights frontier models including OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, Google Gemini 1.5 Pro, DeepSeek R1, Meta Llama 3.3 70B, Mistral Large 2, and Perplexity Sonar web search.',
    },
    {
      question: 'How does the Dual-AI Split Comparison Mode work?',
      answer: 'When you type a prompt in the Web App or Chrome Sidepanel with Split Mode enabled, EchoGPT dispatches your query simultaneously to both your selected Primary and Secondary models. You can view responses side-by-side to compare reasoning depth, code output accuracy, and response times.',
    },
    {
      question: 'How does the Chrome Extension handle webpage privacy?',
      answer: 'The EchoGPT Chrome Extension operates with strict host permission controls. Web page content is only read locally inside your browser when you explicitly click the "Summarize Page" button or highlight text.',
    },
    {
      question: 'Can I bring my own API keys (BYOK)?',
      answer: 'Yes! EchoGPT supports both bundled subscriptions and direct API Key passthrough for OpenAI, Anthropic, Google AI Studio, and DeepSeek keys in the Ecosystem Settings menu.',
    },
    {
      question: 'How was this application built for the AppifyDevs Internship?',
      answer: 'This candidate submission is built using Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide Icons. It combines the Single-Page Landing Page, Redesigned Web Workspace, and Chrome Extension Simulator into a cohesive single repository.',
    },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-slate-800/60 bg-slate-950/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800 text-indigo-400 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h3 className="text-3xl font-extrabold text-white">Got Questions? We Have Answers</h3>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-slate-800 overflow-hidden bg-slate-950/90 transition"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left font-bold text-slate-100 text-sm flex items-center justify-between gap-4 hover:text-cyan-400 transition"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-cyan-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-400 leading-relaxed border-t border-slate-800/50 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
