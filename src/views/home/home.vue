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
          <span>{{vehicleInfo.cph}}</span>
        </p>
        <div class="rent">
          <p>本月租金（元）</p>
          <p class="money">
            <span>{{vehicleInfo.income || 0}}</span>
            <a href="javascript:;"
               @click="viewRent">查看租金</a>
          </p>
        </div>
        <p class="break">
          <span>本月违章</span>
          <span>无</span>
        </p>
      </div>
      <div class="right">
        <p class="location">
          <img src="@/assets/image/home/location.png"
               alt="">
          <span class="place">{{cityInfo.city}}</span>
          <span class="status">{{isLimit ? '今日限行' : '今日不限行'}}</span>
        </p>
        <p class="weather">
          {{cityInfo.weather}} {{cityInfo.temperature}} C
        </p>
        <p class="status">不适宜洗车</p>
      </div>
    </div>
    <div class="func">
      <div v-for="item in func"
           :key="item.label"
           @click="itemClickHandler(item)">
        <img :src="item.img"
             alt="">
        <p>{{item.label}}</p>
      </div>
    </div>
    <p class="more">
      <a href="javascript:;"
         @click="$router.push('/more')">查看更多</a>
    </p>
    <div class="ad">
      <img src="@/assets/image/home/ad_1.png"
           alt="">
      <div class="line"></div>
    </div>
    <div class="news">
      <p class="title">金财车友会</p>
      <div>
        <div class="item bg1">
        </div>
        <div class="item bg2">
        </div>
        <div class="item bg3">
        </div>
        <div class="item bg4">
        </div>
        <div class="item bg5">
        </div>
      </div>
    </div>
    <div class="selection">
      <p class="title">每日精选</p>
      <div class="selection-item">
        <div class="left">
          <p class="title">推动新技术研发 通用/福特获美...</p>
          <p class="content">美国能源部针对先进汽车技术研究拨款 5900万美元。其中，通用和福特获得 了最多的拨款。</p>
        </div>
        <div class="right">
          <img src="@/assets/image/home/selection_1.png"
               alt="">
        </div>
      </div>
      <div class="selection-item">
        <div class="left">
          <p class="title">对话朱孔源：新模式下经销商仍...</p>
          <p class="content">朱孔源认为，在这样的竞争中，谁能提 供更加优质的服务、谁能够真正实现自 我变革、谁能满足消费者的实际需求， 谁就将赢得这场挑</p>
        </div>
        <div class="right">
          <img src="@/assets/image/home/selection_2.png"
               alt="">
        </div>
      </div>
      <div class="selection-item">
        <div class="left">
          <p class="title">自动驾驶独立 滴滴出行的未来...</p>
          <p class="content">最近，国内出行巨头滴滴对外宣布其自 动驾驶部门正式独立。未来独立公司将 专注于自动驾驶研发、产品应用及相关 业务拓展。</p>
        </div>
        <div class="right">
          <img src="@/assets/image/home/selection_3.png"
               alt="">
        </div>
      </div>
    </div>
    <a href="tel:400-99-12366"
       class="service"></a>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { Button, Toast } from 'vant'
