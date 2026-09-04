<template>
  <section ref="sectionRef" class="py-20 overflow-hidden" id="problems">
    <div class="container-isura">
      <div class="scatter relative" :class="{ 'is-shown': shown }">
        <div class="relative z-10 max-w-[24ch]">
          <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">
            Problems we solve
          </span>
          <h2
            class="text-[clamp(34px,4.6vw,60px)] font-bold tracking-[-0.032em] leading-[1.02] mt-3"
          >
            When the tools stop fitting the operation.
          </h2>
        </div>

        <div class="artefacts">
          <article class="artefact" style="--i: 0">
            <span class="artefact-label">Sheet · final_v7.xlsx</span>
            <div class="flex flex-col gap-1.5 mt-3">
              <span class="bar" style="width: 82%"></span>
              <span class="bar" style="width: 64%"></span>
              <span class="bar" style="width: 71%"></span>
            </div>
            <span class="artefact-note">One person knows what column K means.</span>
          </article>

          <article class="artefact" style="--i: 1">
            <span class="artefact-label">Approval · in a chat thread</span>
            <p class="bubble">can you approve this before 5?</p>
            <span class="artefact-note">No record of who said yes.</span>
          </article>

          <article class="artefact" style="--i: 2">
            <span class="artefact-label">Same figure · three systems</span>
            <div class="flex flex-col gap-1.5 mt-3 font-code text-[12.5px]">
              <span class="flex justify-between"><em>Ledger</em> 412,900</span>
              <span class="flex justify-between conflict"><em>Portal</em> 413,050</span>
              <span class="flex justify-between"><em>Report</em> 412,900</span>
            </div>
            <span class="artefact-note">Which one goes in the board pack?</span>
          </article>

          <article class="artefact" style="--i: 3">
            <span class="artefact-label">Owner · unassigned</span>
            <p class="shout">Who owns this?</p>
          </article>

          <article class="artefact" style="--i: 4">
            <span class="artefact-label">Handoff · by email</span>
            <div class="flex items-center gap-2.5 mt-3">
              <span class="node">Ops</span>
              <span class="dash"></span>
              <span class="node">Finance</span>
            </div>
            <span class="artefact-note">Entered again on the other side.</span>
          </article>
        </div>

        <p class="closing">
          Spreadsheets. Messages. Manual handoffs. Records that disagree.
          <strong>The operation starts working around its tools.</strong>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const sectionRef = ref<HTMLElement | null>(null)
const shown = ref(false)

let observer: IntersectionObserver | undefined

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    shown.value = true
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return
      shown.value = true
      observer?.disconnect()
    },
    { rootMargin: '-12% 0px -12% 0px' },
  )

  if (sectionRef.value) observer.observe(sectionRef.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<style scoped>
.artefacts {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2.5rem;
}

.artefact {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 17rem;
  padding: 1.1rem 1.2rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface);
  box-shadow: var(--shadow-2);
  opacity: 0;
  transform: translateY(1.4rem) rotate(var(--rot, 0deg));
  transition:
    opacity 700ms ease,
    transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: calc(var(--i) * 110ms);
}

.is-shown .artefact {
  opacity: 1;
  transform: translateY(0) rotate(var(--rot, 0deg));
}

.artefact-label {
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

.artefact-note {
  margin-top: auto;
  padding-top: 0.9rem;
  font-size: 12.5px;
  line-height: 1.5;
  color: var(--muted);
}

.bar {
  height: 7px;
  border-radius: 3px;
  background: var(--surface-3);
}

.bubble {
  margin: 0.8rem 0 0;
  padding: 0.6rem 0.85rem;
  border-radius: 12px 12px 12px 3px;
  background: var(--surface-2);
  font-size: 13px;
  line-height: 1.4;
}

.conflict {
  color: var(--brand-deep);
  font-weight: 600;
}

.artefact em {
  font-style: normal;
  color: var(--muted);
}

.shout {
  margin: 0.9rem 0 0;
  font-size: 21px;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.node {
  padding: 0.3rem 0.7rem;
  border: 1px solid var(--border);
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.dash {
  flex: 1;
  height: 1px;
  background: repeating-linear-gradient(
    to right,
    var(--border-strong) 0 5px,
    transparent 5px 10px
  );
}

.closing {
  max-width: 46ch;
  margin: 3rem 0 0;
  font-size: 17px;
  line-height: 1.6;
  color: var(--muted);
}

.closing strong {
  display: block;
  margin-top: 0.35rem;
  color: var(--text);
  font-weight: 600;
}

@media (min-width: 1024px) {
  .scatter {
    min-height: 34rem;
  }

  .artefacts {
    position: absolute;
    inset: 0;
    display: block;
    margin-top: 0;
    pointer-events: none;
  }

  .artefact {
    position: absolute;
    pointer-events: auto;
  }

  .artefact:nth-child(1) {
    --rot: -3.2deg;
    left: 2%;
    top: 19rem;
    width: 15rem;
  }

  .artefact:nth-child(2) {
    --rot: 2.4deg;
    left: 40%;
    top: 1rem;
    width: 16.5rem;
  }

  .artefact:nth-child(3) {
    --rot: -1.6deg;
    right: 0;
    top: 8.5rem;
    width: 17rem;
  }

  .artefact:nth-child(4) {
    --rot: 3.6deg;
    left: 27%;
    top: 22.5rem;
    width: 13.5rem;
  }

  .artefact:nth-child(5) {
    --rot: -2.2deg;
    right: 8%;
    top: 24rem;
    width: 15.5rem;
  }

  .closing {
    position: relative;
    z-index: 10;
    margin-top: 12rem;
  }
}
</style>
