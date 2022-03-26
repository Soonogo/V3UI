<template>
<div class="gulu-tabs">
  <div class="gulu-tabs-nav" ref="container">
    <div class="gulu-tabs-nav-item"  v-for="(t,index) in titles" @click="select(t)" :class="{selected: t=== selected}" :ref="el=>{ if(t===selected) selectedItem=el}" :key="index">{{t}}</div>
        <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
  </div>
  <div class="gulu-tabs-content">
    
    <component :is="current" :key="current.props.title" />
        </div>

    <!-- <div class="gulu-tabs-nav-item" v-for="(t,index) in titles" @click="select(t)" :class="{selected: t=== selected}" :key="index">{{t}}</div> -->
  </div>
</template>
<script setup lang="ts">
import Tab from "./tab.vue"
import { useSlots,computed, ref, onMounted, watchEffect} from 'vue'
const props = defineProps({
  selected:{
    type:String,
  }
})

const emits = defineEmits([
  "update:selected"
])
const selectedItem = ref(null)
const indicator = ref<HTMLDivElement>(null)
const container = ref<HTMLDivElement>(null)
const current = computed(() => {
      return slots?.find(tag => tag?.props?.title === props.selected)
  })
  onMounted(()=>{
    watchEffect(()=>{
      const {
        width
      } = selectedItem.value.getBoundingClientRect()
      indicator.value.style.width = width + 'px'
      const {
        left: left1
      } = container.value.getBoundingClientRect()
      const {
        left: left2
      } = selectedItem.value.getBoundingClientRect()
      const left = left2 - left1
      indicator.value.style.left = left + 'px'
    })
  })


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
      width: 41.6px;
      transition: all 500ms;
    }
  }
  &-content {
    padding: 8px 0;
  
  }
}
</style>