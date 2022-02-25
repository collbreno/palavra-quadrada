<template>
    <div class="panel">
        <guess-component :letters="squareController.guessData.letters" />
        
        <word-component v-for="word in squareController.words"  
            :key="word" :wordData="word"/>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import SquareController from '@/types/SquareController';
import GuessComponent from '@/components/GuessComponent.vue';
import WordComponent from '@/components/WordComponent.vue';


export default defineComponent({
    components: {
        GuessComponent,
        WordComponent,
    },
    props: {
        squareController: {
            required: true,
            type: Object as PropType<SquareController>
        }
    }
})
</script>

<style scoped>
    .panel {
        margin: 10px;
    }
</style>