import { createStore } from 'vuex'

import navMenu from './navBar/navMenu.js'


export default createStore({
  state:{
    curPage:'Home'
  },
  mutations:{
    changePage(state,data){
      state.curPage = data
    }
  },
  modules:{
    navMenu
  }
})