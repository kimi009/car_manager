import Vue from 'vue'

const safe = {
  state: {
    safeInfo: {},
    safeList: []
  },
  mutations: {
    INIT_SAFE_DATA: (state, params) => {
      state.safeInfo = params
    },
    INIT_SAFE_LIST: (state, params) => {
      state.safeList = params
    }
  },
  actions: {
    async initSafeInfo({ commit, state }, params) {
      if (Object.keys(state.safeInfo).length <= 0) {
        let res = await Vue.prototype.$api.getInsuranceInfo(params)
        if (res.success) {
          commit('INIT_SAFE_DATA', res.data)
        }
      }
    },
    async initSafeList({ commit, state }, params) {
      if (state.safeList.length <= 0) {
        let res = await Vue.prototype.$api.getSafeList(params)
        if (res.success) {
          commit('INIT_SAFE_LIST', res.data)
        }
      }
    }
  }
}

export default safe
