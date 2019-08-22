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
  name: 'carUpdata'
}
</script>

<style scoped>
</style>
