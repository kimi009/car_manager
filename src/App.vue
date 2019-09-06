<template>
  <div id="app">
    <transition :name="$transition"
                mode="in-out">
      <!-- <keep-alive :include="['carRentalLink']"></keep-alive> -->
      <keep-alive>
        <router-view :key="key" v-if="$route.meta.keepAlive"/>
      </keep-alive>
    </transition>
    <transition :name="$transition"
                mode="in-out">
      <router-view :key="key"
                   v-if="!$route.meta.keepAlive" />
    </transition>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapMutations, mapGetters } from 'vuex'
import { Toast } from 'vant'
import VConsole from 'vconsole'
import { lStorage } from '@/utils/storage.js'
import { getQueryString } from '@/utils'
export default {
  name: 'App',
  components: {
    [Toast.name]: Toast
  },
  data() {
    return {}
  },
  created() {
    if (process.env.NODE_ENV !== 'development') {
      this.initWxInfo()
    }
  },
  computed: {
    ...mapGetters([
      'wxUserinfo'
    ]),
    key() {
      // 由于路由组件的复用问题, 相同路由切换, 是不会出现动画效果的, 比如从 /article/1 切换到 /article/2
      return this.$route.path.replace(/\//g, '_')
    }
  },
  mounted() {
    // this.$api.logout()
    // this.$api.test().then(res => {
    //   console.log(JSON.parse(res))
    // })
    //
    // vConsole调试
    if (process.env.NODE_ENV !== 'production') {
      try {
        let vc = new VConsole()
        Vue.use({ vc })
      } catch (error) { }
    }
  },
  methods: {
    ...mapMutations(['SET_USER_OPEN_ID']),
    async initWxInfo() {
      const code = getQueryString('code')
      if (code) {
        let res = await this.$api.getWxUserinfo({
          code: code
        })
        if (res.success) {
          lStorage.setItem(lStorage.WX_USER_INFO, res.data)
          console.log('info', res)

          lStorage.setItem(lStorage.WXOPENID, res.data.openid)
          this.SET_USER_OPEN_ID(res.data.openid)
        }
      } else {
        await this.$api.wxAuth(window.location.href)
      }
    }
  }
}
</script>

<style lang="less">
@import './styles/animation.less';
@import './styles/vantUI.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
