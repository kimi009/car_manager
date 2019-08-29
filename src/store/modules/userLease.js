import Vue from 'vue'

const userLease = {
  state: {
    leaseList: [],
    page: 1,
    count: 100,
    loading: false,
    finished: false
  },
  mutations: {
    INIT_LEASE_LIST: (state, params) => {
      state.leaseList.push(...params)
    }
  },
  actions: {
    async initleaseList({ commit, state }, params) {
      if (state.leaseList.length >= state.count) {
        state.loading = false
        state.finished = true
        return false
      }
      let res = await Vue.prototype.$api.initUserleaseList(params)
      if (res.code === 0 && res.data.length > 0) {
        commit('INIT_LEASE_LIST', res.data)
        state.page++
        state.count = res.count
        state.loading = false
        if (state.leaseList.length >= state.count) {
          state.finished = true
        }
      } else {
        state.finished = true
        state.loading = false
      }
    }
  }
}

export default userLease
