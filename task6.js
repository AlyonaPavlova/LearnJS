const { pick } = require("./functions");

function catFactoryDef(defaults={}) {

  var obj = {
    name: defaults.name || pick(["Max","Smokey", "Oliver", "Baddie", "Charlie", "Oscar", "Lucie", "Mollie", "Bella", "Sophie", "Lily", "Maggie"]),
    age: defaults.age || pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    gender: defaults.gender || pick(["female", "male"]),
    legsCount: defaults.legsCount || pick([1, 2, 3, 4]),
    tailLength: defaults.tailLength || pick([10, 20, 30])
  };
  return obj;
}

function catsGroupGenerate(n, defaults) {

  var catsArray = [];

  while(catsArray.length < n) {
    var myCat = catFactoryDef(defaults);
    catsArray.push(myCat);
  }
  return catsArray;
}

console.log(catsGroupGenerate(10));

module.exports = {

  catFactoryDef
};