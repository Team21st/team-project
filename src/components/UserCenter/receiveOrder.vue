<template>
  <div id="receive-order">
    <h2>Order Received</h2>
    <el-table
      style="margin-top: 10px"
      load="loading"
      :data="orderData">
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
  name: "receiveOrder.vue",
  mounted() {
    this.showOrder()
  },
  data() {
    return {
      tableList: [
        {
          label: 'Commodity',
          prop: '',
          width: ''
        }, {
          label: 'Quantity',
          prop: '',
          width: ''
        }, {
          label: 'Order Date',
          prop: '',
          width: ''
        }, {
          label: 'State',
          prop: '',
          width: ''
        },
      ],
      queryInfo:{
        operatorRole:1,
      },
      orderData: [],
    }
  },
  methods:{
    showOrder(){
      queryOrder(this.queryInfo).then(res => {
        console.log(res)
        // this.bookList = res.body.records
      })
    }
  }
}
</script>

<style scoped lang="less">
#receive-order {

}
</style>
