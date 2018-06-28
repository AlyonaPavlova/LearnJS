const { assert } = require('chai');

const { pick } = require("../functions");
const { catFactory } = require("../functions");
const { catsGroupGenerate } = require("../functions");
const { viewCatsNames } = require("../task4");
const { viewCatsOld } = require("../task4");
const { viewCatsYoung } = require("../task4");
const { nameStats } = require("../task5");

describe('Array', function() {

    it('should return random value of array', function(){

        var arr = ["apple", "banana", "strawberry", "strawberries"];

        assert(pick(arr) === "apple" || "banana" || "strawberry" || "strawberries");
    });

    it('should return cat with random values', function(){

        assert.property(catFactory(),  "name" && "age" && "gender" && "legsCount" && "tailLength");

    });

    it('should return group cats (n) with random values', function () {

        assert(catsGroupGenerate(5).length === 5);

    });
});

describe('Output cats functions', function() {

    it("should return just cat's name", function() {

        assert.include(viewCatsNames(), "Max" || "Bella" || "Smokey" || "Oscar");

    });

    it('should return array of male cats', function () {

        viewCatsOld(10).forEach(function (item) {

                assert(item.gender === "male");
        });
    });

    it('should return array of female cats', function () {

        viewCatsYoung(10).forEach(function (item) {

                assert(item.gender === "female");
        });
    });
});

describe("Object with key:cat's name and value:number of times", function () {

    it('should return not empty object', function () {

        var myCats = catsGroupGenerate(10);

        assert.notEmpty(nameStats(myCats));
    });

    it('should return not empty object', function () {

        var myCats = catsGroupGenerate(10);

        assert.notEmpty(nameStats(myCats));
    });
});