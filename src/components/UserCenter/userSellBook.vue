<template>
  <div id="user-selling">
    <el-table
      style="margin-top: 10px"
      load="loading"
      :data="SellingData">
      <el-table-column
        v-for="item in tableList"
        :key="item.label"
        :label="item.label"
        :width="item.width"
        :prop="item.prop">
      </el-table-column>
      <el-table-column
        label="Operation">
        <template slot-scope="scope">
          <el-button v-if="scope.row.status" type="primary">

          </el-button>
          <el-button v-if="scope.row.status" type="danger">

          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {queryMyCommodity} from "@/api/user";
export default {
  name: "userSellBook",
  mounted() {
    this.queryMyCommodity()
  },
  data() {
    return {
      tableList: [
        {
          label: 'Picture',
          prop: '',
          width: ''
        }, {
          label: 'Name',
          prop: '',
          width: ''
        }, {
          label: 'Tag',
          prop: '',
          width: ''
        }, {
          label: 'Selled',
          prop: '',
          width: ''
        }, {
          label: 'Remain',
          prop: '',
          width: ''
        },{
          label: 'State',
          prop: '',
          width: ''
        },
      ],
      queryInfo:{},
      SellingData: [],
    }
  },
  methods:{
    queryMyCommodity(){
      queryMyCommodity(this.queryInfo).then(res =>{
        console.log(res)
      })
    }
  }
}
</script>

<style scoped lang="less">
#user-selling {

}
</style>
