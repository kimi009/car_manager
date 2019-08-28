<template>
  <div class="leaseDetail">
    <div class="column">
      <van-row type="flex" class="item">
        <van-col span="8">租约编号：</van-col>
        <van-col span="16">A12344444</van-col>
      </van-row>
      <van-row type="flex" class="item">
        <van-col span="8">租车公司名称：</van-col>
        <van-col span="16">租车公司A</van-col>
      </van-row>
      <van-row type="flex" class="item">
        <van-col span="8">车主姓名：</van-col>
        <van-col span="16">张晓霞</van-col>
      </van-row>
      <van-row type="flex" class="item">
        <van-col span="8">车牌号：</van-col>
        <van-col span="16">粤A12345</van-col>
      </van-row>
      <van-row type="flex" class="item">
        <van-col span="8">租赁期限：</van-col>
        <van-col span="16">2019-06-01~2020-05-31</van-col>
      </van-row>
      <van-row type="flex" class="item">
        <van-col span="8">月租金：</van-col>
        <van-col span="16">2500元</van-col>
      </van-row>
      <van-row type="flex" class="item">
        <van-col span="8">租赁期限：</van-col>
        <van-col span="16">22天/月</van-col>
      </van-row>
      <van-row type="flex" class="item">
        <van-col span="8">创建时间：</van-col>
        <van-col span="16">2019-05-30 18:00:00</van-col>
      </van-row>
    </div>
    <div class="agreement">
      <img src="../../../assets/image/user/circle.png" alt="">
      <span>租车协议</span>
    </div>
  </div>
</template>

<script>
import { Row, Col, Button, Toast } from 'vant'
export default {
  name: 'leaseDetail',

  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button,
    [Toast.name]: Toast
  },

  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
.leaseDetail{
  .fs;
  position: fixed;
  background-color: #F4F4F4;
  padding: 11px 15px 16px 15px;
  overflow: auto;
  .column{
    height: auto;
    font-size :15px;
    background-color: #fff;
    border-radius:3px;
    margin-bottom: 10px;
    padding: 10px 15px 10px 15px;
    position: relative;
    .item{
      height: 28px;
      line-height: 28px;
      div:nth-child(1) {
        text-align: right;
        color: #666;
      }
      div:nth-child(2) {
        text-align: left;
        color: #333;
        padding-left: 10px;
      }
    }
  }
  .agreement{
    font-size: 15px;
    color: #4478E9;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    img{
      height: 15px;
      margin-right: 8px;
    }
  }
}
</style>
