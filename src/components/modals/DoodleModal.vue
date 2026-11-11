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
            <img src=""
        </div>
        <a
            class="link-button"
            href="https://www.youtube.com/watch?v=Sk_1crBV_P0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch Doodle Dream on YouTube"
        >
            <v-icon name="bi-youtube" scale="2.0" />
            <p>Watch game trailer</p>
        </a>
    </BaseModal>
</template>

<style scoped>
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