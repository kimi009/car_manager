<template>
  <div v-if="datas.length"
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
    <lease-comp v-for="item in myLeases"
                :key="item.id"
                :rowItem="item" />
  </div>
</template>
<script>
import { mapState } from 'vuex'
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
    ...mapState({
      myLeases: state => state.rent.myLeases || []
    }),
    leaseStyle: function () {
      return !this.isIndex ? { padding: '15px' } : { 'margin-top': '22px' }
    }
  },
  created() {
    if (this.myLeases) {
      if (this.isIndex) {
        this.datas = this.myLeases.slice(0, 1)
      } else {
        this.datas = [...this.myLeases]
      }
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
