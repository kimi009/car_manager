<template>
  <div class="vehicleLicense">
    <div class="nav-wrap">
      <div class="nav">
        <img class="icon" src="../../../assets/image/signContract/vehicleLicense.png" alt="">
        <span class="text">上传车辆证照</span>
        <img class="problem" src="../../../assets/image/signContract/problem.png" alt="">
      </div>
      <div class="van-hairline--bottom"></div>
    </div>
    <div class="container">
      <div class="title"><em>*</em> 保单：</div>
      <div class="pictrue">
        <div class="wrap" @click="$router.push({path: '/sign/certificate', query: {picType: 3}})">
          <img :src="imgFile.traffic" alt="">
        </div>
        <div class="wrap" @click="$router.push({path: '/sign/certificate', query: {picType: 4}})">
          <img :src="imgFile.business" alt="">
        </div>
      </div>
      <div class="title"><em>*</em> 行驶证正副本：</div>
      <div class="pictrue">
        <div class="wrap" @click="$router.push({path: '/sign/certificate', query: {picType: 5}})">
          <img :src="imgFile.front" alt="">
        </div>
        <div class="wrap" @click="$router.push({path: '/sign/certificate', query: {picType: 6}})">
          <img :src="imgFile.back" alt="">
        </div>
      </div>
      <ul class="list">
        <li>为使您的合法权益得到更好的保障，要求您购买的</li>
        <li class="red">第三者责任险的投保额不低于人民币50万元。</li>
      </ul>
      <div class="button">
        <van-button type="default" size="large" @click="uploader">上传</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Button, Toast } from 'vant'
export default {
  components: {
    [Button.name]: Button,
    [Toast.name]: Toast
  },

  data () {
    return {
      imageList: [
        require('../../../assets/image/signContract/trafficInsurance.png'),
        require('../../../assets/image/signContract/commercialInsurance.png'),
        require('../../../assets/image/signContract/front-drivingPermit.png'),
        require('../../../assets/image/signContract/back-drivingPermit.png')
      ]
    }
  },

  computed: {
    ...mapGetters([
      'fileData'
    ]),

    imgFile () {
      return {
        traffic: (this.fileData && this.fileData[2] && (this.fileData[2].url || this.fileData[2].dataURL)) || this.imageList[0],
        business: (this.fileData && this.fileData[3] && (this.fileData[3].url || this.fileData[3].dataURL)) || this.imageList[1],
        front: (this.fileData && this.fileData[4] && (this.fileData[4].url || this.fileData[4].dataURL)) || this.imageList[2],
        back: (this.fileData && this.fileData[5] && (this.fileData[5].url || this.fileData[5].dataURL)) || this.imageList[3]
      }
    }
  },

  mounted () {},

  methods: {
    ...mapActions([
      'setFileData'
    ]),

    // 获取证件照ID
    async getCertificateId () {
      let res = await this.$api.getCarList()
      let car = res.data && res.data.find(i => i.rentState === '1') || {}
      let res2 = await this.$api.getVehicleInfo({
        carId: car.carId
      })
      if (res2.success) {
        this.vehicleDetail = res.data

        if (res.data.traffic) {
          this.setFileHandle(res.data.traffic, 3)
        }

        if (res.data.business) {
          this.setFileHandle(res.data.business, 4)
        }

        if (res.data.driving) {
          this.setFileHandle(res.data.driving, 5)
        }

        if (res.data.drivingCopy) {
          this.setFileHandle(res.data.drivingCopy, 6)
        }
      }
    },

    // 获取证照url
    setFileHandle (id, index) {
      this.$api.getImageUrl({id: id}).then(res => {
        let obj = Object.assign({}, this.fileData[index] || {}, {
          url: res.data.url,
          picType: index,
          id: id
        })
        this.setFileData(obj)
        console.log('fileData', this.fileData)
      })
    },

    paramsFilter () {
      let params = {}
      if (this.fileData[2] && this.fileData[2].id) {
        params.traffic_id = this.fileData[2].id
      }
      if (this.fileData[3] && this.fileData[3].id) {
        params.business_id = this.fileData[3].id
      }
      if (this.fileData[4] && this.fileData[4].id) {
        params.driving_id = this.fileData[4].id
      }
      if (this.fileData[5] && this.fileData[5].id) {
        params.driving_copy_id = this.fileData[5].id
      }
      // console.log(params)
      return params
    },

    uploader () {
      let params = this.paramsFilter()
      console.log(params)
      // 上传车辆证照
      if (Object.keys(params).length === 4) {
        this.$api.vehicleLicense(params).then(res => {
          if (res.data.uploaded) {
            Toast({
              message: '上传成功',
              position: 'bottom'
            })
            this.$emit('activeHandle', 2)
          } else {
            Toast({
              message: '上传失败',
              position: 'bottom'
            })
          }
        })
      } else {
        let mgs = {
          traffic_id: '请上传交强险',
          business_id: '请上传商业险',
          driving_id: '请上传行驶证正本',
          driving_copy_id: '请上传行驶证副本'
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
.vehicleLicense{
  height: 100%;
  .nav-wrap{
    .wh(100%, 57px);
    position: relative;
    .nav{
      padding: 0 15px;
      height: 100%;
      display: flex;
      align-items: center;
      .icon{
        height: 27px;
        margin-right: 10px;
      }
      .text{
        font-size:17px;
        color: #333;
      }
      .problem{
        height: 20px;
        position: absolute;
        top: 50%;
        margin-top: -10px;
        right: 15px;
      }
    }
  }
  .container{
    padding: 21px 18px 0px 18px;
    .title{
      font-size: 14px;
      color: #333;
      text-align: left;
      .wh-l(100%, 15px);
      em{
        color: #FF7426;
        font-size: 15px;
        position: relative;
        top: 3px;
      }
    }
    .pictrue{
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin: 10px 0 19px 0;
      .wrap{
        .wh(159px, 127px);
        display:flex;
        align-items:center;
        justify-content:center;
        overflow: hidden;
        img{
          height: 100%;
          margin: 0 auto;
        }
      }
    }
    .list{
      color: #666;
      font-size: 14px;
      text-align: left;
      margin-bottom: 30px;
      li{
        margin-bottom: 8px;
      }
      .red{
        color:#FF7324;
      }
    }
    .button{
      .wh(345px, 44px);
      margin: 0 auto 49px auto;
    }
  }
}
</style>
