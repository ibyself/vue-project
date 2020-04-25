<template>
    <div>
        <br>
        <br>
        <br>
        <br>
        <hr>
        <h2>Msite 组件</h2>
        <input type="text" :value="value" @input="$emit('input',$event.target.value)">
    </div>
</template>

<script  type="text/ecmascript-6">
    export default {
        props:['value']
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
   
 
</style>
