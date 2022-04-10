import website from './website.js'
import got from 'got'
import fs from 'fs'

// flat object array
let flatArr = []
website.forEach(i => {
  flatArr = [...flatArr, ...i.children]
})

// 获取返回的文件格式
const url = 'https://favicon.splitbee.io/?url=github.com'
// 下载文件到本地
got.stream(url).pipe(fs.createWriteStream('./flower.png'))
