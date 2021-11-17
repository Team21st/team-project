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
          v-model="queryForm.bookName"
          :fetch-suggestions="querySearch"
          placeholder="The moon and six pence"
          @select="handleSelect"
        >
          <el-button slot="append" icon="el-icon-search" @click="searchCommodities">Search</el-button>
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
      <commonList :commodityList="commodityList"></commonList>
    </el-row>
    <el-pagination
      style="text-align: center;margin: 20px 0"
      background
      :page-size="queryForm.querySize"
      :current-page="queryForm.queryPage"
      layout="prev, pager, next"
      :total="queryForm.total">
    </el-pagination>
  </div>
</template>

<script>
import commonList from "@/components/Search/commonList";
import {queryCommodities} from "@/api/trade";

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
      commodityList: [],
      queryForm: {
        bookName: '',
        queryPage: 1,
        querySize: 10,
        sellerName: '',
        sortType: [],
        //排序方式,1(按时间最新排序)，2（按时间最久排序），3（按价格低到高排序），4（按价格高到低排序），5（按图书销量最多排序），6（按图书销量最少排序）
        total: 0
      }
    }
  },
  mounted() {
    let search = this.$route.query.search
    if (search != null && search.length !== 0) {
      this.queryForm.bookName = search
    }
    this.searchCommodities()
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
    },
    searchCommodities() {
      queryCommodities(this.queryForm).then(res => {
        console.log(res)
        this.commodityList = res.body.records
        this.queryForm.total = res.body.total
      })
    }
  }
}
</script>

<style scoped lang="less">
#search {
  min-height: 100vh;
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
