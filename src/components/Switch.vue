<template>
<div>
  <h1>Switch 组件示例 </h1>
  <div class="demo">
    <h2>常规用法</h2>
    <div class="demo-component">
      <Switch v-model:value="bool" />
    </div>
    <div class="demo-actions">
      <Button @click="toogle">查看代码</Button>
    </div>
    <div class="demo-code" v-if="x">
      <pre>&lt;template&gt;
    &lt;Switch v-model:value=&quot;bool&quot; /&gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot;&gt;
import Switch from '../lib/Switch.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false)
    return {
      bool
    }
  }
}
&lt;/script&gt;</pre>
    </div>
  </div>
  <div class="demo">
    <h2>支持 disabled </h2>
    <div class="demo-component">
      <Switch  disabled />
    </div>
    <div class="demo-actions">
      <Button @click="toogle2">查看代码</Button>
    </div>
    <div class="demo-code" v-if="y">
      <pre>&lt;template&gt;
    &lt;Switch v-model:value=&quot;bool disabled&quot; /&gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot;&gt;
import Switch from '../lib/Switch.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false)
    return {
      bool
    }
  }
}
&lt;/script&gt;</pre>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import Switch from '../lib/switch1.vue'
import Button from '../lib/button1.vue'
import {  ref } from 'vue'
const bool = ref(false)
const x = ref(false)
const y = ref(false)
const toogle=()=>{
    x.value = !x.value
}
const toogle2=()=>{
    y.value = !y.value
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