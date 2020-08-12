function insertion(...value) {
    let array1 = [];
    for (let i in value) {
        array1.push(value[i]);
    }
    return array1.length;
}

function deletion_pop(arrays) {
    return arrays.pop();
}

function deletion_shift(arrays) {
    return arrays.shift();
}

function access(arrays, index) {
    return arrays[index];
}

module.exports = { insertion,deletion_pop, deletion_shift, access };