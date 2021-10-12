import Ut from './index.js'
// ;(async () => {
//   try {
//     let url = 'https://cdn-icons-png.flaticon.com/512/2721/2721272.png'
//     let path = './files/'
//     let r1 = await Ut.downImg(url, path)
//     console.log('r1', r1)
//   } catch (e) {
//     console.log(e)
//   }
// })()
// function dl_Arr() {}
const arr = [
  'https://cdn-icons-png.flaticon.com/512/2721/2721272.png',
  'https://w.wallhaven.cc/full/z8/wallhaven-z8dg9y.png',
  'https://w.wallhaven.cc/full/k7/wallhaven-k7lvxd.jpg',
]
const path = './files/'
Ut.downMediaForArr(arr, path)
