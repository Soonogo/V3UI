<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Frank from './components/Frank.vue'
//创建一个组件
const App = {
  // 在组件中使用 <script setup>
  components: {
    HelloWorld,
    Frank
  },
  // 在组件中使用 <template>
  template: `
    <div>123
      <h1>Hello World</h1>
      <HelloWorld />
      <Frank />
    </div>
  `
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <Frank  />

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
