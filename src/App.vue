<template>
  <div class="app">
    <div v-if="gameData.isInitiated">
      <game-component :gameData="gameData"/>
    </div>
    <div v-else>
      <span>
        Aguarde
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import GameComponent from './components/GameComponent.vue';
import GameData from './types/GameData';

export default defineComponent({
  name: 'App',
  components: { 
    GameComponent,
  },
  setup() {
    const gameData = ref<GameData>(new GameData());
    return { gameData };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.gameData.initSquare();
    },
  }
});
</script>

<style>
  .app {
    touch-action: manipulation;
  }
</style>
