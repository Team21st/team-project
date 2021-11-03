<template>
  <div id="head">
    <el-image
      style="height: 70px"
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
  width: 500px;
  height: 80px;
  line-height: 80px;
  display: flex;
  margin: 20px 20px;

  h1 {
    color: #723200;
  }
}
</style>
