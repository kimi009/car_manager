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
      let wxCode = lStorage.getItem(lStorage.WX_CODE)
      if (wxCode) {
        // 获取微信用户信息
        this.getWxInfoHandle(wxCode)

        // 微信openid
        let WxOpenid = lStorage.getItem(lStorage.WXOPENID)
        if (WxOpenid) {
          this.SET_USER_OPEN_ID(WxOpenid)
        } else {
          this.getWxOpenidHandle(wxCode)
        }
      } else {
        const code = getQueryString('code')
        if (code) {
          // 获取微信openid
          this.getWxOpenidHandle(code)

          // 获取微信用户信息
          this.getWxInfoHandle(code)
          lStorage.setItem(lStorage.WX_CODE, code)
        } else {
          await this.$api.wxAuth(window.location.href)
        }
      }
    },

    // 获取微信openid
    async getWxOpenidHandle (code) {
      let openIdInfo = await this.$api.getOpenId({ code })
      if (openIdInfo.head.success) {
        lStorage.setItem(lStorage.WXOPENID, openIdInfo.body.openId)
        this.SET_USER_OPEN_ID(openIdInfo.body.openId)
      } else {
        Toast({
          message: '获取微信的openId失败',
          position: 'bottom'
        })
      }
    },

    // 获取微信用户信息
    async getWxInfoHandle (code) {
      this.$store.dispatch('getWxInfo', {
        code: code
      }).then(res => {
        console.log('info', res)
        console.log('info', this.wxUserinfo)
      })
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
