<template>
    <Tabs v-model:selected="x">
        <Tab title="导航1">
  <p>          所有的昨日都遗失在眼前</p>
<p>            念念不忘的岁月</p>
<p>       开始沿着时间的长河</p>
<p>            缓慢地流去远方</p>
<p>            你在回忆的源头苏醒</p>
<p>            轻轻蠕动的样子真的很美</p>
<p>           我沉沦于昨夜的梦里</p>
<p>           隐约可见幸福即将来临</p>
<p>            那些过往曾经的笑容</p>
  <p>          反反复复出现在我脑海</p>
   <p>         就这样静静的等待</p>
    <p>        等待你的爱情向我跃来</p>
    <p>        如今，每个梦里</p>
    <p>        都会出现你的身影</p>
     <p>       每首诗中</p>
     <p>       都会把你深情的呼喊</p>
      <p>      我们终究不能回归起点</p>
      <p>      也许相见不如怀念</p>
      <p>      我永远怀念你微笑的样子</p>
       <p>     心中的记忆填满心房</p>
           </Tab>
        <Tab title="导航2">
            <p>我破茧而出</p>
               <p>化作一只美丽的蝴蝶</p> 
               <p>在你的芬芳里飞翔</p> 
               <p>我招来一阵花语</p> 
               <p>用一段深情的独白</p> 
               <p>追寻另一只蝴蝶</p> 
        </Tab>
        <Tab title="导航3">
           <p>当你离开以后</p> 
            <p>我没了牵挂</p>
            <p>却留下孤独和忧伤</p>
            
            </Tab>
    </Tabs>
</template>
<script lang="ts" setup>
import Tabs from "../lib/tabs.vue"
import Tab from "../lib/tab.vue"
import { ref } from "@vue/reactivity"
const x = ref('导航1')
</script>