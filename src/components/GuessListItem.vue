<template>
    <div class="row">
        <letter-tile
            class="letter"
            v-for="(letter, index) in word.split('')" 
            :key="`guess-list-${guessIndex}${index}`" 
            :letter="letter"
            :color="'#263238'"/>
    </div>
</template>

<script lang="ts">
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
    }
})
</script>

<style scoped>
    .letter {
        width: 40px;
        height: 40px;
        font-size: 1px;
    }
</style>
