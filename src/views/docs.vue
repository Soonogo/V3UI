<template>
 <div  class="layout">
    <Topnav toogleMenuButtonVisible class="nav" />    <div class="content">
       <aside v-if="menuVisible">
         <h2>文档</h2>
         <ol>
           <li>
             <router-link to="/doc/intro">介绍</router-link>   
           </li>
           <li>
             <router-link to="/doc/get-started">开始</router-link>   
           </li>
         </ol>
        <h2>组件</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch </router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button </router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog </router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs </router-link>
          </li>
        </ol>
      </aside>
            
        <main>
            <router-view></router-view>
        </main>
    </div>
    </div>
</template>
<script setup    lang="ts">
import { inject,Ref } from '@vue/runtime-core'
import Topnav from '../components/Topnav.vue'
const menuVisible = inject<Ref<boolean>>('menuVisible');
</script>
<style lang="scss" scoped>


.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0; 
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
  }
}
aside {
  z-index: 1;
  background: white;
  width: 150px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  > h2 {
    margin-bottom: 4px;
  padding: 0 16px;

  }
  > ol {
    > li {

      > a{
display: block;
        text-decoration:none;
      padding: 8px 16px;
       
      }
      > .router-link-active{
  background: lightblue;
}
    }
  }
}
main {
  overflow: auto;
}
</style>