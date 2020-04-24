<template>
    <div>
      <h2>App组件</h2>
      <hr>
      <Home>
        <p >默认插槽</p>
        <p slot="left">具名插槽</p>
        <!-- <p slot="right">啦啦啦</p> -->
        <template v-slot:right>
          <p>{{msg}}Home</p>
        </template>
        <template #person="perProps">
          <p>{{perProps.person.lastName}}作用域插槽</p>
        </template>
      </Home>
      <hr>
    </div>
</template>

<script  type="text/ecmascript-6">
    import Home from './components/Home'
    export default {
      components:{
        Home
      },
      data(){
        return {
          msg:"App组件的数据"
        }
      }
    };
</script>

<style lang="stylus" scoped>
 
</style>
