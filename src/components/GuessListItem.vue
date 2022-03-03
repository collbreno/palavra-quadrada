<template>
    <div class="row">
        <letter-tile
            class="letter-tile"
            v-for="(letter, index) in word.split('')" 
            :key="`guess-list-${guessIndex}${index}`" 
            :letter="letter"
            :color="color"/>
    </div>
</template>

<script lang="ts">
import { guessHistoryColor } from '@/assets/colors'
import { defineComponent } from 'vue'
import LetterTile from './LetterTile.vue'

export default defineComponent({
    components: {
        LetterTile,
    },
    props: {
        word: {
            required: true,
            type: String,
        },
        guessIndex: {
            required: true,
            type: Number,
        }
    },
    computed: {
        color() {
            return guessHistoryColor;
        },
    }
})
</script>

<style scoped>
    .letter-tile {
        width: 40px;
        height: 40px;
        font-size: 1px;
        margin: 0.5px;
    }
</style>
