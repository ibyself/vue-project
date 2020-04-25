<template>
    <div id="appContainer">
      <div class="tabs">
        <!-- 全局注册异步组件 -->
        <!-- <div class="tabItem" @click="comName='async-example'">Home组件</div> -->
        <div class="tabItem" @click="comName='Home'">Home组件</div>
        <!-- 动态组件 -->
        <div class="tabItem" @click="comName='Msite'">Miste组件</div>
      </div>
      <!-- 缓存组件 -->
      <keep-alive>
        <component :is="comName"></component>
      </keep-alive>
    </div>
</template>

<script  type="text/ecmascript-6">
    import Home from './components/Home'
    import Msite from './components/Msite'
    export default {
      components:{
        Home:(resolve,reject)=>{
          setTimeout(()=>{
            resolve(Home)
          },2000)
        },
        Msite
      },
      data(){
        return {
          comName:"Home"
        }
      },
      mounted(){
        
      }
    };
</script>

<style lang="stylus" scoped>
  #appContainer
    height 1000px
    padding-top 90px
    .tabs
      display flex
      position fixed
      left 0
      top 0
      background #ccc
      width:100%
      .tabItem
        border 1px solid #999
        width 50%
        height 90px 
        line-height 90px
        text-align center
</style>
