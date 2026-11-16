<script setup lang="ts">
defineProps<{
    title: string;
    description: string;
    backgroundImage: string;
}>();

defineEmits<{
    (e: 'click'): void;
}>();
</script>

<template>
    <div class="container" @click="$emit('click')">
        <div class="background-wrapper" :style="{ backgroundImage: `url(${backgroundImage})` }">
            <div class="shadow-container"></div>
        </div>
        <div class="footer">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<style scoped>
/* Fixed shape that scales with the card's width: 16:10 (same as the large cards) on
   phones/tablets, a more compact 4:3 in the desktop layout (see bottom of file).
   Everything inside is sized in cqi (1cqi = 1% of the card width), so it scales as one piece. */
.container {
    box-shadow: 0px 0px 15px 2px rgba(204, 204, 204, 0.823);
    width: 100%;
    aspect-ratio: 16 / 10;
    container-type: inline-size;
    display: flex;
    flex-direction: column;
    border-radius: 1.5rem;
    cursor: pointer;
}

.background-wrapper {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-sizing: border-box;
    flex: 1 1 auto;
    min-height: 0;
    border-radius: 1rem;
    position: relative;
    z-index: 1;
    overflow: hidden;
}

.background-wrapper::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
}

.shadow-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    transition: box-shadow 0.3s ease;
    border-radius: inherit;
    position: relative;
    z-index: 3;
}

.shadow-container:hover {
    box-shadow: inset 0 0 40px 10px rgba(0, 0, 0, 0.576);
    border-radius: inherit;
}

.footer {
    /* Pulled up underneath the image so the rounded image overlaps it */
    flex: 0 0 auto;
    margin-top: -4cqi;
    padding: 6cqi 3cqi 3cqi;
    background: white;
    border-radius: 1rem;
    position: relative;
    z-index: 0;
}

h3 {
    text-align: center;
    color: black;
    font-weight: bold;
    font-size: 4.2cqi;
    padding: 0;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

p {
    text-align: center;
    margin-top: 0.25rem;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: rgb(112, 112, 112);
    font-size: 2.8cqi;
}

/* Desktop layout (keep in sync with src/breakpoints.ts) */
@media (min-width: 1367px), (min-width: 1024px) and (hover: hover) {
    .container {
        aspect-ratio: 4 / 3;
    }

    h3 {
        font-size: 6cqi;
    }

    p {
        font-size: 4cqi;
    }
}
</style>
