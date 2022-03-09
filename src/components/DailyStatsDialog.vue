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
                    <local-stats-item :label="'Jogos'" :value="localStats.amountOfGames.toString()"/>
                    <local-stats-item :label="'Vitórias'" :value="winsPercentage"/>
                    <local-stats-item :label="'Sequência Atual'" :value="localStats.currentStreak.toString()"/>
                    <local-stats-item :label="'Melhor Sequência'" :value="localStats.maxStreak.toString()"/>
                </div>
                <wins-distribution-graph :localStats="localStats"/>
                <q-btn 
                    flat
                    :style="{backgroundColor: '#006847'}"
                    v-if="showShare" class="share-btn" 
                    @click="share"
                    label="Compartilhar" icon="share"/>
            </div>
        </q-card>
    </q-dialog>
</template>

<script lang="ts">
import SquareController from '@/types/SquareController'
import LocalStats from '@/types/LocalStats'
import { defineComponent, PropType } from 'vue'
import { QDialog, QCard, QBtn, useDialogPluginComponent, copyToClipboard } from 'quasar'
import LocalStatsItem from './LocalStatsItem.vue';
import WinsDistributionGraph from './WinsDistributionGraph.vue';

export default defineComponent({
    components: {
        QDialog,
        QCard,
        QBtn,
        LocalStatsItem,
        WinsDistributionGraph,
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
        },
        localStats: {
            required: true,
            type: Object as PropType<LocalStats>,
        },
    },
    computed: {
        showShare() {
            return this.squareController.isFinished;
        },
        winsPercentage() {
            let value = this.localStats.amountOfWins/this.localStats.amountOfGames;
            if (isNaN(value)) value = 0;
            value *= 100;
            return `${value.toFixed(1)}%`;
        }
    },
    methods: {
        hide() {
            this.dialogRef?.hide();
        },
        share() {
            copyToClipboard(this.squareController.colorRanking.getShareText({
                gameUrl: 'palavra-quadrada.web.app',
                gameNumber: this.squareController.gameNumber,
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
        padding: 18px;
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
        margin-top: 12px;
    }
</style>