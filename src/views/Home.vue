<template>
  <div class="home">
    <div>
      <div class="top-bar">
        <div>
          <el-image>

          </el-image>
          <a>sss</a>
        </div>
        <el-input
          style="width: 200px;position: absolute;right: 20px"
          suffix-icon="el-icon-date"
          prefix-icon="el-icon-search"
        ></el-input>
      </div>
    </div>
    <el-row>
      <el-col></el-col>
      <el-col></el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {}
  },
  components: {}
}
</script>

<style scoped lang="less">
.top-bar {
  display: flex;
  margin-top: 20px;
  position: relative;
}
</style>
