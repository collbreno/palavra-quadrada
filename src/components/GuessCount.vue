<template>
    <div class="guess-count">
        <span class="count-text">{{ count }}</span>
    </div>
</template>

<script lang="ts">
import { guessCountColor } from '@/assets/colors'
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        count: {
            required: true,
            type: Number,
        },
    },
    computed: {
        color() {
            return guessCountColor;
        }
    }
})
</script>


<style scoped>
    .guess-count {
        background: v-bind(color);
        cursor: pointer;
        display: flex;
        flex-direction: column;
        width: 50px;
        height: 50px;
        border-radius: 5px;
        justify-content: center;
        align-items: center;
        justify-items: center;
        align-content: center;
        margin: 1px;
    }

    .count-text {
        font-size: 16px;
        font-weight: 700;
        color: white;
        margin: 0px;
        padding: 0px;
    }
</style>