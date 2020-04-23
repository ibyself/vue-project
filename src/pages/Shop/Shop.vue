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
    import {SAVE_SHOPDATAS,SAVE_CARTSHOPS} from '../../store/mutations-type'
    import ShopHeader from '../../components/ShopHeader/ShopHeader'
    export default {
        components:{
            ShopHeader
        },
        async mounted(){
            let shopDatas = JSON.parse(sessionStorage.getItem('shopDatas'))
            if(shopDatas){
                this.$store.commit(SAVE_SHOPDATAS,shopDatas)
                let cartShops=shopDatas.goods.reduce((pre,good)=>{
                    pre.push(...good.foods.filter(food=>food.count))
                    return pre
                },[])
                this.$store.commit(SAVE_CARTSHOPS,cartShops)
            }else{
                this.$store.dispatch('getShopDatasAction')
            }
            window.addEventListener('unload',()=>{
                sessionStorage.setItem('shopDatas',JSON.stringify(this.shopDatas))
            })
        },
        computed:{
            ...mapState({
                shopDatas:state=>state.shop.shopDatas
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
