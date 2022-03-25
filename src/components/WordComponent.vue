<template>
    <div class="word">
        <letter-tile 
            class="letter-tile" v-for="(_, index) in wordData.greenLetters"
            v-bind:key="`letter-${rowIndex}${index}`" 
            :color="getColor(index)" 
            :letter="getLetter(index)"
            :style="{
                transform: `scale(${lettersScale[index]})`,
                transition: `transform ${animduration}ms`,
            }"/>
        <yellow-letters 
            :letters="wordData.yellowLetters"
            :style="{
                transform: `scale(${lettersScale[5]})`,
                transition: `transform ${animduration}ms`,
            }"/>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import LetterTile from '@/components/LetterTile.vue';
import WordData from '@/types/WordData';
import YellowLetters from './YellowLetters.vue';
import { correctSpotColor, correctSpotColorBlind, notGuessedYetColor } from '@/assets/colors';
import { letterScaleAnimDuration } from '@/assets/constants';
import { ColorBlindDataKey, injectStrict } from '@/utils/Injection';

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
    setup() {
        const colorBlindData = injectStrict(ColorBlindDataKey);
        return { colorBlindData };
    },
    methods: {
        getLetter(index: number): string {
            const greenLetter = this.wordData.greenLetters[index];
            if (!this.showCorrectAnswer) return greenLetter;
            else return this.wordData.correctWord[index];
        },
        getColor(index: number): string {
            return this.wordData.greenLetters[index] == '' 
                ? notGuessedYetColor : this.correctColor;
        },
    },
    computed: {
        correctColor() {
            return this.colorBlindData.isActive
                ? correctSpotColorBlind
                : correctSpotColor;
        },
        animduration() {
            return letterScaleAnimDuration;
        }
    }
})
</script>

<style scoped>
    .word {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        flex: 1;
    }
</style>