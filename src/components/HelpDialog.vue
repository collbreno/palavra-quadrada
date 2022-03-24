<template>
    <q-dialog
        @hide="hide" ref="dialogRef">
        <q-card class="q-dialog-plugin">
            <div class="dialog-title">
                <span class="dialog-title-text">
                    Bem Vindo!
                </span>
            </div>
            <div class="dialog-content">
                <q-card-section class="dialog-section">
                    <span>
                        Adivinhe as 5 palavras horizontais em até 15 tentativas. <br />
                        Depois de cada tentativa, o quadrado mostra o quão perto você está
                        de finalizar o jogo.
                    </span>
                </q-card-section>
                <q-separator />
                <q-card-section class="dialog-section">
                    <span class="dialog-section-title">
                        O quadrado
                    </span>
                    <q-img class="img-square" src="@/assets/images/tutorial_square.png"/>
                    <span>
                        As 5 palavras verticais também são palavras válidas e podem servir para ajudar
                        a adivinhar as 5 palavras horizontais.
                    </span>
                </q-card-section>
                <q-separator />
                <q-card-section class="dialog-section">
                    <span class="dialog-section-title">
                        Chutando
                    </span>
                    <q-img class="img-guessing" src="@/assets/images/tutorial_guessing.png"/>
                </q-card-section>
                <q-separator />
                <q-card-section class="dialog-section">
                    <span class="dialog-section-title">
                        Palavra horizontal
                    </span>
                    <q-img class="img-row" src="@/assets/images/tutorial_row.png"/>
                </q-card-section>
                <q-separator />
                <q-card-section class="dialog-section">
                    <span class="dialog-section-title">
                        Cores do teclado
                    </span>
                    <q-img class="img-keyboard" src="@/assets/images/tutorial_keyboard.png"/>
                </q-card-section>
                <q-separator />
                <q-card-section class="dialog-section">
                    <span class="dialog-section-title">
                        Boa Sorte!
                    </span>
                    <q-card-actions class="actions" align="right">
                        <q-btn @click="hide" flat label="Ok"/>
                    </q-card-actions>
                </q-card-section>
            </div>
        </q-card>
    </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { QBtn, QCard, QDialog, QSeparator, useDialogPluginComponent, QCardSection, QImg, QCardActions, } from 'quasar'
import { LSKeys } from '@/assets/constants';

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
            localStorage.setItem(LSKeys.hasSeenHelp, JSON.stringify(true));
        }
    }
})
</script>

<style scoped>
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

    .actions {
        width: 100%;
    }
</style>
