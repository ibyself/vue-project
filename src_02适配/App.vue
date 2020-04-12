<template>
    <div id="appContainer">
      <h1>App</h1>
      <div class="test1">没有适配</div>
      <div class="test2">有适配</div>
    </div>
</template>

<script  type="text/ecmascript-6">
  export default {
    
  };
</script>

<style lang="stylus" scoped>
  #appContainer
    .test1
      width 750px
      height 100px
      background green
    .test2
      width 10rem
      height 100px
      background red
</style>
