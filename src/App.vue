<template>
    <div>
      <h1>App组件</h1>
      <button @click="handleClick">测试按钮</button>
      <br>
      <br>
      <input type="text" v-model="msg">
      <p>{{msg}}</p>
      <hr>
      <br>
      <input type="text" :value="msg2" @input="test($event)">
      <p>{{msg2}}</p>
      <br>
      <br>
      <!-- 在组件上绑定事件：自定义事件 -->
      <!-- <Home @click.native="handleClick2"/> -->
      <Home @click="handleClick2"/>
      <br>
      <br>

      <Msite v-model="msg3"/>
      <p>{{msg3}}</p>
    </div>
</template>

<script  type="text/ecmascript-6">
    import Home from './components/Home'
    import Msite from './components/Msite'
    export default {
      data(){
        return {
          msg:"v-model 实现双向数据绑定",
          msg2:"不使用 v-model 实现双向数据绑定",
          msg3:"msite组件测试数据"

        }
      },
      components:{
        Home,
        Msite
      },
      methods:{
        handleClick(){
          console.log('handleClick')
        },
        test(e){
          this.msg2=e.target.value
        },
        handleClick2(e){
          console.log('handleClick2',e)
        }
      }
    };
</script>

<style lang="stylus" scoped>
 
</style>
