<template>
  <div class="CarAgreement">
    <van-popup v-model="show" class="popup" @close="closeHandle" :close-on-click-overlay="false">
      <div class="container">
        <h3 class="title">租车协议-个人</h3>
        甲方（承租方）：{{info.enterpriseName}}<br/>
        乙方（出租方）：{{info.employeeName}} - {{info.idNumber}}<br/><br/>

        根据《中华人民共和国合同法》等法律法规的有关规定，双方在平等自愿的基础上，经充分协商就汽车租赁事宜达成如下协议，供双方共同恪守。<br/><br/>

        一、车辆信息<br/>
        甲方租用乙方的车型为：{{info.vehicleModel}}<br/>
        车牌号：{{info.licensePlate}}<br/>
        车架号：{{info.frameNum}}<br/>
        发动机号：{{info.engineNum}}<br/><br/>

        二、租赁期限及租金<br/>
        租赁期为一年，到期后如甲方需续租，本协议条款继续有效。按照租赁期内甲方实际使用车辆的天数计算租金，日租金按甲乙双方确认的租金费率表计算，凭增值税发票按月支付，先租用后付费。<br/><br/>

        三、甲方的权利<br/>
        1．按合同的约定拥有租赁车辆使用权和对指定方的转租权，甲方在取得乙方同意的情况下可将车辆转租给指定方。<br/>
        2．有权获知有关车辆的一切信息包括但不限于车辆产权、抵押、租赁以及保证安全驾驶所需的车辆信息技术性能状况等信息。<br/><br/>

        四、甲方的义务<br/>
        1．按协议约定支付租金及其他费用。<br/>
        2．按车辆性能、操作规程及相关法律、法规的规定使用租赁车辆。<br/>
        3．妥善保管租赁车辆。未经乙方允许，不得擅自修理车辆，不得擅自改装、更换、增设他物。<br/>
        4．提醒乙方按规定期限对租赁车辆进行车检及维修保养。<br/>
        5．保护乙方车辆所有权不受侵犯。不得转卖、抵押、质押、典当车辆。<br/>
        6．在接到租赁车辆发生交通事故、被盗抢时，应立即携同用车人向公安、交管等部门报案并在24小时内通知乙方，并协助乙方办理相关手续。<br/>
        7．租赁期满，应按时返还租赁车辆及相关有效证件。<br/><br/>

        五、乙方的权利<br/>
        1．拥有租赁车辆所有权。<br/>
        2．依协议向甲方计收租金及约定费用。<br/><br/>

        六、乙方的义务<br/>
        1．向甲方交付技术状况良好的租赁车辆，以及租赁车辆行驶所需的有效证件，包括但不限于车辆行驶证、车辆保险单和车主身份证复印件。<br/>
        2．交接租赁车辆时如实提供车辆各项信息，不得虚假告知、故意隐瞒或有任何重大遗漏，否则应承担由此引起的一切责任。<br/>
        3．对所获得的承租方信息负有保密义务。<br/>
        4. 在租赁期内（包括甲方实际使用车辆和未实际使用车辆的期间），乙方不可再将车辆转租其他方。<br/>
        5.企业未及时、足额支付车辆租赁费用，该协议暂停执行。企业足额支付车辆租赁费用后，该协议恢复执行。<br/><br/>

        七、意外风险<br/>
        1．乙方首次将车辆出租给甲方时，车辆由乙方自行购买保险，包括但不限于第三者强制险、车损险和不低于50万元的第三者责任险。如在承租期间发生意外，甲方和驾驶人协助乙方向保险公司进行申请理赔。如超过保险理赔金额的损失，按照过错责任进行承担。<br/>
        2. 租赁期限内，车辆保险到期的，可由甲方作为投保人为车辆购买保险，保险受益人为乙方。<br/>
        3．甲方可视情对承租车辆进行投保，相关保费由甲方自行承担。<br/>
        4.政府政策重大变化、不可抗力以及其他无法归究于甲、乙双方的原因造成的损失，依照有关法规和公平原则双方协商解决。<br/><br/>

        八、乙方的违约责任<br/>
        乙方未能履行向甲方提供协议约定的车辆、服务等义务时应承担下列违约责任：<br/>
        1．经专业检测机构认定租赁车辆达不到一级标准的，甲方有权解除协议，并要求乙方承担违约责任。<br/>
        2．因乙方原因造成车辆信息不对称，给租赁使用造成损失的，乙方应严格依照相关约定修复并保持车辆使用信息安全，除此之外乙方还需要承担因此而带来的赔偿责任。<br/><br/>

        九、甲方的违约责任<br/>
        甲方不能按协议约定支付费用、使用租赁车辆、保管租赁车辆、归还租赁车辆时，应承担下列违约责任：<br/>
        1．逾期支付租金的，每逾期一日按应交租金总额的0.05%交纳滞纳金，滞纳金的计算以应交租金总额为限。<br/>
        2．甲方有下列行为的，乙方有权解除协议并收回租赁车辆：<br/>
        （1）提供虚假信息。<br/>
        （2）拖欠租金或其他费用。<br/>
        （3）转卖、抵押、质押、典当租赁车辆或确有证据证明存在上述危险的。<br/>
        （4）确有证据证明甲方利用租赁车辆从事违法犯罪活动的。<br/>
        3．不按车辆性能或操作程序使用而造成的租赁车辆修理、停运损失；承担因过失被保险公司拒绝赔偿的损失。<br/>
        4．擅自改装、更换、增设他物等改变租赁车辆原状造成的损失。<br/>
        5．未提醒乙方按时参加车辆年检而造成的损失。<br/>
        6．非乙方原因导致车辆被第三方扣押的责任。<br/><br/>

        十、其他约定<br/>
        1．甲、乙双方可对本协议内容以书面形式予以增加、细化做为补充条款，但不得违反有关法规及政策规定，不得违反公平原则。补充条款中含有不合理地减轻或免除本协议条款中规定应由出租方承担的责任内容的，仍以本协议为准。<br/>
        2．本协议项下发生的争议，双方应协商解决；协商或调解解决未果的，由甲方所在地有管辖权的法院管辖。<br/>
        <!-- 3．本协议一式两份，甲乙双方各执一份，具有同等法律效力。<br/> -->

        <!-- 甲方（签章）：{{info.employeeName}}<br/>
        法定代表人/委托代理人（签字或盖章）：{{info.legalPerson}}<br/>
        签约日期：<br/>
        乙方（签字或盖章）：{{info.employeeName}}<br/>
        乙方身份证号：{{info.idNumber}}<br/>
        签约日期：<br/> -->
      </div>
    </van-popup>
    <div class="mask" @click="maskHandle" v-if="show"></div>
  </div>
