import user from './user'
import vehicles from './vehicles'
import certificate from './certificate'
import lease from './lease'
import payment from './payment'

export default {
  ...user,
  ...vehicles,
  ...certificate,
  ...lease,
  ...payment
}
