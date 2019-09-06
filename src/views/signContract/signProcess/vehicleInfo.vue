<template>
  <div class="vehicleInfo">
    <div class="nav-wrap">
      <div class="nav">
        <img class="icon" src="../../../assets/image/signContract/vehicleInfo.png" alt="">
        <span class="text">确认车辆信息</span>
      </div>
      <div class="van-hairline--bottom"></div>
    </div>
    <div class="contarner">
      <van-row class="list">
        <van-row type="flex" justify="space-between" class="li">
          <van-col span="0" class="desc">车主姓名</van-col>
          <van-col span="0">{{info.owner}}</van-col>
        </van-row>
        <van-row type="flex" justify="space-between" class="li">
          <van-col span="0" class="desc">车牌号：</van-col>
          <van-col span="0">{{info.licensePlate}}</van-col>
        </van-row>
        <van-row type="flex" justify="space-between" class="li">
          <van-col span="0" class="desc">车架号：</van-col>
          <van-col span="0">{{info.frameNum}}</van-col>
        </van-row>
        <van-row type="flex" justify="space-between" class="li">
          <van-col span="0" class="desc">发动机号：</van-col>
          <van-col span="0">{{info.engineNum}}</van-col>
        </van-row>
        <van-row type="flex" justify="space-between" class="li">
          <van-col span="0" class="desc">车辆品牌：</van-col>
          <van-col span="0">{{info.vehicleBrand}}</van-col>
        </van-row>
        <van-row type="flex" justify="space-between" class="li">
          <van-col span="0" class="desc">车辆型号：</van-col>
          <van-col span="0">{{info.vehicleModel}}</van-col>
        </van-row>
      </van-row>
    </div>
    <div class="button-list">
      <div class="text">确认完车辆信息就能签订租约了!</div>
      <div class="sign-button">
        <van-button type="default" size="large" class="button" @click="checkHandle">去签订租约</van-button>
      </div>
      <div class="error-button">
        <van-button type="default" size="large" @click="errorHandle">信息有误</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Button, Row, Col, Dialog } from 'vant'
// import { diff } from '@/utils/index.js'
import { lStorage } from '@/utils/storage.js'
export default {
  components: {
    [Button.name]: Button,
    [Row.name]: Row,
    [Col.name]: Col,
    [Dialog.name]: Dialog
  },

  data () {
    return {
      info: {
        // owner: '', // 车主姓名
        // licensePlate: '', // 车牌号
        // frameNum: '', // 车架号
        // engineNum: '', // 发动机号
        // vehicleBrand: '', // 车辆品牌
        // vehicleModel: '' // 车辆型号
      }
    }
  },

  created () {
    this.getInfo()
  },

  methods: {
    async getInfo () {
      if (Object.keys(this.info).length === 0) {
        let res = await this.$api.getCarList()
        let car = res.data.filter(i => i.rentState === '1')
        // console.log('car', car)
        if (car.length !== 0) {
          let carId = car.sort((a, b) => +new Date(a.createDate) - +new Date(b.createDate))[0].carId
          let res2 = await this.$api.getVehicleInfo({
            carId: carId
          })
          if (res2.success) {
            this.info = res2.data
          }
        }
      }
    },

    checkHandle () {
      this.$emit('activeHandle', 3)
      lStorage.setItem(lStorage.VEHICLE_INFO, JSON.stringify({
        operate: true,
        message: this.info
      }))
    },

    errorHandle () {
      // 请您联系企业管理员修改车辆信息
      Dialog.alert({
        title: '提示',
        message: '请您联系企业管理员修改车辆信息'
      })
    }
  }
}
</script>

<style scoped lang="less">
.vehicleInfo{
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
  .contarner{
    .wh(100%, auto);
    padding: 15px;
    background:rgba(246,246,246,1);
    .list{
      height: 100%;
      background: #FFF;
      padding: 13px 15px;
      .li{
        color: #333;
        font-size:15px;
        margin-bottom: 13px;
        .desc{
          color: #666;
        }
      }
      .li:last-child {
        margin-bottom: 0px;
      }
    }
    .waiting{
      color: #333;
      font-size:15px;
      background: #FFF;
      padding: 13px 15px;
    }
  }
  .button-list{
    .wh(100%, auto);
    .text{
      font-size:15px;
      color: #333;
      margin: 19px auto 28px auto;
    }
    .sign-button{
      .wh(345px, 44px);
      margin: 0 auto;
    }
    .button{
      background-color: #FF7324;
    }
    .error-button{
      .wh(345px, 44px);
      margin: 15px auto 40px auto;
      /deep/ .van-button--default {
        background:rgba(224,224,224,1);
      }
    }
  }
}
</style>
