import Vue from 'vue'
import { lStorage } from '@/utils/storage.js'

const account = {
  state: {
    availableBalance: '', // 账户余额
    oilBalance: '' // 油费余额
  },
  mutations: {
    // SET_ACCOUNT_MSG: (state, val) => {
    //   state.availableBalance = val
    // }
  },
  actions: {
    async getAccountMsg ({ state }) {
      let userId = lStorage.getItem(lStorage.USER_ID) || false
      let res = await Vue.prototype.$api.queryBalance({
        userId: userId
      })
      if (res.success) {
        state.availableBalance = res.data.availableBalance
      }
    },

    async getOilBalance ({ state }) {
      let userId = lStorage.getItem(lStorage.USER_ID) || false
      let res = await Vue.prototype.$api.queryOilBalance({
        userId: userId
      })
      if (res.success) {
        state.oilBalance = res.data.availableBalance
      }
    }
  }
}

export default account
