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

function objViewer(obj) {
    var output = '';
    for (var property in obj) {
        output += property + ': ' + obj[property]+';\r ';
    }
    return output;
}

function catsGroupGenerate(n) {
    var catsArray = [];
    while(catsArray.length < n) {
        var myCat = catFactory(names, ages, genders, legsCounts, tailLengths);
        catsArray.push (myCat);
    }
    return catsArray;
}

var myCats = catsGroupGenerate(3);

for (catIndex = 0; catIndex < myCats.length; ++catIndex) {
    alert(objViewer(myCats[catIndex]));
}
