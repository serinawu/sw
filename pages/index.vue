<script setup>
import AppHeader from '@/components/AppHeader.vue'
import Hero from '@/components/Hero.vue'
import Experience from '@/components/Experience.vue'
import Projects from '@/components/Projects.vue'
import TechStack from '@/components/TechStack.vue'
import AppFooter from '@/components/AppFooter.vue'
import {ref, onMounted, onUnmounted } from "vue"

const sections = ["hero", "experience", "projects", "techStack"];
const activeSection = ref("");

const handleScroll = () => {
  const scrollPosition = window.scrollY + 64;
  let currentSection = "";
  
  sections.forEach((id) => {
    const section = document.getElementById(id);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      if(id === "hero" && scrollPosition < 50){
        currentSection = "hero";
      } 
      else if (scrollPosition >= sectionTop) {
        currentSection = id;
      }
    }
  });
  
  activeSection.value = currentSection;
};

onMounted(() => {
  handleScroll();
  setTimeout(() => {
    handleScroll();
  }, 100);
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

provide("activeSection", activeSection);
</script>

<template>
  <div class="all-content mt-header">
    <AppHeader/>
    <Hero/>
    <Experience/>
    <Projects/>
    <TechStack/>
    <AppFooter/>
  </div>
</template>

<style lang="postcss" scoped>
.all-content{
  font-family: 'Noto Sans Tc', sans-serif;
}
</style>
