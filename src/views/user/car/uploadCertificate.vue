<template>
  <div class="uploadCertificate">
    <div class="column">
      <div class="title">修改保险凭证</div>
      <van-row type="flex" class="item">
        <van-col span="8">保险凭证</van-col>
        <van-col span="16">
          <div class="image" :style="{backgroundImage: `url(${icon})`}"></div>
        </van-col>
      </van-row>
    </div>
    <div class="column marginTop">
      <div class="title">修改行驶证</div>
      <van-row type="flex" class="item">
        <van-col span="8">行驶证正副本</van-col>
        <van-col span="16">
          <div class="image marginRight" :style="{backgroundImage: `url(${icon})`}"></div>
          <div class="image" :style="{backgroundImage: `url(${icon})`}"></div>
        </van-col>
      </van-row>
    </div>

    <div class="button">
      <van-button type="default" size="large" @click="submitHandle">提交审核</van-button>
    </div>
  </div>
</template>

<script>
import { Row, Col, Button, Toast } from 'vant'
export default {
  name: 'uploadCertificate',

  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button,
    [Toast.name]: Toast
  },

  data () {
    return {
      icon: require('../../../assets/image/user/idcard-back.png')
    }
  },

  methods: {
    submitHandle () {}
  }
}
</script>

<style scoped lang="less">
.uploadCertificate{
  .fs;
  background-color: #F4F4F4;
  padding: 15px 15px 0 15px;
  .column{
    width: 100%;
    .title{
      font-size:17px;
      color: #333;
      text-align: left;
    }
    .item{
      height: 91px;
      font-size :15px;
      line-height: 91px;
      background-color: #fff;
      border-radius:3px;
      margin-top: 10px;
      padding: 0 15px;
      div:nth-child(1) {
        text-align: left;
        color: #666;
      }
      div:nth-child(2) {
        text-align: right;
        color: #333;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .image{
          flex-grow: 0;
          .wh(84px, 57px);
          background: #F4F4F4 center no-repeat / cover;
        }
        .marginRight{
          margin-right: 14px;
        }
      }
    }
  }
  .marginTop{
    margin-top: 21px;
  }
  .button{
    .wh(345px, 44px);
    margin: 27px auto 0 auto;
  }
}
</style>
