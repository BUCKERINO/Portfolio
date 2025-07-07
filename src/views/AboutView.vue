<script setup lang="ts">
import PlaceHolder from '@/assets/img/images.jpg';
import CV from '@/assets/CV/CV_TychovandeWetering.pdf';
import Skills from '@/components/Skills.vue';
import Devider from '@/components/Devider.vue';

</script>

<template>
    <div id="about">
        <Devider/>
        <h1 class="text-6xl pb-8">TYCHO VAN DE WETERING</h1>
        <div class="flex flex-wrap gap-10">
            <img class="w-50 rounded-3xl" :src="PlaceHolder" />
            <p class="text-base">Some text about me and why you should definitly hire me as your new intern.</p>
        </div>
        <div class="pt-5">
            <a :href="CV" target="_blank" class="inline-flex items-center justify-center w-50 h-15 bg-gray-900 rounded-3xl text-xl text-white transition-colors duration-200 ease-in-out hover:bg-gray-800">
                <v-icon name="px-script" class="h-[1.5rem] w-[1.5rem]" />
                <span class="mr-2">CV</span>
            </a>
        </div>
        <Skills />
    </div>
</template>

<style scoped>
h1 {
    font-weight: bolder;
}

button {
    font-weight: bold;
}
</style>