export const profileData = {
  name: 'Muhammad Yosa Alfiqie',
  role: 'Full Stack Developer',
  // Replace with '/avatar.jpg' after placing your photo inside the public/ folder
  avatarUrl: 'https://placehold.co/300x300/0f172a/38bdf8?text=MYA',
  bio: 'Product-minded engineer with 6+ years of experience building data-intensive platforms, resilient backend services, and 60 FPS user interfaces. Combining deep systems expertise with high-velocity AI workflows to ship sub-100ms APIs and reliable end-to-end features.',
  email: 'yosa.alfq4@gmail.com',
  phone: '+81 70-8546-2083',
  linkedin: 'https://linkedin.com/in/yosa-alfiqie-506a88189',
  location: 'Tokyo, Japan • UTC+9'
}

export const projectsData = [
  {
    id: 'crystalsea',
    category: 'E-Commerce',
    title: 'Crystal of the Sea (crystalsea.id)',
    company: 'Bonbon Technology',
    role: 'Lead Full Stack Engineer (0 to 1)',
    period: '06/2020 – 02/2022',
    liveUrl: 'https://crystalsea.id',
    liveLabel: 'crystalsea.id',
    browserUrl: 'https://crystalsea.id',
    screenshotUrl:
      'https://s0.wp.com/mshots/v1/https%3A%2F%2Fcrystalsea.id?w=1280&h=800',
    mockupHeader: 'CRYSTAL OF THE SEA — DTC STOREFRONT',
    shortDescription:
      'Full-stack DTC e-commerce platform and custom admin CMS built from scratch, scaling digital revenue by 40% in 90 days.',
    fullDescription:
      'Architected and launched the end-to-end direct-to-consumer storefront and internal operations CMS for Crystal of the Sea. Engineered for rapid product browsing, automated payment verification, and high conversion across mobile and desktop.',
    keyMetric: '+40% Revenue / 90d',
    metrics: [
      { value: '+40%', label: 'DTC Revenue Growth' },
      { value: '99.9%', label: 'Webhook Reconciliation' },
      { value: '<80ms', label: 'Search Query Latency' }
    ],
    highlights: [
      'Scaled direct-to-consumer digital revenue by 40% within 90 days of production launch.',
      'Designed normalized PostgreSQL transactional schemas with B-tree composite indexes and cursor-based pagination.',
      'Delivered 99.9% automated transaction reconciliation integrating Xendit payment webhooks with idempotent state validation.'
    ],
    stack: ['Node.js', 'Express', 'PostgreSQL', 'React', 'Xendit Webhooks', 'Redis']
  },
  {
    id: 'yttlinks-pos',
    category: 'Enterprise Retail',
    title: 'Nationwide Retail Workflow & Terminal Sync',
    company: 'YTTLINKS Inc.',
    role: 'Fullstack Software Engineer',
    period: '03/2024 – Present',
    liveUrl: null,
    browserUrl: 'https://internal.yttlinks.jp/terminal-sync',
    screenshotUrl: null,
    mockupHeader: 'YTTLINKS RETAIL WORKFLOW ENGINE',
    shortDescription:
      'State-machine-driven retail workflow app and offline-resilient terminal sync layer across nationwide Japanese branches.',
    fullDescription:
      'Re-architected in-store transaction processing across nationwide retail branches in Japan, combining deterministic state-machine forms with optimistic client updates and exponential backoff retry queues.',
    keyMetric: '-45% Latency',
    metrics: [
      { value: '-45%', label: 'Transaction Latency' },
      { value: '<200ms', label: 'API Response Time' },
      { value: '0%', label: 'Manual Entry Errors' }
    ],
    highlights: [
      'Reduced in-store transaction processing latency by 45% across nationwide retail branches.',
      'Engineered sub-200ms API responses and zero packet loss across terminal hardware using local caching and retry queues.',
      'Eliminated 100% of manual data entry errors via schema-validated REST synchronization with bidirectional conflict resolution.'
    ],
    stack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'State Machines', 'Retry Queues']
  },
  {
    id: 'smartfren-sris',
    category: 'Fintech & Telecom',
    title: 'Sales Retail Information System (SRIS)',
    company: 'Smartfren Telecom',
    role: 'Senior System Developer',
    period: '05/2022 – 02/2024',
    liveUrl: null,
    browserUrl: 'https://sris.smartfren.com/catalog',
    screenshotUrl: null,
    mockupHeader: 'SMARTFREN SRIS & ORDER FULFILLMENT',
    shortDescription:
      'High-throughput retail distribution platform and centralized Order Fulfillment CMS powered by Golang microservices.',
    fullDescription:
      'Designed and delivered the Sales Retail Information System (SRIS) and Order Fulfillment CMS handling high-concurrency catalog browsing, multi-attribute filtering, and real-time inventory aggregation.',
    keyMetric: '+30% Retail Sales',
    metrics: [
      { value: '+30%', label: 'Retail Distribution Sales' },
      { value: '-35%', label: 'Order Cycle Time' },
      { value: '3x', label: 'Release Cadence' }
    ],
    highlights: [
      'Drove a 30% increase in retail distribution sales using Golang microservices and React Native.',
      'Cut internal order cycle time by 35% with compound-indexed PostgreSQL queries and cursor pagination.',
      'Accelerated release cadence 3x by standardizing data contracts, automated tests, and mentoring 4 engineers.'
    ],
    stack: ['Golang', 'Node.js', 'PostgreSQL', 'React Native', 'Microservices', 'Docker']
  },
  {
    id: 'facebook-flex-pay',
    category: 'Fintech & Telecom',
    title: 'Idempotent Payment Orchestration Service',
    company: 'Smartfren Telecom',
    role: 'Senior Backend Engineer',
    period: '05/2022 – 02/2024',
    liveUrl: null,
    browserUrl: 'https://payments.smartfren.internal/webhooks',
    screenshotUrl: null,
    mockupHeader: 'IDEMPOTENT PAYMENT ORCHESTRATOR',
    shortDescription:
      'Zero-duplicate payment pipeline processing millions of checkout calls with tokenized verification and async queues.',
    fullDescription:
      'Built a fault-tolerant payment orchestration service on Facebook Flex capable of absorbing traffic spikes and network retries without ever double-charging end users.',
    keyMetric: '0 Duplicate Txns',
    metrics: [
      { value: '0', label: 'Duplicate Transactions' },
      { value: 'Millions', label: 'Checkout Calls Handled' },
      { value: '100%', label: 'Idempotent Safety' }
    ],
    highlights: [
      'Maintained zero duplicate transactions across millions of production checkout calls.',
      'Integrated asynchronous webhooks, tokenized verification, and dead-letter retry queues.',
      'Guaranteed strict transactional consistency under high concurrency.'
    ],
    stack: ['Golang', 'PostgreSQL', 'Redis', 'Async Webhooks', 'Idempotency Keys']
  }
]

