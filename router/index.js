import VueRouter from "vue-router";
import home from '../pages/home.vue'
import shop from '../pages/shop.vue'
import cart from '../pages/cart.vue'

export default new VueRouter({
   mode: 'history',
   routes: [
      {path: '/', component: home},
      {path: '/shop', component: shop},
      {path: '/cart', component: cart}
   ]
})