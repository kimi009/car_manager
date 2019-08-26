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

export default {
  getPsbAccessToken
}
