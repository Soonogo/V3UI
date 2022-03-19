<template>
<div @click="onClick">
    <button v-bind=" rest  ">
        <slot></slot>
    </button>
</div>

</template>
<script lang="ts" >
export default{
    inheritAttrs:false,
   setup(props,context){
       const {onClick,...rest} = context.attrs
       return{onClick,rest}
   }
}
</script>

<style lang="scss" scoped>
div{
    border : 1px solid red;
    height: 100px;
}
</style>