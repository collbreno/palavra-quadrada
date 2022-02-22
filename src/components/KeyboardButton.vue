<template>
    <md-btn>A</md-btn>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { MDBBtn as MdBtn } from 'mdb-vue-ui-kit';

export default defineComponent({
    components: {
        MdBtn,
    },
    props: {
        letter: {
            required: true,
            type: Object as PropType<string>,
        }
    }
})
</script>
