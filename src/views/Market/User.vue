<template>
  <!--  用户主页-->
  <div id="personal-page">
    <el-row :gutter="40">
      <el-col :span="6">
        <el-menu
          v-model="tags"
          @select="select"
          default-active="0">
          <el-menu-item v-for="(item) in tagsList"
                        :index="item.tag"
                        :key="item.tag">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.label }}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18">
        <el-card style="margin-bottom: 20px">
        <!--          -->
            <el-image
            style="width: 100px; height: 100px; float: left;margin-bottom: 15px"
            :src="userInfo.profileUrl"
            :fit="fit"></el-image>
            <h4 style="display:inline-block;margin-left: 10px;margin-top: 10px">Username:{{userInfo.userName}}</h4>
<!--            <h4 style="display:inline-block;margin-left: 10px;margin-top: 10px">UserNo:{{userInfo.userNo}}</h4>-->
        <!--          -->
        </el-card>
        <el-card>
          <purchase-history v-if="tags==='1'"/>
          <receive-order v-else-if="tags==='2'"/>
          <release-book v-else-if="tags==='3'"/>
          <user-sell-book v-else-if="tags==='4'"/>
          <info v-else/>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import info from "@/components/UserCenter/info";
import purchaseHistory from "@/components/UserCenter/purchaseHistory";
import receiveOrder from "@/components/UserCenter/receiveOrder";
import releaseBook from "@/components/UserCenter/releaseBook";
import userSellBook from "@/components/UserCenter/userSellBook";

export default {
  name: "PersonalCenter",
  data() {
    return {
      tags: 0,
      ImgUrl:'',
      tagsList: [
        {
          icon: 'el-icon-user-solid',
          label: 'Personal Information',
          tag: "0"
        },
        {
          icon: 'el-icon-s-goods',
          label: 'Order History',
          tag: "1"
        },
        {
          icon: 'el-icon-box',
          label: 'Order received',
          tag: "2"
        },
        {
          icon: 'el-icon-upload',
          label: 'Release Book',
          tag: "3"
        },
        {
          icon: 'el-icon-s-claim',
          label: 'My Selling Books',
          tag: "4"
        }
      ],
    }
  },
  methods: {
    select(value) {
      this.tags = value
    }
  },
  components: {
    info,
    purchaseHistory,
    receiveOrder,
    releaseBook,
    userSellBook
  }, computed: {
    ...mapGetters(['userInfo'])
  }
}
</script>

<style scoped lang="less">
#personal-page {
  width: 90%;
  margin: 40px auto;
}
</style>
