<template>
<div class="gulu-tabs">
  <div class="gulu-tabs-nav">
    <div class="gulu-tabs-nav-item" v-for="(t,index) in titles" @click="select(t)" :class="{selected: t=== selected}" :key="index">{{t}}</div>
        <div class="gulu-tabs-nav-indicator"></div>
  </div>
  <div class="gulu-tabs-content">
    <div class="gulu-tabs-content-item" :class="{selected: c?.props?.title === selected }" v-for="(c,index) in slots" :key="index">

        <component :is="c"  />
    </div>

    <!-- <div class="gulu-tabs-nav-item" v-for="(t,index) in titles" @click="select(t)" :class="{selected: t=== selected}" :key="index">{{t}}</div> -->
  </div>
</div>
</template>
<script setup lang="ts">
import Tab from "./tab.vue"
import { useSlots,computed} from 'vue'
const props = defineProps({
  selected:{
    type:String,
  }
})

const emits = defineEmits([
  "update:selected"
])
const slots = useSlots?.().default?.()
slots?.forEach((tag)=>{
    if(tag.type!==Tab){
    throw new Error("不是Tab组件")
    
    }
})
//ts-ignore
const titles = slots?.map((tag)=>{
    return tag?.props?.title
})
const current = computed(()=>{
  return slots?.filter((tag)=>{
    return tag.props.title===props.selected
  })[0]
})


const select = (title:string)=>{
  emits("update:selected",title)
}


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
        position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
        
      }
      &.selected {
        color: $blue;
      }
    }
     &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>