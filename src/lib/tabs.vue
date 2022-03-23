<template>
<div class="gulu-tabs">
  <div class="gulu-tabs-nav">
    <div class="gulu-tabs-nav-item" v-for="(t,index) in titles" :key="index">{{t}}</div>
  </div>
  <div class="gulu-tabs-content">
    <component class="gulu-tabs-content-item" v-for="(c,index) in slots" :is="c" :key="index" />
  </div>
</div>
</template>
<script setup lang="ts">
import Tab from "./tab.vue"
import { useSlots} from 'vue'
const slots = useSlots?.().default?.()
slots?.forEach((tag)=>{
    if(tag.type!==Tab){
    throw new Error("不是Tab组件")
    
    }
})
const titles = slots?.map((tag)=>{
    return tag?.props?.title
})


</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
        
      }
      &:active {
          background: black;
          z-index: 10;
          border:1px solid red;
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>