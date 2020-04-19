import Vue from 'vue'
import {
    SAVE_SHOPDATAS,
    ADD_FOOD_COUNT,
    DEL_FOOD_COUNT
} from '../mutations-type'
import {getShopDatas} from '../../api'
const state={
    shopDatas:[]
}
const mutations={
    [SAVE_SHOPDATAS](state,shopDatas){
        state.shopDatas=shopDatas
    },
    [ADD_FOOD_COUNT](state,{food}){
        if(food.count>0){
            food.count++
        }else{
            Vue.set(food,'count',1)
        }
    },
    [DEL_FOOD_COUNT](state,{food}){
        if(food.count>0){
            food.count--
        }
    }
}
const actions={
    async getShopDatasAction({commit}){
        let result=await getShopDatas()
        commit(SAVE_SHOPDATAS,result.data)
    },
    async changeFoodCount({commit},{isAdd,food}){
        if(isAdd){
            commit(ADD_FOOD_COUNT,{food})
        }else{
            commit(DEL_FOOD_COUNT,{food})
        }
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