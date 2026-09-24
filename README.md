# EchoGPT Ecosystem Redesign — AppifyDevs Practical Assignment

[![Next.js 14](https://img.shields.io/badge/Framework-Next.js%2014-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Animations-Framer%20Motion-purple?style=for-the-badge)](https://www.framer.com/motion/)

> **Submission for Software Engineering Internship (Frontend) — Onsite Position at AppifyDevs**

---

## 📌 Project Overview
This repository contains the complete redesign and production-ready frontend implementation of the **EchoGPT Ecosystem**, created for the AppifyDevs practical assignment. 

The application integrates three distinct product layers into a single, cohesive Next.js experience:
1. **Single-Page Marketing Landing Website (`/` - Landing Tab)**: A landing page communicating EchoGPT's multi-AI value proposition, interactive model playground, features grid, pricing tier cards, FAQ accordion, and Chrome extension CTA.
2. **Redesigned Web Application Workspace (`/app` - Web App Tab)**: A power-user workspace featuring side-by-side **Dual-AI Model Split View** (comparing GPT-4o, Claude 3.5 Sonnet, DeepSeek R1 in real-time), syntax-highlighted code rendering, prompt vault, and custom system personas.
3. **Chrome Extension & Sidepanel Simulator (`/extension` - Extension Tab)**: An interactive browser simulator demonstrating EchoGPT's 380px compact Popup UI, persistent Chrome Sidepanel mode, and web page floating text overlay actions.

---

## 🚀 Setup & Execution Instructions

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/your-username/echogpt-client.git
cd echogpt-client
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Lint Verification
```bash
npm run build
```

---

## 🛠️ Technology Stack & Libraries

| Category | Technology / Library | Rationale |
| :--- | :--- | :--- |
| **Framework** | **Next.js 14 (App Router)** | Server & Client components, fast routing, optimal SEO for landing page. |
| **Language** | **TypeScript (Strict)** | End-to-end type safety across chat messages, AI models, and user settings. |
| **Styling** | **Tailwind CSS + Custom CSS Tokens** | Dark glassmorphism, accent glow gradients, and responsive layouts. |
| **Icons & UI** | **Lucide React** | High-density SVG icons for AI models, actions, and browser toolbar controls. |
| **Animations** | **Framer Motion + Canvas Confetti** | Smooth tab transitions, micro-interactions, and celebratory plan upgrade effects. |
| **Markdown** | **React Markdown + Remark GFM** | Code block highlighting with line numbers, copy actions, and formatted text. |

---

## 🌟 Key Features Implemented

### Task 1: Redesigned EchoGPT Web App
- ⚡ **Dual-AI Model Split Comparison**: Compare responses from two different frontier models (e.g. GPT-4o vs. Claude 3.5 Sonnet) side-by-side on the exact same user prompt.
- 🎨 **Rich Code & Formatting**: Syntax-highlighted code output with one-click copy buttons, token counters, and execution latency metrics.
- 📚 **Prompt Vault Library**: Curated pre-engineered prompt templates for coding, writing, research, and data analysis.
- ⚙️ **Custom System Personas**: Temperature slider, global system instructions, and theme switcher (Dark / Light mode).

### Task 2: Single-Page Marketing Landing Website
- 🚀 **Interactive Hero & Playground**: Dynamic typing headline and live model selector playground.
- 🤖 **Integrated AI Models Catalog**: Filterable grid displaying 7 top models (GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, DeepSeek R1, Llama 3.3, Mistral, Perplexity).
- 📊 **Value Comparison Matrix**: Direct feature & pricing comparison between EchoGPT ($12/mo) vs. separate subscriptions ($60/mo).
- 💳 **Pricing & FAQ**: Monthly/Annual billing toggle, tier cards with confetti launcher, and collapsible FAQ.

### Task 3: Chrome Extension Simulator
- 🌐 **Realistic Chrome Browser Frame**: In-browser simulation container with address bar and extension toolbar icon.
- 📱 **Popup Mode**: 380px compact popover for quick prompts and single-click page summarization.
- 📑 **Sidepanel Mode**: Persistent right sidebar reading active webpage context.
- 💬 **Floating Text Overlay**: Interactive action bubble triggering AI explanation, translation, or code generation on highlighted text.

---

## 🎯 Candidate Evaluation Notes
Click the **"Candidate Review"** button in the top navigation bar during live demo testing to open an interactive modal summarizing task deliverables, architecture decisions, and WCAG accessibility standards.

---

## 📄 License
Created for AppifyDevs Software Engineering Internship Assessment.
