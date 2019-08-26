import axios from '../api' // 导入 api

// 获取票税宝accessToken
const getPsbAccessToken = data => {
  return axios({
    url: '/api/psb/getAccessToken',
    data
  })
}

export default {
  getPsbAccessToken
}
