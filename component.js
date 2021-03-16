const fs = require('fs')
const componentArr = fs.readdirSync('./src/packages')
const res = componentArr.filter((item)=> !['utils','styles'].includes(item))
const entires = {}
res.map((item) => {
  console.log(item)
  entires[item] = `@/packages/${item}/index.js`
})
module.exports = entires