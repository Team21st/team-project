<template>
  <el-row id="top-commodity-info">
    <el-col :span="6">
      <el-image
        fit="fill"
        :src="bookInfo.bookPicUrl"
        style="">
      </el-image>
    </el-col>
    <el-col :span="12" class="info">
      <h1 style="margin: 10px 0">{{ bookInfo.bookName }}</h1>
      <div>{{ bookInfo.bookDesc }}</div>
      <div>Price:{{ bookInfo.bookPrice.toFixed(2) }}$</div>
      <div>New Degree:{{bookInfo.newOldDegree}} %</div>
      <div style="margin-top: 60px">
        <div>
          Book Sold:
          {{ bookInfo.bookSale }}</div>
        <div>Stocks: {{ bookInfo.bookStock}}</div>
      </div>
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

  .info{
    height: 100%;
    position: relative;
    div{
      margin-bottom: 5px;
      font-weight: bolder;
    }
  }
}
</style>
