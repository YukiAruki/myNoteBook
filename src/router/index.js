import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/home/Home'
import NoteBook from '@/views/notebook/Notebook'
import Painting from '@/views/painting/Painting'
import About from '@/views/about/About'
import Text from '@/views/text/Text'


const routes = [
  {
    path: '/',
    redirect: '/home',
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
    path: '/text',
    name: 'Text',
    component: Text,
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

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router