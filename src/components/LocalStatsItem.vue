<template>
    <div class="local-stats-item">
        <span class="text">{{text}}</span>
        <span class="title">{{title}}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        title: {
            required: true,
            type: String,
        },
        text: {
            required: true,
            type: String,
        }
    }
})
</script>

<style scoped>
    .local-stats-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .text {
        font-size: 22px;
    }

    .title {
        font-size: 14px;
    }
</style>