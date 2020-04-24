<template>
    <div>
        <h2>Home组件内容</h2>
        <slot></slot>
        <slot name="left"></slot>
        <slot name="right">后备内容</slot>
        <p>{{person.firstName}}</p>
        <slot name="person" :person="person"></slot>
    </div>
</template>

<script  type="text/ecmascript-6">
    export default {
        data(){
            return {
                person:{
                    firstName:'kobe',
                    lastName:'wede'
                }
            }
        }
    };
</script>

<style scoped>

 
</style>
