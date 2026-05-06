<template>
  <div class="bg-white rounded-2xl shadow-2xl max-w-sm mx-auto overflow-hidden">
    <!-- Header -->
    <div class="px-5 pt-5 pb-4 border-b border-gray-100">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">🌿</div>
        <div>
          <p class="font-bold text-navy-900 text-sm">HealthAgri Platform</p>
          <p class="text-xs text-gray-500">Unified operations dashboard</p>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-2">
        <div v-for="stat in stats" :key="stat.label" class="bg-gray-50 rounded-lg p-2 text-center">
          <p class="font-bold text-sm" :class="stat.color">{{ stat.value }}</p>
          <p class="text-gray-400 text-[10px] mt-0.5 leading-tight">{{ stat.label }}</p>
        </div>
      </div>
    </div>

    <!-- Patient records -->
    <div class="px-5 py-4 border-b border-gray-100">
      <p class="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-2.5">Patient Records</p>
      <div class="space-y-2">
        <div v-for="patient in patients" :key="patient.id" class="flex items-center gap-3">
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0" :class="patient.color">
            {{ patient.initials }}
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-xs font-semibold text-navy-900">{{ patient.name }}</p>
            <p class="text-[10px] text-gray-400">{{ patient.info }}</p>
          </div>
          <span class="text-[10px] font-bold px-2 py-0.5 rounded-full" :class="patient.statusClass">{{ patient.status }}</span>
        </div>
      </div>
    </div>

    <!-- Crop yield -->
    <div class="px-5 py-4">
      <p class="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-2.5">Crop Yield Forecast</p>
      <div class="space-y-2">
        <div v-for="crop in crops" :key="crop.name">
          <div class="flex justify-between text-[10px] mb-1">
            <span class="text-gray-600 font-medium">{{ crop.name }}</span>
            <span class="font-bold text-green-600">{{ crop.yield }}</span>
          </div>
          <div class="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div class="h-full rounded-full" :class="crop.barColor" :style="`width: ${crop.pct}%`"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { label: 'Active Patients', value: '1,240', color: 'text-blue-600' },
  { label: 'Supply Routes', value: '18', color: 'text-green-600' },
  { label: 'Data Accuracy', value: '99.2%', color: 'text-purple-600' },
]

const patients = [
  { id: 1, initials: 'AA', name: 'Amara Asante', info: 'Cardiology · Record synced', status: 'Active', statusClass: 'bg-green-100 text-green-700', color: 'bg-blue-500' },
  { id: 2, initials: 'OB', name: 'Olumide Bello', info: 'Oncology · Lab results ready', status: 'Review', statusClass: 'bg-yellow-100 text-yellow-700', color: 'bg-purple-500' },
  { id: 3, initials: 'FN', name: 'Fatima Nwosu', info: 'Paediatrics · Discharged', status: 'Done', statusClass: 'bg-gray-100 text-gray-500', color: 'bg-pink-500' },
]

const crops = [
  { name: 'Maize — Northern Region', yield: '+12% vs target', pct: 82, barColor: 'bg-green-400' },
  { name: 'Rice — Delta Farms', yield: 'On track', pct: 67, barColor: 'bg-blue-400' },
  { name: 'Tomato — Supply Chain', yield: '94% delivered', pct: 94, barColor: 'bg-orange-400' },
]
</script>
