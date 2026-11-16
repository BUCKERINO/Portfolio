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
        <!-- Centered single column on phones / portrait tablets, 2 columns on landscape tablets and desktop -->
        <div class="project-grid large">
            <ProjectCard v-for="project in largeProjects" :key="project.id" :info-cards="project.infoCards"
                :title="project.title" :info="project.info" :background-image="project.backgroundImage"
                @click="selectedProject = project" class="project-card" />
        </div>
        <!-- Centered single column on phones, 2 columns on tablets, 3 on large desktop screens -->
        <div class="project-grid small py-10 mt-12">
            <SmallProjectCard v-for="project in smallProjects" :key="project.id" :title="project.title"
                :description="project.workDescription" :background-image="project.backgroundImage"
                @click="selectedProject = project" class="project-card" />
        </div>
    </div>
    <Transition name="modal">
        <component v-if="selectedProject" :is="modalComponent" :project="selectedProject"
            @close="selectedProject = null" />
    </Transition>
</template>

<style scoped>
/* Cards wrap in centered rows, so a leftover card on the last row is centered too.
   Card width = (row width - gaps) / columns. */
.project-grid {
    --gap: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--gap);
}

/* Phones & tablets (top bar layout): large and small cards look identical */
.project-grid > * {
    width: 100%;
    max-width: 36rem;
}

/* Landscape tablets (and phones in landscape): 2 cards per row */
@media (min-width: 768px) and (orientation: landscape) {
    .project-grid > * {
        max-width: none;
        width: calc((100% - var(--gap)) / 2);
    }
}

/* Desktop (keep in sync with src/breakpoints.ts) */
@media (min-width: 1367px), (min-width: 1024px) and (hover: hover) {
    .project-grid {
        --gap: 3rem;
    }

    .project-grid > * {
        max-width: none;
        width: calc((100% - var(--gap)) / 2);
    }

    /* 3 small cards per row on wide desktop screens */
    @media (min-width: 1280px) {
        .small > * {
            width: calc((100% - 2 * var(--gap)) / 3);
        }
    }
}

/* Project card transition styles */
.project-card {
    transition: transform 0.3s ease;
}

/* Only grow on devices with a real hover (not on touch screens) */
@media (hover: hover) {
    .project-card:hover {
        transform: scale(1.05);
    }
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
