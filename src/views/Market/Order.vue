<template>
  <div id="order">
    <div class="deliver-list">
      <h2>Delivery list</h2>
      <div>
        <el-table
          max-height="60vh"
          :data="oderList">
          <template slot="empty">
            <el-empty></el-empty>
          </template>
          <el-table-column label="Seller">
            <template slot-scope="scope">
              <el-avatar>{{ scope.row.user }}</el-avatar>
              <s>{{ userName }}</s>
            </template>
          </el-table-column>
          <el-table-column label="Commodity Information">
            <template slot-scope="scope">
              <el-avatar>{{ scope.row.user }}</el-avatar>
              <s>{{ userName }}</s>
            </template>
          </el-table-column>
          <el-table-column></el-table-column>
          <el-table-column></el-table-column>
          <el-table-column></el-table-column>
        </el-table>
        <h4>Total</h4>
      </div>
    </div>
    <div class="personal-info">
      <div style="display: flex;justify-content: space-between">
        <h2></h2>
        <h2></h2>
      </div>
      <div style="display: flex;justify-content: space-between">
        <div>
          <el-form>
            <el-form-item>
            </el-form-item>
            <el-form-item>
            </el-form-item>
            <el-form-item>
            </el-form-item>
          </el-form>
        </div>
        <div style="display: flex;flex-wrap: wrap;width: 500px;justify-content: space-between">
          <div class="payWay" v-for="item in payWayList" :key="item">

          </div>
        </div>
      </div>
      <div style="text-align: center">
        <el-button>
          Buy Now
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {
      oderList: [],
      payWayList: [{}]
    }
  },
  mounted() {
    this.getSum()
  },
  methods: {
    getSum() {

    }
  }
}
</script>

<style scoped lang="less">
#order {

  .payWay {

  }
}
</style>
