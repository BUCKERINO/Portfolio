<script setup lang="ts">
import { computed } from 'vue';
import { CardType, type InfoCard } from '@/assets/Types/ProjectTypes';

const props = defineProps<{
    infocard: InfoCard;
}>();

// Background + readable text color per card type. Add new card types here.
const cardStyles: Record<CardType, { backgroundColor: string; color: string }> = {
    [CardType.Team]: { backgroundColor: 'rgba(139, 211, 165, 0.907)', color: '#000000' },
    [CardType.Engine]: { backgroundColor: 'rgba(62, 140, 243, 0.907)', color: '#000000' },
    [CardType.Platform]: { backgroundColor: 'rgba(240, 211, 97, 0.907)', color: '#000000' },
};

const style = computed(() => cardStyles[props.infocard.cardType]);
</script>

<template>
    <span :style="style">{{ infocard.text }}</span>
</template>

<style scoped>
span {
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-weight: bold;
    text-transform: uppercase;
}
</style>