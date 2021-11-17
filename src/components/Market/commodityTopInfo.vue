<template>
  <el-row id="top-commodity-info">
    <el-col :span="4">
      <el-image
        fit="fill"
        :src="bookInfo.bookPicUrl"
        style="">
      </el-image>
    </el-col>
    <el-col :span="12">
      <h1>{{ bookInfo.bookName }}</h1>
      <div>{{ bookInfo.bookDesc }}</div>
      <div>{{ bookInfo.bookPrice }}</div>
      <div>{{bookInfo.newOldDegree}} %</div>
      <div>{{ bookInfo.bookSale }}</div>
      <div>{{ bookInfo.bookStock - bookInfo.bookSale }}</div>
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
