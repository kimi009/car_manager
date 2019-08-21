<template>
  <div class='my-income'
       :style="myIncomeStyle">
    <div class="list-title">
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
import { mapState } from 'vuex'
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
    ...mapState({
      myIncomeData: state => state.myIncomeData || {}
    }),
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
    statusRowClick(item) {
      if (item.invoiceState === 1) {
        this.$router.push({ path: '/payment' })
      } else {
        window.location.href = item.invoiceUrl
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import url('~@/styles/rentCommon');
.my-income {
  background-color: #f4f4f4;
}
</style>
