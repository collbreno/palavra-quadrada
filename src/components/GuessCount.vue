<template>
    <div class="guess-count">
        <span class="count-text">{{ count }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        count: {
            required: true,
            type: Number,
        },
    },
})
</script>


<style scoped>
    .guess-count {
        background: #607D8B;
        cursor: pointer;
        display: flex;
        width: 50px;
        height: 50px;
        border-radius: 5px;
        justify-content: center;
        align-content: center;
        margin: 1px;
    }

    .count-text {
        font-size: 22px;
        margin: auto;
        color: white;
    }
</style>