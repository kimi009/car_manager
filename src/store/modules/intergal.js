import Vue from 'vue'

const intergal = {
  state: {
    intergalVal: '000',
    intergalArr: [],
    page: 1
  },
  mutations: {
    INIT_INTERGAL_INFO: (state, params) => {
      state.intergalVal = params
    },
    INIT_INTERGAL_LIST: (state, params) => {
      state.intergalArr.push(...params)
    }
  },
  actions: {
    async initIntergalInfo({ commit }, params) {
      let res = await Vue.prototype.$api.integalInfo(params)
      if (res.success) {
        let reg = /\d{1,3}(?=(\d{3})+$)/g
        commit('INIT_INTERGAL_INFO', parseInt(res.data.availableBalance).toString().replace(reg, '$&,'))
      }
    },
    async initIntergalLiist({ commit, state }, params) {
      let res = await Vue.prototype.$api.intergalList(params.data)
      if (res.code === 1 && res.data.length > 0) {
        commit('INIT_INTERGAL_LIST', res.data)
        state.page++
        typeof params.cb === 'function' && params.cb(res)
      }
    }
  }
}

export default intergal
