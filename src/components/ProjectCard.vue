<script setup lang="ts">
import ProjectInfoCard from './ProjectInfoCard.vue';

interface InfoCard {
    text: string;
    cardType: string;
}

defineProps<{
    infoCards: InfoCard[];
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
            <div class="shadow-container">
                <div class="content">
                    <div class="info-card-container">
                        <ProjectInfoCard v-for="(card, index) in infoCards" :key="index" class="card" :text="card.text"
                            :card-type="card.cardType" />
                    </div>
                </div>
            </div>
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
    width: 55%;
    height: 40vh;
    border-radius: 1.5rem;
    cursor: pointer;
}

.background-wrapper {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-sizing: border-box;
    height: 32vh;
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

.content {
    color: white;
    text-align: center;
    padding: 2rem;
    width: 100%;
    position: relative;
    z-index: 4;
}

.info-card-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 0.5rem;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
}

.info-card-container .card {
    transform: translate(100%, -250%);
    opacity: 0;
    z-index: 1;
    transition: transform 0.25s ease, opacity 0.25s ease, z-index 0s ease 0.25s;
}

.shadow-container:hover .info-card-container .card {
    transform: translate(-20%, -250%);
    opacity: 1;
    z-index: 5;
}

.info-card-container .card:nth-child(1) {
    transition-delay: 0s;
}

.info-card-container .card:nth-child(2) {
    transition-delay: 0.05s;
}

.info-card-container .card:nth-child(3) {
    transition-delay: 0.1s;
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

h1 {
    text-align: center;
    font-size: xxx-large;
    font-weight: bolder;
    margin: 0 0 1rem 0;
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
    font-size: large;
    margin: -0.5rem;
    color: rgb(112, 112, 112);
    font-size: medium;
}
</style>