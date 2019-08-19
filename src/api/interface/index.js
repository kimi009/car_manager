import user from './user'
import vehicles from './vehicles'
import certificate from './certificate'
import lease from './lease'

export default {
  ...user,
  ...vehicles,
  ...certificate,
  ...lease
}
