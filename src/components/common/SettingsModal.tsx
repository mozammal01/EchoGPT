'use client';

import React from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { AI_MODELS } from '../../data/models';
import { X, Settings, Sliders, Moon, Sun, Monitor, Cpu, Sparkles, Key, Check } from 'lucide-react';

export const SettingsModal: React.FC = () => {
  const {
    settingsModalOpen,
    setSettingsModalOpen,
    theme,
    setTheme,
    userSettings,
    updateSettings,
    isSplitMode,
    setIsSplitMode,
  } = useEcosystem();

  if (!settingsModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div className="relative w-full max-w-xl glass-panel rounded-2xl border border-slate-800 bg-slate-950 text-slate-100 p-6 shadow-2xl overflow-y-auto max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-indigo-400">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Ecosystem Settings</h2>
              <p className="text-xs text-slate-400">Manage multi-AI defaults and Chrome Extension key bindings</p>
            </div>
          </div>
          <button
            onClick={() => setSettingsModalOpen(false)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Options */}
        <div className="space-y-6 text-xs">

          {/* Theme Selector */}
          <div>
            <label className="block text-slate-300 font-semibold mb-2">Interface Appearance</label>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setTheme('dark')}
                className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition ${
                  theme === 'dark'
                    ? 'border-indigo-500 bg-indigo-950/40 text-indigo-300'
                    : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700'
                }`}
              >
                <Moon className="w-4 h-4" />
                <span className="font-medium">Dark Mode</span>
              </button>

              <button
                onClick={() => setTheme('light')}
                className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition ${
                  theme === 'light'
                    ? 'border-indigo-500 bg-indigo-950/40 text-indigo-300'
                    : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700'
                }`}
              >
                <Sun className="w-4 h-4" />
                <span className="font-medium">Light Mode</span>
              </button>

              <button
                onClick={() => setTheme('system')}
                className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition ${
                  theme === 'system'
                    ? 'border-indigo-500 bg-indigo-950/40 text-indigo-300'
                    : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700'
                }`}
              >
                <Monitor className="w-4 h-4" />
                <span className="font-medium">System Auto</span>
              </button>
            </div>
          </div>

          {/* Default Model Selection */}
          <div>
            <label className="block text-slate-300 font-semibold mb-2">Default Preferred AI Model</label>
            <select
              value={userSettings.defaultModelId}
              onChange={(e) => updateSettings({ defaultModelId: e.target.value })}
              className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-200 focus:outline-none focus:border-indigo-500"
            >
              {AI_MODELS.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.name} — {model.provider} ({model.badge})
                </option>
              ))}
            </select>
          </div>

          {/* Split Mode Toggle */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
            <div>
              <span className="font-semibold text-slate-200 block">Dual-Model Split Comparison</span>
              <span className="text-[11px] text-slate-400">Always generate side-by-side responses from 2 models</span>
            </div>
            <button
              onClick={() => setIsSplitMode(!isSplitMode)}
              className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
                isSplitMode ? 'bg-indigo-600' : 'bg-slate-800'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  isSplitMode ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Temperature Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-slate-300 font-semibold">Model Creativity (Temperature)</label>
              <span className="font-mono text-indigo-400 font-bold">{userSettings.temperature}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={userSettings.temperature}
              onChange={(e) => updateSettings({ temperature: parseFloat(e.target.value) })}
              className="w-full accent-indigo-500 bg-slate-800 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>Precise & Analytical (0.0)</span>
              <span>Balanced (0.7)</span>
              <span>Creative & Wild (1.0)</span>
            </div>
          </div>

          {/* Custom System Instruction */}
          <div>
            <label className="block text-slate-300 font-semibold mb-2">Global System Persona</label>
            <textarea
              rows={3}
              value={userSettings.customSystemPrompt}
              onChange={(e) => updateSettings({ customSystemPrompt: e.target.value })}
              className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              placeholder="E.g., You are a senior frontend developer who answers concisely..."
            />
          </div>

          {/* Chrome Extension Shortcut */}
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Key className="w-4 h-4 text-cyan-400" />
              <div>
                <span className="font-semibold text-slate-200 block">Chrome Extension Hotkey</span>
                <span className="text-[10px] text-slate-400">Trigger sidepanel from any webpage</span>
              </div>
            </div>
            <span className="px-2.5 py-1 bg-slate-800 rounded-lg border border-slate-700 font-mono text-cyan-300">
              {userSettings.extensionShortcut}
            </span>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={() => setSettingsModalOpen(false)}
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl text-xs flex items-center gap-1.5 transition"
          >
            <Check className="w-4 h-4" />
            Save Preferences
          </button>
        </div>

      </div>
    </div>
  );
};
