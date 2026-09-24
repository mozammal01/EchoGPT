'use client';

import React, { useState } from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { AI_MODELS } from '../../data/models';
import {
  Plus,
  Search,
  Pin,
  Trash2,
  BookOpen,
  Settings,
  Sparkles,
  MessageSquare,
  ChevronRight,
  Filter,
  Columns,
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const {
    conversations,
    activeConversationId,
    setActiveConversationId,
    createNewChat,
    togglePinConversation,
    deleteConversation,
    setPromptLibraryModalOpen,
    setSettingsModalOpen,
    isSplitMode,
    setIsSplitMode,
  } = useEcosystem();

  const [searchQuery, setSearchQuery] = useState('');

  const filteredConversations = conversations.filter((conv) =>
    conv.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const pinnedConversations = filteredConversations.filter((c) => c.pinned);
  const unpinnedConversations = filteredConversations.filter((c) => !c.pinned);

  return (
    <aside className="w-full md:w-80 border-r border-slate-800/80 bg-slate-950 flex flex-col h-full overflow-hidden text-slate-200">
      
      {/* Top Header & New Chat button */}
      <div className="p-4 border-b border-slate-800/80 space-y-3 bg-slate-900/40">
        <button
          onClick={() => createNewChat()}
          className="w-full py-2.5 px-4 bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 transition"
        >
          <Plus className="w-4 h-4" />
          <span>New Multi-AI Conversation</span>
        </button>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
          />
        </div>
      </div>

      {/* Mode Quick Toggle Pill */}
      <div className="px-4 py-2 bg-slate-900/60 border-b border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-300">
          <Columns className="w-3.5 h-3.5 text-cyan-400" />
          Dual Model Split Mode
        </span>
        <button
          onClick={() => setIsSplitMode(!isSplitMode)}
          className={`w-9 h-5 rounded-full transition-colors relative p-0.5 ${
            isSplitMode ? 'bg-indigo-600' : 'bg-slate-800'
          }`}
        >
          <div
            className={`w-4 h-4 rounded-full bg-white transition-transform ${
              isSplitMode ? 'translate-x-4' : 'translate-x-0'
            }`}
          />
        </button>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-4">
        
        {/* Pinned Section */}
        {pinnedConversations.length > 0 && (
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 px-2 block mb-1">
              PINNED CHATS
            </span>
            <div className="space-y-1">
              {pinnedConversations.map((conv) => (
                <ConversationItem
                  key={conv.id}
                  conversation={conv}
                  isActive={conv.id === activeConversationId}
                  onSelect={() => setActiveConversationId(conv.id)}
                  onTogglePin={() => togglePinConversation(conv.id)}
                  onDelete={() => deleteConversation(conv.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Regular Conversations */}
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-2 block mb-1">
            RECENT CONVERSATIONS
          </span>
          <div className="space-y-1">
            {unpinnedConversations.map((conv) => (
              <ConversationItem
                key={conv.id}
                conversation={conv}
                isActive={conv.id === activeConversationId}
                onSelect={() => setActiveConversationId(conv.id)}
                onTogglePin={() => togglePinConversation(conv.id)}
                onDelete={() => deleteConversation(conv.id)}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Footer Actions */}
      <div className="p-3 border-t border-slate-800/80 bg-slate-900/40 flex items-center justify-between gap-2">
        <button
          onClick={() => setPromptLibraryModalOpen(true)}
          className="flex-1 py-2 px-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-xs font-medium text-slate-300 flex items-center justify-center gap-1.5 transition"
        >
          <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
          <span>Prompt Vault</span>
        </button>

        <button
          onClick={() => setSettingsModalOpen(true)}
          className="py-2 px-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-xs font-medium text-slate-300 flex items-center justify-center gap-1.5 transition"
          title="Settings"
        >
          <Settings className="w-3.5 h-3.5" />
        </button>
      </div>

    </aside>
  );
};

interface ConversationItemProps {
  conversation: any;
  isActive: boolean;
  onSelect: () => void;
  onTogglePin: () => void;
  onDelete: () => void;
}

const ConversationItem: React.FC<ConversationItemProps> = ({
  conversation,
  isActive,
  onSelect,
  onTogglePin,
  onDelete,
}) => {
  return (
    <div
      onClick={onSelect}
      className={`group relative p-2.5 rounded-xl cursor-pointer transition flex items-center justify-between text-xs ${
        isActive
          ? 'bg-indigo-950/70 border border-indigo-500/40 text-white font-semibold'
          : 'hover:bg-slate-900/80 text-slate-300 hover:text-white border border-transparent'
      }`}
    >
      <div className="flex items-center gap-2 overflow-hidden pr-2">
        <MessageSquare className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
        <span className="truncate">{conversation.title}</span>
      </div>

      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition shrink-0">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onTogglePin();
          }}
          className={`p-1 hover:text-amber-400 transition ${conversation.pinned ? 'text-amber-400 opacity-100' : 'text-slate-500'}`}
          title="Pin conversation"
        >
          <Pin className="w-3 h-3" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="p-1 text-slate-500 hover:text-rose-400 transition"
          title="Delete conversation"
        >
          <Trash2 className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
