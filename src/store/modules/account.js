import Vue from 'vue'
const account = {
  state: {
    availableBalance: ''
  },
  mutations: {
    // SET_ACCOUNT_MSG: (state, val) => {
    //   state.availableBalance = val
    // }
  },
  actions: {
    getAccountMsg ({ commit, state, rootState, dispatch }) {
      const queryBalance = async userId => {
        let res = await Vue.prototype.$api.queryBalance({
          userId: userId
        })
        if (res.success) {
          state.availableBalance = res.data.availableBalance
        }
      }
      if (rootState.user.userId) {
        queryBalance(rootState.user.userId)
      } else {
        dispatch('getInfo', {}, {root: true}).then(response => {
          queryBalance(response.data.userId)
        })
      }
    }
  }
}

export default account
