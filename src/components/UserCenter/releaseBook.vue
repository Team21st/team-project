<template>
  <div id="release-book">
    <el-table :data="releaseList" border stripe>
<!--      <el-table-column prop="username" label="姓名"> </el-table-column>-->

    </el-table>
    <el-button type="primary">Release</el-button>
  </div>
</template>

<script>
import {queryMyCommodity} from "@/api/user.js";
export default {
  name: "userComm",
  created() {
    this.getQueryMyCommodity()
  },
  data() {
    return {
      releaseList:[],
      queryInfo: {
        queryPage: 1,
        querySize: 1
      }
    }
  },
  methods:{
    getQueryMyCommodity(){
      queryMyCommodity(this.queryInfo).then(res => {
        console.log(res)
        // this.releaseList = res.body.records
      })
    }
  }
}
</script>

<style scoped lang="less">
#receive-order {

}
</style>
