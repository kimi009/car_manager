<template>
  <div class='in-come-comp'>
    <div class="row-item">
      <span>租金周期</span>
      <span>{{rowItem.period}}</span>
    </div>
    <div class="row-item">
      <span>租金金额</span>
      <span>{{rowItem.amount}}</span>
    </div>
    <div class="row-item">
      <span>发放时间</span>
      <span>{{rowItem.releaseTime}}</span>
    </div>
    <div class="h-divide"></div>
    <div class="content-footer">
      <span class="status" v-show="rowItem.invoiceState === '1'">开票状态：未开票</span>
      <span class="status" v-show="rowItem.invoiceState === '2'">开票状态：已开票</span>
      <span class="status" v-show="rowItem.invoiceState === '3'">开票状态：开票中</span>
      <span class="status" v-show="rowItem.invoiceState === '4'">开票状态：开票失败</span>
      <span @click.stop="$emit('statusRowClick',canMakeInvoice,rowItem)"
            v-if="canShowRow"
            :class="['status', canMakeInvoice ? 'no-invoiced' : 'has-invoiced']">{{canMakeInvoice ? '开票' : '点击查看'}}</span>
    </div>
    <span v-if="rowItem.invoiceState === '2'"
          class="status"
          style="display:block;text-align:left;margin-top:10px;">开票时间：{{rowItem.invoiceDate}}</span>
  </div>
</template>
<script>
export default {
  name: 'InComeComp',
  props: {
    rowItem: {
      type: Object,
      required: true
    }
  },
  computed: {
    canMakeInvoice: function () {
      let flag = false
      if (this.rowItem.invoiceState === '1') {
        // 1:待结算，2结算成功，3：结算失败 4:结算中
        if (this.rowItem.clearState !== '4') {
          flag = true
        }
      }
      return flag
    },
    canShowRow: function () {
      return this.canMakeInvoice || this.rowItem.invoiceUrl.length > 0
    }
  }
}
</script>
<style lang="less" scoped>
@import url("~@/styles/rentCommon");
.in-come-comp {
  margin-top: 10px;
  padding: 15px 15px 20px 15px;
  background-color: #ffffff;
  border-radius: 3px;
  .status {
    font-size: 13px;
    color: #999999;
  }
  .content-footer {
    margin-top: 9px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .no-invoiced {
      display: block;
      width: 60px;
      line-height: 25px;
      text-align: center;
      background-color: #ee7b3d;
      border-radius: 3px;
      color: #ffffff;
    }
    .has-invoiced {
      color: #ee7b3d;
    }
  }
}
</style>
