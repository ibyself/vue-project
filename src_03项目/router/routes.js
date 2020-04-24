// 常规加载方式
// import Msite from '../pages/Msite/Msite.vue'
// import Search from '../pages/Search/Search.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/Profile.vue'
// import Login from '../pages/Login/Login.vue'
// import Shop from '../pages/Shop/Shop.vue'
// import Good from '../pages/Shop/Good/Good.vue'
// import Rating from '../pages/Shop/Rating/Rating.vue'
// import Info from '../pages/Shop/Info/Info.vue'

// 路由组件懒加载： ES10 import函数
const Msite =()=>import('../pages/Msite/Msite.vue')
const Search =()=>import('../pages/Search/Search.vue')
const Order =()=>import('../pages/Order/Order.vue')
const Profile =()=>import('../pages/Profile/Profile.vue')
const Login =()=>import('../pages/Login/Login.vue')
const Shop =()=>import('../pages/Shop/Shop.vue')
const Good =()=>import('../pages/Shop/Good/Good.vue')
const Rating =()=>import('../pages/Shop/Rating/Rating.vue')
const Info =()=>import('../pages/Shop/Info/Info.vue')
export default [
    {
        path:'/msite',
        component:Msite,
        meta:{
            isShowFooter:true
        }
    },
    {
        path:'/search',
        component:Search,
        meta:{
            isShowFooter:true
        }
    },
    {
        path:'/order',
        component:Order,
        meta:{
            isShowFooter:true
        }
    },
    {
        path:'/profile',
        component:Profile,
        meta:{
            isShowFooter:true
        }
    },
    {
        path:'/login',
        component:Login,
        meta:{
            isShowFooter:false
        }
    },
    {
        path:'/',
        redirect:'/msite'
    },
    {
        path:'/shop',
        component:Shop,
        children:[
            {
                path:'good',
                component:Good
            },
            {
                path:'/shop/rating',
                component:Rating
            },
            {
                path:'info',
                component:Info
            },
            {
                path:'/',
                redirect:'/shop/good'
            }
        ],
        meta:{
            isShowFooter:false
        }
    }
    
]