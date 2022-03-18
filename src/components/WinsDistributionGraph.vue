<template>
    <div class="graph">
        <div class="amount-column" v-for="entry in localStats.winDistribution.entries()" :key="entry">
            <div class="bar" :style="getBarStyle(entry[1])" > 
                <span class="amount-text">
                    {{entry[1]}}
                </span>
            </div>
            <span class="label">
                {{entry[0]}}
            </span>
        </div>    
        <div class="amount-column">
            <div class="bar" :style="getBarStyle(localStats.amountOfLosses, true)" >
                <span class="amount-text">
                    {{localStats.amountOfLosses}}
                </span>
            </div>
            <span class="label">
                X
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import LocalStats from '@/types/LocalStats'
import { defineComponent, PropType } from 'vue'

const graphHeight = 200;
const minBarHeight = 28;

export default defineComponent({
    props: {
        localStats: {
            required: true,
            type: Object as PropType<LocalStats>,
        }
    },
    data() {
        return {
            enabledColor: '#007AA5',
            disabledColor: '#898E8C',
            lostColor: '#D12D33',
            graphHeight: `${graphHeight}px`,
        }
    },
    methods: {
        getBarStyle(count: number, lost = false) {
            const games = this.localStats.amountOfGames;
            const heightPercentage = games == 0 ? 0 : count/games;
            return {
                backgroundColor: count == 0 ?  this.disabledColor
                    : lost ? this.lostColor : this.enabledColor,
                height: `${heightPercentage*(graphHeight-minBarHeight) + minBarHeight}px`,
            };
        },
    }
})
</script>

<style scoped>
    .bar {
        background-color: #007AA5;
        border-radius: 4px;
        text-align: center;
        align-items: center;
        justify-content: flex-end;
        display: flex;
        flex-direction: column;
    }

    .amount-text {
        margin-top: 100%;
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 2px;
    }

    .label {
        width: 100%;
        text-align: center;
    }

    .amount-column {
        display: flex;
        flex-direction: column;
        margin: 2px;
        width: 26px;
    }

    .graph {
        display: flex;
        flex-direction: row;
        height: v-bind(graphHeight);
        align-items: flex-end;
        margin-top: 6px;
    }
</style>