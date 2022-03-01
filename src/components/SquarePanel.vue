<template>
    <div class="panel">
        <div class="row">
            <guess-component :letters="squareController.guessData.letters" />
            <guess-count 
                @click="$emit('onGuessCountPressed')"
                :count="squareController.guesses.length"/>
        </div>
        
        <word-component v-for="(word, index) in squareController.words"
            :rowIndex="index"
            :wordData="word"
            :lettersScale="squareController.lettersScale[index]"
            v-bind:key="`word-${index}`" />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import SquareController from '@/types/SquareController';
import GuessComponent from '@/components/GuessComponent.vue';
import WordComponent from '@/components/WordComponent.vue';
import GuessCount from '@/components/GuessCount.vue';


export default defineComponent({
    components: {
        GuessComponent,
        WordComponent,
        GuessCount,
    },
    props: {
        squareController: {
            required: true,
            type: Object as PropType<SquareController>
        }
    }
})
</script>

<style scoped>
    .panel {
        width: 100%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>