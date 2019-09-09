<template>
  <div class='payment'>
    <div class="banner">
      <div>纳税是每个国家公民的神圣职责！</div>
    </div>
    <span class="desc">您需要支付个人所得税、增值税及附加税总计</span>
    <div class="amount">
      <span>{{amount}}</span>
      <span>元</span>
    </div>
    <div class="complete"
         @click.stop="payment">
      <span>立即支付</span>
    </div>
    <div class="no-make-invoice"
         @click="back">
      <span>暂不开票</span>
    </div>
    <div class="content-desc">
      <p>为什么我要开发票？</p>
      <p>根据《中华人民共和国个人所得税法》相关规定，个人提供财产租赁需开具发票，并缴纳相关税费。按照规定在开票前您需要缴纳税款和开票。</p>
      <p>开票需要缴多少税款？</p>
      <p>按照相关法律、法规，出租车辆需缴纳个人所得税、增值税及附加税。每月开票需缴税金额大概为月租金的4.72%。</p>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant'
import { lStorage } from '@/utils/storage.js'
const WXOPENID = lStorage.getItem(lStorage.WXOPENID) || false
export default {
  components: {
    [Toast.name]: Toast
  },
  data() {
    return {
      amount: '',
      payUrl: '',
      paymentStatus: false
    }
  },
  created() {
    this.initData()
  },
  methods: {
    async initData() {
      if (!WXOPENID) {
        Toast({
          message: '获取微信的openId失败',
          position: 'bottom'
        })
        return
      }
      const billId = this.$route.query.billId
      let res = await this.$api.payTax({ employeeBillId: billId, openId: WXOPENID })
      if (res.success) {
        this.amount = res.data.insteadAmount
        this.payUrl = res.data.payUrl
      }
    },
    async payment() {
      if (!this.payUrl) {
        Toast({
          message: '支付链接为空',
          position: 'bottom'
        })
        return
      }
      if (this.paymenting) {
        return
      }
      this.paymenting = true
      // window.location.replace(this.payUrl)
      window.location.href = this.payUrl
      // this.$router.push({ path: '/preview', query: { url: this.payUrl } })
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
.payment {
  .fs;
  background-color: #fff;
  .banner {
    margin: 15px;
    width: 100%;
    height: 110px;
    background: url("~@/assets/image/payment/banner.png") no-repeat;
    background-size: contain;
    position: relative;
    div {
      position: absolute;
      top: 32px;
      left: 24px;
      width: 161px;
      font-size: 18px;
      font-weight: bold;
      color: #ffffff;
      text-align: left;
    }
  }
  .desc {
    margin-top: 24px;
    margin-bottom: 18px;
    text-align: center;
    font-size: 16px;
    color: #333333;
  }
  .amount {
    span {
      color: #333333;
      &:first-child {
        font-size: 24px;
        font-weight: bold;
      }
      &:last-child {
        margin-left: -5px;
        font-size: 16px;
      }
    }
  }
  .complete,
  .no-make-invoice {
    margin: 0 15px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    border-radius: 3px;
    font-size: 18px;
    color: #ffffff;
  }
  .complete {
    margin-top: 24px;
    background-color: #ff7324;
  }
  .no-make-invoice {
    margin-top: 15px;
    background-color: #e0e0e0;
  }
  .content-desc {
    margin-top: 49px;
    p {
      color: #333333;
      margin-left: 15px;
      margin-right: 15px;
      text-align: left;
      &:nth-child(odd) {
        font-size: 15px;
        font-weight: bold;
      }
      &:nth-child(even) {
        margin-top: 14px;
        font-size: 13px;
        line-height: 20px;
      }
      &:nth-of-type(3) {
        margin-top: 29px;
      }
    }
  }
}
</style>
