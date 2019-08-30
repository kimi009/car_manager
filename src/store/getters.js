const getters = {
  barActive: state => state.carRental.barActive,
  linkActive: state => state.carRental.linkActive,
  finished: state => state.carRental.finished,
  anomaly: state => state.carRental.anomaly,
  bill: state => state.carRental.bill,
  showAgreement: state => state.carRental.showAgreement,
  leaseInfo: state => state.carRental.leaseInfo,
  fileData: state => state.certificate.fileData,
  userInfo: state => state.user.userInfo,
  isSign: state => state.user.isSign, // 用户是否签约
  tabbarActive: state => state.tabbar.tabbarActive,
  tabbarShow: state => state.tabbar.tabbarShow,
  availableBalance: state => state.account.availableBalance, // 账户余额
  oilBalance: state => state.account.oilBalance, // 油费余额
  myIncomeData: state => state.rent.myIncomeData, // 租金收益
  currentPage: state => state.common.currentPage
}

export default getters
