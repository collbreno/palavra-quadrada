<template>
    <div class="parent">
        <div class="keyboard-row">
            <q-btn flat class="keyboard-btn" v-for="letter in firstRowLetters"
                @click="$emit('onLetterPressed', letter)" :key="letter"
                :style="{backgroundColor: keyboardData.getColor(letter, this.colorBlindData.isActive)}">
                {{letter}}
            </q-btn>
        </div>
        <div class="keyboard-row">
            <q-btn flat class="keyboard-btn" v-for="letter in secondRowLetters"
                @click="$emit('onLetterPressed', letter)" :key="letter"
                :style="{backgroundColor: keyboardData.getColor(letter, this.colorBlindData.isActive)}">
                {{letter}}
            </q-btn>
            <q-btn flat class="keyboard-btn back-btn" @click="$emit('onBackPressed')"
                :style="{backgroundColor: btnColor}">
                <q-icon name="backspace"/>
            </q-btn>
        </div>
        <div class="keyboard-row">
            <q-btn flat class="keyboard-btn" v-for="letter in thirdRowLetters"
                @click="$emit('onLetterPressed', letter)" :key="letter"
                :style="{backgroundColor: keyboardData.getColor(letter, this.colorBlindData.isActive)}">
                {{letter}}
            </q-btn>
            <q-btn flat class="keyboard-btn enter-btn" @click="$emit('onEnterPressed')" 
                :style="{backgroundColor: btnColor}">
                <q-icon name="keyboard_return"/>
            </q-btn>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { QBtn, QIcon } from 'quasar'
import KeyboardData from '@/types/KeyboardData';
import { keyboardBtnColor } from '@/assets/colors';
import { ColorBlindDataKey, injectStrict } from '@/utils/Injection';

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
        const colorBlindData = injectStrict(ColorBlindDataKey);

        return {
            firstRowLetters,
            secondRowLetters,
            thirdRowLetters,
            colorBlindData,
        }
    },
    computed: {
        btnColor() {
            return keyboardBtnColor;
        }
    }
})
</script>

<style scoped>
    .keyboard-row {
        display: flex;
        flex-direction: row;
        width: 420px;
    }

    @media screen and (max-width: 420px){
        .keyboard-row {
            width: 100%;
        }
    }

    .keyboard-btn {
        padding: 0px;
        margin: 0.5px;
        color: white;
        border-radius: 2px;
        cursor: pointer;
        flex: 1;
        border-radius: 5px;
        height: 50px;
    }


    .back-btn {
        flex: 1;
        font-size: 11px;
    }

    .enter-btn {
        flex: 3;
        font-size: 11px;
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