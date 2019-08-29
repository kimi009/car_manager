import axios from '../api' // 倒入 api

// 获取车辆信息
export const getVehicleInfo = data => {
  return axios({
    url: '/api/app/car/info',
    method: 'post',
    data
  })
}

// 获取车辆列表
export const getCarList = data => {
  return axios({
    url: '/api/app/car/list',
    method: 'post',
    data
  })
}

// 提交车辆证照
export const vehicleLicense = data => {
  return axios({
    url: '/api/app/car/permit/submit',
    method: 'post',
    data,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  })
}

// 修改车辆信息
export const vehicleUpdate = data => {
  return axios({
    url: '/api/app/car/permit/update',
    method: 'post',
    data
  })
}

// 查询最新租约车辆收益
export const queryNewIncome = data => {
  return axios({
    url: '/api/app/rent/queryNewestIncome',
    data
  })
}

export default {
  getVehicleInfo,
  getCarList,
  vehicleLicense,
  vehicleUpdate,
  queryNewIncome
}
