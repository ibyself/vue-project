<template>
    <div id="homeContainer">
        <br>
        <br>
        <br>
        <br>
        <h2>Home组件内容</h2>
        <hr>
    </div>
</template>

<script  type="text/ecmascript-6">
    export default {
        data(){
            return {
               
            }
        },
        activated(){
             document.documentElement.scrollTop=0
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    #homeContainer
        height 2000px
 
</style>
