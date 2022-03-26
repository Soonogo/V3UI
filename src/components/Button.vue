<template>

 <div class="demo">

<h1>常规使用</h1>
    <div class="demo-component">

    <Button  >nihao</Button>
    <Button   theme="button">nihaoni</Button>
    <Button  theme="link">nihao</Button>
    <Button  theme="a">nihao</Button>
        
   
    <div class="demo-code" >
       <pre v-html="Prism.highlight(code1,Prism.languages.html,'html')"/>
    </div>
</div>
</div>
   <div class="demo">
    <h1>支持 size</h1>
    <div class="demo-component">

  <div>
    <Button size="big">大大大</Button>
    <Button>普普通</Button>
    <Button size="small">小小小</Button>
    </div>
    <div class="demo-code" >
       <pre v-html="Prism.highlight(code2,Prism.languages.html,'html')"/>
    </div>
  </div>
  </div>
    <div class="demo">
    <h1>支持 level</h1>
    <div class="demo-component">
  <div>
    <div>

      <Button level="main">主要按钮</Button>
      <Button style="background:white;color:black;">普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    
    <div class="demo-code" >
       <pre v-html="Prism.highlight(code3,Prism.languages.html,'html')"/>
    </div>
</div>
  </div>
  </div>
 <div class="demo">
    <h1>支持 disabled</h1>
    <div class="demo-component"> 
       <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用按钮</Button>
</div>
<div class="demo-code" >
       <pre v-html="Prism.highlight(code4,Prism.languages.html,'html')"/>
    </div>
  </div>
  </div> 
<div class="demo">
    <h1>支持显示加载中</h1>
    <div class="demo-component"> 
        <Button loading>加载中</Button>
  <Button >加载完成</Button>
  </div>
  <div class="demo-code" >
       <pre v-html="Prism.highlight(code5,Prism.languages.html,'html')"/>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Button from '../lib/button1.vue'
import 'prismjs/themes/prism.css'
import "prismjs"
import { ref } from '@vue/reactivity'
const Prism = (window as any).Prism
const x = ref(true)

 const click = ()=>{
        console.log(123)
    }
const toogle=()=>{x.value = !x.value}

const code1 = `
<template>
  <div>
    <Button>你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
</template>
<script lang="ts" setup>
import Button from "../lib/Button.vue";
<\/script>

`
const code2 = `
<template>
  <div>
    <div>
      <Button size="big">大大大</Button>
      <Button>普普通</Button>
      <Button size="small">小小小</Button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Button from "../lib/Button.vue";
<\/script>

`
const code3 = `
<template>
  <div>
    <div>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Button from "../lib/Button.vue";
<\/script>

`
const code4 = `
<template>
  <Button disabled>禁用按钮</Button>
  <Button theme="link" disabled>禁用链接按钮</Button>
  <Button theme="text" disabled>禁用按钮</Button>
</template>
<script lang="ts" setup>
import Button from "../lib/Button.vue";
<\/script>

`
const code5 = `
<template>
  <div>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
<\/script>

`
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
h1{
  padding: 0 12px;
}
.code{
  padding: 24px 0;
}
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
    padding: 8px 1px;
    border-top: 1px dashed $border-color;
    >pre {
      background: rgb(226, 226, 226);
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>