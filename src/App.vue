<template>
  <div class="app">
    <word-panel :wordController="wordController"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import WordPanel from './components/WordPanel.vue';
import WordController from './types/WordController';

export default defineComponent({
  name: 'App',
  components: { 
    WordPanel,
  },
  setup() {
    const wordController = ref<WordController>(new WordController('GANSO'))

    return { wordController }
  },
  methods: {
    addLetter(letter: string) {
      this.wordController.addLetter(letter);
    },
    removeLetter() {
      this.wordController.removeLetter();
    }
  }
});
</script>

<style>

</style>
