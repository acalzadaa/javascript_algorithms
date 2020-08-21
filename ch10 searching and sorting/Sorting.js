function bubbleSort(array) {
    for (let i = 0, arrayLength = array.length; i < arrayLength; i++) {
        for (let j = 0; j <= i; j++) {
            if (array[i] < array[j]) {
                swap(array, i, j);
            }
        }
    }
    return array;
}

function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

module.exports = { bubbleSort };