import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'
import category from './category'
import record from './record'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError (state, error) {
      state.error = error
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    async fetchCurrency () {
      let keyFixerAPI = process.env.VUE_APP_FIXER
      let resultOfAPI = await fetch('http://data.fixer.io/api/latest?access_key=' + keyFixerAPI + '&symbols=USD,EUR,RUB')
      return resultOfAPI.json()
    }
  },
  getters: {
    error: s => s.error
  },
  modules: {
    auth, info, category, record
  }
})
