
function intersectSets(setA, setB) {
    let intersection = new Set();
    for (let elem of setB) {
        if (setA.has(elem)) {
            intersection.add(elem);
        }
    }
    return intersection;
}

function isSuperset(setA, subset) {
    for (let elem of subset) {
        if (!setA.has(elem)) {
            return false;
        }
    }
    return true;
}

function unionSet(setA, setB) {
    let union = new Set(setA);
    for (let elem of setB) {
        union.add(elem);
    }
    return union;
}

function differenceSet(setA, setB) {
    let difference = new Set(setA);
    for (let elem of setB) {
        difference.delete(elem);
    }
    return difference;
}

function checkDuplicates(arr) {
    let mySet = new Set(arr);
    return mySet.size < arr.length;
}

function uniqueList(arr1, arr2) {
    let mySet = new Set(arr1.concat(arr2));
    return Array.from(mySet);
}

module.exports = { isSuperset, intersectSets, unionSet, differenceSet, checkDuplicates, uniqueList }