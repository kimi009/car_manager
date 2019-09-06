<template>
  <div class="leaseInfo">
    <div class="nav-wrap">
      <div class="nav">
        <img class="icon" src="../../../assets/image/signContract/leaseInfo.png" alt="">
        <span class="text">确认租约</span>
        <img @click="popupShow = true" class="problem" src="../../../assets/image/signContract/problem.png" alt="">
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
    <!-- 租约 -->
    <car-agreement :show.sync="show" ref="carAgreement"></car-agreement>

    <van-popup v-model="popupShow" class="popup">
      <div class="title">1.Q:租赁期限能不能提前终止？</div>
      <div class="content">A:租赁期限可以提前终止，但需提前一个月向企业提出申请。</div>
      <div class="title">2.Q:租车时长和租金如何确定？</div>
      <div class="content">A:平台根据您的用车习惯及车辆状况，综合评估后确定租车时长和月租金额。</div>
      <div class="title">3.Q:银行账户信息可以修改吗？</div>
      <div class="content">A:暂不支持直接修改，如需修改，请联系客服。</div>
      <div class="title">4.Q:为什么要平台代开发票？</div>
      <div class="content">A:根据《中华人民共和国个人所得税法》相关规定，个人提供财产租赁需开具发票，并缴纳相关税费。为方便您开票缴税，平台提供代开发票服务，并按规定收取开票服务费。</div>
      <div class="title">5.Q:开票需要缴多少税款？</div>
      <div class="content">A:按照相关法律、法规，出租车辆需缴纳个人所得税、增值税及附加税。每月开票需缴税金额大概为月租金的4.72%。</div>
    </van-popup>
  </div>
</template>

<script>
import CarAgreement from '../../../components/CarAgreement/index'
import { Button, Row, Col, Toast, Popup } from 'vant'
import { mapMutations } from 'vuex'
import { lStorage } from '@/utils/storage.js'
const USER_ID = lStorage.getItem(lStorage.USER_ID)
export default {
  props:{
    active: {
      type: Number
    }
  },
  components: {
    [Button.name]: Button,
    [Row.name]: Row,
    [Col.name]: Col,
    [Toast.name]: Toast,
    [Popup.name]: Popup,
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
      show: false,
      popupShow: false,
      rentId: '' // 需求id
    }
  },

  created () {
    this.getInfo()
  },

  methods: {
    ...mapMutations([
      'SET_SUBMIT_LEASE'
    ]),
    async getInfo () {
      if (Object.keys(this.info).length === 0) {
        let res = await this.$api.getRentList({ size: 20, current: 1 })
        let rent = res.data.filter(i => i.rentState === '未租')

        if (rent.length !== 0) {
          rent = rent.sort((a, b) => +new Date(a.createDate) - +new Date(b.createDate))[0]
          this.rentId = rent.rentId
          let res2 = await this.$api.getLeaseDetail({
            rentId: rent.rentId
          })
          let res3 = await this.$api.queryMyBankCard({
            userId: USER_ID
          })
          if (res2.success) {
            this.info = Object.assign({}, res2.data, {
              vehicleBrand: rent.vehicleBrand,
              vehicleModel: rent.vehicleModel,
              bankOfDeposit: res3.data.receiveBank,
              bankAccountNum: res3.data.receiveAccountNo
            })
          }
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
        this.$api.confirmLeaseInfo({
          platform_invoice: true,
          rentId: this.rentId
        }).then(res => {
          if (res.success) {
            // 更改租约提交状态
            this.SET_SUBMIT_LEASE(true)
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
  },

  watch: {
    active (newValue, oldValue) {
      if (newValue === 3) {
        this.$refs.carAgreement.initHandle()
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
  .popup{
    width: 300px;
    padding: 30px 15px;
    border-radius: 10px;
    font-size:12px;
    text-align: left;
    line-height:18px;
    .title{
      color: #2C2C2C;
      font-weight: bold;
    }
    .content{
      color: #666;
      text-indent: 11px;
      margin-bottom: 15px;
    }
    .content:last-child{
       margin-bottom: 0px;
    }
  }
}
</style>
