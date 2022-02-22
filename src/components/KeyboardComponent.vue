<template>
    <div class="keyboard-row">
        <button class="keyboard-btn" v-for="letter in firstRowLetters"
            @click="$emit('onLetterPressed', letter)" :key="letter">{{letter}}</button>
    </div>
    <div class="keyboard-row">
        <button class="keyboard-btn" v-for="letter in secondRowLetters"
            @click="$emit('onLetterPressed', letter)" :key="letter">{{letter}}</button>
    </div>
    <div class="keyboard-row">
        <button class="keyboard-btn" v-for="letter in thirdRowLetters"
            @click="$emit('onLetterPressed', letter)" :key="letter">{{letter}}</button>
    <button class="keyboard-btn" @click="$emit('onBackPressed')" >Back</button>
    </div>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const firstRowLetters = ['Q','W','E','R','T','Y','U','I','O','P',];
        const secondRowLetters = ['A','S','D','F','G','H','J','K','L',];
        const thirdRowLetters = ['Z','X','C','V','B','N','M',];

        return {
            firstRowLetters,
            secondRowLetters,
            thirdRowLetters,
        }
    },
})
</script>

<style scoped>
    .keyboard-row {
        display: flex;
        flex-direction: row;
    }

    .keyboard-btn {
        padding: 0px;
        margin: 1px;
        background: grey;
        color: white;
        border-radius: 2px;
        cursor: pointer;
    }

    .keyboard-btn > div {
        width: 40px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .btn-back > div {
        width: 60px;
    }

    .btn-enter > div {
        width: 80px;
    }

    .parent {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>