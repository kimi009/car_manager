<template>
  <div class="capital-account">
    <div class="head">
      <div class="account-bar">
        <span>帐户余额 (元)</span>
        <em>{{availableBalance}}</em>
      </div>
      <div class="account-input van-hairline--bottom van-hairline--top">
        <span>提现金额</span>
        <input type="number" placeholder="请输入100-30000之间的数额">
      </div>
      <div class="tip">提现金额将转入绑定的银行卡</div>
      <div class="cash">
        <van-button type="default" size="large" @click="cashHandle">立即提现</van-button>
      </div>
    </div>
    <div class="bottom" ref="element">
      <van-tabs v-model="active">
        <van-tab title="提现记录">
          <ul class="tab-wrap" :style="{height: (tabHeight - 44) / 37.5 + 'rem'}">
            <li class="van-hairline--bottom">
              <div class="li-top">
                <span>提现金额：<em>1000元</em></span>
                <strong>2019-04-12 12:01:01</strong>
              </div>
              <div class="li-bottom">提现状态：提现中（预计两个工作日到账）</div>
            </li>
            <li class="van-hairline--bottom">
              <div class="li-top">
                <span>提现金额：<em>1000元</em></span>
                <strong>2019-04-12 12:01:01</strong>
              </div>
              <div class="li-bottom">提现状态：提现中（预计两个工作日到账）</div>
            </li>
            <!-- <van-pull-refresh class="refresh" v-model="isLoading" @refresh="onRefresh">
              <van-list
                class="load"
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
              >
                <li class="van-hairline--bottom" v-for="(item, index) in deviceList" :key="index">
                  <div class="li-top">
                    <span>提现金额：<em>1000元</em></span>
                    <strong>2019-04-12 12:01:01</strong>
                  </div>
                  <div class="li-bottom">提现状态：提现中（预计两个工作日到账）</div>
                </li>
              </van-list>
            </van-pull-refresh> -->
          </ul>
        </van-tab>
        <van-tab title="收入记录">
          <ul class="tab-wrap" :style="{height: (tabHeight - 44) / 37.5 + 'rem'}">
            <li class="van-hairline--bottom">
              <div class="li-top">
                <span>收入金额：<em>1000元</em></span>
                <strong>2019-09-12 12:01:01</strong>
              </div>
              <div class="li-bottom">收益类型：租金发放</div>
            </li>
            <li class="van-hairline--bottom">
              <div class="li-top">
                <span>收入金额：<em>1000元</em></span>
                <strong>2019-09-12 12:01:01</strong>
              </div>
              <div class="li-bottom">收益类型：租金发放</div>
            </li>
          </ul>
        </van-tab>
      </van-tabs>
    </div>

    <transition :name="$transition" mode="in-out">
        <router-view/>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Row, Col, Button, Toast, Tab, Tabs, List, PullRefresh } from 'vant'
export default {
  name: 'account',

  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button,
    [Toast.name]: Toast,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh
  },

  data () {
    return {
      active: 0,
      tabHeight: '',
      deviceList: [], // 用于存放加载的数据
      totalPage: 10,
      pageNumber: 0,
      loading: false, // 控制上拉加载的加载动画
      isLoading: false, // 控制下拉刷新的加载动画
      finished: false
    }
  },

  computed: {
    ...mapGetters([
      'userInfo', 'availableBalance'
    ])
  },

  mounted () {
    this.tabHeight = this.$refs.element.offsetHeight
  },

  methods: {
    cashHandle () {
      this.$router.push('/user/account/cash')
    },

    init () {

    },

    // 下拉刷新
    onRefresh () {},

    // 页面初始化之后会触发一次
    onLoad () {
      // this.loading = false
      this.$api.queryBalanceConsumeByPage({
        userId: this.userInfo.userId,
        page: this.pageNumber + 1,
        limit: this.totalPage
      }).then(res => {
        this.deviceList = res.data
        // this.loading = false
        console.log('deviceList', this.deviceList)
      })
    }
  }
}
</script>

<style scoped lang="less">
.capital-account{
  .fs;
  position: fixed;
  background-color: #F4F4F4;
  .head{
    background-color: #FFF;
    padding:14px 0 31px 0;
    .account-bar{
      .wh(345px, 86px);
      display: flex;
      flex-direction: column;
      background:linear-gradient(-90deg,rgba(74,165,248,1),rgba(51,118,241,1));
      border-radius:4px;
      color: #FFF;
      margin: 0 auto;
      span{
        font-size: 12px;
        margin-top: 19px;
      }
      em{
        font-size: 28px;
        margin-top: 8px;
      }
    }
    .account-input{
      .wh-l(100%, 46px);
      display: flex;
      padding: 0 15px;
      font-size:15px;
      color: #666;
      margin-top: 14px;
      input{
        flex-grow: 1;
        padding-left: 17px;
      }
    }
    .tip{
      font-size: 12px;
      color: #878787;
      margin: 11px 0 21px 0;
    }
    .cash{
      .wh(345px, 44px);
      margin: 0 auto;
    }
  }
  .bottom{
    width: 100%;
    height: calc(~"100% - 292px");
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #FFF;
    .tab-wrap{
      overflow: auto;
      padding-bottom: 20px;
      .refresh{
        height: 100%;
      }
      li{
        height: 73px;
        padding: 10px 15px;
        display: flex;
        flex-direction: column;
        .li-top{
          flex-grow: 1;
          height: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          span{
            font-size:15px;
            color: #333;
            em{
              color: #FF7324;
            }
          }
          strong{
            font-size:12px;
            color: #666;
          }
        }
        .li-bottom{
          flex-grow: 1;
          height: 0;
          color: #666;
          font-size:12px;
          text-align: left;
          display: flex;
          align-items: center;
        }
      }
    }
    /deep/ .van-tabs__line {
      background-color: #FF7324;
    }
  }
}
</style>
