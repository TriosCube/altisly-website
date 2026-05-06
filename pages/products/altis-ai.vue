<template>
  <div>
    <AppHeader />
    <main>

      <!-- Hero -->
      <section class="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#060809] overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-ai" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" stroke-width="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-ai)" />
          </svg>
        </div>
        <div class="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#15c411] rounded-full opacity-10 blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-400 rounded-full opacity-8 blur-3xl"></div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row items-center gap-16">
            <div class="lg:w-1/2 text-center lg:text-left">
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#15c411]/20 border border-[#15c411]/30 text-[#15c411] text-xs font-bold uppercase tracking-widest mb-6">
                <span class="w-2 h-2 rounded-full bg-[#15c411] animate-pulse"></span>
                Altis AI — Agentic Intelligence Layer
              </div>
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                One AI agent.<br />Every product.<br /><span class="text-[#15c411]">Out of the box.</span>
              </h1>
              <p class="text-lg md:text-xl text-white/80 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                Altis AI is not a chatbot. It is a modular agentic intelligence system that perceives data, reasons across context, and executes actions — autonomously or with human-in-the-loop approval — inside every Altisry product.
              </p>
              <p class="text-base text-white/60 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                Born inside ATreasury. Built to plug into any financial operation — reconciliation, compliance, merchant management, forecasting, and settlement — without configuration overhead.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <NuxtLink to="/contact" class="btn-primary px-8 py-4 text-base">See Altis AI in Action</NuxtLink>
                <NuxtLink to="/developers/api" class="px-8 py-4 text-base border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors font-semibold">Read the API Docs</NuxtLink>
              </div>
            </div>

            <!-- Agent Terminal Mockup -->
            <div class="lg:w-1/2 w-full">
              <div class="bg-[#0d1117] rounded-2xl border border-white/10 shadow-2xl overflow-hidden font-mono">
                <div class="bg-[#161b22] px-4 py-3 border-b border-white/5 flex items-center gap-3">
                  <div class="flex gap-1.5">
                    <div class="w-3 h-3 rounded-full bg-red-500"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div class="flex items-center gap-2 text-[10px] text-white/40">
                    <div class="w-2 h-2 rounded-full bg-[#15c411] animate-pulse"></div>
                    altis-agent · treasury-context · live
                  </div>
                </div>
                <div class="p-5 text-xs space-y-4">
                  <div v-for="(line, i) in agentLog" :key="i" class="flex items-start gap-3">
                    <span class="text-white/25 text-[10px] w-5 flex-shrink-0 mt-0.5">{{ String(i + 1).padStart(2, '0') }}</span>
                    <div>
                      <span class="font-bold" :class="line.labelColor">{{ line.label }}</span>
                      <span class="text-white/70 ml-1">{{ line.text }}</span>
                      <div v-if="line.tags" class="flex flex-wrap gap-1.5 mt-1.5">
                        <span v-for="tag in line.tags" :key="tag.label" class="text-[10px] px-2 py-0.5 rounded-full font-bold" :class="tag.color">{{ tag.label }}</span>
                      </div>
                    </div>
                  </div>
                  <!-- Cursor blink -->
                  <div class="flex items-center gap-3">
                    <span class="text-white/25 text-[10px] w-5">{{ agentLog.length + 1 }}</span>
                    <span class="text-[#15c411]">▶</span>
                    <span class="text-white/50">awaiting next event</span>
                    <span class="w-2 h-4 bg-[#15c411] animate-pulse inline-block ml-1"></span>
                  </div>
                </div>
              </div>
              <!-- Agent mode badges -->
              <div class="flex flex-wrap gap-2 mt-4 justify-center lg:justify-start">
                <span v-for="badge in agentBadges" :key="badge" class="text-[10px] font-bold px-3 py-1 rounded-full bg-white/10 text-white/60 border border-white/10">{{ badge }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats -->
      <section class="py-12 bg-white border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div v-for="stat in stats" :key="stat.value" class="text-center">
              <p class="text-3xl md:text-4xl font-bold text-[#15c411] mb-1">{{ stat.value }}</p>
              <p class="text-sm text-gray-500 font-medium">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- What AI does inside ATreasury -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Origin — ATreasury</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">What Altis AI does inside the treasury system</h2>
            <p class="text-gray-500 max-w-2xl mx-auto">Altis AI was built to solve the hardest problems in corporate treasury — where the cost of a wrong decision is measured in millions. These are its core capabilities in native deployment.</p>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div v-for="cap in treasuryCaps" :key="cap.title" class="flex items-start gap-5 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#15c411] hover:shadow-md transition-all duration-300">
              <div class="w-12 h-12 rounded-xl bg-[#ebfaeb] flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-[#15c411]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" :d="cap.icon" />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-2 flex-wrap">
                  <h3 class="font-bold text-navy-900">{{ cap.title }}</h3>
                  <span class="text-[9px] font-bold px-2 py-0.5 rounded-full" :class="cap.badgeClass">{{ cap.badge }}</span>
                </div>
                <p class="text-sm text-gray-600 leading-relaxed mb-3">{{ cap.description }}</p>
                <div class="bg-[#0d1117] rounded-lg p-3 font-mono text-[10px] text-[#15c411] leading-relaxed">{{ cap.example }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- The Agentic Loop -->
      <section class="py-20 bg-[#060809] overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">How the Agent Works</p>
            <h2 class="section-title text-3xl font-bold text-white mb-5">Perceive. Reason. Act. Learn.</h2>
            <p class="text-white/60 max-w-2xl mx-auto">Altis AI runs a continuous agentic loop — it observes every event across connected systems, builds context, reasons through the right action, and either executes autonomously or routes to a human for approval.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div v-for="(step, i) in agentLoop" :key="step.title" class="relative">
              <div class="bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:border-[#15c411]/40 transition-colors">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 rounded-xl bg-[#15c411]/20 flex items-center justify-center">
                    <svg class="w-5 h-5 text-[#15c411]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" :d="step.icon" />
                    </svg>
                  </div>
                  <span class="text-[#15c411] font-black text-2xl">{{ String(i + 1).padStart(2, '0') }}</span>
                </div>
                <h3 class="font-bold text-white text-lg mb-2">{{ step.title }}</h3>
                <p class="text-white/60 text-sm leading-relaxed mb-4">{{ step.description }}</p>
                <ul class="space-y-1.5">
                  <li v-for="point in step.points" :key="point" class="flex items-start gap-2 text-xs text-white/50">
                    <div class="w-1 h-1 rounded-full bg-[#15c411] mt-1.5 flex-shrink-0"></div>
                    {{ point }}
                  </li>
                </ul>
              </div>
              <!-- Arrow between steps -->
              <div v-if="i < 3" class="hidden md:flex absolute top-1/2 -right-3 z-10 w-6 h-6 bg-[#060809] items-center justify-center">
                <svg class="w-4 h-4 text-[#15c411]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Pluggable Across Every Product -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Universal Plug-In</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">Same agent. Every product. Zero setup.</h2>
            <p class="text-gray-500 max-w-2xl mx-auto">Enable Altis AI on any Altisry product and it immediately understands the context, connects to the relevant data streams, and starts operating. No training data labelling. No prompt engineering. No integration work.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="product in productPlugins" :key="product.title" class="group bg-gray-50 rounded-2xl border border-gray-100 p-6 hover:border-[#15c411] hover:shadow-lg transition-all duration-300">
              <div class="flex items-start justify-between mb-4">
                <div class="w-11 h-11 rounded-xl flex items-center justify-center" :class="product.iconBg">
                  <svg class="w-5 h-5" :class="product.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" :d="product.icon" />
                  </svg>
                </div>
                <div class="flex items-center gap-1.5 text-[10px] font-bold px-2 py-1 rounded-full bg-[#ebfaeb] text-[#15c411]">
                  <div class="w-1.5 h-1.5 rounded-full bg-[#15c411]"></div>
                  AI-Enabled
                </div>
              </div>
              <h3 class="font-bold text-navy-900 mb-1 group-hover:text-[#15c411] transition-colors">{{ product.title }}</h3>
              <p class="text-xs text-gray-400 mb-3 font-medium">{{ product.product }}</p>
              <p class="text-sm text-gray-600 leading-relaxed mb-4">{{ product.description }}</p>
              <div class="space-y-2">
                <div v-for="action in product.actions" :key="action" class="flex items-center gap-2 text-xs text-gray-500">
                  <svg class="w-3 h-3 text-[#15c411] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  {{ action }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Core AI Capabilities -->
      <section class="py-20 bg-gray-50 border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Under the Hood</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">The capabilities that make it work</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="cap in coreCaps" :key="cap.title" class="bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#15c411] hover:shadow-md transition-all duration-300">
              <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-[#ebfaeb]">
                <svg class="w-5 h-5 text-[#15c411]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="cap.icon" />
                </svg>
              </div>
              <h3 class="text-base font-bold text-navy-900 mb-2">{{ cap.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed">{{ cap.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Human-in-the-loop vs Autonomous -->
      <section class="py-20 bg-white border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row gap-16 items-center">
            <div class="lg:w-1/2">
              <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Control Model</p>
              <h2 class="text-3xl font-bold text-navy-900 mb-6">You set how much the agent operates on its own</h2>
              <p class="text-gray-600 leading-relaxed mb-8">Altis AI ships with three configurable autonomy levels. Set them globally, per product, per action type, or per value threshold. The agent never exceeds the trust level you define.</p>
              <div class="space-y-4">
                <div v-for="level in autonomyLevels" :key="level.name" class="flex items-start gap-4 p-5 rounded-xl border-2 transition-colors" :class="level.borderClass">
                  <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" :class="level.iconBg">
                    <svg class="w-5 h-5" :class="level.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="level.icon" />
                    </svg>
                  </div>
                  <div>
                    <div class="flex items-center gap-2 mb-1">
                      <h4 class="font-bold text-navy-900">{{ level.name }}</h4>
                      <span class="text-[9px] font-bold px-2 py-0.5 rounded-full" :class="level.badgeClass">{{ level.badge }}</span>
                    </div>
                    <p class="text-sm text-gray-600">{{ level.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:w-1/2">
              <!-- Approval workflow mockup -->
              <div class="bg-[#0d1117] rounded-2xl border border-white/10 shadow-xl overflow-hidden font-mono">
                <div class="bg-[#161b22] px-4 py-3 border-b border-white/5 flex items-center gap-2">
                  <div class="flex gap-1.5">
                    <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <span class="text-[10px] text-white/40 mx-auto">Altis AI — Approval Request</span>
                </div>
                <div class="p-5 space-y-4">
                  <div class="bg-[#15c411]/10 border border-[#15c411]/20 rounded-lg p-4">
                    <div class="flex items-center gap-2 mb-2">
                      <div class="w-2 h-2 rounded-full bg-[#15c411] animate-pulse"></div>
                      <span class="text-[#15c411] text-xs font-bold">AGENT ACTION REQUEST</span>
                    </div>
                    <p class="text-white text-xs leading-relaxed">I have identified a liquidity gap of <span class="text-[#15c411] font-bold">$2,400,000</span> in your Citibank USD account expected at 14:30 today.</p>
                  </div>
                  <div class="space-y-2 text-xs">
                    <div class="flex items-start gap-2">
                      <span class="text-white/30 w-16 flex-shrink-0">Cause</span>
                      <span class="text-white/70">Delayed SWIFT settlement from JP Morgan (Ref: TXN-9182)</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <span class="text-white/30 w-16 flex-shrink-0">Risk</span>
                      <span class="text-yellow-400">Intraday overdraft · est. cost $4,200 in bank fees</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <span class="text-white/30 w-16 flex-shrink-0">Action</span>
                      <span class="text-white/70">Initiate sweep of $2.5M from Standard Chartered GBP → Citibank USD</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <span class="text-white/30 w-16 flex-shrink-0">FX rate</span>
                      <span class="text-white/70">GBPUSD 1.2741 · est. cost $1,200 in conversion</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <span class="text-white/30 w-16 flex-shrink-0">Confidence</span>
                      <span class="text-[#15c411] font-bold">97%</span>
                    </div>
                  </div>
                  <div class="flex gap-3 pt-2">
                    <button class="flex-1 py-2 rounded-lg bg-[#15c411] text-white text-xs font-bold hover:bg-[#13ad0f] transition-colors">Approve & Execute</button>
                    <button class="flex-1 py-2 rounded-lg bg-white/10 text-white/70 text-xs font-bold hover:bg-white/20 transition-colors">Modify</button>
                    <button class="px-4 py-2 rounded-lg bg-red-500/20 text-red-400 text-xs font-bold">Reject</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Deployment Options -->
      <section class="py-20 bg-gray-50 border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Deployment</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">Deploy Altis AI the way that fits your stack</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="mode in deployModes" :key="mode.title" class="bg-white rounded-2xl border border-gray-100 p-8 text-center hover:border-[#15c411] hover:shadow-md transition-all duration-300">
              <div class="w-14 h-14 rounded-2xl bg-[#ebfaeb] flex items-center justify-center mx-auto mb-5">
                <svg class="w-7 h-7 text-[#15c411]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" :d="mode.icon" />
                </svg>
              </div>
              <h3 class="font-bold text-navy-900 text-lg mb-3">{{ mode.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed mb-5">{{ mode.description }}</p>
              <div class="bg-[#0d1117] rounded-lg p-3 font-mono text-[10px] text-[#15c411] text-left leading-relaxed">{{ mode.code }}</div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Deploy the intelligence layer across your products"
        subtitle="Talk to our team about activating Altis AI on your Altisry product stack."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Altis AI | Altisry',
  description: 'Altis AI is a modular agentic intelligence system — born inside ATreasury, pluggable across every Altisry product out of the box. Perceive, reason, act, learn.',
})

const agentLog = [
  { label: 'OBSERVE', labelColor: 'text-blue-400', text: 'Citibank UK balance: $12.2M → $9.8M (−$2.4M, −19.6%)' },
  { label: 'CONTEXT', labelColor: 'text-yellow-400', text: 'Cross-referencing settlement schedule, pending SWIFT queue, FX positions...' },
  { label: 'DETECT', labelColor: 'text-red-400', text: 'Gap source identified: SWIFT MT103 TXN-9182 delayed 4.2h past SLA', tags: [{ label: 'HIGH PRIORITY', color: 'bg-red-500/20 text-red-400' }, { label: 'LIQUIDITY RISK', color: 'bg-yellow-500/20 text-yellow-400' }] },
  { label: 'REASON', labelColor: 'text-purple-400', text: 'Modelling 3 resolution paths. Optimal: sweep SC GBP → Citi USD at current FX (GBPUSD 1.2741)' },
  { label: 'COST', labelColor: 'text-white/40', text: 'Sweep cost: $1,200 FX · Overdraft avoided: $4,200 · Net benefit: $3,000' },
  { label: 'ACTION', labelColor: 'text-[#15c411]', text: 'Routing approval request to treasury@co.com · Confidence: 97%', tags: [{ label: 'AWAITING APPROVAL', color: 'bg-[#15c411]/20 text-[#15c411]' }] },
]

const agentBadges = [
  'Multi-step reasoning', 'Context memory', 'Explainable outputs',
  'Human-in-the-loop', 'Autonomous execution', 'Real-time learning',
]

const stats = [
  { value: '<500ms', label: 'Agent Response Time' },
  { value: '97%+', label: 'Decision Accuracy' },
  { value: '6', label: 'Products Powered' },
  { value: '24/7', label: 'Autonomous Monitoring' },
  { value: '0', label: 'Prompt Engineering Required' },
]

const treasuryCaps = [
  {
    title: 'Anomaly Detection on Cash Flows',
    badge: 'Real-Time',
    badgeClass: 'bg-red-100 text-red-600',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    description: 'The agent monitors every incoming balance update against 90-day behavioural baselines per account, currency, and time-of-day. It detects unexpected inflows, outflows, missing credits, and unusual sweep patterns — flagging them in real time with explanations.',
    example: '> ANOMALY: GTBank NGN balance dropped 34% vs 7-day avg\n> Cause: Missing batch settlement from merchant run #1847\n> Severity: HIGH · Recommended action: Investigate + hold sweep',
  },
  {
    title: 'Liquidity Gap Prediction',
    badge: 'Predictive',
    badgeClass: 'bg-blue-100 text-blue-600',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    description: 'The agent forecasts intraday and multi-day liquidity gaps before they occur by combining real-time balances with the pending settlement queue, known payment obligations, historical inflow patterns, and FX movements.',
    example: '> FORECAST: Citi USD gap predicted at 14:30 today\n> Drivers: SWIFT delay (TXN-9182) + payroll run at 15:00\n> Recommended: Initiate sweep now · window closes in 47min',
  },
  {
    title: 'Automated Sweep Orchestration',
    badge: 'Autonomous',
    badgeClass: 'bg-[#ebfaeb] text-[#15c411]',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    description: 'When the agent identifies a liquidity imbalance it evaluates all available funding sources — cross-currency, cross-entity, cross-bank — calculates the cheapest path including FX costs, and either executes automatically or routes an approval request with full workings shown.',
    example: '> SWEEP PLAN: SC GBP £1.96M → Citi USD $2.5M\n> FX: GBPUSD 1.2741 · Cost: $1,200 · Net benefit: $3,000\n> Execution: T+0 via RTGS · Approval: pending CFO',
  },
  {
    title: 'Intelligent Report Generation',
    badge: 'NLP',
    badgeClass: 'bg-purple-100 text-purple-600',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    description: 'At 09:00 daily the agent generates the liquidity report in plain English — not just numbers but a narrative explanation of what changed, why, what the risks are today, and what action it has already taken or recommends.',
    example: '> DAILY BRIEF (09:00): Group position $24.5M, up $1.2M\n> Key driver: Paystack batch settled overnight (+$2.1M)\n> Watch: JP Morgan maturity today · FX hedge expiry Thu',
  },
  {
    title: 'Pattern-Based Fraud Detection',
    badge: 'ML Model',
    badgeClass: 'bg-orange-100 text-orange-600',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    description: 'The agent scores every treasury-level transaction against fraud typologies — structuring, round-trip flows, unusual beneficiary patterns — using ML models trained on financial crime datasets, flagging suspicious activity before funds move.',
    example: '> FRAUD SIGNAL: 8 transfers · $9,800 each · 2hr window\n> Pattern match: Structuring (FATF Typology 14)\n> Action: Transactions held · Compliance notified',
  },
  {
    title: 'Natural Language Querying',
    badge: 'Conversational',
    badgeClass: 'bg-indigo-100 text-indigo-600',
    icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
    description: 'Treasury teams can ask the agent questions in plain English directly from the dashboard. It queries across all connected data sources, applies context, and responds with precise answers and the underlying data — no SQL, no BI tool required.',
    example: '> Q: "What drove the NGN shortfall last Tuesday?"\n> A: Paystack settlement delayed 6h (system outage). Gap\n>    was covered by auto-sweep from Stanbic at 14:12.',
  },
]

const agentLoop = [
  {
    title: 'Perceive',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    description: 'The agent continuously ingests real-time data streams from every connected system — bank APIs, settlement queues, ledgers, market feeds, and user actions.',
    points: ['Real-time balance & transaction feeds', 'Pending settlement queue monitoring', 'Market data (FX, rates, benchmarks)', 'System event streams & webhooks'],
  },
  {
    title: 'Reason',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    description: 'Multi-step reasoning chains connect observations across data sources, apply domain knowledge, model outcomes, and produce an explainable decision with a confidence score.',
    points: ['Cross-source context assembly', 'Domain-specific financial reasoning', 'Multi-path outcome modelling', 'Explainable reasoning trace'],
  },
  {
    title: 'Act',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    description: 'The agent takes action — autonomously for pre-approved low-risk decisions, or by routing an approval request with full workings to the right human for high-value or novel situations.',
    points: ['Autonomous execution within defined limits', 'Structured approval requests with workings', 'Action logging with full audit trail', 'Rollback capability on executed actions'],
  },
  {
    title: 'Learn',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    description: 'Every approved, rejected, or modified decision feeds back into the agent\'s models. It continuously recalibrates confidence thresholds, improves pattern recognition, and adapts to your organisation\'s evolving behaviour.',
    points: ['Human feedback loop integration', 'Confidence threshold recalibration', 'New pattern recognition over time', 'Organisation-specific model fine-tuning'],
  },
]

const productPlugins = [
  {
    title: 'AI-Assisted Break Resolution',
    product: 'Reconciliation Suite',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2m-3 7l2 2 4-4',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    description: 'The agent analyses every unmatched transaction, identifies the probable cause, suggests the correct match or resolution action, and auto-resolves breaks that fall within configured tolerance bands.',
    actions: ['Classifies break type (timing, amount, duplicate, missing)', 'Suggests matching counterpart with confidence score', 'Auto-resolves tolerance breaks within defined thresholds', 'Drafts resolution notes for auditor review'],
  },
  {
    title: 'AML Risk Intelligence',
    product: 'Compliance Suite',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    description: 'The agent scores every transaction against AML typologies in real time, explains which rules were triggered and why, surfaces the highest-risk cases to analysts first, and drafts SAR narratives for review.',
    actions: ['Real-time typology scoring on every transaction', 'Natural-language explanation of each alert', 'Analyst queue prioritisation by risk score', 'Auto-drafts SAR narratives from case evidence'],
  },
  {
    title: 'Merchant Risk Scoring',
    product: 'Merchant Suite',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    description: 'The agent continuously monitors merchant transaction velocity, chargeback ratios, and behavioural patterns — flagging merchants approaching risk limits and recommending holds, enhanced monitoring, or limit reductions before breaches occur.',
    actions: ['Continuous merchant behaviour monitoring', 'Chargeback ratio trend prediction', 'Auto-flags merchants exceeding risk thresholds', 'Recommends reserve adjustments proactively'],
  },
  {
    title: 'Intelligent Forecasting',
    product: 'Liquidity Forecasting Suite',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    iconBg: 'bg-[#ebfaeb]',
    iconColor: 'text-[#15c411]',
    description: 'The agent generates probabilistic cash flow forecasts, explains what is driving each projection, surfaces the top risks to the 30-day position, and proactively recommends hedging or funding actions when it sees developing pressure.',
    actions: ['Narrative explanation of forecast drivers', 'Proactive alert before threshold breaches', 'Recommends hedging actions on FX exposure', 'Recalibrates daily as actuals come in'],
  },
  {
    title: 'Settlement Failure Triage',
    product: 'Settlement System Suite',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    description: 'When a settlement fails the agent immediately diagnoses the cause, evaluates retry eligibility, models the downstream liquidity impact, and either auto-retries within policy or routes an exception with a recommended resolution path.',
    actions: ['Instant failure root-cause classification', 'Retry eligibility assessment within policy', 'Downstream liquidity impact modelling', 'Auto-retry or structured escalation routing'],
  },
  {
    title: 'Cross-Product Intelligence',
    product: 'All Products',
    icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
    iconBg: 'bg-gray-100',
    iconColor: 'text-gray-600',
    description: 'Because Altis AI operates across all products simultaneously, it can surface connections that no single product would see — a merchant settlement delay causing a treasury gap, or a compliance hold blocking a reconciliation.',
    actions: ['Cross-product event correlation', 'Unified audit trail across all agent actions', 'Single natural language interface across products', 'Organisation-wide risk dashboard'],
  },
]

const coreCaps = [
  {
    title: 'Multi-Step Chain-of-Thought Reasoning',
    description: 'The agent builds a reasoning chain across multiple data sources before arriving at a conclusion — not pattern matching, but structured inference. Every step is logged and explainable.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2',
  },
  {
    title: 'Context Memory & Session Continuity',
    description: 'The agent retains context across interactions — it knows what decisions were made yesterday, what was approved last week, and how the organisation tends to respond to specific situations.',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
  },
  {
    title: 'Explainable AI Outputs',
    description: 'Every action recommendation includes a full explanation of what was observed, what was inferred, and why this action was chosen — not a black box. Designed for regulated financial environments.',
    icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
  },
  {
    title: 'Configurable Autonomy Thresholds',
    description: 'Define exactly which action types, value ranges, and risk levels the agent can execute autonomously versus which require human approval. Full audit trail regardless of mode.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
  },
  {
    title: 'Natural Language Interface',
    description: 'Ask the agent questions in plain English across any connected product. It queries live data, applies domain context, and returns precise answers — no SQL, no dashboards required.',
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
  },
  {
    title: 'Real-Time Continuous Learning',
    description: 'Every human override, approval, or correction teaches the agent. Confidence thresholds auto-calibrate over time, and new patterns in your data are incorporated into the models continuously.',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  },
]

const autonomyLevels = [
  {
    name: 'Advisory Mode',
    badge: 'Safest',
    badgeClass: 'bg-blue-100 text-blue-600',
    icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
    borderClass: 'border-blue-100 bg-blue-50/30',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    description: 'The agent observes, analyses, and recommends — but takes no action without explicit human approval on every decision. Full reasoning shown for every suggestion.',
  },
  {
    name: 'Supervised Mode',
    badge: 'Recommended',
    badgeClass: 'bg-[#ebfaeb] text-[#15c411]',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    borderClass: 'border-[#15c411]/30 bg-[#ebfaeb]/30',
    iconBg: 'bg-[#ebfaeb]',
    iconColor: 'text-[#15c411]',
    description: 'Low-risk, pre-approved actions execute automatically. High-value or novel decisions route to a human with full workings. Thresholds are fully configurable per action type.',
  },
  {
    name: 'Autonomous Mode',
    badge: 'Maximum Speed',
    badgeClass: 'bg-orange-100 text-orange-600',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    borderClass: 'border-orange-100 bg-orange-50/30',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    description: 'The agent executes all decisions within its configured scope without human approval, logging every action in real time. Used for well-understood, time-critical operational tasks.',
  },
]

const deployModes = [
  {
    title: 'Embedded in Product',
    icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z',
    description: 'Enable Altis AI with a single toggle inside any Altisry product. Immediate activation — no integration work, no data pipelines to configure.',
    code: '// Dashboard → Settings → Altis AI\n// Toggle: Enable AI Agent\n// Autonomy: Supervised\n// ✓ Active in 30 seconds',
  },
  {
    title: 'REST API',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    description: 'Call the Altis AI agent directly from your own systems. Pass any financial event and receive a structured decision with reasoning, confidence score, and recommended action.',
    code: 'POST /v1/agent/evaluate\n{\n  "context": "treasury",\n  "event": { ...transaction },\n  "autonomy": "supervised"\n}',
  },
  {
    title: 'Webhook Triggers',
    icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
    description: 'Subscribe the agent to any event stream. When a defined trigger fires — balance threshold, failed settlement, new alert — the agent activates and responds in under 500ms.',
    code: 'altis.on("balance.anomaly", async (e) => {\n  const action = await agent.evaluate(e)\n  await action.execute() // or route\n})',
  },
]
</script>
