<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';
import ProjectCard from '@/components/ProjectCard.vue';
import DoodlePoster from '@/assets/DoodleDream/doodle_dream_poster.png'
import PlaceHolder from '@/assets/img/OopsiDoopsy.png'

// Async import modal components
const DoodleDreamModal = defineAsyncComponent(() => import('@/components/modals/DoodleModal.vue'));
const SpaceAdventureModal = defineAsyncComponent(() => import('@/components/modals/SpaceAdventureModal.vue'));

interface InfoCard {
    text: string;
    cardType: string;
}

interface Project {
    infoCards: InfoCard[];
    title: string;
    description: string;
    backgroundImage: string;
    modalComponent: any; // Vue component
}

const projects: Project[] = [
    {
        infoCards: [{ text: 'team', cardType: 'team' }],
        title: 'Doodle Dream: School Invasion',
        description: 'Unity C#, Juni 2024',
        backgroundImage: DoodlePoster,
        modalComponent: DoodleDreamModal
    },
    {
        infoCards: [{ text: 'team', cardType: 'team' }],
        title: 'Space Adventure',
        description: 'Godot, August 2024',
        backgroundImage: PlaceHolder,
        modalComponent: SpaceAdventureModal
    }
];

const selectedProject = ref<Project | null>(null);

const openModal = (project: Project) => {
    selectedProject.value = project;
};

const closeModal = () => {
    selectedProject.value = null;
};
</script>

<template>
    <h2>PROJECTS</h2>
    <ProjectCard v-for="(project, index) in projects" :key="index" :info-cards="project.infoCards"
        :title="project.title" :description="project.description" :background-image="project.backgroundImage"
        @click="openModal(project)" />
    <component v-if="selectedProject" :is="selectedProject.modalComponent" :project="selectedProject"
        @close="closeModal" />
</template>

<style scoped>
h2 {
    font-weight: bold;
    font-size: xx-large;
    letter-spacing: 0px;
    padding-bottom: 2rem;
}
</style>