<template>
  <div id="top-search">
      <el-image :src="require('../../assets/logoRight.png')" style="height: 50px;margin: 20px 10px">
      </el-image>
      <div style="margin-top: 25px">
        <el-input
          style="width: 500px"
          v-model="search"
          placeholder="The moon and six pence"
        >
          <el-button slot="append" icon="el-icon-search" @click="toSearch">Search</el-button>
        </el-input>
      </div>
  </div>
</template>

<script>
export default {
  name: "topSearch",
  data() {
    return {
      search: ''
    }
  },
  methods: {
    toSearch() {
      this.$router.push({
        path: '/search',
        query: {
          search: this.search
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
#top-search {
  display: flex;
  width: 100vh;
  margin: 0 auto;
}
</style>
