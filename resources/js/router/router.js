import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [{
    path: '/home',
    name: 'Home',
    component: () =>
        import ('../components/ExampleComponent.vue')

}]

const router = new VueRouter({
    mode: 'hash',
    routes
})
export default router