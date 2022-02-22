<template>
  <div class="app">
    <word-panel :wordController="wordController"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import LetterResult from '@/types/LetterResult';
import GuessData from './types/GuessData';
import WordPanel from './components/WordPanel.vue';
import WordController from './types/WordController';

export default defineComponent({
  name: 'App',
  components: { 
    WordPanel,
  },
  setup() {
    const wordController = ref<WordController>({
      correctWord: 'GANSO',
      guesses: [
        {
          typedWord: '', 
          letters: [
            {letter: 'A', result: LetterResult.None},
            {letter: 'B', result: LetterResult.None},
            {letter: '', result: LetterResult.None},
            {letter: '', result: LetterResult.None},
            {letter: '', result: LetterResult.None},
          ],
        },
        {
          typedWord: '', 
          letters: [
            {letter: 'A', result: LetterResult.None},
            {letter: 'B', result: LetterResult.None},
            {letter: '', result: LetterResult.None},
            {letter: '', result: LetterResult.None},
            {letter: '', result: LetterResult.None},
          ],
        },
        {
          typedWord: '', 
          letters: [
            {letter: 'A', result: LetterResult.None},
            {letter: 'B', result: LetterResult.None},
            {letter: '', result: LetterResult.None},
            {letter: '', result: LetterResult.None},
            {letter: '', result: LetterResult.None},
          ],
        },
      ]
    });

    return { wordController }
  },
});
</script>

<style>

</style>
