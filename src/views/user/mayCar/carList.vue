<template>
  <div class="mayCar">
    <span>我的车辆列表</span>
    <van-cell-group>
      <van-cell value="内容"
                is-link>
        <template slot="title">
          <span class="custom-title">车牌号：粤ACD1234</span>
          <span>车辆状态：
            <span>异常</span>
          </span>
          <span>出租状态：
            <span></span>
          </span>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { Row, Col, Button, Toast, Cell, CellGroup } from 'vant'
export default {
  name: "carList",
  components:{
    [Cell.name]: Cell,
  },
  data(){
    return{
      list:[]
    }
  },

}
</script>

<style scoped lang="less">
</style>
