<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue';
import ProjectInfoTable from '../ProjectInfoTable.vue';
import type { Project } from '@/assets/Types/ProjectTypes';

const props = defineProps<{
    project: Project;
}>();

const emit = defineEmits<{
    (e: 'close'): void;
}>();

const modalBackground = computed(() => ({
    '--modal-bg': `url("${props.project.backgroundImage}")`,
}));

// Only allow http(s) links so project data can never produce a `javascript:` URL
const safeLinks = computed(() =>
    (props.project.links ?? []).filter((link) => {
        try {
            return ['https:', 'http:'].includes(new URL(link.url).protocol);
        } catch {
            return false;
        }
    }),
);

const onKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') emit('close');
};

// Prevent background scrolling while the modal is open, and close on Escape
onMounted(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeydown);
});

onUnmounted(() => {
    document.body.style.overflow = '';
    window.removeEventListener('keydown', onKeydown);
});
</script>

<template>
    <div class="modal-backdrop" @click="emit('close')">
        <div class="modal" role="dialog" aria-modal="true" :aria-label="project.title" :style="modalBackground" @click.stop>
            <button class="close-button" aria-label="Close" @click="emit('close')">
                <v-icon name="io-close" scale="3.0" />
            </button>
            <div class="modal-content">
                <h1>{{ project.title }}</h1>
                <h2>About the Game</h2>
                <p>{{ project.gameDescription }}</p>
                <h2>What I did</h2>
                <p>{{ project.workDescription }}</p>

                <div v-for="(row, rowIndex) in project.media" :key="rowIndex" class="media-row">
                    <div v-for="item in row" :key="item.src" class="media-item">
                        <video v-if="item.type === 'video'" :src="item.src" :aria-label="item.alt"
                            autoplay loop muted playsinline preload="metadata" />
                        <img v-else :src="item.src" :alt="item.alt" loading="lazy" decoding="async" />
                    </div>
                </div>

                <a v-for="link in safeLinks" :key="link.url" class="link-button" :href="link.url"
                    target="_blank" rel="noopener noreferrer" :style="link.color ? { background: link.color } : undefined">
                    <v-icon v-if="link.icon" :name="link.icon" scale="2.0" />
                    <span>{{ link.label }}</span>
                </a>

                <!-- Extra project-specific content from a custom modal -->
                <slot />

                <ProjectInfoTable :info="project.info" />
                <button type="button" class="bottom-close-button" @click="emit('close')">
                    <v-icon name="io-close" scale="1.2" />
                    Close
                </button>
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

@media (max-width: 767.98px) {
    .modal {
        width: calc(100vw - 1.5rem);
        margin: 0.75rem 0;
    }

    .close-button {
        top: 0.5rem;
        right: 0.5rem;
    }

    .bottom-close-button {
        margin: 3rem auto 2rem;
    }
}

.modal-content {
    position: relative;
    z-index: 1;
    padding: 1rem;
}

/* Blurred background */
.modal::before {
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
.modal::after {
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
.bottom-close-button {
    display: block;
    margin: 5rem auto 7rem;
    padding: 0.75rem 1rem;

    background: #d0e6ff;
    color: #081536;

    border: none;
    border-radius: 0.75rem;

    font-size: 1rem;
    font-weight: 600;

    cursor: pointer;
    transition:
        background 0.2s ease,
        transform 0.2s ease;
}

.bottom-close-button:hover {
    background: #ffffff;
    transform: scale(1.05);
}

.bottom-close-button:active {
    transform: scale(0.98);
}

.bottom-close-button:focus-visible {
    outline: 2px solid white;
    outline-offset: 3px;
}

h1 {
    font-size: clamp(1.75rem, 6vw, 3rem);
    padding: 0 3rem; /* keep clear of the close button */
    overflow-wrap: break-word;
    margin-bottom: 1rem;
    text-align: center;
    text-transform: uppercase;
}

h2 {
    font-size: clamp(1.4rem, 4vw, 2rem);
    margin-bottom: 0.5rem;
    padding-top: 1rem;
    text-align: center;
    text-transform: uppercase;
}

/* Media keeps the same arrangement at every screen size and scales proportionally:
   each row is capped at 800px and shrinks with the modal, items share the row equally
   and keep a fixed 16:9 shape (so nothing jumps while videos load). */
.media-row {
    display: flex;
    justify-content: center;
    gap: 2%;
    width: 100%;
    max-width: 800px;
    margin: 1rem auto;
}

.media-item {
    flex: 1 1 0;
    min-width: 0;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border-radius: 0.75rem;
}

.media-item img,
.media-item video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.link-button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;
    margin: 1rem auto;
    padding: 0.5rem 1rem;
    color: white;
    background: #3e8cf3;
    border-radius: 0.75rem;
    text-decoration: none;
    transition: transform 0.2s ease, filter 0.2s ease;
}

.link-button:hover {
    filter: brightness(0.85);
    transform: scale(1.08);
}

p {
    font-size: 1rem;
    color: #ffffff;
    padding: 0.1rem clamp(0.5rem, 6vw, 7rem) 1rem;
    margin-bottom: 1rem;
    text-align: center;
}
</style>