<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue';
import ProjectInfoTable from '../ProjectInfoTable.vue';
import type { Info } from '@/assets/Types/ProjectTypes';

const props = defineProps<{
    bgImage?: string;
    title?: string;
    info?: Info;
    gameDescription?: string;
    workDescription?: string;
}>();

defineEmits<{
    (e: 'close'): void;
    (e: 'open'): void;
}>();

const modalBackground = computed(() => ({
        '--modal-bg': props.bgImage
        ? `url("${props.bgImage}")`
        : 'none'
}));

// Prevent background scrolling when modal is open
onMounted(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';
});

onUnmounted(() => {
    document.body.style.overflow = '';
    document.body.style.height = '';
});
</script>

<template>
    <div class="modal-backdrop" @click="$emit('close')">
        <div  class="modal" :class="{ 'has-background': !!props.bgImage }" :style="modalBackground" @click.stop>
            <button class="close-button" @click="$emit('close')">
                <v-icon name="io-close" scale="3.0" />
            </button>
            <div class="modal-content">
                <h1>{{ props.title }}</h1>
                <h2>About the Game</h2>
                <p>{{ props.gameDescription }}</p>
                <h2>What I did</h2>
                <p>{{ props.workDescription }}</p>
                <ProjectInfoTable
                    v-if="info"
                    :info="info"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal-backdrop {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    z-index: 1000;
    overflow-y: scroll;
}

.modal {
    background: linear-gradient(-135deg, #081536, #022c5c);
    border-radius: 1rem;
    overflow: hidden;
    isolation: isolate;
    padding: 0;
    width: 90vw;
    max-width: 1400px;
    position: relative;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin: 2rem 0;
}

/* Blurred background */
.modal.has-background::before {
    content: "";
    position: absolute;
    inset: -20px;
    background-image: var(--modal-bg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(30px);
    z-index: -2;
    pointer-events: none;
}

/* Dark overlay for readability */
.modal.has-background::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
        rgba(0, 0, 0, 0.55),
        rgba(0, 0, 0, 0.85)
    );
    z-index: -1;
    pointer-events: none;
}

.close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #d1d1d1;
    transition: color 0.1s;
    z-index: 10;
}

.close-button:hover {
    color: #5c5c5c;
}

.modal-content {
    position: relative;
    z-index: 1;
    padding: 1rem;

    h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-align: center;
    text-transform: uppercase;
}

h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
    text-transform: uppercase;
}

p {
    font-size: 1.5rem;
    color: #ffffff;
    padding: 1rem 7rem 1rem 7rem;
    margin-bottom: 1rem;
    text-align: center;
}
}
</style>