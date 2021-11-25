import cart from '../src/components/cart'
import AddUser from './components/AddUser'
import {createRouter,createWebHistory} from 'vue-router'
const routes=[
    
            {  
            name:'AddUser',
            component:AddUser,
            path:'/addUser'
            },
            
            {
            name:'cart',
            component:cart,
            path:'/cart'
            },
];
const router=createRouter({
    history:createWebHistory(),
    routes
    });
export default router;