<template>
  <div id="top-search">
    <el-image :src="require('../../assets/logoRight.png')" style="height: 50px;margin: 20px 10px"></el-image>
    <el-autocomplete
      style="width: 90%;"
      class="inline-input"
      v-model="search"
      placeholder="The moon and six pence"
      @select="handleSelect"
    >
      <el-button slot="append" icon="el-icon-search" @click="toSearch">Search</el-button>
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
    handleSelect(item) {
      console.log(item);
    },
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
  width: 100vh;
  height: 100px;
  line-height: 100px;
  display: flex;
  margin: 0 auto;
}
</style>
