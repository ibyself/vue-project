<template>
    <div>
      <h2>App组件</h2>
      <hr>
      <Home/>
      <hr>
    </div>
</template>

<script  type="text/ecmascript-6">
    import mixin from './mixins'
    import Home from './components/Home'
    export default {
      components:{
        Home
      },
      data(){
        return {
          msg:"App组件的数据"
        }
      },
      mixins:[mixin],
      mounted(){
        let arr=[1,3,5,6,4,7,42,7]
        let result=this._chunk(arr,2)
        console.log(result)
        console.log(this.msg)
      }
    };
</script>

<style lang="stylus" scoped>
 
</style>
