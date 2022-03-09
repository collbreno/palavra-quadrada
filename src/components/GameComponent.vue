<template>
    <game-toolbar 
      @onChartPressed="showStats"
      @onHelpPressed="showHelp"
      @onSettingsPressed="showSettings"/>
    <square-panel 
      :squareController="gameData.square"
      @onGuessCountPressed="showGuesses"/>
    <keyboard-component 
      :keyboardData="gameData.square.keyboardData"
      @onLetterPressed="addLetter" 
      @onBackPressed="removeLetter"
      @onEnterPressed="submit"/>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import SquarePanel from './SquarePanel.vue';
import KeyboardComponent from './KeyboardComponent.vue';
import GameToolbar from './GameToolbar.vue';
import GameData from '@/types/GameData';
import DailyStatsDialog from './DailyStatsDialog.vue';
import HelpDialog from './HelpDialog.vue';
import validLetters from '@/assets/validLetters';
import GuessesDialog from './GuessesDialog.vue';

export default defineComponent({
  components: { 
      SquarePanel,
      KeyboardComponent,
      GameToolbar,
  },
  props: {
      gameData: {
          required: true,
          type: Object as PropType<GameData>,
      },
  },
  created() {
    window.addEventListener('keydown', this.keyPressHandler);
    if (this.gameData.square.isFinished) {
      this.showStats();
    }
  },
  methods: {
    addLetter(letter: string) {
      this.gameData.addLetter(letter);
    },
    removeLetter() {
      this.gameData.removeLetter();
    },
    async submit() {
      try {
        await this.gameData.submit();
        if (this.gameData.square.isFinished) {
          this.showStats();
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
      this.$q.dialog({
        component: GuessesDialog,
        componentProps: {
          guesses: this.gameData.square.guesses,
        },
      });
    },
    showHelp() {
      this.$q.dialog({
        component: HelpDialog,
      });
    },
    showStats() {
      this.$q.dialog({
        component: DailyStatsDialog,
        componentProps: {
          squareController: this.gameData.square,
          localStats: this.gameData.localStats,
        }
      });
    },
    showSettings() {
      //TODO: implement
      this.$q.notify('Ainda não implementado');
    },
  },

})
</script>
