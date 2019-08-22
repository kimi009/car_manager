import Vue from 'vue'

const cityInfo = {
  state: {
    city: {},
    petrolStation: {}
  },
  mutations: {
    INIT_PETROLSTATION_INFO: (state, params) => {
      state.petrolStation = params
    }
  },
  actions: {
    async initPetrolStationInfo({ commit }, params) {
      let res = await Vue.prototype.$api.queryNewIncome(params)
      if (res.success) {
        commit('INIT_VEHICLE_INFO', res.body)
      }
    }
  }
}

export default vehicles
