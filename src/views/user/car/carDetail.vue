<template>
  <div class="carDetail">
    <div class="detail">
      <van-row type="flex" class="item">
        <van-col span="12">车主姓名</van-col>
        <van-col span="12">雷晓阳 </van-col>
      </van-row>
      <van-row type="flex" class="item">
        <van-col span="12">车主姓名</van-col>
        <van-col span="12">雷晓阳 </van-col>
      </van-row>
      <van-row type="flex" class="item">
        <van-col span="12">车主姓名</van-col>
        <van-col span="12">雷晓阳 </van-col>
      </van-row>
      <van-row type="flex" class="item">
        <van-col span="12">车主姓名</van-col>
        <van-col span="12">雷晓阳 </van-col>
      </van-row>
      <van-row type="flex" class="item">
        <van-col span="12">车主姓名</van-col>
        <van-col span="12">雷晓阳 </van-col>
      </van-row>
      <van-row type="flex" class="item">
        <van-col span="12">车主姓名</van-col>
        <van-col span="12">雷晓阳 </van-col>
      </van-row>
      <van-row type="flex" class="item">
        <van-col span="12">车主姓名</van-col>
        <van-col span="12">雷晓阳 </van-col>
      </van-row>
      <van-row type="flex" class="item">
        <van-col span="12">车主姓名</van-col>
        <van-col span="12">雷晓阳 </van-col>
      </van-row>
    </div>
    <div class="certificate" @click="$router.push('/user/car/upload')">
      <van-row type="flex" class="item">
        <van-col span="8">保险凭证</van-col>
        <van-col span="16">
          <div class="image" :style="{backgroundImage: `url(${icon})`}"></div>
        </van-col>
      </van-row>
      <div class="van-hairline--bottom"></div>
      <van-row type="flex" class="item">
        <van-col span="8">行驶证正副本</van-col>
        <van-col span="16">
          <div class="image marginRight" :style="{backgroundImage: `url(${icon})`}"></div>
          <div class="image" :style="{backgroundImage: `url(${icon})`}"></div>
        </van-col>
      </van-row>
      <img class="arrow-right" src="../../../assets/image/common/arrow-right.png" alt="">
    </div>
    <div class="state">
      <van-row type="flex" class="item">
        <van-col span="12">审核状态</van-col>
        <van-col span="12">待审核</van-col>
      </van-row>
      <van-row type="flex" class="item">
        <van-col span="12">出租状态</van-col>
        <van-col span="12">已出租</van-col>
      </van-row>
      <van-row type="flex" class="item">
        <van-col span="12">行驶证正副本</van-col>
        <van-col span="12">正常</van-col>
      </van-row>
    </div>
    <div class="tip">
      <span>*</span>如车辆信息有误，请联系企业管理员更新车辆信息
    </div>
  </div>
</template>

<script>
import { Row, Col, Button, Toast, Image } from 'vant'
export default {
  name: 'carDetail',

  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button,
    [Toast.name]: Toast,
    [Image.name]: Image
  },

  data () {
    return {
      icon: require('../../../assets/image/user/idcard-back.png')
    }
  }
}
</script>

<style scoped lang="less">
.carDetail{
  .fs;
  padding: 11px 15px 20px 15px;
  box-sizing: border-box;
  background-color: #F4F4F4;
  overflow: auto;
  .detail, .state{
    .wh(100%, auto);
    background-color: #fff;
    border-radius:3px;
    padding: 10px 15px;
    .item{
      font-size :15px;
      height: 28px;
      line-height: 28px;
      div:nth-child(1) {
        text-align: left;
        color: #666;
      }
      div:nth-child(2) {
        text-align: right;
        color: #333;
      }
    }
  }
  .certificate{
    width: 100%;
    height: 172px;
    border-radius:3px;
    padding: 0px 25px 0px 15px;
    background-color: #fff;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    position: relative;
    .item{
      flex-grow: 1;
      height: 0;
      div:nth-child(1) {
        text-align: left;
        color: #666;
        font-size:15px;
        display: flex;
        align-items: center;
      }
      div:nth-child(2) {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .image{
          flex-grow: 0;
          .wh(84px, 57px);
          background: #F4F4F4 center no-repeat / cover;
        }
        .marginRight{
          margin-right: 14px;
        }
      }
    }
    .arrow-right{
      height: 10px;
      position: absolute;
      right: 12px;
      top: 50%;
      margin-top: -5px;
    }
  }
  .state{
    margin-top: 10px;
  }
  .tip{
    font-size:13px;
    color: #999;
    margin-top: 11px;
    span{
      color: #EB2323;
      margin-right: 4px;
      position: relative;
      top: 2px;
    }
  }
}
</style>
