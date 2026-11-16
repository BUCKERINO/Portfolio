<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import WelcomeView from './views/WelcomeView.vue';
import ProjectsView from './views/ProjectsView.vue';
import AboutView from './views/AboutView.vue';
import ContactView from './views/ContactView.vue';
</script>

<template>
  <NavBar />
  <!-- Phones/tablets: content below the 4rem top bar. desktop: content right of the 13rem sidebar. -->
  <main class="min-h-screen px-4 pt-24 sm:px-8 desktop:pl-[19rem] desktop:pr-12 desktop:pt-16 desktop:xl:pl-[23rem] desktop:xl:pt-28">
    <div class="max-w-[90rem]">
      <WelcomeView />
      <ProjectsView />
      <AboutView />
      <ContactView />
    </div>
  </main>
</template>
