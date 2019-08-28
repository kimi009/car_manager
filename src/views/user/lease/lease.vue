<template>
  <div class="lease">
    <div class="column" @click="$router.push('/user/lease/detail')">
      <van-row type="flex" class="item">
        <van-col span="8">租约编号：</van-col>
        <van-col span="16">A12344444</van-col>
      </van-row>
      <van-row type="flex" class="item">
        <van-col span="8">租车公司名称：</van-col>
        <van-col span="16">租车公司A</van-col>
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
      <div class="state active">进行中</div>
      <img class="arrow-right" src="../../../assets/image/common/arrow-right.png" alt="">
    </div>

    <transition :name="$transition" mode="in-out">
        <router-view/>
    </transition>
  </div>
</template>

<script>
import { Row, Col, Button, Toast } from 'vant'
export default {
  name: 'lease',

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
.lease{
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
    .state{
      font-size:13px;
      color: #666;
      position: absolute;
      top: 14px;
      right: 13px;
    }
    .active{
      color: #FF7426;
    }
    .arrow-right{
      height: 10px;
      position: absolute;
      top: 50%;
      right: 13px;
      margin-top: -5px;
    }
  }
}
</style>
