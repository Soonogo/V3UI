<template>
    <Button  >nihao</Button>
    <Button  theme="button">nihao</Button>
    <Button  theme="link">nihao</Button>
    <Button  theme="a">nihao</Button>
</template>
<script lang="ts" setup>
import Button from '../lib/button1.vue'

 const click = ()=>{
        console.log(123)
    }
</script>