<template>
  <div class="home">
    <!-- <div class="map-container">
       <a-map></a-map>
    </div> -->
    home
    <transition :name="$transition" mode="in-out">
        <router-view/>
    </transition>
  </div>
</template>

<script>
import { Button } from 'vant'
import AMap from '../../components/AMap/amap'
export default {
  name: 'home',
  data () {
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

  created () {},

  methods: {
    getLocation () {}
  }
}
</script>

<style scoped lang="less">
.home{
  height: calc(~"100% - 50px");
  background-color: #FFF;
  .map-container{
    .wh(100%, 100%);
  }
}

</style>
