<script setup lang="ts">
import BaseModal from './BaseModal.vue';
import type { Info } from '@/assets/Types/ProjectTypes.ts';

interface Project {
    infoCards: { text: string; cardType: string }[];
    title: string;
    info: Info;
    gameDescription: string
    workDescription: string
    backgroundImage: string;
}

defineProps<{
    project: Project;
}>();

defineEmits<{
    (e: 'close'): void;
}>();
</script>

<template>
    <BaseModal 
        :bg-image="project.backgroundImage"
        :title="project.title"
        :info="project.info"
        :game-description="project.gameDescription"
        :work-description="project.workDescription" 
        @close = "$emit('close')">

        <div class="image-container">
            <img class="image" src="../../assets/DoodleDream/GameGif.gif" alt="Doodle Dream gameplay"/>
        </div>
        <div class="image-container">
            <div class="gif-wrapper">
                <img src="../../assets/DoodleDream/GunUIAndSOs.gif" alt="Doodle Dream gameplay"/>
            </div>

            <div class="gif-wrapper">
                <img src="../../assets/DoodleDream/BreakableDoor.gif" alt="Breakable door mechanic"/>
            </div>
        </div>
        <a
            class="link-button"
            href="https://www.youtube.com/watch?v=Sk_1crBV_P0"
            target="_blank"
            aria-label="Watch Doodle Dream on YouTube"
        >        
            <v-icon name="bi-youtube" scale="2.0" />
            <p>Watch game trailer</p>
        </a>
    </BaseModal>
</template>

<style scoped>
.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    width: 100%;
    margin: 1rem auto;
}

.image {
    border-radius: 0.75rem;
}

.gif-wrapper {
    max-width: 390px;
    max-height: 200px;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
    border-radius: 0.75rem;
}

.gif-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

@media (max-width: 650px) {
    .image-container {
        flex-direction: column;
    }

    .gif-wrapper {
        width: min(100%, 300px);
    }
}

.link-button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: fit-content;
    margin: 1rem auto;
    padding: 0.5rem;

    color: white;
    background: #ff0033;
    border-radius: 0.75rem;

    cursor: pointer;
    text-decoration: none;
    transition: transform 0.2s ease, background 0.2s ease;
}

.link-button:hover {
    background: #cc0029;
    transform: scale(1.08);
}
</style>