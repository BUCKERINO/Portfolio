<script setup lang="ts">
import PlaceHolder from '@/assets/img/images.jpg';
import CV from '@/assets/CV/CV_TychovandeWetering.pdf';
import Skills from '@/components/Skills.vue';
import Devider from '@/components/Devider.vue';

</script>

<template>
    <div id="about">
        <Devider/>
        <h1 class="text-4xl md:text-6xl pb-8 break-words">TYCHO VAN DE WETERING</h1>
        <!-- Phones: photo, CV button, text stacked. md+: photo + CV on the left, text on the right. -->
        <div class="flex flex-col gap-6 md:flex-row md:gap-10">
            <div class="flex flex-col items-center gap-5 md:items-start shrink-0">
                <img class="w-50 rounded-3xl" :src="PlaceHolder" alt="Photo of Tycho van de Wetering" />
                <a :href="CV" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 w-50 h-15 bg-gray-900 rounded-3xl text-xl text-white transition-colors duration-200 ease-in-out hover:bg-gray-800">
                    <v-icon name="px-script" class="h-[1.5rem] w-[1.5rem]" />
                    <span>CV</span>
                </a>
            </div>
            <p class="text-base">Some text about me and why you should definitly hire me as your new intern.</p>
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