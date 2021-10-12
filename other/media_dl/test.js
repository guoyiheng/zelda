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
  // 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
  // 'https://sample-videos.com/video123/mkv/720/big_buck_bunny_720p_20mb.mkv',
  // 'https://cdn-icons-png.flaticon.com/512/2721/2721272.png',
  // 'https://w.wallhaven.cc/full/k7/wallhaven-k7lvxd.jpg',
]
const path = './files/'
Ut.downMediaForArr(arr, path)
