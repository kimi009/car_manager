<template>
  <div>
    <div class="intergal-rt">
      <span>积分</span>
      <span>{{intergalVal}}</span>
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
      <van-list
          v-model="intergal.loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="getInetrgalList"
          :offset="offset"
      >
      <li v-for="(item,index) in intergalArr" :key="index">
        <div class="title">{{item.tradeSubject}}</div>
        <div class="detail">
          <span>余额：{{item.endBalance}}</span>
          <span>{{formatTime(parseInt(item.tradeDatetime),'Y-M-D')}}</span>
        </div>
        <div
          class="right-nub"
        >{{parseInt(item.amount)>0?'+'+parseInt(item.amount):'-'+parseInt(item.amount)}}</div>
      </li>
      </van-list>
    </ul>
  </div>
</template>
<script>
import { Dialog, List } from 'vant'
import { mapState } from 'vuex'
import Vue from 'vue'
Vue.use(List)
export default {
  name: 'intergal',
  data() {
    return {
      count: 7,
      offset: 30
    }
  },
  created() {
    if (!this.userInfo.userId) return
    this.getIntergalInfo()
  },
  methods: {
    tips() {
      Dialog.alert({
        message: '积分规则正在完善中，敬请期待！'
      }).then(() => {
        // on close
      })
    },
    async getIntergalInfo() {
      this.$store.dispatch('initIntergalInfo', { userId: this.userInfo.userId })
    },
    async getInetrgalList() {
      if (!this.userInfo.userId) return
      // let that = this
      let data = {
        userId: this.userInfo.userId,
        page: this.page,
        limit: this.count,
        scoreType: ''
      }
      this.$store.dispatch('initIntergalLiist', data)
    },
    formatNumber(n) {
      n = n.toString()
      return n[1] ? n : '0' + n
    },
    formatTime(number, format) {
      let time = new Date(number)
      let newArr = []
      let formatArr = ['Y', 'M', 'D', 'h', 'm', 's']
      newArr.push(time.getFullYear())
      newArr.push(this.formatNumber(time.getMonth() + 1))
      newArr.push(this.formatNumber(time.getDate()))

      newArr.push(this.formatNumber(time.getHours()))
      newArr.push(this.formatNumber(time.getMinutes()))
      newArr.push(this.formatNumber(time.getSeconds()))

      for (let i in newArr) {
        format = format.replace(formatArr[i], newArr[i])
      }
      return format
    }
  },
  watch: {
    userInfo() {
      this.getIntergalInfo()
      this.getInetrgalList()
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo || {},
      intergalVal: state => state.intergal.intergalVal || 0,
      intergalArr: state => state.intergal.intergalArr || [],
      page: state => state.intergal.page || 1,
      intergal: state => state.intergal || false,
      finished: state => state.intergal.finished || false
    })
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
.intergal-info {
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
