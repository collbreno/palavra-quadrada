<template>
  <div class="app" >
    <square-panel :squareController="squareController"/>
    <keyboard-component 
      @on-letter-pressed="addLetter" 
      @on-back-pressed="removeLetter"
      @on-enter-pressed="submit"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import SquareController from './types/SquareController';
import KeyboardComponent from './components/KeyboardComponent.vue';
import SquarePanel from './components/SquarePanel.vue';
import validLetters from './assets/validLetters';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'App',
  components: { 
    SquarePanel,
    KeyboardComponent,
  },
  setup() {
    const q = useQuasar();
    const squareController = ref<SquareController>(new SquareController([
        'RIRAM', 
        'ALISO', 
        'SURTA', 
        'ADERI', 
        'SOMOS'
    ]))

    return { squareController, q }
  },
  created() {
    window.addEventListener('keydown', this.keyPressHandler);
  },
  unmounted() {
    window.removeEventListener('keydown', this.keyPressHandler);
  },
  methods: {
    addLetter(letter: string) {
      this.squareController.addLetter(letter);
    },
    removeLetter() {
      this.squareController.removeLetter();
    },
    submit() {
      try {
        this.squareController.submit();
      } catch (error: any) {
        this.q.notify(error.message)
      }
    },
    keyPressHandler(event: KeyboardEvent) {
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
