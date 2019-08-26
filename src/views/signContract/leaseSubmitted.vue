<template>
  <div class="leaseSubmitted">
    <img class="success" src="../../assets/image/signContract/success.png" alt="">
    <span class="text">您的租约已提交</span>
    <em>预计将在3-5个工作日内匹配到租用您车辆的公司，请您耐心等待。感谢您对惠用车平台的支持！ </em>
    <div class="button">
      <van-button type="default" size="large" @click="backHandle">返回</van-button>
    </div>
  </div>
</template>

<script>
import { Button } from 'vant'
export default {
  name: 'leaseSubmitted',

  components: {
    [Button.name]: Button
  },

  data () {
    return {}
  },

  methods: {
    backHandle () {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="less">
.leaseSubmitted{
  .fs;
  background-color: #FFF;
  .success{
    width: 61px;
    margin: 51px auto 15px auto;
    display: block;
  }
  .text{
    font-size: 18px;
    color: #333;
    margin: 0 auto 19px auto;
    display: block;
    font-weight: bold;
  }
  em{
    width: 345px;
    font-size:13px;
    color:#666;
    margin: 0 auto;
    display: block;
    text-align: left;
  }
  .button{
    .wh(345px, 44px);
    margin: 59px auto 0 auto;
  }
}
</style>
