<template>
  <div id="top-search">
    <el-image :src="require('../../assets/logoRight.png')" style="height: 60px;margin: 20px 10px"></el-image>
    <el-autocomplete
      style="width: 90%;"
      class="inline-input"
      v-model="search"
      :fetch-suggestions="querySearch"
      placeholder="The moon and six pence"
      @select="handleSelect"
    >
      <el-button slot="append" icon="el-icon-search">Search</el-button>
    </el-autocomplete>
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
    querySearch(queryString, cb) {
      let restaurants = this.restaurants;
      let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    handleSelect(item) {
      console.log(item);
    }
  }
}
</script>

<style scoped lang="less">
#top-search {
  width: 100vh;
  height: 100px;
  line-height: 100px;
  display: flex;
  margin: 0 auto;
}
</style>
