<script setup lang="ts">
import Devider from '@/components/Devider.vue';
import IconButon from '@/components/IconButon.vue';

</script>

<template>
    <div id="contact">
        <Devider/>
        <div class="flex flex-wrap gap-2">
            <v-icon name="hi-solid-mail" scale="2"/>
            <h1 class="text-3xl pb-8 uppercase">email</h1>
        </div>
        <h2 class="text-2xl uppercase">tycho.vandewetering@protonmail.com</h2>
        <p>
            Feel free to contact me on any platform about any topic
        </p>
        <div class="flex flex-wrap gap-5 pt-10">
            <IconButon>
                <a href="https://linkedin.com" target="_blank">
                    <v-icon target="_blank" name="co-linkedin-in" scale="2" class="social-icon" />
                </a>
            </IconButon>
        </div>
    </div>
    <Devider/>
</template>

<style scoped>
h1 {
    font-weight: bolder;
}
</style>