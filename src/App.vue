<template>
  <div class="app" >
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
import validLetters from './assets/validLetters';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'App',
  components: { 
    WordPanel,
    KeyboardComponent,
  },
  setup() {
    const $q = useQuasar();
    const wordController = ref<WordController>(new WordController('GANSO'))

    return { wordController }
  },
  created() {
    window.addEventListener('keydown', this.keyPressHandler);
  },
  unmounted() {
    window.removeEventListener('keydown', this.keyPressHandler);
  },
  methods: {
    addLetter(letter: string) {
      this.wordController.addLetter(letter);
    },
    removeLetter() {
      this.wordController.removeLetter();
    },
    submit() {
      try {
        this.wordController.submit();
      } catch (error: any) {
        this.$q.notify(error.message)
      }
    },
    keyPressHandler(event: KeyboardEvent) {
      console.log(event)
      if (event.key.toLowerCase() == 'enter') {
        this.submit();
      }
      else if (event.key.toLowerCase() == 'backspace' || event.key.toLowerCase() == 'delete') {
        this.removeLetter();
      }
      else if (event.key && validLetters.includes(event.key)) {
        this.addLetter((event.key as string).toUpperCase())
      }
    }
  }
});
</script>

<style>

</style>
