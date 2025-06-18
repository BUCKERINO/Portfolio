<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import WelcomeView from './views/WelcomeView.vue';
import ProjectsView from './views/ProjectsView.vue';
import AboutView from './views/AboutView.vue';
</script>

<template>
  <NavBar />
  <div class="pl-[13rem] box-border">
    <div class="w-full min-h-screen">
      <WelcomeView/>
      <ProjectsView />
      <AboutView />
    </div>
  </div>
</template>

<style scoped>
/* Tailwind CSS is applied directly in the template, no custom CSS needed */
</style>