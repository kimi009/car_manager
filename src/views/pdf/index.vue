<template>
  <div class="pdf">
    <iframe
    :src="`/static/pdfJs/web/viewer.html?file=${pdfVisitUrl}`"
    frameborder="0"
    class="pdf-window">
    </iframe>
  </div>
</template>

<script>
import { getQueryString } from '@/utils/index.js'
export default {
  data () {
    return {
      pdfVisitUrl: getQueryString('url')
    }
  }
}
</script>

<style scoped lang="less">
.pdf{
  .fs;
  background-color: #FFF;
  .pdf-window{
    .wh(100%, 100%);
  }
}
</style>
