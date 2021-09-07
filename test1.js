const m = require('./test2')

obj1 = m.get()
console.log(obj1) // null

m.init()
obj2 = m.get()
console.log(obj1) // null
console.log(obj2) // {"a":1}
