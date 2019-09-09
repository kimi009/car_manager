<template>
  <div class="IDCard">
    <ul class="list">
      <li>
        <div class="pic">
          <img @click="$router.push({path: '/sign/certificate', query: {picType: 1}})" :src="imgFile.front" alt="">
        </div>
        <span>头像面</span>
      </li>
      <li>
        <div class="pic">
          <img @click="$router.push({path: '/sign/certificate', query: {picType: 2}})" :src="imgFile.back" alt="">
        </div>
        <span>国徽面</span>
      </li>
    </ul>
    <div class="describe">拍照时请确保身份证边框完整，图像清晰，光线均匀</div>
    <div class="button">
      <van-button type="default" size="large" @click="submitHandle">上传</van-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Button, Toast } from 'vant'
export default {
  components: {
    [Button.name]: Button,
    [Toast.name]: Toast
  },

  data () {
    return {
      imageList: [
        require('../../../assets/image/signContract/front-ID.png'),
        require('../../../assets/image/signContract//back-ID.png')
      ]
    }
  },

  computed: {
    ...mapGetters([
      'fileData', 'userInfo'
    ]),

    imgFile () {
      let frontUrl = this.userInfo.idFront || false
      let backUrl = this.userInfo.idBackend || false
      return {
        front: frontUrl || (this.fileData[0] && this.fileData[0].copyDataURL) || this.imageList[0],
        back: backUrl || (this.fileData[1] && this.fileData[1].copyDataURL) || this.imageList[1]
      }
    }
  },

  methods: {
    ...mapActions([
      'setFileData'
    ]),

    submitHandle () {
      console.log(this.fileData)
      if (!(this.fileData[0] && this.fileData[0].url)) {
        Toast({
          message: '请上传身份证正面',
          position: 'bottom'
        })
      } else if (!(this.fileData[1] && this.fileData[1].url)) {
        Toast({
          message: '请上传身份证反面',
          position: 'bottom'
        })
      } else {
        let params = {
          id_front: this.fileData[0].id,
          id_back: this.fileData[1].id,
          id_front_base64: this.fileData[0].dataURL
        }
        console.log(params)
        // 身份证验证
        this.$api.checkId(params).then(res => {
          console.log(res)
          if (res.data.state) {
            this.$emit('activeHandle', 1)
            // 清空数组
            // this.setFileData()
          } else {
            this.$router.push('/sign/failed')
          }
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.IDCard{
  height: 100%;
  .list{
    padding-top: 21px;
    li{
      .pic {
        .wh(269px, 179px);
        margin: 0 auto;
        display:flex;
        align-items:center;
        justify-content:center;
        overflow: hidden;
        img{
          height: 100%;
          margin: 0 auto;
        }
      }
      span{
        color: #333;
        font-size:15px;
        display: block;
        margin: 11px auto 16px auto;
      }
    }
  }
  .describe{
    color: #999;
    font-size:12px;
    margin: 31px auto 19px auto;
  }
  .button{
    .wh(345px, 44px);
    margin: 0 auto 29px auto;
  }
}
</style>
