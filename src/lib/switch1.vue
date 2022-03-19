<template>
  <button class="gulu-switch" @click="toggle1" :class="{'gulu-checked':value}"> <span></span> </button>
</template>
<script lang="ts" setup>
  
    const props = defineProps({
  value: {
    type: Boolean,
  },
});
    const emit = defineEmits(['update:value']);
    const toggle1 = ()=>{
      emit('update:value', !props.value)
      console.log(12345)
      // this.$emit()
    }
</script>
<style lang="scss" >
  $h: 22px;
  $h2: $h - 4px;
  .gulu-switch {
  height: $h; width: $h * 2; border: none; background: #bfbfbf; border-radius: 11px; position: relative;
  > span {
    position: absolute; top: 2px; left: 2px; height: $h2; width: $h2; background: white; border-radius:9px; transition: all 250ms;
  }
  &.gulu-checked { background: #1890ff;
    > span { left: calc(100% - #{$h2} - 2px); }
  }
  &:focus { outline: none; }
  &:active {
    > span { width: $h2 + 4px; }
  }
  &.gulu-checked:active {
    > span { width: $h2 + 4px; margin-left: -4px; }
  }
}
</style>