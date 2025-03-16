<script setup lang="js">
import { inject } from "vue";
import { Icon } from '@iconify/vue'

const activeSection = inject("activeSection");
</script>

<template>
  <header class="header h-header fixed top-0 left-0 bg-white z-10 flex items-center justify-between p-4 w-full shadow-md">
    <a id="logo" href="/">
      Serina Wu
    </a>
      <nav class="flex items-center justify-center">
        <a href="#hero" class=" px-2 me-3" :class="{ 'text-cyan-500 font-bold': activeSection === 'hero' }">關於我</a>
        <a href="#experience" class=" px-2 me-3" :class="{ 'text-cyan-500 font-bold': activeSection === 'experience' }">經歷</a>
        <a href="#projects" class=" px-2 me-3" :class="{ 'text-cyan-500 font-bold': activeSection === 'projects' }">作品集</a>
        <a href="#techStack" class=" px-2 me-3" :class="{ 'text-cyan-500 font-bold': activeSection === 'techStack' }">技術亮點</a>
      </nav>
    <button class="flex items-center justify-center"><Icon icon="line-md:sun-rising-filled-loop" width="24" height="24" class="text-slate-500" /></button>
  </header>
</template>

<style scoped lang="postcss">

</style>