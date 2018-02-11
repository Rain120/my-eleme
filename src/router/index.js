import Vue from 'vue'
import Router from 'vue-router'
import Goods from 'components/goods/goods'
import Ratings from 'components/ratings/ratings'
import Seller from 'components/seller/seller'

Vue.use(Router)

const router = new Router({
    linkActiveClass: 'active',
    routes: [{
            path: '/',
            redirect: '/goods'
        },
        {
            path: '/goods',
            component: Goods
        },
        {
            path: '/ratings',
            component: Ratings
        },
        {
            path: '/seller',
            component: Seller
        }
    ]
})

export default router