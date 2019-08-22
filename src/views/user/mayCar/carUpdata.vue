<template>
<div class="carUpdata">
  <div class="carUpdataTitle">
    <span> 修改行驶证</span>
  </div>
  <div class="carUpdataP">
    <span> 修改行驶证副本</span>
    <van-uploader multiple />
    <van-uploader multiple />
    <span>修改保险凭证</span>
  </div>
  <div class="carUpdataB">
    <span>保险凭证</span>
    <van-uploader multiple />
    <van-button>提交审核</van-button>
  </div>
</div>

</template>

<script>
  export default {

    name: "carUpdata",
    data(){
      return{
        fileList:[
          { url: 'https://img.yzcdn.cn/vant/cat.jpeg' },
          // Uploader 根据文件后缀来判断是否为图片文件
          // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
          { url: 'https://cloud-image', isImage: true }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
