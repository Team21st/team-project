<template>
  <div id="cart">
    <top-search/>
    <div>
      <div>
        Select All
      </div>
      <div>

      </div>
    </div>
  </div>
</template>

<script>
import topSearch from "@/components/Market/topSearch";
import cartCounter from "@/utils/cartCounter";
import {queryShoppingCart} from "@/api/trade"

export default {
  name: "Cart",
  data() {
    return {
      cartList: []
    }
  },
  mounted() {
    this.getCart()
  },
  methods: {
    getCart(){
      queryShoppingCart({}).then(res=>{
        console.log(res)
      })
    },
    selectAll() {

    },
    buy() {

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
