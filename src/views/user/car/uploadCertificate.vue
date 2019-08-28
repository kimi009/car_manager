<template>
  <div class="uploadCertificate">
    <div class="column">
      <div class="title">修改保险凭证</div>
      <van-row type="flex" class="item">
        <van-col span="8">保险凭证</van-col>
        <van-col span="16">
          <div class="image marginRight"
               :style="{backgroundImage: `url(${image.traffic})`}"
               @click="itemHandle(3)"></div>
          <div class="image"
               :style="{backgroundImage: `url(${image.business})`}"
               @click="itemHandle(4)"></div>
        </van-col>
      </van-row>
    </div>
    <div class="column marginTop">
      <div class="title">修改行驶证</div>
      <van-row type="flex" class="item">
        <van-col span="8">行驶证正副本</van-col>
        <van-col span="16">
          <div class="image marginRight"
               :style="{backgroundImage: `url(${image.driving})`}"
               @click="itemHandle(5)"></div>
          <div class="image"
               :style="{backgroundImage: `url(${image.drivingCopy})`}"
               @click="itemHandle(6)"></div>
        </van-col>
      </van-row>
    </div>

    <div class="button">
      <van-button type="default" size="large" @click="submitHandle">提交审核</van-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Row, Col, Button, Toast } from 'vant'
import { getQueryString } from '@/utils/index.js'
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
      icon: require('../../../assets/image/user/idcard-back.png'),
      carId: parseInt(getQueryString('carId'))
    }
  },

  computed: {
    ...mapGetters([
      'fileData'
    ]),

    image () {
      return {
        traffic: (this.fileData[2] && this.fileData[2].url) || require('../../../assets/image/user/add-level.png'),
        business: (this.fileData[3] && this.fileData[3].url) || require('../../../assets/image/user/add-level.png'),
        driving: (this.fileData[4] && this.fileData[4].url) || require('../../../assets/image/user/add-level.png'),
        drivingCopy: (this.fileData[5] && this.fileData[5].url) || require('../../../assets/image/user/add-level.png')
      }
    }
  },

  created () {
    console.log('fileData', this.fileData)
  },

  methods: {
    ...mapActions([
      'setFileData'
    ]),

    itemHandle (num) {
      this.$router.push({path: '/sign/certificate', query: {picType: num}})
    },

    paramsFilter () {
      let params = {}
      if (this.fileData[2] && this.fileData[2].id) {
        params.trafficId = this.fileData[2].id
      }
      if (this.fileData[3] && this.fileData[3].id) {
        params.businessId = this.fileData[3].id
      }
      if (this.fileData[4] && this.fileData[4].id) {
        params.drivingId = this.fileData[4].id
      }
      if (this.fileData[5] && this.fileData[5].id) {
        params.drivingCopyId = this.fileData[5].id
      }
      console.log(params)
      return params
    },

    submitHandle () {
      let params = this.paramsFilter()
      console.log(params)
      // 上传车辆证照
      if (Object.keys(params).length === 4) {
        // params.carId = this.carId
        this.$api.vehicleUpdate({
          ...params,
          carId: this.carId
        }).then(res => {
          if (res.success) {
            Toast({
              message: '上传成功',
              position: 'bottom'
            })
          } else {
            Toast({
              message: '上传失败',
              position: 'bottom'
            })
          }
        })
      } else {
        let mgs = {
          trafficId: '请上传交强险',
          businessId: '请上传商业险',
          drivingId: '请上传行驶证正本',
          drivingCopyId: '请上传行驶证副本'
        }
        for (let key in mgs) {
          if (!params.hasOwnProperty(key)) {
            Toast({
              message: mgs[key],
              position: 'bottom'
            })
            return
          }
        }
      }
    }
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
