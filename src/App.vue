<template>
  <div class="app">
    <p>{{ letters.length }}</p>
    <!-- <button @click="changeName('zelda')">change name</button> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import LetterData from 'src/types/LetterData';
import LetterResult from './types/LetterResult';

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const letters = ref<LetterData[]>([
      {letter: 'A', result: LetterResult.None},
      {letter: 'B', result: LetterResult.None},
      {letter: '', result: LetterResult.None},
      {letter: '', result: LetterResult.None},
      {letter: '', result: LetterResult.None},
    ]);

    return { letters }
  },
  methods: {
    // changeName(name: string) {
    //   this.name = name
    // }
  }
});
</script>

<style>

</style>
