import fs from 'fs'
import util from 'util'
import movingAverage from './functions/movingAverage.js'

const readFile = util.promisify(fs.readFile);

const inputPath = './Electric_Production.csv'
const outputPath = (i = 0) => `./export/export${i}.txt`

const data = []

const file = await readFile(inputPath, 'utf8')

JSON.stringify(file)
  .split("\\r\\n")
  .slice(1)
  .forEach(x => data.push(x.split(',')))

const ma = movingAverage(data.map(x => x[1]), 31)

fs.writeFile(outputPath(1), [...new Array(31).fill(0), ...ma].map((x, i) => [i, x].join('\t')).join('\n'), 'utf8', e => {if(e) console.log(e)})
fs.writeFile(outputPath(0), data.map((_, i) => [i, data[i][1]].join('\t')).join('\n'), 'utf8', e => {if(e) console.log(e)})