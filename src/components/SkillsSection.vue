<script setup>
import { ref } from 'vue'
import { Search, X, Database, Layout, ShieldCheck, Zap } from 'lucide-vue-next'

defineProps({
  skillGroups: {
    type: Array,
    required: true
  }
})

const skillQuery = ref('')

const iconMap = {
  database: Database,
  layout: Layout,
  'shield-check': ShieldCheck,
  zap: Zap
}

const isSkillHighlighted = (skill) => {
  if (!skillQuery.value.trim()) return false
  return skill.toLowerCase().includes(skillQuery.value.trim().toLowerCase())
}
</script>

<template>
  <section id="skills" class="space-y-8">
    <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
      <div class="space-y-2">
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">
          Technical Expertise
        </h2>
        <p class="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
          Filter or click any skill badge to highlight matching competencies.
        </p>
      </div>

      <!-- Live Skill Filter Input -->
      <div class="relative w-full sm:w-64">
        <Search
          class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"
        />
        <input
          v-model="skillQuery"
          type="text"
          placeholder="Filter stack (e.g. Postgres, Go)..."
          class="w-full pl-9 pr-8 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:border-brand-500 transition-colors"
        />
        <button
          v-if="skillQuery"
          @click="skillQuery = ''"
          class="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
        >
          <X class="w-3.5 h-3.5" />
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="group in skillGroups"
        :key="group.title"
        class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 space-y-4 shadow-sm"
      >
        <div class="flex items-center gap-3">
          <div :class="group.iconBg" class="p-2.5 rounded-xl">
            <component :is="iconMap[group.icon]" class="w-5 h-5" />
          </div>
          <h3 class="font-semibold text-lg">{{ group.title }}</h3>
        </div>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="skill in group.skills"
            :key="skill"
            @click="skillQuery = skillQuery === skill ? '' : skill"
            :class="[
              isSkillHighlighted(skill)
                ? 'bg-brand-600 text-white ring-2 ring-brand-500/30'
                : skillQuery && !isSkillHighlighted(skill)
                  ? 'bg-slate-100/50 dark:bg-slate-800/40 text-slate-400 dark:text-slate-600'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
            ]"
            class="px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer"
          >
            {{ skill }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>