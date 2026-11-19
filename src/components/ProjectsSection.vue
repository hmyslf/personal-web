<script setup>
import { ref, computed } from 'vue'
import { Lock, ExternalLink, Maximize2, Check, ArrowUpRight } from 'lucide-vue-next'

const props = defineProps({
  projects: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['select'])

const featuredImageFailed = ref(false)
const featuredProject = computed(() => props.projects[0])
const secondaryProjects = computed(() => props.projects.slice(1))
</script>

<template>
  <section id="projects" class="space-y-8">
    <div class="space-y-2">
      <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">
        Featured Work & Case Studies
      </h2>
      <p class="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
        Click any project to inspect architecture, screenshots, and production metrics.
      </p>
    </div>

    <!-- Featured Showcase Card: Crystal of the Sea -->
    <div
      class="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 overflow-hidden shadow-sm hover:shadow-md transition-all"
    >
      <div class="grid grid-cols-1 lg:grid-cols-12">
        <!-- Live Screenshot Preview Column -->
        <div
          class="lg:col-span-7 bg-slate-100 dark:bg-slate-950 p-4 sm:p-6 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-200/80 dark:border-slate-800/80"
        >
          <div
            class="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg bg-white dark:bg-slate-900 group"
          >
            <!-- Browser Bar -->
            <div
              class="px-3.5 py-2 bg-slate-200/90 dark:bg-slate-800 flex items-center justify-between border-b border-slate-300/60 dark:border-slate-700/60"
            >
              <div class="flex items-center gap-1.5">
                <span class="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              </div>
              <a
                :href="featuredProject.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white dark:bg-slate-900 text-xs font-mono text-slate-600 dark:text-slate-300 hover:text-brand-600 transition-colors"
              >
                <Lock class="w-3 h-3 text-emerald-500" />
                <span>{{ featuredProject.liveLabel }}</span>
              </a>
              <a
                :href="featuredProject.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit crystalsea.id"
                class="text-slate-500 hover:text-brand-600 dark:hover:text-brand-400"
              >
                <ExternalLink class="w-3.5 h-3.5" />
              </a>
            </div>

            <!-- Screenshot Image with Fallback -->
            <div
              @click="emit('select', featuredProject)"
              class="relative aspect-[16/10] w-full overflow-hidden cursor-pointer bg-sky-950"
            >
              <img
                v-if="!featuredImageFailed"
                :src="featuredProject.screenshotUrl"
                alt="Crystal of the Sea (crystalsea.id) storefront screenshot"
                @error="featuredImageFailed = true"
                class="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div
                v-else
                class="w-full h-full p-5 flex flex-col justify-between bg-gradient-to-br from-sky-900 via-cyan-900 to-slate-900 text-white"
              >
                <div class="flex items-center justify-between">
                  <span class="font-bold tracking-tight text-base text-cyan-200">
                    CRYSTAL OF THE SEA
                  </span>
                  <span
                    class="px-2.5 py-0.5 rounded-full text-[11px] bg-emerald-500/20 text-emerald-300 border border-emerald-400/30"
                  >
                    Live Production
                  </span>
                </div>
                <div class="space-y-1.5 my-auto">
                  <div
                    class="text-xs uppercase tracking-widest text-cyan-300 font-mono"
                  >
                    DTC E-Commerce & Admin CMS
                  </div>
                  <div class="text-xl sm:text-2xl font-bold leading-snug">
                    Healthy Seafood Nutrition, Delivered Nationwide
                  </div>
                  <p class="text-xs text-sky-100/80 max-w-md">
                    Custom storefront, PostgreSQL B-tree product search, and
                    automated Xendit payment reconciliation.
                  </p>
                </div>
                <div class="grid grid-cols-3 gap-2 pt-2">
                  <div
                    v-for="metric in featuredProject.metrics"
                    :key="metric.label"
                    class="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm"
                  >
                    <div class="font-mono font-bold text-sm text-cyan-300">
                      {{ metric.value }}
                    </div>
                    <div class="text-[11px] text-sky-100">
                      {{ metric.label }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Hover Overlay -->
              <div
                class="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                <span
                  class="px-4 py-2 rounded-xl bg-white text-slate-900 font-medium text-xs sm:text-sm shadow-lg flex items-center gap-2"
                >
                  <Maximize2 class="w-4 h-4" />
                  <span>Inspect Architecture & Case Study</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Details Column -->
        <div
          class="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6"
        >
          <div class="space-y-3">
            <div class="flex items-center justify-between gap-2">
              <span
                class="px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-500/10 text-brand-600 dark:text-brand-400"
              >
                Featured Production Build
              </span>
              <span class="text-xs font-mono text-slate-500">
                {{ featuredProject.company }}
              </span>
            </div>
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white">
              {{ featuredProject.title }}
            </h3>
            <p
              class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              Architected and shipped the complete direct-to-consumer e-commerce
              platform and custom administration CMS from scratch—scaling
              digital revenue by
              <strong class="text-slate-900 dark:text-white"
                >40% within 90 days</strong
              >.
            </p>
            <ul
              class="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 pt-1"
            >
              <li class="flex items-start gap-2">
                <Check class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  Normalized PostgreSQL schema with B-tree composite indexes &
                  cursor pagination.
                </span>
              </li>
              <li class="flex items-start gap-2">
                <Check class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  99.9% automated reconciliation via idempotent Xendit payment
                  webhooks.
                </span>
              </li>
            </ul>
          </div>

          <div class="space-y-4">
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tech in featuredProject.stack"
                :key="tech"
                class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-mono font-medium"
              >
                {{ tech }}
              </span>
            </div>

            <div class="flex flex-wrap items-center gap-3 pt-1">
              <a
                :href="featuredProject.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs sm:text-sm font-medium transition-colors"
              >
                <span>Visit {{ featuredProject.liveLabel }}</span>
                <ExternalLink class="w-3.5 h-3.5" />
              </a>
              <button
                @click="emit('select', featuredProject)"
                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
              >
                <span>Case Study</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Secondary Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div
        v-for="project in secondaryProjects"
        :key="project.id"
        @click="emit('select', project)"
        class="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 hover:border-brand-500/50 transition-all cursor-pointer flex flex-col justify-between space-y-5 shadow-sm hover:shadow-md"
      >
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span
              class="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              {{ project.category }}
            </span>
            <ArrowUpRight
              class="w-4 h-4 text-slate-400 group-hover:text-brand-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </div>
          <h3
            class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors"
          >
            {{ project.title }}
          </h3>
          <p
            class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            {{ project.shortDescription }}
          </p>
        </div>

        <div
          class="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800/80"
        >
          <div class="flex items-center justify-between text-xs font-mono">
            <span class="text-emerald-600 dark:text-emerald-400 font-semibold">
              {{ project.keyMetric }}
            </span>
            <span class="text-slate-400">{{ project.company }}</span>
          </div>
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="tech in project.stack.slice(0, 3)"
              :key="tech"
              class="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-[11px] font-mono text-slate-600 dark:text-slate-300"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>