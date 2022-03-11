<template>
    <q-dialog no-backdrop-dismiss no-esc-dismiss
        @hide="onDialogHide" ref="dialogRef">
        <q-card class="q-dialog-plugin">
            <div class="title">
                <span class="title-text">
                    Bem Vindo!
                </span>
            </div>
            <div class="content">
                <q-card-section class="section">
                    <span>
                        Adivinhe as 5 palavras horizontais em até 15 tentativas. <br />
                        Depois de cada tentativa, o quadrado mostra o quão perto você está.
                    </span>
                </q-card-section>
                <q-separator />
                <q-card-section class="section">
                    <span class="section-title">
                        O quadrado
                    </span>
                    <q-img class="img-square" src="@/assets/images/tutorial_square.png"/>
                    <span>
                        As 5 palavras verticais também são palavras válidas e podem servir para ajudar
                        a adivinhar as 5 palavras horizontais.
                    </span>
                </q-card-section>
                <q-separator />
                <q-card-section class="section">
                    <span class="section-title">
                        Chutando
                    </span>
                    <q-img class="img-guessing" src="@/assets/images/tutorial_guessing.png"/>
                </q-card-section>
                <q-separator />
                <q-card-section class="section">
                    <span class="section-title">
                        Palavra horizontal
                    </span>
                    <q-img class="img-row" src="@/assets/images/tutorial_row.png"/>
                </q-card-section>
                <q-separator />
                <q-card-section class="section">
                    <span class="section-title">
                        Cores do teclado
                    </span>
                    <q-img class="img-keyboard" src="@/assets/images/tutorial_keyboard.png"/>
                </q-card-section>
                <q-separator />
                <q-card-actions class="actions" align="right">
                    <q-btn @click="hide" flat label="Ok"/>
                </q-card-actions>
            </div>
        </q-card>
    </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { QBtn, QCard, QDialog, QSeparator, useDialogPluginComponent, QCardSection, QImg, QCardActions, } from 'quasar'

export default defineComponent({
    components: {
        QBtn, 
        QCard, 
        QDialog, 
        QSeparator,
        QCardSection,
        QImg,
        QCardActions,
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
        padding: 12px;
    }

    .q-separator {
        width: 100%;
    }

    .grid-container {
        display: grid;
    }

    .section {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .img-square {
        width: 200px;
        align-self: center;
    }

    .img-guessing {
        width: 280px;
        align-self: center;
    }

    .img-row {
        width: 280px;
        align-self: center;
    }

    .img-keyboard {
        width: 280px;
        align-self: center;
    }

    .section-title {
        font-size: 17px;
        font-weight: 700;
        margin-bottom: 6px;
    }

    .actions {
        width: 100%;
    }
</style>