import { ETC, WEIZHANG, BAOYANG, HUANCHE, TINGCHE } from './thirdLink.js'
import config from '@/api/config'
export default {
  name: 'home',
  data() {
    return {
      func: [
        {
          id: 1,
          label: '加油',
          img: require('@/assets/image/home/oil.png')
        },
        {
          id: 2,
          label: '发票',
          img: require('@/assets/image/home/inv.png')
        },
        {
          id: 3,
          label: 'ETC',
          img: require('@/assets/image/home/etc.png')
        },
        {
          id: 4,
          label: '违章',
          img: require('@/assets/image/home/break.png')
        },
        {
          id: 5,
          label: '保养',
          img: require('@/assets/image/home/fit.png')
        },
        {
          id: 6,
          label: '保险',
          img: require('@/assets/image/home/safe.png')
        },
        {
          id: 7,
          label: '换车',
          img: require('@/assets/image/home/change.png')
        },
        {
          id: 8,
          label: '停车',
          img: require('@/assets/image/home/stop.png')
        }
      ]
    }
  },
  components: {
    [Button.name]: Button
  },
  created() {
    this.initData()
  },
  computed: {
    ...mapState({
      cityInfo: state => state.cityInfo.city || {},
      isLimit: state => state.cityInfo.currentCityIsLimit,
      coordinateInfo: state => state.cityInfo.coordinateInfo || {},
      userInfo: state => state.user.userInfo || {},
      vehicleInfo: state => state.vehicles.vehicleInfo || {},
      limitRowCity: state => state.cityInfo.limitRowCity
    })
  },
  watch: {
    cityInfo: function () {
      this.$store.dispatch('initLimitRowCity', {})
      this.$store.dispatch('initVehicleInfo', { userId: this.userInfo.userId })
    },
    limitRowCity: function (newVal) {
      const city = newVal.find(item => item.cityname === this.cityInfo.city)
      if (city) {
        this.MODIFY_CITY_LIMIT_INFO(true)
        this.$store.dispatch('initLimitCityInfo', { cityId: city.cityid })
      }
    }
  },
  methods: {
    ...mapMutations(['MODIFY_CITY_LIMIT_INFO', 'INIT_COORDINATE_INFO']),
    initData() {
      this.getWxInfo()
      // this.$store.dispatch('initCityData', this.coordinateInfo)
    },
    async getWxInfo() {
      Toast.loading({
        mask: true,
        message: '定位中...'
      })
      try {
        let configRes = await this.$api.getJsConfigInfo(
          {
            url: window.location.href
          }
        )
        if (configRes.head.errorCode === '0') {
          console.log(configRes)
          const { appId, nonceStr, signature, timestamp } = configRes.body
          // eslint-disable-next-line
          wx.config({
            debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId, // 必填，公众号的唯一标识
            timestamp, // 必填，生成签名的时间戳
            nonceStr, // 必填，生成签名的随机串
            signature, // 必填，签名
            jsApiList: ['getLocation'] // 必填，需要使用的JS接口列表
          })
          let self = this
          // eslint-disable-next-line
          wx.ready(function () {
            Toast.clear()
            self.getLocation()
          })
        }
      } catch (err) {
        Toast.clear()
      } finally {
        Toast.clear()
      }
    },
    getLocation() {
      Toast.loading({
        mask: true,
        message: '定位中...'
      })
      try {
        let self = this
        // eslint-disable-next-line
        wx.getLocation({
          type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
          success: function (res) {
            var latitude = res.latitude // 纬度，浮点数，范围为90 ~ -90
            var longitude = res.longitude // 经度，浮点数，范围为180 ~ -180。
            // var speed = res.speed; // 速度，以米/每秒计
            // var accuracy = res.accuracy; // 位置精度
            console.log(`当前位置-${longitude}-${latitude}`)
            self.INIT_COORDINATE_INFO({ lon: longitude, lat: latitude })
            self.$store.dispatch('initCityData')
            Toast.clear()
          }
        })
      } catch (err) {
        Toast.clear()
      } finally {
        Toast.clear()
      }
    },
    itemClickHandler(item) {
      switch (item.id) {
        case 1:
          this.$router.push({ path: '/stationList' })
          break
        case 2:
          this.openPsbInvoiceList()
          break
        case 3:
          window.location.href = ETC
          break
        case 4:
          window.location.href = WEIZHANG
          break
        case 5:
          window.location.href = BAOYANG
          break
        case 7:
          window.location.href = HUANCHE
          break
        case 8:
          window.location.href = TINGCHE
          break
        default:
          break
      }
    },
    viewRent() {
      this.$router.push({ path: '/rent' })
    },
    async openPsbInvoiceList() {
      let res = await this.$api.getPsbAccessToken({ userId: this.userInfo.userId, mobilePhone: this.userInfo.mobile })
      if (res.success) {
        this.sendOpenPageReq(`${config.psbBaseURL}/Open/View/InvoicesPage`, {
          AccessToken: res.data.accessToken,
          Platform: 'Pc'
        })
      }
    },
    sendOpenPageReq(url, params) {
      var temp = document.createElement('form')
      temp.action = url
      temp.method = 'POST'
      temp.enctype = 'multipart/form-data'
      temp.style.display = 'none'
      for (var param in params) {
        var opt = document.createElement('textarea')
        opt.name = param
        opt.value = params[param]
        temp.appendChild(opt)
      }
      document.body.appendChild(temp)
      temp.submit()
    }
  }
}
</script>

