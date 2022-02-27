<template>
    <div class="word">
        <letter-tile class="letter-tile" v-for="(letter, index) in wordData._greenLetters"
            :color="letter == '' ? '#212121' : '#388E3C'" 
            v-bind:key="`letter-${rowIndex}${index}`" :letter="letter"/>
        <letter-tile class="letter-tile"
            :color="'#FFAB00'"
            :letter="wordData.yellowLettersAsString"/>
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
    },
})
</script>

<style scoped>
    .word {
        display: flex;
        flex-direction: row;
    }    
</style>