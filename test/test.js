const { assert } = require('chai');

describe('Array', function() {

    it('should return random value of array', function(){

        var list = ["apple", "banana", "strawberry", "strawberries"];

        assert(list[Math.floor(Math.random() * list.length)] === "apple" || "banana" || "strawberry" || "strawberries");
    });

    it('should return cat with random values', function(){

        var names = ["Max","Smokey", "Oliver", "Baddie", "Charlie", "Oscar", "Lucie", "Mollie", "Bella", "Sophie", "Lily", "Maggie"];

        var obj = {};

        function catFactory(name) {


                obj.name = name[Math.floor(Math.random() * name.length)];

            return obj;
        }

        assert.include(catFactory(names),  /^name/);

    });

    it('should return group cats (n) with random values', function () {

        var names = ["Max","Smokey", "Oliver", "Baddie", "Charlie", "Oscar", "Lucie", "Mollie", "Bella", "Sophie", "Lily", "Maggie"];
        var ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var genders = ["female", "male"];
        var legsCounts = [1, 2, 3, 4];
        var tailLengths = [10, 20, 30];

        function catFactory(name, age, gender, legsCount, tailLength) {

            var nameRand = name[Math.floor(Math.random() * name.length)];
            var ageRand = age[Math.floor(Math.random() * age.length)];
            var genderRand = gender[Math.floor(Math.random() * gender.length)];
            var legsCountRand = legsCount[Math.floor(Math.random() * legsCount.length)];
            var tailLengthRand = tailLength[Math.floor(Math.random() * tailLength.length)];

            var obj = {
                name: nameRand,
                age: ageRand,
                gender: genderRand,
                legsCount: legsCountRand,
                tailLength: tailLengthRand
            };
            return obj;
        }

        var catsArray = [];
        function catsGroupGenerate(n) {

            while(catsArray.length < n) {
                var myCat = catFactory(names, ages, genders, legsCounts, tailLengths);
                catsArray.push (myCat);
            }
            return catsArray;
        }

        catsGroupGenerate(5);

        assert(catsArray.length === 5);

    });

});