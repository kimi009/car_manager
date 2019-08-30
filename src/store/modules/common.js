const common = {
  state: {
    currentPage: '' // 当前页
  },
  mutations: {
    SET_CRRENT_PAGE: (state, val) => {
      state.currentPage = val
    }
  },
  actions: {
    setCurrentPage ({ commit }, val) {
      commit('SET_CRRENT_PAGE', val)
    }
  }
}

export default common
