import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1507e81d = () => interopDefault(import('../pages/_lang/index.vue' /* webpackChunkName: "pages/_lang/index" */))
const _58db7968 = () => interopDefault(import('../pages/_lang/Assets.vue' /* webpackChunkName: "pages/_lang/Assets" */))
const _5621ab14 = () => interopDefault(import('../pages/_lang/Login.vue' /* webpackChunkName: "pages/_lang/Login" */))
const _1356b570 = () => interopDefault(import('../pages/_lang/Register.vue' /* webpackChunkName: "pages/_lang/Register" */))
const _4e6c3d35 = () => interopDefault(import('../pages/_lang/ResetPassword.vue' /* webpackChunkName: "pages/_lang/ResetPassword" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/:lang",
    component: _1507e81d,
    name: "lang"
  }, {
    path: "/:lang?/Assets",
    component: _58db7968,
    name: "lang-Assets"
  }, {
    path: "/:lang?/Login",
    component: _5621ab14,
    name: "lang-Login"
  }, {
    path: "/:lang?/Register",
    component: _1356b570,
    name: "lang-Register"
  }, {
    path: "/:lang?/ResetPassword",
    component: _4e6c3d35,
    name: "lang-ResetPassword"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
