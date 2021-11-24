<template>
  <div id="purchase-history">
    <h2>Purchase History</h2>
    <el-table
      style="margin-top: 10px"
      load="loading"
      data="">
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
export default {
  name: "purchaseHistory",
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
      historyData: [],
    }
  },
}
</script>

<style scoped lang="less">
#purchase-history {

}
</style>
