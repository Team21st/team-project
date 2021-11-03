<template>
  <div id="search">
    <el-row style="height: 500px">
      <el-col :span="7">
        <el-image
          style="line-height: 500px;height: 400px"
          :src="require('../../assets/images/学习.svg')"
          alt="">
        </el-image>
      </el-col>
      <el-col :span="10" style="text-align: center;">
        <h1 style="margin: 150px 0 20px">Find the Excellent Book in Seconds</h1>
        <el-autocomplete
          style="width: 90%;"
          class="inline-input"
          v-model="state1"
          :fetch-suggestions="querySearch"
          placeholder="The moon and six pence"
          @select="handleSelect"
        >
          <el-button slot="append" icon="el-icon-search">Search</el-button>
        </el-autocomplete>
      </el-col>
      <el-col :span="7">
        <el-image
          style="line-height: 500px;height: 350px;margin-top: 50px;margin-right: 20px"
          :src="require('../../assets/images/男人坐姿看书.svg')"
          alt="">
        </el-image>
      </el-col>
    </el-row>
    <el-row style="text-align: center;background-color: #f2efe8;">
      <commonList :searchParams="searchParams"></commonList>
    </el-row>
  </div>
</template>

<script>
import commonList from "@/components/Search/commonList";

export default {
  components: {
    commonList
  },
  name: "Search",
  data() {
    return {
      searchParams: '',
      state1: '',
      restaurants: [],
      commodityList: []
    }
  },
  methods: {
    querySearch(queryString, cb) {
      let restaurants = this.restaurants;
      let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    handleSelect(item) {
      console.log(item);
    }
  }
}
</script>

<style scoped lang="less">
#search {
  background-color: #f2efe8;

  .el-button {
    border: none;
    border-radius: 0 5px 5px 0;
    background-color: #f8cb88;
    color: white;
  }

  .input {
    color: orange
  }
}
</style>