export const skillGroupsData = [
  {
    title: 'Backend & Data Depth',
    icon: 'database',
    iconBg: 'bg-brand-500/10 text-brand-600 dark:text-brand-400',
    skills: [
      'Node.js',
      'NestJS',
      'Express.js',
      'Golang',
      'PostgreSQL',
      'MySQL',
      'Redis Caching',
      'Query Optimization & Indexing',
      'Cursor Pagination',
      'REST & WebSockets'
    ]
  },
  {
    title: 'Frontend & Performance',
    icon: 'layout',
    iconBg: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
    skills: [
      'React.js',
      'Vue.js',
      'TypeScript',
      'Next.js',
      'React Native',
      'Optimistic UI Updates',
      'Virtualized Scrolling',
      '60 FPS Rendering',
      'Latency Profiling'
    ]
  },
  {
    title: 'System Resilience & DX',
    icon: 'shield-check',
    iconBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    skills: [
      'Retry Queues',
      'Async Webhook Pipelines',
      'Conflict Resolution',
      'Idempotent Operations',
      'Microservices',
      'Docker & CI/CD',
      'PostHog / Monitoring'
    ]
  },
  {
    title: 'Product & AI Velocity',
    icon: 'zap',
    iconBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
    skills: [
      'MVP to Production',
      'Cursor & Claude Workflows',
      'Async Remote Execution',
      'Technical Specs (要件定義)',
      'B2B / Wise Invoicing'
    ]
  }
]

