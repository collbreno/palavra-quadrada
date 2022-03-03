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
import { wrongSpotColor } from '@/assets/colors'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    props: {
        letters: {
            required: true,
            type: Object as PropType<string[]>,
        }
    },
    computed: {
        color() {
            return wrongSpotColor;
        }
    }
})
</script>


<style scoped>
    .square {
        background-color: v-bind(color);
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