<template>
<div>
    <div v-for="(t,index) in titles" key="index">{{t}}</div>
<component v-for="(c,index) in slots" :is="c" key="index"></component>

</div>
</template>
<script setup lang="ts">
import Tab from "./tab.vue"
import { useSlots} from 'vue'
const slots = useSlots().default()
slots.forEach((tag)=>{
    if(tag.type!==Tab){
    throw new Error("不是Tab组件")
    
    }
})
const titles = slots.map((tag)=>{
    console.log({...tag})
    return tag.props.title
})


</script>