<style scoped lang="less">
.home {
  height: calc(~"100% - 55px");
  background-color: #fff;
  padding: 12px 15px 50px 15px;
  overflow: auto;
  .car-info {
    background: linear-gradient(
      -90deg,
      rgba(68, 120, 233, 1),
      rgba(98, 165, 241, 1)
    );
    text-align: left;
    border-radius: 4px;
    padding: 18px 20px;
    font-size: 13px;
    color: #fff;
    display: flex;
    > .left {
      width: calc(50% - 1px);
      border-right: 1px solid #e5eefc;
      > .car-num {
        display: flex;
        align-items: center;
        > img {
          width: 20px;
          height: 20px;
          margin-right: 7px;
        }
        > span {
          color: #e5eefc;
        }
      }
      > .rent {
        margin-top: 12px;
        margin-bottom: 20px;
        > p {
          color: #e5eefc;
          margin-bottom: 7px;
        }
        > .money {
          > span {
            color: #fff;
            font-size: 15px;
          }
          > a {
            .zoom-font(0.77);
            font-size: 10px;
            padding: 4px 13px;
            border: 1px solid #fff;
            border-radius: 3px;
            color: #fff;
            display: inline-block;
            margin-left: 12px;
          }
        }
      }
      > .break {
        > span {
          &:first-child {
            color: #e5eefc;
          }
          &:first-child + span {
            color: #fff;
            margin-left: 20px;
          }
        }
      }
    }
    > .right {
      width: 50%;
      padding-left: 28px;
      font-size: 14px;
      > .location {
        display: flex;
        align-items: center;
        font-size: 14px;
        > img {
          width: 13px;
          height: 16px;
        }
        span {
          color: #e5eefc;
          &.place {
            margin-left: 4px;
          }
          &.status {
            margin-left: 8px;
          }
        }
      }
      > .weather {
        margin-top: 14px;
      }
      > .status {
        margin-top: 14px;
      }
    }
  }
  .func {
    display: flex;
    flex-wrap: wrap;
    font-size: 13px;
    color: #333;
    > div {
      flex: 0 0 25%;
      position: relative;
      margin-top: 24px;
      img {
        transform: scale(0.5);
      }
      p {
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
      }
    }
  }
  .more {
    font-size: 12px;
    color: #999;
    text-align: right;
    margin-top: 16px;
    > a {
      padding-right: 16px;
      background: url("~@/assets/image/home/more.png") right center no-repeat;
      background-size: 6px 11px;
    }
  }
  .ad {
    margin-top: 14px;
    width: 100%;
    position: relative;
    img {
      width: 100%;
    }
    .line {
      position: absolute;
      width: 100vw;
      background-color: #f5f5f5;
      height: 10px;
      left: -15px;
      bottom: -18px;
    }
  }
  .news {
    text-align: left;
    margin-top: 32px;
    > .title {
      font-size: 17px;
      color: #333;
      font-weight: 600;
      margin-bottom: 14px;
    }
    > div {
      display: flex;
      overflow-x: auto;
      flex-wrap: nowrap;
      > .item {
        height: 71px;
        position: relative;
        margin-right: 15px;
        border-radius: 2px;
        flex: 0 0 105px;
        &.bg1 {
          background: url("~@/assets/image/home/bg1.png") center center
            no-repeat;
          background-size: 105px 71px;
        }
        &.bg2 {
          background: url("~@/assets/image/home/bg2.png") center center
            no-repeat;
          background-size: 105px 71px;
        }
        &.bg3 {
          background: url("~@/assets/image/home/bg3.png") center center
            no-repeat;
          background-size: 105px 71px;
        }
        &.bg4 {
          background: url("~@/assets/image/home/bg4.png") center center
            no-repeat;
          background-size: 105px 71px;
        }
        &.bg5 {
          background: url("~@/assets/image/home/bg5.png") center center
            no-repeat;
          background-size: 105px 71px;
        }
      }
    }
  }
  .selection {
    text-align: left;
    margin-top: 32px;
    > .title {
      font-size: 17px;
      color: #333;
      font-weight: 600;
      margin-bottom: 14px;
    }
    > .selection-item {
      display: flex;
      border-bottom: 1px solid #eaeaea;
      padding-bottom: 4px;
      margin-bottom: 13px;
      > .left {
        > .title {
          color: #333;
          font-size: 15px;
        }
        > .content {
          margin-top: 4px;
          color: #666;
          font-size: 13px;
        }
      }
      > .right {
        > img {
          width: 110px;
          height: 92px;
        }
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
  .service {
    position: fixed;
    right: 10px;
    bottom: 55px;
    width: 48px;
    height: 48px;
    background: url("~@/assets/image/home/service.png") center center no-repeat;
    background-size: 48px 48px;
  }
}
</style>
