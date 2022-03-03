<template>
    <div class="word">
        <letter-tile 
            class="letter-tile" v-for="(letter, index) in wordData._greenLetters"
            :color="letter == '' ? defaultColor : correctColor" 
            v-bind:key="`letter-${rowIndex}${index}`" :letter="letter"
            :style="{
                transform: `scale(${lettersScale[index]})`,
                transition: 'transform 100ms',
            }"/>
        <yellow-letters :letters="wordData._yellowLetters"/>
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
        }
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