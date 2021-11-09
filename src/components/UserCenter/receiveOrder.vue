<template>
  <div id="receive-order">
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
  name: "receiveOrder.vue",
  data() {
    return {
      tableList: []
    }
  }
}
</script>

<style scoped lang="less">
#receive-order {

}
</style>
