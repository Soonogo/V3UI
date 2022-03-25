<template>
  <div class="topnav" >
    <div class="logo" @click="toggle">
       <svg class="icon" >
        <use xlink:href="#icon-sport"></use>
    </svg>
    </div>
    <ul class="menu">
      
    </ul>
        <span v-if="toogleMenuButtonVisible" class="toggleAside">
            <svg class="icon" >
                <use xlink:href="#icon-menu"></use>
            </svg>
        </span>
  </div>
</template>
<script setup lang="ts">
import { inject, Ref } from "@vue/runtime-core";
const props = defineProps({
  toogleMenuButtonVisible:{
    type:Boolean,
    default:false
  }
})
const menuVisible = inject<Ref<boolean>>('menuVisible');
const toggle = ()=>{
    if(menuVisible){
    menuVisible.value = !menuVisible?.value;
    return toggle
    }
} 

</script>
<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
 position: fixed;
  top: 0;
  left: 0;
  width: 100%;  z-index: 10;
  justify-content: center;
  align-content: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    
  }
    svg{
      width: 32px;
      height: 32px;
    }  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 768px) {
    > .menu {
      display: none;
    }
    > .logo{
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block ;
    }
  }
      
  
}
</style>