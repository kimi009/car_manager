import Vue from 'vue'

const intergal = {
  state: {
    intergalVal: '0',
    intergalValString: '',
    intergalArr: [],
    page: 1,
    count: 100,
    loading: false,
    finished: false
  },
  mutations: {
    INIT_INTERGAL_INFO: (state, params) => {
      state.intergalVal = params
    },
    INIT_INTERGAL_STRING: (state, params) => {
      state.intergalValString = params
    },
    INIT_INTERGAL_LIST: (state, params) => {
      state.intergalArr.push(...params)
    }
  },
  actions: {
    async initIntergalInfo({ commit }, params) {
      let res = await Vue.prototype.$api.integalInfo(params)
      console.log(res)
      if (res.success) {
        let reg = /\d{1,3}(?=(\d{3})+$)/g
        commit('INIT_INTERGAL_STRING', parseInt(res.data.availableBalance).toString().replace(reg, '$&,'))
        commit('INIT_INTERGAL_INFO', res.data.availableBalance)
      }
    },
    async initIntergalLiist({ commit, state }, params) {
      console.log(state.loading)
      if (state.intergalArr.length >= state.count) {
        state.loading = false
        state.finished = true
        return false
      }
      let res = await Vue.prototype.$api.intergalList(params)
      if (res.code === 1 && res.data.length > 0) {
        commit('INIT_INTERGAL_LIST', res.data)
        state.page++
        state.count = res.count
        state.loading = false
        if (state.intergalArr.length >= state.count) {
          state.finished = true
        }
      } else {
        state.finished = true
        state.loading = false
      }
    }
  }
}

export default intergal
