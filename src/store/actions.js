import {
    reqAddress,
    reqCategoryList,
    reqShopList
} from '../api'
import {
    SAVE_ADDRESS,
    SAVE_CATEGORYLIST,
    SAVE_SHOPLIST
} from './mutations-type'
export default{
    async getAddressAction({commit}){
        const result=await reqAddress(25.6862670000,114.3082430000)
        !!(result.code===0) && commit(SAVE_ADDRESS,result.data)
    },
    async getCategoryListAction({commit},fn){
        const result=await reqCategoryList()
        if(result.code===0){
            commit(SAVE_CATEGORYLIST,result.data)
            typeof fn ==="function" && fn()
        }
    },
    async getShopListAction({commit}){
        const result=await reqShopList(25.6862670000,114.3082430000)
        !!(result.code===0) && commit(SAVE_SHOPLIST,result.data)
    }
}