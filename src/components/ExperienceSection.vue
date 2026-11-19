<script setup>
defineProps({
  experiences: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section id="experience" class="space-y-8">
    <div class="space-y-2">
      <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">
        Work Experience
      </h2>
      <p class="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
        Proven track record delivering high-throughput systems across Japan and
        Indonesia.
      </p>
    </div>

    <div
      class="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 sm:ml-4 space-y-10"
    >
      <div
        v-for="(role, index) in experiences"
        :key="role.company"
        class="relative pl-7 sm:pl-10"
      >
        <span
          :class="
            index === 0 ? 'bg-brand-600' : 'bg-slate-400 dark:bg-slate-600'
          "
          class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full ring-4 ring-slate-50 dark:ring-slate-950"
        ></span>
        <div
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2"
        >
          <div>
            <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              {{ role.title }}
            </h3>
            <div
              :class="
                index === 0
                  ? 'text-brand-600 dark:text-brand-400'
                  : 'text-slate-700 dark:text-slate-300'
              "
              class="text-sm font-medium"
            >
              {{ role.company }} &bull; {{ role.location }}
            </div>
          </div>
          <span
            class="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 w-fit"
          >
            {{ role.period }}
          </span>
        </div>
        <ul
          class="space-y-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-4 list-disc list-outside ml-4"
        >
          <li
            v-for="(bullet, bIdx) in role.bullets"
            :key="bIdx"
            v-html="bullet"
          ></li>
        </ul>
      </div>
    </div>
  </section>
</template>