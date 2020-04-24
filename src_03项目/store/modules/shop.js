import Vue from 'vue'
import {
    SAVE_SHOPDATAS,
    ADD_FOOD_COUNT,
    DEL_FOOD_COUNT,
    CLEAR_CARTSHOPS,
    SAVE_CARTSHOPS
} from '../mutations-type'
import {getShopDatas} from '../../api'
const state={
    shopDatas:{},
    cartDatas:[],
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
            state.cartDatas.push(food)
        }
    },
    [DEL_FOOD_COUNT](state,{food}){
        if(food.count>0){
            food.count--
            if(food.count===0){
                state.cartDatas.splice(state.cartDatas.indexOf(food),1)
            }
        }
    },
    [CLEAR_CARTSHOPS](state){
        state.cartDatas.forEach(food => food.count=0)
        state.cartDatas=[]
    },
    [SAVE_CARTSHOPS](state,cartDatas){
        state.cartDatas=cartDatas
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
    totalCount(state){
        return state.cartDatas.reduce((pre,food)=>{
            return pre+=food.count
        },0)
    },
    totalPrice(state){
        return state.cartDatas.reduce((pre,food)=>{
            return pre+=food.count*food.price
        },0)
    }
}
export default{
    state,
    mutations,
    actions,
    getters
}