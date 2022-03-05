<template>
    <div class="letter-tile" :style="{backgroundColor: color}">
        <span class="letter-text">{{ letter }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        letter: {
            required: true,
            type: String,
        },
        color: {
            required: true,
            type: String,
        }
    },
})
</script>


<style scoped>
    .letter-tile {
        background: grey;
        display: flex;
        border-radius: 5px;
        justify-content: center;
        align-content: center;
        margin: 1px;
        flex: 1;
    }

    .letter-text {
        font-size: 22px;
        margin: auto;
        color: white;
    }
</style>