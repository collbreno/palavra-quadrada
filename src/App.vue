<template>
  <div class="app">
    <guess-component :guessData="guessData" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import GuessComponent from '@/components/GuessComponent.vue';
import LetterResult from '@/types/LetterResult';
import GuessData from './types/GuessData';

export default defineComponent({
  name: 'App',
  components: { 
    GuessComponent 
  },
  setup() {
    const guessData = ref<GuessData>({
      typedWord: 'AB',
      letters: [
        {letter: 'A', result: LetterResult.None},
        {letter: 'B', result: LetterResult.None},
        {letter: '', result: LetterResult.None},
        {letter: '', result: LetterResult.None},
        {letter: '', result: LetterResult.None},
      ]
    });

    return { guessData }
  },
});
</script>

<style>

</style>
