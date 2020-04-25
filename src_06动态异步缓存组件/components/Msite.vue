<template>
    <div id="msiteContainer">
        <br>
        <br>
        <br>
        <br>
        <h2>Msite组件内容</h2>
        <br>
        <ul class="list">
            <li @click="navIndex=index" class="listItem" :class="{active:navIndex===index}" v-for="(item,index) in 100" :key="index">{{item}}</li>
        </ul>

    </div>
</template>

<script  type="text/ecmascript-6">
    export default {
        data(){
            return {
               navIndex:0,
               scrollY:0
            }
        },
        mounted(){
           window.addEventListener('scroll',()=>{
                let scrollY=document.documentElement.scrollTop
                this.scrollY=scrollY
           })
        },
        deactivated(){
            sessionStorage.setItem('scrollY',this.scrollY)
        },
        activated(){
            sessionStorage.getItem('scrollY') && (document.documentElement.scrollTop=sessionStorage.getItem('scrollY'))
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    #msiteContainer
        padding-top 90px
        .list
            .listItem
                height 90px
                line-height 90px
                &.active
                    color skyblue
 
</style>
