<template>
    <div id="goodContainer">
        <div class="leftContainer">
            <ul class="navList">
                <li>啦啦啦</li>
                <li>啦啦啦</li>
                <li>啦啦啦</li>
                <li>啦啦啦</li>
                <li>啦啦啦</li>
                <li>啦啦啦</li>
                <li>啦啦啦</li>
                <li>啦啦啦</li>
                <li>啦啦啦</li>
                <li>啦啦啦</li>
                <li>啦啦啦</li>
                <li>啦啦啦</li>
                <li>啦啦啦</li>
                <li>啦啦啦</li>
                <li>啦啦啦</li>
                <li>啦啦啦</li>
                <li>啦啦啦</li>
                <li>啦啦啦</li>
                <li>啦啦啦</li>
            </ul>
        </div>
        <div class="rightContainer">Goods</div>
    </div>
</template>

<script  type="text/ecmascript-6">
    import BScroll from 'better-scroll'
    export default {
        mounted(){
            new BScroll('.leftContainer',{
                startY:true
            })
        }
    };
</script>

<style lang="stylus" scoped>
    #goodContainer
        display flex
        overflow hidden
        .leftContainer
            width 80px
            height calc(100vh-272px)
            background #f3f5f7
            .navList
                li
                    width 100%
                    height 50px
                    text-align center
                    line-height 50px
                    position relative
                    &:after
                        content ''
                        width 80%
                        height 1px
                        background rgba(7,17,27,0.1)
                        position absolute
                        bottom 0
                        left 10%
        .rightContainer
            width 295px
            background gray
 
</style>
