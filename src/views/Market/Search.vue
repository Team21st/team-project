<template>
  <div id="search">
    <el-row style="height: 500px;background: blue">
      <el-col :span="7">
        sss
      </el-col>
      <el-col :span="10" style="text-align: center;">
        <el-autocomplete
          style="width: 90%;line-height: 500px"
          class="inline-input"
          v-model="state1"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
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
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-autocomplete>
      </el-col>
      <el-col :span="7">
        sss
      </el-col>
    </el-row>
    <el-row style="text-align: center;background-color: #f2efe8;">
      <commonList></commonList>
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
      select: 'class',
      state1: '',
      restaurants: [],
      commodityList: []
    }
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
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

}
</style>
