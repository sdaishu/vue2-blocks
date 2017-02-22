import Vue from 'vue'
import Vuex from 'vuex'
import storetest from './modules/test.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    storetest
  }
})
