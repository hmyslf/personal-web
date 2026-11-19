<script setup>
import { Mail, Linkedin } from 'lucide-vue-next'

defineProps({
  profile: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['copy'])
</script>

<template>
  <section
    id="contact"
    class="p-8 sm:p-12 rounded-3xl bg-slate-900 dark:bg-slate-900 text-white border border-slate-800 text-center space-y-6 relative overflow-hidden"
  >
    <div class="max-w-2xl mx-auto space-y-3 relative z-10">
      <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">
        Let's build fast, resilient software together.
      </h2>
      <p class="text-slate-400 text-sm sm:text-base">
        Looking for a senior full-stack engineer who owns features end-to-end?
        Reach out directly via email or LinkedIn.
      </p>
    </div>

    <div class="flex flex-wrap justify-center gap-4 pt-2 relative z-10">
      <button
        @click="emit('copy', profile.email, 'Email address copied!')"
        class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-medium text-sm transition-colors cursor-pointer"
      >
        <Mail class="w-4 h-4" />
        <span>Copy Email: {{ profile.email }}</span>
      </button>
      <a
        :href="profile.linkedin"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm border border-slate-700 transition-colors"
      >
        <Linkedin class="w-4 h-4" />
        <span>Connect on LinkedIn</span>
      </a>
    </div>
  </section>
</template>