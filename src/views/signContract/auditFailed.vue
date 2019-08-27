<template>
  <div class="auditFailed">
    <img class="error" src="../../assets/image/signContract/failed.png" alt="">
    <span class="text">认证不通过</span>
    <em>请确认是否使用本人手机号码及身份证！</em>
    <div class="button">
      <van-button type="default" size="large" @click="backHandle">返回上传身份证</van-button>
    </div>
  </div>
</template>

<script>
import { Button } from 'vant'
export default {
  name: 'auditFailed',

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
.auditFailed{
  .fs;
  background-color: #FFF;
  .error{
    width: 160px;
    margin: 85px auto 31px auto;
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
    font-size:15px;
    color:rgba(51,51,51,1);
    margin: 0 auto;
    display: block;
  }
  .button{
    .wh(345px, 44px);
    margin: 59px auto 0 auto;
  }
}
</style>
