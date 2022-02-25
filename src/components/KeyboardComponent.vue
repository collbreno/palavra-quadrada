<template>
    <div class="parent">
        <div class="keyboard-row">
            <q-btn :ripple="{early: true}" class="keyboard-btn" v-for="letter in firstRowLetters"
                @click="$emit('onLetterPressed', letter)" :key="letter">
                <div class="keyboard-btn-content">
                    {{letter}}
                </div>
            </q-btn>
        </div>
        <div class="keyboard-row">
            <q-btn :ripple="{early: true}" class="keyboard-btn" v-for="letter in secondRowLetters"
                @click="$emit('onLetterPressed', letter)" :key="letter">{{letter}}</q-btn>
            <q-btn :ripple="{early: true}" class="keyboard-btn back-btn" @click="$emit('onBackPressed')" >Back</q-btn>
        </div>
        <div class="keyboard-row">
            <q-btn :ripple="{early: true}" class="keyboard-btn" v-for="letter in thirdRowLetters"
                @click="$emit('onLetterPressed', letter)" :key="letter">{{letter}}</q-btn>
            <q-btn :ripple="{early: true}" class="keyboard-btn enter-btn" @click="$emit('onEnterPressed')" >Enter</q-btn>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { QBtn } from 'quasar'

export default defineComponent({
    components: {
      QBtn,  
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
        width: 570px;
    }

    @media screen and (max-width: 570px){
        .keyboard-row {
            width: 100%;
        }
    }

    .keyboard-btn {
        padding: 0px;
        margin: 1px;
        background: grey;
        color: white;
        border-radius: 2px;
        cursor: pointer;
        flex: 1;
        border-radius: 5px;
    }


    .back-btn {
        width: 60px;
        margin-left: 10px;
        flex: 1.5;
    }

    .enter-btn {
        width: 80px;
        margin-left: 10px;
        flex: 1.5;
    }

    .parent {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        position: absolute;
        bottom: 0;
    }
</style>