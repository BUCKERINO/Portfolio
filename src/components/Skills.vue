<script setup lang="ts">
import SkillsCard from './SkillsCard.vue';
import { softwareCategories, programLanguages, humanLanguages, otherCategories } from '@/stores/skills';
</script>

<template>
    <div class="pt-15 title text-white">
        <div class="pb-5">
            <h1 class="text-6xl text-white pb-5">SKILLS</h1>
            <span class="flex items-center leading-tight text-2xl">•
                <p class="text-base pl-2">Primary - Proficient</p>
            </span>
            <span class="flex items-center leading-tight text-xs pl-[0.2rem]">○
                <p class="text-base pl-2">Secondary - Some Experience</p>
            </span>
        </div>
        <div class="flex flex-wrap gap-1 justify-between md:flex-row">
            <!-- Software Categories -->
            <SkillsCard class="px-17 pr-35">
                <div class="py-10">
                    <h2 class="text-3xl uppercase">{{ softwareCategories.title }}</h2>
                    <div v-for="(category, index) in softwareCategories.items" :key="index">
                        <div class="pt-5">
                            <ul class="text-2xl pb-3">
                                <div class="flex flex-wrap">
                                    <v-icon v-if="category.icon" :name="category.icon" scale="2" class="icon"/>
                                    <h3 class="uppercase">{{ category.catTitle }}</h3>
                                </div>
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
                <!-- Programming Languages -->
                <SkillsCard class="px-15 pr-30 py-10">
                        <h2 class="text-3xl uppercase">{{ programLanguages.title}}</h2>
                        <div v-for="(category, index) in programLanguages.items" :key="index">
                            <div class="pt-5">
                                <ul class="text-2xl pb-3">
                                    <div class="flex flex-wrap">
                                        <v-icon v-if="category.icon" :name="category.icon" scale="2" class="icon"/>
                                        <h3 class="uppercase">{{ category.catTitle }}</h3>
                                    </div>
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
                </SkillsCard>
                <div class="pb-5"></div>
                <!-- Human Languages -->
                <SkillsCard class="px-15 pr-25 mt-10 py-5">
                        <h2 class="text-3xl uppercase">{{ humanLanguages.title }}</h2>
                        <div v-for="(category, index) in humanLanguages.items" :key="index">
                            <div class="pt-5">
                                <ul class="text-2xl pb-3">
                                    <div class="flex flex-wrap">
                                        <v-icon v-if="category.icon" :name="category.icon" scale="2" class="icon"/>
                                        <h3 class="uppercase">{{ category.catTitle }}</h3>
                                    </div>
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
                </SkillsCard>
                <div class="pb-5"></div>
                <!-- Other -->
                <SkillsCard class="px-15 pr-25 py-10">
                        <h2 class="text-3xl uppercase">{{ otherCategories.title }}</h2>
                        <div v-for="(category, index) in otherCategories.items" :key="index">
                            <div class="pt-5">
                                <ul class="text-2xl pb-3">
                                    <div class="flex flex-wrap">
                                        <v-icon v-if="category.icon" :name="category.icon" scale="2" class="icon"/>
                                        <h3 class="uppercase">{{ category.catTitle }}</h3>
                                    </div>
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