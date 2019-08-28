/* 电话号码验证 */
export function validatePhone (str) {
  const reg = /^1[3456789]\d{9}$/
  return reg.test(str)
}

/* 验证码验证 */
export function validateCode (str) {
  const reg = /^[A-Za-z0-9]{1,}$/
  return reg.test(str)
}

/* 整数验证 */
export function validateInteger (str) {
  const reg = /^[0-9]*[1-9][0-9]*$/
  return reg.test(str)
}
