<template>
<template v-if="visiable">
  <Teleport to="body">

  <div class="gulu-dialog-overlay" @click="onCloseOverLay"></div>
  <div class="gulu-dialog-wrapper">
    <div class="gulu-dialog">
      <header>
          <slot name="title"></slot>
        <span @click="close" class="gulu-dialog-close"></span>
      </header>
      <main>
       <slot name="content"/>
      </main>
      <footer>
       <slot/>

        <Button @click="ok" level="main">OK</Button>
        <Button @click="cancel">Cancel</Button>
      </footer>
    </div>
  </div>
  </Teleport>

</template>
</template>
<script lang="ts" setup>
import Button from "./button1.vue"
const props = defineProps({
  title:{
    type:String,
    default:"标题a"
  },
    visiable: {
        type: Boolean,
        default: false
    },
    ok: {
        type: Function,
    },
    cancel:{
        type: Function,
    },
    closeOnclickOverLay: {
        type: Boolean,
        default: true
    }
})
const emits = defineEmits([
   "update:visiable","update:cancel"
])
const ok = () => {
      if (props.ok?.() !== false) {
        close()
      }else{
        alert("not ok")
      }
    }
const cancel = ()=>{
  emits("update:cancel")
  close()
}
const close = ()=>{
emits("update:visiable",false)
}
const onCloseOverLay = ()=>{
  if(props.closeOnclickOverLay){
    close()
  }
}
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.gulu-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  >header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  >main {
    padding: 12px 16px;
  }
  >footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>