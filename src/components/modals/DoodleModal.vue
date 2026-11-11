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
    </BaseModal>
</template>

<style scoped>

</style>