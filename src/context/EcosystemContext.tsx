'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { AppView, ThemeMode, Conversation, ChatMessage, UserSettings, AIModel } from '../types';
import { AI_MODELS, getModelById } from '../data/models';
import { MOCK_CONVERSATIONS } from '../data/mockConversations';

interface EcosystemContextType {
  activeTab: AppView;
  setActiveTab: (tab: AppView) => void;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  conversations: Conversation[];
  activeConversationId: string;
  setActiveConversationId: (id: string) => void;
  activeConversation: Conversation;
  primaryModel: AIModel;
  secondaryModel: AIModel;
  isSplitMode: boolean;
  setIsSplitMode: (val: boolean) => void;
  setPrimaryModelId: (id: string) => void;
  setSecondaryModelId: (id: string) => void;
  sendMessage: (prompt: string, attachmentName?: string) => void;
  createNewChat: (modelId?: string) => void;
  togglePinConversation: (id: string) => void;
  deleteConversation: (id: string) => void;
  userSettings: UserSettings;
  updateSettings: (newSettings: Partial<UserSettings>) => void;
  evaluationModalOpen: boolean;
  setEvaluationModalOpen: (open: boolean) => void;
  promptLibraryModalOpen: boolean;
  setPromptLibraryModalOpen: (open: boolean) => void;
  settingsModalOpen: boolean;
  setSettingsModalOpen: (open: boolean) => void;
  extensionViewMode: 'popup' | 'sidepanel' | 'overlay';
  setExtensionViewMode: (mode: 'popup' | 'sidepanel' | 'overlay') => void;
}

const defaultSettings: UserSettings = {
  theme: 'dark',
  defaultModelId: 'gpt-4o',
  splitViewByDefault: false,
  webSearchEnabled: true,
  temperature: 0.7,
  customSystemPrompt: 'You are an intelligent multi-AI assistant in EchoGPT.',
  extensionShortcut: 'Alt + E',
};

const EcosystemContext = createContext<EcosystemContextType | undefined>(undefined);

