<template>
  <div id="release-book">
    <el-form>
      <el-form-item></el-form-item>
      <div style="display: flex">
        <div>
          <el-form-item></el-form-item>
          <el-form-item></el-form-item>
        </div>
        <div>
          <el-form-item></el-form-item>
          <el-form-item></el-form-item>
          <el-form-item></el-form-item>
        </div>
      </div>
      <el-form-item></el-form-item>
      <el-form-item></el-form-item>
    </el-form>
    <el-button type="primary">Release</el-button>
  </div>
</template>

<script>
export default {
  name: "userComm",
  data() {
    return {
      releaseForm: {

      }
    }
  }
}
</script>

<style scoped lang="less">
#receive-order {

}
</style>
