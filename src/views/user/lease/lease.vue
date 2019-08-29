<template>
  <div class="lease">
    <div>
      <van-list
        v-model="userLease.loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="initList"
      >
        <div
          class="column"
          v-for="(item,index) in leaseList"
          :key="index"
          @click="$router.push({path:'/user/lease/detail',query:{rentId:item.rentId}})"
        >
          <!-- <van-row type="flex" class="item">
            <van-col span="8">租约编号：</van-col>
            <van-col span="16">{{item.rentId}}</van-col>
          </van-row> -->
          <van-row type="flex" class="item">
            <van-col span="8">租车公司名称：</van-col>
            <van-col span="16">{{item.carRentalCompany}}</van-col>
          </van-row>
          <van-row type="flex" class="item">
            <van-col span="8">车牌号：</van-col>
            <van-col span="16">{{item.licensePlate}}</van-col>
          </van-row>
          <!-- <van-row type="flex" class="item">
            <van-col span="8">租赁期限：</van-col>
            <van-col span="16">{{item.startDate}}{{item.startDate===''?'':'~'}}{{item.endDate}}</van-col>
          </van-row> -->
          <van-row type="flex" class="item">
            <van-col span="8">月租金：</van-col>
            <van-col span="16">{{item.monthlyRent}}</van-col>
          </van-row>
          <div class="state active">{{item.rentState}}</div>
          <img class="arrow-right" src="../../../assets/image/common/arrow-right.png" alt />
        </div>
      </van-list>
    </div>
    <transition :name="$transition" mode="in-out">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { Row, Col, Button, Toast, List } from "vant";
import { mapState } from "vuex";
export default {
  name: "lease",
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button,
    [Toast.name]: Toast,
    [List.name]: List
  },

  data() {
    return {
      size: 6
    };
  },
  methods: {
    initList() {
      this.$store.dispatch('initleaseList', {
        size: this.size,
        current: this.page
      })
    }
  },
  created() {
    if (this.leaseList.length > 0) return
    this.initList()
  },
  computed: {
    ...mapState({
      leaseList: state => state.userLease.leaseList || [],
      page: state => state.userLease.page || 1,
      userLease: state => state.userLease || false,
      finished: state => state.userLease.finished || false
    })
  }
};
</script>

<style scoped lang="less">
.lease {
  .fs;
  position: fixed;
  background-color: #f4f4f4;
  padding: 11px 15px 16px 15px;
  overflow: auto;
  .column {
    height: auto;
    font-size: 15px;
    background-color: #fff;
    border-radius: 3px;
    margin-bottom: 10px;
    padding: 10px 15px 10px 15px;
    position: relative;
    .item {
      height: 28px;
      line-height: 28px;
      div:nth-child(1) {
        text-align: right;
        color: #666;
      }
      div:nth-child(2) {
        text-align: left;
        color: #333;
        padding-left: 10px;
      }
    }
    .state {
      font-size: 13px;
      color: #666;
      position: absolute;
      top: 14px;
      right: 13px;
    }
    .active {
      color: #ff7426;
    }
    .arrow-right {
      height: 10px;
      position: absolute;
      top: 50%;
      right: 13px;
      margin-top: -5px;
    }
  }
}
</style>