export const EcosystemProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<AppView>('landing');
  const [theme, setThemeState] = useState<ThemeMode>('dark');
  const [conversations, setConversations] = useState<Conversation[]>(MOCK_CONVERSATIONS);
  const [activeConversationId, setActiveConversationId] = useState<string>('conv-split-demo');
  const [primaryModelId, setPrimaryModelIdState] = useState<string>('gpt-4o');
  const [secondaryModelId, setSecondaryModelIdState] = useState<string>('claude-3-5-sonnet');
  const [isSplitMode, setIsSplitMode] = useState<boolean>(true);
  const [userSettings, setUserSettings] = useState<UserSettings>(defaultSettings);
  const [evaluationModalOpen, setEvaluationModalOpen] = useState<boolean>(false);
  const [promptLibraryModalOpen, setPromptLibraryModalOpen] = useState<boolean>(false);
  const [settingsModalOpen, setSettingsModalOpen] = useState<boolean>(false);
  const [extensionViewMode, setExtensionViewMode] = useState<'popup' | 'sidepanel' | 'overlay'>('popup');

  // Handle HTML document root theme class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
  };

  const activeConversation =
    conversations.find((c) => c.id === activeConversationId) || conversations[0];

  const primaryModel = getModelById(primaryModelId);
  const secondaryModel = getModelById(secondaryModelId);

  const setPrimaryModelId = (id: string) => {
    setPrimaryModelIdState(id);
    setConversations((prev) =>
      prev.map((conv) => (conv.id === activeConversationId ? { ...conv, primaryModelId: id } : conv))
    );
  };

  const setSecondaryModelId = (id: string) => {
    setSecondaryModelIdState(id);
    setConversations((prev) =>
      prev.map((conv) => (conv.id === activeConversationId ? { ...conv, secondaryModelId: id } : conv))
    );
  };

  const sendMessage = (prompt: string, attachmentName?: string) => {
    if (!prompt.trim()) return;

    const userMessage: ChatMessage = {
      id: `msg-usr-${Date.now()}`,
      sender: 'user',
      text: prompt + (attachmentName ? `\n\n*[Attached File: ${attachmentName}]*` : ''),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const primaryAiResponse: ChatMessage = {
      id: `msg-ai-1-${Date.now()}`,
      sender: 'assistant',
      modelId: primaryModel.id,
      modelName: primaryModel.name,
      text: generateMockResponse(prompt, primaryModel.name),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      responseTimeSec: parseFloat((Math.random() * 0.8 + 0.6).toFixed(1)),
      tokensUsed: Math.floor(Math.random() * 300 + 200),
      isSplitComparison: isSplitMode,
      secondaryModelResponse: isSplitMode
        ? {
            modelId: secondaryModel.id,
            modelName: secondaryModel.name,
            text: generateMockResponse(prompt, secondaryModel.name),
            responseTimeSec: parseFloat((Math.random() * 0.9 + 0.7).toFixed(1)),
          }
        : undefined,
    };

    setConversations((prev) =>
      prev.map((conv) => {
        if (conv.id === activeConversationId) {
          const updatedMessages = [...conv.messages, userMessage, primaryAiResponse];
          return {
            ...conv,
            messages: updatedMessages,
            lastUpdated: 'Just now',
          };
        }
        return conv;
      })
    );
  };

  const createNewChat = (modelId?: string) => {
    const selectedModel = modelId || primaryModelId;
    const newConv: Conversation = {
      id: `conv-${Date.now()}`,
      title: 'New Conversation',
      lastUpdated: 'Just now',
      category: 'Today',
      pinned: false,
      primaryModelId: selectedModel,
      secondaryModelId: secondaryModelId,
      isSplitMode: isSplitMode,
      messages: [
        {
          id: `msg-welcome-${Date.now()}`,
          sender: 'assistant',
          modelId: selectedModel,
          modelName: getModelById(selectedModel).name,
          text: `Hello! I am **${getModelById(selectedModel).name}** via EchoGPT. How can I assist you today? You can switch models or enable Split View mode anytime in the header.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ],
    };

    setConversations((prev) => [newConv, ...prev]);
    setActiveConversationId(newConv.id);
  };

  const togglePinConversation = (id: string) => {
    setConversations((prev) =>
      prev.map((conv) => (conv.id === id ? { ...conv, pinned: !conv.pinned } : conv))
    );
  };

  const deleteConversation = (id: string) => {
    setConversations((prev) => {
      const filtered = prev.filter((conv) => conv.id !== id);
      if (activeConversationId === id && filtered.length > 0) {
        setActiveConversationId(filtered[0].id);
      }
      return filtered;
    });
  };

  const updateSettings = (newSettings: Partial<UserSettings>) => {
    setUserSettings((prev) => ({ ...prev, ...newSettings }));
  };

  return (
    <EcosystemContext.Provider
      value={{
        activeTab,
        setActiveTab,
        theme,
        setTheme,
        toggleTheme,
        conversations,
        activeConversationId,
        setActiveConversationId,
        activeConversation,
        primaryModel,
        secondaryModel,
        isSplitMode,
        setIsSplitMode,
        setPrimaryModelId,
        setSecondaryModelId,
        sendMessage,
        createNewChat,
        togglePinConversation,
        deleteConversation,
        userSettings,
        updateSettings,
        evaluationModalOpen,
        setEvaluationModalOpen,
        promptLibraryModalOpen,
        setPromptLibraryModalOpen,
        settingsModalOpen,
        setSettingsModalOpen,
        extensionViewMode,
        setExtensionViewMode,
      }}
    >
      {children}
    </EcosystemContext.Provider>
  );
};

export const useEcosystem = () => {
  const context = useContext(EcosystemContext);
  if (!context) {
    throw new Error('useEcosystem must be used within an EcosystemProvider');
  }
  return context;
};

// Helper mock generator for dynamic responses
function generateMockResponse(prompt: string, modelName: string): string {
  const cleanPrompt = prompt.toLowerCase();

  if (cleanPrompt.includes('code') || cleanPrompt.includes('react') || cleanPrompt.includes('typescript')) {
    return `### Response from ${modelName}\n\nHere is an optimized implementation tailored for your scenario:\n\n\`\`\`typescript\n// ${modelName} auto-generated module\nexport interface ConfigOptions {\n  endpoint: string;\n  retryCount: number;\n  timeoutMs: number;\n}\n\nexport async function executeEchoQuery(query: string, options: ConfigOptions) {\n  console.log(\`[\${modelName}] Dispatching query:\`, query);\n  // Simulated low-latency multi-agent API route call\n  return { success: true, timestamp: Date.now(), data: "Sample response" };\n}\n\`\`\`\n\nKey advantages of this approach:\n1. Strict TypeScript interfaces eliminate runtime typing issues.\n2. Modular structure enables easy testing with standard test runners.`;
  }

  if (cleanPrompt.includes('summarize') || cleanPrompt.includes('summary') || cleanPrompt.includes('page')) {
    return `### Executive Summary (${modelName})\n\n- **Core Message**: Streamlining multi-AI model selection into a unified context-aware interface.\n- **Primary Finding**: EchoGPT users report up to **3.4x faster resolution times** when comparing responses across top models in real-time.\n- **Action Item**: Install the EchoGPT Chrome Extension to enable page-context AI tools on any web page.`;
  }

  return `### ${modelName} Analysis\n\nI have evaluated your prompt regarding: **"${prompt.slice(0, 50)}${prompt.length > 50 ? '...' : ''}"**\n\n1. **Context Synthesis**: EchoGPTroutes your request directly to the model's highest-tier inference context.\n2. **Reasoning Steps**: Analyzed constraints, evaluated edge cases, and generated high-accuracy output.\n3. **Recommended Next Step**: Try turning on **Split Comparison Mode** to see how alternative models format this response!`;
}
