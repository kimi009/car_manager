<template>
  <div class="orderBox">
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option3" />
    </van-dropdown-menu>
    <ul class="orderUl">
        <li>
            <div>太平洋保险  加油费用</div>
            <div class="order-detail">
                <p>积分+390</p>
                <p>订单状态：待支付</p>
                <p>订单时间：2018-12-12  09:10  |  油费订单</p>
            </div>
            <div class="buttn-div">
                <div>查看发票</div>
                <div>售后</div>
                <div>评价</div>
            </div>
            <div class="price">¥300</div>
        </li>
        <li>
            <div>太平洋保险  加油费用</div>
            <div class="order-detail">
                <p>积分+390</p>
                <p>订单状态：待支付</p>
                <p>订单时间：2018-12-12  09:10  |  油费订单</p>
            </div>
            <div class="buttn-div">
                <div class="pay">立即支付</div>
            </div>
            <div class="price">¥300</div>
        </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue'
import { DropdownMenu, DropdownItem } from 'vant'
Vue.use(DropdownMenu).use(DropdownItem)
export default {
  data() {
    return {
      value1: 0,
      value2: 'a',
      value3: 'b',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '全部商品', value: 1 },
        { text: '全部商品', value: 2 }
      ],
      option2: [
        { text: '综合排序', value: 'a' },
        { text: '综合排序', value: 'b' },
        { text: '综合排序', value: 'c' }
      ],
      option3: [
        { text: '地图模式', value: 'a' },
        { text: '地图模式', value: 'b' },
        { text: '地图模式', value: 'c' }
      ]
    }
  }
}
</script>
<style scope lang="less">
.orderBox{
    background: rgba(244, 244, 244, 1);
    height: 100%;
    width: 100%;
    position: fixed;
}
.van-cell{
    text-align: left;
}
.van-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #333333;
}
.orderUl li{
    width: 345px;
    background: #fff;
    margin: auto;
    border-radius: 3px;
    margin: 10px auto;
    text-align: left;
    padding: 21px 15px;
    box-sizing: border-box;
    font-size: 15px;
    position: relative;
    div{
      font-size: 15px;
      color: #333333;
      margin-bottom: 8px;
    }
    .buttn-div{
      display: flex;
      justify-content: flex-end;
      margin-top: 19px;
        div{
          font-size: 13px;
          color: #333333;
          background: #fff;
          border: 1px solid #8D8D8D;
          border-radius: 22px;
          width: 75px;
          text-align: center;
          margin-left: 11px;
          height: 28px;
          line-height: 28px;
          &.pay{
             color: #FF792E;
             border-color:#FF792E;
          }
        }
    }
    .order-detail{
        p{
            font-size: 13px;
            color: #707070;
            margin-bottom: 8px;
        }
    }
    .price{
        position: absolute;
        top: 51px;
        right: 15px;
        font-size: 17px;
        color: #FF792E;
    }
}
</style>
