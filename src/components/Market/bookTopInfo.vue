<template>
  <el-row id='book-top-info' class="center" gutter="10">
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
      public rating:
      <h1>8.8</h1>
      Evaluation of 4,323,565 people
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "bookInfo",
  props: ['bookID'],
  data() {
    return {
      bookInfo: {}
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
#book-top-info {
  display: flex;
  margin: 10px 0;
}
</style>
