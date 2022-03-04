<template>
  <div class="app">
    <game-toolbar 
      @onChartPressed="showStats"
      @onHelpPressed="showHelp"
      @onSettingsPressed="showSettings"/>
    <square-panel 
      :squareController="squareController"
      @onGuessCountPressed="showGuesses"/>
    <keyboard-component 
      :keyboardData="squareController.keyboardData"
      @onLetterPressed="addLetter" 
      @onBackPressed="removeLetter"
      @onEnterPressed="submit"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import SquareController from './types/SquareController';
import KeyboardComponent from './components/KeyboardComponent.vue';
import SquarePanel from './components/SquarePanel.vue';
import validLetters from './assets/validLetters';
import GuessesDialog from './components/GuessesDialog.vue';
import DailyStatsDialog from './components/DailyStatsDialog.vue';
import GameToolbar from './components/GameToolbar.vue';
import { LSKeys } from './assets/constants';

export default defineComponent({
  name: 'App',
  components: { 
    SquarePanel,
    KeyboardComponent,
    GameToolbar,
  },
  setup() {
    const squareController = ref<SquareController>(new SquareController([
        'BICOS',
        'ACENA',
        'ZEREI',
        'AMORA',
        'ROLAS',
    ]))

    return { squareController }
  },
  created() {
    window.addEventListener('keydown', this.keyPressHandler);
    const dayFromLocalStorage = localStorage.getItem(LSKeys.day);
    const today = (new Date()).toISOString().substring(0, 10);
    if (dayFromLocalStorage && dayFromLocalStorage == today) { 
      const guessesFromLS = localStorage.getItem(LSKeys.guesses);
      if (guessesFromLS) {
        const guesses = JSON.parse(guessesFromLS);
        this.squareController.batchSubmit(guesses);
        this.checkGameOver();
      }
    }
    else {
      localStorage.removeItem(LSKeys.guesses);
      localStorage.setItem(LSKeys.day, today);
    }
  },
  methods: {
    addLetter(letter: string) {
      this.squareController.addLetter(letter);
    },
    removeLetter() {
      this.squareController.removeLetter();
    },
    async submit() {
      try {
        const lastGuess = await this.squareController.submit();
        this.checkGameOver();
        if (lastGuess) {
          localStorage.setItem(
            LSKeys.guesses, 
            JSON.stringify(this.squareController.guesses)
          );
        }
      } catch (error: any) {
        this.$q.notify(error.message)
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
    },
    showGuesses() {
      if (this.squareController.guesses.length > 0) {
        this.$q.dialog({
          component: GuessesDialog,
          componentProps: {
            guesses: this.squareController.guesses,
          },
        });
      }
      else {
        this.$q.notify('Ainda não há nenhum chute');
      }
      
    },
    checkGameOver() {
      if (this.squareController.isFinished) {
        this.showStats();
      }
    },
    showHelp() {
      //TODO: implement
      this.$q.notify('Ainda não implementado');
    },
    showStats() {
      this.$q.dialog({
        component: DailyStatsDialog,
        componentProps: {
          squareController: this.squareController,
        }
      });
    },
    showSettings() {
      //TODO: implement
      this.$q.notify('Ainda não implementado');
    },
  }
});
</script>

<style>

</style>
