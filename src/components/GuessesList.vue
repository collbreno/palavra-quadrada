<template>
    <q-dialog position="bottom" ref="dialogRef" @hide=onDialogHide>
        <q-card class="q-dialog-plugin">
            <div class="title">
                <span class="title-text">
                    Chutes
                </span>
            </div>
            <div class="content">
                <div class="row" v-for="(guess, i) in guesses" :key="guess">
                    <letter-tile 
                        v-for="(letter, j) in guess.split('')" :key="`guess-list-${i}${j}`" 
                        :letter="letter"
                        :color="'#263238'"/>
                </div>    
            </div>
        </q-card>
    </q-dialog>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { QDialog, QCard, useDialogPluginComponent } from 'quasar';
import LetterTile from './LetterTile.vue';

export default defineComponent({
    components: {
        QDialog,
        QCard,
        LetterTile,
    },
    emits: [
        ...useDialogPluginComponent.emits,
    ],
    setup() {
        const { dialogRef, onDialogHide } = useDialogPluginComponent();
        return { dialogRef, onDialogHide }
    },
    props: {
        guesses: {
            required: true,
            type: Object as PropType<string[]>,
        }
    }
})
</script>

<style scoped>
    .title {
        margin-left: 24px;
        margin-top: 16px;
    }

    .title-text {
        font-size: 24px;
        font-weight: 700;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px;
    }

</style>
