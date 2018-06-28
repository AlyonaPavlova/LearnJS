const { assert } = require('chai');

const { pick } = require("../functions");
const { catFactory } = require("../functions");
const { catsGroupGenerate } = require("../functions");
const { viewCatsNames } = require("../task4");
const { viewCatsOld } = require("../task4");
const { viewCatsYoung } = require("../task4");

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

describe('Output cats functions ', function() {

    it("should return just cat's name", function() {

        assert.include(viewCatsNames(), []);

    });


    it('should return array of oldest cats', function () {

        // assert.nestedPropertyVal(viewCatsOld(5), 'gender', 'male')
        // assert.deepInclude(viewCatsOld(5), {gender : "male"});
        assert.includeDeepMembers(viewCatsOld(1), [{gender : "male"}]);

    })

});