<template>
    <div class="word">
        <letter-tile 
            class="letter-tile" v-for="(letter, index) in wordData._greenLetters"
            :color="letter == '' ? '#212121' : '#388E3C'" 
            v-bind:key="`letter-${rowIndex}${index}`" :letter="letter"
            :style="{
                transform: `scale(${lettersScale[index]})`,
                transition: 'transform 100ms',
            }"/>
        <letter-tile class="letter-tile"
            :color="'#FFAB00'"
            :letter="wordData.yellowLettersAsString"
            :style="{
                transform: `scale(${lettersScale[5]})`,
                transition: 'transform 100ms',
            }"/>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import LetterTile from '@/components/LetterTile.vue';
import WordData from '@/types/WordData';

export default defineComponent({
    components: {
        LetterTile,
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
})
</script>

<style scoped>
    .word {
        display: flex;
        flex-direction: row;
    }    
</style>