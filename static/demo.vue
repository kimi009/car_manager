<template>
  <div class="waitingCash">
    waitingCash
  </div>
</template>

<script>
import { Row, Col, Button, Toast } from 'vant'
export default {
  name: 'waitingCash',

  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button,
    [Toast.name]: Toast
  },

  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
.waitingCash{
  .fs;
  background-color: #FFF;
}
</style>
