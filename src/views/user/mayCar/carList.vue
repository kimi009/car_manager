<template>
  <div class="mayCar">
    <span>我的车辆列表</span>
    <van-cell-group >
      <van-cell class="group" title="我的车" :icon="icon_list.bankCard" is-link />
    </van-cell-group>
  </div>
</template>

<script>
  import {Cell} from 'vant'
  export default {
    name: "index",
    data(){
      return{
        list:[]
      }
    },
    components:{
      [Cell.name]: Cell,
    }
  }
</script>

<style scoped>

</style>
