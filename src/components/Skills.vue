<script setup lang="ts">
import SkillsCard from './SkillsCard.vue';
import { softwareCategories, programLanguages, humanLanguages, otherCategories } from '@/stores/skills';

// Software gets its own (tall) column on large screens; the rest stack next to it.
const sideCategories = [programLanguages, humanLanguages, otherCategories];
</script>

<template>
    <div class="pt-15 title text-white">
        <div class="pb-5">
            <h1 class="text-4xl md:text-6xl text-white pb-5">SKILLS</h1>
            <span class="flex items-center leading-tight text-2xl">•
                <p class="text-base pl-2">Primary - Proficient</p>
            </span>
            <span class="flex items-center leading-tight text-xs pl-[0.2rem]">○
                <p class="text-base pl-2">Secondary - Some Experience</p>
            </span>
        </div>
        <!-- Phones/tablets: all cards stacked. lg+: software left, the others stacked on the right. -->
        <div class="flex flex-col gap-5 lg:flex-row lg:items-start">
            <div v-for="(column, columnIndex) in [[softwareCategories], sideCategories]" :key="columnIndex"
                class="flex flex-col gap-5 lg:flex-1">
                <SkillsCard v-for="group in column" :key="group.title" class="px-6 py-8 sm:px-12 lg:py-10">
                    <h2 class="text-3xl uppercase break-words">{{ group.title }}</h2>
                    <div v-for="(category, index) in group.items" :key="index" class="pt-5">
                        <ul class="text-2xl pb-3">
                            <div v-if="category.catTitle || category.icon" class="flex flex-wrap items-center gap-2">
                                <v-icon v-if="category.icon" :name="category.icon" scale="2" class="icon" />
                                <h3 class="uppercase">{{ category.catTitle }}</h3>
                            </div>
                            <li v-for="skill in category.skills" :key="skill.name" class="pt-1 pl-5">
                                <span class="flex items-center leading-tight"
                                    :class="{ 'text-2xl': skill.primary, 'text-xs pl-[0.2rem]': !skill.primary }">
                                    <span>{{ skill.primary ? '•' : '○' }}</span>
                                    <p class="text-base pl-2">{{ skill.name }}</p>
                                </span>
                            </li>
                        </ul>
                    </div>
                </SkillsCard>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-weight: 800;
}

h2 {
    font-weight: 800;
    font-size: xx-large;
    color: rgb(70, 70, 70);
}

h3 {
    font-weight: 400;
    color: rgb(63, 63, 63);
}

.icon {
    color: rgb(63, 63, 63);
}

ul {
    font-weight: 400;
}
</style>