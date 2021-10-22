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
          <el-select v-model="select"
                     slot="prepend"
                     placeholder="请选择"
                     style="width: 90px">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
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
      select: '',
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

  .input{
    color: orange
  }
}
</style>
