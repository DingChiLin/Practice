function Dog(name) {
    this.name = name;
    this.species = 'p1';
}

Dog.prototype = {species2: 'p2'}

const dogA = new Dog('aaa');
const dogB = new Dog('bbb');

console.log(dogA.name);
console.log(dogA.species);
console.log(dogA.species2);

Dog.prototype.species2 = '!??'

console.log(dogB.name);
console.log(dogB.species);
console.log(dogB.species2);

console.log(dogB.__proto__.species2);
console.log(Dog.prototype.prototype);