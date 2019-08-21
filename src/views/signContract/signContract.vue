<template>
  <div class="signContract">
    <div class="container">
      <img class="title" src="../../assets/image/signContract/title.png" alt="">
      <div class="dialog">
        <img class="title" src="../../assets/image/signContract/dialogBox.png" alt="">
        <div class=""></div>
      </div>
    </div>
    <div class="button">
      <van-button type="default" size="large" @click="goHandle">尊贵开启</van-button>
    </div>
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
    goHandle () {}
  }
}
</script>

<style scoped lang="less">
.signContract{
  height: calc(~"100% - 50px");
  background-color: #FFF;
  position: relative;
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
      img{
        height: 100%;
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
