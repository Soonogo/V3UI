<template>
    <button class="gulu-button" :class="`theme-${theme}`">
        <slot></slot>
    </button>

</template>
<script lang="ts" setup>
const props = defineProps({
    theme:{
        type:String,
        default:'button'
    }
})
</script>

<style lang="scss" scoped>
div{
    border : 1px solid red;
    height: 100px;
}
</style>