<template>
    <div id="footerContainer">
        <div @click="getPath('/msite')" :class="{active:$route.path==='/msite'}" class="navItem">
            <i class="iconfont icon-home"></i>
            <span>首页</span>
        </div>
        <div @click="getPath('/search')" :class="{active:$route.path==='/search'}" class="navItem">
            <i class="iconfont icon-search"></i>
            <span>搜索</span>
        </div>
        <div @click="getPath('/order')" :class="{active:$route.path==='/order'}" class="navItem">
            <i class="iconfont icon-order"></i>
            <span>订单</span>
        </div>
        <div @click="getPath('/profile')" :class="{active:$route.path==='/profile'}" class="navItem">
            <i class="iconfont icon-user"></i>
            <span>我的</span>
        </div>
    </div>
</template>

<script  type="text/ecmascript-6">
    export default {
        methods:{
            getPath(path){
                path!==this.$route.path && this.$router.push(path)
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/stylus/mixins.styl"
    #footerContainer
        display flex
        height 50px
        width 100%
        top-border-1px(#eee)
        position fixed
        left 0
        bottom 0
        background #fff
        .navItem
            width 25%
            height 50px
            text-align center
            display flex
            flex-direction column
            &.active
                color $green
            .iconfont 
                font-size 22px
                line-height 30px
</style>
