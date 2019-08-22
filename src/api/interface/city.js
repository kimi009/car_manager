import axios from '../api' // 倒入 api

// ?????????????????
const getCityInfo = data => {
  return axios({
    url: '/city/cityInfo?appId=10002033',
    data
  })
}
// ?????????????
const getOilStation = data => {
  return axios({
    url: '/oilStation/query?appId=10002033',
    data
  })
}

export default {
  getCityInfo,
  getOilStation
}
