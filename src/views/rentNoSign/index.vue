<template>
  <div class='rent'>
    <div class="rent-header">
      <img src="@/assets/image/rent/avatar.png" />
      <div class="rent-header-right">
        <span>方欣科技</span>
        <div>
          <span>张美</span>
          <span>实名认证</span>
        </div>
      </div>
    </div>
    <div class="rent-des">
      <div class="item">
        <span>2500元</span>
        <span>预计下月收益</span>
      </div>
      <div class="divide"></div>
      <div class="item">
        <span>6000元</span>
        <span>累计收益</span>
      </div>
    </div>
    <div class="rent-content">
      <in-come-list isIndex />
      <div class="title"
           style="margin-top:22px;">
        <span>我的租约</span>
        <span>
          查看更多
          <img src="@/assets/image/rent/arrow-right.png" />
        </span>
      </div>
      <div class="content-block my-lease">
        <div class="my-lease-header">
          <img src="@/assets/image/rent/car.png" />
          <span>广州某某某租车公司A</span>
        </div>
        <div class="h-divide"
             style="margin: 15px 0;"></div>
        <div class="row-item"
             v-for="item in leaseContents"
             :key="item.id">
          <span>{{item.title}}</span>
          <span>{{item.value}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InComeList from './inComeList'
export default {
  name: 'index',
  components: { InComeList },
  data() {
    return {
      leaseContents: []
    }
  },
  created() {
    this.initLeaseContents()
  },
  methods: {
    initLeaseContents() {
      this.leaseContents = [{
        id: 1,
        title: '车牌号',
        value: '粤A 12345'
      },
      {
        id: 3,
        title: '车辆品牌',
        value: '丰田 卡罗拉'
      },
      {
        id: 5,
        title: '租赁期限',
        value: '2019-04-01~2020-03-31'
      }, {
        id: 7,
        title: '月租金',
        value: '2500元'
      }, {
        id: 9,
        title: '月租车时长',
        value: '20天/月'
      }, {
        id: 11,
        title: '租约状态',
        value: '租车中'
      }]
    }
  }
}
</script>
<style lang="less" scoped>
.rent {
  .rent-header {
    height: 130px;
    background: url("~@/assets/image/rent/rent-no-sign-banner.png") no-repeat;
    background-size: contain;
    display: flex;
    justify-content: flex-start;
    img {
      margin-top: 22px;
      margin-left: 15px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    .rent-header-right {
      margin: 29px 0 11px 18px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: #ffffff;
      span {
        &:nth-child(1) {
          font-size: 18px;
          font-weight: bold;
        }
      }
      div {
        span {
          &:nth-child(1) {
            font-size: 15px;
          }
          &:nth-child(2) {
            padding: 3px 5px;
            font-size: 12px;
            border: 1px solid #ffffff;
            border-radius: 3px;
          }
        }
      }
    }
  }

  .rent-des {
    position: relative;
    z-index: 111;
    height: 61px;
    background-color: #ffffff;
    margin: 0 15px;
    margin-top: -28px;
    border-radius: 3px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    span {
      &:nth-child(1) {
        font-size: 16px;
        font-weight: bold;
        color: #333333;
      }
      &:nth-child(2) {
        font-size: 14px;
        color: #666666;
      }
    }
    .divide {
      width: 1px;
      height: 35px;
      background-color: #dcdcdc;
      opacity: 0.8;
    }
  }
  .rent-content {
    margin-top: -33px;
    padding: 55px 15px 15px;
    background-color: #f4f4f4;
    height: 100%;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        &:nth-child(1) {
          font-size: 17px;
          font-weight: bold;
          color: #333333;
        }
        &:nth-child(2) {
          font-size: 12px;
          color: #999999;
          img {
            width: 6px;
            height: 11px;
            margin-left: 9px;
          }
        }
      }
    }
    .row-item {
      margin-bottom: 15px;
      display: flex;
      justify-content: space-between;
      span {
        font-size: 15px;
        &:nth-of-type(1) {
          color: #666666;
        }
        &:nth-of-type(2) {
          color: #333333;
        }
      }
    }
    .content-block {
      margin-top: 10px;
      padding: 15px 15px 20px 15px;
      background-color: #ffffff;
      border-radius: 3px;
    }
    .h-divide {
      height: 0.9px;
      background-color: #e5e5e5;
    }

    .my-lease {
      .my-lease-header {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        span {
          margin-left: 19px;
          font-size: 18px;
          color: #333333;
        }
      }
      .row-item {
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
