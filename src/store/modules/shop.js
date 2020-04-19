import {
    SAVE_SHOPDATAS
} from '../mutations-type'
import {getShopDatas} from '../../api'
const state={
    shopDatas:[]
}
const mutations={
    [SAVE_SHOPDATAS](state,shopDatas){
        state.shopDatas=shopDatas
    }
}
const actions={
    async getShopDatasAction({commit}){
        let result=await getShopDatas()
        commit(SAVE_SHOPDATAS,result.data)
    }
}
const getters={

}
export default{
    state,
    mutations,
    actions,
    getters
}