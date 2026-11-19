<script setup>
import { ref, watch } from 'vue'
import { X, ExternalLink } from 'lucide-vue-next'

const props = defineProps({
  project: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close'])
const imageFailed = ref(false)

watch(
  () => props.project,
  () => {
    imageFailed.value = false
  }
)
</script>

<template>
  <transition name="fade">
    <div
      v-if="project"
      @click.self="emit('close')"
      class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
    >
      <div
        class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl space-y-6 my-8 relative"
      >
        <button
          @click="emit('close')"
          aria-label="Close modal"
          class="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
        >
          <X class="w-5 h-5" />
        </button>

        <div class="space-y-2 pr-10">
          <div class="flex flex-wrap items-center gap-2">
            <span
              class="px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-500/10 text-brand-600 dark:text-brand-400"
            >
              {{ project.category }}
            </span>
            <a
              v-if="project.liveUrl"
              :href="project.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <span>{{ project.liveLabel }}</span>
              <ExternalLink class="w-3.5 h-3.5" />
            </a>
          </div>
          <h3 class="text-2xl sm:text-3xl font-bold">{{ project.title }}</h3>
          <p class="text-sm text-slate-500 dark:text-slate-400">
            {{ project.role }} &bull; {{ project.period }}
          </p>
        </div>

        <!-- Preview Frame -->
        <div
          class="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950"
        >
          <div
            class="px-4 py-2.5 bg-slate-200/80 dark:bg-slate-800/90 border-b border-slate-300/60 dark:border-slate-700/60 flex items-center justify-between"
          >
            <div class="flex items-center gap-1.5">
              <span class="w-3 h-3 rounded-full bg-rose-400"></span>
              <span class="w-3 h-3 rounded-full bg-amber-400"></span>
              <span class="w-3 h-3 rounded-full bg-emerald-400"></span>
            </div>
            <div
              class="px-3 py-1 rounded-md bg-white/80 dark:bg-slate-900/80 text-xs font-mono text-slate-600 dark:text-slate-300 truncate max-w-[220px] sm:max-w-xs"
            >
              {{ project.browserUrl }}
            </div>
            <a
              v-if="project.liveUrl"
              :href="project.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-xs font-medium text-brand-600 dark:text-brand-400 hover:underline"
            >
              Open Site
            </a>
            <span v-else class="text-xs font-mono text-slate-400">Internal</span>
          </div>

          <div class="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
            <img
              v-if="project.screenshotUrl && !imageFailed"
              :src="project.screenshotUrl"
              :alt="project.title + ' screenshot'"
              @error="imageFailed = true"
              class="w-full h-full object-cover object-top"
            />
            <div
              v-else
              class="w-full h-full flex flex-col justify-between p-6 bg-gradient-to-br from-sky-950 via-slate-900 to-cyan-950 text-white"
            >
              <div
                class="flex items-center justify-between border-b border-white/10 pb-3"
              >
                <div
                  class="flex items-center gap-2 font-bold tracking-wide text-sky-300"
                >
                  <span class="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                  <span>{{ project.mockupHeader }}</span>
                </div>
                <div class="flex gap-2 text-xs text-slate-300">
                  <span class="px-2.5 py-1 rounded bg-white/10">Catalog</span>
                  <span class="px-2.5 py-1 rounded bg-white/10">Webhooks</span>
                  <span class="px-2.5 py-1 rounded bg-cyan-500/30 text-cyan-200">
                    Live Sync
                  </span>
                </div>
              </div>
              <div class="grid grid-cols-3 gap-3 my-auto py-4">
                <div
                  v-for="(stat, idx) in project.metrics"
                  :key="idx"
                  class="p-3.5 rounded-xl bg-white/5 border border-white/10"
                >
                  <div class="text-lg sm:text-xl font-bold font-mono text-cyan-300">
                    {{ stat.value }}
                  </div>
                  <div class="text-xs text-slate-300 mt-0.5">
                    {{ stat.label }}
                  </div>
                </div>
              </div>
              <div
                class="flex items-center justify-between text-xs text-slate-400 font-mono"
              >
                <span>PostgreSQL B-Tree Indexed &bull; Cursor Pagination</span>
                <span class="text-emerald-400">● 99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <p
            class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            {{ project.fullDescription }}
          </p>

          <div>
            <h4
              class="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2"
            >
              Key Engineering Outcomes
            </h4>
            <ul
              class="space-y-2 text-sm text-slate-700 dark:text-slate-300 list-disc list-outside ml-4"
            >
              <li v-for="(point, i) in project.highlights" :key="i">
                {{ point }}
              </li>
            </ul>
          </div>

          <div class="flex flex-wrap gap-2 pt-2">
            <span
              v-for="tech in project.stack"
              :key="tech"
              class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-mono font-medium"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>