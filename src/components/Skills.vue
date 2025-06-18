<script setup lang="ts">
import SkillsCard from './SkillsCard.vue';
import { softwareCategories, programLanguages, humanLanguages, other } from '@/stores/skills';

interface Skill {
    title: string | null;

}
</script>

<template>
    <div class="pt-15 title">
        <div class="pb-5">
            <h1 class="text-5xl pb-5">SKILLS</h1>
            <span class="flex items-center leading-tight text-2xl">•
                <p class="text-base pl-2">Primary - Proficient</p>
            </span>
            <span class="flex items-center leading-tight text-xs pl-[0.2rem]">○
                <p class="text-base pl-2">Secondary - Some Experience</p>
            </span>
        </div>
        <div class="flex flex-wrap gap-1 justify-between md:flex-row">
            <SkillsCard class=" px-15 pr-40">
                <div class="py-10">
                    <h2 class="text-3xl">SOFTWARE</h2>
                    <div v-for="(category) in softwareCategories" :key="category.title">
                        <div class="pt-5">
                            <ul class="text-2xl pb-3">
                                <v-icon :name="category.icon" scale="2" />
                                {{ category.title }}
                                <li v-for="(skill, skillIndex) in category.skills" :key="skillIndex" class="pt-1 pl-5">
                                    <span class="flex items-center leading-tight"
                                        :class="{ 'text-2xl': skill.primary, 'text-xs pl-[0.2rem]': !skill.primary }">
                                        <span>{{ skill.primary ? '•' : '○' }}</span>
                                        <p class="text-base pl-2">{{ skill.name }}</p>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </SkillsCard>
            <div>
                <SkillsCard class="px-15 pr-25">
                    <div class="py-10">
                        <h2 class="text-3xl">PROGRAMMING LANGUAGES</h2>
                        <div v-for="(category) in programLanguages" :key="category.title">
                            <div class="pt-5">
                                <ul class="text-2xl">
                                    <v-icon :name="category.icon" scale="2" />
                                    <li v-for="(skill, skillIndex) in category.skills" :key="skillIndex"
                                        class="pt-1 pl-5">
                                        <span class="flex items-center leading-tight"
                                            :class="{ 'text-2xl': skill.primary, 'text-xs pl-[0.2rem]': !skill.primary }">
                                            <span>{{ skill.primary ? '•' : '○' }}</span>
                                            <p class="text-base pl-2">{{ skill.name }}</p>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SkillsCard>
                <div class="pb-10"></div>
                <SkillsCard class="px-15 pr-25 mt-10">
                    <div class="py-10">
                        <div v-for="(category) in humanLanguages" :key="category.title">
                            <h2 class="text-3xl"> {{ category.title }} </h2>
                            <div class="pt-5">
                                <ul class="text-2xl">
                                    <v-icon :name="category.icon" scale="2" />
                                    <li v-for="(skill, skillIndex) in category.skills" :key="skillIndex"
                                        class="pt-1 pl-5">
                                        <span class="flex items-center leading-tight"
                                            :class="{ 'text-2xl': skill.primary, 'text-xs pl-[0.2rem]': !skill.primary }">
                                            <span>{{ skill.primary ? '•' : '○' }}</span>
                                            <p class="text-base pl-2">{{ skill.name }}</p>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SkillsCard>
                <div class="pb-10"></div>
                <SkillsCard class="px-15 pr-25 mt-10">
                    <div class="py-10">
                        <h2 class="text-3xl">OTHER</h2>
                        <div v-for="(category) in humanLanguages" :key="category.title">
                            <div class="pt-5">
                                <ul class="text-2xl">
                                    <v-icon :name="category.icon" scale="2" />
                                    <li v-for="(skill, skillIndex) in category.skills" :key="skillIndex"
                                        class="pt-1 pl-5">
                                        <span class="flex items-center leading-tight"
                                            :class="{ 'text-2xl': skill.primary, 'text-xs pl-[0.2rem]': !skill.primary }">
                                            <span>{{ skill.primary ? '•' : '○' }}</span>
                                            <p class="text-base pl-2">{{ skill.name }}</p>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SkillsCard>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-weight: 600;
}

h2 {
    font-weight: 600;
}

ul {
    font-weight: 400;
}
</style>