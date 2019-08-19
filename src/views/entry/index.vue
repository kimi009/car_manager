<template>
  <div class="entry">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'entry',
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
.entry{
  height: 100%;
  // background-color: #FFF;
}
</style>
