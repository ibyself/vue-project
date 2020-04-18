<template>
    <div>
      <router-view></router-view>
      <FooterNav v-show="$route.meta.isShowFooter"/>

    </div>
</template>

<script  type="text/ecmascript-6">
    import {SAVE_USER} from './store/mutations-type'
    import FooterNav from './components/FooterNav/FooterNav'
    export default {
      components:{
        FooterNav
      },
      mounted(){
        this.autoLogin
      },
      methods:{
        async autoLogin(){
          let result=await this.$API.autoLogin()
          !!(result.code===0) && this.$store.commit(SAVE_USER,result.data)
        }
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
