<template>
    <div id="shopContainer">
        <ShopHeader/>
        <div class="tabs">
            <div class="tabItem">
                <router-link to="/shop/good" replace>点餐</router-link>
            </div>
            <div class="tabItem">
                <router-link to="/shop/rating" replace>评价</router-link>
            </div>
            <div class="tabItem">
                <router-link to="/shop/info" replace>商家</router-link>
            </div>
        </div>    
        <router-view></router-view>
    </div>
</template>

<script  type="text/ecmascript-6">
    import {mapState} from 'vuex'
    import ShopHeader from '../../components/ShopHeader/ShopHeader'
    export default {
        components:{
            ShopHeader
        },
        mounted(){
            this.$store.dispatch('getShopDatasAction')
        },
        computed:{
            ...mapState({
                shopDatas:state=>state.shopDatas
            })
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import '../../common/stylus/mixins.styl'
    #shopContainer
        .tabs
            display flex 
            bottom-border-1px(#eee)
            .tabItem
                height 40px
                line-height 40px
                text-align center
                flex 1
                font-size 16px
                a
                    display block
                    position relative
                    &.router-link-active
                        color $green
                        &:after
                            content:''
                            height:4px
                            width 40px
                            background $green
                            position absolute
                            bottom 0
                            left 50%
                            transform scaleY(0.5) translateX(-50%)
 
        

</style>
