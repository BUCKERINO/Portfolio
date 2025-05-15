<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

defineEmits<{
    (e: 'close'): void;
    (e: 'open'): void;
}>();

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
        <div class="modal" @click.stop>
            <button class="close-button" @click="$emit('close')">
                <v-icon name="io-close" scale="3.0" />
            </button>
            <div class="modal-content">
                <slot />
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
    align-items: flex-start;
    z-index: 1000;
    overflow-y: scroll;
}

.modal {
    background: linear-gradient(-135deg, #081536, #022c5c);
    border-radius: 1rem;
    padding: 2rem;
    width: 90vw;
    max-width: 1400px;
    position: relative;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin: 2rem 0;
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
}

.close-button:hover {
    color: #5c5c5c;
}

.modal-content {
    padding: 1rem;
}
</style>