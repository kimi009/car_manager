<template>
  <div class='my-income'
       :style="myIncomeStyle">
    <div class="title">
      <span>我的收益</span>
      <span v-if="isIndex"
            @click.stop="more">
        查看更多
        <img src="@/assets/image/rent/arrow-right.png" />
      </span>
    </div>
    <in-come-comp v-for="item in myInComes"
                  :key="item.id"
                  :rowItem="item"
                  @statusRowClick="statusRowClick" />
  </div>
</template>
<script>
import InComeComp from '@/components/Rent/InComeComp'
import test from '@/utils/test'
export default {
  name: 'inComeList',
  components: { InComeComp },
  props: {
    isIndex: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      myInComes: []
    }
  },
  computed: {
    myIncomeStyle: function () {
      return !this.isIndex ? { padding: '15px' } : {}
    }
  },
  created() {
    this.initInCome()
  },
  methods: {
    initInCome() {
      this.myInComes = test()
      if (this.isIndex) {
        this.myInComes = this.myInComes.slice(0, 2)
      }
    },
    more() {
      this.$router.push({ path: '/rent/list' })
    },
    statusRowClick(status) {
      if (status === 1) {
        this.$router.push({ path: '/payment' })
      } else {

      }
    }
  }
}
</script>
<style lang="less" scoped>
.my-income {
  background-color: #f4f4f4;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      &:nth-child(1) {
        font-size: 17px;
        font-weight: bold;
        color: #333333;
      }
      &:nth-child(2) {
        font-size: 12px;
        color: #999999;
        img {
          width: 6px;
          height: 11px;
          margin-left: 9px;
        }
      }
    }
  }
}
</style>
