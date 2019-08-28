<template>
  <div class="car">
    <div class="container">
      <ul class="car-list">
        <li @click="itemHandle">
          <span>车牌号:粤ACD123</span>
          <strong>
            <em>车辆状态：正常</em>
            <em>出租状态：出租中</em>
          </strong>
          <img class="arrow-right" src="../../../assets/image/common/arrow-right.png" alt="">
        </li>
        <li>
          <span>车牌号:粤ACD123</span>
          <strong>
            <em>车辆状态：正常</em>
            <em>出租状态：出租中</em>
          </strong>
          <img class="arrow-right" src="../../../assets/image/common/arrow-right.png" alt="">
        </li>
        <li>
          <span>车牌号:粤ACD123</span>
          <strong>
            <em>车辆状态：正常</em>
            <em>出租状态：出租中</em>
          </strong>
          <img class="arrow-right" src="../../../assets/image/common/arrow-right.png" alt="">
        </li>
      </ul>
    </div>

    <transition :name="$transition" mode="in-out">
        <router-view/>
    </transition>
  </div>
</template>

<script>
import { Row, Col, Button, Toast } from 'vant'
export default {
  name: 'car',

  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button,
    [Toast.name]: Toast
  },

  data () {
    return {}
  },

  methods: {
    itemHandle () {
      this.$router.push('/user/car/detail')
    }
  }
}
</script>

<style scoped lang="less">
.car{
  .fs;
  position: fixed;
  background-color: #F4F4F4;
  padding: 11px 15px 0 15px;
  .container{
    .car-list{
      li{
        .wh(100%, 82px);
        background-color: #fff;
        border-radius:3px;
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        padding: 12px 15px;
        position: relative;
        span{
          flex-grow: 1;
          height: 0;
          font-size:15px;
          color:rgba(51,51,51,1);
          text-align: left;
          display: flex;
          align-items: center;
        }
        strong{
          flex-grow: 1;
          height: 0;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          em{
            flex: 1;
            font-size:13px;
            color:rgba(102,102,102,1);
            text-align: left;
          }
        }
      }
      .arrow-right{
        height: 12px;
        position: absolute;
        top: 50%;
        right: 15px;
        margin-top: -6px;
      }
    }
  }
}
</style>
