<template>
  <div id="head">
    <el-image
      style="width: 200px"
      :src="require('../../assets/logoRight.png')" alt=""></el-image>
    <h1>
      {{ head }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "head",
  props: ['head']
}
</script>

<style scoped lang="less">
#head {
  height: 80px;
  line-height: 80px;
  display: flex;
}
</style>
