<template>
  <div>
    <Switch v-model:value="y" />
  </div>
</template>
<script lang="ts" setup>
import Switch from '../lib/Switch1.vue'
import { ref } from 'vue'
    const y = ref(false)
</script>