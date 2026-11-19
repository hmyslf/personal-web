<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { CheckCircle2, Moon, Sun } from 'lucide-vue-next'
import {
  profileData,
  projectsData,
  skillGroupsData,
  experiencesData
} from './data/portfolioData.js'

import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ProjectModal from './components/ProjectModal.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import EducationSection from './components/EducationSection.vue'
import ContactSection from './components/ContactSection.vue'

const currentYear = new Date().getFullYear()
const activeModalProject = ref(null)
const toast = ref({ visible: false, message: '' })
let toastTimer = null

const initTheme = () => {
  const htmlEl = document.documentElement
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    htmlEl.classList.add('dark')
  } else {
    htmlEl.classList.remove('dark')
  }
}

const toggleTheme = () => {
  const htmlEl = document.documentElement
  htmlEl.classList.toggle('dark')
  localStorage.theme = htmlEl.classList.contains('dark') ? 'dark' : 'light'
}

const openModal = (project) => {
  activeModalProject.value = project
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  activeModalProject.value = null
  document.body.style.overflow = ''
}

const showToast = (message) => {
  toast.value = { visible: true, message }
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => {
    toast.value.visible = false
  }, 2800)
}

const copyText = async (text, message) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      showToast(message)
      return
    }
    const textArea = document.createElement('textarea')
    textArea.value = text
    textArea.style.position = 'fixed'
    textArea.style.left = '-9999px'
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    showToast(message)
  } catch {
    showToast('Unable to copy automatically')
  }
}

const handleKeydown = (e) => {
  if (e.key === 'Escape' && activeModalProject.value) {
    closeModal()
  }
}

onMounted(() => {
  initTheme()
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div>
    <!-- Toast Notification -->
    <div
      :class="[
        toast.visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      ]"
      class="fixed bottom-6 right-6 z-50 transform transition-all duration-300 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-3 rounded-xl shadow-lg flex items-center gap-2 text-sm font-medium pointer-events-none"
    >
      <CheckCircle2 class="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
      <span>{{ toast.message }}</span>
    </div>

    <!-- Case Study Modal -->
    <ProjectModal :project="activeModalProject" @close="closeModal" />

    <!-- Floating Dark Mode Toggle -->
    <button
      @click="toggleTheme"
      aria-label="Toggle Dark Mode"
      class="fixed top-5 right-5 z-40 p-3 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 shadow-lg hover:scale-105 transition-all cursor-pointer"
    >
      <Moon class="w-5 h-5 hidden dark:block" />
      <Sun class="w-5 h-5 block dark:hidden" />
    </button>

    <main
      class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-20 space-y-24"
    >
      <HeroSection :profile="profileData" @copy="copyText" />

      <ProjectsSection :projects="projectsData" @select="openModal" />

      <SkillsSection :skill-groups="skillGroupsData" />

      <ExperienceSection :experiences="experiencesData" />

      <EducationSection />

      <ContactSection :profile="profileData" @copy="copyText" />
    </main>

    <!-- Footer -->
    <footer
      class="border-t border-slate-200/70 dark:border-slate-800/70 py-8 text-center text-xs sm:text-sm text-slate-500 dark:text-slate-400"
    >
      <div
        class="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p>
          &copy; {{ currentYear }} {{ profileData.name }}. Built with Vue 3 &
          Tailwind CSS.
        </p>
        <p class="font-mono text-xs">{{ profileData.location }}</p>
      </div>
    </footer>
  </div>
</template>