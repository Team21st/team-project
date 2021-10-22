<template>
  <div id="commonList">
    <div style="text-align: left;padding: 10px"
         v-for="item in 7"
         :key="item">
      <div style="display: flex">
        <el-avatar
          style="margin: 10px"
          :size="60"
          src="https://empty"
          @error="true">
          user
        </el-avatar>
        <h2 style="line-height: 80px">User</h2>
      </div>
      <div style="display: flex">
        <el-image style="width: 200px;height: 200px;margin: 10px">
        </el-image>
        <div style="margin: 20px;position: relative">
          <div>
            <h3>Introduction:</h3>
          </div>
          <div style="position: absolute;bottom: 10px">
            <h3>Assess:newness</h3>
            <h3>Price:$</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "commonList",
  props: {
    searchParams: String
  },
  data() {
    return {
      commList: []
    }
  },
  methods: {
    queryData() {

    }
  }
}
</script>

<style scoped lang="less">
#commonList {
  width: 1000px;
  background-color: white;
  margin: 0 auto;
}
</style>
