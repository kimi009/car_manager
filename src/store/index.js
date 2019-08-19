import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import errorLog from './modules/errorLog'
import user from './modules/user'
import carRental from './modules/carRental'
import certificate from './modules/certificate'
import tabbar from './modules/tabbar'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    errorLog,
    user,
    carRental,
    certificate,
    tabbar
  },
  getters
})

export default store
