<template>
  <div class="bankCard">
    <div class="card">
      <span>浦发银行</span>
      <em>储蓄卡</em>
      <div class="num">
        <strong class="offset">****</strong>
        <strong class="offset">****</strong>
        <strong class="offset">****</strong>
        <strong>3822</strong>
      </div>
      <img class="icon" src="../../../assets/image/user/icon.png" alt="">
    </div>
    <!-- <div class="button">
      <van-button type="default" size="large" @click="$router.push('/user/modify')">修改银行卡信息</van-button>
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Button, Toast } from 'vant'
export default {
  name: 'bankCard',

  components: {
    [Button.name]: Button,
    [Toast.name]: Toast
  },

  data () {
    return {}
  },

  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },

  async mounted () {
    let res = await this.$api.queryMyBankCard({
      userId: this.userInfo.userId
    })
    // if (res.success) {
    //   console.log(res)
    // }
  }
}
</script>

<style scoped lang="less">
.bankCard{
  .fs;
  position: fixed;
  background-color: #FFF;
  .card{
    .wh(343px, 170px);
    background: url('../../../assets/image/user/bank-card.png') 0 0 no-repeat / cover;
    margin: 17px auto 0 auto;
    color: #FFF;
    padding: 25px 0 0 67px;
    text-align: left;
    position: relative;
    span{
      font-size:17px;
      display: block;
    }
    em{
      font-size:13px;
      display: block;
      margin-top: 9px;
    }
    .num{
      margin-top: 20px;
      strong{
        height: 18px;
        line-height: 18px;
        font-size:18px;
        display: inline-block;
        float: left;
        margin-right: 30px;
      }
      .offset{
        position: relative;
        top: 4px;
      }
    }
    .icon{
      height: 38px;
      position: absolute;
      top: 18px;
      left: 16px;
    }
  }
  .button{
    .wh(345px, 44px);
    margin: 28px auto 0 auto;
  }
}
</style>
