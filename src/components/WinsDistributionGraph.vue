<template>
    <div class="amount-row" v-for="entry in localStats.winDistribution.entries()" :key="entry">
        <span class="amount">
            {{entry[0]}}
        </span>
        <span class="label" :style="getLabelStyle(entry[1])">
            {{entry[1]}}
        </span>
        <div class="bar" :style="getBarStyle(entry[1])" />
    </div>    
    <div class="amount-row">
        <span class="amount">
            X
        </span>
        <span class="label" :style="getLabelStyle(localStats.amountOfLosses, true)">
            {{localStats.amountOfLosses}}
        </span>
        <div class="bar" :style="getBarStyle(localStats.amountOfLosses, true)" />
    </div>
</template>

<script lang="ts">
import LocalStats from '@/types/LocalStats'
import { defineComponent, PropType } from 'vue'

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
        }
    },
    methods: {
        getBarStyle(count: number, lost = false) {
            const games = this.localStats.amountOfGames;
            return {
                backgroundColor: this.getLabelStyle(count, lost).backgroundColor,
                width: `${games == 0 ? 0 : count/games*100}%`,
            };
        },
        getLabelStyle(count: number, lost = false) {
            return {
                backgroundColor: count == 0 ?  this.disabledColor
                    : lost ? this.lostColor : this.enabledColor,
                borderRadius: count == 0 ? '4px' : '4px 0px 0px 4px',
            }
        }
    }
})
</script>

<style scoped>
    .bar {
        background-color: #007AA5;
        border-radius: 0px 4px 4px 0px;
        width: 0%;
    }

    .label {
        background-color: #007AA5;
        border-radius: 4px 0px 0px 4px;
        width: 16px;
        text-align: center;
    }

    .amount {
        width: 20px;
        text-align: end;
        margin-right: 6px;
    }

    .amount-row {
        display: flex;
        flex-direction: row;
        margin: 2px;
    }
</style>