<template>
  <div class="container">
    <el-table :data="commList" stripe
              :default-sort="{prop: 'commodity.commName', order: 'increasing'}">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品 ID">
              <span>{{ props.row.commodity.commNo }}</span>
            </el-form-item>
            <el-form-item label="商品类型">
              <span>{{ props.row.commodity.commTag }}</span>
            </el-form-item>
            <el-form-item label="售价">
              <span>{{ props.row.commodity.commPrice }}</span>
            </el-form-item>
            <el-form-item label="库存">
              <span>{{ props.row.commodity.commStock }}</span>
            </el-form-item>
            <el-form-item label="发布时间">
              <span>{{ props.row.commodity.createTime }}</span>
            </el-form-item>
            <el-form-item label="发布人ID">
              <span>{{ props.row.commodity.createUser }}</span>
            </el-form-item>
            <el-form-item label="审核人">
              <span>{{ props.row.commodity.auditor }}</span>
            </el-form-item>
            <el-form-item label="审核时间">
              <span>{{ props.row.commodity.auditTime }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="图片" width="120">
        <template slot-scope="scope">
          <el-image :src="scope.row.commPicList[0]" fit='cover' :preview-src-list="scope.row.commPicList"
                    style="width: 70px;height: 70px">
          </el-image>
        </template>
      </el-table-column>
      <el-table-column prop="commodity.commName" label="名称" sortable></el-table-column>
      <el-table-column prop="commodity.commNo" label="商品编码"></el-table-column>
      <el-table-column prop="commodity.commDesc" label="简述"></el-table-column>
      <el-table-column prop="commodity.userName" label="创建者" width="180" sortable></el-table-column>
      <el-table-column prop="commodity.auditStatus" label="审核状态" sortable>
        <div slot-scope="scope">
          <div v-if="scope.row.commodity.auditStatus === 0">
            <el-tag type="primary">待审核</el-tag>
          </div>
          <div v-else-if="scope.row.commodity.auditStatus === 1">
            <el-tag type="success">审核通过</el-tag>
          </div>
          <div v-else>
            <el-tag type="danger">被驳回</el-tag>
          </div>
        </div>
      </el-table-column>
      <el-table-column label="商品操作" width="300">
        <template slot-scope="scope">
          <el-button type="success" @click="allowCommo(scope.row.commodity.commNo)" size="small"
                     v-if="scope.row.commodity.auditStatus===0||scope.row.commodity.auditStatus===2">通过
          </el-button>
          <el-button type="danger" @click="refuseCommo(scope.row.commodity.commNo)" size="small"
                     v-if="scope.row.commodity.auditStatus===0||scope.row.commodity.auditStatus===1">驳回
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="footer">
      <el-pagination
        @current-change="getCommList"
        background
        :current-page="commListCurrent"
        :pager-count="11"
        layout="prev, pager, next"
        :page-count="commListPages">
      </el-pagination>
    </div>
  </div>
</template>

<script>

export default {
  name: "index",
  data() {
    return {
      token: '',
      commListCurrent: 1,
      commListPages: '',
      auditStatus: '',
      commList: '',
      user: ''
    }
  },
  mounted() {
    this.token = this.$store.state.token
    this.user = this.$store.state.user
    this.$nextTick(function () {
      this.initData()
    })
  },
  methods: {
    initData() {
      this.getCommList(1)
    },
    getCommList(val) {
      //  商品列表
      Server.commList({
        auditStatus: this.auditStatus,
        current: val,
        size: 10
      }, this.token).then(res => {
        if (res.code === 1) {
          this.commList = res.obj.obj
          this.commListPages = res.obj.pages
        }
      })
    },
    rTime: function (date) {
      var date1 = new Date(date).toJSON();
      return new Date(+new Date(date1) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
    },
    allowCommo(commNo) {
    },
    refuseCommo(commNo) {
    }
  }
}
</script>

<style scoped>
.footer {
  margin-top: 20px;
  text-align: center;
}

.demo-table-expand {
  font-size: 0;
}

.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
