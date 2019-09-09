<template>
    <div class="addinvoice">
        <div class="top">
            <div class="row top-li">
                <div>
                    <span>*</span>名称：
                </div>
                <input type="text" v-model="invoiceInfo.Name" @input="componyName" placeholder="请输入企业名称">
                <ul class="componyList" v-show="flag">
                  <li v-for="item in componyList" :key="item.Code" @click="getComponyName">{{item.Name}}</li>
                </ul>
            </div>
            <div class="row">
                <div>默认抬头：</div>
                <div>
                    <van-switch class="switch" v-model="checked" size="20px" active-color="#FF7324"/>
                </div>
            </div>
        </div>
        <div class="from">
            <!-- <div class="title">
                <div class="active">企业</div>
                <div>个人</div>
            </div> -->
            <ul>
                <li>
                    <div>税号：</div>
                    <div>
                        <input type="text" v-model="invoiceInfo.TaxpayerCode" placeholder="请输入纳税人识别号">
                    </div>
                </li>
                <li>
                    <div>公司地址：</div>
                    <div>
                        <input type="text" v-model="invoiceInfo.Address" placeholder="请输入收票公司注册地址">
                    </div>
                </li>
                <li>
                    <div>公司电话：</div>
                    <div>
                        <input type="text" v-model="invoiceInfo.TelPhone" placeholder="请输入收票公司电话号码">
                    </div>
                </li>
                <li>
                    <div>开户银行:</div>
                    <div>
                        <input type="text" v-model="invoiceInfo.BankName" placeholder="请输入公司开户银行">
                    </div>
                </li>
                <li>
                    <div>银行账号:</div>
                    <div>
                        <input type="text" v-model="invoiceInfo.BankAccount" placeholder="请输入收票公司银行账号">
                    </div>
                </li>
                <!-- <li>
                    <div>电子邮箱:</div>
                    <div>
                        <input type="text" placeholder="请输入电子邮箱">
                    </div>
                </li> -->
            </ul>
        </div>
        <!-- <div class="tips">
            <span class="red">*</span>建议全部填写，以便开具增值税专用发票
        </div>
        <div>
            <textarea name="" id="textarea" cols="5" rows="5" placeholder="备注（最多30字）"></textarea>
        </div> -->
        <div class="save-button">
            <van-button type="default" size="large" @click="saveHandle">保存</van-button>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { Switch, Toast, Button } from "vant";
import axios from 'axios';
import debounce from '../../../utils/invoice';
export default {
  name: "addinvoice",
  data() {
    return {
      checked: true,
      invoiceInfo: {
        // Name: "广州湛蓝贸易有限公司",
        // TaxpayerCode: "91440106673484820L",
        // Address: "aa",
        // TelPhone: "aa",
        // BankName: "xx",
        // BankAccount: "123456789",
        // MobilePhone: "15099958116",
        Name: "",
        TaxpayerCode: "",
        Address: "",
        TelPhone: "",
        BankName: "",
        BankAccount: "",
        MobilePhone: "",
      },
      info:[],
      componyList:[],
      flag:false
    };
  },
  components: {
    [Switch.name]: Switch,
    [Toast.name]: Toast,
    [Button.name]: Button
  },

  computed: {
    ...mapGetters([
      'userInfo'
    ]),

  },

  mounted () {
    // createInvoiceTitle
    // this.$api.getCompany({
    //   PartialName:"广州品高软件"
    // }).then(res => {
    //   console.log(res);
    // })
  },

  methods: {
    saveHandle () {
      let tip = {
        Name: '请输入企业名称',
        TaxpayerCode: '请输入纳税人识别号',
        Address: '请输入公司地址',
        TelPhone: '请输入公司电话',
        BankName: '请输入开户银行',
        BankAccount: '请输入银行账号'
      }
      let arr = Object.keys(tip)
      for (let i = 0; i < arr.length; i++) {
        if (!this.invoiceInfo[arr[i]]) {
          Toast({
            message: tip[arr[i]],
            position: 'bottom'
          })
          return
        }
      }

      // 创建发票抬头
      this.$api.createInvoiceTitle({
        Name: this.invoiceInfo.Name,
        TaxpayerCode: this.invoiceInfo.TaxpayerCode,
        Address: this.invoiceInfo.Address,
        TelPhone: this.invoiceInfo.TelPhone,
        BankName: this.invoiceInfo.BankName,
        BankAccount: this.invoiceInfo.BankAccount,
        MobilePhone: this.userInfo.mobile
      }).then(res => {
        console.log('res', res)
        if (res.success) {
          Toast({
            message: '创建成功',
            position: 'bottom'
          })
          this.$router.back()
        } else {
          Toast({
            message: '创建失败',
            position: 'bottom'
          })
        }
      })
    },

    // 获取公司列表
    componyName(event){
      this.flag = true;
      var that = this;
      debounce(() => {
        that.$api.searchInvoiceTitles({
          PartialName:event.target.value
        }).then(res => {
          that.componyList = res.data.Items;
        })
      },300)
    },

    // 获取公司名字
    getComponyName(event){
      this.invoiceInfo.Name = event.target.innerText;
      this.flag = false;
      this.$api.searchInvoiceTitleDetail({
        "Code":event.target.innerText
      }).then(res => {
        this.invoiceInfo.TaxpayerCode = res.data.TaxpayerCode;
        this.invoiceInfo.Address = res.data.Address;
        this.invoiceInfo.TelPhone = res.data.TelPhone;
        this.invoiceInfo.BankName = res.data.BankName;
        this.invoiceInfo.BankAccount = res.data.BankAccount;
        this.invoiceInfo.MobilePhone = res.data.MobilePhone;
      })
    },
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
        position: absolute;
        top: 50%;
        right: 5px;
        transform: translateY(-50%);
      }
    }
    .top-li{
      display: flex;
      align-items: center;
      position: relative;
      & > div:nth-child(1) {
        width: 75px;
      }
      input{
        height: 30px;
      }
      .componyList{
        position: absolute;
        left: 70px;
        top: 46px;
        width: 260px;
        max-height: 200px;
        overflow: auto;
        background: #fff;
        border-left: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        border-right: 1px solid #e6e6e6;
        padding: 0 5px;
        z-index: 1;
        li{
          border-bottom: 1px solid #e6e6e6;
        }
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
  .save-button{
    margin-top: 40px;
  }
}
</style>