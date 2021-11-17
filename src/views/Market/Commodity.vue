<template>
  <div class="center" id="commodity">
    <top-search/>
    <commodity-top-info :book-info="bookInfo"/>
    <div style="height: 100px;text-align: right;margin-top: 20px">
      <el-button style="margin-left: 10px">Add to Your Cart</el-button>
      <el-input-number
        style="margin-left: 10px"
        v-model="orderForm.num"
        @change="handleChange"
        :min="1" :max="bookInfo.bookStock"
        label="sss">
      </el-input-number>
      <el-button style="margin-left: 10px" type="primary" size="max">Buy Now</el-button>
    </div>
    <div class="sub-box">
      <h2>Content introduction ···</h2>
      <div>asdasdasdasdqeqwxdasdqwe2e</div>
    </div>
    <div class="sub-box">
      <h2>View other sellers ···</h2>
      <other-seller :book-i-d="bookID"/>
    </div>
    <div class="sub-box">
      <h2>Similar books···</h2>
      <div class="book-list">
        <div class="book-box" v-for="item in 12" :key="item">
          <el-image>
          </el-image>
          <h5>流浪地球</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topSearch from "@/components/Market/topSearch";
import commodityTopInfo from "@/components/Market/commodityTopInfo";
import otherSeller from "@/components/Market/otherSeller";
import {placeOrder, addShoppingCart, queryCommodities} from "@/api/trade";

export default {
  name: "Commodity",
  data() {
    return {
      bookInfo: {},
      bookID: '',
      orderForm: {
        address:'',
        num:1,
        bookNo:this.bookInfo.bookNo,
        consignee:'',
        phone:'',
        price:'',
        sellerNo:this.bookInfo.sellerNo
      },
      cartForm: {}
    }
  },
  mounted() {
    let id = this.$route.query.id
    queryCommodities({
      bookNo: id
    }).then(res => {
      this.bookInfo = res.body.records[0]
    })
  },
  methods: {
    handleChange(value) {
      this.cartForm.num = value
    }
  },
  components: {
    topSearch,
    commodityTopInfo,
    otherSeller
  }
}
</script>

<style scoped lang="less">
#commodity {

  .sub-box {
    margin: 20px 0;

    h2 {
      margin: 5px 0;
      color: #723200;
    }

    .book-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .book-box {
        height: 200px;
        width: 150px;
        text-align: center;
        flex: 1 1 auto;
        padding: 0 10px;

        h5 {
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
