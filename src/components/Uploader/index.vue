<template>
  <div class="uploader">
    <input ref="inputFile" type="file" name="image" hidden @change="fileChange">
    <input ref="inputCamera" type="file" name="image" hidden accept="image/*" capture="camera" @change="cameraChange">
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'uploader',
  props: {
    picType: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      imgFile: {} // 图片信息
    }
  },
  methods: {
    fileChange (event) {
      this.imgFile.from = 'file'
      this.handleInputChange(event)
    },

    cameraChange (event) {
      this.imgFile.from = 'camera'
      this.handleInputChange(event)
    },

    /**
     * canvas绘制图片并压缩
     * @method compressedDataUrl
     * @param {Object} img image对象
     * @param {Boolean} shouldCompress 是否压缩
     * @param {String} type 压缩类型
     * @param {Boolean} deWatermark 去水印
     */
    compressedDataUrl (img, shouldCompress, type, deWatermark) {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

      // 水印
      if (!deWatermark) {
        ctx.save()
        ctx.font = `bold 6px SimSun`
        ctx.fillStyle = '#aeaeae'
        let textWidth = ctx.measureText('YunFuBao').width * 7
        let scaled = canvas.width / textWidth
        ctx.scale(scaled, scaled)
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.translate(canvas.width / scaled / 2 - 40, canvas.height / scaled / 2 - 40)
        ctx.rotate(-Math.PI / 6)
        ctx.fillText('该资料仅用于办理租车登记、实名开票', 0, 0)
        ctx.translate(120, 120)
        ctx.fillText('该资料仅用于办理租车登记、实名开票', 0, 0)
        // ctx.fillText('该资料仅用于办理租车登记、实名开票', canvas.width / scaled / 2, canvas.height / scaled / 2)
        ctx.restore()
      }

      let dataURL
      if (shouldCompress) {
        dataURL = canvas.toDataURL(type, 0.2)
      } else {
        dataURL = canvas.toDataURL(type, 1)
      }

      return dataURL
    },

    handleInputChange (event) {
      // console.log(event)
      // 获取当前选中的文件
      const file = event.target.files[0]
      const imgMasSize = 1024 * 1024 * 10 // 10MB

      if (!file) return
      // 检查文件类型
      if (['jpeg', 'png', 'gif', 'jpg'].indexOf(file.type.split('/')[1]) < 0) {
        Vue.prototype.$Toast('文件类型仅支持 jpeg/png/gif！')
        return
      }

      // 文件大小限制
      if (file.size > imgMasSize) {
        // 文件大小自定义限制
        Vue.prototype.$Toast('文件大小不能超过10MB！')
        return
      }

      // // 判断是否是ios
      // if (window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
      //   // iOS
      //   this.transformFileToFormData(file)
      //   return
      // }

      // 图片压缩之旅
      this.transformFileToDataUrl(file)
    },
    // 将File append进 FormData
    transformFileToFormData (file) {
      const formData = new FormData()
      // 自定义formData中的内容
      // type
      formData.append('type', file.type)
      // size
      formData.append('size', file.size || 'image/jpeg')
      // name
      formData.append('name', file.name)
      // lastModifiedDate
      formData.append('lastModifiedDate', file.lastModifiedDate)
      // append 文件
      formData.append('file', file)

      // 读取文件
      const reader = new FileReader()
      reader.onload = (e) => {
        // console.dir(e)
        const result = e.target.result

        const img = new window.Image()
        img.src = result
        img.onload = () => {
          let compressedURL = this.compressedDataUrl(img, false, file.type)

          this.imgFile = Object.assign(this.imgFile, {
            dataURL: compressedURL,
            type: file.type,
            size: file.size,
            name: file.name,
            lastModifiedDate: file.lastModifiedDate,
            formData: formData
          })

          // 上传图片
          this.uploadImg(formData)
        }
      }
      reader.readAsDataURL(file)
    },
    // 将file转成dataUrl
    transformFileToDataUrl (file) {
      const imgCompassMaxSize = 200 * 1024 // 超过 200k 就压缩

      // 存储文件相关信息
      this.imgFile.type = file.type || 'image/jpeg' // 部分安卓出现获取不到type的情况
      this.imgFile.size = file.size
      console.log('size', file.size)
      this.imgFile.name = file.name
      this.imgFile.lastModifiedDate = file.lastModifiedDate

      // 封装好的函数
      const reader = new FileReader()

      // file转dataUrl是个异步函数，要将代码写在回调里
      reader.onload = (e) => {
        // console.dir(e)
        const result = e.target.result

        if (result.length < imgCompassMaxSize) {
          this.compress(result, this.processData, false) // 图片不压缩
        } else {
          this.compress(result, this.processData) // 图片压缩
        }
      }

      reader.readAsDataURL(file)
    },
    // 使用canvas绘制图片并压缩
    compress (dataURL, callback, shouldCompress = true) {
      const img = new window.Image()

      img.src = dataURL

      img.onload = () => {
        let compressedURL

        // 身份证图片
        if (this.picType === 1 || this.picType === 2) {
          let copyCompressedURL = this.compressedDataUrl(img, shouldCompress, this.imgFile.type)
          this.imgFile.copyDataURL = copyCompressedURL

          compressedURL = this.compressedDataUrl(img, shouldCompress, this.imgFile.type, true)
          this.imgFile.dataURL = compressedURL
        } else {
          compressedURL = this.compressedDataUrl(img, shouldCompress, this.imgFile.type)
          this.imgFile.dataURL = compressedURL
        }

        callback(compressedURL)
      }
    },
    processData (dataUrl) {
    // 这里使用二进制方式处理dataUrl
      const binaryString = window.atob(dataUrl.split(',')[1])
      const arrayBuffer = new ArrayBuffer(binaryString.length)
      const intArray = new Uint8Array(arrayBuffer)

      for (let i = 0, j = binaryString.length; i < j; i++) {
        intArray[i] = binaryString.charCodeAt(i)
      }

      const data = [intArray]

      let blob

      try {
        blob = new Blob(data, { type: this.imgFile.type })
      } catch (error) {
        window.BlobBuilder = window.BlobBuilder ||
            window.WebKitBlobBuilder ||
            window.MozBlobBuilder ||
            window.MSBlobBuilder
        if (error.name === 'TypeError' && window.BlobBuilder) {
          const builder = new BlobBuilder() // eslint-disable-line
          builder.append(arrayBuffer)
          blob = builder.getBlob(this.imgFile.type)
        } else {
          // Toast.error("版本过低，不支持上传图片", 2000, undefined, false);
          throw new Error('版本过低，不支持上传图片')
        }
      }

      // blob 转file
      const fileOfBlob = new File([blob], this.imgFile.name)
      const formData = new FormData()

      // 压缩后大小
      this.imgFile.compressSize = fileOfBlob.size

      // type
      formData.append('type', this.imgFile.type)
      // size
      formData.append('size', fileOfBlob.size)
      // name
      formData.append('name', this.imgFile.name)
      // lastModifiedDate
      formData.append('lastModifiedDate', this.imgFile.lastModifiedDate)
      // append 文件
      formData.append('file', fileOfBlob)

      this.imgFile.formData = formData
      this.uploadImg(formData)
    },
    uploadImg (formData) {
      // console.dir(formData)
      // console.log(this.imgFile)
      this.imgFile = Object.assign({}, this.imgFile)
      this.$emit('changeHandle', this.imgFile)
    }
  }
}
</script>

<style scoped lang="less">
.uploader{
  display: none;
}
</style>
