//file module
//synchronous

const {readFileSync, writeFileSync} = require('fs')

//same as...
//const read = require('fs')
//fstat.read

//reading files
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log(first, second)

//writes to file. creates files if not there, overwrites file contest
//to append to file contets add and a flag. {flag: 'a'}
writeFileSync('./content/result-sync.txt',`Here is the reult ${first}, ${second}` )
const read = readFileSync('./content/result-sync.txt', 'utf8')

console.log(read)