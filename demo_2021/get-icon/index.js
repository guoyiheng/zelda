const website = require('./website')
const axios = require('axios')
var FileSaver = require('file-saver')

// flat object array
let flatArr = []
website.forEach(i => {
  flatArr = [...flatArr, ...i.children]
})

// axios.get('https://favicon.splitbee.io/?url=github.com').then(data => {
//   console.log(data.data)
// })
FileSaver.saveAs('https://favicon.splitbee.io/?url=github.com', './image.png')
