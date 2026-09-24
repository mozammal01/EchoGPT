import type { Metadata } from 'next';
import './globals.css';
import { EcosystemProvider } from '../context/EcosystemContext';

export const metadata: Metadata = {
  title: 'EchoGPT Ecosystem — Multi-AI Platform & Chrome Extension',
  description:
    'Unified workspace and Chrome extension for GPT-4o, Claude 3.5 Sonnet, DeepSeek R1, and Gemini 1.5 Pro. Dual-model side-by-side benchmarking and prompt engineering suite.',
  keywords: ['EchoGPT', 'Multi-AI', 'GPT-4o', 'Claude 3.5 Sonnet', 'DeepSeek R1', 'Chrome Extension', 'AI Chat'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen bg-[#090d16] text-[#f3f4f6]">
        <EcosystemProvider>
          {children}
        </EcosystemProvider>
      </body>
    </html>
  );
}
