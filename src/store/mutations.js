import {
    SAVE_ADDRESS,
    SAVE_CATEGORYLIST,
    SAVE_SHOPLIST,
    SAVE_USER,
    SAVE_TOKEN,
    LOGOUT
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
    },
    [SAVE_USER](state,user){
        state.user=user
    },
    [SAVE_TOKEN](state,token){
        state.token=token
    },
    [LOGOUT](state){
        state.user={}
        state.token=''
        localStorage.removeItem('user_token')
    }
}