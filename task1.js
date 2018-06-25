var list = ["apple", "banana", "strawberry", "strawberries"];

function pick(list) {
    return list[Math.floor(Math.random() * list.length)];
}

alert(pick(list));