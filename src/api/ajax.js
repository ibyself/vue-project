import axios from 'axios'
import qs from 'qs'
const instance =axios.create({})
instance.interceptors.request.use(config=>{
    config.data=qs.stringify(config.data)
})
instance.interceptors.response.use(
    response=> response.data,
    error=>{
        alert('请求出错!')
        console.log(error)
        return new Promise(()=>{})
    }
)

export default instance

