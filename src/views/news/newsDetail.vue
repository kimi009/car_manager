<template>
  <div class="news-detail">
    <img :src="showDetail.img"
         alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsDetail: [
        {
          id: 1,
          img: require('@/assets/image/news/car_1.png')
        },
        {
          id: 2,
          img: require('@/assets/image/news/car_2.png')
        },
        {
          id: 3,
          img: require('@/assets/image/news/car_3.png')
        },
        {
          id: 4,
          img: require('@/assets/image/news/car_4.png')
        },
        {
          id: 5,
          img: require('@/assets/image/news/car_5.png')
        },
        {
          id: 6,
          img: require('@/assets/image/news/news_1.png')
        },
        {
          id: 7,
          img: require('@/assets/image/news/news_2.png')
        },
        {
          id: 8,
          img: require('@/assets/image/news/news_3.png')
        }
      ],
      showDetail: {}
    }
  },
  created() {
    this.showDetail = this.newsDetail.find(item => item.id.toString() === this.$route.query.id.toString())
  }
}
</script>

<style lang="less" scoped>
.news-detail {
  height: 100vh;
  overflow: auto;
  img {
    width: 100%;
  }
}
</style>
