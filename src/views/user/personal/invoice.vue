<template>
  <div class="invoice">
    <ul class="invoiceUl">
      <li>
        <div class="title">浙江金财共享智能科技有限公司</div>
        <div class="detail">
          <div class="text">税号：YTY67367676735565665</div>
          <div class="right-mark">默认</div>
        </div>
        <div class="icon-right">
          <img src="@/assets/image/user/enterprise.png" alt />
        </div>
      </li>
      <li>
        <div class="title">浙江金财共享智能科技有限公司</div>
        <div class="detail">
          <div class="text">税号：YTY67367676735565665</div>
          <div class="right-mark">默认</div>
        </div>
        <div class="icon-right">
          <img src="@/assets/image/user/enterprise.png" alt />
        </div>
      </li>
    </ul>
    <div class="button">
      <van-button type="default" size="large" @click="$router.push('/user/personal/invoice/addinvoice')">添加</van-button>
    </div>
    <transition :name="$transition" mode="in-out">
          <router-view/>
      </transition>
  </div>
</template>
<script>
import { Button } from "vant";
export default {
  components: {
    [Button.name]: Button
  },
  data() {
    return {};
  }
};
</script>
<style scope lang="less">
.invoice {
  position: fixed;
  height: 100%;
  top: 0%;
  bottom: 0%;
  width: 100%;
  background: rgba(244, 244, 244, 1);
  left: 0%;
  right: 0%;
  z-index: 1;

  .invoiceUl {
    li {
      width: 345px;
      margin: auto;
      background: #fff;
      border-radius: 3px;
      margin-top: 11px;
      padding: 0 15px;
      text-align: left;
      font-size: 15px;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 55px;
        width: 100%;
        height: 1px;
        left: 0%;
        background: rgba(229, 229, 229, 1);
      }
      .title {
        font-size: 15px;
        color: rgba(51, 51, 51, 1);
        height: 55px;
        /* border-bottom: 1px solid rgba(229, 229, 229, 1); */
        line-height: 55px;
      }
      .detail {
        display: flex;
        justify-content: space-between;
        height: 36px;
        line-height: 36px;
        .text {
          font-size: 13px;
        }
        .right-mark {
          width: 44px;
          height: 21px;
          line-height: 21px;
          font-size: 12px;
          border: 1px solid #41b11f;
          color: #41b11f;
          text-align: center;
          margin-top: 8px;
        }
      }
      .icon-right {
        position: absolute;
        top: 0%;
        right: 0;
        img {
          width: 34px;
        }
      }
    }
  }
  .button {
    .wh(345px, 44px);
    margin: 28px auto 0 auto;
    // background: #41b11f;
  }
}
</style>