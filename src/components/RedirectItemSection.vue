<template>
    <q-item clickable>
        <q-item-section avatar>
            <q-icon :name="icon"/>
        </q-item-section>
        <q-item-section>{{title}}</q-item-section>
        <q-item-section avatar>
            <q-icon name="open_in_new"/>
        </q-item-section>
    </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { QIcon, QItem, QItemSection, } from 'quasar'


export default defineComponent({
    components: {
        QIcon,
        QItem, 
        QItemSection,
    },
    props: {
        title: {
            required: true,
            type: String,
        },
        icon: {
            required: true,
            type: String,
        }
    }
})
</script>
