const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

const lastCat = ["Broom"]
function appendCat() {
    const cats2 = [...cats, ...lastCat];
    return cats2;
}

const firstCat = ["Arnold"]
function prependCat() {
    const cats3 = [...firstCat, ...cats];
    return cats3;
} 

function removeLastCat() {
    const last = cats.slice(0, 2);
    return last;
}

function removeFirstCat() {
    const first = cats.slice(1, 3);
    return first;
}