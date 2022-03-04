<template>
    <q-toolbar class="bg-black text-white">
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
