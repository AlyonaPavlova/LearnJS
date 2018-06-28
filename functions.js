function pick(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function catFactory() {

    var obj = {
        name: pick(["Max","Smokey", "Oliver", "Baddie", "Charlie", "Oscar", "Lucie", "Mollie", "Bella", "Sophie", "Lily", "Maggie"]),
        age: pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
        gender: pick(["female", "male"]),
        legsCount: pick([1, 2, 3, 4]),
        tailLength: pick([10, 20, 30])
    };
    return obj;
}

function catsGroupGenerate(n) {

    var catsArray = [];

    while(catsArray.length < n) {
        var myCat = catFactory();
        catsArray.push(myCat);
    }
    return catsArray;
}

module.exports = {

    pick,
    catFactory,
    catsGroupGenerate
};