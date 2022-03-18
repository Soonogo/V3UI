<template>
  <button @click="toggle" :class="{checked:value}"> <span></span> </button>
</template>
<script lang="ts" setup>
  
    const props = defineProps({
  value: {
    type: Boolean,
  },
});
    const emit = defineEmits(['update:value']);
    const toggle = ()=>{
      emit('update:value', !props.value)
      console.log(1)
      // this.$emit()
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
   button:active{
    > span {width: $h2 + 4px;}
  }
  button.checked:active{
    > span {width: $h2 + 4px; margin-left: -4px;}
  }
</style>