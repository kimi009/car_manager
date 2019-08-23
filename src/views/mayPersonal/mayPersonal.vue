<template>
  <div class="mayPersonal">
    <header class="maypersonalTitle">
      <span>个人信息</span>
    </header>

    <body class="maypersonalContent">
      <div>
        <van-row>
          <van-col span="8">
            <div class="span-left">头像：</div>
          </van-col>
          <van-col span="16"> <span class="span-right"><img src="../../assets/image/user/head.png"
                   alt=""></span> </van-col>
        </van-row>
      </div>
    </body>
  </div>
</template>

<script>
import { Row, Col } from 'vant'
export default {
  name: 'mayPersonal',
  components: {
    [Row.name]: Row,
    [Col.name]: Col
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped  lang="less">
.mayPersonal {
  background-color: white;
  .maypersonalTitle {
    font-size: 14px;
    display: block;
    height: 80px;
    span {
      position: absolute;
      left: 15px;
      top: 60px;
    }
  }
  .maypersonalContent {
    img {
      width: 50px;
      height: 50px;
    }
  }
}
</style>
