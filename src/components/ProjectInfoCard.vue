<script setup lang="ts">
import { computed } from 'vue';
import type { InfoCard } from '@/assets/Types/ProjectTypes';

const props = defineProps<{
    infocard: InfoCard | null;
}>();

const teamColor = 'rgba(139, 211, 165, 0.907)';
const engineColor = 'rgba(62, 140, 243, 0.907)';
const platformColor = 'rgba(240, 211, 97, 0.907)';

let rgba: string;

if (props.infocard?.cardType === 'team') {
    rgba = teamColor;
} else if (props.infocard?.cardType === 'engine') {
    rgba = engineColor;
} else if (props.infocard?.cardType === 'platform') {
    rgba = platformColor;
}

// Function to calculate luminance and determine text color
const getContrastTextColor = (bgColor: string) => {
    // Parse the background color to RGB
    let r = 0;
    let g = 0;
    let b = 0;
    if (bgColor.toLowerCase().startsWith('rgba')) {
        const rgba = bgColor.match(/\d+\.?\d*/g);
        if (rgba) [r, g, b] = rgba.map(Number);
    }
    // Calculate relative luminance (simplified WCAG formula)
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Return black for bright backgrounds, white for dark backgrounds (threshold ~0.5)
    return luminance > 0.5 ? '#000000' : '#ffffff';
};

const textColor = computed(() => {
    return getContrastTextColor(rgba);
});
</script>

<template>
    <span :style="{ backgroundColor: rgba, color: textColor }">
        {{ infocard?.text.toUpperCase() }}
    </span>
</template>

<style scoped>
span {
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-weight: bold;
}
</style>