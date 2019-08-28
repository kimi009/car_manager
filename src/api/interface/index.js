import user from './user'
import vehicles from './vehicles'
import certificate from './certificate'
import lease from './lease'
import payment from './payment'
import city from './city'
import wx from './wx'
import invoice from './invoice'
import fund from './fund'
import safe from './safe'

export default {
  ...user,
  ...vehicles,
  ...certificate,
  ...lease,
  ...payment,
  ...city,
  ...wx,
  ...invoice,
  ...fund,
  ...safe
}
