<template>
  <div class="home">
    <!-- <div class="map-container">
       <a-map></a-map>
    </div> -->
    <!-- <transition :name="$transition" mode="in-out">
        <router-view/>
    </transition> -->
    <div class="car-info">
      <div class="left">
        <p class="car-num">
          <img src="../../assets/image/home/card.png"
               alt="">
          <span></span>
        </p>
        <div class="rent"></div>
        <p class="break">
          <span>本月违章</span>
          <span>无</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from 'vant'
import AMap from '../../components/AMap/amap'
export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js Frame',
      value: 3,
      active: 0,
      show: false,
      psdValue: '12'
    }
  },
  components: {
    [Button.name]: Button,
    AMap
  },
  created() {
  },
  methods: {
    getLocation() { }
  }
}
</script>

<style scoped lang="less">
.home {
  height: calc(~'100% - 50px');
  background-color: #fff;
  padding: 0 15px;
  .car-info {
    background: linear-gradient(
      -90deg,
      rgba(98, 165, 241, 1),
      rgba(68, 120, 233, 1)
    );
  }
}
</style>
