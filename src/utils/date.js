/**
 * 时间戳转时间
 * @method timestampToTime
 * @param str {String} 1566187112000
 */
export const timestampToTime = function (str) {
  str = parseInt(str)
  let date = new Date(str)
  let y = date.getFullYear()
  let M = date.getMonth() + 1
  let d = date.getDate()
  let h = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds()
  let time = `${dateLayout(y)}-${dateLayout(M)}-${dateLayout(d)} ${dateLayout(h)}:${dateLayout(m)}:${dateLayout(s)}`
  return time
}

/**
 * 
 * @method dateLayout
 */
export const dateLayout = function (str) {
  str = parseInt(str) < 10 ? '0' + str : str
  return str
}
