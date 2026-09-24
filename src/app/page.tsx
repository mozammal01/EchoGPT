'use client';

import React from 'react';
import { useEcosystem } from '../context/EcosystemContext';
import { Navbar } from '../components/common/Navbar';
import { EvaluationModal } from '../components/common/EvaluationModal';
import { PromptLibraryModal } from '../components/common/PromptLibraryModal';
import { SettingsModal } from '../components/common/SettingsModal';
import { LandingView } from '../components/landing/LandingView';
import { WorkspaceView } from '../components/workspace/WorkspaceView';
import { ExtensionContainer } from '../components/extension/ExtensionContainer';

export default function Home() {
  const { activeTab } = useEcosystem();

  return (
    <main className="min-h-screen flex flex-col bg-[#090d16] text-[#f3f4f6]">
      {/* Navigation Header */}
      <Navbar />

      {/* Dynamic Tab View Rendering */}
      <div className="flex-1 flex flex-col">
        {activeTab === 'landing' && <LandingView />}
        {activeTab === 'workspace' && <WorkspaceView />}
        {activeTab === 'extension' && <ExtensionContainer />}
      </div>

      {/* Global Modals */}
      <EvaluationModal />
      <PromptLibraryModal />
      <SettingsModal />
    </main>
  );
}
