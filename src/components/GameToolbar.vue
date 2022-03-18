<template>
    <q-toolbar class="bg-black text-white toolbar">
        <div class="beta-label">
            <span class="beta-label-text">
                Beta
            </span>
        </div>
        <q-toolbar-title>
            Palavra Quadrada
        </q-toolbar-title>    
        <q-btn flat @click="$emit('onChartPressed')">
            <q-icon name="bar_chart"/>
        </q-btn>
        <q-btn flat @click="$emit('onHelpPressed')">
            <q-icon name="help"/>
        </q-btn>
        <q-btn flat @click="$emit('onSettingsPressed')">
            <q-icon name="settings"/>
        </q-btn>
    </q-toolbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { QToolbar, QToolbarTitle, QBtn, QIcon } from 'quasar';

export default defineComponent({
    components: {
        QToolbar,
        QToolbarTitle,
        QBtn, 
        QIcon,
    },
    emits: [
        'onHelpPressed',
        'onChartPressed',
        'onSettingsPressed',
    ],
})
</script>

<style scoped>
    .beta-label {
        background-color: rgb(175,30,45);
        position: absolute;
        width: 120px;
        top: 15px;
        left: -30px;
        transform: rotateZ(-45deg);
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .beta-label-text {
        font-weight: 700;
        align-self: center;
    }

    .toolbar {
        overflow: hidden;
    }
</style>
