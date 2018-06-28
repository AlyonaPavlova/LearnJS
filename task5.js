const { catsGroupGenerate } = require("./functions");

var myCats = catsGroupGenerate(10);

function nameStats(list) {

    var catsName = {};

    list.forEach( function (item) {

        if (item.name in catsName) {
            catsName[item.name] += 1;
        }
        else {
            catsName[item.name] = 1;
        }
    });

    return catsName;
}

console.log(nameStats(myCats));

module.exports = {

    nameStats
};