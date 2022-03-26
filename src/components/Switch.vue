<template>
<div>
  <h1>Switch 组件示例 </h1>
  <div class="demo">
    <h2>常规用法</h2>
    <div class="demo-component">
      <Switchdemo1/>
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>&lt;Switch v-model:value="bool" /&gt;</pre>
    </div>
  </div>
  <div class="demo">
    <h2>支持 disabled </h2>
    <div class="demo-component">
      <Switchdemo2/>
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>&lt;Switch v-model:value="bool" disabled /&gt;</pre>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Switch from '../lib/switch1.vue'
import Button from '../lib/button1.vue'
import switchdemo1 from './switchdemo1.vue'
import switchdemo2 from './switchdemo2.vue'
import {
  ref
} from 'vue'
import Switchdemo1 from './switchdemo1.vue'
import Switchdemo2 from './switchdemo2.vue'
export default {
  components: {
    Switch,
    Button,
    Switchdemo1,
    Switchdemo2
},
  setup() {
    const bool = ref(false)
    return {
      bool
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>