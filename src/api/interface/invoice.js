import axios from '../api' // 导入 api

// 获取票税宝accessToken
const getPsbAccessToken = data => {
  return axios({
    method: 'get',
    url: `/api/psb/getAccessToken?userId=${data.userId}&mobilePhone=${
      data.mobilePhone
    }`
  })
}

// 获取用户发票抬头列表
const getInvoiceTitles = params => {
  return axios({
    method: 'get',
    url: '/api/psb/getInvoiceTitles',
    params
  })
}

// 创建发票抬头
const createInvoiceTitle = data => {
  return axios({
    method: 'post',
    url: '/api/psb/createInvoiceTitle',
    data
  })
}


export default {
  getPsbAccessToken,
  getInvoiceTitles,
  createInvoiceTitle
}
