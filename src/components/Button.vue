<template>
    <Button  >nihao</Button>
    <Button   theme="button">nihaonihaonihaonihaoni haonihaon haonihaon haonihaon haonihaonihaonihao</Button>
    <Button  theme="link">nihao</Button>
    <Button  theme="a">nihao</Button>

    <hr>
    <h1>示例2</h1>
  <div>
    <Button size="big">大大大</Button>
    <Button>普普通</Button>
    <Button size="small">小小小</Button>
  </div>
</template>
<script lang="ts" setup>
import Button from '../lib/button1.vue'

 const click = ()=>{
        console.log(123)
    }
</script>