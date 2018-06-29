const { catFactory } = require("./functions");

var newCat = catFactory();

for(let prop in newCat) {

  console.log(prop+":"+newCat[prop]);
}
