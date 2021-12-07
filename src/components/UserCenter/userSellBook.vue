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
import {mapGetters} from 'vuex'
import {queryCommodities} from "@/api/user";
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
          prop: 'bookName',
          width: ''
        }, {
          label: 'Tag',
          prop: 'bookTag',
          width: ''
        }, {
          label: 'Price',
          prop: 'truePrice',
          width: ''
        }, {
          label: 'Remain',
          prop: 'bookStock',
          width: ''
        },{
          label: 'NewOldDegree',
          prop: 'newOldDegree',
          width: ''
        },
      ],
      queryInfo:{
        sellerNo:''
      },
      SellingData: [],
    }
  },
  methods:{
    queryMyCommodity(){
      queryCommodities(this.queryInfo).then(res =>{
        console.log(res)
      })
    }
  },computed: {
    ...mapGetters(['userInfo'])
  }
}
</script>

<style scoped lang="less">
#user-selling {

}
</style>
