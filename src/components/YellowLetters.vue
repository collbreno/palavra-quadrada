<template>
    <div class="square">
        <span 
            class="text"
            v-for="(letter, index) in letters" 
            :key="`${index}`">
            {{ letter }}
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    props: {
        letters: {
            required: true,
            type: Object as PropType<string[]>,
        }
    }
})
</script>


<style scoped>
    .square {
        background-color: #FFAB00;
        width: 50px;
        height: 50px;
        margin: 1px;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
        padding: 2px;
    }

    .text {
        color: white;
        font-size: 16px;
        font-weight: 600;
        margin: 0px 2px;

    }
</style>