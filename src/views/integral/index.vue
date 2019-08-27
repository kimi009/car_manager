<template>
  <div>
    <div class="intergal-rt">
      <span>积分</span>
      <span>{{intergaled}}</span>
    </div>
    <div class="intergal-info" @click="tips()">积分说明</div>
    <div class="icon-box">
      <img src="@/assets/image/user/members.png" alt />
      <span>黄金会员</span>
    </div>
    <div class="detail-title">
      <span>积分明细</span>
    </div>
    <ul class="intergal-ul">
      <li v-for="(item,index) in intergalArr" :key="index">
        <div class="title">{{item.title}}</div>
        <div class="detail">
          <span>余额：{{item.balance}}</span>
          <span>{{item.date}}</span>
        </div>
        <div
          class="right-nub"
        >{{parseInt(item.number)>0?'+'+parseInt(item.number):'-'+parseInt(item.number)}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
import { Dialog } from 'vant'
export default {
  name: 'intergal',
  data() {
    return {
      intergal: '1000',
      intergalArr: [
        {
          title: '在线支付',
          balance: '1387878',
          date: '2019-03-08',
          number: 120
        },
        {
          title: '转账',
          balance: '9821',
          date: '2019-03-08',
          number: 89
        }
      ]
    }
  },
  methods: {
    tips() {
      Dialog.alert({
        message: '积分规则正在完善中，敬请期待！'
      }).then(() => {
        // on close
      })
    }
  },
  computed: {
    intergaled() {
      var reg = /\d{1,3}(?=(\d{3})+$)/g
      return (this.intergal + '').replace(reg, '$&,')
    }
  },
  components: {
    [Dialog.Component.name]: Dialog.Component
  }
}
</script>
<style lang="less">
.intergal-rt {
  width: 99px;
  height: 99px;
  background: #ff7324;
  border-radius: 100%;
  vertical-align: middle;
  color: #fff;
  margin: 22px auto 0;
  overflow: hidden;
  span {
    display: block;
    font-size: 23px;
    &:nth-child(1) {
      font-size: 13px;
      margin-top: 26px;
      margin-bottom: 9px;
    }
  }
}
.intergal-info{
    position: absolute;
    top: 13px;
    right: 14px;
    font-size: 15px;
    color: #333333;
}
.icon-box {
  img {
    width: 16px;
    margin-top: 11px;
    display: inline-block;
    vertical-align: text-top;
  }
  span {
    color: #878787;
    font-size: 12px;
  }
}
.detail-title {
  position: relative;
  margin: 10px 0;
  height: 10px;
  &::after {
    content: "";
    position: absolute;
    width: 90%;
    background: #e6e6e6;
    height: 1px;
    top: 49%;
    left: 0%;
    right: 0%;
    margin: auto;
  }
  span {
    color: #878787;
    font-size: 0.4rem;
    position: absolute;
    background: #fff;
    z-index: 4;
    top: -41%;
    left: 0%;
    right: 0%;
    margin: auto;
    width: 75px;
  }
}
.intergal-ul {
  li {
    text-align: left;
    padding-left: 16px;
    position: relative;
    padding-bottom: 13px;
    &::after {
      content: "";
      width: 345px;
      height: 1px;
      background: #e5e5e5;
      position: absolute;
      bottom: 0%;
      left: 0%;
      right: 0%;
      margin: auto;
    }
    &:last-child::after {
      width: 0;
    }
    .title {
      color: #333333;
      font-size: 15px;
      margin-bottom: 5px;
      margin-top: 11px;
    }
    .detail {
      color: #878787;
      font-size: 12px;
      span {
        margin-right: 32px;
      }
    }
    .right-nub {
      position: absolute;
      top: 9px;
      right: 15px;
      font-size: 17px;
      color: #ff792e;
    }
  }
}
</style>