export const experiencesData = [
  {
    title: 'Fullstack Software Engineer',
    company: 'YTTLINKS Inc. (YTTLINKS株式会社)',
    location: 'Hybrid / Tokyo, Japan',
    period: '03/2024 – Present',
    bullets: [
      'Reduced in-store transaction processing latency by <strong class="text-slate-900 dark:text-slate-200">45%</strong> across nationwide retail branches via state-machine-driven client forms and automated workflow web apps.',
      'Engineered <strong class="text-slate-900 dark:text-slate-200">sub-200ms API responses</strong> and zero packet loss across terminal hardware using optimistic updates, local caching, and exponential backoff retry queues.',
      'Eliminated <strong class="text-slate-900 dark:text-slate-200">100% of manual data entry errors</strong> by building schema-validated REST synchronization pipelines with bidirectional conflict resolution across legacy inventory backends.',
      'Authored upstream technical specifications (要件定義/基本設計) and accelerated iteration velocity using daily AI engineering tools (Cursor, Claude).'
    ]
  },
  {
    title: 'Senior System Developer (Backend & Platform)',
    company: 'Smartfren Telecom',
    location: 'Jakarta, Indonesia',
    period: '05/2022 – 02/2024',
    bullets: [
      'Drove a <strong class="text-slate-900 dark:text-slate-200">30% increase</strong> in retail distribution sales by architecting the Sales Retail Information System (SRIS) using Golang microservices and React Native.',
      'Maintained <strong class="text-slate-900 dark:text-slate-200">zero duplicate transactions</strong> across millions of checkouts via an idempotent payment orchestration service with async webhooks and tokenized verification.',
      'Cut internal order cycle time by <strong class="text-slate-900 dark:text-slate-200">35%</strong> by building an Order Fulfillment CMS in Node.js/Go and PostgreSQL with compound indexes and cursor pagination.',
      'Accelerated engineering release cadence <strong class="text-slate-900 dark:text-slate-200">3x</strong> by instituting automated testing standards, standardized data contracts, and mentoring 4 engineers.'
    ]
  },
  {
    title: 'Full Stack Engineer (Founder Mindset / MVP)',
    company: 'Bonbon Technology',
    location: '100% Remote (Jakarta, Indonesia)',
    period: '06/2020 – 02/2022',
    bullets: [
      'Scaled DTC digital revenue by <strong class="text-slate-900 dark:text-slate-200">40% within 90 days</strong> by building the e-commerce platform and admin CMS for <a href="https://crystalsea.id" target="_blank" rel="noopener noreferrer" class="text-brand-600 dark:text-brand-400 underline hover:opacity-80">Crystal of the Sea (crystalsea.id)</a> from scratch (Node.js, Express, PostgreSQL).',
      'Optimized query latency via normalized transactional schemas, B-tree composite indexes, and cursor-based pagination for rapid product search and filtering.',
      'Delivered <strong class="text-slate-900 dark:text-slate-200">99.9% automated reconciliation</strong> integrating Xendit payment webhooks with idempotent state validation and automatic fulfillment triggers.',
      'Engineered real-time contactless ordering microservices with NestJS and WebSockets for high-concurrency peak dining hours.'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Prime Strategy Indonesia',
    location: 'Jakarta, Indonesia',
    period: '05/2018 – 02/2020',
    bullets: [
      'Maintained enterprise SLAs for Japanese enterprise clients by engineering custom modular backend extensions, database queries, and secure REST endpoints (PHP & JavaScript).',
      'Shipped native client applications integrated with headless backends, focusing on low memory footprints and asset bundle optimization.'
    ]
  }
]