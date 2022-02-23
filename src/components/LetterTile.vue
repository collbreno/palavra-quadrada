<template>
    <div class="letter-tile" :style="myStyle">
        <span class="letter-text">{{ letterData.letter }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import LetterData from '@/types/LetterData';
import getColor from '@/utils/ColorUtils';

export default defineComponent({
    data() {
        return {
            myStyle: {
                backgroundColor: getColor(this.letterData.result),
            }
        }
    },
    props: {
        letterData: {
            required: true,
            type: Object as PropType<LetterData>
        }
    }
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