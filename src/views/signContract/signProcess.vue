<template>
  <div class="signProcess">
    <div class="process">
      <div class="warp">
        <van-steps :active="active" active-color="#FFF">
          <van-step>实名认证</van-step>
          <van-step>上传车辆证照</van-step>
          <van-step>确认信息</van-step>
          <van-step>签订租约</van-step>
        </van-steps>
      </div>
      <div class="description">为了维护您的权益，需要您上传身份证做实名认证。您的信息惠用车将严格保密。请确保注册手机号码是您本人的号码。 </div>
    </div>
    <div class="container">
      <identity-card :active="active"
                     v-show="active === 0"
                     @activeHandle="activeHandle"></identity-card>
      <vehicle-license :active="active"
                       v-show="active === 1"
                       @activeHandle="activeHandle"></vehicle-license>
      <vehicle-info :active="active"
                    v-show="active === 2"
                    @activeHandle="activeHandle"></vehicle-info>
      <lease-info :active="active"
                  v-show="active === 3"
                  @activeHandle="activeHandle"></lease-info>
    </div>
  </div>
</template>

<script>
import { Button, Step, Steps, Row, Col } from 'vant'
import vehicleLicense from './signProcess/vehicleLicense'
import identityCard from './signProcess/identityCard'
import vehicleInfo from './signProcess/vehicleInfo'
import leaseInfo from './signProcess/leaseInfo'
export default {
  name: 'signProcess',

  components: {
    [Button.name]: Button,
    [Step.name]: Step,
    [Steps.name]: Steps,
    [Row.name]: Row,
    [Col.name]: Col,
    vehicleLicense,
    identityCard,
    vehicleInfo,
    leaseInfo
  },

  data () {
    return {
      active: 0 // 步骤
    }
  },

  created () {
    console.log(111)
  },

  methods: {
    activeHandle (i) {
      this.active = i
    }
  }
}
</script>

<style scoped lang="less">
.signProcess{
  .fs;
  background-color: #FFF;
  overflow: auto;
  .process{
    .wh(100%, 147px);
    background:linear-gradient(0deg,rgba(255,116,38,1) 0%,rgba(255,151,87,1) 100%);
    padding-top: 30px;
    .warp{
      width: 90%;
      margin: 0 auto;
      text-align: left;
      color: #FFDAC2;
    }
    /deep/ .van-steps{
      background: transparent;
    }
    /deep/ .van-step__circle-container{
      background-color: transparent;
    }
    /deep/ .van-step__title{
      color: #FFDAC3;
    }
    /deep/ .van-step__circle {
      background-color: #FFDAC3;
    }
    /deep/ .van-step--finish .van-step__line {
      background-color: #FFF;
    }
    .description{
      width: 90%;
      margin: 0 auto;
      font-size: 12px;
      color:rgba(255,255,255,1);
      margin-top: 10px;
      text-align: left;
    }
  }
  .container {
    background-color: #fff;
  }
}
</style>
