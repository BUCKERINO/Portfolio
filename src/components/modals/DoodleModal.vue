<script setup lang="ts">
import BaseModal from './BaseModal.vue';

interface Project {
    infoCards: { text: string; cardType: string }[];
    title: string;
    description: string;
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
    <BaseModal @close="$emit('close')">
        <h2>{{ project.title }}</h2>
        <img :src="project.backgroundImage" alt="Project Image" class="modal-image" />
        <p>{{ project.description }}</p>
        <p>Special feature: Team-based project!</p>
        <div class="info-cards">
            <span v-for="(card, index) in project.infoCards" :key="index" class="info-card">
                {{ card.text }} ({{ card.cardType }})
            </span>
        </div>
    </BaseModal>
</template>

<style scoped>
.modal-image {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin: 1rem 0;
}

h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
}

p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1rem;
    text-align: center;
}

.info-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
}

.info-card {
    background: #d0e6ff;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.9rem;
}
</style>