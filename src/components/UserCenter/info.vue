<template>
  <div id="user-info">
    <el-form label-width="80px" :model="userInfo">
      <el-form-item label="名称">
        <el-input v-model="userInfo.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-input v-model="userInfo.region"></el-input>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input v-model="userInfo.type"></el-input>
      </el-form-item>
    </el-form>
    <div>
      <el-button type="primary">Submit</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "info",
  data() {
    return {
      userInfo: {}
    }
  }
}
</script>

<style scoped lang="less">
#user-info {
  width: 400px;
  margin: auto;
  text-align: center;
}
</style>
