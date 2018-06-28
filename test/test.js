const { assert } = require('chai');

import {pick} from "../task1";
import {catFactory} from "../task2";
import {catsGroupGenerate} from "../task3";
import {viewCatsNames} from "../task4";
import {viewCatsOld} from "../task4";
import {viewCatsYoung} from "../task4";


describe('Array', function() {

    it('should return random value of array', function(){

        assert(list[Math.floor(Math.random() * list.length)] === "apple" || "banana" || "strawberry" || "strawberries");
    });

    it('should return cat with random values', function(){

        var names = ["Max","Smokey", "Oliver", "Baddie", "Charlie", "Oscar", "Lucie", "Mollie", "Bella", "Sophie", "Lily", "Maggie"];

        var obj = {};

        function catFactory(name) {


                obj.name = name[Math.floor(Math.random() * name.length)];

            return obj;
        }

        assert.property(catFactory(names),  "name");

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

describe('Output cats functions ', function() {

    it("should return cat's name", function() {

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

        function catsGroupGenerate(n) {
            var catsArray = [];
            while(catsArray.length < n) {
                var myCat = catFactory(names, ages, genders, legsCounts, tailLengths);
                catsArray.push (myCat);
            }
            return catsArray;
        }



        function viewCatsNames() {

            var myCats = catsGroupGenerate(5);

            for (catIndex = 0; catIndex < myCats.length; ++catIndex) {
                console.log(myCats[catIndex].name);
            }
        }

        var a = viewCatsNames();

        assert.include(a, "");

    });


    it('should return array of oldest cats', function () {

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

        function catsGroupGenerate(n) {
            var catsArray = [];
            while(catsArray.length < n) {
                var myCat = catFactory(names, ages, genders, legsCounts, tailLengths);
                catsArray.push (myCat);
            }
            return catsArray;
        }

        var myCats = catsGroupGenerate(15);

        function compareNumeric(a, b) {
            return a.age - b.age;
        }

        function viewCatsOld(n) {

            var sortMyCats = [];

            myCats.sort(compareNumeric);
            var reverseCats = myCats.reverse();

            for (var key in reverseCats) if (sortMyCats.length < n && reverseCats[key].gender === "male") {
                sortMyCats.push(reverseCats[key]);
            }

            return sortMyCats;
        }

        // var b = viewCatsOld(5);

        // assert.nestedPropertyVal(viewCatsOld(5), 'gender', 'male')
        // assert.deepInclude(viewCatsOld(5), {gender : "male"});
        assert.includeDeepMembers(viewCatsOld(1), [{gender : "male"}]);

    })

});