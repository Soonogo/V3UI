<template>
    <Topnav/>
    <div class="content">
       <aside>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/swich">Swich 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
            
        <main>主要</main>
    </div>
</template>
<script setup    lang="ts">
import Topnav from '../components/Topnav.vue'

</script>
<style lang="scss" scoped>
</style>