<template>
<Button  @click="x">2222</Button>
<Dialog v-model:visiable="v"  :closeOnclickOverLay="true" :ok="f1" :cancel="f2"></Dialog>

</template>
<script lang="ts" setup>
import { ref } from "vue"
import Dialog from "../lib/dialog1.vue"
import Button from "../lib/button1.vue"
const v = ref(false)
const x = ()=>{
    v.value = !v.value
}
const f1 = ()=>{
    console.log("ok")
    return false
}
const f2 = ()=>{
    console.log("cancel")
}
</script>