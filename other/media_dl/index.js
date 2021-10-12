import got from 'got'
import stream from 'stream'
import { promisify } from 'util'
import fs from 'fs'
import mime from 'mime-types'
const pipeline = promisify(stream.pipeline)

class Ut {
  /**
   *  下载网络媒体资源
   * @param {object} url 媒体url
   * @param {string} path 保存位置
   */
  static async downMedia(url = '', path = '') {
    // 截取urlpath最后一段
    const urlSplitResult = url.split('/')
    const name = urlSplitResult[urlSplitResult.length - 1]

    // 如果包含.就直接下载，不包含先请求格式
    let fullName
    if (!name.includes('.')) {
      const response = await got.get(url)
      const suffix = mime.extension(response.headers['content-type'])
      fullName = name + '.' + suffix
    } else {
      fullName = name
    }
    console.log('media fullName:', fullName)
    return await pipeline(got.stream(url), fs.createWriteStream(path + fullName))
  }
  /**
   *  下载数组url
   * @param {object} urlArr 媒体url数组
   * @param {string} path 保存位置
   */
  static downMediaForArr(urlArr, path) {
    for (let index = 0; index < urlArr.length; index++) {
      const urlItem = urlArr[index]
      this.downMedia(urlItem, path)
    }
  }
}
export default Ut
