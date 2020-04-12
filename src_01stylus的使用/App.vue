<template>
    <div id="appContainer">
      <h1>App</h1>
      <button class="btn1">测试按钮1</button>
      <button class="btn2">测试按钮2</button>

      <ul>
        <li @click="handleClick(item)" :class="{active:navIndex===item}" v-for="item in 10" :key="item">{{item}}</li>
      </ul>
    </div>
</template>

<script  type="text/ecmascript-6">
  export default {
    data(){
      return {
        navIndex:1
      }
    },
    methods:{
      handleClick(item){
        this.navIndex=item
      }
    }
  };
</script>

<style lang="stylus" scoped>
  @import "./common/stylus/mixins.styl";
  $color=skyblue 

  btnStyle(w,h,bgColor)
    width w
    height h
    background bgColor
    border none
  add(a,b)
    padding a+b
  #appContainer
    color red
    h1
      color $color
    .btn1
      btnStyle(100px,100px,red)
      add(20px,30)
      box-sizing:content-box
    .btn2
      btnStyle(200px,200px,green)
    ul 
      li 
        line-height 30px
        &.active
          color $green
</style>
