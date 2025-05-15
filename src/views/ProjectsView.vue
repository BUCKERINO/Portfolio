<script setup lang="ts">
import { ref, defineAsyncComponent, onMounted, onUnmounted } from 'vue';
import ProjectCard from '@/components/ProjectCard.vue';
import DoodlePoster from '@/assets/DoodleDream/doodle_dream_poster.png';
import PlaceHolder from '@/assets/img/OopsiDoopsy.png';

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
    modalComponent: any;
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
    },
    {
        infoCards: [{ text: 'team', cardType: 'team' }],
        title: 'Space Adventure',
        description: 'Godot, August 2024',
        backgroundImage: PlaceHolder,
        modalComponent: SpaceAdventureModal
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
    document.body.style.overflow = 'hidden';
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const closeModal = () => {
    selectedProject.value = null;
    document.body.style.overflow = 'auto';
};

onMounted(() => {
    if (selectedProject.value) {
        document.body.style.overflow = 'hidden';
    }
});

onUnmounted(() => {
    document.body.style.overflow = 'auto';
});
</script>

<template>
    <div v-if="!selectedProject" class="w-full" id="projects">
        <h2 class="font-bold text-4xl tracking-tight pb-8">PROJECTS</h2>
        <div
            class="flex flex-wrap gap-12 justify-between w-[70rem] box-border ml-12 max-md:flex-col max-md:gap-8 max-md:items-center max-md:ml-0 max-md:w-full">
            <ProjectCard v-for="(project, index) in projects" :key="index" :info-cards="project.infoCards"
                :title="project.title" :description="project.description" :background-image="project.backgroundImage"
                @click="openModal(project)" class="flex-[0_0_47%] max-md:flex-[0_0_80%]" />
        </div>
    </div>
    <Transition name="modal">
        <div v-if="selectedProject"
            class="fixed inset-0 w-screen h-screen bg-black/50 flex justify-center items-center z-[1000] p-8 max-md:p-4">
            <component :is="selectedProject.modalComponent" :project="selectedProject" @close="closeModal" />
        </div>
    </Transition>
</template>

<style scoped>
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