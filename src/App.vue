<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import HomeView from './views/HomeView.vue';
import ProjectsView from './views/ProjectsView.vue';
</script>

<template>
  <NavBar />
  <div class="pl-[13rem] box-border">
    <div class="w-full min-h-screen">
      <HomeView />
      <ProjectsView />
    </div>
  </div>
</template>

<style scoped>
/* Tailwind CSS is applied directly in the template, no custom CSS needed */
</style>