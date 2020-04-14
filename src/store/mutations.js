import {
    SAVE_ADDRESS,
    SAVE_CATEGORYLIST,
    SAVE_SHOPLIST
} from './mutations-type'
export default{
    [SAVE_ADDRESS](state,address){
        state.address=address
    },
    [SAVE_CATEGORYLIST](state,categoryList){
        state.categoryList=categoryList
    },
    [SAVE_SHOPLIST](state,shopList){
        state.shopList=shopList
    }
}