// 数字加千分位符
function numFormat(num) {
  var res = num.toString().replace(/\d+/, function (n) {
    // 先提取整数部分
    return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
      return $1 + ','
    })
  })
  return res
}

function formatNumber(num) {
  return (num + '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,')
}

module.exports = {
  numFormat,
  formatNumber,
}
