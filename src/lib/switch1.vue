<template>
    <button>
      <span></span>
    </button>
 </template>

<style lang="scss" scoped>

 $h: 22px;
  button{
    height: 22px;
    width: 18px;
    border: none;
    background: blue;
    border-radius: $h/2;
    position: relative;
  }
  span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background:white;
    border-radius: $h2 / 2;
  } 
</style>