import axios from '../api'
import GenerateGuid from './../../utils/generateGuid'
const appId = '10002033'
// 根据经纬度获取城市信息以及天气预报
const getCityInfo = data => {
  const requestId = GenerateGuid(32)
  return axios({
    baseURL: 'http://dapi.jchl.com',
    url: `/tpapi/front/weather/query?appId=${appId}&requestId=${requestId}`,
    data
  })
}
// 根据经纬度获取周边油站信息
const getOilStation = data => {
  const requestId = GenerateGuid(32)
  return axios({
    baseURL: 'http://dapi.jchl.com',
    url: `/tpapi/front/oilStation/query?appId=${appId}&requestId=${requestId}`,
    data
  })
}

// 获取尾号限行的城市
const getLimitRowCity = data => {
  const requestId = GenerateGuid(32)
  return axios({
    url: `/outer/vehicle/limitRowCity?appId=${appId}&requestId=${requestId}`,
    data
  })
}

// 根据城市Id获取尾号限行信息
const getLimitRow = data => {
  return axios({
    url: `/outer/vehicle/limitRow?appId=${appId}`,
    data
  })
}

export default {
  getCityInfo,
  getOilStation,
  getLimitRowCity,
  getLimitRow
}
