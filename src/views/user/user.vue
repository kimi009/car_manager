<template>
  <div class="user">
    <div class="header">
      <van-row type="flex"
               class="wrap">
        <van-col span="6"
                 class="avatar">
          <div class="icon"
               :style="{backgroundImage: `url(${headPath})`}"
               @click="$router.push('/user/personal')">
          </div>
        </van-col>
        <van-col span="11"
                 class="head-list">
          <div class="head-li">{{userInfo.name}}</div>
          <div class="head-li">会员积分：{{intergalVal}}分</div>
          <div class="head-li">
            <img src="../../assets/image/user/members.png"
                 alt="">
            <span>黄金会员</span>
          </div>
        </van-col>
        <van-col span="7">
          <div class="sign" @click="addIntergal">
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
        <van-row class="num">{{availableBalance}}</van-row>
        <van-row class="cash-button">
          <div @click="$router.push('/user/account')">提现</div>
        </van-row>
      </van-col>

      <van-col span="8"
               class="account-list">
        <van-row class="icon">
          <img src="../../assets/image/user/oil.png"
               alt="">
        </van-row>
        <van-row class="text">油费余额(元）</van-row>
        <van-row class="num">{{oilBalance}}</van-row>
        <van-row class="cash-button">
          <!-- <div @click="$router.push('/user/account')">购买</div> -->
        </van-row>
      </van-col>
      <van-col span="8"
               class="account-list">
        <van-row class="icon">
          <img src="../../assets/image/user//rent.png"
               alt="">
        </van-row>
        <van-row class="text">本月租金收入(元）</van-row>
        <van-row class="num">{{myIncomeData.nextMonthIncome}}</van-row>
        <van-row class="cash-button">
          <div @click="$router.push('/rent')">账单</div>
        </van-row>
      </van-col>
    </van-row>
    <van-cell-group>
      <van-cell class="group"
                title="我的银行卡"
                :icon="icon_list.bankCard"
                to="/user/bankCard"
                is-link />
      <van-cell class="group"
                title="我的车辆"
                :icon="icon_list.car"
                to="/user/car"
                is-link />
      <van-cell class="group"
                title="我的租约"
                to="/user/lease"
                :icon="icon_list.lease"
                is-link />
      <van-cell class="group"
                title="我的订单"
                :icon="icon_list.order"
                is-link
                to="/order"/>
      <van-cell class="group"
                title="我的发票"
                :icon="icon_list.invoice"
                is-link
                @click="openPsbInvoiceList" />
      <van-cell class="group"
                title="惠用车积分"
                :icon="icon_list.integration"
                @click="integral"
                is-link />
      <van-cell class="group"
                title="关于惠用车"
                :icon="icon_list.about"
                is-link
                to="/about" />
      <van-cell class="group"
                title="联系我们"
                :icon="icon_list.contact"
                is-link
                to="/contact" />
    </van-cell-group>

    <transition :name="$transition" mode="in-out">
        <router-view/>
    </transition>
  </div>
</template>

<script>
import { Row, Col, Button, Toast, Cell, CellGroup, Dialog } from 'vant'
import { mapGetters, mapState } from 'vuex'
import psbInvoice from '@/mixins/psbInvoice'
export default {
  name: 'user',
  mixins: [psbInvoice],
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button,
    [Toast.name]: Toast,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Dialog.name]: Dialog
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

  computed: {
    ...mapGetters([
      'userInfo', 'availableBalance', 'oilBalance', 'myIncomeData'
    ]),
    ...mapState({
      intergalVal: state => state.intergal.intergalVal || '0'
    }),
    headPath () {
      return this.userInfo.headPath ? this.userInfo.headPath : require('../../assets/image/user/head.png')
    }
  },
  mounted () {
    // 获取账户余额
    if (!this.availableBalance) {
      this.$store.dispatch('getAccountMsg')
    }
    // 获取油卡余额
    if (!this.oilBalance) {
      this.$store.dispatch('getOilBalance')
    }
    // 本月租金收益
    if (Object.keys(this.myIncomeData).length === 0) {
      this.$store.dispatch('initIncomeData', { userId: this.userInfo.userId })
    }
  },

  methods: {
    // 积分
    integral() {
      // console.log(111)
      this.$router.push({ path: '/integral' })
    },
    async addIntergal() {
      let res = await this.$api.addIntergal({ userId: this.userInfo.userId })
      Toast({
        message: res.message,
        position: 'bottom'
      })
    }
  }
}
</script>

<style scoped lang="less">
.user {
  .fs;
  background-color: #f5f5f5;
  padding: 0 0 50px 0;
  overflow: auto;
  .header{
    .wh(100%, 81px);
    padding-left: 4px;
    padding-top: 11px;
    background-color: #fff;
    box-sizing: border-box;
    .wrap {
      .wh(100%, 100%);
      position: relative;
      .avatar {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon{
          .wh(60px, 60px);
          border-radius: 50%;
          display: block;
          background: url('../../assets/image/user/head.png') 0 0 no-repeat;
          background-size: cover;
        }
      }
      .head-list {
        display: flex;
        flex-direction: column;
        text-align: left;
        .head-li {
          flex: 1;
          height: 1px;
          display: flex;
          align-items: center;
        }
        .head-li:nth-child(1) {
          font-size: 18px;
          color: #333;
        }
        .head-li:nth-child(2) {
          font-size: 14px;
          color: #878787;
        }
        .head-li:nth-child(3) {
          font-size: 12px;
          color: #878787;
          display: flex;
          align-items: center;
          img {
            height: 14px;
            margin-right: 5px;
          }
        }
      }
      .sign {
        .wh-l(97px, 31px);
        display: flex;
        align-items: center;
        border-radius: 16px 0 0 16px;
        background-color: #fae0c7;
        padding-left: 9px;
        position: absolute;
        top: 50%;
        right: 0;
        margin-top: -15.5px;
        font-size: 12px;
        color: #333;
        img {
          height: 16px;
          margin-right: 5px;
        }
      }
    }
  }
  .account {
    .wh(100%, 170px);
    background-color: #fff;
    padding: 23px 0 18px 0;
    margin-bottom: 10px;
    box-sizing: border-box;
    .account-list {
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
      &:after {
        content: "";
        width: 200%;
        height: 200%;
        position: absolute;
        top: 1px;
        right: 0;
        border-right: 1px solid #bfbfbf;
        -webkit-transform: scale(0.5, 0.5);
        transform: scale(0.5, 0.5);
        -webkit-transform-origin: top right;
        pointer-events: none;
      }
    }
    .icon{
      // margin: 6px 0 2px 0;
      flex-grow: 1;
      height: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        height: 22px;
      }
    }
    .text {
      flex-grow: 1;
      height: 0;
      font-size: 12px;
      color: #878787;
      display: flex;
      justify-content: center;
      align-items: center;
      // margin-bottom: 14px;
    }
    .num {
      flex-grow: 1;
      height: 0;
      font-size: 16px;
      color: #333333;
      display: flex;
      justify-content: center;
      align-items: center;
      // margin-bottom: 15px;
    }
    .cash-button {
      flex-grow: 1;
      height: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        .wh-l(65px, 23px);
        border: 1px solid rgba(226, 125, 52, 1);
        border-radius: 12px;
        font-size: 12px;
        color: #e27d34;
        margin: 0 auto;
        &:active {
          color: #e4a678;
          border: 1px solid #e4a678;
        }
      }
    }
  }
  .group {
    height: 48px;
    display: flex;
    align-items: center;
    text-align: left;
    .van-cell__left-icon {
      margin: 0 15px;
    }
    .van-cell__right-icon {
      margin-right: 15px;
    }
  }
}
</style>
