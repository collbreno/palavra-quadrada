<template>
    <q-dialog
        ref="dialogRef" @hide="onDialogHide">
        <q-card class="q-dialog-plugin">
            <div class="dialog-title">
                <span class="dialog-title-text">
                    Configurações
                </span>
                <q-btn flat @click="onDialogHide" icon="close"/>
            </div>
            <q-card-section class="card-section">
                <span>
                    oi
                </span>
            </q-card-section>
            <q-separator />
        </q-card>
    </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { QDialog, QCard, QBtn, useDialogPluginComponent, QSeparator, QCardSection, } from 'quasar'

export default defineComponent({
    components: {
        QDialog, 
        QCard,
        QBtn,
        QSeparator,
        QCardSection,
    },
    emits: [
        ...useDialogPluginComponent.emits,
    ],
    setup() {
        const { dialogRef, onDialogHide } = useDialogPluginComponent();
        return { dialogRef, onDialogHide };
    },
})
</script>
