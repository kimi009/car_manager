<template>
  <div class="user">
    <div class="header">
      <van-row type="flex"
               class="wrap">
        <van-col span="6"
                 class="avatar">
          <img src="../../assets/image/user/head.png"
               alt="">
        </van-col>
        <van-col span="11"
                 class="head-list">
          <div class="head-li">笑傲浆糊</div>
          <div class="head-li">会员积分：6711分</div>
          <div class="head-li">
            <img src="../../assets/image/user/members.png"
                 alt="">
            <span>黄金会员</span>
          </div>
        </van-col>
        <van-col span="7">
          <div class="sign">
            <img src="../../assets/image/user/sign.png"
                 alt="">
            <span>签到领积分</span>
          </div>
        </van-col>
      </van-row>
    </div>
    <van-row type="flex"
             class="account">
      <van-col span="8"
               class="account-list">
        <van-row class="icon">
          <img src="../../assets/image/user/balance.png"
               alt="">
        </van-row>
        <van-row class="text">帐户余额(元）</van-row>
        <van-row class="num">8888.8</van-row>
        <van-row class="cash-button">
          <div>提现</div>
        </van-row>
      </van-col>
      <van-col span="8"
               class="account-list">
        <van-row class="icon">
          <img src="../../assets/image/user/oil.png"
               alt="">
        </van-row>
        <van-row class="text">油费余额(元）</van-row>
        <van-row class="num">2676</van-row>
        <van-row class="cash-button">
          <div>提现</div>
        </van-row>
      </van-col>
      <van-col span="8">
        <van-row class="icon">
          <img src="../../assets/image/user//rent.png"
               alt="">
        </van-row>
        <van-row class="text">本月租金收入(元）</van-row>
        <van-row class="num">7512</van-row>
        <van-row class="cash-button">
          <div>提现</div>
        </van-row>
      </van-col>
    </van-row>
    <van-cell-group>
      <van-cell class="group"
                title="我的银行卡"
                :icon="icon_list.bankCard"
                is-link />
      <van-cell class="group"
                title="我的车辆"
                :icon="icon_list.car"
                to="/carlist"
                is-link />
      <van-cell class="group"
                title="我的租约"
                :icon="icon_list.lease"
                is-link />
      <van-cell class="group"
                title="我的订单"
                :icon="icon_list.order"
                is-link />
      <van-cell class="group"
                title="我的发票"
                :icon="icon_list.invoice"
                is-link />
      <van-cell class="group"
                title="惠用车积分"
                :icon="icon_list.integration"
                is-link />
      <van-cell class="group"
                title="关于惠用车"
                :icon="icon_list.about"
                is-link />
      <van-cell class="group"
                title="联系我们"
                :icon="icon_list.contact"
                is-link />
    </van-cell-group>
    <!--以下为组件信息-->
    <MayCar v-if="showMyCar === true"
            :carData='carData'></MayCar>
  </div>
</template>

<script>
import { Row, Col, Button, Toast, Cell, CellGroup } from 'vant'

export default {
  name: 'mayLease',
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button,
    [Toast.name]: Toast,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data() {
    return {
      icon_list: {
        bankCard: require('../../assets/image/user/bankCard.png'),
        car: require('../../assets/image/user/car.png'),
        lease: require('../../assets/image/user/lease.png'),
        order: require('../../assets/image/user/order.png'),
        invoice: require('../../assets/image/user/invoice.png'),
        integration: require('../../assets/image/user/integration.png'),
        about: require('../../assets/image/user/about.png'),
        contact: require('../../assets/image/user/contact.png')
      },
      showMyCar: false,
      carData: {}
    }
  },
  methods: {
    // 请求我的车辆信息
    requestCar() {

    }
  }
}
</script>

<style scoped lang="less">
</style>
