import axios from '../api' // 导入 api

// 获取保险信息
const getInsuranceInfo = data => {
  return axios({
    method: 'get',
    url: `/api/app/car/insurance/info?userId=${data.userId}`
  })
}
// 保险报价
const getSafeList = data => {
  return axios({
    method: 'get',
    url: '/api/app/car/insurance/offer/list',
    data
  })
}

// 创建保险
const saveSafe = data => {
  return axios({
    url: '/api/app/car/insurance/chance/add',
    data
  })
}

export default {
  getInsuranceInfo,
  getSafeList,
  saveSafe
}
