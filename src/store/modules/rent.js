// import Vue from 'vue'

// const api = Vue.prototype.$api

const rent = {
  state: {
    myIncomeData: {},
    myLeases: []
  },
  mutations: {
    INIT_INCOME_DATA: (state, params) => {
      state.myIncomeData = params
    },
    INIT_LEASE_DATA: (state, params) => {
      state.myLeases = params
    }
  },
  actions: {
    async initIncomeData({ commit }, params) {
      // let res = await api.getMyIncome(params)
      // if (res.success === 'true') {
      //   commit('INIT_INCOME_DATA', res.data)
      // }
      let t = await new Promise(resolve => {
        setTimeout(() => {
          resolve({ test: 1 })
        })
      })
      commit('INIT_INCOME_DATA', t)
    },
    async initMyLeaseList({ commit }, params) {
      // let res = await api.getRentList(params)
      // if (res.success) {
      // commit('INIT_LEASE_DATA', res.data)
      // }
      commit('INIT_LEASE_DATA', [])
    }
  }
}

export default rent
