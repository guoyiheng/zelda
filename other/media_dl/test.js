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
  'https://cdn2.onlyfans.com/files/a/a1/a1a95909622201340399b1ade2096504/960x1278_4d8f8042f647b6c0c7b81c96429d0cde.jpg?Tag=2&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6XC9cL2NkbjIub25seWZhbnMuY29tXC9maWxlc1wvYVwvYTFcL2ExYTk1OTA5NjIyMjAxMzQwMzk5YjFhZGUyMDk2NTA0XC85NjB4MTI3OF80ZDhmODA0MmY2NDdiNmMwYzdiODFjOTY0MjlkMGNkZS5qcGc~VGFnPTIiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2MzQxNzg5MTR9LCJJcEFkZHJlc3MiOnsiQVdTOlNvdXJjZUlwIjoiNTIuMTYzLjI0Ny4zMlwvMzIifX19XX0_&Signature=fWjLMAFwk5JLVfIzsdnXOgjF~n0RRmzsO7hoNPkXGxPxvHCVvOdLKzJJ~010o9UR5e7FKSjFgIP4P6P48yrR3Zqf4w~aWvymL~EDUeHNPeuxPMIsIU4LmRy~EHJJ0v9qJp2cRynFMHm7IUI5zE1til-TB6hhVczt4vzAmsFLQ5VK~f5mfbdmdBDqg1e8Z~v6h3hlfd-ydrcDRIU0866BhQwucjpR6LkzAmVeVWL7lZo4v0TSOwk9l2hgI~mePo5iR-SPGXubo3chErcgJd5SjmRqXrnNlaiPKCUQDOhQTjQlDEq8pAymlkpTiX2408PrY3x87glD~zUai6eQScphKA__&Key-Pair-Id=APKAJZU4IULC2OKULHGA',
]
const path = './files/'
const headers = {
  Cookie: `st=4828e973e5d38f7e45cfec7bc839cf726e1e30c65849f3e801307769f8fa13d3; ref_src=https%3A%2F%2Fapi.twitter.com%2F; csrf=Hncj9YDk58e6978b55e73cbe970363f58ab09da4; auth_id=130683609; fp=e74959c22982e270bbb32d985bc38eb4; sess=ujdjd4ca37eqd2574b3fppl2ie`,
  Accept: `image/webp,image/png,image/svg+xml,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5`,
  Connection: `keep-alive`,
  Referer: `https://onlyfans.com/`,
  'Accept-Encoding': `gzip, deflate, br`,
  Host: `cdn2.onlyfans.com`,
  'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 15_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1`,
  'Accept-Language': `zh-CN,zh-Hans;q=0.9`,
}
Ut.downMediaForArr(arr, path, headers)
