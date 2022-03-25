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
            <div class="dialog-content">
                <q-card-section class="dialog-section">
                    <q-list>
                        <q-item clickable @click="toggle">
                            <q-item-section class="dialog-text">Ativar alto contraste</q-item-section>
                            <q-item-section avatar>
                                <q-toggle @click="toggle" :model-value="colorBlindData.isActive"/>
                            </q-item-section>
                        </q-item>
                        <redirect-item-section class="dialog-text"
                            :icon="'fab fa-twitter'"
                            :title="'Twitter'"
                            :redirectLink="'https://twitter.com/collbreno'"/>
                        <redirect-item-section class="dialog-text"
                            :icon="'mail'"
                            :title="'E-mail'"
                            :redirectLink="'mailto:brenocoll99@gmail.com'"/>
                        <redirect-item-section class="dialog-text"
                            :icon="'fab fa-github'"
                            :title="'Github'"
                            :redirectLink="'https://github.com/collbreno'"/>
                    </q-list>
                </q-card-section>
                <q-separator />
                <q-card-section class="dialog-section">
                    <span class="dialog-text">
                        Palavra Quadrada é baseado em <a href="https://squareword.org/">Squareword</a>.
                    </span>
                </q-card-section>
            </div>
        </q-card>
    </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { QDialog, QCard, QToggle, QBtn, useDialogPluginComponent, QSeparator, QCardSection, QList, QItem, QItemSection, } from 'quasar'
import RedirectItemSection from './RedirectItemSection.vue';
import { ColorBlindDataKey, injectStrict } from '@/utils/Injection';

export default defineComponent({
    components: {
        QDialog, 
        QCard,
        QBtn,
        QCardSection,
        QItemSection, 
        QItem,
        QSeparator,
        QList,
        QToggle,
        RedirectItemSection,
    },
    emits: [
        ...useDialogPluginComponent.emits,
    ],
    setup() {
        const { dialogRef, onDialogHide } = useDialogPluginComponent();
        const colorBlindData = injectStrict(ColorBlindDataKey);
        return { dialogRef, onDialogHide, colorBlindData };
    },
    methods: {
        toggle() {
            this.colorBlindData.toggle();
        }
    }
})
</script>

<style scoped>
    a {
        color: #00FFFF;
    }

    .dialog-text {
        font-size: 15px;
    }
</style>