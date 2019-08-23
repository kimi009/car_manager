<template>
  <div class="more">
    <div class="car item">
      <p class="title">用车</p>
      <div>
        <div class="item"
             v-for="item in car"
             :key="item.id"
             @click="itemClickHandler(item)">
          <img :src="item.img"
               alt="">
          <p>{{item.label}}</p>
        </div>
      </div>
    </div>
    <div class="finance item">
      <p class="title">金融</p>
      <div>
        <div class="item"
             v-for="item in finance"
             :key="item.id">
          <img :src="item.img"
               alt="">
          <p>{{item.label}}</p>
        </div>
      </div>
    </div>
    <div class="change item">
      <p class="title">换车</p>
      <div>
        <div class="item"
             v-for="item in change"
             :key="item.id">
          <img :src="item.img"
               alt="">
          <p>{{item.label}}</p>
        </div>
      </div>
    </div>
    <div class="news item">
      <p class="title">资讯</p>
      <div>
        <div class="item"
             v-for="item in news"
             :key="item.id">
          <img :src="item.img"
               alt="">
          <p>{{item.label}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      car: [
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
          label: '换车',
          img: require('@/assets/image/home/change.png')
        },
        {
          id: 7,
          label: '停车',
          img: require('@/assets/image/home/stop.png')
        }
      ],
      finance: [
        {
          id: 8,
          label: '保险',
          img: require('@/assets/image/home/oil.png')
        },
        {
          id: 9,
          label: '贷款',
          img: require('@/assets/image/home/loan.png')
        },
        {
          id: 10,
          label: '理财',
          img: require('@/assets/image/home/m_manage.png')
        },
        {
          id: 11,
          label: '信用卡',
          img: require('@/assets/image/home/c_card.png')
        }
      ],
      change: [
        {
          id: 12,
          label: '新车团购',
          img: require('@/assets/image/home/buy.png')
        },
        {
          id: 13,
          label: '二手车交易',
          img: require('@/assets/image/home/old.png')
        }
      ],
      news: [
        {
          id: 14,
          label: '品牌车友会',
          img: require('@/assets/image/home/friend.png')
        },
        {
          id: 15,
          label: '资讯',
          img: require('@/assets/image/home/news.png')
        }
      ]
    }
  },
  methods: {
    itemClickHandler(item) {
      switch (item.id) {
        case 1:
          this.$router.push('/stationList')
          break
        default:
          break
      }
    }
  }
}
</script>
<style lang="less" scoped>
.more {
  background-color: #f5f5f5;
  > .item {
    padding: 20px 16px;
    text-align: left;
    margin-bottom: 10px;
    background: #fff;
    > .title {
      font-size: 17px;
      color: #333;
      font-weight: 600;
    }
    > div {
      display: flex;
      flex-wrap: wrap;
      font-size: 13px;
      color: #333;
      text-align: center;
      > .item {
        flex: 0 0 25%;
        position: relative;
        margin-top: 18px;
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
  }
}
</style>
