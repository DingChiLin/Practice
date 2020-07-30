const lib = require('./lib')

console.log(lib.hello())

const hello = () => {
  return "Middle 1"
}

module.exports = {
  hello
}
