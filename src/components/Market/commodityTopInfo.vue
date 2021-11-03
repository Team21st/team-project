<template>
  <el-row id="top-commodity-info">
    <el-col :span="4">
      <el-image
        style="">
      </el-image>
    </el-col>
    <el-col :span="12">
      <h1>Santi</h1>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </el-col>
    <el-col :span="6">
      卖家信息
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "topCommodityInfo",
  props: ['bookInfo'],
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="less">
#top-commodity-info {
  margin: 10px 0;
}
</style>
