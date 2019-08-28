<template>
  <div class="modify">
    <div class="container">
      <ul class="list">
        <li class="van-hairline--bottom">
          <span>开户行</span>
          <input class="input" type="text" placeholder="请输入银行名称（具体到支行）">
        </li>
        <li class="van-hairline--bottom">
          <span>银行卡号</span>
          <input class="input" type="text" placeholder="请输入银行卡号">
        </li>
      </ul>
      <div class="button">
        <van-button type="default" size="large" @click="saveHandle">确定修改</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Button, Toast } from 'vant'
export default {
  name: 'modify',

  components: {
    [Button.name]: Button,
    [Toast.name]: Toast
  },

  data () {
    return {}
  },

  methods: {
    saveHandle () {}
  }
}
</script>

<style scoped lang="less">
.modify{
  .fs;
  position: fixed;
  background-color: #F4F4F4;
  .container{
    height: calc(~"100% - 10px");
    width: 100%;
    background-color: #FFF;
    position: absolute;
    left: 0;
    bottom: 0;
    .list{
      li{
        .wh-l(100%, 46px);
        display: flex;
        padding: 0 15px;
        font-size:15px;
        span{
          display: inline-block;
          width: 75px;
          text-align: left;
        }
        .input{
          flex-grow: 1;
        }
      }
    }
    .button{
      .wh(345px, 44px);
      margin: 28px auto 0 auto;
    }
  }
}
</style>
