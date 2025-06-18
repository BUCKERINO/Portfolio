<script setup lang="ts">
import icon from '../assets/img/WLogo.png';
import { OhVueIcon } from 'oh-vue-icons';

// Function to handle smooth scrolling to a section by ID
const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};
</script>

<template>
    <nav class="container">
        <img class="img" :src="icon" alt="Logo" />
        <ul>
            <li>
                <a href="#projects" @click.prevent="scrollToSection('projects')">Projects</a>
            </li>
            <li>
                <a href="#about" @click.prevent="scrollToSection('about')">About</a>
            </li>
            <li>
                <a href="#contact" @click.prevent="scrollToSection('contact')">Contact</a>
            </li>
        </ul>
        <div class="icon-container">
            <v-icon href="https://github.com" target="_blank" name="bi-github" class="social-icon" />
            <v-icon href="https://linkedin.com" target="_blank" name="bi-linkedin" class="social-icon" />
            <v-icon href="https://linkedin.com" target="_blank" name="hi-solid-mail" class="social-icon" />
        </div>
    </nav>
</template>

<style scoped>
.container {
    background: rgb(71, 71, 71);
    width: 13rem;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    box-sizing: border-box;
    color: white;
}

.img {
    height: 5rem;
    margin: 2rem 0 2rem 2.4rem;
    align-items: center;
    justify-content: center;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    text-align: center;
    flex-grow: 1;
}

li {
    padding: 0.5rem;
}

a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    display: block;
    transition: opacity 0.2s;
}

a:hover {
    background: none;
    opacity: 0.3;
}

.icon-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    padding-bottom: 1rem;
    margin-top: auto;
}

.social-icon {
    width: 2rem;
    height: 2rem;
    transition: opacity 0.2s;
}

.social-icon:hover {
    opacity: 0.5;
}

.icon-link {
    display: inline-block;
    /* Ensure proper sizing for the icon */
}
</style>