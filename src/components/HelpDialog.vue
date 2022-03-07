<template>
    <q-dialog @hide="onDialogHide" ref="dialogRef">
        <q-card class="q-dialog-plugin">
            <div class="title">
                <span class="title-text">
                    Bem Vindo!
                </span>
                <q-btn @click="hide" flat icon="close"/>
            </div>
            <div class="content">
                <q-card-section>
                    <span>
                        Adivinhe as 5 palavras horizontais em até 15 tentativas. <br />
                        Depois de cada tentativa, o quadrado mostra o quão perto você está.
                    </span>
                </q-card-section>
                <q-separator />
                <q-card-section>
                <span>
                    O quadrado
                </span>
                </q-card-section>
            </div>
        </q-card>
    </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { QBtn, QCard, QDialog, QSeparator, useDialogPluginComponent, QCardSection } from 'quasar'
import LetterTile from './LetterTile.vue';

export default defineComponent({
    components: {
        QBtn, 
        QCard, 
        QDialog, 
        QSeparator,
        QCardSection,
    },
    emits: [
        ...useDialogPluginComponent.emits,
    ],
    setup() {
        const { dialogRef, onDialogHide } = useDialogPluginComponent();
        return { dialogRef, onDialogHide }
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
        align-items: flex-start;
        padding: 24px;
    }

    .q-separator {
        width: 100%;
    }

    .grid-container {
        display: grid;
    }
</style>
