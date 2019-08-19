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

export default {
  getCode,
  isLogin,
  login,
  logout,
  userInfo
}
