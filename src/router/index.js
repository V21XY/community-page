import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Test from '../views/Test.vue'
import NotFound from '../views/NotFound.vue'
import PhotoList from '../views/PhotoList.vue'
import Discover from '../views/Discover.vue'
import PhotoDetail from '../views/PhotoDetail.vue'
import Cookies from 'js-cookie'
import UserInfo from '../views/UserInfo.vue'

Vue.use(VueRouter)
function getToken() {
  return Cookies.get('id')
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/UserInfo',
    name: 'UserInfo',
    component: UserInfo
  },
  {
    path: '/photodetail',
    name: 'PhotoDetail',
    component: PhotoDetail
  },
  {
    path: '/list',
    name: 'PhotoList',
    component: PhotoList
  },
  {
    path: '/discover',
    name: 'Discover',
    component: Discover
  },
  {
    path: '/not-found',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/test/:id',
    name: 'Test',
    component: Test
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component:Signup
  },
  { path: '*', redirect: '/not-found', hidden: true }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 跳转后返回顶部
router.afterEach((to,from,next) => {
  if(to.path==='/test'){
    window.scrollTo(0,300);
  }
})


const whiteList = ['/', '/signup','/login','/test']

router.beforeEach((to, from, next) => {
  window.document.title = '摄影社区网站';
  next();
});



router.beforeEach(async (to, from, next) => {
  if (getToken()) {
    if (to.path === '/login') {
      next({ path:from.path })
    } else {
      next()
    }
  } else if (whiteList.includes(to.path)) {
    // 如果路由在白名单里面，直接next
    next()
  } else {
    // 最后，如果没有权限，则重定向回登录页
    next('/login')
  }
});



export default router
