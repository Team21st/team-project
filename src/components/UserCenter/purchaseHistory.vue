<template>
  <div id="purchase-history">
    <h2>Purchase History</h2>
    <el-table
      style="margin-top: 10px"
      load="loading"
      :data="historyData">
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
import {queryOrder} from "@/api/trade";

export default {
  name: "purchaseHistory",
  mounted() {
    this.showPurchase()
  },
  data() {
    return {
      tableList: [
        {
          label: 'Date',
          prop: '',
          width: ''
        }, {
          label: 'Commodity',
          prop: '',
          width: ''
        }, {
          label: 'Price',
          prop: '',
          width: ''
        }, {
          label: 'Quantity',
          prop: '',
          width: ''
        }, {
          label: 'State',
          prop: '',
          width: ''
        }
      ],
      queryInfo:{
        operatorRole:0,
      },
      historyData: [],
    }
  },
  methods:{
    showPurchase(){
      queryOrder(this.queryInfo).then(res => {
        console.log(res)
        // this.bookList = res.body.records
      })
    }
  }
}
</script>

<style scoped lang="less">
#purchase-history {

}
</style>
