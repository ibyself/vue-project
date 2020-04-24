export default {
    data(){
        return {
            msg:'混合数据'
        }
    },
    methods:{
        _chunk(target,size){
            if(!Array.isArray(target)||size<=0){
                return target
            }

            let result=[]
            while (target.length>size) {
                result.push(target.splice(0,size))
            }
            !!target.length && result.push(target)
            return result
        }
    }
}