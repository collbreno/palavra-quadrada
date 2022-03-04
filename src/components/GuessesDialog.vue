<template>
    <q-dialog position="bottom" @hide="onDialogHide" ref="dialogRef">
        <q-card class="q-dialog-plugin">
            <div class="title">
                <span class="title-text">
                    Chutes
                </span>
                <q-btn @click="hide" flat icon="close"/>
            </div>
            <div class="content">
                <div class="row" v-for="(guess, index) in guesses" :key="guess">
                    <guess-list-item 
                        :guessIndex="index"
                        :word="guess"/>
                </div>    
            </div>
        </q-card>
    </q-dialog>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { QDialog, QCard, QBtn, useDialogPluginComponent } from 'quasar';
import GuessListItem from './GuessListItem.vue';

export default defineComponent({
    components: {
        QDialog,
        QCard,
        GuessListItem,
        QBtn,
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
    },
    methods: {
        hide() {
            this.dialogRef?.hide();
        }
    }
})
</script>

<style scoped>
    .title {
        margin-left: 24px;
        margin-right: 24px;
        margin-top: 16px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
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
