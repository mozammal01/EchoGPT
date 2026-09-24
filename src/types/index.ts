export type ThemeMode = 'dark' | 'light' | 'system';

export type AppView = 'landing' | 'workspace' | 'extension';

export interface AIModel {
  id: string;
  name: string;
  provider: 'OpenAI' | 'Anthropic' | 'Google' | 'Meta' | 'DeepSeek' | 'Mistral' | 'Perplexity';
  version: string;
  badge: string;
  description: string;
  color: string; // TailWind color or hex
  accentBg: string;
  iconName: string;
  maxTokens: string;
  latencyMs: number;
  capabilities: {
    coding: number;
    reasoning: number;
    vision: boolean;
    webSearch: boolean;
    contextWindow: string;
  };
  isPro?: boolean;
}

export interface PromptTemplate {
  id: string;
  title: string;
  category: 'Coding' | 'Writing' | 'Productivity' | 'Research' | 'Design';
  description: string;
  promptText: string;
  suggestedModelId: string;
  icon: string;
  tags: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  modelId?: string;
  modelName?: string;
  text: string;
  timestamp: string;
  codeBlocks?: {
    language: string;
    code: string;
  }[];
  tokensUsed?: number;
  responseTimeSec?: number;
  isSplitComparison?: boolean;
  secondaryModelResponse?: {
    modelId: string;
    modelName: string;
    text: string;
    responseTimeSec: number;
  };
}

export interface Conversation {
  id: string;
  title: string;
  lastUpdated: string;
  category: 'Today' | 'Yesterday' | 'Previous 7 Days' | 'Older';
  pinned?: boolean;
  primaryModelId: string;
  secondaryModelId?: string; // For split mode
  isSplitMode?: boolean;
  messages: ChatMessage[];
  systemInstruction?: string;
}

export interface UserSettings {
  theme: ThemeMode;
  defaultModelId: string;
  splitViewByDefault: boolean;
  webSearchEnabled: boolean;
  temperature: number;
  customSystemPrompt: string;
  extensionShortcut: string;
}
