const { catsGroupGenerate } = require("./functions");

var myCats = catsGroupGenerate(10);

// Return array with cats

console.log(myCats);

// Return just cat's name

function viewCatsNames() {

  myCats.map(function (catIndex) {
    console.log(catIndex.name);
  });
}

viewCatsNames();

// Return array of oldest male cats

function compareNumericReverse(a, b) {
  return b.age - a.age;
}

function viewCatsOld(n) {

  var reverseCats = myCats.sort(compareNumericReverse);

  let listCatsOld = reverseCats.filter(function (catIndex) {

    return catIndex.gender === "male";
  });

  listCatsOld.length = n;

  return listCatsOld;
}

console.log(viewCatsOld(5));

// Return array of young female cats

function compareNumeric(a, b) {
  return a.age - b.age;
}

function viewCatsYoung(n) {

  var sortCats = myCats.sort(compareNumeric);

  let listCatsYoung = sortCats.filter(function (catIndex) {

    return catIndex.gender === "female";
  });

  listCatsYoung.length = n;

  return listCatsYoung;
}

console.log(viewCatsYoung(5));

module.exports = {

  viewCatsOld,
  viewCatsYoung

};