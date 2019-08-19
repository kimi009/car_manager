import axios from '../api' // 倒入 api

// 获取车辆信息
export const getVehicleInfo = data => {
  return axios({
    url: '/api/app/car/info',
    method: 'post',
    data
  })
}

// 提交车辆证照
export const vehicleLicense = data => {
  return axios({
    url: '/api/app/car/permit/submit',
    method: 'post',
    data
  })
}

export default {
  getVehicleInfo,
  vehicleLicense
}
