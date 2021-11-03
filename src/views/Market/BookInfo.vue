<template>
  <div id="book-info">
    <top-search/>
    <div class="center">
      <book-info :book-i-d="bookID"/>
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
        <other-seller :book-i-d="bookID"/>
      </div>
    </div>
  </div>
</template>

<script>
import topSearch from "@/components/Market/topSearch";
import bookInfo from "@/components/Market/bookTopInfo";
import otherSeller from "@/components/Market/otherSeller";

export default {
  name: "BookInfo",
  data() {
    return {
      bookID: '',
      commentList: [],
      sellers: [],
    }
  },
  components: {
    topSearch,
    bookInfo,
    otherSeller
  },
  methods: {}
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
