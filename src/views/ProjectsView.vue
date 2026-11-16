<script setup lang="ts">
import { ref, computed, defineAsyncComponent } from 'vue';
import type { Project } from '@/assets/Types/ProjectTypes';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard.vue';
import SmallProjectCard from '@/components/SmallProjectCard.vue';
import Devider from '@/components/Devider.vue';

// Generic modal is lazy-loaded so it isn't in the initial bundle
const BaseModal = defineAsyncComponent(() => import('@/components/modals/BaseModal.vue'));

const largeProjects = projects.filter((p) => p.size === 'large');
const smallProjects = projects.filter((p) => p.size === 'small');

const selectedProject = ref<Project | null>(null);
const modalComponent = computed(() => selectedProject.value?.modalComponent ?? BaseModal);
</script>

<template>
    <div class="w-full" id="projects">
        <Devider />
        <h2 class="font-bold text-4xl tracking-tight pb-8">PROJECTS</h2>
        <div
            class="flex flex-wrap gap-12 justify-between w-[70rem] box-border ml-12 max-md:flex-col max-md:gap-8 max-md:items-center max-md:ml-0 max-md:w-full">
            <ProjectCard v-for="project in largeProjects" :key="project.id" :info-cards="project.infoCards"
                :title="project.title" :info="project.info" :background-image="project.backgroundImage"
                @click="selectedProject = project" class="flex-[0_0_47%] max-md:flex-[0_0_80%] project-card" />
        </div>
        <div
            class="flex flex-wrap gap-12 justify-between w-[70rem] box-border ml-12 max-md:flex-col py-10 max-md:gap-8 max-md:items-center max-md:ml-0 max-md:w-full mt-12">
            <SmallProjectCard v-for="project in smallProjects" :key="project.id" :title="project.title"
                :description="project.workDescription" :background-image="project.backgroundImage"
                @click="selectedProject = project" class="flex-[0_0_30%] max-md:flex-[0_0_80%] project-card" />
        </div>
    </div>
    <Transition name="modal">
        <component v-if="selectedProject" :is="modalComponent" :project="selectedProject"
            @close="selectedProject = null" />
    </Transition>
</template>

<style scoped>
/* Project card transition styles */
.project-card {
    transition: transform 0.3s ease;
}

.project-card:hover {
    transform: scale(1.05);
    /* Increase size by 5% on hover */
}

/* Modal transition styles */
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-to,
.modal-leave-from {
    opacity: 1;
}
</style>
