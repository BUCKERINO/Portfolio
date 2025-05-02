<script setup lang="ts">
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
    <div class="modal-backdrop" @click="$emit('close')">
        <div class="modal doodle-dream-modal" @click.stop>
            <button class="close-button" @click="$emit('close')">×</button>
            <h2>{{ project.title }} (Custom Doodle Dream)</h2>
            <img :src="project.backgroundImage" alt="Project Image" class="modal-image" />
            <p>{{ project.description }}</p>
            <p>Special feature: Team-based project!</p>
            <div class="info-cards">
                <span v-for="(card, index) in project.infoCards" :key="index" class="info-card">
                    {{ card.text }} ({{ card.cardType }})
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal {
    background: linear-gradient(135deg, #f0f4ff, #d0e6ff);
    border-radius: 1rem;
    padding: 2rem;
    max-width: 600px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #333;
}

.modal-image {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin: 1rem 0;
}

h2 {
    font-size: 1.8rem;
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