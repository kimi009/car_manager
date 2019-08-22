import Vue from 'vue'

const cityInfo = {
  state: {
    city: {},
    petrolStation: {},
    oliStation: []
  },
  mutations: {
    INIT_CITYDATA: (state, params) => {
      state.city = params
    },
    INIT_PETROLSTATION_INFO: (state, params) => {
      state.petrolStation = params
    }
  },
  actions: {
    async initCityData({ commit }, params) {
      console.log(19, params)
      let res = await Vue.prototype.$api.getCityInfo(params)
      console.log(res)
    },
    async initOilStation({ commit }, params) {
      let res = await Vue.prototype.$api.getOilStation(params)
      console.log(23, res)
    },
    async initPetrolStationInfo({ commit }, params) {
      let res = await Vue.prototype.$api.getOilStation(params)
      console.log(res)
      if (res.success) {
        commit('INIT_PETROLSTATION_INFO', res.body)
      }
    }
  }
}

export default cityInfo
