<template>
<div>

  <div class="personal">
    <div class="container">
      <van-row type="flex" class="avatar">
        <van-col span="12">头像：</van-col>
        <van-col span="12">
          <!-- <img src="../../../assets/image/user/head.png" alt=""> -->
          <div class="avater-icon" :style="{backgroundImage: `url(${headPath})`}"></div>
        </van-col>
      </van-row>
      <div class="van-hairline--bottom"></div>
      <van-row type="flex" class="item">
        <van-col span="12">姓名：</van-col>
        <van-col span="12">{{userInfo.name}}</van-col>
      </van-row>
      <div class="van-hairline--bottom"></div>
      <van-row type="flex" class="item">
        <van-col span="12">手机号码：</van-col>
        <van-col span="12">{{userInfo.mobile}}</van-col>
      </van-row>
      <div class="van-hairline--bottom"></div>
      <van-row type="flex" class="item">
        <van-col span="12">证件类型：</van-col>
        <van-col span="12">{{userInfo.idType === '1' ? '身份证' : '其他'}}</van-col>
      </van-row>
      <div class="van-hairline--bottom"></div>
      <van-row type="flex" class="item">
        <van-col span="12">证件号码：</van-col>
        <van-col span="12">{{userInfo.idNumber}}</van-col>
      </van-row>
      <div class="van-hairline--bottom"></div>
      <van-row type="flex" class="idCard">
        <van-col span="10">身份证扫描件:</van-col>
        <van-col span="14">
          <van-image
            class="front"
            fit="scale-down"
            v-if="userInfo.idFront"
            :src="userInfo.idFront"
          />
          <van-image
            class="back"
            fit="scale-down"
            v-if="userInfo.idBackend"
            :src="userInfo.idBackend"
          />
        </van-col>
      </van-row>
      <div class="van-hairline--bottom"></div>
      <van-row type="flex" class="item">
        <van-col span="12" >开票信息维护</van-col>
        <van-col span="12" >
          <div style="text-align:right">
            <span>详细信息</span>
            <img class="arrow-right" src="../../../assets/image/common/arrow-right.png" alt="">
          </div>
        </van-col>
      </van-row>
    </div>

    <div class="button">
      <van-button type="default" size="large" @click="logout">退出登录</van-button>
    </div>
</div>
    <transition :name="$transition" mode="in-out">
          <router-view/>
      </transition>
  </div>
</template>

<script>
import { Row, Col, Button, Toast, Image, Dialog } from 'vant'
import { mapGetters } from 'vuex'
export default {
  name: 'personal',

  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button,
    [Toast.name]: Toast,
    [Image.name]: Image,
    [Dialog.name]: Dialog
  },

  data () {
    return {}
  },

  computed: {
    ...mapGetters([
      'userInfo'
    ]),

    headPath () {
      return this.userInfo.headPath ? this.userInfo.headPath : require('../../../assets/image/user/head.png')
    }
  },

  methods: {
    logout () {
      Dialog.confirm({
        title: '提示',
        message: '是否确认退出登录？'
      }).then(() => {
        this.$store.dispatch('logout').then(() => {
          this.$router.push('/login')
        })
      }).catch(() => {})
    }
  }
}
</script>

<style scoped lang="less">
.personal{
  .fs;
  position: fixed;
  background-color: #F4F4F4;
  padding: 11px 15px 0 15px;
  .container{
    .wh(100%, auto);
    font-size:15px;
    color: #666;
    background-color: #fff;
    border-radius:3px;
    .avatar{
      height: 68px;
      line-height: 68px;
      padding: 0 15px;
      position: relative;
      div:nth-child(1){
        text-align: left;
      }
      div:nth-child(2){
        position: relative;
        .avater-icon{
          height: 46px;
          width: 46px;
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          background: url('../../../assets/image/user/head.png') 0 0 no-repeat;
          background-size: cover;
        }
      }
    }
    .item{
      height: 46px;
      line-height: 46px;
      padding: 0 15px;
      div:nth-child(1){
        text-align: left;
      }
      div:nth-child(2){
        text-align: right;
      }
      .arrow-right{
        margin-left: 5px;
        height: 10px;
      }
    }
    .idCard{
      height: 86px;
      line-height: 86px;
      padding: 0 15px;
      div:nth-child(1){
        text-align: left;
      }
      div:nth-child(2){
        text-align: right;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .front{
          height: 56px;
          width: 84px;
        }
        .back{
          height: 56px;
          width: 84px;
          margin-left: 7px;
        }
      }
    }
  }
  .button{
    .wh(345px, 44px);
    margin: 28px auto 0 auto;
  }
}
</style>
