import { Conversation } from '../types';

export const MOCK_CONVERSATIONS: Conversation[] = [
  {
    id: 'conv-split-demo',
    title: 'Model Benchmark: Next.js Server Components',
    lastUpdated: '10 mins ago',
    category: 'Today',
    pinned: true,
    primaryModelId: 'gpt-4o',
    secondaryModelId: 'claude-3-5-sonnet',
    isSplitMode: true,
    systemInstruction: 'You are an elite frontend architect advising on Next.js 14+ best practices.',
    messages: [
      {
        id: 'msg-1',
        sender: 'user',
        text: 'Compare how Next.js 14 App Router handles server-side data fetching with React Server Components versus traditional client-side fetching with SWR/React Query. Provide code examples.',
        timestamp: '10:42 AM',
      },
      {
        id: 'msg-2',
        sender: 'assistant',
        modelId: 'gpt-4o',
        modelName: 'GPT-4o',
        text: '### Next.js 14 Data Fetching Paradigm\n\nIn Next.js 14 App Router, **React Server Components (RSC)** run exclusively on the server. This shifts data fetching logic away from client bundles, reducing hydration overhead and improving First Contentful Paint (FCP).\n\n#### 1. Server Component Approach (RSC)\nServer components can be async directly, fetching data without useState/useEffect hooks.',
        timestamp: '10:43 AM',
        responseTimeSec: 1.2,
        tokensUsed: 420,
        codeBlocks: [
          {
            language: 'tsx',
            code: `// app/dashboard/page.tsx (Server Component)
import { UserProfile } from '@/components/UserProfile';

async function fetchUserData(userId: string) {
  const res = await fetch(\`https://api.echogpt.live/users/\${userId}\`, {
    next: { revalidate: 60 } // Incremental Static Regeneration
  });
  if (!res.ok) throw new Error('Failed to load user data');
  return res.json();
}

export default async function DashboardPage() {
  const user = await fetchUserData('usr_1024');
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Welcome back, {user.name}</h1>
      <UserProfile data={user} />
    </main>
  );
}`,
          },
        ],
        isSplitComparison: true,
        secondaryModelResponse: {
          modelId: 'claude-3-5-sonnet',
          modelName: 'Claude 3.5 Sonnet',
          text: '### Architectural Deep-Dive: RSC vs. SWR/TanStack Query\n\n#### Direct Comparison Matrix\n- **Zero Bundle Impact**: RSC fetch logic stays on the server; zero KB client JS.\n- **Direct Database Access**: Query Postgres/Prisma directly without exposing internal API routes.\n- **Streaming & Suspense**: Out-of-order HTML streaming using `<Suspense>` boundaries.\n\n#### 2. Client-Side SWR Fallback (For Interactive Live Updates)',
          responseTimeSec: 1.4,
        },
      },
    ],
  },
  {
    id: 'conv-2',
    title: 'EchoGPT Extension Architecture',
    lastUpdated: '2 hours ago',
    category: 'Today',
    pinned: true,
    primaryModelId: 'claude-3-5-sonnet',
    isSplitMode: false,
    messages: [
      {
        id: 'msg-2-1',
        sender: 'user',
        text: 'How does the EchoGPT Chrome Extension safely inject floating AI action overlays on third-party websites without breaking host page CSS isolated scopes?',
        timestamp: '08:15 AM',
      },
      {
        id: 'msg-2-2',
        sender: 'assistant',
        modelId: 'claude-3-5-sonnet',
        modelName: 'Claude 3.5 Sonnet',
        text: 'EchoGPT leverages **Web Components and Shadow DOM (Closed/Open Mode)** combined with Chrome Extension Content Scripts.\n\nBy attaching the extension UI inside a `ShadowRoot`, styles from the host web page (e.g. Tailwind reset rules, global body styles) cannot leak into the EchoGPT floating bubble, and vice-versa.',
        timestamp: '08:16 AM',
        responseTimeSec: 0.9,
        tokensUsed: 310,
        codeBlocks: [
          {
            language: 'typescript',
            code: `// contentScript.ts - EchoGPT Shadow DOM Injection
const hostElement = document.createElement('echogpt-overlay-root');
document.body.appendChild(hostElement);

const shadowRoot = hostElement.attachShadow({ mode: 'closed' });

// Inject Tailwind / Shadow CSS styles directly inside shadow root
const styleSheet = document.createElement('style');
styleSheet.textContent = \`
  :host { position: fixed; bottom: 24px; right: 24px; z-index: 999999; }
  .echogpt-bubble { background: #0f172a; border: 1px solid rgba(255,255,255,0.1); }
\`;
shadowRoot.appendChild(styleSheet);`,
          },
        ],
      },
    ],
  },
  {
    id: 'conv-3',
    title: 'DeepSeek R1 Math Proof Strategy',
    lastUpdated: 'Yesterday',
    category: 'Yesterday',
    pinned: false,
    primaryModelId: 'deepseek-r1',
    isSplitMode: false,
    messages: [
      {
        id: 'msg-3-1',
        sender: 'user',
        text: 'Explain how DeepSeek R1 uses pure reinforcement learning (RL) without supervised fine-tuning (SFT) to emerge self-correction reasoning behaviors.',
        timestamp: 'Yesterday 4:30 PM',
      },
      {
        id: 'msg-3-2',
        sender: 'assistant',
        modelId: 'deepseek-r1',
        modelName: 'DeepSeek R1',
        text: '### DeepSeek-R1-Zero: Emergence of Self-Correction via RL\n\nDeepSeek-R1-Zero applies **Group Relative Policy Optimization (GRPO)** directly on the base model without initial human SFT data.\n\n1. **Reward Signal**: Rule-based accuracy rewards (e.g., automated test execution pass/fail) and format rewards (`<think>` tags enclosing reasoning steps).\n2. **Emergent Behavior**: As RL training scales, the model naturally allocates more token budget to internal verification, re-checking mathematical derivations before outputting final answers.',
        timestamp: 'Yesterday 4:31 PM',
        responseTimeSec: 2.1,
        tokensUsed: 680,
      },
    ],
  },
];
