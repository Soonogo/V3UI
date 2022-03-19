<template>
<Button  @click="x">2222</Button>
<Dialog v-model:visiable="v"></Dialog>

</template>
<script lang="ts" setup>
import { ref } from "vue"
import Dialog from "../lib/dialog1.vue"
import Button from "../lib/button1.vue"
const v = ref(false)
const x = ()=>{
    v.value = !v.value
}
</script>