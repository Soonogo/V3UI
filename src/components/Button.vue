<template>
    <Button  @click="click" @mouseover="click" @focus="click">nihao</Button>
</template>
<script lang="ts" setup>
import Button from '../lib/button1.vue'

 const click = ()=>{
        console.log(123)
    }
</script>