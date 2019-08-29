import axios from '../api' // 导入 api

// 获取短信验证码
export const getCode = data => {
  return axios({
    url: '/api/app/employee/getCode',
    method: 'post',
    data
  })
}

// 验证是否登录
export const isLogin = data => {
  return axios({
    url: '/api/app/employee/isLogin',
    method: 'post',
    data
  })
}

// 登录
export const login = data => {
  return axios({
    url: '/api/app/employee/login',
    method: 'post',
    data
  })
}

// 登出
export const logout = data => {
  return axios({
    url: '/api/app/employee/logout',
    method: 'post',
    data
  })
}

// 获取用户信息
export const userInfo = data => {
  return axios({
    url: '/api/app/employee/userInfo',
    method: 'post',
    data
  })
}
// 我的车辆车辆列表
export const carList = data => {
  return axios({
    url: '/api/app/car/list',
    method: 'get',
    data
  })
}
// 车辆详情
export const carInfo = data => {
  return axios({
    url: '/api/app/car/info',
    method: 'post',
    data
  })
}
// 修改车辆信息
export const carUpdata = data => {
  return axios({
    url: '/api/app/car/permit/updata',
    method: 'post',
    data
  })
}
export const integalInfo = data => {
  return axios({
    url: '/api/app/score/queryScoreBalance',
    method: 'post',
    data
  })
}
export const intergalList = data => {
  return axios({
    url: '/api/app/score/queryDetailByPage',
    method: 'post',
    data,
    noShowLoading: true
  })
}
export const addIntergal = data => {
  return axios({
    url: '/api/app/score/give?userId='+data.userId,
    method: 'get',
    // data,
    noShowLoading: true
  })
}
export const initUserleaseList = data => {
  return axios({
    url: '/api/app/rent/list',
    method: 'post',
    data,
    noShowLoading: true
  })
}
export const initUserleaseDetailList = data => {
  return axios({
    url: '/api/app/rent/detail',
    method: 'post',
    data,
    noShowLoading: true
  })
}
export default {
  getCode,
  isLogin,
  login,
  logout,
  userInfo,
  carList,
  carInfo,
  carUpdata,
  integalInfo,
  intergalList,
  initUserleaseList,
  initUserleaseDetailList,
  addIntergal
}
