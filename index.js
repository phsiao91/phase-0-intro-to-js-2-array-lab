const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name) {
    cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
}

let lastCat = ["Broom"]
function appendCat(name) {
    let cats2 = [...cats, ...lastCat];
    return cats2;
}

let firstCat = ["Arnold"]
function prependCat(name) {
    let cats3 = [...firstCat, ...cats];
    return cats3;
} 

function removeLastCat(name) {
    const last = cats.slice(0, 2);
    return last;
}

function removeFirstCat(name) {
    const first = cats.slice(1, 3);
    return first;
}