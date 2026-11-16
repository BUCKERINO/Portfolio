<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import icon from '../assets/img/WLogo.png';
import { DESKTOP_QUERY } from '@/breakpoints';

const sections = [
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
];

const socials = [
    { href: 'https://github.com', label: 'GitHub', icon: 'bi-github', external: true },
    { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'co-linkedin-in', external: true },
    { href: 'mailto:tycho.vandewetering@protonmail.com', label: 'Email', icon: 'hi-solid-mail', external: false },
];

// Phone/tablet menu state (the dropdown is only used outside the desktop layout)
const menuOpen = ref(false);
const navRef = ref<HTMLElement | null>(null);

const scrollToSection = (sectionId: string) => {
    menuOpen.value = false;
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const onKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') menuOpen.value = false;
};

// Close the menu when tapping/clicking anywhere outside the navbar
const onPointerDown = (e: PointerEvent) => {
    if (menuOpen.value && !navRef.value?.contains(e.target as Node)) menuOpen.value = false;
};

// Close the menu if the screen is resized up to the desktop layout
const desktopQuery = window.matchMedia(DESKTOP_QUERY);
const onBreakpointChange = (e: MediaQueryListEvent) => {
    if (e.matches) menuOpen.value = false;
};

onMounted(() => {
    window.addEventListener('keydown', onKeydown);
    document.addEventListener('pointerdown', onPointerDown);
    desktopQuery.addEventListener('change', onBreakpointChange);
});

onUnmounted(() => {
    window.removeEventListener('keydown', onKeydown);
    document.removeEventListener('pointerdown', onPointerDown);
    desktopQuery.removeEventListener('change', onBreakpointChange);
});
</script>

<template>
    <nav ref="navRef" class="nav" :class="{ open: menuOpen }" aria-label="Main">
        <div class="top-bar">
            <img class="logo" :src="icon" alt="Logo" />
            <button type="button" class="menu-button" :aria-expanded="menuOpen" aria-controls="nav-menu"
                :aria-label="menuOpen ? 'Close menu' : 'Open menu'" @click="menuOpen = !menuOpen">
                <span class="bar" />
                <span class="bar" />
                <span class="bar" />
            </button>
        </div>

        <div id="nav-menu" class="menu">
            <ul>
                <li v-for="section in sections" :key="section.id">
                    <a :href="`#${section.id}`" @click.prevent="scrollToSection(section.id)">{{ section.label }}</a>
                </li>
            </ul>
            <div class="icon-container">
                <a v-for="social in socials" :key="social.label" :href="social.href" :aria-label="social.label"
                    v-bind="social.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}">
                    <v-icon :name="social.icon" class="social-icon" />
                </a>
            </div>
        </div>
    </nav>
</template>

<style scoped>
/* ---------- Phones & tablets (default): top bar + hamburger dropdown ---------- */
.nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    width: 100%;
    height: 4rem;
    padding: 0 1rem;
    background: rgb(71, 71, 71);
    color: white;
}

.top-bar {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    background: inherit;
}

.logo {
    height: 2.75rem;
}

.menu-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    width: 2.75rem;
    height: 2.75rem;
    padding: 0.5rem;
    background: none;
    border: none;
    cursor: pointer;
}

.bar {
    display: block;
    height: 3px;
    width: 100%;
    background: white;
    border-radius: 2px;
    transition: transform 0.25s ease, opacity 0.25s ease;
}

/* Animate the three bars into an X when open */
.open .bar:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
}

.open .bar:nth-child(2) {
    opacity: 0;
}

.open .bar:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
}

/* Dropdown below the top bar, only as tall as its content */
.menu {
    position: fixed;
    top: 4rem;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem 0;
    background: rgb(71, 71, 71);
    border-radius: 0 0 1rem 1rem;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: transform 0.3s ease, opacity 0.3s ease, visibility 0s linear 0.3s;
}

.open .menu {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
    transition: transform 0.3s ease, opacity 0.3s ease, visibility 0s;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
}

li {
    padding: 0.75rem;
}

a {
    display: block;
    color: white;
    text-decoration: none;
    font-size: 1.75rem;
    transition: opacity 0.2s;
}

a:hover {
    opacity: 0.3;
}

.icon-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 0.5rem;
    padding: 1.25rem 0 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
}

.social-icon {
    width: 2.5rem;
    height: 2.5rem;
}

/* ---------- Desktop: fixed sidebar. Keep in sync with src/breakpoints.ts ---------- */
@media (min-width: 1367px), (min-width: 1024px) and (hover: hover) {
    .nav {
        display: flex;
        flex-direction: column;
        width: 13rem;
        height: 100vh;
        height: 100dvh;
        padding: 1rem;
    }

    .top-bar {
        justify-content: center;
        height: auto;
    }

    .logo {
        height: 5rem;
        margin: 2rem 0;
    }

    .menu-button {
        display: none;
    }

    .menu {
        position: static;
        flex-grow: 1;
        padding: 0;
        background: none;
        border-radius: 0;
        box-shadow: none;
        transform: none;
        opacity: 1;
        visibility: visible;
        transition: none;
    }

    ul {
        flex-grow: 1;
    }

    li {
        padding: 0.5rem;
    }

    a {
        font-size: 1.5rem;
    }

    .icon-container {
        gap: 1rem;
        margin-top: 0;
        padding: 0 0 1rem;
        border-top: none;
    }

    .social-icon {
        width: 2rem;
        height: 2rem;
    }
}
</style>
