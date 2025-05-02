<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import HomeView from './views/HomeView.vue';
import ProjectsView from './views/ProjectsView.vue';
</script>

<template>
  <NavBar />
  <div class="page">
    <HomeView />
    <ProjectsView />
  </div>
</template>

<style scoped>
.page {
  padding-left: 10rem;
}
</style>
