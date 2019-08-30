<template>
  <div class="leaseInfo">
    <div class="nav-wrap">
      <div class="nav">
        <img class="icon" src="../../../assets/image/signContract/leaseInfo.png" alt="">
        <span class="text">确认租约</span>
        <img class="problem" src="../../../assets/image/signContract/problem.png" alt="">
      </div>
      <div class="van-hairline--bottom"></div>
    </div>
    <div class="contarner">
      <van-row class="list">
        <van-row type="flex" justify="space-between" class="li">
          <van-col span="0" class="desc">租车公司名称</van-col>
          <van-col span="0">{{info.rentalCompany}}</van-col>
        </van-row>
        <van-row type="flex" justify="space-between" class="li">
          <van-col span="0" class="desc">车主姓名</van-col>
          <van-col span="0">{{info.owner}}</van-col>
        </van-row>
        <van-row type="flex" justify="space-between" class="li">
          <van-col span="0" class="desc">车牌号</van-col>
          <van-col span="0">{{info.licensePlate}}</van-col>
        </van-row>
        <van-row type="flex" justify="space-between" class="li">
          <van-col span="0" class="desc">车辆品牌</van-col>
          <van-col span="0">{{info.vehicleBrand}}</van-col>
        </van-row>
        <van-row type="flex" justify="space-between" class="li">
          <van-col span="0" class="desc">车辆型号</van-col>
          <van-col span="0">{{info.vehicleModel}}</van-col>
        </van-row>
        <van-row type="flex" justify="space-between" class="li">
          <van-col span="0" class="desc">月租金</van-col>
          <van-col span="0">{{info.monthlyRent}}</van-col>
        </van-row>
        <van-row type="flex" justify="space-between" class="li">
          <van-col span="0" class="desc">月租车时长</van-col>
          <van-col span="0">{{info.rentDuration}}</van-col>
        </van-row>
        <van-row type="flex" justify="space-between" class="li">
          <van-col span="0" class="desc">开户银行</van-col>
          <van-col span="0">{{info.bankOfDeposit}}</van-col>
        </van-row>
        <van-row type="flex" justify="space-between" class="li">
          <van-col span="0" class="desc">银行账号 </van-col>
          <van-col span="0">{{info.bankAccountNum}}</van-col>
        </van-row>
      </van-row>
    </div>
    <div class="button-list">
      <div class="tick" @click="checkHandle">
        <svg-icon class="icon" icon-class="select" v-if="check"/>
        <svg-icon class="icon" icon-class="notSelect" v-else/>
        我已阅读并同意 <span @click.stop="showAgreement">租车协议</span>
      </div>
      <div class="button">
        <van-button type="default" size="large" @click="submitHandle">提交</van-button>
      </div>
    </div>

    <car-agreement :show.sync="show"></car-agreement>
  </div>
</template>

<script>
import CarAgreement from '../../../components/CarAgreement/index'
import { Button, Row, Col, Toast } from 'vant'
export default {
  components: {
    [Button.name]: Button,
    [Row.name]: Row,
    [Col.name]: Col,
    [Toast.name]: Toast,
    CarAgreement
  },

  data () {
    return {
      check: false, // 是否同意租车协议
      info: {
        // rentalCompany: '', // 租车公司名称
        // owner: '', // 车主姓名
        // licensePlate: '', // 车牌号
        // vehicleBrand: '', // 车辆品牌
        // vehicleModel: '', // 车辆型号
        // leaseTerm: '', // 租赁期限
        // monthlyRent: '', // 月租金
        // rentDuration: '', // 月租车时长
        // bankOfDeposit: '', // 开户银行
        // bankAccountNum: '' // 银行账号
      },
      show: false
    }
  },

  activated () {
    this.getInfo()
  },

  methods: {
    async getInfo () {
      if (Object.keys(this.info).length === 0) {
        let res = await this.$api.getRentList({ size: 10, current: 1 })
        console.log('res1', res)
        let res2 = await this.$api.getLeaseDetail({
          rentId: res.data[0].rentId
        })
        console.log('res2', res2)
        if (res2.success) {
          this.info = res2.data
        }
      }
    },

    checkHandle () {
      this.check = !this.check
    },

    showAgreement () {
      this.show = true
    },

    submitHandle () {
      if (this.check) {
        this.$api.confirmLeaseInfo({platform_invoice: true}).then(res => {
          if (res.success) {
            this.$router.push('/sign/submitted')
          }
        })
      } else {
        Toast({
          message: '请先同意租车协议',
          position: 'bottom'
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.leaseInfo{
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
  }
  .button-list{
    .wh(100%, auto);
    padding-top: 5px;
    .tick{
      .wh(100%, 50px);
      font-size: 15px;
      margin-bottom: 12px;
      color: #333;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon{
        .wh(16px, 16px);
        margin-right: 5px;
        color: #b7b7b7;
      }
      span{
        color: #FF7324;
        margin-left: 5px;
        text-decoration: underline;
      }
    }
    .button{
      .wh(345px, 44px);
      margin: 0 auto 34px auto;
    }
  }
}
</style>
