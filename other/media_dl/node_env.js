/**
 * @fileoverview Template to compose HTTP reqeuest.
 *
 */
import axios from 'axios'
;(async function () {
  const url = `https://cdn2.onlyfans.com/files/e/eb/eb7d3622cd7a52af5b7a7d8605c02449/960x1707_13e1e6e38881ee9cd23d50075a0bdd3e.jpg?Tag=2&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6XC9cL2NkbjIub25seWZhbnMuY29tXC9maWxlc1wvZVwvZWJcL2ViN2QzNjIyY2Q3YTUyYWY1YjdhN2Q4NjA1YzAyNDQ5XC85NjB4MTcwN18xM2UxZTZlMzg4ODFlZTljZDIzZDUwMDc1YTBiZGQzZS5qcGc~VGFnPTIiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2MzQyOTE2MDJ9LCJJcEFkZHJlc3MiOnsiQVdTOlNvdXJjZUlwIjoiNTIuMTYzLjI0Ny4zMlwvMzIifX19XX0_&Signature=B7-XerDnJDnbzJ6G7L8lCIJxBpv0jUTz6T9IrkudYxu9UC04v5NPR6Z1N8IhWlVC6Mck-okQPBTn~0yVSNyD14CX7I91mVwDEKReC-ryZ1trXD757LKOmT-8p9qNVP8E5U7FNPf8IgF63B4yfRhkBYdprlKebLvbZJccVWYd2nDe~SvKlq3CK3SvGbyGJYzv4LNmBtOhtzfXk8g97X6KQ2U-KusYsPy4VyHRl~Z1i9OGR25FpdEeCC1r~mNKy1BsDlQr5~2kuU1DkemQK2g5FJS1PeESOaoBiSAvVWHVDNBc2MjZBPL0-Ug1o4djZFZ8fjXrA8uV8a2Y04K-LK08Zg__&Key-Pair-Id=APKAJZU4IULC2OKULHGA`
  const method = `GET`
  const headers = {
    Cookie: `st=4828e973e5d38f7e45cfec7bc839cf726e1e30c65849f3e801307769f8fa13d3; ref_src=; csrf=Hncj9YDk58e6978b55e73cbe970363f58ab09da4; fp=e74959c22982e270bbb32d985bc38eb4; auth_id=130683609; sess=ujdjd4ca37eqd2574b3fppl2ie`,
    Accept: `image/webp,image/png,image/svg+xml,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5`,
    Connection: `keep-alive`,
    Referer: `https://onlyfans.com/`,
    'Accept-Encoding': `gzip, deflate, br`,
    Host: `cdn2.onlyfans.com`,
    'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 15_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1`,
    'Accept-Language': `zh-CN,zh-Hans;q=0.9`,
  }
  const body = ``

  const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body,
  }

  try {
    const response = await axios(myRequest)
    console.log('response', response)
  } catch (error) {
    console.log('error', error)
  }
})()
