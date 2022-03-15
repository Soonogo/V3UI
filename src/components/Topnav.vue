<template>
  <div class="topnav" @click="toggle">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { inject, Ref } from "@vue/runtime-core";

const menuVisible = inject<Ref<boolean>>('menuVisible');
const toggle = ()=>{
    menuVisible.value = !menuVisible?.value;
    return toggle
} 

</script>
<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>