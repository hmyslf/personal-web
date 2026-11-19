<script setup>
import { GraduationCap, Globe, Clock } from 'lucide-vue-next'
</script>

<template>
  <section id="education" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <!-- Education & Certifications -->
    <div
      class="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 space-y-6 shadow-sm"
    >
      <div class="flex items-center gap-3">
        <div
          class="p-2.5 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400"
        >
          <GraduationCap class="w-5 h-5" />
        </div>
        <h2 class="text-xl font-bold">Education & Credentials</h2>
      </div>

      <div class="space-y-5">
        <div class="pb-4 border-b border-slate-100 dark:border-slate-800">
          <div class="flex justify-between items-start gap-2">
            <h3 class="font-semibold text-slate-900 dark:text-white">
              Japanese-Language Proficiency Test (JLPT) N2
            </h3>
            <span
              class="text-xs font-mono px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-medium"
            >
              Certified
            </span>
          </div>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Business-Level Japanese Proficiency
          </p>
        </div>

        <div class="pb-4 border-b border-slate-100 dark:border-slate-800">
          <div class="flex justify-between items-start gap-2">
            <h3 class="font-semibold text-slate-900 dark:text-white">
              Fullstack JavaScript Immersion Program
            </h3>
            <span class="text-xs font-mono text-slate-500">2020</span>
          </div>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Hacktiv8 Indonesia, Jakarta
          </p>
        </div>

        <div>
          <div class="flex justify-between items-start gap-2">
            <h3 class="font-semibold text-slate-900 dark:text-white">
              Bachelor of Information Systems
            </h3>
            <span class="text-xs font-mono text-slate-500">2018</span>
          </div>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Universitas Brawijaya, Malang, Indonesia
          </p>
        </div>
      </div>
    </div>

    <!-- Languages & Remote Collaboration -->
    <div
      class="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 space-y-6 shadow-sm"
    >
      <div class="flex items-center gap-3">
        <div
          class="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
        >
          <Globe class="w-5 h-5" />
        </div>
        <h2 class="text-xl font-bold">Languages & Remote Setup</h2>
      </div>

      <div class="space-y-4">
        <div class="grid grid-cols-3 gap-3">
          <div
            class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60"
          >
            <div class="font-semibold text-sm">English</div>
            <div class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Fluent / Pro
            </div>
          </div>
          <div
            class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60"
          >
            <div class="font-semibold text-sm">Japanese</div>
            <div class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              JLPT N2 Business
            </div>
          </div>
          <div
            class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60"
          >
            <div class="font-semibold text-sm">Indonesian</div>
            <div class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Native
            </div>
          </div>
        </div>

        <div
          class="p-4 rounded-xl bg-brand-50/60 dark:bg-brand-950/30 border border-brand-200/60 dark:border-brand-800/40 space-y-2"
        >
          <h3
            class="font-semibold text-sm text-brand-900 dark:text-brand-300 flex items-center gap-2"
          >
            <Clock class="w-4 h-4" />
            <span>European & Global Remote Readiness</span>
          </h3>
          <p
            class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            Based in Tokyo (UTC+9) with flexible
            <strong>4–5 hour daily overlap</strong> for London / CET teams.
            Experienced in autonomous async communication, rapid AI-assisted
            shipping, and seamless B2B / contract invoicing via
            <strong>Wise</strong>.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>