import axios from '../api'
import config from '@/api/config'

const wxAppId = 'wx78b4edeac7161cb0'
// http://wx.jchl.com/gateway/wechat/thirdparty/ocsp/getWechatWebJs?
// requestId=6409c01b0bcc2f400e8146e8071c99ec&token=235996b41edf417aae23677adc5d037810001201c78c023473c8dc65
// &appId=000101

const fillData = data => {
  return Object.assign({}, data, { wechatCode: 'jchl_hyc' })
}

const wxAuth = () => {
  const redirectUrl = `${encodeURI(config.HOST)}`
  const authUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${wxAppId}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_base&state=jchyc#wechat_redirect`
  window.location.href = authUrl
}

// 获取wx配置信息
const getJsConfigInfo = data => {
  // let data = fillData({ url: config.HOST })
  return axios({
    // baseURL: config.HOST,
    // url: `/gateway/wechat/thirdparty/ocsp/getWechatWebJs?appId=000101`,
    url: 'api/weixin/getSignature?appId=000101',
    data: fillData(data),
    isNeedRequestId: true
  })
}

// 获取微信openId
const getOpenId = data => {
  return axios({
    baseURL: config.HOST,
    url: `/auth/wechatCommonService/getOpenId?appId=000101`,
    data: fillData(data),
    isNeedRequestId: true
  })
}

// 获取微信用户信息
const getWxUserinfo = data => {
  return axios({
    baseURL: config.HOST,
    url: `/auth/wechatCommonService/getWxUserInfo?requestId=6409c01b0bcc2f400e8146e8071c99ec&token=235996b41edf417aae23677adc5d037810001201c78c023473c8dc65&appId=000101`,
    data: fillData(data),
    isNeedRequestId: true
  })
}


export default {
  getJsConfigInfo,
  getOpenId,
  wxAuth,
  getWxUserinfo
}
