<script setup>
import { ref } from 'vue'
import { Mail, Copy, Linkedin, ArrowUpRight, Phone } from 'lucide-vue-next'

const props = defineProps({
  profile: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['copy'])
const imgSrc = ref(props.profile.avatarUrl)

const handleImgError = () => {
  imgSrc.value = 'https://placehold.co/300x300/1e293b/ffffff?text=Yosa'
}
</script>

<template>
  <section id="about" class="space-y-8">
    <div
      class="flex flex-col items-center text-center space-y-5 max-w-3xl mx-auto"
    >
      <!-- Profile Photo -->
      <div class="relative group">
        <div
          class="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-brand-500 to-emerald-400 shadow-lg"
        >
          <img
            :src="imgSrc"
            :alt="profile.name"
            @error="handleImgError"
            class="w-full h-full object-cover rounded-full bg-slate-900 border-2 border-white dark:border-slate-950"
          />
        </div>
      </div>

      <div class="space-y-3">
        <h1
          class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
        >
          {{ profile.name }}
        </h1>
        <p class="text-xl sm:text-2xl font-medium text-brand-600 dark:text-brand-500">
          {{ profile.role }}
        </p>
      </div>

      <p
        class="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed pt-1"
      >
        {{ profile.bio }}
      </p>

      <!-- Quick Links & Copy Actions -->
      <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
        <button
          @click="emit('copy', profile.email, 'Email address copied!')"
          class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-medium text-sm shadow-sm transition-all cursor-pointer"
        >
          <Mail class="w-4 h-4" />
          <span>{{ profile.email }}</span>
          <Copy class="w-3.5 h-3.5 opacity-75 ml-1" />
        </button>

        <a
          :href="profile.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-200 font-medium text-sm shadow-sm transition-all"
        >
          <Linkedin class="w-4 h-4 text-brand-600" />
          <span>LinkedIn</span>
          <ArrowUpRight class="w-3.5 h-3.5 opacity-60" />
        </a>

        <button
          @click="emit('copy', profile.phone, 'Phone number copied!')"
          class="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-200 font-medium text-sm shadow-sm transition-all cursor-pointer"
        >
          <Phone class="w-4 h-4 text-slate-500" />
          <span>{{ profile.phone }}</span>
        </button>
      </div>
    </div>
  </section>
</template>