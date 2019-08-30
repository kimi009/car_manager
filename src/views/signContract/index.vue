<template>
  <div class="signContract">
    <div class="container">
      <img class="title" src="../../assets/image/signContract/title.png" alt="">
      <div class="dialog">
        <img class="title" src="../../assets/image/signContract/dialogBox.png" alt="">
        <div class="text">
          <span>尊敬的金小财：</span>
          <strong>恭喜您！您是我们平台尊贵的受邀客户，您可将车辆租予惠用车平台，您可以按月获得丰厚租金收益!</strong>
        </div>
      </div>
    </div>
    <div class="button">
      <van-button type="default" size="large" @click="goHandle">尊贵开启</van-button>
    </div>

    <transition :name="$transition" mode="in-out">
        <router-view/>
    </transition>
  </div>
</template>

<script>
import { Button } from 'vant'
export default {
  name: 'signContract',

  components: {
    [Button.name]: Button
  },

  data () {
    return {}
  },

  methods: {
    goHandle () {
      this.$router.push('/sign/process')
    }
  }
}
</script>

<style scoped lang="less">
.signContract{
  .fs-noBom;
  background-color: #FFF;
  .container{
    .wh(100%, 499px);
    background: url('../../assets/image/signContract/bg.png') 0 0 no-repeat / cover;
    padding-top: 62px;
    .title{
      height: 23px;
      margin: 0 auto;
    }
    .dialog{
      .wh(260px, 139px);
      margin: 26px auto 0 auto;
      position: relative;
      img{
        height: 100%;
      }
      .text{
        .fs;
        font-size: 12px;
        padding: 0px 15px;
        span{
          height: 37px;
          line-height: 37px;
          display: block;
          text-align: left;
          color: #FF7426;
          font-weight:bold;
        }
        strong{
          height: calc(100% - 37px);
          display: block;
          padding-top: 20px;
          text-align: left;
          text-indent:25px;
          color: #FF7426;
        }
      }
    }
  }
  .button{
    .wh(262px, 46px);
    position: absolute;
    bottom: 29px;
    left: 50%;
    margin-left: -131px;
  }
}
</style>
