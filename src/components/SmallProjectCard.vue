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
.container {
    box-shadow: 0px 0px 15px 2px rgba(204, 204, 204, 0.823);
    height: 28vh;
    border-radius: 1.5rem;
    cursor: pointer;
}

.background-wrapper {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-sizing: border-box;
    height: 20vh;
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
    min-height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
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
    padding-top: 6rem;
    background: white;
    height: 18vh;
    border-radius: 1rem;
    position: relative;
    z-index: 0;
    top: -10vh;
}


h3 {
    text-align: center;
    color: black;
    font-weight: bold;
    font-size: x-large;
    padding: 0;
    margin: 0;
}

p {
    text-align: center;
    margin: -0.5rem;
    color: rgb(112, 112, 112);
    font-size: medium;
}
</style>
