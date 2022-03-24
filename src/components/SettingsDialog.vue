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
                <q-list>
                    <q-item clickable @click="toggle">
                        <q-item-section>Modo daltônico</q-item-section>
                        <q-item-section avatar>
                            <q-toggle v-model="colorBlind"/>
                        </q-item-section>
                    </q-item>
                    <redirect-item-section 
                        :icon="'fab fa-twitter'"
                        :title="'Twitter'"/>
                    <redirect-item-section 
                        :icon="'mail'"
                        :title="'E-mail'"/>
                    <redirect-item-section 
                        :icon="'fab fa-github'"
                        :title="'Github'"/>
                </q-list>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { QDialog, QCard, QToggle, QBtn, QIcon, useDialogPluginComponent, QSeparator, QCardSection, QList, QItem, QItemSection, } from 'quasar'
import RedirectItemSection from './RedirectItemSection.vue';

export default defineComponent({
    components: {
        QDialog, 
        QCard,
        QBtn,
        QCardSection,
        QItemSection, 
        QItem,
        QList,
        QToggle,
        RedirectItemSection,
    },
    emits: [
        ...useDialogPluginComponent.emits,
    ],
    setup() {
        const { dialogRef, onDialogHide } = useDialogPluginComponent();
        const colorBlind = ref<boolean>(false);
        return { dialogRef, onDialogHide, colorBlind };
    },
    methods: {
        toggle() {
            this.colorBlind = !this.colorBlind;
        }
    }
})
</script>
