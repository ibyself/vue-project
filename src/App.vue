<template>
    <div>
      <router-view></router-view>
      <FooterNav v-show="$route.meta.isShowFooter"/>

    </div>
</template>

<script  type="text/ecmascript-6">
    import FooterNav from './components/FooterNav/FooterNav'
    export default {
      components:{
        FooterNav
      }
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
