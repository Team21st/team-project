<template>
  <div id="cart">
    <market-head head="Cart"></market-head>
    <div>
      <div>
        Select All
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import marketHead from "@/components/Market/marketHead";
import cartCounter from "@/utils/cartCounter";

export default {
  name: "Cart",
  data() {
    return {
      cartList: []
    }
  },
  methods: {
    selectAll() {

    },
    buy() {

    }
  },
  components: {
    marketHead
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
