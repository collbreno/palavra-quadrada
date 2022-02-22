<template>
    <div class="guess">
        <letter-tile v-for="letterData in guessData.letters" 
            :key="letterData" :letterData="letterData"/>
    </div>

</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import GuessData from '@/types/GuessData';
import LetterTile from '@/components/LetterTile.vue';

export default defineComponent({
    components: {
        LetterTile
    },
    props: {
        guessData: {
            required: true,
            type: Object as PropType<GuessData>
        }
    }
})
</script>

<style scoped>
    .guess {
        display: flex;
        flex-direction: row;
        margin: 1px;
    }
</style>