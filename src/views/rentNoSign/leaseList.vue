<template>
  <div class='lease-list'
       :style="leaseStyle">
    <div class="list-title">
      <span>我的租约</span>
      <span v-if="isIndex"
            @click="more">
        查看更多
        <img src="@/assets/image/rent/arrow-right.png" />
      </span>
    </div>
    <lease-comp v-for="item in datas"
                :key="item.id"
                :rowItem="item" />
  </div>
</template>
<script>
import LeaseComp from '@/components/Rent/LeaseComp'
export default {
  name: 'leaseList',
  components: { LeaseComp },
  props: {
    isIndex: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      datas: []
    }
  },
  computed: {
    leaseStyle: function () {
      return !this.isIndex ? { padding: '15px' } : { 'margin-top': '22px' }
    }
  },
  created() {
    this.datas = [{
      carRentalCompany: '飞机我放假哦文件分类算法介绍了',
      licensePlate: '反倒是',
      vehicleBrand: '发生的',
      startDate: '2019-01-01',
      endDate: '2019-02-03',
      monthlyRent: 'fswefse',
      rentDuration: 'fwefwf',
      rentState: 'fwew'
    }, {
      carRentalCompany: '飞机我放假哦文件分类算法介绍了',
      licensePlate: '反倒是',
      vehicleBrand: '发生的',
      startDate: '2019-01-01',
      endDate: '2019-02-03',
      monthlyRent: 'fswefse',
      rentDuration: 'fwefwf',
      rentState: 'fwew'
    }]
    if (this.isIndex) {
      this.datas = this.datas.slice(0, 1)
    }
  },
  methods: {
    more() {
      this.$router.push({ path: '/lease/list' })
    }
  }
}
</script>
<style lang="less" scoped>
@import url("~@/styles/rentCommon");
.lease-list {
  background-color: #f4f4f4;
  .row-item {
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
