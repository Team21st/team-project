<!--suppress ALL -->
<template>
  <div class="container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>UserInfo</span>
      </div>
      <div>
        <el-form :inline="true" label-width="120px">
          <el-row>
            <el-col :span="8">
              <el-form-item label="UserName :">
                <span>{{ this.user.userName }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="UserRealName :">
                <span>{{ this.user.userRealName }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="College :">
                <span>{{ this.user.userRealName }}</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="UUID :">
                <span>{{ this.user.userNo }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Identity :">
                <span>System Administrator</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Email :">
                <span>{{ this.user.userEmail }}</span>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-card>
    <div style="margin-top: 20px">
      <el-row :gutter="15">
        <el-col :span="6">
          <el-card class="box-card" @click="table">
            <div slot="header" class="clearfix">
              <span @click="table">Total users</span>
              <el-tooltip style="float:right" content="Total users" placement="top-start">
                <i class="el-icon-user" style="color: #6190e8"></i>
              </el-tooltip>
            </div>
            <div style="font-size: 30px;color: #515a6e">593人</div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span @click="organizeTable">Total orders</span>
              <el-tooltip style="float:right" content="Total orders" placement="top-start">
                <i class="el-icon-document" style="color: #6190e8"></i>
              </el-tooltip>
            </div>
            <div style="font-size: 30px;color: #515a6e">108</div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span @click="active">Total goods</span>
              <el-tooltip style="float:right" content="Total goods" placement="top-start">
                <i class="el-icon-view" style="color: #6190e8"></i>
              </el-tooltip>
            </div>
            <div>
              <div style="font-size: 30px;color: #515a6e">28</div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span @click="funding">Total sales</span>
              <el-tooltip style="float:right" content="Total sales" placement="top-start">
                <i class="el-icon-s-promotion" style="color: #6190e8"></i>
              </el-tooltip>
            </div>
            <div style="color: #6190e8;font-size: 30px">￥8821.92</div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div style="margin-top: 20px">
      <el-row :gutter="15">
        <el-col :span="12">
          <el-card>
            Daily login statistics
            <ve-line :data="chartData1" :settings="chartSettings"></ve-line>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card>
            Different types of goods
            <ve-histogram :data="chartData2" :settings="histogramSettings"></ve-histogram>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      user: '',
      chartSettings: {
        metrics: ["登入人数"],
        dimension: ["日期"],
      },
      histogramSettings: {
        dataOrder: true,
      },
      chartData1: {
        columns: ["日期", "登入人数"],
        rows: [
          {日期: "1/1", 登入人数: 2530},
          {日期: "1/2", 登入人数: 3530},
          {日期: "1/3", 登入人数: 2923},
          {日期: "1/4", 登入人数: 1723},
          {日期: "1/5", 登入人数: 3792},
          {日期: "1/6", 登入人数: 4593},
          {日期: "1/7", 登入人数: 4593},
          {日期: "1/8", 登入人数: 4593},
          {日期: "1/9", 登入人数: 1593},
          {日期: "1/10", 登入人数: 1493},
          {日期: "1/11", 登入人数: 1593},
          {日期: "1/12", 登入人数: 4593},
        ],
      },
      chartData2: {
        columns: ["分区", "数量"],
        rows: [
          {"分区": "居家", "数量": 93},
          {"分区": "化妆品", "数量": 30},
          {"分区": "书本", "数量": 23},
          {"分区": "数码", "数量": 23},
          {"分区": "文具", "数量": 32},
          {"分区": "衣物", "数量": 42},
        ],
      },
    };
  },
  mounted() {
    this.user = this.$store.state.user
  },
  methods: {
    funding() {
      this.$router.push("/money")
    },
    active() {
      this.$router.push("/commAdmin")
    },
    table() {
      this.$router.push("/accounts")
    },
    organizeTable() {
      this.$router.push("/commAdmin")
    }
  }
};
</script>

<style scoped>
.card-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.clearfix span {
  cursor: pointer;
}
</style>
