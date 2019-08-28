import { mapState } from 'vuex'
import config from '@/api/config'
export default {
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },
  methods: {
    sendOpenPageReq(url, params) {
      var temp = document.createElement('form')
      temp.action = url
      temp.method = 'POST'
      temp.enctype = 'multipart/form-data'
      temp.style.display = 'none'
      for (var param in params) {
        var opt = document.createElement('textarea')
        opt.name = param
        opt.value = params[param]
        temp.appendChild(opt)
      }
      document.body.appendChild(temp)
      temp.submit()
    },
    async openPsbInvoiceList() {
      let res = await this.$api.getPsbAccessToken({
        userId: this.userInfo.userId,
        mobilePhone: this.userInfo.mobile
      })
      if (res.success) {
        this.sendOpenPageReq(`${config.psbBaseURL}/Open/View/InvoicesPage`, {
          AccessToken: res.data.accessToken,
          Platform: 'Mobile'
        })
      }
    }
  }
}
