<template>
  <div class='in-come-comp'>
    <div class="row-item">
      <span>租金周期</span>
      <span>{{rowItem.rentalCycle}}</span>
    </div>
    <div class="row-item">
      <span>租金金额</span>
      <span>{{rowItem.rentAmount}}</span>
    </div>
    <div class="row-item">
      <span>发放时间</span>
      <span>{{rowItem.distributionTime}}</span>
    </div>
    <div class="h-divide"></div>
    <div class="content-footer">
      <span class="status">开票状态：{{rowItem.invoiceStatus === 1 ? '未开票' : '已开票'}}</span>
      <span @click.stop="$emit('statusRowClick',rowItem.invoiceStatus)"
            :class="['status', rowItem.invoiceStatus ===1 ? 'no-invoiced' : 'has-invoiced']">{{rowItem.invoiceStatus === 1 ? '开票' : '点击查看'}}</span>
    </div>
    <span v-if="rowItem.invoiceStatus === 2"
          class="status"
          style="display:block;text-align:left;margin-top:10px;">开票时间：{{rowItem.invoiceTime}}</span>
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
  }
}
</script>
<style lang="less" scoped>
.in-come-comp {
  margin-top: 10px;
  padding: 15px 15px 20px 15px;
  background-color: #ffffff;
  border-radius: 3px;
  .row-item {
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    span {
      font-size: 15px;
      &:nth-of-type(1) {
        color: #666666;
      }
      &:nth-of-type(2) {
        color: #333333;
      }
    }
  }
  .h-divide {
    height: 0.9px;
    background-color: #e5e5e5;
  }
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
