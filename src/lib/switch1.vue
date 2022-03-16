<template>
  <button @click="toggle" >
     <span ></span>
  
   </button> 
</template>
<script lang="ts" setup>
import {ref,defineEmits,} from 'vue' 
const props = defineProps({
  value:Boolean
})
const emit = defineEmits([
  'input',

])
  const toggle = ()=>{
    emit('input',!props.value)
    console.log(props.value)
  }
</script>
<style lang="scss" scoped>
  $h: 22px;
  $h2: $h - 4px;
  button{
    height: $h;
    width: $h*2;
    border: none;
    background: grey;
    border-radius: 11px;
    position: relative;
  }
  span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background:white;
    border-radius: 11px;
    transition: all 250ms;

  } 
  button.checked{
    background: blue;
  }
   button.checked > span {
    left: calc(100% - #{$h2} - 2px);
  }
</style>