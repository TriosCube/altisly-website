<template>
  <section id="ways-in" class="py-28" v-reveal>
    <div class="container-isura">
      <div class="max-w-[54rem]">
        <span class="font-code text-[11px] tracking-[0.14em] uppercase text-muted">
          How this works
        </span>
        <h2
          class="text-[clamp(30px,calc(4.4*var(--vwu)),58px)] font-bold tracking-[-0.032em] leading-[1.06] mt-5 text-balance"
        >
          Three ways in.
        </h2>
        <p class="text-muted text-[17px] leading-relaxed max-w-[48ch] mt-6 text-pretty">
          All in the same operations: money moving, records kept, regulators asking. What changes is
          how far in we come.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14" data-reveal-flow>
        <article v-for="way in ways" :key="way.name" v-reveal class="bento-card p-8 flex flex-col">
          <div class="flex items-baseline justify-between gap-3">
            <h3 class="text-[19px] font-bold tracking-[-0.02em]">{{ way.name }}</h3>
            <span class="font-code text-[11px] text-muted">{{ way.horizon }}</span>
          </div>
          <p class="text-muted text-[14.5px] leading-relaxed mt-3 flex-1">{{ way.body }}</p>
          <p class="font-code text-[11.5px] text-muted mt-6 pt-5 border-t border-base">
            {{ way.fit }}
          </p>
        </article>
      </div>

      <p class="text-[15px] leading-relaxed max-w-[52ch] mt-12">
        We do not take work outside operations where mistakes are expensive. If that is not you, we
        will say so on the first call rather than the third.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const ways = [
  {
    name: 'Review',
    horizon: 'Weeks',
    body: 'You have a system, or a plan for one, and need to know where it breaks before it does. We go through the architecture, the data model and the failure paths, and tell you plainly.',
    fit: 'When the decision is bigger than the budget to unmake it.',
  },
  {
    name: 'Embed',
    horizon: 'Months',
    body: 'Your team is building it and needs people who have done this before. Ours join yours, under your process, and leave the knowledge behind rather than taking it with them.',
    fit: 'When you have the team but not the shape of the thing yet.',
  },
  {
    name: 'Build',
    horizon: 'One team, end to end',
    body: 'We take the operation, design the system around how it actually works, build it, and put it into service with your people able to run it.',
    fit: 'What most people come to us for.',
  },
]
</script>
