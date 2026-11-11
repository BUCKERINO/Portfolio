<script setup lang="ts">
import type { Info } from '@/assets/Types/ProjectTypes.ts'
import { computed } from 'vue';

const props = defineProps<{
    info: Info;
}>();

const rowCount = computed(() =>
    Math.max(
        1,
        props.info.programmers.length,
        props.info.artists.length
    )
);
</script>

<template>
    <section class="project-info">
        <table>
            <thead>
                <tr>
                    <th scope="col">Engine</th>
                    <th scope="col">Language</th>
                    <th scope="col">Programmers</th>
                    <th scope="col">Artists</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="index in rowCount" :key="index">
                    <td>
                        {{ index === 1 ? info.engine.join(', ') || 'N/A' : '' }}
                    </td>

                    <td>
                        {{ index === 1 ? info.language.join(', ') || 'N/A' : '' }}
                    </td>

                    <td>
                        {{ info.programmers[index - 1] ?? '' }}
                    </td>

                    <td>
                        {{ info.artists[index - 1] ?? '' }}
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<style scoped>

.project-info {
    width: 100%;
    margin-top: 2rem;
    color: white;
    overflow-x: auto;
}

table {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    border-collapse: collapse;
    table-layout: fixed;
}

th, td {
    width: 25%;
    padding: 1rem;
    text-align: center;
    vertical-align: top;
}

th {
    font-size: 1.25rem;
    font-weight: bold;
    color: white;
    border-bottom: 2px solid rgba(255, 255, 255, 0.5);
}

td {
    font-size: 1.1rem;
    color: #d0d0d0;
}

/* Divider between each data row */
tbody tr:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
}

@media (max-width: 600px) {
    table {
        min-width: 600px;
    }
}

</style>