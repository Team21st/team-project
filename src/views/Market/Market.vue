<template>
  <div id="market">
    <Bars></Bars>
    <router-view></router-view>
  </div>
</template>

<script>
import Bars from "@/components/Market/bars";

export default {
  name: "HomePage",
  data() {
    return {}
  },
  components: {
    Bars
  }
}
</script>

<style scoped>

</style>
