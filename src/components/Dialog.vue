<template>
<Button  @click="x">2222</Button>
<Dialog v-model:visiable="v"  :closeOnclickOverLay="true" :ok="f1" :cancel="f2">
    <template v-slot:title>
        <div>李白</div>
    </template>
    <template v-slot:content>
        <div>事了拂衣去</div>
        <div>深藏身与名</div>
    </template>
</Dialog>
<h1>发呢和</h1>
<Button @click="showDialog">3333</Button>

</template>
<script lang="ts" setup>
import { ref } from "vue"
import Dialog from "../lib/dialog1.vue"
import Button from "../lib/button1.vue"
import openDialog from "../lib/openDialog"
const showDialog=()=>{
    openDialog({
        title:"白哦",
        content:"今夕何夕,见此良人",
    })
}
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