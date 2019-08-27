<template>
  <div class="safe">
    <img src="@/assets/image/safe/banner.png"
         alt="">
    <div class="info">
      <div class="item">
        <span>车牌号：</span>
        <span>{{safeInfo.licensePlate}}</span>
      </div>
      <div class="item">
        <span>保险到期日：</span>
        <span>{{safeInfo.protectEndDate}}</span>
      </div>
      <div class="item">
        <span>保险公司：</span>
        <span>{{safeInfo.protectCompany}}</span>
      </div>
    </div>
    <div class="safe-detail">
      <div class="item">
        <span>交强险</span>
        <p>￥{{safeInfo.traffic}}</p>
        <a href="javascript:;"
           @click="$router.push('/carList')">查看保单</a>
      </div>
      <div class="item">
        <span>商业险</span>
        <p>￥{{safeInfo.business}}</p>
        <a href="javascript:;"
           class="once"
           @click="openSuccessDialog">立即投保</a>
      </div>
    </div>
    <div class="safe-list"
         v-if="safeList.length > 0">
      <div class="item"
           v-for="(item,key) in safeList"
           :key="key">
        <div class="img">
          <img :src="item.logoUrl"
               alt="">
        </div>
        <div class="right">
          <p class="name">{{item.protectCompany}}
            <span>原价：￥{{item.originalPrice}}</span>
          </p>
          <p class="traffic">
            <span>交强险</span>￥{{item.traffic}}</p>
          <p class="bussiness">
            <span>商业险</span>￥{{item.business}}</p>
          <a href="javascript:;"
             @click="openSuccessDialog(item)">立即投保</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Dialog, Toast } from 'vant'
export default {
  components: {
    [Dialog.Component.name]: Dialog.Component,
    [Toast.name]: Toast
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo || {},
      safeInfo: state => state.safe.safeInfo || {},
      safeList: state => state.safe.safeList || []
    })
  },
  created() {
    this.initData()
  },
  watch: {
    userInfo: function () {
      this.initData()
    }
  },
  methods: {
    initData() {
      if (this.userInfo.userId) {
        this.$store.dispatch('initSafeInfo', { userId: this.userInfo.userId })
        this.$store.dispatch('initSafeList', {})
      }
    },
    openSuccessDialog(item) {
      Dialog.alert({
        title: '预定成功！',
        message: '稍后我们客服会及时联系您进行确\n认，感谢！'
      }).then(() => {
        // on confirm
        this.saveSafe(item)
      })
    },
    async saveSafe(item) {
      try {
        let res = await this.$api.saveSafe({
          employeeId: this.userInfo.userId,
          protectCompanyId: item.protectCompanyId,
          traffic: item.traffic,
          business: item.business
        })
        if (res.success) {
          Toast({
            message: '投保成功',
            position: 'bottom'
          })
        }
      } catch (err) {
        Toast({
          message: '商机已存在',
          position: 'bottom'
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.safe {
  background-color: #f5f5f5;
  > img {
    width: 100%;
  }
  > .info {
    font-size: 14px;
    color: #333;
    padding: 19px 16px 15px 16px;
    background-color: #fff;
    > .item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      > span {
      }
    }
  }
  > .safe-detail {
    display: flex;
    padding: 0 16px 16px 16px;
    background-color: #fff;
    > .item {
      flex: 1 0 50%;
      text-align: center;
      > span {
        font-size: 14px;
        color: #333;
      }
      > p {
        color: #ff792e;
        font-size: 16px;
        margin-top: 8px;
      }
      a > {
        display: inline-block;
        padding: 8px 23px;
        color: #f17712;
        font-size: 16px;
        border: 1px solid #f17712;
        border-radius: 3px;
        margin-top: 26px;
        &.once {
          background: #f17712;
          color: #fff;
        }
      }
    }
  }
  > .safe-list {
    padding: 20px 16px;
    margin-top: 10px;
    background-color: #fff;
    > .item {
      display: flex;
      padding-bottom: 17px;
      border-bottom: 1px solid #e2e2e2;
      position: relative;
      margin-bottom: 18px;
      > .img {
        > img {
          width: 82px;
        }
      }
      > .right {
        text-align: left;
        margin-left: 16px;
        > .name {
          font-size: 15px;
          color: #333;
          font-weight: 600;
          > span {
            font-size: 12px;
            color: #999;
            text-decoration: line-through;
            font-weight: 400;
            margin-left: 10px;
          }
        }
        > .traffic {
          font-size: 15px;
          color: #ff792e;
          margin-top: 12px;
          font-weight: 600;
          > span {
            font-size: 14px;
            font-weight: 400;
            color: #333;
            margin-right: 4px;
          }
        }
        > .bussiness {
          font-size: 15px;
          color: #ff792e;
          margin-top: 8px;
          font-weight: 600;
          > span {
            font-size: 14px;
            font-weight: 400;
            color: #333;
            margin-right: 4px;
          }
        }
        > a {
          position: absolute;
          right: 0;
          font-size: 14px;
          color: #f17712;
          padding: 6px 10px;
          border: 1px solid #f17712;
          top: calc(50% - 26px);
          border-radius: 3px;
        }
      }
    }
  }
}
</style>
