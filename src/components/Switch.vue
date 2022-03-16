<template>
  <Switch :value="y" @input="y=$event &&console.log(2)" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Switch from '../lib/switch1.vue'
const y = ref(false)
</script>
<style>

</style>