</template>

<script>
import { Row, Col, Button, Toast, Popup } from 'vant'
export default {
  name: 'CarAgreement',

  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button,
    [Toast.name]: Toast,
    [Popup.name]: Popup
  },

  props: {
    show: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      info: {
        // enterpriseName: '企业名称',
        // employeeName: '员工姓名',
        // idNumber: '身份证号',
        // vehicleModel: '车辆型号',
        // licensePlate: '车牌号',
        // frameNum: '车架号',
        // engineNum: '发动机号',
        // legalPerson: '法定代表人',
        // enterpriseId: '7e42d9d153ff3912a42c1a9229e6ba12'
      } // 协议包含信息
    }
  },

  created () {
    this.$api.rentAgreement().then(res => {
      this.info = res.data
    })
  },

  methods:{
    closeHandle () {
      this.$emit('update:show', false)
    },

    maskHandle () {
      this.$emit('update:show', false)
      console.log(111)
    }
  }
}
</script>

<style scoped lang="less">
.CarAgreement{
  .popup{
    width: 300px;
    max-height: 500px;
    margin: 0 auto;
    border-radius: 5px;
    font-size: 12px;
    z-index: 3001 !important;
    .container{
      width: 100%;
      padding-bottom: 58px;
      padding-top: 50px;
      word-wrap: break-word;
      padding: 20px 15px;
      text-align: left;
      .title{
        text-align: center;
        margin-bottom: 20px;
        font-size: 15px;
      }
    }
  }
  .mask{
    .fs;
    position: fixed;
    z-index: 3000;
  }
}
</style>
