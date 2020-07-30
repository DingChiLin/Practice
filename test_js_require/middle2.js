const lib = require('./lib')

console.log(lib.hello())

const hello = () => {
  return "Middle 2"
}

module.exports = {
  hello
}
