const http = require('http')
const request = require('request')
const fs = require('fs')
// function getfileByUrl(url, fileName, dir) {
//   console.log('------------------------------------------------')
//   console.log(url)
//   console.log(fileName)
//   console.log(dir)
//   let stream = fs.createWriteStream(path.join(dir, fileName))
//   request(url)
//     .pipe(stream)
//     .on('close', function (err) {
//       console.log('文件' + fileName + '下载完毕')
//     })
// }

// function randomString(e) {
//   e = e || 32
//   var t = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678',
//     a = t.length,
//     n = ''
//   for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a))
//   return n
// }

// const type = item.type === 'photo' ? '.jpg' : '.mp4'
// getfileByUrl(item.full, `${randomString(6)}${type}`, './baby_misa')
const oldArrJson = fs.readFileSync('./baby_misa.json', 'utf8')
const oldArr = JSON.parse(oldArrJson)
const newArr = oldArr.filter(item => item.type !== 'video')
console.log('newArr length', newArr.length)
const res = fs.writeFileSync('./final.json', JSON.stringify(newArr))
