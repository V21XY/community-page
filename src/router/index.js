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
import jianjie from '../components/jianjie.vue'
import ModelF from '../components/Model.vue'
import Model from '../views/Model.vue'
import Photoer from '../views/Photoer.vue'
import Shooting from '../components/Shooting.vue'
import tuwen from '../components/tuwen.vue'
import zuopin from '../components/zuopin.vue'
import Action from '../components/Action.vue'
import Search from '../views/Search.vue'
import UploadPhoto from '../views/UploadPhoto'
import About from '../views/About'

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
    path: '/Shooting',
    name: 'Shooting',
    component: Shooting
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/action',
    name: 'Action',
    component: Action
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/modelf',
    name: 'ModelF',
    component: ModelF
  },
  {
    path: '/model',
    name: 'Model',
    component: Model
  },
  {
    path: '/photoer',
    name: 'Photoer',
    component: Photoer
  },
  {
    path: '/UploadPhoto',
    name: 'UploadPhoto',
    component: UploadPhoto
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
    component: Test,
    children: [
      {
        path: '',
        component:zuopin
      },
      {
        path: 'jianjie',
        component:jianjie
      },
      {
        path: 'tuwen',
        component:tuwen
      },
      {
        path: 'zuopin',
        component:zuopin
      },
    ]
    //   {
    //     // ??? /user/:id/profile ???????????????
    //     // UserProfile ??????????????? User ??? <router-view> ???
    //     path: 'introduction',
    //     component:  Introduction
    //   },
    //   {
    //     // ??? /user/:id/posts ????????????
    //     // UserPosts ??????????????? User ??? <router-view> ???
    //     path: 'imgText',
    //     component:ImageText
    //   }
    // ]
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
  // { path: '*', redirect: '/not-found', hidden: true }

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

// ?????????????????????
router.afterEach((to,from,next) => {
  if(to.path==='/test'){
    window.scrollTo(0,300);
  }
})


const whiteList = ['/', '/signup','/login','/test','/search']

router.beforeEach((to, from, next) => {
  window.document.title = '??????????????????';
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
    // ???????????????????????????????????????next
    next()
  } else {
    // ??????????????????????????????????????????????????????
    next('/login')
  }
});



export default router
