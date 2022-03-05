<template>
    <div class="word">
        <letter-tile 
            class="letter-tile" v-for="(_, index) in wordData.greenLetters"
            v-bind:key="`letter-${rowIndex}${index}`" 
            :color="getColor(index)" 
            :letter="getLetter(index)"
            :style="{
                transform: `scale(${lettersScale[index]})`,
                transition: 'transform 100ms',
            }"/>
        <yellow-letters :letters="wordData.yellowLetters"/>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import LetterTile from '@/components/LetterTile.vue';
import WordData from '@/types/WordData';
import YellowLetters from './YellowLetters.vue';
import { correctSpotColor, notGuessedYetColor } from '@/assets/colors';

export default defineComponent({
    components: {
        LetterTile,
        YellowLetters,
    },
    props: {
        wordData: {
            required: true,
            type: Object as PropType<WordData>
        },
        rowIndex: {
            required: true,
            type: Number,
        },
        lettersScale: {
            required: true,
            type: Object as PropType<number[]>
        },
        showCorrectAnswer: {
            required: true,
            type: Boolean,
        }
    },
    methods: {
        getLetter(index: number): string {
            const greenLetter = this.wordData.greenLetters[index];
            if (!this.showCorrectAnswer) return greenLetter;
            else return this.wordData.correctWord[index];
        },
        getColor(index: number): string {
            return this.wordData.greenLetters[index] == '' 
                ? notGuessedYetColor : correctSpotColor;
        },
    },
    computed: {
        defaultColor() {
            return notGuessedYetColor;
        }, 
        correctColor() {
            return correctSpotColor;
        }
    }
})
</script>

<style scoped>
    .word {
        display: flex;
        flex-direction: row;
    }    
</style>