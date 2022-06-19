import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/home/Home'
import NoteBook from '@/views/notebook/Notebook'
import Painting from '@/views/painting/Painting'
import About from '@/views/about/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/notebook',
    name: 'Notebook',
    component: NoteBook,
  },
  {
    path: '/painting',
    name: 'Painting',
    component: Painting,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router