let name = 'stone';

function Person(name) {
  this.name = name;
  this.print = function() {
    console.log(this.name);
  }
  this.print2 = () => {
    console.log(this.name);
  }
}

let p1 = new Person("arthur");
console.log(p1)
console.log(p1.name)
console.log(p1.print2)

p1.print()
p1.print2()

let p2 = {
  name: 'molly',
  print: function() {
    console.log(this.name)
  },
  print2: () => {
    console.log(this.name)
  }
}

console.log(p2);
console.log(p2.name);
console.log(p2.print2)
p2.print()
p2.print2()


//-----
console.log('================');

var myObject = {
  name: 'debby',
  myMethod: function () {
    console.log(this.name);
  }
};

myObject.myMethod();
let m = myObject.myMethod
m();
