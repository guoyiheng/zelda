// postedAtPrecise

// type
const fs = require('fs')

for (let index = 1; index <= 5; index++) {
  console.log('index', index)
  const originPath = `./${index}.json`
  try {
    const content = fs.readFileSync(originPath, 'utf8')
    const list = JSON.parse(content).list
    const resultArr = list.map(item => {
      const media = item.media.map(md => {
        return { type: md.type, full: md.full, videoSources: md.videoSources }
      })
      return { media: media }
    })
    let finalArr = []
    for (let index = 0; index < resultArr.length; index++) {
      const element = resultArr[index]
      finalArr = [...finalArr, ...element.media]
    }
    try {
      const oldArrJson = fs.readFileSync('./final.json', 'utf8')
      const finalArrJson = JSON.stringify([...JSON.parse(oldArrJson), ...finalArr])
      console.log('finalArrJson length', JSON.parse(finalArrJson).length)

      const res = fs.writeFileSync('./final.json', finalArrJson)
    } catch (err) {
      console.error(err)
    }
  } catch (err) {
    console.error(err)
  }
}
