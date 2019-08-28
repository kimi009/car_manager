<template>
  <div class="waitingCash">
    <img class="icon" src="../../../assets/image/user/cash-success.png" alt="">
    <div class="text">您好！您的提现申请已成功</div>
    <div class="describe">在1-3各工作日内到账。感谢您对惠用车的支持！</div>
    <div class="button">
      <van-button type="default" size="large" @click="$router.back()">返回</van-button>
    </div>
  </div>
</template>

<script>
import { Row, Col, Button, Toast } from 'vant'
export default {
  name: 'waitingCash',

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
.waitingCash{
  .fs;
  z-index: 10;
  background-color: #FFF;
  .icon{
    width: 61px;
    margin: 50px auto 15px auto;
  }
  .text{
    font-size:18px;
    color: #333;
    font-weight:bold;
  }
  .describe{
    font-size:15px;
    color: #333;
    margin: 18px auto 30px auto;
  }
  .button{
    .wh(345px, 44px);
    margin: 28px auto 0 auto;
  }
}
</style>
