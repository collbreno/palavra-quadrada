<template>
    <q-dialog no-backdrop-dismiss no-esc-dismiss
        ref="dialogRef" @hide="onDialogHide">
        <q-card class="q-dialog-plugin">
            <div class="title">
                <span class="title-text">
                    Estatísticas
                </span>
                <q-btn @click="hide" flat icon="close"/>
            </div>
            <div class="content">
                <div class="streaks">
                    <span>Sequência</span>
                    <span>Melhor Sequência</span>
                    <span>Vitórias</span>
                    <span>Jogos</span>
                </div>
                <q-btn 
                    v-if="showShare" class="share-btn" 
                    @click="share"
                    label="Compartilhar" icon="share"/>
            </div>
        </q-card>
    </q-dialog>
</template>

<script lang="ts">
import SquareController from '@/types/SquareController'
import { defineComponent, PropType } from 'vue'
import { QDialog, QCard, QBtn, useDialogPluginComponent, copyToClipboard } from 'quasar'

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
        return { dialogRef, onDialogHide };
    },
    props: {
        squareController: {
            required: true,
            type: Object as PropType<SquareController>,
        }
    },
    computed: {
        showShare() {
            return this.squareController.isFinished;
        },
    },
    methods: {
        hide() {
            this.dialogRef?.hide();
        },
        share() {
            copyToClipboard(this.squareController.colorRanking.getShareText({
                gameUrl: 'palavra-quadrada.web.app/',
                gameDay: 0.1,
                triesNeeded: this.squareController.triesNeeded,
            }))
                .then(() => this.$q.notify('Texto copiado'))
                .catch(() => this.$q.notify('Algo deu errado'))
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
        padding: 24px;
        display: flex;
        flex-direction: column;
    }

    .streaks {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .share-btn {
        margin: auto;
        align-self: center;
        margin-top: 48px;
    }
</style>