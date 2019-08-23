import Vue from 'vue'

const cityInfo = {
  state: {
    city: {},
    coordinateInfo: { lon: '116.332249', lat: '39.765103' },
    limitRowCity: {},
    oliStation: []
  },
  mutations: {
    INIT_CITYDATA: (state, params) => {
      state.city = params
    },
    INIT_COORDINATE_INFO: (state, params) => {
      state.coordinateInfo = params
    },
    INIT_LIMITROWCITY_DATA: (state, params) => {
      state.limitRowCity = params
    },
    INIT_OLISTATION_INFO: (state, params) => {
      state.oliStation = params
    }
  },
  actions: {
    async initCityData({ commit }, params) {
      let res = await Vue.prototype.$api.getCityInfo(params)
      if (res.head.errorCode === '0') {
        commit('INIT_CITYDATA', res.body)
      }
    },
    async initLimitRowCity({ commit }, params) {
      let res = await Vue.prototype.$api.getLimitRowCity(params)
      if (res.head.errorCode === '0') {
        commit('INIT_LIMITROWCITY_DATA', res.body)
      }
    },
    async initOilStation({ commit }, params) {
      let res = await Vue.prototype.$api.getOilStation(params)
      if (res.head.errorCode === '0') {
        commit('INIT_OLISTATION_INFO', res.body.data || [])
      }
    }
  }
}

export default cityInfo
