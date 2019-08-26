'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VN_CONFIG: '"dev"',
  PSB_ROOT:'"http://test.mypsb.cn/api"',
  API_ROOT: '"http://localhost:8081"'
})
