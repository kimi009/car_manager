import Vue from 'vue'
import { resolve } from "url";
import { rejects } from "assert";

const carRental = {
  state: {
    barActive: -1, // 环节选中状态 (-1未选中 1 2 3 4 5 6)
    linkActive: 1, // 进行到第几环节 (1 2 3 4 5 6)
    finished: false, // 是否完成状态
    anomaly: [], // 1 行驶证年检过期、2 保险过期、3 平台审核不通过、4 租车失败
    bill: 0, // 是否产生结账单（ 0 未产生、1 等待、 2 已产生）
    showAgreement: false, // 租车协议
    leaseInfo: '', // 租约信息
    submitLease: '' // 是否已提交租约
  },
  mutations: {
    SET_BAR_ACTIVE: (state, num) => {
      state.barActive = num
    },
    SET_STATE: (state, obj) => {
      if (obj.link < 1 || obj.link > 5) {
        obj.link = 1
      }
      state.linkActive = obj.link
      state.finished = obj.finished || false
      if (obj.anomaly) {
        state.anomaly = obj.anomaly
      }
      if (obj.bill) {
        state.bill = obj.bill
      }
    },
    ADD_ANOMALY: (state, val) => {
      state.anomaly.push(val)
      state.anomaly = Array.from(new Set(state.anomaly))
    },
    DELETE_ANOMALY: (state, val) => {
      state.anomaly = state.anomaly.filter(item => item !== val)
    },
    SET_SHOW_AGREEMENT: (state, bol) => {
      state.showAgreement = bol
    },
    SET_LEASE_INFO: (state, obj) => {
      state.leaseInfo = obj
    },
    SET_SUBMIT_LEASE: (state, bol) => {
      state.submitLease = bol
    }
  },
  actions: {
    setBarActive ({ commit }, num) {
      commit('SET_BAR_ACTIVE', num)
    },
    setState ({ commit }, obj) {
      commit('SET_STATE', obj)
    },
    setShowAgreement ({ commit }, bol) {
      commit('SET_SHOW_AGREEMENT', bol)
    },
    setLeaseInfo ({ commit }, obj) {
      commit('SET_LEASE_INFO', obj)
    },
    isSubmitLease ({ state }) {
      return new Promise( async (resolve, reject) => {
        if (state.submitLease === '') {
          console.log(55666)
          let res = await Vue.prototype.$api.carRentalState()
          if (res.success) {
            state.submitLease = res.data.lease
            resolve(res.data.lease)
          }
        } else{
          console.log(577788)
          resolve(state.submitLease)
        }
      })
    }
  }
}

export default carRental
