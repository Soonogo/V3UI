<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs

import { provide } from "@vue/runtime-core";
import { ref } from "vue";

// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
const width = document.documentElement.clientWidth
const menuVisible = ref(width<=500?false:true);
provide('menuVisible',menuVisible);
</script>

<template>
<router-view></router-view>
</template>

<style>
*{
  transition: all 250ms;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
