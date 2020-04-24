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
    import mixin from '../mixins'
    export default {
        mixins:[mixin],
        data(){
            return {
                person:{
                    firstName:'kobe',
                    lastName:'wede'
                }
            }
        },
        mounted(){
            let arr = [1,2,3,4,5,6,7]
            let result = this._chunk2(arr, 3)
            console.log(result)
            console.log(this.msg)
            console.log('Home mounted')
        }
    };
</script>

<style scoped>

 
</style>
