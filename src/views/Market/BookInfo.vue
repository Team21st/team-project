<template>
  <div id="book-info">
    <top-search/>
    <div class="center">
      <div>

      </div>
      <div>
        <h2>Content introduction ···</h2>
        <div style="margin-top: 10px">
          While the Cultural Revolution was in full swing. The milita
        </div>
      </div>

      <div style="display: flex">
        review:
      </div>

      <div>
        <h2>Reader's comments···</h2>
        <div style="margin: 10px 0">
          <div style="display: flex">
            <el-avatar :size="40">User</el-avatar>
            <div style="line-height: 40px;margin-left: 10px">User Name:</div>
          </div>
          <div style="margin-top: 10px">
            The infinite curve is the abstraction of the universe. One
          </div>
        </div>
      </div>
      <div>
        <h2>View sellers ···</h2>
        <el-card style="margin-top: 10px">
          <div slot="header" style="display: flex;justify-content: space-between">
            <div style="display: flex">
              <el-avatar :size="40" style="margin: 0;padding: 0">User</el-avatar>
              <div style="line-height: 40px;margin: 0 10px">User Name</div>
            </div>
            <el-button style="float: right;margin: 0;" size="mini" icon="el-icon-d-arrow-right" @click="goTo"
                       type="primary">Purchase
            </el-button>
          </div>
          <div>
            书本信息
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import topSearch from "@/components/Market/topSearch";

export default {
  name: "BookInfo",
  data() {
    return {
      commentList: [],
      sellers: [],
    }
  },
  components: {
    topSearch
  },
  methods: {
    goTo() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="less">
#book-info {
  h2 {
    color: #723200;
    margin-top: 20px;
  }
}
</style>
