'use client';

import React from 'react';
import { Sidebar } from './Sidebar';
import { ChatArea } from './ChatArea';

export const WorkspaceView: React.FC = () => {
  return (
    <div className="w-full flex-1 flex flex-col md:flex-row h-[calc(100vh-64px)] overflow-hidden">
      <Sidebar />
      <ChatArea />
    </div>
  );
};
