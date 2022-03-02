<template>
    <div class="parent">
        <div class="keyboard-row">
            <q-btn :ripple="{early: true}" class="keyboard-btn" v-for="letter in firstRowLetters"
                @click="$emit('onLetterPressed', letter)" :key="letter"
                :style="{backgroundColor: keyboardData.getColor(letter)}">
                {{letter}}
            </q-btn>
        </div>
        <div class="keyboard-row">
            <q-btn :ripple="{early: true}" class="keyboard-btn" v-for="letter in secondRowLetters"
                @click="$emit('onLetterPressed', letter)" :key="letter"
                :style="{backgroundColor: keyboardData.getColor(letter)}">
                {{letter}}
            </q-btn>
            <q-btn :ripple="{early: true}" class="keyboard-btn back-btn" @click="$emit('onBackPressed')">
                <q-icon name="backspace"/>
            </q-btn>
        </div>
        <div class="keyboard-row">
            <q-btn :ripple="{early: true}" class="keyboard-btn" v-for="letter in thirdRowLetters"
                @click="$emit('onLetterPressed', letter)" :key="letter"
                :style="{backgroundColor: keyboardData.getColor(letter)}">
                {{letter}}
            </q-btn>
            <q-btn :ripple="{early: true}" class="keyboard-btn enter-btn" @click="$emit('onEnterPressed')" >
                <q-icon name="keyboard_return"/>
            </q-btn>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { QBtn, QIcon } from 'quasar'
import KeyboardData from '@/types/KeyboardData';

export default defineComponent({
    props: {
        keyboardData: {
            required: true,
            type: Object as PropType<KeyboardData>,
        },
    },
    emits: [
        'onBackPressed',
        'onLetterPressed',
        'onEnterPressed',
    ],
    components: {
      QBtn,  
      QIcon,
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
        margin: 0.5px;
        background: grey;
        color: white;
        border-radius: 2px;
        cursor: pointer;
        flex: 1;
        border-radius: 5px;
        height: 60px;
    }


    .back-btn {
        flex: 1;
    }

    .enter-btn {
        flex: 3;
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