<template>
  <div class="entry">
    <router-view />
    <van-tabbar v-model="active"
                active-color="#EE7B3D"
                class="active_tab">
      <van-tabbar-item
        v-for="(item, index) in tabbars"
        :key="index"
        @click="tab(index, item.name)"
      >
        <span :class="currIndex == index ? active:''">{{item.title}}</span>
        <template slot="icon" slot-scope="props">
          <img :src="props.active ? item.active : item.normal">
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  name: 'entry',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data () {
    return {
      currIndex: 0,
      active: 0,
      tabbars: [
        {
          name: 'home',
          title: '租车',
          normal: require('../../assets/image/tabbar/home.png'),
          active: require('../../assets/image/tabbar/home@1x.png')
        },
        {
          name: 'vehicles',
          title: '养车',
          normal: require('../../assets/image/tabbar/vehicles.png'),
          active: require('../../assets/image/tabbar/vehicles@1x.png')
        },
        {
          name: 'user',
          title: '我的',
          normal: require('../../assets/image/tabbar/user.png'),
          active: require('../../assets/image/tabbar/user@1x.png')
        }
      ]
    }
  },
  methods: {
    tab (index, val) {
      this.currIndex = index
      // this.$router.push(val)
    }
  }
}
</script>

<style scoped lang="less">
.entry{
  height: 100%;
  .active_tab{
    height: 50px;
  }
}
</style>
