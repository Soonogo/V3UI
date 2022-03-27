
<template>
  <div>
   <Topnav/>
    <div class="banner">
      <div style="height:100px"></div>
      <h1><strong>Sport UI</strong></h1>
      <h2><i class="vue3">Vue3</i> & <i class="ts">TS</i> UI 框架</h2>
      <p class="actions">
        <a href="https://github.com/songenen">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
      <div class="bg1"></div>
      <div class="bg2"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Topnav from '../components/Topnav.vue'
</script>
<style lang="scss" scoped>
@use "sass:math";
 .vue3 {
    color: #33b32e;
  }
  .ts{
    color: blue;
  }
.banner {
  
  padding: 100px 0;
    display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  position: relative;
  @media(max-width: 1820px){
    background: white;
  }
  @media (max-width:576px){
background: white;

  }

  @media (min-width:1920px){
 > .bg1{
    left: 0;
    top: 0vh;
    position: absolute;
    width: 50vw;
    height: 100vh;
  background:url(../y.svg) no-repeat ;
  z-index: -1;

  }
  > .bg2{
    right: 0;
    top: 0vh;
    position: absolute;
    width: 50vw;
    height: 100vh;
  background:url(../bg.svg) no-repeat ;
  z-index: -1;

  }
  }
 

  > .actions{
    padding: 20px 0;
    a {
      margin:0 8px;
      color: white;
background: linear-gradient(139deg, rgba(142,222,255,1) 0%, rgba(0,142,255,1) 100%);
      display: inline-block;
      $h: 28px;
      $h2:  14px;
      height: $h;
      line-height: $h;
      border-radius: 14px;
      padding: 0 8px;
    }
  }
}
</style>