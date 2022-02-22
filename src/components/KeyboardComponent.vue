<template>
    <div class="keyboard-row">
        <md-btn class="keyboard-btn" v-for="letter in firstRowLetters"
            @click="$emit('onLetterPressed', letter)" :key="letter">{{letter}}</md-btn>
    </div>
    <div class="keyboard-row">
        <md-btn class="keyboard-btn" v-for="letter in secondRowLetters"
            @click="$emit('onLetterPressed', letter)" :key="letter">{{letter}}</md-btn>
    </div>
    <div class="keyboard-row">
        <md-btn class="keyboard-btn" v-for="letter in thirdRowLetters"
            @click="$emit('onLetterPressed', letter)" :key="letter">{{letter}}</md-btn>
    <md-btn class="keyboard-btn" @click="$emit('onBackPressed')" >Back</md-btn>
    </div>
    
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { MDBBtn as MdBtn } from 'mdb-vue-ui-kit';

export default defineComponent({
    components: {
        MdBtn,
    },
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
        box-shadow: none;
        padding: 20px 15px;
        background: grey;
        color: white;
    }
</style>