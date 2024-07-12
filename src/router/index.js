import {createRouter, createWebHistory} from 'vue-router'


// 路由规则
const routes = [
    //{path:"",component :}
    {path:'/login',component:() => import('@/views/Login.vue')},
    {
    path:'/',
    component:() => import('@/views/Layout.vue'),
    redirect:'/article/category',
    children:[
        {path:'/article/category',component:() => import('@/views/article/ArticleCategory.vue')},
        {path:'/article/manage',component:() => import('@/views/article/ArticleManage.vue')}
    ]}
]

// 创建路由对象

const router = createRouter({
    history:createWebHistory(), //采用 html5 路由模式
    routes
})

// 将路由对象暴露出去
export default router