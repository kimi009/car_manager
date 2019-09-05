<template>
    <div class="addinvoice">
        <div class="top">
            <div class="row">
                <div>
                    <span>*</span>名称：
                </div>
                <div>金财互联数据服务有限公司</div>
            </div>
            <div class="row">
                <div>默认抬头：</div>
                <div>
                    <van-switch class="switch" v-model="checked" active-color="#FF7324"/>
                </div>
            </div>
        </div>
        <div class="from">
            <div class="title">
                <div class="active">企业</div>
                <div>个人</div>
            </div>
            <ul>
                <li>
                    <div>税号：</div>
                    <div>
                        <input type="text" placeholder="请输入纳税人识别号">
                    </div>
                </li>
                <li>
                    <div>公司地址：</div>
                    <div>
                        <input type="text" placeholder="请输入收票公司注册地址">
                    </div>
                </li>
                <li>
                    <div>公司电话：</div>
                    <div>
                        <input type="text" placeholder="请输入收票公司电话号码">
                    </div>
                </li>
                <li>
                    <div>开户银行:</div>
                    <div>
                        <input type="text" placeholder="请输入公司开户银行">
                    </div>
                </li>
                <li>
                    <div>银行账号:</div>
                    <div>
                        <input type="text" placeholder="请输入收票公司银行账号">
                    </div>
                </li>
                <li>
                    <div>电子邮箱:</div>
                    <div>
                        <input type="text" placeholder="请输入电子邮箱">
                    </div>
                </li>
            </ul>
        </div>
        <div class="tips">
            <span class="red">*</span>建议全部填写，以便开具增值税专用发票
        </div>
        <div>
            <textarea name="" id="textarea" cols="5" rows="5" placeholder="备注（最多30字）"></textarea>
        </div>
        <div class="save-button">
            <van-button type="default" size="large">保存</van-button>
        </div>
    </div>
</template>
<script>
import { Switch, Button } from "vant";
export default {
  name: "addinvoice",
  data() {
    return {
      checked: true
    };
  },
  components: {
    [Switch.name]: Switch,
    [Button.name]: Button
  }
};
</script>
<style scope lang="less">
.addinvoice {
  position: fixed;
  height: 100%;
  top: 0%;
  bottom: 0%;
  width: 100%;
  background: rgba(244, 244, 244, 1);
  left: 0%;
  right: 0%;
  z-index: 1;
  padding: 0 15px;
  .red {
    color: #f73737;
  }
  .top {
    background: #fff;
    margin: 11px 0;
    font-size: 15px;
    text-align: left;
    color: #666666;
    padding: 0 15px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 45px;
      left: 0;
      width: 100%;
      height: 1px;
      background: #e5e5e5;
    }

    > div {
      display: flex;
      height: 46px;
      line-height: 46px;
      position: relative;
      span {
        color: #f73737;
      }
      .row > div:nth-child(1) {
        width: 83px;
      }
      .switch {
        width: 51px;
        height: 31px;
        line-height: 31px;
        position: absolute;
        top: 5px;
        right: 5px;
      }
    }
  }
  .from {
    background: #fff;
    border-radius: 3px;
    .title {
      display: flex;
      font-size: 15px;
      height: 47px;
      line-height: 47px;
      color: #333333;
      justify-content: center;
      .active {
        border-bottom: 1px solid #ff7324;
      }
      div {
        width: 53px;
        text-align: center;
        margin: 0 28px;
      }
    }
    ul {
      li {
        display: flex;
        font-size: 15px;
        padding: 0 15px;
        height: 46px;
        line-height: 46px;
        border-top: 1px solid #e5e5e5;
        > div:nth-child(1) {
          width: 75px;
          text-align: left;
        }
        input {
          height: 30px;
        }
      }
    }
  }
  .tips {
    margin: 12px 15px;
    font-size: 12px;
    text-align: left;
    color: #666666;
  }
  #textarea {
    font-size: 15px;
    width: 100%;
    padding: 13px 15px;
    margin-bottom: 19px;
    &::placeholder {
      color: #c7c7cc;
    }
    &::-webkit-placeholder {
      color: #c7c7cc;
    }
  }
}
</style>