<template>
    <div class="guess-count">
        <span class="count-text">{{ count }}</span>
        <span class="view-text">(Ver)</span>
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
        border-radius: 5px;
        justify-content: center;
        align-items: center;
        justify-items: center;
        align-content: center;
        margin: 1px;
        flex: 1;
    }

    .count-text {
        font-size: 16px;
        font-weight: 700;
        color: white;
        margin: 0px;
        padding: 0px;
        line-height: 1.2;
    }    
    
    .view-text {
        font-size: 12px;
        color: white;
        margin: 0px;
        padding: 0px;
    }
</style>