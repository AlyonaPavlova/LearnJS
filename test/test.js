var assert = require('assert');

describe('Array', function() {

    it('should return random value of array', function(){

        var list = ["apple", "banana", "strawberry", "strawberries"];

        assert(list[Math.floor(Math.random() * list.length)] === "apple" || "banana" || "strawberry" || "strawberries");
    });

    it('should return cat with random values', function(){

        function catFactory(name, age, gender, legsCount, tailLength) {

            var obj = {
                name: name,
                age: age,
                gender: gender,
                legsCount: legsCount,
                tailLength: tailLength
            };
            return obj;
        }

        var name = "Max";
        var age = 2;
        var gender = "male";
        var legsCount = 2;
        var tailLength = 2;

        assert.equal(
            {
                name: "Max",
                age: 2,
                gender: "male",
                legsCount: 2,
                tailLength: 2

            }, catFactory(name, age, gender, legsCount, tailLength));
    });

});







// var names = ["Max","Smokey", "Oliver", "Baddie", "Charlie", "Oscar", "Lucie", "Mollie", "Bella", "Sophie", "Lily", "Maggie"];
// var ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var genders = ["female", "male"];
// var legsCounts = [1, 2, 3, 4];
// var tailLengths = [10, 20, 30];
//
// function catFactory() {
//
//     var obj = {
//         name: names[Math.floor(Math.random() * names.length)],
//         age: ages[Math.floor(Math.random() * ages.length)],
//         gender: genders[Math.floor(Math.random() * genders.length)],
//         legsCount: legsCounts[Math.floor(Math.random() * legsCounts.length)],
//         tailLength: tailLengths[Math.floor(Math.random() * tailLengths.length)]
//     };
//     return obj;
// }
//
// assert(catFactory());