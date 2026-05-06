<template>
  <div class="bg-[#0d1117] border border-white/10 rounded-2xl shadow-2xl max-w-sm mx-auto overflow-hidden font-mono">
    <!-- Title bar -->
    <div class="px-4 py-3 border-b border-white/5 flex items-center gap-2">
      <div class="flex gap-1.5">
        <div class="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
        <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
        <div class="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
      </div>
      <span class="text-[10px] text-white/30 mx-auto">Data Intelligence — Live</span>
    </div>

    <div class="p-4">
      <!-- KPI row -->
      <div class="grid grid-cols-3 gap-2 mb-4">
        <div v-for="kpi in kpis" :key="kpi.label" class="bg-white/5 border border-white/5 rounded-lg p-2.5 text-center">
          <p class="font-bold text-sm" :class="kpi.color">{{ kpi.value }}</p>
          <p class="text-white/40 text-[10px] mt-0.5">{{ kpi.label }}</p>
        </div>
      </div>

      <!-- Pipeline flows -->
      <div class="mb-4">
        <p class="text-white/30 text-[10px] uppercase tracking-wider mb-2">Data Pipeline Status</p>
        <div class="space-y-2">
          <div v-for="pipe in pipelines" :key="pipe.name" class="flex items-center gap-3">
            <div class="w-6 h-6 rounded flex items-center justify-center flex-shrink-0" :class="pipe.iconBg">
              <svg class="w-3 h-3" :class="pipe.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="pipe.icon" />
              </svg>
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex justify-between items-center mb-0.5">
                <span class="text-white/70 text-[10px] font-semibold">{{ pipe.name }}</span>
                <span class="text-[10px]" :class="pipe.statusColor">{{ pipe.status }}</span>
              </div>
              <div class="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div class="h-full rounded-full" :class="pipe.barColor" :style="`width: ${pipe.pct}%`"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- BI query result -->
      <div class="bg-white/5 border border-white/5 rounded-lg p-3">
        <div class="flex items-center gap-2 mb-2">
          <div class="w-1.5 h-1.5 rounded-full bg-[#15c411] animate-pulse"></div>
          <span class="text-[#15c411] text-[10px] font-bold">QUERY RESULT</span>
        </div>
        <p class="text-white/50 text-[10px] font-mono mb-2">SELECT dept, SUM(records) FROM unified_store...</p>
        <div class="space-y-1.5">
          <div v-for="row in queryRows" :key="row.dept" class="flex justify-between text-[10px]">
            <span class="text-white/50">{{ row.dept }}</span>
            <span class="text-white font-bold">{{ row.records }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const kpis = [
  { label: 'Data Sources', value: '24', color: 'text-[#15c411]' },
  { label: 'Records/sec', value: '18K', color: 'text-blue-400' },
  { label: 'Accuracy', value: '99.7%', color: 'text-purple-400' },
]

const pipelines = [
  { name: 'CRM → Data Warehouse', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7', iconBg: 'bg-blue-500/20', iconColor: 'text-blue-400', status: 'Live', statusColor: 'text-[#15c411]', barColor: 'bg-[#15c411]', pct: 92 },
  { name: 'ERP → BI Dashboard', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10', iconBg: 'bg-purple-500/20', iconColor: 'text-purple-400', status: 'Live', statusColor: 'text-[#15c411]', barColor: 'bg-purple-400', pct: 78 },
  { name: 'APIs → Unified Store', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', iconBg: 'bg-orange-500/20', iconColor: 'text-orange-400', status: 'Syncing', statusColor: 'text-yellow-400', barColor: 'bg-orange-400', pct: 55 },
]

const queryRows = [
  { dept: 'Finance', records: '2.4M rows' },
  { dept: 'Operations', records: '1.8M rows' },
  { dept: 'Customer', records: '980K rows' },
]
</script>
