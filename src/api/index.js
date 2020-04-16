import axios from './ajax'
//根据经纬度获取位置详情
export const reqAddress=(latitude,longitude)=>axios({
    url:`/position/${latitude},${longitude}`
})

//获取食品分类列表
export const reqCategoryList=()=>axios({
    url:'/index_category',
    headers: {
        needToken: true
      }
})

//根据经纬度获取商铺列表
export const reqShopList=(latitude,longitude)=>axios({
    url:'/shops',
    params:{
        latitude,
        longitude
    },
    headers: {
        needToken: true
      }
})

/**发送短信验证码 */
export const sendCode=((phone)=>axios({
    url:"/sendcode",
    params:{
        phone
    }
}))