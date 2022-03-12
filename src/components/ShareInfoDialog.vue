<template>
    <q-dialog @hide="onDialogHide" ref="dialogRef">
        <q-card class="q-dialog-plugin">
            <div class="title">
                <span class="title-text">
                    Compartilhe!
                </span>
                <q-btn @click="hide" flat icon="close"/>
            </div>
            <div class="content">
                <span class="square-emojis">
                    {{squareEmojis}}
                </span>
                <br/>
                <span class="content-text">
                    Cada emoji representa uma letra do quadrado de palavras. 
                    A cor de cada emoji representa a quantidade de chutes 
                    até você acertar essa letra.
                </span>
                <br/>
                <span class="content-text">
                    🟩 Acertou em até 5 tentativas <br/>
                    🟨 Acertou em até 10 tentativas <br/>
                    🟧 Acertou em até 15 tentativas <br/>
                    ⬛️ Não acertou
                </span>
            </div>
        </q-card>
    </q-dialog>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { QDialog, QCard, QBtn, useDialogPluginComponent, } from 'quasar';

export default defineComponent({
    components: {
        QDialog,
        QCard,
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
        },
        squareEmojis: {
            required: true,
            type: String,
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

    .content-text {
        align-self: flex-start;
    }

    image {
        width: 180px;
        align-self: center;
    }

    .square-emojis {
        white-space: pre-line;
    }

</style>
