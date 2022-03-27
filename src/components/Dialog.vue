<template>
 <h1>Dialog 组件示例 </h1>
  <div class="demo">
    <h2>常规用法</h2>
    <div class="demo-component">
        <Button  @click="show1">打开对话框</Button>

    </div>
    <div class="demo-actions">
      <Button @click="toogle">查看代码</Button>
    </div>
    <div class="demo-code" v-if="z">
          <pre v-html="Prism.highlight(code1,Prism.languages.html,'html')"/>

    </div>
  </div>
  <div class="demo">
    <h2>点击空白处无法关闭</h2>
    <div class="demo-component">
        <Button  @click="showDialog">打开对话框</Button>

    </div>
    <div class="demo-actions">
      <Button @click="toogle2">查看代码</Button>
    </div>
    <div class="demo-code" v-if="y">
        <pre v-html="Prism.highlight(code2,Prism.languages.html,'html')"/>

    </div>
  </div>

<Dialog v-model:visiable="v"  :closeOnclickOverLay="true" :ok="f1" :cancel="f2">
    <template v-slot:title>
        <div>李白</div>
    </template>
    <template v-slot:content>
        <div>事了拂衣去</div>
        <div>深藏身与名</div>
    </template>
</Dialog>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import Dialog from "../lib/dialog1.vue"
import Button from "../lib/button1.vue"
import {openDialog} from "../lib/openDialog"
import 'prismjs/themes/prism.css'
import "prismjs"
const Prism = (window as any).Prism
const z = ref(true)
const y = ref(true)
const toogle=()=>{z.value = !z.value}
const toogle2=()=>{y.value = !y.value}
const showDialog=()=>{
    openDialog({
        title:"白哦",
        content:"今夕何夕,见此良人",
    })
}
const v = ref(false)
const show1 = ()=>{
    v.value = !v.value
}
const f1 = ()=>{
    console.log("ok")
    return false
}
const f2 = ()=>{
    console.log("cancel")
}

const code1 = `
<template>
  <div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
      <template v-slot:content>
         <div>事了拂衣去</div>
        <div>深藏身与名</div>
      </template>
      <template v-slot:title>
        <strong>李白</strong>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue'
import { openDialog } from '../lib/openDialog'
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const f1 = () => {
      return false
    }
    const f2 = () => {}
<\/script>

`
const code2 = `
<template>
  <div>
    <Button @click="showDialog">打开对话框</Button>
  </div>
</template>

<script lang="ts" setup>
import Button from '../lib/Button.vue'
import { ref, h } from 'vue'
import { openDialog } from '../lib/openDialog'
   const showDialog=()=>{
    openDialog({
        title:"白哦",
        content:"今夕何夕,见此良人",
    })
}
const f1 = ()=>{
    console.log("ok")
    return false
}
const f2 = ()=>{
    console.log("cancel")
}
<\/script>

`
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
     background: rgb(226, 226, 226);

    overflow:auto;
    >pre {
      background: rgb(226, 226, 226);
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>