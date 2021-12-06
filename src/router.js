
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Movies from  './components/Movie'

import guest from './router/middleware/guest'
import auth from './router/middleware/auth'
import isSubscribed  from './router/middleware/IsSubscribed'
import {store} from './store/index'
import middlewarePipeline from './router/middlewarePipeline'
import {createRouter,createWebHistory} from 'vue-router'
const routes=[
            {
                path:'/login',
                name:'login',
                component:Login,
                meta:{
                    middleware:[
                        guest
                    ]
                }
            }, 
            {
                path:'/dashboard',
                name:'dashboard',
                component:Dashboard,
                meta:{
                    middleware:[
                        auth
                    ]
                },


                children:[{
                    path:'/dashboard/movies',
                    name:'dashboard.movies',
                    component:Movies,
                    meta:{
                        middleware:[
                            auth,
                            isSubscribed
                        ]
                    }

                }],

            }

]
const router=createRouter({
    history:createWebHistory(),
    routes
    });

    router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next()
    }
    const middleware = to.meta.middleware

    const context = {
        to,
        from,
        next,
        store
    }


    return middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1)
    })

})

export default router;