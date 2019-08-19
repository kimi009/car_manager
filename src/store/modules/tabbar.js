const tabbar = {
  state: {
    tabbarActive: 0,
    tabbarShow: true
  },
  mutations: {
    SET_TABBAR_ACTIVE: (state, num) => {
      state.tabbarActive = num
    }
  },
  actions: {
    setTabbarActive ({ commit }, num) {
      commit('SET_TABBAR_ACTIVE', num)
    }
  }
}

export default tabbar
