<template>
  <div v-if="leaseDatas.length"
       class='lease-list'
       :style="leaseStyle">
    <div class="list-title">
      <span>我的租约</span>
      <span v-if="isIndex"
            @click="more">
        查看更多
        <img src="@/assets/image/rent/arrow-right.png" />
      </span>
    </div>
    <div v-if="isIndex">
      <lease-comp style="margin-top:10px;"
                  v-for="item in leaseDatas"
                  :key="item.id"
                  :rowItem="item" />
    </div>
    <div v-else>
      <van-list v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad">
        <van-cell style="margin-top:10px;"
                  v-for="item in leaseDatas"
                  :key="item.id">
          <lease-comp :rowItem="item" />
        </van-cell>
      </van-list>
    </div>
  </div>
</template>
<script>
import { List, Cell } from 'vant'
import { mapState } from 'vuex'
import LeaseComp from '@/components/Rent/LeaseComp'
export default {
  name: 'leaseList',
  components: {
    [List.name]: List,
    [Cell.name]: Cell,
    LeaseComp
  },
  props: {
    isIndex: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: false,
      finished: false,
      currentPageIndex: 1,
      pageSize: 10,
      datas: []
    }
  },
  computed: {
    ...mapState({
      myLeases: state => state.rent.myLeases || []
    }),
    leaseStyle: function () {
      return !this.isIndex ? {
        'min-height': '100vh',
        overflow: 'auto',
        padding: '15px'
      }
        : { 'margin-top': '22px' }
    },
    leaseDatas: function () {
      if (this.isIndex) {
        return this.myLeases.slice(0, 1)
      } else {
        return [...this.myLeases]
      }
    }
  },
  watch: {
    myLeases: function (newVal, oldVal) {
      this.loading = false
      if (newVal.length === oldVal.length) {
        this.finished = true
      }
    }
  },
  created() {
    if (this.myLeases.length <= 0) {
      this.onLoad(true)
    }
  },
  methods: {
    onLoad(isFirst) {
      if (!isFirst) {
        this.currentPageIndex += 1
      }
      this.$store.dispatch('initMyLeaseList', { size: this.pageSize, current: this.currentPageIndex })
    },
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
