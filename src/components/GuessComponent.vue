<template>
    <div class="guess">
        <letter-tile v-for="(letter, index) in letters"
            :color="'#424242'" 
            v-bind:key="`guess-letter-${index}`" :letter="letter"/>
        <letter-tile 
            :letter="''"/>
    </div>

</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import LetterTile from '@/components/LetterTile.vue';

export default defineComponent({
    components: {
        LetterTile,
    },
    props: {
        letters: {
            required: true,
            type: Object as PropType<string[]>
        }
    }
})
</script>

<style scoped>
    .guess {
        display: flex;
        flex-direction: row;
    }
</style>