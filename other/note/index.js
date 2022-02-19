const fs = require('fs')
const cheerio = require('cheerio')

/**
 * 标注
 */
// 方法
const replaceHeader = function (note, regex) {
  let result = note
  const regexResult = [...result.matchAll(regex)]
  regexResult.forEach(iterator => {
    result = result.replace(iterator[0], `## ${iterator[1]}`)
  })
  return result
}
const replaceMark = function (note, regex) {
  let result = note
  const regexResult = [...result.matchAll(regex)]
  regexResult.forEach(iterator => {
    result = result.replace(iterator[0], `**${iterator[1]} -${iterator[3]}**`)
  })
  return result
}
const replaceText = function (note, regex) {
  let result = note
  const regexResult = [...result.matchAll(regex)]
  regexResult.forEach(iterator => {
    result = result.replace(iterator[0], `${iterator[1]}`)
  })
  return result
}

function getNote() {
  // 获取html content
  const htmlContent = fs.readFileSync('./src/index.html', { encoding: 'utf-8' })
  // console.log('htmlContent', htmlContent)
  const $ = cheerio.load(htmlContent)
  const bodyContainer = $('.bodyContainer').toString()
  // console.log('bodyContainer', bodyContainer)
  // 替换header
  const regexHeader = /<div class="sectionHeading">(.*)<\/div>/g
  const contentHeader = replaceHeader(bodyContainer, regexHeader)
  // console.log('contentHeader', contentHeader)
  // 替换mark
  const regexMark = /<div class="noteHeading">(.*)(\(.*\)) -(.*)<\/div>/g
  const contentMark = replaceMark(contentHeader, regexMark)
  // console.log('contentMark', contentMark)
  fs.writeFileSync('./jpm.md', contentMark, { encoding: 'utf-8' })

  // // 替换text
  // const regexText = /<div class="noteText">(.*)<\/div>/g
  // const contentText = replaceText(contentMark, regexText)
  // console.log('contentText', contentText)
}
// getNote()

/**
 * 附录
 */
// 方法
const replaceHeaderFulu = function (note, regex) {
  let result = note
  const regexResult = [...result.matchAll(regex)]
  regexResult.forEach(iterator => {
    result = result.replace(iterator[0], `## ${iterator[0]}`)
  })
  return result
}

function getFulu() {
  const fuluString = fs.readFileSync('./src/fulu.md', { encoding: 'utf-8' })
  console.log('fuluString', fuluString)
  // 替换header
  const regexHeader = /第.*回/g
  const contentHeader = replaceHeaderFulu(fuluString, regexHeader)
  console.log(contentHeader)
  fs.writeFileSync('./jpm_fulu.md', contentHeader, { encoding: 'utf-8' })
}
getFulu()
