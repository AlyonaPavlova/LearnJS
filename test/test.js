const { assert } = require("chai");
const { describe, it } = require("../node_modules/mocha");

const { pick } = require("../functions");
const { catFactory } = require("../functions");
const { catsGroupGenerate } = require("../functions");
const { viewCatsOld } = require("../task4");
const { viewCatsYoung } = require("../task4");
const { nameStats } = require("../task5");
const { catFactoryDef } = require("../task6");

describe("Array", function() {

  it("should return random value of array", function(){

    var arr = ["apple", "banana", "strawberry", "strawberries"];

    assert.isNotEmpty(pick(arr));
  });

  it("should return cat with random value name", function(){

    assert.property(catFactory(), "name");

  });

  it("should return cat with random value age", function(){

    assert.property(catFactory(), "age");

  });

  it("should return cat with random value gender", function(){

    assert.property(catFactory(), "gender");

  });

  it("should return cat with random value legsCount", function(){

    assert.property(catFactory(), "legsCount");

  });

  it("should return cat with random value tailLength", function(){

    assert.property(catFactory(), "tailLength");

  });

  it("should return group cats (n) with random values", function () {

    assert(catsGroupGenerate(5).length === 5);

  });
});

describe("Output cats functions", function() {

  it("should return array of male cats", function () {

    viewCatsOld(10).forEach(function (item) {

      assert(item.gender === "male");
    });
  });

  it("should return array of female cats", function () {

    viewCatsYoung(10).forEach(function (item) {

      assert(item.gender === "female");
    });
  });
});

describe("Object with key:cat's name and value:number of times", function () {

  it("should return not empty object", function () {

    var myCats = catsGroupGenerate(10);

    assert.isNotEmpty(nameStats(myCats));
  });

  it("should return object {Max: 4, Mollie: 1}", function () {

    var myCats = [

      { name: "Max",
        age: 9,
        gender: "female",
        legsCount: 4,
        tailLength: 20 },
      { name: "Max",
        age: 9,
        gender: "male",
        legsCount: 3,
        tailLength: 10 },
      { name: "Max",
        age: 9,
        gender: "female",
        legsCount: 2,
        tailLength: 30 },
      { name: "Max",
        age: 6,
        gender: "male",
        legsCount: 3,
        tailLength: 30 },
      { name: "Mollie",
        age: 2,
        gender: "female",
        legsCount: 4,
        tailLength: 10 } ]
        ;

    assert.deepEqual({Max: 4, Mollie: 1}, nameStats(myCats));
  });
});

describe("Defaults catFactory", function () {

  it("should return object with random values", function () {

    var notDefaults = catFactoryDef();

    assert.isNotEmpty(notDefaults);

  });
});