<template>
  <div id="cart">
    <top-search/>
    <div>
      <div>
      </div>
      <div class="center">
        <el-button type="primary"
                   size="mini">
          Select All
        </el-button>
        <el-card v-for="(item,index) in cartList"
                 :key="index">
          <div v-for="(subItem,subIndex) in item"
               style="margin-top: 10px;display: flex;border-bottom: 2px solid gainsboro"
               :key="subIndex">
            <el-image :src="subItem.bookPicUrl1">
            </el-image>
            <div style="width: 80%">
              <h2>
                {{ subItem.bookName }}
              </h2>
              <h4>
                Price:${{ subItem.bookPrice }}
                <br/>
                Degree:{{ subItem.newOldDegree }}%
              </h4>
            </div>
            <div style="float: right">
              <div style="display: flex">
                <el-input-number v-model="subItem.num" size="mini" :min="1">
                </el-input-number>
                <el-button type="danger"
                           size="mini"
                           style="margin-left: 5px">
                  Delete
                </el-button>
              </div>
            </div>
          </div>
<!--          <el-button @click="buyAll" v-if="index!=1">-->
<!--            Buy All-->
<!--          </el-button>-->
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import topSearch from "@/components/Market/topSearch";
import cartCounter from "@/utils/cartCounter";
import {queryShoppingCart, editShoppingCart, palaceCartOrder} from "@/api/trade"

export default {
  name: "Cart",
  data() {
    return {
      cartList: [],
      orderForm: {
        address: '',
        consignee: '',
        idArray: [],
        phone: ''
      }
    }
  },
  mounted() {
    this.getCart()
  },
  methods: {
    getCart() {
      queryShoppingCart({}).then(res => {
        this.cartList = res.body.cartList
        console.log(res)
      })
    },
    selectAll() {

    },
    buyAll() {
      for (let i = 0; i < this.cartList; i++) {
        for (let j = 0; j < this.cartList; j++) {

        }
      }
    }
  },
  components: {
    topSearch
  },
  watch: {
    cartList() {
      this.cartList.sum = cartCounter(this.cartList)
    }
  }
}
</script>

<style scoped lang="less">
#cart {

}
</style>
