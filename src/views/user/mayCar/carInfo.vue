<template>
  <div>
    <div class="titel">车辆详情</div>
    <div class="xian"></div>
    <div class="carInfo">
      <van-row>
        <van-col span="12">车主姓名：</van-col>
        <van-col span="12">
          <span>张三疯</span>
        </van-col>
        <van-col span="12">车牌号：</van-col>
        <van-col span="12">
          <span>粤A12345</span>
        </van-col>
        <van-col span="12">车架号：</van-col>
        <van-col span="12">
          <span>123123123</span>
        </van-col>
        <van-col span="12">发动机号：</van-col>
        <van-col span="12">
          <span>123123123</span>
        </van-col>
        <van-col span="12">车辆品牌：</van-col>
        <van-col span="12">
          <span>丰田</span>
        </van-col>
        <van-col span="12">车辆型号：</van-col>
        <van-col span="12">
          <span>阿尔法</span>
        </van-col>
        <van-col span="12">年检到期时间：</van-col>
        <van-col span="12">
          <span>2021-05-01</span>
        </van-col>
        <van-col span="12">保险到期时间：</van-col>
        <van-col span="12">
          <span>2021-05-01</span>
        </van-col>
      </van-row>
    </div>
    <div class="carImg">
      <van-cell-group>
        <van-cell value="内容"
                  is-link>
          <template slot="title">
            <span class="custom-title">保险凭证</span> <img src=""
                 alt="" />
            <span class="carImg-title"></span> <img src=""
                 alt=""><img src=""
                 alt="">
          </template>
        </van-cell>
      </van-cell-group>
    </div>
    <div class="carState">
      <van-row type="flex">
        <van-col span="8">
          <span>审核状态：</span>
        </van-col>
        <van-col span="16">
          <span>待审核</span>
        </van-col>
        <van-col span="8">
          <span>出租状态：</span>
        </van-col>
        <van-col span="16">
          <span>已出租</span>
        </van-col>
        <van-col span="8">
          <span>车辆状态：</span>
        </van-col>
        <van-col span="16">
          <span>正常</span>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carInfo',
  data() {
    return {
      list: []
    }
  },
  components: {

  }

}
</script>

<style scoped>
</style>
