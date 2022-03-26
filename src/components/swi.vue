<demo>
常规用法
</demo>

<template>
<Switch v-model:value="bool" />
</template>
<script lang="ts" setup>
import Switch from '../lib/switch1.vue'
import {
  ref
} from 'vue'
    const bool = ref(false)
</script>