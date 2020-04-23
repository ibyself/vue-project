<template>
    <div class="cartcontrol">
        <transition name="move">
            <div v-show="food.count" @click="changeFoodCount(false)" class="iconfont icon-remove_circle_outline"></div>
        </transition>
        <div class="cart-count" v-show="food.count">{{food.count}}</div>
        <div @click="changeFoodCount(true)" class="iconfont icon-add-circle"></div>
    </div>

</template>

<script  type="text/ecmascript-6">
    export default {
        props:{
            food:{
                type:Object,
                required:true
            }
        },
        methods:{
            changeFoodCount(isAdd){
                this.$store.dispatch('changeFoodCount',{isAdd,food:this.food})
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .cartcontrol
    font-size: 0
    .icon-remove_circle_outline
      display: inline-block
      padding 4px
      line-height 24px
      font-size 24px
      color $green
      &.move-enter-active,&.move-leave-active
        transition all .6s
      &.move-enter,&.move-leave-to
        transform translateX(20px) rotate(180deg)
        opacity 0
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 4px
      line-height: 24px
      text-align: center
      font-size: 12px
      color: rgb(147, 153, 159)
    .icon-add-circle
      display: inline-block
      padding: 4px
      line-height: 24px
      font-size: 24px
      color $green
</style>


