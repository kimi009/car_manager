<template>
  <div v-if="myIncomeData.incomeList && myIncomeData.incomeList.length"
       class='my-income'
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
import { Toast } from 'vant'
export default {
  name: 'inComeList',
  components: {
    InComeComp,
    [Toast.name]: Toast
  },
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
      userInfo: state => state.user.userInfo,
      myIncomeData: state => state.rent.myIncomeData || {}
    }),
    myIncomeStyle: function () {
      return !this.isIndex ? {
        'min-height': '100vh',
        overflow: 'auto',
        padding: '15px'
      } : {}
    }
  },
  created() {
    this.initInCome()
  },
  watch: {
    myIncomeData: function () {
      this.initInCome(true)
    }
  },
  methods: {
    initInCome(flag) {
      if (this.myIncomeData.incomeList || flag) {
        if (this.isIndex) {
          this.myInComes = this.myIncomeData.incomeList.slice(0, 2) || []
        } else {
          this.myInComes = this.myIncomeData.incomeList
        }
      } else {
        this.$store.dispatch('initIncomeData', { userId: this.userInfo.userId })
      }
    },
    more() {
      this.$router.push({ path: '/rent/list' })
    },
    statusRowClick(isMakeInvoice, item) {
      if (isMakeInvoice) {
        this.$router.push({ path: '/payment', query: { billId: item.id } })
      } else {
        if (!item.invoiceUrl) {
          Toast({
            message: '发票链接为空',
            position: 'bottom'
          })
          return
        }
        console.log('invoiceUrl', item.invoiceUrl)
        if (item.invoiceUrl.indexOf('.pdf') === -1) {
          // Toast({
          //   message: '该链接不是pdf格式',
          //   position: 'bottom'
          // })
          window.location.href = item.invoiceUrl
          return
        }
        // http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf
        this.$router.push({
          path: '/pdfView',
          query: {
            url: encodeURIComponent(item.invoiceUrl)
          }
        })
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import url("~@/styles/rentCommon");
.my-income {
  background-color: #f4f4f4;
}
</style>
