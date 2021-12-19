<template>
  <div class="container">
    <el-table :data="commList" stripe
              :default-sort="{prop: 'commName', order: 'increasing'}">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="Book Name:">
              <span>{{ props.row.bookName }}</span>
            </el-form-item>
            <el-form-item label="bookDesc:">
              <span>{{ props.row.bookDesc }}</span>
            </el-form-item>
            <el-form-item label="Price:">
              <span>{{ props.row.truePrice }}</span>
            </el-form-item>
            <el-form-item label="Release time:">
              <span>{{ props.row.createTime }}</span>
            </el-form-item>
            <el-form-item label="Releaser:">
              <span>{{ props.row.createUser }}</span>
            </el-form-item>
            <el-form-item label="Audit time:">
              <span>{{ new Date() }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="Picture" width="120">
        <template slot-scope="scope">
          <el-image :src="scope.row.picList[0]" fit='cover'
                    style="width: 70px;height: 70px">
          </el-image>
        </template>
      </el-table-column>
      <el-table-column prop="bookName" label="Book Name" sortable></el-table-column>
      <!--      <el-table-column prop="commNo" label="商品编码"></el-table-column>-->
      <el-table-column prop="bookDesc" label="Desc"></el-table-column>
      <el-table-column prop="createUser" label="Create User" width="180" sortable></el-table-column>
      <el-table-column prop="auditStatus" label="Audit Status" sortable>
        <div slot-scope="scope">
          {{scope.row.auditStatus}}
        </div>
      </el-table-column>
      <el-table-column label="Operation" width="120" prop="bookNo">
        <template slot-scope="scope">
          <el-button type="success" @click="setBookAudit(1,scope.row.bookNo)" size="small"
                     v-if="scope.row.auditStatus!=='通过'">Pass
          </el-button>
          <el-button type="danger" @click="setBookAudit(2,scope.row.bookNo)" size="small"
                     v-else>Rejected
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="footer">
      <el-pagination
        @current-change="getCommList"
        background
        :current-page="queryForm.queryPage"
        :pager-count="11"
        :total="queryForm.total"
        layout="prev, pager, next"
        :page-count="queryForm.querySize">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {queryAuditRecords,auditBooks} from "@/api/admin";

export default {
  name: "index",
  data() {
    return {
      commList: '',
      queryForm: {
        queryPage: 1,
        querySize: 10,
        type: '',
        total: 0
      }
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
      this.getCommList()
    },
    getCommList() {
      queryAuditRecords(this.queryForm).then(res => {
        this.commList = res.body.records
        this.queryForm.queryPage = res.body.current
        this.queryForm.querySize = res.body.size
        this.queryForm.total = res.body.total
        console.log(this.commList)
      })
    },
    rTime: function (date) {
      var date1 = new Date(date).toJSON();
      return new Date(+new Date(date1) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
    },
    setBookAudit(auditStatus,bookNo){
      auditBooks({
        // 审核状态(1 通过,0 审核中,2 审核不通过)
        auditStatus:auditStatus,
        bookNo:bookNo
      }).then(res=>{
        this.$message.success(res.body)
        this.getCommList()
      })
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
