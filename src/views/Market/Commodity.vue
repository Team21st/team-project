<template>
  <div class="center" id="commodity">
    <el-dialog
      title="Change Password"
      :visible.sync="dialogVisible"
      width="500px">
      <el-form>
        <el-form-item label="Address">
          <el-input v-model="orderForm.address"></el-input>
        </el-form-item>
        <el-form-item label="consignee">
          <el-input v-model="orderForm.consignee"></el-input>
        </el-form-item>
        <el-form-item label="phone">
          <el-input v-model="orderForm.phone" type="password"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="orderCommodity">确 定</el-button>
      </span>
    </el-dialog>
    <!--    下单对话框-->
    <top-search/>
    <commodity-top-info :book-info="bookInfo"/>
    <div style="height: 100px;text-align: right;margin-top: 20px">
      <el-button style="margin-left: 10px"
                 @click="addToShoppingCart">
        Add to Your Cart
      </el-button>
      <el-input-number
        style="margin-left: 10px"
        v-model="orderForm.num"
        @change="handleChange"
        :min="1" :max="bookInfo.bookStock"
        label="sss">
      </el-input-number>
      <el-button style="margin-left: 10px"
                 type="primary" size="max"
                 :disabled="!userInfo"
                 @click="dialogVisible = true">
        Buy Now
      </el-button>
    </div>
    <div class="sub-box">
      <h2>Content introduction ···</h2>
      <p>
        Because unlikely a person will read a subject all of the books, but also depending on its important and not important to have intensive reading and coarse, choose which, don't choose which should according to individual need and trade-offs, which requires a sharing platform, let us know before you read the contents of a book, gain and loss, read the opinion of the book, etc., In order to be able to better choose to read and purposefully seek out certain books.
      </p>
    </div>
    <div class="sub-box">
      <h2>View other sellers ···</h2>
      <other-seller :other-seller="otherSeller"/>
    </div>
    <div v-if="otherSeller.length===0">
      <el-empty style="margin: auto"></el-empty>
    </div>
    <div class="sub-box">
      <h2>Similar books···</h2>
      <div class="book-list">
        <div class="book-box" v-for="item in similarList" :key="item">
          <el-image>
          </el-image>
          <h5>流浪地球</h5>
        </div>
      </div>
      <div v-if="similarList.length===0">
        <el-empty style="margin: auto"></el-empty>
      </div>
    </div>
  </div>
</template>

<script>
import topSearch from "@/components/Market/topSearch";
import commodityTopInfo from "@/components/Market/commodityTopInfo";
import otherSeller from "@/components/Market/otherSeller";
import {placeOrder, addShoppingCart, queryCommodities} from "@/api/trade";
import {Message} from "element-ui";
import {mapGetters} from "vuex/dist/vuex.mjs";

export default {
  name: "Commodity",
  data() {
    return {
      dialogVisible: false,
      bookInfo: {},
      bookID: '',
      orderForm: {
        address: '',
        num: 1,
        bookNo: '',
        consignee: '',
        phone: '',
        price: '',
        sellerNo: ''
      },
      cartForm: {},
      similarList: [],
      otherSeller: []
    }
  },
  mounted() {
    this.$nextTick(this.getCommodityInfo)
  },
  methods: {
    getCommodityInfo() {
      let id = this.$route.query.id
      if (id.length === 0) {
        this.$message.error('error id')
        this.$router.back()
      }
      queryCommodities({
        bookNo: id
      }).then(res => {
        this.bookInfo = res.body.records[0]
        console.log(this.bookInfo)
      })
    },
    handleChange(value) {
      this.cartForm.num = value
    },
    orderCommodity() {
      this.orderForm.sellerNo = this.bookInfo.sellerNo
      this.orderForm.bookNo = this.bookInfo.bookNo
      placeOrder(this.orderForm).then(res => {
        this.$message.success(res.head.respMsg)
        this.getCommodityInfo()
        this.dialogVisible = false
      })
    },
    queryOtherInfo() {
      queryCommodities({
        querySize: 5,
        sellerName: this.bookInfo.sellerName
      }).then(res => {
        this.similarList = res.body.records
      })
      queryCommodities({
        querySize: 5,
        bookName: this.bookInfo.bookName
      }).then(res => {
        this.otherSeller = res.body.records
      })
    },
    addToShoppingCart() {
      if(this.userInfo){
        addShoppingCart({
          bookNo: this.bookInfo.bookNo,
          num: this.orderForm.num
        }).then(res=>{
          this.$message.success(res.body)
        })
      }else {
        this.$message.error('You need to login!')
      }
    }
  },
  components: {
    topSearch,
    commodityTopInfo,
    otherSeller
  },
  computed: {
    ...mapGetters(['userInfo'])
  }
}
</script>

<style scoped lang="less">
#commodity {
  padding-bottom: 100px;

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
