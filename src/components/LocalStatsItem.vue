<template>
    <div class="local-stats-item">
        <span class="value">{{value}}</span>
        <span class="label">{{label}}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        value: {
            required: true,
            type: String,
        },
        label: {
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

    .label {
        font-size: 12px;
    }

    .value {
        font-size: 22px;
    }
</style>