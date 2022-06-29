import {createRouter, createWebHistory} from 'vue-router'
import Login from "@/components/Login";


const routes = [
    {path: '/', redirect: '/home'},
    {path: '/home', name: 'home', component: () => import('@/components/Home')},
    {path: '/login', name: "login", component: Login}
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router