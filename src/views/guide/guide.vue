<template>
  <div class="guide">
    <div class="button">
      <van-button type="default" size="large" @click="goHandle">开启惠用车</van-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Button } from 'vant'
export default {
  name: 'guide',
  components: {
    [Button.name]: Button
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'isSign'
    ])
  },
  methods: {
    goHandle () {
      if (this.isSign) {
        this.$router.push('/home')
      } else {
        this.$router.push('/sign')
      }
    }
  }
}
</script>

<style scoped lang="less">
.guide{
  .fs;
  background: url('../../assets/image/guideBg.png') 0 0 no-repeat / cover;
  .button{
    .wh(262px, 46px);
    position: absolute;
    bottom: 60px;
    left: 50%;
    margin-left: -131px;
  }
}
</style>
