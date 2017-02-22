import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      component (resolve) {
        require.ensure(['../views/sku/index.vue'], () => {
          resolve(require('../views/sku//index.vue'))
        })
      }
    },
    {
      path: '/index',
      name: 'index',
      component (resolve) {
        require.ensure(['../views/sku/index.vue'], () => {
          resolve(require('../views/sku/index.vue'))
        })
      }
    },
    {
      path: '/index/hello',
      name: 'hello',
      component (resolve) {
        require.ensure(['../views/sku/hello.vue'], () => {
          resolve(require('../views/sku/hello.vue'))
        })
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log('从' + from.name + '进入' + to.name)
  next()
})
export default router
