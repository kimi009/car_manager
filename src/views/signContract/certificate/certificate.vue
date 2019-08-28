<template>
  <div class="certificate">
    <div class="title">{{listData.title}}</div>
    <div class="container">
      <div class="pic">
        <img :src="imgFile" alt="" @click="submitHandle(3)">
      </div>
      <div class="list">
        <li v-for="(item, i) in listData.desc" :key="i">{{item}}</li>
      </div>
    </div>
    <div class="images">
      <van-button type="default" size="large" @click="submitHandle(1)">从相册选一张</van-button>
    </div>
    <div class="camera">
      <van-button type="default" size="large" @click="submitHandle(2)">拍一张照片</van-button>
    </div>
    <uploader ref="uploader"
              :picType="picType"
              @changeHandle="changeHandle"></uploader>
  </div>
</template>

<script>
import { Button, Toast } from 'vant'
import { mapGetters, mapActions } from 'vuex'
import { getQueryString } from '../../../utils/index.js'
import Uploader from '../../../components/Uploader'

export default {
  name: 'certificate',
  data () {
    return {
      picType: parseInt(getQueryString('picType')), // 1 身份证正面、 2 身份证背面、 3 交强险、 4 商业险、 5 行驶证正本、 6 行驶证副本
      info: [{
        title: '上传身份证头像面',
        image: require('../../../assets/image/signContract/front-ID.png'),
        desc: ['1、拍照时请确保身份证边框完整、图像清晰、光线均匀']
      }, {
        title: '上传身份证国徽面',
        image: require('../../../assets/image/signContract/back-ID.png'),
        desc: ['1、拍照时请确保身份证边框完整、图像清晰、光线均匀']
      }, {
        title: '上传交强险照片',
        image: require('../../../assets/image/signContract/commercialInsurance-pic.png'),
        desc: ['1、请上传交强险正本首页', '2、拍照时请确保保险单边框完整、图像清晰、光线均匀']
      }, {
        title: '上传商业险照片',
        image: require('../../../assets/image/signContract/commercialInsurance-pic.png'),
        desc: ['1、请上传商业险正本首页', '2、拍照时请确保保险单边框完整、图像清晰、光线均']
      }, {
        title: '上传行驶证正本',
        image: require('../../../assets/image/signContract/commercialInsurance-pic.png'),
        desc: ['1、拍照时请确保行驶证边框完整、图像清晰、光线均匀']
      }, {
        title: '上传行驶证副本',
        image: require('../../../assets/image/signContract/commercialInsurance-pic.png'),
        desc: ['1、请上传含有最近一期年检盖章的页面', '2、拍照时请确保行驶证框完整、图像清晰、光线均匀']
      }]
    }
  },
  components: {
    [Button.name]: Button,
    [Toast.name]: Toast,
    Uploader
  },
  computed: {
    ...mapGetters([
      'fileData'
    ]),

    listData () {
      return this.info[this.picType - 1] || {}
    },

    imgFile () {
      let dataURL
      if (this.picType === 1 || this.picType === 2) {
        dataURL = this.fileData[this.picType - 1] && this.fileData[this.picType - 1].copyDataURL
      } else {
        dataURL = this.fileData[this.picType - 1] && this.fileData[this.picType - 1].dataURL
      }
      return (this.fileData[this.picType - 1] && (dataURL || this.fileData[this.picType - 1].url)) || this.info[this.picType - 1].image
    }
  },
  methods: {
    ...mapActions([
      'setFileData'
    ]),
    submitHandle (i) {
      if (i === 1) {
        this.$refs.uploader.$refs.inputFile.click()
      } else if (i === 2) {
        this.$refs.uploader.$refs.inputCamera.click()
      } else {
        if (Object.keys(this.fileData[this.picType - 1] || {}).length === 0) {
          this.$refs.uploader.$refs.inputFile.click()
        }
      }
    },

    async changeHandle (data) {
      // console.log(data)
      data.picType = this.picType

      let res = await this.$api.singleUpload(data.formData)
      if (res.success) {
        let res2 = await this.$api.getImageUrl({id: res.data.id})
        // console.log(res2)
        if (res2.success) {
          data.id = res.data.id
          data.url = res2.data.url
          this.setFileData(data)
          this.$router.back()
          console.log(this.fileData)
        } else {
          Toast({
            message: '获取图片失败',
            position: 'bottom'
          })
        }
      } else {
        Toast({
          message: '上传失败',
          position: 'bottom'
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.certificate{
  .fs;
  background-color: #FFF;
  .title{
    .wh-l(100%, 45px);
    font-size:15px;
    color:#333;
    padding-left: 14px;
    text-align: left;
    background:rgba(246,246,246,1);
  }
  .container{
    padding-top: 20px;
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
    .list{
      margin-top: 31px;
      li{
        width: 285px;
        font-size:12px;
        margin: 0 auto;
        color:#999;
        text-align: left;
      }
    }
  }
  .images{
    .wh(345px, 44px);
    margin: 30px auto 0 auto;
  }
  .camera{
    .wh(345px, 44px);
    margin: 15px auto 0 auto;
    /deep/ .van-button--default {
      background:rgba(224,224,224,1);
    }
  }
}
</style>
