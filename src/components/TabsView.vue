<template>
    <Tabs v-model:selected="x">
        <Tab title="导航1">1</Tab>
        <Tab title="导航2">2222</Tab>
        <Tab title="导航3">3</Tab>
    </Tabs>
</template>
<script lang="ts" setup>
import Tabs from "../lib/tabs.vue"
import Tab from "../lib/tab.vue"
import { ref } from "@vue/reactivity"
const x = ref('导航1')
</script>