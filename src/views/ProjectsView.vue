```vue
<script setup lang="ts">
import { ref, defineAsyncComponent, onMounted, onUnmounted } from 'vue';
import { CardType, type Project } from '@/assets/Types/ProjectTypes';
import ProjectCard from '@/components/ProjectCard.vue';
import DoodlePoster from '@/assets/DoodleDream/doodle_dream_poster.png';
import PlaceHolder from '@/assets/img/OopsiDoopsy.png';
import Devider from '@/components/Devider.vue';
import SmallProjectCard from '@/components/SmallProjectCard.vue';

// Async import modal components
const DoodleDreamModal = defineAsyncComponent(() => import('@/components/modals/DoodleModal.vue'));
const SpaceAdventureModal = defineAsyncComponent(() => import('@/components/modals/SpaceAdventureModal.vue'));

const largeProjects: Project[] = [
    {
        infoCards: [{ text: 'team', cardType: CardType.Team }],
        title: 'Doodle Dream: School Invasion',
        info: {engine: ['Unity 5'], language: ['C#'], programmers: ['Tycho van de Wetering', 'Leon Klasser'], artists: ['Liam Egon', 'Nien Hoekstra', 'Lucas van de Leenhorst'], date: 'June 2024'},
        gameDescription: "Doodle dream school invasion is a top-down shooter where you have to kill monsters in order to escape the school. At the beginning of the game, you get to choose which weapon you want to use to get out of the building. In order to progress, you have to defeat all the monsters in the room and shoot down the doors to enter the next room. Once you've the stairs, you'll be able to go down a floor. You can find the exit of the school on the main floor but be careful because there is a terrible monster guarding it.",
        workDescription: "My job during this project was to support the team, make components and most of the gameplay programming. I handled mostly the more complex components such as the gun system, the enemy player detection, a camera controller and a shop system. Unfortunetaly we had to remove the shop system because of time constraints. This was one of my favourite projects because of the creative flow that we had which made it fun to come up with new ideas. I also made a trailer for this game.",
        backgroundImage: DoodlePoster,
        modalComponent: DoodleDreamModal
    },
    {
        infoCards: [{ text: 'team', cardType: CardType.Team }],
        title: 'Space Adventure',
        info: {engine: ['Godot'], language: ['GDScript'], programmers: ['programmer 1', 'programmer 2'], artists: ['artist name 1', 'artist name 2'], date: 'June 2024'},
        gameDescription: "Description of the game",
        workDescription:"Description of the work",
        backgroundImage: PlaceHolder,
        modalComponent: SpaceAdventureModal
    },
    {
        infoCards: [{ text: 'team', cardType: CardType.Team }],
        title: 'Space Adventure',
        info: {engine: ['Godot'], language: ['GDScript'], programmers: ['programmer 1', 'programmer 2'], artists: ['artist name 1', 'artist name 2'], date: 'June 2024'},
        gameDescription: "Description of the game",
        workDescription:"Description of the work",
        backgroundImage: PlaceHolder,
        modalComponent: SpaceAdventureModal
    },
    {
        infoCards: [{ text: 'team', cardType: CardType.Team }],
        title: 'Space Adventure',
        info: {engine: ['Godot'], language: ['GDScript'], programmers: ['programmer 1', 'programmer 2'], artists: ['artist name 1', 'artist name 2'], date: 'June 2024'},
        gameDescription: "Description of the game",
        workDescription:"Description of the work",
        backgroundImage: PlaceHolder,
        modalComponent: SpaceAdventureModal
    },
];

const smallProjects: Project[] = [
    {
        infoCards: [{ text: 'team', cardType: CardType.Team }],
        title: 'Space Adventure',
        info: {engine: ['Godot'], language: ['GDScript'], programmers: ['programmer 1', 'programmer 2'], artists: ['artist name 1', 'artist name 2'], date: 'June 2024'},
        gameDescription: "Description of the game",
        workDescription:"Description of the work",
        backgroundImage: PlaceHolder,
        modalComponent: SpaceAdventureModal
    }, 
    {
        infoCards: [{ text: 'team', cardType: CardType.Team }],
        title: 'Space Adventure',
        info: {engine: ['Godot'], language: ['GDScript'], programmers: ['programmer 1', 'programmer 2'], artists: ['artist name 1', 'artist name 2'], date: 'June 2024'},
        gameDescription: "Description of the game",
        workDescription:"Description of the work",
        backgroundImage: PlaceHolder,
        modalComponent: SpaceAdventureModal
    }, 
    {
        infoCards: [{ text: 'team', cardType: CardType.Team }],
        title: 'Space Adventure',
        info: {engine: ['Godot'], language: ['GDScript'], programmers: ['programmer 1', 'programmer 2'], artists: ['artist name 1', 'artist name 2'], date: 'June 2024'},
        gameDescription: "Description of the game",
        workDescription:"Description of the work",
        backgroundImage: PlaceHolder,
        modalComponent: SpaceAdventureModal
    },
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
    <div class="w-full" id="projects">
        <Devider />
        <h2 class="font-bold text-4xl tracking-tight pb-8">PROJECTS</h2>
        <div
            class="flex flex-wrap gap-12 justify-between w-[70rem] box-border ml-12 max-md:flex-col max-md:gap-8 max-md:items-center max-md:ml-0 max-md:w-full">
            <ProjectCard v-for="(project, index) in largeProjects" :key="index" :info-cards="project.infoCards"
                :title="project.title" :info="project.info" :background-image="project.backgroundImage"
                @click="openModal(project)" class="flex-[0_0_47%] max-md:flex-[0_0_80%] project-card" />
        </div>
        <div
            class="flex flex-wrap gap-12 justify-between w-[70rem] box-border ml-12 max-md:flex-col py-10 max-md:gap-8 max-md:items-center max-md:ml-0 max-md:w-full mt-12">
            <SmallProjectCard v-for="(project, index) in smallProjects" :key="index" :info-cards="project.infoCards"
                :title="project.title" :description="project.workDescription" :background-image="project.backgroundImage"
                @click="openModal(project)" class="flex-[0_0_30%] max-md:flex-[0_0_80%] project-card" />
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
```