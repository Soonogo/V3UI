<template>
  <div class="topnav" >
    <router-link to="/" class="logo" >
       <svg class="icon" >
        <use xlink:href="#icon-sport"></use>
    </svg>
    </router-link>
    
        <span @click="toggle" v-if="toogleMenuButtonVisible" class="toggleAside">
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
  background: white;
  border-bottom: rgba(107, 106, 106, 0.1) solid 1px;
  display: flex;
  padding: 16px;
 position: fixed;
  top: 0;
  left: 0;
  width: 100%;  z-index: 10;
  justify-content: center;
  align-content: center;
    box-shadow: 10px 0.5px 0.2px rgb(231, 231, 231);

  > .logo {
    max-width: 6em;
    margin-right: auto;
text-decoration:none;    
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