// CommonJS - Every file is a module (by default)
// Modules  - Encapsulate code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils(module)')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

console.log(data.singlerPerson.name)
console.log(names)
sayHi(names.phelonious)

