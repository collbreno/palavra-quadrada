<template>
    <div class="word-panel">
        <guess-component v-for="guessData in wordController.guesses"
            :key="guessData" :guessData="guessData"/>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import WordController from '@/types/WordController';
import GuessComponent from '@/components/GuessComponent.vue';


export default defineComponent({
    components: {
        GuessComponent,
    },
    props: {
        wordController: {
            required: true,
            type: Object as PropType<WordController>
        }
    }
})
</script>

<style scoped>
    .word-panel {
        margin: 10px;
    }
</style>