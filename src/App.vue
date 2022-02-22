<template>
  <div class="app">
    <word-panel :wordController="wordController"/>
    <keyboard-component 
      @on-letter-pressed="addLetter" 
      @on-back-pressed="removeLetter"
      @on-enter-pressed="submit"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import WordPanel from './components/WordPanel.vue';
import WordController from './types/WordController';
import KeyboardComponent from './components/KeyboardComponent.vue';

export default defineComponent({
  name: 'App',
  components: { 
    WordPanel,
    KeyboardComponent,
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
    },
    submit() {
      this.wordController.submit();
    },
  }
});
</script>

<style>

</style>
