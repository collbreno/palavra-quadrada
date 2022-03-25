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
import { wrongSpotColor, wrongSpotColorBlind } from '@/assets/colors'
import { injectStrict } from '@/utils/Injection';
import { ColorBlindDataKey } from '@/utils/Injection';
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    props: {
        letters: {
            required: true,
            type: Object as PropType<string[]>,
        }
    },
    setup() {
        const colorBlindData = injectStrict(ColorBlindDataKey);
        return { colorBlindData }
    },
    computed: {
        color() {
            return this.colorBlindData.isActive
                ? wrongSpotColorBlind
                : wrongSpotColor;
        }
    }
})
</script>


<style scoped>
    .square {
        background-color: v-bind(color);
        margin: 1px;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
        flex: 1;
        line-height: 1.2;
    }

    .text {
        color: white;
        font-size: 14px;
        font-weight: 600;
        margin: 0px 2px;
        letter-spacing: 0px;
        padding: 0px;
    }
</style>