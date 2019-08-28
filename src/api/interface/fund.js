import axios from '../api' // 导入 api

// 余额查询接口
export const queryBalance = data => {
  return axios({
    url: '/api/app/balance/queryBalance',
    method: 'post',
    data
  })
}

// 余额提现记录接口（分页）
export const queryBalanceConsumeByPage = data => {
  return axios({
    url: '/api/app/balance/queryBalanceConsumeByPage',
    method: 'post',
    data
  })
}

// 余额收入记录接口（分页）
export const queryBalanceIncomeByPage = data => {
  return axios({
    url: '/api/app/balance/queryBalanceIncomeByPage',
    method: 'post',
    data
  })
}

// 资金提现接口
export const createWithdraw = data => {
  return axios({
    url: '/api/app/balance/createWithdraw',
    method: 'post',
    data
  })
}

// 油费余额查询接口
export const queryOilBalance = data => {
  return axios({
    url: '/api/app/oilfee/queryOilBalance',
    method: 'post',
    data
  })
}

export default {
  queryBalance,
  queryBalanceConsumeByPage,
  queryBalanceIncomeByPage,
  createWithdraw,
  queryOilBalance
}
