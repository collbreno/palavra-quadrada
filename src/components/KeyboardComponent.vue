<template>
    <div class="parent">
        <div class="keyboard-row">
            <el-button class="keyboard-btn" v-for="letter in firstRowLetters"
                @click="$emit('onLetterPressed', letter)" :key="letter">
                <div class="keyboard-btn-content">
                    {{letter}}
                </div>
            </el-button>
        </div>
        <div class="keyboard-row">
            <el-button class="keyboard-btn" v-for="letter in secondRowLetters"
                @click="$emit('onLetterPressed', letter)" :key="letter">{{letter}}</el-button>
            <el-button class="keyboard-btn back-btn" @click="$emit('onBackPressed')" >Back</el-button>
        </div>
        <div class="keyboard-row">
            <el-button class="keyboard-btn" v-for="letter in thirdRowLetters"
                @click="$emit('onLetterPressed', letter)" :key="letter">{{letter}}</el-button>
            <el-button class="keyboard-btn enter-btn" @click="$emit('onEnterPressed')" >Enter</el-button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElButton } from 'element-plus';
import 'element-plus/es/components/button/style/css';

export default defineComponent({
    components: {
      ElButton  
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
        padding: 0px;
        margin: 0px;
        background: grey;
        color: white;
        border-radius: 2px;
        cursor: pointer;
        height: 60px;
        width: 40px;
        border-radius: 5px;
    }


    .back-btn {
        width: 60px;
        margin-left: 10px;
    }

    .enter-btn {
        width: 80px;
        margin-left: 10px;
    }

    .parent {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>