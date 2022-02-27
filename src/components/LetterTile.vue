<template>
    <div class="letter-tile" :style="{backgroundColor: color}">
        <span class="letter-text">{{ letter }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    props: {
        letter: {
            required: true,
            type: Object as PropType<string>
        },
        color: {
            required: true,
            type: Object as PropType<string>,
        }
    },
})
</script>


<style scoped>
    .letter-tile {
        background: grey;
        display: flex;
        width: 50px;
        height: 50px;
        border-radius: 5px;
        justify-content: center;
        align-content: center;
        margin: 1px;
    }

    .letter-text {
        font-size: 22px;
        margin: auto;
        color: white;
    }
</style>