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
              <el-form-item label="college :">
                <span>{{ this.user.college ? this.user.college : 'unkonwn' }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Root:">
                <span>{{ this.user.userRoot }}</span>
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
            <div style="font-size: 30px;color: #515a6e">{{ this.user.totalUserNum }}</div>
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
            <div style="font-size: 30px;color: #515a6e">{{ this.user.totalOrderNum }}</div>
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
              <div style="font-size: 30px;color: #515a6e">{{ this.user.totalBookNum }}</div>
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
            <div style="color: #6190e8;font-size: 30px">{{ this.user.totalSales }}</div>
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
import {administratorHomepageDisplay} from "@/api/admin";

export default {
  name: "Dashboard",
  data() {
    return {
      user: {},
      chartSettings: {
        metrics: ["Login numbers"],
        dimension: ["日期"],
      },
      histogramSettings: {
        dataOrder: true,
      },
      chartData1: {
        columns: ["日期", "Login numbers"],
        rows: [
          {日期: "12/1", "Login numbers": 2530},
          {日期: "12/2", "Login numbers": 3530},
          {日期: "12/3", "Login numbers": 2923},
          {日期: "12/4", "Login numbers": 1723},
          {日期: "12/5", "Login numbers": 3792},
          {日期: "12/6", "Login numbers": 4593},
          {日期: "12/7", "Login numbers": 4593},
          {日期: "12/8", "Login numbers": 4593},
          {日期: "12/9", "Login numbers": 1593},
          {日期: "12/10", "Login numbers": 1493},
          {日期: "12/11", "Login numbers": 1593},
          {日期: "12/12", "Login numbers": 4593},
        ],
      },
      chartData2: {
        columns: ["Tags", "Numbers"],
        rows: [
          {"Tags": "文学", "Numbers": 93},
          {"Tags": "艺术", "Numbers": 30},
          {"Tags": "科幻", "Numbers": 23},
          {"Tags": "哲学", "Numbers": 23},
          {"Tags": "历史", "Numbers": 32},
          {"Tags": "人文", "Numbers": 42},
        ],
      },
    };
  },
  created() {
  },
  mounted() {
    this.user = this.$store.state.user
    this.getData()
  },
  methods: {
    getData() {
      administratorHomepageDisplay({}).then(res => {
        console.log(res)
        this.user = res.body
      })
    },
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
