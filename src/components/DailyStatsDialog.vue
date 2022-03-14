<template>
    <q-dialog
        ref="dialogRef" @hide="onDialogHide">
        <q-card class="q-dialog-plugin">
            <div class="title">
                <span class="title-text">
                    Estatísticas
                </span>
                <q-btn @click="hide" flat icon="close"/>
            </div>
            <div class="content">
                <q-card-section class="section">
                    <div class="streaks">
                        <local-stats-item :label="'Jogos'" :value="localStats.amountOfGames.toString()"/>
                        <local-stats-item :label="'Vitórias'" :value="winsPercentage"/>
                        <local-stats-item :label="'Sequência Atual'" :value="localStats.currentStreak.toString()"/>
                        <local-stats-item :label="'Melhor Sequência'" :value="localStats.maxStreak.toString()"/>
                    </div>
                    <wins-distribution-graph :localStats="localStats"/>
                </q-card-section>
                <q-separator v-if="showShare"/>
                <q-card-section v-if="showShare" class="section-row">
                    <q-btn 
                        flat
                        :style="{backgroundColor: '#006847'}"
                        @click="share"
                        label="Compartilhar" icon="share"/>
                    <q-btn 
                        flat icon="info"
                        @click="showShareInfoDialog"/>
                </q-card-section>
            </div>
        </q-card>
    </q-dialog>
</template>

<script lang="ts">
import SquareController from '@/types/SquareController'
import LocalStats from '@/types/LocalStats'
import { defineComponent, PropType } from 'vue'
import { QDialog, QCard, QBtn, useDialogPluginComponent, copyToClipboard, QSeparator, QCardSection, } from 'quasar'
import LocalStatsItem from './LocalStatsItem.vue';
import WinsDistributionGraph from './WinsDistributionGraph.vue';
import ShareInfoDialog from './ShareInfoDialog.vue';
import { LSKeys } from '@/assets/constants';

export default defineComponent({
    components: {
        QDialog,
        QCard,
        QBtn,
        LocalStatsItem,
        WinsDistributionGraph,
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
            const hasSeenShareInfo = localStorage.getItem(LSKeys.hasSeenShareInfo);
            if (!hasSeenShareInfo || !JSON.parse(hasSeenShareInfo)) {
                this.showShareInfoDialog();
                localStorage.setItem(LSKeys.hasSeenShareInfo, JSON.stringify(true));
            }
        },
        showShareInfoDialog() {
            this.$q.dialog({
                component: ShareInfoDialog,
                componentProps: {
                    squareEmojis: this.squareController.colorRanking.getBoardRanking(
                        this.squareController.triesNeeded,
                    )
                }
            });
        },
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
    
    .q-separator {
        width: 100%;
    }
    
    .section {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .section-row {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 12px;
    }
</style>