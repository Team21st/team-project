<template>
  <div id="receive-order">
    <h2>Order Received</h2>
    <el-table
      style="margin-top: 10px"
      load="loading"
      :data="orderData">
      <el-table-column prop="createTime" label="Order Date" :formatter="date"></el-table-column>
      <el-table-column
        v-for="item in tableList"
        :key="item.label"
        :label="item.label"
        :width="item.width"
        :prop="item.prop">
      </el-table-column>
      <el-table-column label="Operation" width="120px">
        <template slot-scope="scope">
          <!-- 编辑按钮 -->
          <el-button
            type="warning"
            icon="el-icon-setting"
            size="mini"
          ></el-button>
          <!-- 删除按钮 -->
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="mini"
            @click="de(scope.row.orderNo)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {queryOrder,deleteOrderRecord} from "@/api/trade";

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
          prop: 'bookName',
          width: ''
        }, {
          label: 'Quantity',
          prop: 'num',
          width: ''
        }, {
          label: 'State',
          prop: 'orderStatus',
          width: ''
        },
      ],
      queryInfo:{
        operatorRole:1,
      },
      orderData: [],
      deleteBookInfo:{
        orderNo:'',
        operatorRole:1,
      },
    }
  },
  methods:{
    showOrder(){
      queryOrder(this.queryInfo).then(res => {
        console.log(res)
        this.orderData = res.body.records
      })
    },
    date(row){
      return row.createTime.slice(0,10)+' '+row.createTime.slice(11,19)
    },
    de(OrderNo){
      this.deleteBookInfo.orderNo=OrderNo
      deleteOrderRecord(this.deleteBookInfo).then(res =>{
        console.log(res)
      })
    }
  }
}
</script>

<style scoped lang="less">
#receive-order {

}
</style>
