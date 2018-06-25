var names = ["Max","Smokey", "Oliver", "Baddie", "Charlie", "Oscar", "Lucie", "Mollie", "Bella", "Sophie", "Lily", "Maggie"];
var ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var genders = ["female", "male"];
var legsCounts = [1, 2, 3, 4];
var tailLengths = [10, 20, 30];



function catFactory(defaults) {

    var nameRand = defaults.name || names[Math.floor(Math.random() * names.length)];
    var ageRand = defaults.age || ages[Math.floor(Math.random() * ages.length)];
    var genderRand = defaults.gender || genders[Math.floor(Math.random() * genders.length)];
    var legsCountRand = defaults.legsCount || legsCounts[Math.floor(Math.random() * legsCounts.length)];
    var tailLengthRand = defaults.tailLength || tailLengths[Math.floor(Math.random() * tailLengths.length)];

    var obj = {
        name: nameRand,
        age: ageRand,
        gender: genderRand,
        legsCount: legsCountRand,
        tailLength: tailLengthRand
    };
    return obj;
}

function objViewer(obj) {
    var output = '';
    for (var property in obj) {
        output += property + ': ' + obj[property]+'; ';
    }
    return output;
}

function catsGroupGenerate(n, defaults) {
    var catsArray = [];
    while(catsArray.length < n) {
        var myCat = catFactory(defaults);
        catsArray.push (myCat);
    }
    return catsArray;
}

var myCats = catsGroupGenerate(10, {gender: "female"});

function viewCatsList() {

    for (catIndex = 0; catIndex < myCats.length; ++catIndex) {
        console.log(objViewer(myCats[catIndex]));
    }
}

viewCatsList();